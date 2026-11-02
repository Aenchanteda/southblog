# 可泛化的实时神经解码：混合状态空间模型（POSSM）

**Generalizable, real-time neural decoding with hybrid state-space models**

Avery Hee-Woon Ryoo<sup>1,2,\*,B</sup>, Nanda H Krishna<sup>1,2,\*,B</sup>, Ximeng Mao<sup>1,2,\*,B</sup>, Mehdi Azabou<sup>3</sup>, Eva L Dyer<sup>4</sup>, Matthew G Perich<sup>1,2,†</sup>, Guillaume Lajoie<sup>1,2,5,†,B</sup>

<sup>1</sup> Mila – Quebec AI Institute　<sup>2</sup> Université de Montréal　<sup>3</sup> Columbia University　<sup>4</sup> University of Pennsylvania　<sup>5</sup> Canada CIFAR AI Chair

\* 共同第一作者　† 共同通讯/资深作者

<sup>B</sup> {hee-woon.ryoo, nanda.harishankar-krishna, ximeng.mao, guillaume.lajoie}@mila.quebec

项目主页：https://possm-brain.github.io

*第 39 届神经信息处理系统大会（NeurIPS 2025）*

---

## 摘要

神经活动的实时解码是神经科学与神经技术应用的核心，涵盖闭环实验到脑机接口（BCI），且模型须满足严格的延迟约束。传统方法（包括简单循环神经网络）速度快、体量轻，但往往难以泛化到未见数据。相比之下，近期基于 Transformer 的方法借助大规模预训练获得较强泛化性能，但计算需求通常大得多，并不总适合低资源或实时场景。针对上述不足，我们提出 **POSSM**——一种新颖的混合架构：通过交叉注意力模块对单个脉冲（spike）做标记化（tokenization），并与循环状态空间模型（state-space model, SSM）主干相结合，从而能够（1）对神经活动进行快速、因果的在线预测，以及（2）通过多数据集预训练，高效泛化到新会话、新个体与新任务。我们在猴运动任务的皮层内解码上评估了 POSSM 的解码性能与推理速度，并表明其可扩展到临床应用，即人类受试者的手写与言语解码。值得注意的是，我们证明：在猴运动皮层记录上预训练，可提升人类手写任务的解码性能，凸显了跨物种迁移的潜力。在上述全部任务中，POSSM 的解码精度可与最先进的 Transformer 相当，而推理成本仅为其一小部分（在 GPU 上最高可达约 9× 加速）。这些结果表明，混合 SSM 有望弥合精度、推理速度与泛化之间的鸿沟，适用于实时、闭环场景下的神经解码器训练。

---

## 1 引言

神经解码——将神经活动映射到行为或认知变量的过程——是现代神经科学与神经技术的核心组成部分。随着神经记录技术演进与数据集规模增长，人们日益关注构建可跨受试者与实验灵活适应、可扩展的通才式解码器。若干重要下游应用——包括闭环神经科学实验与脑机接口（BCI）——需要细粒度、低延迟的解码以实现实时控制 [1]。这些技术进步将使下一代临床干预成为可能，涵盖运动解码 [2]、言语假体 [3] 以及闭环神经调控 [4, 5]。迈向这些应用，神经解码器需同时满足三项要求：（1）稳健且准确的预测；（2）在在线设定下可行的因果、低延迟推理；（3）对受试者、任务与实验设置的灵活泛化。尽管机器学习（ML）的近期进展已在上述各轴上取得显著进展，构建同时达成三者的神经解码器仍是开放挑战。

循环神经网络（RNN）[6] 与基于注意力的模型如 Transformer [7] 已在神经解码任务中展现出显著潜力 [8–10]。

![图 1](../04_assets/fig1.png)

**图 1：用于神经解码的现有深度学习模型。** (a) 循环神经网络（RNN）。(b) 基于注意力的模型，如 Transformer。

RNN（图 1a）对序列数据提供快速、低延迟推理，并在针对特定任务训练时表现强劲 [10]。然而，由于其刚性的输入格式，向新受试者泛化的能力有限。具体而言，它们依赖固定大小、按时间分箱（time-binned）的输入，意味着通常无法在不同神经元身份或采样率的新会话上学习，除非完全重新训练和/或修改架构。相比之下，基于 Transformer 的架构（图 1b）凭借更可适应的神经标记化方法，提供更大灵活性 [11–13]。尽管如此，由于其二次计算复杂度，加之注意力机制整体计算负担，它们在涉及实时处理的应用中仍有困难。近期大语言模型序列建模的工作探索了将循环层（如门控循环单元 GRU [14] 或状态空间模型 SSM [15–18]）与注意力层结合的混合架构。这些模型在长上下文理解与计算效率上显示出可喜增益 [19–21]。尽管混合注意力–SSM 方法为实时神经解码提供了有希望的方案，但据我们所知，它们在该领域仍未被探索。

我们以 **POSSM**<sup>1</sup> 填补这一空白：一种混合模型，将 Transformer [22] 的灵活输入处理与循环 SSM 主干的高效在线推理能力相结合。不同于依赖刚性时间分箱的传统方法，POSSM 通过对单个脉冲做标记化，以毫秒级分辨率运作。本质上，POSSM 建立在 POYO 风格的交叉注意力编码器 [13] 之上，该编码器将可变数量的脉冲标记投影到固定大小的潜在空间；所得输出再送入 SSM，在连续时间块上更新其隐状态。如图 2 所示，该架构带来两项关键收益：（1）循环主干允许对连续时间块进行轻量、常数时间的预测；（2）通过采用 POYO 的脉冲标记化、编码与解码方案，POSSM 能有效泛化到不同会话、任务与受试者。

本文中，我们介绍 POSSM 架构，并在非人灵长类（NHP）与人类实验的皮层内脉冲活动记录上评估其性能。尽管当前评估在离线进行，POSSM 面向实时推理设计，并可方便地用于在线实验。最后，尽管本文关注侵入式电生理记录，该方法也可借助 POYO 风格标记化进一步扩展到其他模态（见第 5 节讨论）。我们的贡献概括如下：

- **性能与效率：** 我们在包含多会话、多受试者及不同伸手任务（中心外展、随机目标、迷宫等）的 NHP 数据集上，将 POSSM 与其他流行模型对比。我们发现 POSSM 在全部测试上匹配或优于其他模型，且速度更快、计算成本显著降低。
- **多数据集预训练提升性能：** 通过大规模预训练，我们发现 POSSM 在跨会话、跨受试者甚至跨任务的 NHP 数据集上带来更好表现。
- **跨物种迁移学习：** 在多样 NHP 数据集上预训练后再微调 POSSM，在从人类皮层活动解码想象手写字母时达到最先进性能 [23]。这种跨物种迁移不仅勾勒出神经动力学在不同灵长类间的显著可迁移性，也表明可利用丰富的非人数据增强有限的人类数据集，从而提升解码性能。
- **长序列复杂解码：** 当在尝试言语期间的人类运动皮层数据上训练时 [3]，POSSM 取得强劲解码表现。相比之下，基于注意力的模型难以应对该任务的长上下文需求，计算上代价过高。

<sup>1</sup> POSSM 代表 POYO-SSM，发音类似动物 “possum”（IPA: /ˈpɒsəm/）。【待核：原文 IPA 排版为 /"p6s9m/，此处按常见读音还原】

---

## 2 方法

![图 2](../04_assets/fig2.png)

**图 2：面向可泛化实时神经解码的架构。** POSSM 将单个脉冲标记化 [12] 与输入–输出交叉注意力 [22] 同循环 SSM 主干相结合。本文中我们通常取 \(k = 3\) 与 \(T_c = 50\) ms。

我们聚焦解码神经元脉冲活动：当对神经元的兴奋性输入超过某一阈值时触发的离散事件。脉冲的时机与频率编码着向脑中其他神经元传递的信息，构成对一切神经功能都至关重要的通信系统 [24, 25]。然而，其稀疏性 [26] 要求有效的输入表示以处理时间上的不规则性。此外，不同生命体的神经元之间不存在直接映射，凸显了跨多个体训练时对齐问题的非平凡性。本节说明 POSSM 如何被设计为顺序处理这些脉冲的亚秒级窗口以进行行为的在线预测，同时保持灵活的输入框架，使其在微调期间能高效泛化到全新的一组神经元。

### 2.1 输入处理

**将流式神经活动作为输入。** 我们关注实时性能，这要求从观测到神经活动到产生相应预测之间的延迟尽量小。该约束显著限制了模型每次新预测可用的时间长度，因而也限制了可用数据量。为此，POSSM 在数据流入时维持隐状态，从而能整合过去信息而无需重新处理先前输入。在每个时间块中，脉冲数量可变，意味着每个输入表示为可变长度的脉冲序列。尽管此处 POSSM 一般使用连续的 50 ms 时间块，我们也展示了使用 20 ms 时间块的强劲表现（见第 D.1 节）。理论上，这些窗口甚至可以更短或更长（乃至重叠），取决于任务，并需理解时间分辨率与计算复杂度之间存在权衡。

