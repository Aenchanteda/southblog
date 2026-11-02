# 表征漂移的成因与后果（Causes and consequences of representational drift）

**作者：** Michael E. Rule¹、Timothy O’Leary¹、Christopher D. Harvey²  
**单位：**  
¹ Department of Engineering, University of Cambridge, Cambridge CB21PZ, United Kingdom  
² Department of Neurobiology, Harvard Medical School, Boston, MA 02115 USA  

**通讯作者：** O’Leary, Timothy（timothy.oleary@eng.cam.ac.uk）

**出处：** *Current Opinion in Neurobiology* 2019, **58**:141–147  
**专题：** Computational neuroscience（计算神经科学），Edited by Máté Lengyel and Brent Doiron  
**DOI：** https://doi.org/10.1016/j.conb.2019.08.005  
**版权：** © 2019 Elsevier Ltd. All rights reserved.

---

**翻译说明：** 正文为忠实逐句中译；图、表编号与原文一致，插图自 PDF 抽出嵌入；专有名词首次给出「中文（English）」；引用标记如 [4]、作者年份保留。**参考文献列表保留英文原文不译。** 不确定处标【待核】。

---

## 摘要

神经系统在学习新联结的同时，又能在长时间内维持记忆，表现出灵活性与稳定性之间的平衡。近期实验揭示：习得的感觉运动任务的神经元表征（neuronal representations）会在数日乃至数周内持续变化，即便动物已达到熟练的行为表现。习得信息如何被存储，从而在神经元活动持续变化的情况下仍允许行为保持一致？持续重构可能服务于何种功能？我们梳理感觉运动系统中此类表征漂移（representational drift）的近期实验证据，并讨论其如何纳入分布式群体编码（distributed population codes）的框架。我们指出近期理论工作所提示的漂移的计算作用，并论证：感觉运动表征的递归与分布式本质既允许漂移，又限制其破坏性效应。我们提出，表征漂移可能在相互连接的脑区之间产生误差信号，这些信号可用于在持续变化中保持神经编码的一致。上述概念提示了研究分布式、适应性群体编码的学习与维持的实验与理论路径。

---

## 引言

以弗所的赫拉克利特（Heraclitus of Ephesus）有言：人不能两次踏入同一条河流。\* 相应地，我们的大脑持续更新其分子与细胞组分，而经验和记忆的神经元基质也处于持续周转之中 [1–3]。此类周转原则上可以发生而不改变神经元激活与外部世界之间的关系。然而，近期实验揭示：即便任务已被充分习得，对特定任务至关重要的回路中，神经元反应仍会持续重组 [4••,5–8]。

这种表面上的不稳定性挑战了这样一种观点：突触连接与单个神经元反应直接对应于记忆。我们能否调和稳定行为与行为相关神经元活动中的表观不稳定性？神经元表征的稳定性与不稳定性的实验例证此前已有充分综述 [9–11]。在本综述中，我们聚焦于处理该问题的近期与既有理论模型，包括回路持续重构的潜在功能角色。我们提出实验与理论策略，以研究脑回路在稳定行为期间为何以及如何持续演化。

\* Plato, *Cratylus*, 360 B.C.E.（柏拉图《克拉底鲁篇》，公元前 360 年）

---

## 实验发现：在单神经元漂移存在时，群体模式仍可保持一致

近期实验发现，熟悉环境与习得任务的神经元表征会随时间重构或发生「漂移」[4••,6–8]。此处我们所说的「表征」（representations），指与任务相关的刺激、动作及认知变量相关的神经活动。表征可包括例如感觉区中的单细胞感受野（receptive fields），或引导行为的群体活动向量。我们用「表征漂移」（representational drift）一词描述这些表征在没有明显行为改变的情况下所发生的持续变化。

我们将突出一个近期例子来说明表征漂移。Driscoll 及其同事 [4••] 设计了虚拟现实环境中的感觉运动任务，训练小鼠在 T 迷宫（T-maze）中导航（图1a）。每一试次向小鼠呈现视觉线索，指示其在迷宫末端应左转还是右转以获得奖赏。小鼠以高于 90% 的正确率连续数周完成该任务。利用慢性双光子钙成像（chronic two-photon calcium imaging），作者监测了后顶叶皮层（posterior parietal cortex, PPC）中大量单个神经元的活动——已知 PPC 对完成该任务是必需的 [4••,12]。神经元倾向于在任务试次中短暂激活，不同神经元在试次的不同阶段活跃。这在群体上形成铺满整个任务的神经元活动序列（图1b，对角面板）。我们将此活动序列称为任务的表征。

![图1. 后顶叶皮层（PPC）中空间导航编码在数日内发生漂移（改编自 Driscoll 等 [4••]）。（a）Driscoll 等 [4••] 将小鼠置于虚拟现实环境中，要求受试者记住视觉线索以导航至目标。使用钙荧光成像在单神经元分辨率下连续多日记录群体活动。（b）光栅图显示对数百个 PPC 神经元在多日内成像得到的平均钙信号，横轴为任务位置。每一行对应一个神经元，试次平均活动以颜色表示。位置依赖的激活在数日内缓慢漂移：单个神经元获得或失去位置敏感性，或改变其调谐。按任意给定日的激活对细胞排序，都会揭示该日对迷宫位置的不同群体编码。](figures/fig1.png)

关键的是，Driscoll 及其同事发现 PPC 表征在多日乃至数周内并不稳定。如图1b 每一行所示，同一批神经元在不同日表现出明显不同的激活模式。最常见的变化是神经元活动水平改变，从而退出或进入群体表征。较少见的是，细胞表现出选择性（selectivity）的改变。数周后，PPC 中与任务相关的活动几乎完全重构，但在任意给定日，仍可识别出铺满任务的一亚群群体（图1b，对角线）。每只动物的任务表现始终保持高位，行为并未因表征漂移而发生可测的改变。

类似类型的漂移已在多个脑区被报道，包括海马以及新皮层的感觉与运动部分 [6–8,13]。此外，树突棘（dendritic spines）的结构可塑性程度之高也有广泛证据 [7,14•,15]。例如，在海马中，预期全部树突棘会在数周内发生周转 [7]。如此剧烈的突触周转表明，即便动物能维持稳定的任务表现与记忆，回路仍在持续重连。我们强调：并非所有脑区、并非所有任务都观察到漂移 [14•,15]。尽管如此，表征漂移的发现对行为如何在神经回路中被学习与控制、以及此类习得行为的记忆究竟由什么构成，提出了深刻的问题。

---

## 分布式群体编码可以容纳表征漂移

表征漂移对记忆与联结的长期编码看似成问题。然而，冗余表征可能允许一定程度的漂移而不扰乱行为。即便在简单神经系统中，具有不同解剖连接或生理特征、但整体功能相似的回路构型的存在也已得到充分记载 [16]。冗余常被视为生物学上的必要，因为大脑必须对单个神经元的失效以及对环境扰动具有鲁棒性。因此，大脑可能通过简并性（degeneracy）实现鲁棒性：高维表征在保持行为的同时，允许实现数量巨大的等价回路构型 [17]。有相当多证据表明，大脑对本质上低维的任务采用高维表征 [18–20,21••]。低维任务可以多种构型在更高维的群体活动中被表征。为说明这一点，我们可对 Driscoll 等研究中的任务，通过对 PPC 群体活动做降维来探索其神经元群体表征。该例中使用无监督降维算法 [22,23]，寻找保留群体活动中最近邻结构的二维投影。在不知任务细节或观测位置的情况下，该算法识别出群体活动状态的「T 形」点云（图2a）。点云中每一点对应试次中单个时间箱的群体活动，点云整体映射出动物在任务期间的导航轨迹。尽管可以识别内部一致的神经元表征（图2b），单个神经元编码这些表征的方式却随时间改变。

图2a 中提取的低维结构坐落于远更高维的群体活动空间中。该结构在群体活动空间中移动、同时保留 T 形的拓扑与局部结构，存在潜在的许多自由度。这种移动可以容纳不同时间不同神经元贡献的差异，或单细胞调谐的变化。