**脉冲标记化。** 我们采用原始 POYO 模型的标记化方案：每个神经元脉冲用两份信息表示：（1）其来自的神经单元身份，以及（2）其发生的时间戳（见图 2）。前者对应每个神经元的唯一可学习单元嵌入；后者用旋转位置嵌入（RoPE）[27] 编码，使标记可基于相对时机而非绝对时间戳被处理。例如，来自整数 ID 为 \(i\) 的某神经元、在时刻 \(t_{\mathrm{spike}}\) 发生的脉冲，可表示为 \(D\) 维标记 \(x\)：

\[
x = \big(\mathrm{UnitEmb}(i),\, t_{\mathrm{spike}}\big),
\]

其中 \(\mathrm{UnitEmb}: \mathbb{Z} \rightarrow \mathbb{R}^{D}\) 为单元嵌入映射，\(D\) 为超参数。由于标记化是逐元素运算，含 \(N\) 个脉冲的时间块将产生 \(N\) 个脉冲标记。我们选用更一般的术语“神经单元”，因为根据数据集与任务，脉冲可按粗于单个神经元的粒度分配（例如，单电极通道上的多单元活动）。这种灵活性，加上模型处理可变数量单元的能力，便于在多会话甚至跨数据集上进行训练与高效微调（见第 2.3 节）。

### 2.2 架构

**输入交叉注意力。** 我们采用原始 POYO [12] 编码器：受 PerceiverIO 架构 [22] 启发的交叉注意力模块，将可变长度的输入脉冲标记序列压缩为固定大小的潜在表示。但与 POYO 不同，编码器作用于短的 50 ms 时间块，每个块被映射到单个潜向量。做法是将脉冲标记设为注意力的键与值，并使用可学习查询向量 \(q \in \mathbb{R}^{1 \times M}\)，其中 \(M\) 为超参数。给定某时间块 \(t\) 中 \(N\) 个脉冲标记的序列 \(X_t = [x_0, x_1, \ldots, x_N]^{\top} \in \mathbb{R}^{N \times D}\)，交叉注意力模块的潜在输出计算为：

\[
z^{(t)} = \mathrm{softmax}\!\left(\frac{q K_t^{\top}}{\sqrt{D}}\right) V_t,
\]

其中 \(K_t = X_t W_k\)、\(V_t = X_t W_v\)，且 \(W_k, W_v \in \mathbb{R}^{D \times M}\)，为输入标记序列的投影，遵循标准 Transformer 记号。遵循 POYO，我们的实现还使用带预归一化层与前馈网络的标准 Transformer 块。

**循环主干。** 交叉注意力的输出 \(z^{(t)}\) 随后送入 SSM（或其他类型的 RNN），我们称之为循环主干。循环主干的隐状态更新如下：

\[
h^{(t)} = f_{\mathrm{SSM}}\big(z^{(t)},\, h^{(t-1)}\big).
\]

输入交叉注意力捕获局部时间结构（即 50 ms 块内），而 SSM 通过其隐状态将这些信息与历史上下文整合，使 POSSM 能在局部与全局时间尺度上处理信息。我们用三种不同主干架构做实验：对角结构化状态空间模型（S4D）[15]、GRU [14] 与 Mamba [16]。但需指出，该方法可与任何其他类型的循环模型兼容。各主干架构细节见第 B.2 节。

**输出交叉注意力与读出。** 为解码行为，我们选取最近的 \(k\) 个隐状态 \(\{h^{(t-k+1):(t)}\}\)（实验中 \(k=3\)），并用交叉注意力模块查询它们以得到行为预测。对给定时间块 \(t\)，我们生成 \(P\) 个查询，每个对应希望预测行为的一个时间戳。每个查询编码相关时间戳（使用 RoPE），以及捕获记录会话潜在因素的可学习会话嵌入。输出模块的设计在多方面提供灵活性：（1）可在每个时间块预测多个输出，从而得到更密、更丰富的监督信号；（2）无需将行为精确对齐到块边界；（3）可预测超出当前块的行为，从而可计入神经活动与行为动作之间的滞后（见第 D.5 节）。

### 2.3 用预训练模型泛化到未见数据

给定预训练模型，我们概述两种将其适应到新一组神经单元的策略，并在效率与解码精度之间权衡。

**单元识别（Unit identification, UI）。** 为实现对先前未见神经单元的高效泛化，我们采用单元识别（UI）——由从 POYO [12] 采用的脉冲标记化方案所促成的微调策略。在 UI 中，新神经单元仅通过学习新嵌入即可被模型处理。使用该方法时，我们冻结模型权重，初始化新的单元与会话嵌入，然后在新会话数据上训练它们，而其余模型保持不变。这使我们能保留预训练期间学到的神经动力学，从而形成高效的泛化策略，通常仅更新模型总参数的不到 1%。

**完全微调（Full finetuning, FT）。** 尽管单元识别是高效的微调方法，它并不能可靠地匹配在单个会话上端到端训练的模型性能。为此，我们也探索了完全微调（FT）——一种使用逐步解冻策略的互补方法。我们先仅做若干轮元的 UI，再解冻整个模型并端到端训练。这使我们在逐步适应新会话的同时保留预训练收益。如下文所示，完全微调在所探索的全部任务上持续优于单会话训练与单元识别，展现出向新动物、新任务、乃至跨物种的有效迁移。

![图 3](../04_assets/fig3.png)

**图 3：任务示意与输出。** (a) 带操纵杆（manipulandum）的中心外展（CO）任务。(b) 带操纵杆的随机目标（RT）任务。(c) 带触摸屏的 RT 任务。(d) 带触摸屏的迷宫任务。(e) 留出 CO 会话上真实行为与预测输出对比。(f) 同 (e)，但为 RT 会话。(g) 人类手写解码任务。(h) 人类言语解码任务。

---

## 3 实验

我们在三类皮层活动数据集上评估 POSSM：NHP 伸手任务、人类想象手写，以及人类尝试言语。对 NHP 伸手任务，我们通过引入在多数据集上预训练的 POSSM 变体 **o-POSSM** 来凸显规模收益。我们将其与单会话模型在与训练数据相似度不同的留出会话上比较，展示预训练带来的解码精度提升。接着，我们表明 o-POSSM 在人类手写任务上取得强劲下游解码表现，说明 POSSM 框架具备跨物种迁移能力。最后，我们证明 POSSM 有效利用其循环架构高效解码人类言语——这是对具有二次复杂度的标准 Transformer 模型而言计算昂贵的长上下文任务。在上述每项任务中，我们看到 POSSM 在因果评估设定下持续匹配或优于其他架构，且性能随模型规模与预训练规模增加而提升。

### 3.1 非人灵长类伸手

我们首先在猴子执行多种伸手任务时解码二维手部速度的任务上评估 POSSM（图 3a–f）。每个训练样本由 1 s 的脉冲活动与同一区间内对应的 2D 手部速度时间序列组成。该 1 s 窗口被切为 20 个不重叠的 50 ms 块，顺序送入 POSSM（20 ms 块结果见第 D.1 节）。这种流式设定支持高效实时解码：每一步仅处理最近的 50 ms 块。鲜明对比之下，原始 POYO 模型在每次新输入时重新处理整段 1 s 活动窗口，计算成本显著更高。

**实验设置。** 我们采用与 POYO [12] 类似的实验设置。预训练数据集包含由不同实验室采集的四个 NHP 伸手数据集 [28–31]，覆盖三类伸手任务：中心外展（CO）、随机目标（RT）与迷宫（Maze）。CO 是高度结构化的任务，涉及从屏幕中心移向八个目标之一（图 3a）。相对地，RT（图 3b–c）与迷宫（图 3d）在行为上更复杂，分别要求移向随机放置的目标与在迷宫中导航。测试会话包括：（1）预训练中见过的 Monkey C 的新会话；（2）预训练未见、但与 Monkey C 同实验室采集的 Monkey T 的新会话；以及（3）预训练未见数据集中的新会话。我们将在该数据上预训练的模型称为 o-POSSM（细节见第 B.3 节）。总计，o-POSSM 在 148 个会话上训练，包含来自初级运动皮层（M1）、背侧前运动皮层（PMd）与初级体感皮层（S1）记录的超过 6.70 亿个脉冲、26,032 个神经单元（细节见附录 A）。我们还预训练两个基线模型：NDT-2 [11] 与 POYO-1 [12]。此外，我们报告在单个会话上从零训练的单会话模型结果，包括 POSSM（全部主干架构）与 POYO 的单会话变体，以及其他基线如多层感知机（MLP）[32]、S4D [15]、GRU [14] 与 Mamba [16]。

![表 1](../04_assets/table1.png)

**表 1：NHP 伸手任务上的行为解码结果。** 数值为跨会话的平均 \(R^2\)（↑）± 标准差。各数据集会话数写在 (·) 中。C、T、H 为受试者标识。SS：单会话；UI：单元识别；FT：完全微调。各类别最优模型以粗体（第 1）与下划线（第 2）标出。