有趣的是，此类高维表征还有其他不那么显而易见的益处。Raman 及其同事的近期研究 [24] 表明，具有过量连接的网络能够更快地学习，并在固定复杂度的任务上达到更高的渐近表现——以规定固定输入到输出映射所需参数数目来量化。该研究表明：对较低维任务的高维表征有利于学习，而与所用学习规则无关。

从低维任务的高维编码中浮现出的一个显著概念是「零空间」（null space）。零空间是群体活动中与低维任务表征正交的子空间 [25,26]。图2c 示意两个亚群 \(y_1\) 与 \(y_2\) 的群体活动如何共变于编码特定特征 \(x\) 的群体中。若假定该特征编码于活动之和 \(y_1 + y_2\)，则对 \(x\) 的紧密调谐可与沿零方向（\(y_1 - y_2\) 方向）的大幅变异并存。亚群可能显得多变，即便全局表征受到良好约束。例如，近期工作提示 V1 中的群体编码是结构化的，分布式表征的方差低于单个神经元 [27••]。

零空间概念被用来解释单个神经元群体如何能表征多种行为情境，例如运动计划与执行 [28,26,29]。为说明这一点，图2d 描绘同一群体在两种不同行为情境下的活动样本。行为变量 \(x_1\) 与 \(x_2\) 在每一情境中彼此关系不同（左图）。神经元活动中的高维表征 \(z_i\) 使这些情境占据群体活动空间的不同部分（中图）。通过检视群体活动的子空间，可在一种情境中观察到任务变量的相关物，而在另一种情境中则不然（右图）。这意味着神经元活动可沿与编码或任务表现无关的方向漂移 [25,30]。若群体活动的维度远高于任务维度，即便是随机漂移也将大多落在此「零空间」内。因此，高维群体表征可以容忍漂移，并允许多种回路构型产生相似输出。

![图2. 内部表征具有不受约束的自由度，从而允许漂移。（a）对群体活动的非线性降维恢复了 [4••] 中 T 迷宫的低维结构（图1a）。每一点表示群体活动的单个时间点，并按迷宫中的位置着色。（b）点云示意如（a）中的神经活动低维投影。尽管无监督降维方法可在每一日恢复任务结构，该结构在群体中被编码的方式可在数日至数周内改变。（c）左：神经群体可在相对发放率与相关中编码信息，此处示意为编码于两个神经信号之和（\(y_1 + y_2\)）的感觉变量。点表示同一刺激重复呈现期间的神经活动。正交于该编码轴的变异不扰乱编码，但若发生在慢时间尺度上，在实验中可表现为漂移。右：此类分布式编码可能难以从所记录的亚群中读出（例如单独的 \(y_1\) 或 \(y_2\)；黑色），尤其当它们涉及脑区之间的相关时。（d）左：外部协变量可呈现情境依赖的关系。此处每一点反映给定时间点的神经群体状态。方向 \(x_1\) 与 \(x_2\) 之间的关系随情境而变（青色对比红色）。中：在内部，这可表示为混合模型，将不同子空间分配给每一情境的编码，且表征线性可分（灰色平面）。右：扩展后的表征包含两个正交子空间，各自编码一个独立的、情境依赖的关系。这种维度扩展增加了内部表征的自由度，从而增加了漂移的机会。](figures/fig2.png)

分布式与冗余群体表征的进一步证据来自近期强调感觉运动信息分布式本质的工作 [31]。尤其是，近期研究显示运动输出影响感觉编码 [32,33••]。此外，近期报告表明刺激、动作与认知变量分布于感觉与运动区，且常以重叠表征的形式出现。此类报告不胜枚举（例如见 [31,34–36]）。

因此，广泛分布表征的存在，要求我们在比实验中通常考察的更广的神经元群体层面——甚至跨脑区——理解漂移。这种更广的考察对于理解漂移相对于全局群体表征的尺度、包括正确识别分布式活动的编码维度，将是关键的。

---

## 表征漂移在分布式、适应性回路中可能不可避免