**因果评估。** 为模拟真实解码场景，我们对全部模型采用因果评估策略。对 POSSM 与我们所考虑的循环基线，这很直接——序列切为 50 ms 时间块并顺序送入模型。对 MLP 与 POYO，我们在每个推理时间步提供固定 1 s 的神经活动历史，并以 50 ms 小步滑动，以收集全部行为时间戳的预测。对 POYO，我们仅记录每个 1 s 上下文窗口最后 50 ms 内时间戳的预测。

训练期间，模型见到连续、不重叠、且未与试次对齐的 1 s 序列。但我们在整段试次上评估模型，试次通常远长于一秒。例如，在 Perich 等 [28] 数据集的会话中，验证与测试集试次至少是训练序列的 3×，最长可达 5×。这意味着循环模型必须泛化到比训练所见更长的序列。

**向新会话迁移。** 在表 1 中，我们评估预训练模型向新会话、新动物与新数据集的可迁移性，并与单会话模型比较。在单会话上训练时，POSSM 在多数会话上与 POYO 相当或更优。使用预训练模型时，o-POSSM-S4D 总体表现最佳。最后，我们观察到：向新动物或新数据集迁移时，FT 明显优于 UI。不过，UI 与若干单会话模型相当或更好，且需训练的参数远少。

![图 4](../04_assets/fig4.png)

**图 4：样本与计算效率基准。** (a) Monkey C [28] 留出 CO 会话结果。左图展示适配预训练模型相对从零训练的样本效率；右图比较两种方式的训练计算效率。(b) 同 (a)，但为 Monkey T [28] 的留出 RT 会话——训练中未见的新受试者。(c) 与基线模型比较模型性能与计算效率。推理时间在工作站级 GPU（NVIDIA RTX8000）上计算。上述结果均对 POSSM 使用 GRU 主干。

**样本与训练计算效率。** 在大型异质数据集上训练神经解码器的关键动机之一，是以最少微调高效迁移到新个体、任务或物种。为此，我们通过少样本实验评估微调策略的有效性。图 4a–b 的结果表明，o-POSSM 在低数据体制下优于从零训练的单会话模型。值得注意的是，我们观察到：适配新会话时，即使仅更新单元与会话嵌入，预训练也会带来可观的初始性能提升。某些情况下，即便经充分训练，单会话模型仍无法匹配微调模型的性能。总体结果与 Azabou 等 [12] 的观察一致，支持如下观点：借助合适的标记化与数据聚合方案，预训练模型可摊销数据与训练成本，从而高效适应下游应用。

**推理效率。** 除训练与微调高效外，我们还评估 POSSM 在推理时是否高效。图 4c 报告 POSSM 与若干先进神经解码器在工作站级 GPU（NVIDIA RTX8000）上的参数量与每时间块推理时间。我们发现，单会话与多会话模型的推理速度可与 GRU、MLP 等轻量模型相当，并显著低于 NDT-2 与 POYO 等复杂模型，同时保持有竞争力的性能。单会话 POSSM 模型（POSSM-SS）参数最少；即便约 8M 参数的 o-POSSM 也保持低延迟。这些结果在 CPU 环境（AMD EPYC 7502 32-Core）中同样成立：POSSM-SS 与 o-POSSM 分别达到约 \(\sim 2.44\) ms/块 与 \(\sim 5.65\) ms/块 的推理速度。总体表明，POSSM 的推理时间完全落在最优实时 BCI 解码延迟 \(\leq 10\) ms [8] 之内，使其成为实时 BCI 解码应用的可行选项。

### 3.2 人类手写

接下来，我们在人类手写数据集 [23] 上评估 POSSM。该数据集包含来自单一受试者的 11 个会话，受试者想象书写单个字符与画直线（图 3g）。来自植入参与者运动皮层的两个 96 通道微电极阵列的多单元阈值交叉脉冲计数被记录 [23]，再按 10 ms 间隔分箱。模型被训练基于该神经活动对意图字符或直线做分类。评估使用 9 个会话，每类字符各含 10 个试次。每个试次由以 “go” 提示为中心的 1.6 s 时间窗组成。

**结果。** 我们将 POSSM 与五个基线比较：先前发表的统计方法 PCA-KNN [23]、GRU [14]、S4D [15]、Mamba [16] 与 POYO。对 POSSM 及除 POYO 外的全部基线，我们采用第 3.1 节所述因果评估策略：在 1 s 区间上训练，在完整 1.6 s 试次上评估。对 POYO，我们遵循原论文评估方案，训练与测试均使用固定 1 s 上下文窗口。

![表 2](../04_assets/table2.png)

**表 2：人类手写解码结果。** 数值为在 9 个会话与 3 个随机种子上，对意图字符或直线分类的平均准确率 ± 标准差。\(*,\,^{**}\)：相对 POSSM-GRU 的配对 \(t\) 检验 \(p \leq 0.05,\,0.01\)。

如表 2 所示，从零在 9 个会话上训练时，POSSM-GRU 优于全部基线模型。引人注目的是，微调仅在 NHP 数据上预训练的 o-POSSM 带来显著性能增益：对 POSSM-GRU 约 2%，对 POSSM-S4D 与 POSSM-Mamba 均超过 5%。全部 POSSM 模型在该任务上达到最先进性能，微调后的 o-POSSM 变体显著优于基线 PCA-KNN，测试准确率约高出 16%。

这些结果确立一项关键发现：从 NHP 数据集学到的神经动力学可跨物种、跨不同任务泛化。鉴于大规模人类电生理数据集采集困难，这一点尤其有影响力，提示可利用丰富的 NHP 数据集有效改进人类 BCI 解码器。

### 3.3 人类言语

最后，我们在人类言语解码任务上评估 POSSM。不同于涉及固定长度上下文窗口的伸手与手写任务，言语解码需建模可变长度音素序列，其取决于句子长度与个体语速。我们使用公开数据集 [3, 33]，包含 24 个会话，其中一名有言语障碍的人类参与者尝试说出屏幕上出现的句子（图 3h）。神经活动由覆盖前运动皮层与布罗卡区的四个 64 通道微电极阵列记录。提取多单元脉冲活动并以 20 ms 分辨率分箱，每个试次长度从 2 到 18 秒不等。这对为 1 s 上下文设计的 Transformer（如 POYO）构成问题，因为注意力机制的二次复杂度会在更长句子上导致计算量大幅增加。

![表 3](../04_assets/table3.png)

**表 3：人类言语解码结果。** 报告 3 个种子上的平均音素错误率（PER）。全部标准差 \(< 0.1\%\)。

尽管原研究 [3, 33] 使用了单向与双向 GRU，我们主要聚焦因果、单向情形，因其与实时解码更相关。与 Willett 等 [3] 一致，我们对神经数据做 \(z\)-score 标准化并加入高斯噪声作为增强。我们以音素错误率（PER）作为主要评估指标。尽管先前工作已成功纳入语言模型以利用文本先验，我们将其留作未来研究方向，此处聚焦 POSSM 自身能力。

先前工作 [33] 表明，基于 Transformer 的解码器在该任务上相对 GRU 基线表现不佳。此处我们通过使用 POSSM（具体为 GRU 主干）展示将注意力与循环模型整合的价值。然而，由于数据集仅提供归一化脉冲计数（而非脉冲时间），我们无法原样使用 POYO 风格标记化。取而代之，我们将每个多单元通道视为一个神经单元，并用数值嵌入编码归一化脉冲计数。此外，我们用一维带步长卷积层替换输出交叉注意力模块，以控制输出序列长度。相对以带步长滑动窗口神经活动为输入的 GRU 基线，该方法显著减少了模型参数量。

我们发现两阶段训练流程效果最佳。第一阶段，我们通过在每个单独时间箱上重建脉冲计数，训练输入交叉注意力模块以及潜在与单元嵌入。第二阶段，我们用联结主义时间分类（CTC）[34] 损失在目标音素序列上训练整个 POSSM 模型。

**结果。** 如表 3 所示，POSSM 相对全部其他基线取得显著改进。值得注意的是，即便不加高斯噪声增强，POSSM 仍保持可比性能，而基线 GRU 在相同条件下性能大幅受损。此外，在多输入模态（即同时使用脉冲计数与脉冲频带功率）的初步实验中，我们再次表明 POSSM 优于基线。这些结果说明 POSSM 架构对数据预处理变异具有稳健性，并对输入模态具有灵活性，进一步强化其作为可行现实世界解码器的论据。

---

## 4 相关工作