表征漂移有时被视为被动的、噪声驱动的过程。然而，它也可能反映诸如学习等其他持续过程。在典型实验室实验中，所关注的是某一特定任务及其相关表征，但同一神经元群体很可能也用于受试者生活的其他方面。因此，在实验过程中，动物很可能学习许多新联结并获得新经验，这些都必须被纳入所研究的神经元群体 [37,38]。为防止新联结扰乱先前习得的联结，大脑可能需要对其进行重新编码。

在 Driscoll 等的工作中，这些想法通过对已经学会较早联结的小鼠再训练学习新的感觉运动联结加以探索。有趣的是，他们发现：用于表征先前习得联结与用于学习期间发展新联结的，似乎是同一批神经元。这一发现表明表征漂移确实可能反映新学习，并提示一个神经元群体可同时被用于学习与记忆。将漂移视为持续学习的这一想法，与近期理论工作一致：该工作预测存在一个高度可塑的、与群体活动相调谐的神经元亚群 [39]。

即便在没有显式学习的情况下，神经元表征也持续适应以高效编码信息 [40]。随着感觉表征调整，下游区域也必须调整其连接或内部表征以保持一致。高效编码并不限于感觉功能：即便感觉区也会学习预期运动输出 [41]，人们也可预期网络会跟踪环境统计量的变化，包括演化中的认知与记忆效应。这些因素共同使神经「环境」处于持续变动之中。因此，漂移可能是持续细化与巩固的预期后果。

---

## 预测编码与内部误差信号可检测并纠正漂移

无论漂移的来源为何，神经元表征必须保持在等价表征的子空间内，才能保存行为与习得联结（图3a 以曲面示意）。随时间推移，神经元表征的变化预期会累积，最终导致冗余无法容纳的破坏性效应。因此，需要某种持续的纠正作用，以在长时标上约束神经元表征。在许多情形下，外部刺激可提供这种纠正反馈。例如，在 Driscoll 等的工作中，小鼠在每一次正确试次后获得奖赏，这可作为更新行为所需充分神经元表征子空间的外部信号。此外，也可使用其他维持连贯表征的机制，包括离线排练（off-line rehearsal）[42] 与细胞集合的再激活（reactivation of cell assemblies）[43]。

在缺少外部学习线索时，我们提出：在递归连接的脑区之间交换的内部误差信号，可维持分布式表征中的一致性。例如，空间导航要求感觉、联合与运动区域中的表征保持一致。任一区域表征的改变都可能扰乱与其他区域表征的一致性。其他区域中的可塑性随后可用于补偿这一改变，从而使跨脑区分布的表征以一致的方式漂移（图3b）。

![图3. 递归网络中的局部变化具有全局效应，而全局过程可以补偿。（a）曲面表示适用于给定感觉运动任务的网络构型，亦即产生一致行为的神经连接与调谐。每一轴表示不同的回路参数。扰乱表现的持续过程必须经由误差反馈纠正（中图），以维持整体感觉运动准确性。（右图）原则上，在可行回路构型空间中可持续进行回路重构。（b）彩色点表示神经群体活动在不同时间点向任务相关维度的投影。活动示意于三个假想区域，描绘刺激输入向前馈变换为运动输出。（上）若某一区域的表征改变（例如内部感觉表征的旋转 \(\Delta s\)，弯曲黑箭头），下游区域也必须补偿以避免误差（例如运动误差 \(\Delta m\)，弯曲灰箭头）。（下）尽管原始扰动是局部的，补偿可分布于许多区域。每一下游区域可调整其如何解释输入。此处以弯曲箭头示意，表示部分纠正原始扰动的补偿性旋转。神经调谐中的分布式调整，在仅考察局部亚群的实验中可表现为漂移。](figures/fig3.png)