**神经解码。** 面向 BCI 中运动控制等连续任务的神经解码，传统上使用卡尔曼滤波器等统计模型完成 [35–38]。这些模型可靠，且对特定用户与会话表现良好，但要泛化到新日期、用户甚至任务，需要仔细适配。此类适配通常通过模型拟合方法估计卡尔曼滤波参数 [38–40]，而该过程对每次应用都需要可观的新训练数据。多会话神经解码的传统路径往往是：在特定日期或会话（例如第一天）上学习解码器参数，再学习将后续日期的神经活动对齐的模型以促进泛化 [41–43]。鉴于近期大型公开神经记录数据集的可用性 [3, 23, 28–30]，现代神经解码方法试图借助大规模深度学习进展构建数据驱动的 BCI 解码器 [11–13, 44–49]。例如，在神经元脉冲活动解码语境下，NDT [44] 将神经群体脉冲联合嵌入为每个时间箱一个标记；时空 NDT（STNDT）[50] 分别跨单元与时间做标记化并学习这两种上下文的联合表示；NDT-2 [11] 类似 ViT [51] 对神经数据的时空补丁做标记化；POYO [12] 摒弃基于分箱的标记化，选择对单个脉冲做标记化，并用 PerceiverIO [22] Transformer 主干从特定上下文窗口内查询行为。尽管其中若干工作在神经解码上表现出色，它们并未聚焦于在基于脉冲的 BCI 与闭环协议中实现可泛化的在线解码。BRAND 平台 [8] 使专用深度学习模型能在侵入式记录的实时闭环脑机接口实验中部署，并在如 LFADS [52] 等其他模型中展示了合适的低延迟神经解码。最后，我们亦提及除直接行为解码外的其他神经数据处理 ML 方法。旨在识别神经活动与行为之间联合潜变量的对比学习方法可有助于解码，但仍需面向在线使用的工作 [53]。基于扩散的方法在联合预测神经活动与行为方面有前景，但同样不便直接用于在线 [54]。

**混合注意力–循环模型。** 若干工作尝试将自注意力与交叉注意力层同循环架构结合，通常目标是将较短时间尺度上注意力的表达力与结构化 SSM [15–17] 等循环模型的长期上下文建模能力相结合。尽管传统 SSM 已用于多项神经科学应用 [55–58]，现代 SSM 与混合模型在该领域仍探索不足。Didolkar 等 [59] 提出由 Transformer 块组成的架构：在更快、更短时间尺度上处理信息，同时由循环主干在更长时间尺度上整合这些块的信息以做长期上下文建模。类似方法还有 Block-Recurrent Transformer [60]，其中循环单元并行作用于一块标记，从而在时间步间传播一块状态向量。Pilault 等 [61] 提出 Block-State Transformer 架构，引入由 SSM 处理长输入序列的层，其输出分块送入多个并行 Transformer 以产生输出标记。此外，若干近期高通量语言建模工作 [19–21] 已利用混合模型，用 SSM 块替换自注意力层，以利用其亚二次计算复杂度。

---

## 5 讨论

**总结。** 我们提出了 POSSM——一种可扩展、可泛化的混合架构，将脉冲标记化与输入–输出交叉注意力同 SSM 配对。该架构支持高效在线解码应用，在多项神经解码任务上达到最先进性能，同时相对完全基于 Transformer 的方法参数更少、推理更快。我们的模型在标准工作站上即可达到毫秒级推理时间（即便不用 GPU），适合临床场景的实时部署。

本工作的一项关键贡献是：据我们所知，首次成功展示基于深度学习的解码器将学到的神经动力学进行跨物种迁移——从 NHP 运动皮层到人类临床数据（相关努力见 [11, 62]）。这勾勒出对重大临床障碍的一种解决路径：在患者群体中获取足量数据以进行大规模建模极具挑战甚至不可能。我们表明，可通过微调预训练模型，利用现有庞大的非人实验数据语料来改善个性化临床结果。

**未来方向与应用。** 此处 POSSM 架构用于运动神经解码，但可适配以实现多种结果。当前模型聚焦处理猴子与人类临床试验参与者运动皮层植入阵列的脉冲数据。然而，我们的混合架构灵活，可借助多种已验证的标记化方案轻易容纳其他神经数据模态（例如钙成像 [13]、EEG [45, 47, 63]）。尽管本文聚焦解码紧随输入时间块之后的行为时间戳，我们的混合架构也适合更长时间尺度上的预测。未来我们还计划探索 POSSM 在运动皮层以外不同脑区学习与泛化的能力。

最终，我们将 POSSM 设想为迈向面向多种神经接口任务的快速、可泛化神经基础模型的第一步，下游应用包括临床诊断，以及将预测状态与优化神经刺激器相联结的智能闭环神经调控技术发展（例如 [4, 5]）。未来步骤包括多模态预训练与解码 [22, 49, 64, 65]，以及有原则的自监督预训练方案。通过迁移学习实现高效推理与灵活泛化，POSSM 为具有现实世界实用性的通用神经解码器标示了新方向。

### 更广泛影响

本研究有望促进开发不仅准确、且适合部署于在线系统（如神经假体及其他脑机接口）的神经解码器。除 POSSM 的整体性能外，其预训练/微调方案减少了对广泛个体校准的需求。此外，手写任务上的跨物种迁移结果表明：数据可得性有限的患者可受益于用不同物种的更大数据集预训练的模型。尽管 POSSM 潜在下游应用令人振奋，对任何医疗技术均须考虑伦理关切，包括但不限于数据隐私以及从动物进行人道的数据采集。在任何与人类相关的场景部署前，应实施严格测试。

### 致谢与资助披露

作者感谢 Patrick Mineault、Blake Richards、Ayesha Vermani 与 Alexandre André 的支持与反馈。MA 感谢 NSF AI Institute for Artificial and Natural Intelligence 的支持。MGP 感谢 Brain Canada Foundation 的 Future Leaders 奖以及 Fonds de recherche du Québec – Santé 的 J1 Chercheurs-boursiers en intelligence artificielle。GL 感谢 NSERC Discovery Grant RGPIN-2018-04821、Canada Research Chair in Neural Computations and Interfacing、Canada-CIFAR AI Chair、IVADO，以及 Canada First Research Excellence Fund。作者亦感谢 Mila、Digital Research Alliance of Canada 与 NVIDIA 提供的计算资源支持。

---

## 参考文献

（参考文献列表保留英文原文，与 PDF 第 11–14 页对应。）