这一概念契合预测编码（predictive coding）框架：神经回路学习相互预测彼此的活动模式，目标是最小化内部预测误差 [44•,45]。在此框架下，若一个脑区从另一脑区接收到的输入与预期不同——例如由于输入区发生漂移——该脑区可能产生误差信号。此类误差信号可引导可塑性，以维持跨区表征的一致性。大量工作已在内部预测与传入感觉信号之比较的语境中强调预测编码与误差信号的概念 [33••,46]。然而，据我们所知，该概念尚未在脑区之间广泛的内部预测语境中得到探索。这将是未来研究的有趣领域，尤其是识别此类误差信号是否存在，并检验这些信号如何用于维持跨区连贯表征。

---

## 表征漂移可能的计算用途

神经元表征中的漂移与不稳定性可能服务于重要的计算功能。对这些潜在功能的若干洞见来自与机器学习所用策略的比较。例如，常见的实验发现是：一些神经元从以任务或行为相关的方式高度活跃，变为在随后数日沉默。单个神经元的短暂沉默（例如 [47•]）可能是用于正则化深度神经网络的「丢弃」（drop-out）训练策略的神经相关物 [48]。

近期工作提出，漂移允许对事件进行「时间戳」（time-stamping），其依据是：不同日在同一环境中活跃的是不同组的海马位置细胞（place cells）[5]。活跃位置细胞的集合不仅传达关于环境的信息，也传达关于时间的信息。时间戳可支持情节记忆（episodic memory），消歧时间上分离的相似环境情境。相应地，在快时间尺度上也观察到对不同记忆的互斥群体表征 [49]，且时间情境似乎参与快时间尺度上的情节记忆 [50]。这在抽象层面上连接到近期提出的机器学习策略「情境依赖门控」（context-dependent gating）[51•]：该策略以情境依赖的方式沉默神经元亚群，以减弱干扰。若时间本身是重要的情境变量，则独特的情境表征可从漂移表征中自然涌现。

近期理论工作提示，漂移可能允许大脑从可能解的大空间中进行采样 [52]。在此情形下，学习与漂移共同作用，在朝向最优解移动的同时采样足够多的可能性，以避免全局次优的局部解。此时，漂移既可以是采样构型景观的有意策略，也可以是嘈杂且易错学习的副产品。一些理论表明：涨落是噪声系统中优化的预期特征 [25]，因此漂移可能支持随机强化学习 [53••]。

---

## 展望

大脑是适应性系统，因而其结构会改变。尽管这一点在学习语境中已被认识，近期实验发现提示更强的结论：即便在旨在研究稳定行为的实验范式中，大脑的某些部分也无法保持固定。距感觉输入或运动输出数个突触连接之远的神经元，与外部世界的拴系较弱。因此，参与抽象表征与高层行为计划的神经元，可在回路层面神经编码简并性所设定的限度内自由重构。

这一认识提示了捕捉支撑稳定感觉运动行为的群体活动不变结构的路径。它也意味着脑区之间的内部反馈信号普遍存在。这为神经回路的理论模型提供了框架，并可能有助于理解许多脑区连接逻辑。因此，整合分布式表征中的集体神经动力学、学习与预测编码理论，对于理解感觉运动表征如何演化至关重要。

我们主张在如何思考学习与记忆上做出实验与理论的转向。与其将学习与记忆视为顺序的、甚至可能离散的、发生在分离回路中的事件，我们主张应将二者一并研究以理解其相互作用。大脑是相互连接的网络，一区的变化很可能影响远端神经元群体。可能需要全局协调的可塑性来保存既有联结。换言之，「要保持不变，一切都必须改变」。† 跟踪脑区之间相互作用的实验，对于考察学习与记忆以及稳定行为期间的长期神经元群体动力学将是关键的。此类实验将检验在持续变化存在下群体编码与记忆的新兴理论，揭示大脑如何实现其最本质的功能之一——随经验重组以引导未来行动。

† ‘Se vogliamo che tutto rimanga com’è, bisogna che tutto cambi’，Giuseppe Tomasi di Lampedusa, *Il Gattopardo*, 1958.（「若我们希望一切保持原样，则必须让一切都改变。」朱塞佩·托马西·迪·兰佩杜萨，《豹》，1958）

---

## 利益冲突声明

无申报。

---

## 致谢

我们感谢 Dhruva Raman、Sofia Soares、Thomas Burger 与 Monika Jozsa 对稿件的评论。本工作得到 Human Frontier Science Program、ERC grant StG 716643 FLEXNEURO，以及 NIH grants（NS108410, NS089521, MH107620）的支持。

---

## 参考文献

（参考文献列表保留英文原文不译。）

1. Tonegawa S, Pignatelli M, Roy DS, Ryan TJ: Memory engram storage and retrieval. *Curr Opin Neurobiol* 2015, **35**:101-109.

2. Mongillo G, Rumpel S, Loewenstein Y: Intrinsic volatility of synaptic connections — a challenge to the synaptic trace theory of memory. *Curr Opin Neurobiol* 2017, **46**:7-13.

3. Rumpel S, Triesch J: The dynamic connectome. *e-Neuroforum* 2016, **22**:48-53.

4. •• Driscoll LN, Pettit NL, Minderer M, Chettih SN, Harvey CD: Dynamic reorganization of neuronal activity patterns in parietal cortex. *Cell* 2017, **170**:986-999.  
   The authors examine neural representations for spatial navigation in mouse posterior parietal cortex using a closed-loop virtual reality environment, and find that the neural code drifts and reconfigures itself over days.

5. Rubin A, Geva N, Sheintuch L, Ziv Y: Hippocampal ensemble dynamics timestamp events in long-term memory. *eLife* 2015, **4**:e12247.

6. Ziv Y, Burns LD, Cocker ED, Hamel EO, Ghosh KK, Kitch LJ, El Gamal A, Schnitzer MJ: Long-term dynamics of CA1 hippocampal place codes. *Nat Neurosci* 2013, **16**:264.

7. Attardo A, Fitzgerald JE, Schnitzer MJ: Impermanence of dendritic spines in live adult CA1 hippocampus. *Nature* 2015, **523**:592.

8. Attardo A, Lu J, Kawashima T, Okuno H, Fitzgerald JE, Bito H, Schnitzer MJ: Long-term consolidation of ensemble neural plasticity patterns in hippocampal area CA1. *Cell Rep* 2018, **25**:640-650.

9. Clopath C, Bonhoeffer T, Hübener M, Rose T: Variance and invariance of neuronal long-term representations. *Philos Trans R Soc B: Biol Sci* 2017, **372**:20160161.

10. Lütcke H, Margolis DJ, Helmchen F: Steady or changing? Long-term monitoring of neuronal population activity. *Trends Neurosci* 2013, **36**:375-384.

11. Llera-Montero M, Sacramento J, Costa RP: Computational roles of plastic probabilistic synapses. *Curr Opin Neurobiol* 2019, **54**:90-97 0959-4388. Neurobiology of Learning and Plasticity.

12. Harvey CD, Coen P, Tank DW: Choice-specific sequences in parietal cortex during a virtual-navigation decision task. *Nature* 2012, **484**:62.

13. Huber D, Gutnisky DA, Peron S, O’connor DH, Simon Wiegert J, Tian L, Oertner TG, Looger LL, Svoboda K: Multiple dynamic representations in the motor cortex during sensorimotor learning. *Nature* 2012, **484**:473.

14. • Katlowitz KA, Picardo MA, Long MA: Stable sequential activity underlying the maintenance of a precisely executed skilled behavior. *Neuron* 2018.  
    This study find extremely robust and long-lived neural representations underlying birdsong, in contrast to many studies that report single-neuron instability.

15. Dhawale AK, Poddar R, Wolff SBE, Normand VA, Kopelowitz E, Ölveczky BP: Automated long-term recording and analysis of neural activity in behaving animals. *eLife* 2017, **6**:e27702.

16. Marder E, Goeritz ML, Otopalik AG: Robust circuit rhythms in small circuits arise from variable circuit components and mechanisms. *Curr Opin Neurobiol* 2015, **31**:156-163.

17. Brinkman BAW, Rieke F, Shea-Brown E, Buice MA: Predicting how and when hidden neurons skew measured synaptic interactions. *PLoS Comput Biol* 2018, **14**:e1006490.