```
References
[1]

A. Vermani, M. Dowling, H. Jeon, I. Jordan, J. Nassar, Y. Bernaerts, Y. Zhao, S. Van Vaerenbergh, and
I. M. Park. “Real-Time Machine Learning Strategies for a New Kind of Neuroscience Experiments”.
2024 32nd European Signal Processing Conference (EUSIPCO). 2024, pp. 1127–1131.

[2]

S. N. Flesher, J. E. Downey, J. M. Weiss, C. L. Hughes, A. J. Herrera, E. C. Tyler-Kabara, M. L. Boninger,
J. L. Collinger, and R. A. Gaunt. “A brain-computer interface that evokes tactile sensations improves
robotic arm control”. Science 372.6544 (2021), pp. 831–836.

[3]

F. R. Willett, E. M. Kunz, C. Fan, D. T. Avansino, G. H. Wilson, E. Y. Choi, F. Kamdar, M. F. Glasser,
L. R. Hochberg, S. Druckmann, et al. “A high-performance speech neuroprosthesis”. Nature 620.7976
(2023), pp. 1031–1036.

[4]

H. Lorach, A. Galvez, V. Spagnolo, F. Martel, S. Karakas, N. Intering, M. Vat, O. Faivre, C. Harte, S.
Komi, et al. “Walking naturally after spinal cord injury using a brain–spine interface”. Nature 618.7963
(2023), pp. 126–133.

[5]

M. Bonizzato, R. Guay Hottin, S. L. Côté, E. Massai, L. Choinière, U. Macar, S. Laferrière, P. Sirpal,
S. Quessy, G. Lajoie, et al. “Autonomous optimization of neuroprosthetic stimulation parameters that
drive the motor cortex and spinal cord outputs in rats and monkeys”. Cell Reports Medicine 4.4 (2023),
p. 101008.

[6]

J. L. Elman. “Finding Structure in Time”. Cognitive Science 14.2 (1990), pp. 179–211.

[7]

A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin.
“Attention is All you Need”. Advances in Neural Information Processing Systems. Vol. 30. 2017.

[8]

Y. H. Ali, K. Bodkin, M. Rigotti-Thompson, K. Patel, N. S. Card, B. Bhaduri, S. R. Nason-Tomaszewski,
D. M. Mifsud, X. Hou, C. Nicolas, et al. “BRAND: a platform for closed-loop experiments with deep
network models”. Journal of Neural Engineering 21.2 (2024), p. 026046.

[9]

Y. Yang, P. Ahmadipour, and M. M. Shanechi. “Adaptive latent state modeling of brain network dynamics
with real-time learning rate optimization”. Journal of Neural Engineering 18.3 (2021), p. 036013.

[10]

D. Sussillo, S. D. Stavisky, J. C. Kao, S. I. Ryu, and K. V. Shenoy. “Making brain–machine interfaces
robust to future neural variability”. Nature Communications 7.1 (2016).

[11]

J. Ye, J. Collinger, L. Wehbe, and R. Gaunt. “Neural Data Transformer 2: Multi-context Pretraining for
Neural Spiking Activity”. Advances in Neural Information Processing Systems. Vol. 36. 2023, pp. 80352–
80374.

[12]

M. Azabou, V. Arora, V. Ganesh, X. Mao, S. Nachimuthu, M. Mendelson, B. Richards, M. Perich, G.
Lajoie, and E. Dyer. “A Unified, Scalable Framework for Neural Population Decoding”. Advances in
Neural Information Processing Systems. Vol. 36. 2023, pp. 44937–44956.

[13]

M. Azabou, K. X. Pan, V. Arora, I. J. Knight, E. L. Dyer, and B. A. Richards. “Multi-session, multi-task
neural decoding from distinct cell-types and brain regions”. The Thirteenth International Conference on
Learning Representations. 2025.

[14]

K. Cho, B. van Merriënboer, C. Gulcehre, D. Bahdanau, F. Bougares, H. Schwenk, and Y. Bengio.
“Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation”.
Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP).
Doha, Qatar, 2014, pp. 1724–1734.

[15]

A. Gu, K. Goel, and C. Re. “Efficiently Modeling Long Sequences with Structured State Spaces”.
International Conference on Learning Representations. 2022.

[16]

A. Gu and T. Dao. “Mamba: Linear-Time Sequence Modeling with Selective State Spaces”. 2024. arXiv:
2312.00752.

[17]

J. T. Smith, A. Warrington, and S. Linderman. “Simplified State Space Layers for Sequence Modeling”.
The Eleventh International Conference on Learning Representations. 2023.

[18]

T. Dao and A. Gu. “Transformers are SSMs: Generalized Models and Efficient Algorithms Through
Structured State Space Duality”. Proceedings of the 41st International Conference on Machine Learning.
Vol. 235. Proceedings of Machine Learning Research. 2024, pp. 10041–10071.

[19]

B. Lenz, O. Lieber, A. Arazi, A. Bergman, A. Manevich, B. Peleg, B. Aviram, C. Almagor, C. Fridman,
D. Padnos, et al. “Jamba: Hybrid Transformer-Mamba Language Models”. The Thirteenth International
Conference on Learning Representations. 2025.

11


[20]

S. De, S. L. Smith, A. Fernando, A. Botev, G. Cristian-Muraru, A. Gu, R. Haroun, L. Berrada, Y. Chen, S.
Srinivasan, et al. “Griffin: Mixing Gated Linear Recurrences with Local Attention for Efficient Language
Models”. 2024. arXiv: 2402.19427.

[21]

B. N. Patro, S. Ranganath, V. P. Namboodiri, and V. S. Agneeswaran. “Heracles: A Hybrid SSMTransformer Model for High-Resolution Image and Time-Series Analysis”. 2024. arXiv: 2403.18063.

[22]

A. Jaegle, S. Borgeaud, J.-B. Alayrac, C. Doersch, C. Ionescu, D. Ding, S. Koppula, D. Zoran, A. Brock,
E. Shelhamer, et al. “Perceiver IO: A General Architecture for Structured Inputs & Outputs”. International
Conference on Learning Representations. 2022.

[23]

F. R. Willett, D. T. Avansino, L. R. Hochberg, J. M. Henderson, and K. V. Shenoy. “High-performance
brain-to-text communication via handwriting”. Nature 593.7858 (2021), pp. 249–254.

[24]

A. E. Urai, B. Doiron, A. M. Leifer, and A. K. Churchland. “Large-scale neural recordings call for new
insights to link brain and behavior”. Nature Neuroscience 25.1 (2022), pp. 11–19.

[25]

M. D. Humphries. “Spike-Train Communities: Finding Groups of Similar Spike Trains”. Journal of
Neuroscience 31.6 (2011), pp. 2321–2336.

[26]

H. G. Rey, C. Pedreira, and R. Quian Quiroga. “Past, present and future of spike sorting techniques”.
Brain Research Bulletin 119 (2015). Advances in electrophysiological data analysis, pp. 106–117.

[27]

J. Su, M. Ahmed, Y. Lu, S. Pan, W. Bo, and Y. Liu. “RoFormer: Enhanced transformer with Rotary
Position Embedding”. Neurocomputing 568 (2024), p. 127063.

[28]

M. G. Perich, L. E. Miller, M. Azabou, and E. L. Dyer. “Long-term recordings of motor and premotor
cortical spiking activity during reaching in monkeys”. 2025.

[29]

J. E. O’Doherty, M. M. B. Cardoso, J. G. Makin, and P. N. Sabes. “Nonhuman Primate Reaching with
Multichannel Sensorimotor Cortex Electrophysiology”. Zenodo: 10.5281/zenodo.3854034. 2020.

[30]

M. M. Churchland, J. P. Cunningham, M. T. Kaufman, J. D. Foster, P. Nuyujukian, S. I. Ryu, and K. V.
Shenoy. “Neural population dynamics during reaching”. Nature 487.7405 (2012), pp. 51–56.

[31]

F. Pei, J. Ye, D. Zoltowski, A. Wu, R. Chowdhury, H. Sohn, J. O’Doherty, K. V. Shenoy, M. Kaufman, M.
Churchland, et al. “Neural Latents Benchmark ‘21: Evaluating latent variable models of neural population
activity”. Proceedings of the Neural Information Processing Systems Track on Datasets and Benchmarks.
Vol. 1. 2021.

[32]

J. I. Glaser, A. S. Benjamin, R. H. Chowdhury, M. G. Perich, L. E. Miller, and K. P. Kording. “Machine
Learning for Neural Decoding”. eNeuro 7.4 (2020).

[33]

F. R. Willett, J. Li, T. Le, C. Fan, M. Chen, E. Shlizerman, Y. Chen, X. Zheng, T. S. Okubo, T. Benster,
et al. “Brain-to-Text Benchmark ’24: Lessons Learned”. 2024. arXiv: 2412.17227.

[34]

A. Graves, S. Fernández, F. Gomez, and J. Schmidhuber. “Connectionist temporal classification: labelling
unsegmented sequence data with recurrent neural networks”. Proceedings of the 23rd International
Conference on Machine Learning. ICML ’06. Pittsburgh, Pennsylvania, USA, 2006, pp. 369–376.

[35]

R. E. Kalman. “A New Approach to Linear Filtering and Prediction Problems”. Journal of Basic
Engineering 82.1 (1960), pp. 35–45.

[36]

W. Wu, M. Black, Y. Gao, M. Serruya, A. Shaikhouni, J. Donoghue, and E. Bienenstock. “Neural
Decoding of Cursor Motion Using a Kalman Filter”. Advances in Neural Information Processing Systems.
Vol. 15. 2002.

[37]

S. Koyama, S. M. Chase, A. S. Whitford, M. Velliste, A. B. Schwartz, and R. E. Kass. “Comparison
of brain–computer interface decoding algorithms in open-loop and closed-loop control”. Journal of
Computational Neuroscience 29.1–2 (2010), pp. 73–87.

[38]

F. R. Willett, D. R. Young, B. A. Murphy, W. D. Memberg, C. H. Blabe, C. Pandarinath, S. D. Stavisky,
P. Rezaii, J. Saab, B. L. Walter, et al. “Principled BCI Decoder Design and Parameter Selection Using a
Feedback Control Model”. Scientific Reports 9.1 (2019).

[39]

B. Jarosiewicz, N. Y. Masse, D. Bacher, S. S. Cash, E. Eskandar, G. Friehs, J. P. Donoghue, and L. R.
Hochberg. “Advantages of closed-loop calibration in intracortical brain–computer interfaces for people
with tetraplegia”. Journal of Neural Engineering 10.4 (2013), p. 046012.

[40]

V. Gilja, C. Pandarinath, C. H. Blabe, P. Nuyujukian, J. D. Simeral, A. A. Sarma, B. L. Sorice, J. A. Perge,
B. Jarosiewicz, L. R. Hochberg, et al. “Clinical translation of a high-performance neural prosthesis”.
Nature Medicine 21.10 (2015), pp. 1142–1145.

12


[41]

A. Farshchian, J. A. Gallego, J. P. Cohen, Y. Bengio, L. E. Miller, and S. A. Solla. “Adversarial Domain
Adaptation for Stable Brain-Machine Interfaces”. 2019. arXiv: 1810.00045.

[42]

A. D. Degenhart, W. E. Bishop, E. R. Oby, E. C. Tyler-Kabara, S. M. Chase, A. P. Batista, and B. M.
Yu. “Stabilization of a brain–computer interface via the alignment of low-dimensional spaces of neural
activity”. Nature Biomedical Engineering 4.7 (2020), pp. 672–685.

[43]

X. Ma, F. Rizzoglio, K. L. Bodkin, E. Perreault, L. E. Miller, and A. Kennedy. “Using adversarial
networks to extend brain computer interface decoding accuracy over time”. eLife 12 (2023), e84296.

[44]

J. Ye and C. Pandarinath. “Representation learning for neural population activity with Neural Data
Transformers”. Neurons, Behavior, Data analysis, and Theory 5.3 (2021), pp. 1–18.

[45]

W. Jiang, L. Zhao, and B.-l. Lu. “Large Brain Model for Learning Generic Representations with Tremendous EEG Data in BCI”. The Twelfth International Conference on Learning Representations. 2024.

[46]

Y. Zhang, Y. Wang, D. M. Jiménez-Benetó, Z. Wang, M. Azabou, B. Richards, R. Tung, O. Winter,
T. I. B. Laboratory, E. Dyer, et al. “Towards a "Universal Translator" for Neural Dynamics at Single-Cell,
Single-Spike Resolution”. Advances in Neural Information Processing Systems. Vol. 37. 2024, pp. 80495–
80521.

[47]

G. Chau, C. Wang, S. J. Talukder, V. Subramaniam, S. Soedarmadji, Y. Yue, B. Katz, and A. Barbu.
“Population Transformer: Learning Population-level Representations of Neural Activity”. The Thirteenth
International Conference on Learning Representations. 2025.

[48]

B. Candelori, G. Bardella, I. Spinelli, S. Ramawat, P. Pani, S. Ferraina, and S. Scardapane. “Spatiotemporal transformers for decoding neural movement control”. Journal of Neural Engineering 22.1
(2025), p. 016023.

[49]

Y. Zhang, Y. Wang, M. Azabou, A. Andre, Z. Wang, H. Lyu, I. B. Laboratory, E. L. Dyer, L. Paninski,
and C. L. Hurwitz. “Neural Encoding and Decoding at Scale”. Proceedings of the 42nd International
Conference on Machine Learning. Vol. 267. Proceedings of Machine Learning Research. 2025, pp. 76175–
76192.

[50]

T. Le and E. Shlizerman. “STNDT: Modeling Neural Population Activity with Spatiotemporal Transformers”. Advances in Neural Information Processing Systems. Vol. 35. 2022, pp. 17926–17939.

[51]

A. Dosovitskiy, L. Beyer, A. Kolesnikov, D. Weissenborn, X. Zhai, T. Unterthiner, M. Dehghani, M.
Minderer, G. Heigold, S. Gelly, et al. “An Image is Worth 16x16 Words: Transformers for Image
Recognition at Scale”. International Conference on Learning Representations. 2021.

[52]

C. Pandarinath, D. J. O’Shea, J. Collins, R. Jozefowicz, S. D. Stavisky, J. C. Kao, E. M. Trautmann,
M. T. Kaufman, S. I. Ryu, L. R. Hochberg, et al. “Inferring single-trial neural population dynamics using
sequential auto-encoders”. Nature Methods 15.10 (2018), pp. 805–815.

[53]

S. Schneider, J. H. Lee, and M. W. Mathis. “Learnable latent embeddings for joint behavioural and neural
analysis”. Nature 617.7960 (2023), pp. 360–368.

[54]

A. C. Filipe and I. M. Park. “One Model to Train Them All: A Unified Diffusion Framework for
Multi-Context Neural Population Forecasting”. OpenReview. 2025.

[55]

S. Linderman, A. Nichols, D. Blei, M. Zimmer, and L. Paninski. “Hierarchical recurrent state space
models reveal discrete and continuous dynamics of neural activity in C. elegans”. bioRxiv: 621540. 2019.

[56]

D. Zoltowski, J. Pillow, and S. Linderman. “A general recurrent state space framework for modeling
neural dynamics during decision-making”. Proceedings of the 37th International Conference on Machine
Learning. Vol. 119. Proceedings of Machine Learning Research. 2020, pp. 11680–11691.

[57]

A. Vinograd, A. Nair, J. H. Kim, S. W. Linderman, and D. J. Anderson. “Causal evidence of a line
attractor encoding an affective state”. Nature 634.8035 (2024), pp. 910–918.

[58]

A. Vermani, J. Nassar, H. Jeon, M. Dowling, and I. M. Park. “Meta-Dynamical State Space Models for
Integrative Neural Data Analysis”. The Thirteenth International Conference on Learning Representations.
2025.

[59]

A. Didolkar, K. Gupta, A. Goyal, N. B. Gundavarapu, A. M. Lamb, N. R. Ke, and Y. Bengio. “Temporal
Latent Bottleneck: Synthesis of Fast and Slow Processing Mechanisms in Sequence Learning”. Advances
in Neural Information Processing Systems. Vol. 35. 2022, pp. 10505–10520.

[60]

D. Hutchins, I. Schlag, Y. Wu, E. Dyer, and B. Neyshabur. “Block-Recurrent Transformers”. Advances in
Neural Information Processing Systems. Vol. 35. 2022, pp. 33248–33261.

[61]

J. Pilault, M. Fathi, O. Firat, C. Pal, P.-L. Bacon, and R. Goroshin. “Block-State Transformers”. Advances
in Neural Information Processing Systems. Vol. 36. 2023, pp. 7311–7329.

13


[62]

F. Rizzoglio, E. Altan, X. Ma, K. L. Bodkin, B. M. Dekleva, S. A. Solla, A. Kennedy, and L. E. Miller.
“From monkeys to humans: observation-based EMG brain–computer interface decoders for humans with
paralysis”. Journal of Neural Engineering 20.5 (2023), p. 056040.

[63]

C. Wang, V. Subramaniam, A. U. Yaari, G. Kreiman, B. Katz, I. Cases, and A. Barbu. “BrainBERT: Selfsupervised representation learning for intracranial recordings”. The Eleventh International Conference on
Learning Representations. 2023.

[64]

M. Ramezani, X. Liu, C. Ren, T. Komiyama, and D. Kuzum. “Processing multimodal neural data
and decoding neural dynamics using cross-modality inference”. 2023 11th International IEEE/EMBS
Conference on Neural Engineering (NER). 2023, pp. 1–4.

[65]

F. Yang, C. Feng, D. Wang, T. Wang, Z. Zeng, Z. Xu, H. Park, P. Ji, H. Zhao, Y. Li, et al. “NeuroBind:
Towards Unified Multimodal Representations for Neural Signals”. 2024. arXiv: 2407.14020.

[66]

R. D. Flint, E. W. Lindberg, L. R. Jordan, L. E. Miller, and M. W. Slutzky. “Accurate decoding of reaching
movements from field potentials in the absence of spikes”. Journal of Neural Engineering 9.4 (2012),
p. 046006.

[67]

A. Gu, I. Johnson, A. Timalsina, A. Rudra, and C. Re. “How to Train your HiPPO: State Space Models
with Generalized Orthogonal Basis Projections”. International Conference on Learning Representations.
2023.

[68]

I. Loshchilov and F. Hutter. “Decoupled Weight Decay Regularization”. International Conference on
Learning Representations. 2019.

[69]

Y. You, J. Li, S. Reddi, J. Hseu, S. Kumar, S. Bhojanapalli, X. Song, J. Demmel, K. Keutzer, and C.-J.
Hsieh. “Large Batch Optimization for Deep Learning: Training BERT in 76 minutes”. 2020. arXiv:
1904.00962.

[70]

M. Azabou, M. G. Azar, R. Liu, C.-H. Lin, E. C. Johnson, K. Bhaskaran-Nair, M. Dabagia, B. AvilaPires, L. Kitchell, K. B. Hengen, et al. “Mine Your Own vieW: Self-Supervised Learning Through
Across-Sample Prediction”. 2021. arXiv: 2102.10106.

[71]

S. E. de Vries, J. H. Siegle, and C. Koch. “Sharing neurophysiology data from the Allen Brain Observatory”. eLife 12 (2023), e85550.

[72]

E. J. Hu, Y. Shen, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, and W. Chen. “LoRA: Low-Rank
Adaptation of Large Language Models”. International Conference on Learning Representations. 2022.

14
```