18. Cunningham JP, Yu BM: Dimensionality reduction for large-scale neural recordings. *Nat Neurosci* 2014, **17**:1500.

19. Vargas-Irwin CE, Franquemont L, Black MJ, Donoghue JP: Linking objects to actions: encoding of target object and grasping strategy in primate ventral premotor cortex. *J Neurosci* 2015, **35**:10888-10897.

20. Gallego JA, Perich MG, Miller LE, Solla SA: Neural manifolds for the control of movement. *Neuron* 2017, **94**:978-984.

21. •• Gallego JA, Perich MG, Naufel SN, Ethier C, Solla SA, Miller LE: Cortical population activity within a preserved neural manifold underlies multiple motor behaviors. *Nat Commun* 2018, **9**:4233.  
    This study demonstrates that sensorimotor processing is best viewed in terms of models of population activity lying on low-dimensional manifolds, and that population-level correlations reflect stable invariants underlying motor control across diverse tasks.

22. Belkin M, Niyogi P: Laplacian eigenmaps for dimensionality reduction and data representation. *Neural Comput* 2003, **15**:1373-1396.

23. Rubin A, Sheintuch L, Brande-Eilat N, Pinchasof O, Rechavi Y, Geva N, Ziv Y: Revealing neural correlates of behavior without behavioral measurements. *bioRxiv* 2019 http://dx.doi.org/10.1101/540195.

24. Raman DV, Rotondo AP, O’Leary T: Fundamental bounds on learning performance in neural circuits. *Proc Natl Acad Sci U S A* 2019, **116**:10537-10546.

25. Rokni U, Richardson AG, Bizzi E, Seung HS: Motor learning with unstable neural representations. *Neuron* 2007, **54**:653-666.

26. Kaufman MT, Churchland MM, Ryu SI, Shenoy KV: Cortical activity in the null space: permitting preparation without movement. *Nat Neurosci* 2014, **17**:440.

27. •• Montijn JS, Meijer GT, Lansink CS, Pennartz CMA: Population-level neural codes are robust to single-neuron variability from a multidimensional coding perspective. *Cell Rep* 2016, **16**:2486-2498.  
    The authors show that distributed population relationships in visual cortex encode stimuli more robustly than single-neurons or pairwise statistics, demonstrating that apparent variability may be due to subsampling population dynamics.

28. Elsayed GF, Lara AH, Kaufman MT, Churchland MM, Cunningham JP: Reorganization between preparatory and movement population responses in motor cortex. *Nat Commun* 2016, **7**:13239.

29. Vargas-Irwin CE, Feldman JM, King B, Simeral JD, Sorice BL, Oakley EM, Cash SS, Eskandar EN, Friehs GM, Hochberg LR et al.: Watch, imagine, attempt: motor cortex single unit activity reveals context-dependent movement encoding in humans with tetraplegia. *Front Human Neurosci* 2018, **12**:450.

30. Druckmann S, Chklovskii DB: Neuronal circuits underlying persistent representations despite time varying activity. *Curr Biol* 2012, **22**:2095-2103.

31. Minderer M, Brown KD, Harvey CD: The spatial structure of neural encoding in mouse posterior cortex during navigation. *Neuron* 2019, **102**:232-248.

32. Stringer C, Pachitariu M, Steinmetz N, Reddy CB, Carandini M, Harris KD: Spontaneous behaviors drive multidimensional, brain-wide population activity. *bioRxiv* 2018:306019.

33. •• Attinger A, Wang B, Keller GB: Visuomotor coupling shapes the functional development of mouse visual cortex. *Cell* 2017, **169**:1291-1302.  
    Apical dendrites in layer 2/3 of visual cortex receive rapid feedback signals related to sensorimotor errors. This work argues for an experience-dependent internal model, and the possibility of global and distributed error feedback when that model is violated.

34. Aronov D, Nevers R, Tank DW: Mapping of a non-spatial dimension by the hippocampal-entorhinal circuit. *Nature* 2017, **543**:719.

35. Pakan JMP, Francioni V, Rochefort NL: Action and learning shape the activity of neuronal circuits in the visual cortex. *Curr Opin Neurobiol* 2018, **52**:88-97.

36. Saleem AB, Diamanti EM, Fournier J, Harris KD, Carandini M: Coherent encoding of subjective spatial position in visual cortex and hippocampus. *Nature* 2018, **562**:124.

37. Dudai Y, Karni A, Born J: The consolidation and transformation of memory. *Neuron* 2015, **88**:20-32.

38. Asok A, Leroy F, Rayman JB, Kandel ER: Molecular mechanisms of the memory trace. *Trends Neurosci* 2018.

39. Sweeney Y, Clopath C: Population coupling predicts the plasticity of stimulus responses in cortical circuits. *bioRxiv* 2018:265041.

40. Wilf M, Strappini F, Golan T, Hahamy A, Harel M, Malach R: Spontaneously emerging patterns in human visual cortex reflect responses to naturalistic sensory stimuli. *Cereb Cortex* 2017, **27**:750-763.

41. Ramesh RN, Burgess CR, Sugden AU, Gyetvan M, Andermann ML: Intermingled ensembles in visual association cortex encode stimulus identity or predicted outcome. *Neuron* 2018, **100**:900-915.

42. Káli S, Dayan P: Off-line replay maintains declarative memories in a model of hippocampal-neocortical interactions. *Nat Neurosci* 2004, **7**:286.

43. Jan Fauth M, van Rossum MCW: Self-organized reactivation maintains and reinforces memories despite synaptic turnover. *eLife* 2019, **8**:e43717.

44. • Chalk M, Marre O, Tkačik G: Toward a unified theory of efficient, predictive, and sparse coding. *Proc Natl Acad Sci U S A* 2018, **115**:186-191.  
    This theoretical work explores how sensory systems might efficiently encode the future, and predicts surprising population responses in a model of visual encoding.

45. Koren V, Denève S: Computational account of spontaneous activity as a signature of predictive coding. *PLoS Comput Biol* 2017, **13**:e1005355.

46. Keller GB, Mrsic-Flogel TD: Predictive processing: a canonical cortical computation. *Neuron* 2018, **100**:424-435.

47. • Prsa M, Galiñanes GL, Huber D: Rapid integration of artificial sensory feedback during operant conditioning of motor cortex neurons. *Neuron* 2017, **93**:929-939.  
    While studying learning and conditioning in single neurons, this study finds that neurons in mouse motor cortex drop out of the population response on the scale of days.

48. Srivastava N, Hinton G, Krizhevsky A, Sutskever I, Salakhutdinov R: Dropout: a simple way to prevent neural networks from overfitting. *J Mach Learn Res* 2014, **15**:1929-1958.

49. Malvache A, Reichinnek S, Villette V, Haimerl C, Cossart R: Awake hippocampal reactivations project onto orthogonal neuronal assemblies. *Science* 2016, **353**:1280-1283.

50. Long NM, Kahana MJ: Hippocampal contributions to serial-order memory. *Hippocampus* 2019, **29**:252-259.

51. • Masse NY, Grant GD, Freedman DJ: Alleviating catastrophic forgetting using context-dependent gating and synaptic stabilization. *Proc Natl Acad Sci U S A* 2018, **115**:E10467-E10475 http://dx.doi.org/10.1073/pnas.1803839115 0027-8424.  
    This computational study finds that silencing parts of a neural network in a context-dependent manner can allow it to learn multiple tasks with reduced interference.

52. Kappel D, Habenschuss S, Legenstein R, Maass W: Network plasticity as Bayesian inference. *PLoS Comput Biol* 2015, **11**:e1004485.

53. •• Kappel D, Legenstein R, Habenschuss S, Hsieh M, Maass W: A dynamic connectome supports the emergence of stable computational function of neural circuits through reward-based learning. *eNeuro* 2018, **5** ENEURO-0301.  
    This computational study shows that instability in single-neurons and synapses is compatible with sustained sensorimotor performance, provided continued error feedback is available. Once the task is learned, noise and other biological processes cause the network configuration to drift randomly, rearranging as it explores the space of equivalent solutions.