---
## 补充材料（Supplementary Material）

### A 数据集细节

![表 4](../04_assets/table4.png)

**表 4：用于预训练与评估的神经数据集摘要。** 数值表示预训练与评估数据集在训练、验证与测试子集上的合计。

![图 5](../04_assets/fig5.png)

**图 5：按会话划分的训练、验证与测试数据。** 对每个会话（跨全部数据集），10% 试次用于验证，20% 用于测试。其余数据（含试次间片段）用于训练。

**数据集细节。** 对我们全部实验，我们尽量减少数据预处理，与 POYO [12] 一致。预训练所用各数据集来自不同实验室、使用不同实验设置与效应器等。但我们未以任何方式标准化数据集，仅基于加速度值的简单阈值排除行为数据以去除异常值。因此，与 POYO 一样：（1）我们不过滤单元或拒绝多单元；（2）不对全部数据集应用相同的脉冲分类算法（训练数据由阈值交叉单元与经脉冲分类的单单元混合组成）；（3）我们不对速度（即待解码的行为输出）做重采样或额外处理。所用数据集与按会话数据划分细节分别见表 4 与图 5。注意：对 NLB Area2 数据集 [31]，我们未纳入扰动试次。

### B 架构细节

#### B.1 标记化

对我们全部模型，我们使用 POYO 风格标记化 [12]，但有一关键差异：与 POYO 不同，我们不向模型提供分隔符标记（即 [START] 与 [END] 标记）。这减少了作为输入传入模型的标记总数，从而提高效率，但在我们的实验中并未对解码性能产生负面影响。

#### B.2 循环主干

本节提供 POSSM 所用各循环主干的额外细节。重要的是，POSSM 在理论上对循环架构类型无关。

**门控循环单元（GRU）。** 与传统循环神经网络一样，GRU [14] 维持隐状态 \(h_t \in \mathbb{R}^{d}\)，由当前时间步输入 \(x_t \in \mathbb{R}^{n}\) 与先前隐状态 \(h_{t-1}\) 共同决定。在每个时间步，网络计算更新门 \(z_t\) 与重置门 \(r_t\)，定义为：

\[
z_t = \sigma(W_z x_t + U_z h_{t-1} + b_z),\quad
r_t = \sigma(W_r x_t + U_r h_{t-1} + b_r),
\]

其中 \(W_z, W_r \in \mathbb{R}^{d \times n}\)，\(U_z, U_r \in \mathbb{R}^{d \times d}\)，\(b_z, b_r \in \mathbb{R}^{d}\) 分别为输入权重、隐状态权重与偏置。\(\sigma\) 为 sigmoid 激活函数。随后生成候选隐状态：

\[
\tilde{h}_t = \tanh\big(W_h x_t + U_h (r_t \odot h_{t-1}) + b_h\big),
\]

其中 \(W_h \in \mathbb{R}^{d \times n}\)，\(U_h \in \mathbb{R}^{d \times d}\)，\(b_h \in \mathbb{R}^{d}\) 为可学习参数，\(\odot\) 为 Hadamard 积。最终隐状态由更新门对候选与先前隐状态加权得到：

\[
h_t = (1 - z_t) \odot h_{t-1} + z_t \odot \tilde{h}_t.
\]

**对角结构化状态空间模型（S4D）。** 结构化状态空间模型（S4）[15] 建立在线性时不变 SSM 理论之上。具体地，隐状态 \(x(t) \in \mathbb{R}^{d}\) 与输出 \(y(t) \in \mathbb{R}\) 计算如下：

\[
\dot{x}(t) = A x(t) + B u(t),\quad y(t) = C x(t),
\]

其中 \(A \in \mathbb{R}^{d \times d}\)，\(B \in \mathbb{R}^{d \times 1}\)，\(C \in \mathbb{R}^{1 \times d}\) 为权重矩阵，\(u(t) \in \mathbb{R}\) 为时刻 \(t\) 的输入。额外参数 \(\Delta\) 表示步长或输入的时间分辨率。对多通道输入，SSM 独立应用于每个通道。为应用于离散输入序列 \((u_0, u_1, \ldots)\) 而非连续函数 \(u(t)\)，可通过对其参数 \((A, B, C, \Delta)\) 的变换将上述连续时间 SSM 离散化，得到 \((\bar{A}, \bar{B}, C)\) [15]。

不同于只能一次处理一个元素的传统 RNN，S4 的线性性质允许在离散化后将其输出表述为离散卷积：

\[
y_t = \sum_{k=0}^{L} K_k\, u_{t-k},
\]

其中 \(L\) 为序列长度，\(K\) 为参数化为 \(K_k = C \bar{A}^{k} B\) 的卷积核。这一有力性质允许在训练期间跨序列元素并行化计算，从而使同等规模下训练快于非线性 RNN。最后，本工作使用对角 S4 版本（S4D），以仅对角的版本替换传统 HiPPO 初始化 [67]，更快且已显示可保持相近性能。

**Mamba。** 建立在 S4 引入的 SSM 神经网络之上，Mamba [16] 同样旨在成为训练期间可并行推理的循环架构。但与 S4 不同，模型学习动态权重矩阵 \(B_t\) 与 \(C_t\)，现由序列中位置 \(t\) 参数化（且为输入的函数）。这使 Mamba 能选择性地将信息压缩进隐状态，本质上丢弃被认为不重要的信息。

#### B.3 非人灵长类伸手

单会话模型与预训练（o-POSSM）模型之间变化的超参数为：输入维度（即脉冲与潜在标记的大小）、RNN 隐维度，以及 RNN 层数。尽管单会话与多会话模型各自保持一组恒定超参数，模型参数量仍随循环主干选择而变。我们发现：在这三项超参数保持恒定时，S4D 最小而 Mamba 最大。细节见表 5。

![表 5](../04_assets/table5.png)

**表 5：NHP 伸手任务所用 POSSM 变体的超参数与模型规模。**

#### B.4 人类手写

**基线。** 统计基线 PCA-KNN 按 Willett 等 [23] 实现。先用高斯核对脉冲做平滑，再用 PCA 将维数降至 15。随后用 7 个时间扭曲因子对 PC 投影后的神经活动重采样，并计算每个时间扭曲因子结果与数据集中其他全部点之间的欧氏距离。最后，用全部 7 个因子上的最小时间扭曲距离，以 \(k\)-近邻（KNN）分类器对字符分类。此处唯一差异是我们考虑 1.6 s 的神经活动区间。更多细节见原发表。

**POSSM。** 我们使用与 NHP 伸手任务相同的 POSSM 架构。

#### B.5 人类言语

**基线。** 对基线 GRU，我们采用 Willett 等 [3] 所述相同超参数，包括按块归一化与两路高斯噪声注入。单向与双向模型的输入均使用 32 个分箱的归一化脉冲计数滑动窗口，步长为 4 个分箱。单向与双向 GRU 的参数量分别为 55M 与 133M。我们还通过将模型的 GRU 主干替换为 Mamba 与 S4D，引入另外两个基于分箱的基线。

**POSSM。** 该任务我们使用以 GRU 为循环主干的 POSSM（按问题设定取单向或双向）。编码器为单头交叉注意力模块，后接严格在每个 20 ms 箱内运行的 2 头自注意力模块。我们使用输入维度 64 与每箱 4 个潜变量。在编码器输出处，我们将同一箱的潜变量拼接，得到送入 GRU 的 256 维向量。如前节所述，基线方法处理由 \(k\) 个分箱（通常 14 或 32）与步长 \(s\)（通常 4）组成的神经活动滑动窗口。\(k\) 与 \(s\) 的取值用于控制输出序列长度，更大的 \(k\) 被显示有助于性能 [3]。本文中我们改为将 \(k\) 与 \(s\) 均设为 1，并在输出端使用卷积层控制输出序列长度。这确保 POSSM 输出音素的发射频率与基线相同。基线方法还引入线性层将全部 \(k\) 个分箱的拼接映射到固定隐维度，当 \(k\) 较大时很快变得计算昂贵。对 POSSM，避免使用滑动窗口带来可观的参数减少（例如，相对上述设定的 GRU 少 24M 参数）。单向与双向 POSSM 的参数量分别为 32M 与 86M。

### C 训练细节

#### C.1 非人灵长类伸手

由于预测目标是手部或光标速度的二维时间序列，损失函数选为均方误差。遵循 POYO，我们将中心外展伸手段的损失权重提高 5 倍。每个 1 s 训练样本最多提供 100 个行为值作为目标。若数据集行为采样率高于 100 Hz，则在该秒内随机选取 100 个行为样本。

**基线。** 我们对伸手任务考虑四个单会话、基于分箱的基线：MLP、GRU、S4 与 Mamba。对这些模型我们用 50 ms 分箱提取脉冲计数；MLP 步长为 50 ms，其他模型为 10 ms。全部基线用 AdamW 优化器 [68] 训练，批大小 128，基础学习率 0.004，余弦调度，共 500 个 epoch。

除上述模型外，POYO 的单会话与预训练版本也用作基线。遵循 Azabou 等 [12]，POYO 使用 1 s 上下文窗口（评估时步长 50 ms，如第 3.1 节所述）。模型用 LAMB 优化器 [69] 训练，批大小 128，单会话与预训练模型的基础学习率分别为 0.004 与 0.002，余弦调度，共 500 个 epoch。训练期间我们还应用称为单元 dropout 的数据增强方案 [12, 70]：每次迭代随机丢弃输入中一部分单元及其全部脉冲。单元识别与完全微调使用与单会话模型相同的训练超参数，但学习率恒定。对完全微调，先做 100 个 epoch 的单元识别，再解冻模型其余部分训练另外 400 个 epoch。全部模型共训练 500 个 epoch。

最后，对 NDT-2，我们使用 Ye 等 [11] 提供的代码及其默认超参数。但我们在与 POSSM 相同的数据集与划分上预训练并评估 NDT-2。

**POSSM。** 单会话模型在单块 NVIDIA RTX8000 GPU 上用 LAMB 训练，批大小 128，基础学习率 0.004，余弦调度。多数据集预训练在四块 NVIDIA H100 GPU 上用 LAMB 进行，批大小 256，基础学习率 0.002，余弦调度。训练期间采用前述单元 dropout 数据增强。单元识别与完全微调使用与单会话模型相同的训练超参数，但学习率恒定。对完全微调，先做 100 个 epoch 的单元识别，再解冻其余部分训练另外 400 个 epoch。全部模型共训练 500 个 epoch。单会话模型训练不到 30 分钟，多数据集预训练约需 36 小时。

#### C.2 人类手写

**基线。** 对 PCA-KNN 基线，我们在每个会话的验证集上做超参数调优，从 2 到 14 的范围选择近邻数。对 GRU、S4 与 Mamba，我们提供不重叠的 50 ms 脉冲计数分箱作为输入。

**POYO 与 POSSM。** 该任务中，我们对 POYO 与 POSSM 使用单元 dropout 数据增强。对 POYO，除单元 dropout 外，我们还应用额外增强方案——随机时间缩放：每次迭代随机缩放时间戳。

手写任务微调使用逐步解冻策略：开始时仅训练单元嵌入、会话嵌入与任务的线性读出层。注意：解冻线性读出层使手写任务的微调策略区别于此前伸手任务所述策略。训练线性层是必要的，因为手写解码未出现在预训练数据集中。我们微调 POYO-1 共 600 个 epoch（第 40 个 epoch 解冻），而 o-POSSM 微调共 1000 个 epoch（第 50 个 epoch 解冻）。POYO 的全部训练超参数遵循其原作者建议。

对从零训练的 POYO 与 POSSM，以及微调的 POYO-1，训练在单块 NVIDIA RTX8000 GPU 上进行，使用 LAMB，批大小 256，基础学习率 0.00256，余弦调度。微调 o-POSSM 时基础学习率改为 0.008。我们用三个随机种子训练模型并报告平均准确率。

#### C.3 人类言语

**基线。** 言语解码的全部基线在单块 NVIDIA RTX8000 GPU 上用 AdamW 训练，批大小 64，基础学习率 0.02。对单向模型，对基础学习率施加线性衰减调度；对双向模型，学习率保持恒定。

**POSSM。** 单向与双向版本的 POSSM 均在单块 NVIDIA A100 GPU（80GB）上训练，批大小 16。我们通过在训练划分上的交叉验证对学习率调度做超参数搜索。单向情形采用基础学习率 0.0001 与余弦调度。双向情形采用基础学习率 0.00004 与两阶段 one-cycle 调度：学习率先在第 50 个 epoch 增至 0.00008，再以余弦退火降低。

我们全部模型训练 100 个 epoch、三个随机种子，并报告平均准确率。

### D 额外结果

#### D.1 20 ms 时间块上的 NHP 伸手性能

我们运行额外实验，比较使用连续 20 ms 时间块（相对 50 ms）的单会话模型。如表 6 所示，在这些更小时间块上我们未见 POSSM 性能下降，且其继续优于或与基线方法相当。实践中，鉴于 POSSM 的低推理时间，若需要更高预测频率，可在 50 ms 时间块、20 ms 步长下实时运行 POSSM。

![表 6](../04_assets/table6.png)

**表 6：20 ms 时间块下 NHP 伸手任务的行为解码结果。** 最优模型以粗体（第 1）与下划线（第 2）标出。

#### D.2 上下文长度对手写解码的影响

在图 6 中，我们将想象手写解码准确率相对 POSSM 接收的上下文长度作图。这表明：在给定充分上下文时，POSSM 能以因果方式做出准确预测。更重要的是，这些结果展示了 POSSM 对实时应用的适用性——时间序列数据以流式方式送入神经解码器。

![图 6](../04_assets/fig6.png)

**图 6：给定不同上下文长度时的手写解码准确率。** 我们绘制每个微调 o-POSSM 模型在神经活动上下文量递增时的平均准确率与 99% 置信区间。对每个上下文长度，POSSM 在最后时间戳做预测。图的横轴与 “go” 提示时间对齐。

#### D.3 双向模型的言语解码

我们运行了单向情形中识别出的顶级竞争者的双向版本。如表 7 所示，无论有无噪声增强，双向模型相对其单向对应体均展现一致的 2–3% 改进。这是预期的，因为双向模型可利用神经活动的完整时间序列做每个音素预测。与单向情形类似，我们观察到即便不加噪声增强，POSSM 仍优于基线。

![表 7](../04_assets/table7.png)

**表 7：双向模型主干的人类言语解码结果。** 报告 3 个种子上平均的音素错误率（PER）。全部标准差 \(< 0.1\%\)。

#### D.4 从非运动神经活动解码行为

为验证 POSSM 适用于从其他非运动脑区解码行为，我们在 Allen Visual Behaviour Neuropixels 数据集 [71] 中随机选取的 5 个会话上对 POSSM 做了初步实验，该数据集追踪小鼠脉冲活动。此处我们尝试从多区域神经活动（视觉皮层与若干皮层下区域，包括视觉丘脑区、海马与中脑）解码奔跑速度。我们发现单会话 POSSM-GRU 达到 \(R^2 = 0.9295 \pm 0.0326\)（5 个会话平均）。

#### D.5 在每个时间块预测未来行为

为展示输出交叉注意力模块的灵活性，我们训练单会话 POSSM 模型，预测超出每个时间块末端 50 ms 或 100 ms 时间戳处的光标速度（记为“滞后”）。因此，我们用超出与输入时间块相关时间戳的时间戳查询输出模块。该设定下的结果与无滞后的单会话 POSSM 性能相当，或仅略低（表 8）。

![表 8](../04_assets/table8.png)

**表 8：在超出每个时间块末端的时间戳上解码光标速度的结果。** 我们考虑 50 ms 与 100 ms 滞后，并报告跨会话平均 \(R^2\) ± 标准差。

#### D.6 消融脉冲时机信息

POYO 风格标记化的一项关键优势——除便于预训练与泛化外——是它保留脉冲时机信息，而不像基于分箱的方法。为专门检验该方案是否相对分箱带来性能优势，我们训练不带精确脉冲时机信息的单会话 POSSM 模型，改为为全部脉冲提供分箱级时间戳。我们发现：接收脉冲时机信息的模型持续优于仅接收分箱级时间戳的模型（表 9），显示精确脉冲时间对神经解码的优势。

![表 9](../04_assets/table9.png)

**表 9：有无精确脉冲时间的行为解码结果。** 报告跨会话平均 \(R^2\) ± 标准差。

#### D.7 使用特征混合 MLP

尽管实验中我们未在交叉注意力与 SSM 层之后使用特征混合 MLP，我们做了实验检验使用它们是否改进解码性能。如表 10 所示，带特征混合器的性能与现有单会话模型相当或略好。但这些改进以模型规模与推理时间增加为代价。更详细调查留待未来工作。

![表 10](../04_assets/table10.png)

**表 10：有无特征混合 MLP 的行为解码结果。** 报告跨会话平均 \(R^2\) ± 标准差。

#### D.8 用循环编码器替代交叉注意力

我们对单会话 POSSM 模型做了实验：用循环编码器（GRU）编码脉冲标记，以替代输入交叉注意力模块。我们保持与交叉注意力相同的输入配置，向模型提供连续、不重叠的 50 ms 时间块。编码器的隐状态对每个块重新初始化，尽管实践中可为流式神经活动跨块维持状态。我们未对脉冲使用任何位置嵌入，但按脉冲时间排序。结果表明：带循环编码器的模型逊于标准 POSSM 模型，但优于未接收精确脉冲时机信息的模型（表 11）。

![表 11](../04_assets/table11.png)

**表 11：循环编码器相对交叉注意力编码器（有无精确脉冲时机信息）的行为解码结果。** 报告跨会话平均 \(R^2\) ± 标准差。

#### D.9 LoRA 微调作为单元识别的有效替代

在 o-POSSM-GRU 的初步实验中，我们表明：用低秩适配器（LoRA）[72] 在留出会话上微调嵌入，可作为单元识别的有效替代（表 12）。该微调方案训练的参数更少，且比单元识别更快。更详细调查留待未来工作。

![表 12](../04_assets/table12.png)

**表 12：LoRA 微调相对 UI 的行为解码结果。** 报告跨会话平均 \(R^2\) ± 标准差。

---

## NeurIPS 论文清单（第 22–28 页）

原文附有 NeurIPS Paper Checklist（声明、局限性、理论假设、实验可复现性、开源数据与代码、计算资源、人体受试者与动物研究伦理、社会影响等问答）。作者对主要条目的回答摘要如下（忠实意译；完整措辞以原 PDF 为准）：

1. **主张（Claims）：** [Yes] — 摘要与引言中的主张准确反映贡献与范围。
2. **局限性（Limitations）：** [Yes] — 讨论中说明当前评估为离线、模态聚焦于侵入式电生理等局限，并指出未来方向。
3. **理论假设与证明：** [NA] — 本文主要为经验性方法与实验工作。
4. **实验可复现性：** [Yes] — 超参数、训练细节与数据集说明见正文与附录。
5. **开源数据：** [Yes] — 使用公开数据集。
6. **开源代码：** 【待核：清单中对代码发布的具体勾选请对照原 PDF 第 24–25 页】。
7. **计算实验报告：** [Yes] — 报告 GPU/CPU 类型、训练时长与推理时间。
8. **统计显著性：** [Yes] — 报告均值 ± 标准差；部分结果含配对 \(t\) 检验。
9. **人体受试者：** 使用既有公开临床数据集；【待核：伦理声明细节见原 PDF 清单】。
10. **动物研究：** 使用既有公开 NHP/小鼠数据集；数据采集伦理遵循原数据集发布方。
11. **社会影响：** [Yes] — “更广泛影响”一节讨论隐私、人道数据采集与部署前严格测试等。

---

*译文说明：正文（摘要、引言、方法、实验、相关工作、讨论、致谢、附录 A–D）已按章节逐句忠实翻译；图/表嵌入自 PDF 渲染裁剪；公式保留 LaTeX；模型名 POSSM / SSM / Transformer / BCI / GRU / Mamba / S4D / POYO / NDT 等保留英文。参考文献列表以原文英文为准。*
