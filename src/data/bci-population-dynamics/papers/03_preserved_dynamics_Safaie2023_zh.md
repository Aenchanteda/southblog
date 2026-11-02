# 执行相似行为的动物之间保留的神经动力学（Preserved neural dynamics across animals performing similar behaviour）

> **原文：** Safaie, M., Chang, J.C., Park, J., Miller, L.E., Dudman, J.T., Perich, M.G. & Gallego, J.A.  
> **期刊：** *Nature*, Vol. 623, pp. 765–771 (23 November 2023)  
> **DOI：** https://doi.org/10.1038/s41586-023-06714-0  
> **收稿：** 2022-09-26｜**接受：** 2023-10-04｜**在线发表：** 2023-11-08  
> **译文说明：** 正文忠实中译；图为原 PDF 抽出；参考文献保留英文；不确定处标【待核】。

---

**作者：** Mostafa Safaie<sup>1,6</sup>, Joanna C. Chang<sup>1,6</sup>, Junchol Park<sup>2</sup>, Lee E. Miller<sup>3</sup>, Joshua T. Dudman<sup>2</sup>, Matthew G. Perich<sup>4,5,7</sup> ✉ & Juan A. Gallego<sup>1,7</sup> ✉

<sup>1</sup>Department of Bioengineering, Imperial College London, London, UK.  
<sup>2</sup>Janelia Research Campus, Howard Hughes Medical Institute, Ashburn, TX, USA.  
<sup>3</sup>Departments of Physiology, Biomedical Engineering and Physical Medicine and Rehabilitation, Northwestern University and Shirley Ryan Ability Lab, Chicago, IL, USA.  
<sup>4</sup>Département de Neurosciences, Faculté de Médecine, Université de Montréal, Montreal, Quebec, Canada.  
<sup>5</sup>Mila, Quebec Artificial Intelligence Institute, Montreal, Quebec, Canada.  
<sup>6</sup>These authors contributed equally: Mostafa Safaie, Joanna C. Chang.  
<sup>7</sup>These authors jointly supervised this work: Matthew G. Perich, Juan A. Gallego.  
✉ e-mail: matthew.perich@umontreal.ca; jgallego@imperial.ac.uk

---

## 摘要

同一物种的动物表现出相似的行为，这些行为对其身体与环境具有适应性优势。这些行为在物种水平上由进化时间尺度上的选择压力塑造。然而，这些共同的行为适应如何从每个个体特异的神经回路中涌现，仍不清楚。由于共同的、由进化规定的发育程序<sup>2–4</sup>，神经回路的总体组织在个体间得以保留<sup>1</sup>。这种回路层面的组织可能约束神经活动<sup>5–8</sup>，从而在神经群体中产生低维的潜在动力学（latent dynamics）<sup>9–11</sup>。据此，我们在此提出：同一物种内共享的回路层面约束，将导致个体间适当保留的潜在动力学。我们分析了猴与小鼠运动皮层的神经群体记录，以证明：当同一物种的个体执行相似行为时，其神经动力学出人意料地得以保留。当动物有意识地规划未来运动而无外显行为时<sup>12</sup>，神经群体动力学同样得以保留，并使得跨不同个体解码计划中与进行中的运动成为可能。此外，我们发现保留的神经动力学可延伸到皮层区域之外，到达进化上更古老的结构——背侧纹状体（dorsal striatum）<sup>13,14</sup>。最后，我们用神经网络模型证明：行为相似性对此种保留是必要的但并非充分的。我们主张，这些涌现的动力学源于脑发育所受的进化约束，因而反映了行为神经基础的基本性质。

---

## 引言

一个物种中每个个体的行为，由全脑神经群体的协调活动驱动。这种活动来自潜在动力学，即神经共变主导模式的时间依赖性激活<sup>9,11</sup>。这些潜在动力学似乎由回路与生物物理约束所塑造<sup>5–8</sup>。鉴于同一物种个体间脑回路存在巨大差异——包括某些类型特异神经元、树突形态与受体分布<sup>15–19</sup>——仍不清楚相似的适应性行为如何从如此特异的神经回路中涌现。一种可能是：每个个体独特的回路产生独特的潜在动力学，却产出相同的行为输出。的确，相对于行为，神经活动具有高度自由度<sup>20,21</sup>，这可能允许不同的潜在动力学产生相似行为。另一种可能是：两个个体执行的相同行为，可由保留的潜在动力学产生。这种保留将源于物种特异发育程序所导致的、跨个体共享的神经回路共同组织。

在此，我们采纳后一假说：同一物种中从事相同行为的不同个体，产生保留的潜在动力学。我们主张，保留的回路约束催生了一种物种范围的神经景观（neural landscape），而在某一行为中观测到的个体特异潜在动力学，是穿越该景观的共同轨迹的不同实例化（图 1）。我们的假说提供若干可检验的预测。第一，由于神经回路的低层细节是特异的，它们对于解释物种典型行为的涌现并非必要。因此，从事相同行为的同一物种不同动物应表现出保留的潜在动力学。第二，跨个体潜在动力学的保留程度，应受行为输出相似性的约束。第三，由于低维潜在动力学见于全脑而非仅见于皮层区域<sup>22–24</sup>，我们也应在与皮层共进化数亿年的结构（如基底神经节）中观测到保留的潜在动力学<sup>14</sup>。第四，由于隐蔽行为（covert behaviours）似乎由与外显行为相同的神经回路介导<sup>25</sup>，我们应在执行相同认知任务的动物间发现共享的潜在动力学。

![图 1](figures_03_safaie2023/fig1.png)

**图 1｜假说。** a,b，同一物种中执行相同行为的不同个体，将通过实例化嵌入于神经活动 *D* 维（Dim）中的物种范围「神经景观」，产生保留的神经群体潜在动力学。c，这些保留的潜在动力学，可通过「对齐」从每个个体神经群体记录估计得到的潜在动力学而揭示（*N*<sub>A1–3</sub> 与 *N*<sub>B1–3</sub> 分别示意猴 A 与猴 B 记录的三个神经元）。

---

## 跨动物保留的潜在动力学

我们用猴与小鼠在执行上肢任务时的神经群体记录，检验上述四项预测。首先，我们分析了从事八目标指令延迟中心外向（instructed-delay centre-out）伸手任务的猴的运动皮层记录（图 2a,b 与扩展数据图 1a；方法）。三只猴均在该任务上训练良好，并表现出高度刻板的手部轨迹（每只猴的平均轨迹相关：*r* = 0.89、0.90 与 0.92；扩展数据图 1b）。对每个会话，我们用主成分分析（principal component analysis, PCA）估计外显运动执行下的潜在动力学：将每个记录神经元（或对猴 J 为多单位）的发放率投影到前十个 PCA 轴上（神经模式 neural modes；示例见图 2c；扩展数据图 1c）。随后，我们用典型相关分析（canonical correlation analysis, CCA<sup>26</sup>）对齐来自两只不同动物的每对实验会话的潜在动力学；该方法通过线性变换最大化两组信号间的相关（类似于文献 26–28）。

这一线性方法揭示：两只不同猴表面上不同的潜在动力学，实际上高度保留（图 2e）。跨动物相关大大超过两个下界对照。第一个对照通过对齐随机选取的行为时段建立（图 2f 中「对照」）；第二个对照基于保留神经活动统计结构的替代数据<sup>29</sup>（张量最大熵 tensor maximum entropy, TME；扩展数据图 2a,b）。最重要的是，这些相关几乎与在同一动物单个会话内对齐两个试次子集所得的值一样高（图 2f 中「内」；更多示例见扩展数据图 3a）。该结果在全部三只猴的所有会话对上成立（*n* = 126 次比较；图 2g）。【待核：原文写 “n = 126 sessions”，结合图注应为 126 次比较/comparisons】对齐后的神经模式捕获了很大比例的神经方差（扩展数据图 2e），且结果不依赖于所假定的神经流形维度（扩展数据图 2f）或对齐方法（扩展数据图 2g,h）。

尽管我们已证明跨动物潜在动力学的保留，这些共享动力学未必与行为相关。为此，我们训练神经网络解码器<sup>30</sup>（长短期记忆网络 long short-term memory networks, LSTMs）以预测一只动物的手部轨迹，并在第二只动物上测试其表现。跨动物解码准确度接近由在同一动物上训练并测试的解码器所提供的上界（图 2h；预测示例见扩展数据图 4）。因此，跨动物保留的运动皮层动力学包含关于进行中运动学的详细信息。

随后，我们分析了四只训练执行伸手并拉动操纵杆任务的小鼠的数据（图 2i 与扩展数据图 5）。我们发现，无论在个体内还是跨个体，行为输出的试次间相似性都低于猴数据集（比较扩展数据图 1a,b 与 5a,b）。如所预测，我们的对齐程序揭示：小鼠运动皮层潜在动力学在伸向两个不同目标时（图 2j 与扩展数据图 3b 与 2c；示例见扩展数据图 3e）以及随后以两种不同力度拉动时（扩展数据图 6a）大体得以保留。然而，这些相关低于猴（比较图 2g 与 2j），并直接影响我们跨动物解码运动学的能力（扩展数据图 6b）。这一差异可由猴相对小鼠更高度刻板的行为解释（图 2k 插图）。种间比较证实：行为刻板性既与跨个体潜在动力学的保留相关（图 2k），也与跨动物解码准确度相关（扩展数据图 6f）。这些结果在两个进化上分歧的物种中证明：行为输出相似性与跨个体运动皮层潜在动力学保留之间存在直接对应。

![图 2](figures_03_safaie2023/fig2.png)

**图 2｜执行相同行为的动物之间保留的潜在动力学。** a，猴使用平面操纵装置执行八目标指令延迟中心外向伸手任务。b，两只猴以运动起始对齐的示例归一化神经发放率（上）与手部轨迹（下）。每列显示箭头所示八个目标之一的一次伸手。注意猴 C 接受了两套运动皮层植入，CL 与 CR，CL 表示左半球植入，CR 表示右半球植入。c–e，b 中两只猴运动皮层潜在动力学的三维表示：对齐前（c）与用 CCA 对齐后（e）（d）。f，c–e 示例比较中对齐（红）潜在动力学的相关，相对猴内相关（灰）与下界对照（橙）。g，来自三只不同猴的全部 21 个会话对（*n* = 126 次比较）的保留潜在动力学。直方图显示前四维平均相关。线与阴影区，均值 ± s.d.。h，在一只猴对齐潜在动力学上训练的解码器可预测另一只猴的连续手部运动学（蓝）。结果与同会话内训练并测试的解码器（灰）及未对齐（绿）比较。数据点，不同猴会话间的各次比较（*n* = 126）。误差条，均值 ± s.d.。统计检验：双侧 Wilcoxon 秩和检验，跨动物相关与动物内相关的解码表现 *P* = 3.1 × 10<sup>−6</sup>，跨动物相关与下界 *P* = 2.0 × 10<sup>−22</sup>。i，小鼠在两个位置（左或右）抓取并拉动操纵杆。j，执行抓取与拉动任务的小鼠间保留的潜在动力学。数据包含四只不同小鼠的六个会话（*n* = 13 次比较），格式同 g。k，跨动物保留的潜在动力学与其行为相似性相关。对每个会话对，潜在动力学前四个典型相关（canonical correlations, CCs）的均值对平均行为相关。单点，按物种着色的会话对。插图：来自不同小鼠与猴的所有试次对的行为相关。圆圈，均值。

### 行为相似性的必要性

在前述分析中，我们研究的任务仅包含少数条件，无意中在所产生运动中施加了拓扑结构<sup>12,26</sup>。我们试图确立：保留的潜在动力学并非仅仅反映该结构。首先，我们检验该拓扑结构是否足以产生保留的潜在动力学，发现跨个体保留显著受损（扩展数据图 7）。随后，我们进一步证明：在猴快速生成随机伸手序列的连续且结构较弱的任务中，仍存在保留的潜在动力学<sup>31,32</sup>（图 3a）。所产生运动高度多样且组织很少（图 3b 与扩展数据图 8a）。为便于对齐，我们根据初始手部位置与伸手方向对工作空间进行划分，以跨个体匹配运动，从而产生多达 29 个相似伸手条件（图 3c）。尽管条件数目与行为变异性大幅增加，我们仍能揭示跨个体保留的潜在动力学（图 3d,e 与扩展数据图 2d）。该任务中行为输出复杂度的增加，使我们能直接研究条件数目与潜在动力学保留之间的关系。我们对条件进行子抽样，发现在所考虑的整个范围（多达 29）内，跨个体潜在动力学均得以保留（图 3f 与扩展数据图 8b），即使仅纳入约 20 个神经元亦然（图 3g 与扩展数据图 8c）。当我们打乱条件从而降低行为相似性时，跨个体潜在动力学的保留下降（扩展数据图 8d）。这与先前小鼠与猴的比较一致：执行比小鼠（二至四个条件）更复杂任务（八个条件）的猴，因行为输出更刻板而具有更高的潜在动力学保留。

![图 3](figures_03_safaie2023/fig3.png)

**图 3｜在行为复杂度更高的序列伸手任务中保留的潜在动力学。** a，猴被训练使用平面操纵装置对随机放置的目标位置执行四次伸手序列。b，两只示例猴一个会话中全部伸手运动在工作空间中的示例手部位置。c，我们根据起始位置、持续时间与方向匹配两只猴之间的相似运动。每种颜色代表一个不同的代表性条件，两只猴的匹配伸手轨迹叠加。圆圈，起始位置。d，对 c 中示例会话，执行匹配伸手的猴间保留的运动皮层潜在动力学。注意跨猴对齐潜在动力学的相关相当接近猴内相关（灰），并大幅超过我们的下界对照（橙）。e，来自三只不同猴全部会话对的保留运动皮层潜在动力学。数据包含 *n* = 10 次比较，呈现方式同图 2g。线与阴影区，均值 ± s.d.。f，保留的潜在动力学在广泛条件范围内成立。图显示对每个会话对，潜在动力学前四个 CC 的均值随从该会话可用总数中子抽样的条件数目的变化。深色迹线，b–d 的示例会话。g，即使从稀疏采样的神经群体中也能揭示保留的潜在动力学。图显示对每个会话对，潜在动力学前四个 CC 的均值随从该会话可用总数中子抽样的神经元数目的变化。深色迹线，b–d 的示例会话。

我们进行了更多对照分析，以确认同一物种个体间行为刻板性与潜在动力学保留之间的这一关系，并非我们方法的平凡后果。首先，我们将结果与一项先前研究比较，该研究在个体内考察了不同但相关的腕部操作与伸手—抓取任务中运动皮层活动的动力学<sup>33</sup>（扩展数据图 9）。在每个任务中，个体以略有不同的方式激活相同肌肉（扩展数据图 9b–d）。相应地，同一只猴执行两种不同但相关行为时的潜在动力学，远不如不同猴执行相同行为时保留得好（扩展数据图 9g）。最后，如我们先前所示，保留的潜在动力学不能由稳定的运动调谐解释<sup>26</sup>，也不会在非线性变换后持续存在<sup>26</sup>。这些分析表明：对齐方法本身不足以揭示保留的潜在动力学，即使在个体内亦然。

### 背侧纹状体中保留的动力学

鉴于运动皮层是通向产生运动的脊髓回路的主要皮层输出，运动皮层潜在动力学与行为输出之间的紧密对应，可能独特地源于该区域的架构与投射。为检验保留的潜在动力学是否存在于全脑，我们研究了基底神经节的皮层下核团；它们不直接投射到脊髓，但对行为的多个方面至关重要<sup>34–38</sup>。我们预测：执行相同任务的动物间，基底神经节潜在动力学也将得以保留。在伸手与拉动任务期间对小鼠背外侧纹状体（dorsolateral striatum）神经群体记录复现我们的对齐分析（图 4a），揭示了跨个体保留的潜在动力学（图 4b 与扩展数据图 3c；示例见扩展数据图 3f）。

而且，尽管运动皮层与纹状体在回路与细胞架构上差异巨大<sup>38,39</sup>，跨动物相关（比较图 4b 与图 2j）以及手部轨迹的跨动物解码表现（图 4c 与扩展数据图 6f）在两个区域同样大（扩展数据图 6c–e）。因此，执行相同行为的动物间稳定的潜在动力学并不局限于运动皮层——它们延伸到全脑不同区域，包括所有脊椎动物共享的、进化上更古老的结构<sup>13</sup>。

### 隐蔽行为期间保留的动力学

我们已展示主动、外显行为期间跨脑区潜在动力学的保留。然而，动物也从事多种隐蔽行为，如审议与规划。这些过程需要主要由脑内部生成的神经活动。鉴于此类隐蔽行为涉及也介导外显行为的脑区<sup>25,40</sup>，我们预测：这些更偏认知过程的潜在动力学，也将在同一物种个体间共享。我们通过分析猴在执行前规划即将到来运动时的运动皮层活动来检验该预测（图 4d）。指令延迟期的潜在动力学在动物间高度相关（图 4e 与扩展数据图 3d；示例见扩展数据图 3g），并与外显伸手行为期间几乎相同（比较图 2g）。而且，这些对齐的潜在动力学也可预测行为：基于一只猴对齐潜在动力学预测即将到来伸手目标的贝叶斯模型，可泛化到另一只猴（图 4f）。因此，不同个体不仅用保留的潜在动力学执行相同运动，也用其执行相同的隐蔽心理过程。该结果也强化了我们先前关于外显行为期间保留潜在动力学的观察。到达运动皮层的传入反馈<sup>41,42</sup>可部分解释外显运动期间观测到的潜在动力学相似性，然而在如运动规划等隐蔽过程中，潜在动力学完全由内部生成。

![图 4](figures_03_safaie2023/fig4.png)

**图 4｜基底神经节中以及隐蔽行为期间保留的潜在动力学。** a，我们通过分析小鼠背外侧纹状体在伸手与拉动任务期间的记录，研究皮层下区域是否也能发现共享的潜在动力学。b，执行相同抓取与拉动任务的小鼠间保留的纹状体潜在动力学。数据包含四只小鼠的 *n* = 13 次比较，呈现方式同图 2g。线与阴影区，均值 ± s.d.。c，可用其保留的纹状体潜在动力学跨小鼠解码手部轨迹。数据呈现方式同图 2g。误差条，均值 ± s.d.。统计检验：双侧 Wilcoxon 秩和检验，跨动物相关与动物内相关的解码表现 *P* = 3.0 × 10<sup>−8</sup>，跨动物相关与下界 *P* = 7.3 × 10<sup>−4</sup>。d，为研究隐蔽行为期间潜在动力学的保留，我们考察猴中心外向任务中运动执行前的准备期。e，准备伸向目标时保留的运动皮层潜在动力学。数据包含两只不同猴的 18 个会话与 *n* = 72 次比较，呈现方式同图 2g。线与阴影区，均值 ± s.d.。f，隐蔽行为期间保留的潜在动力学包含行为相关信息。在对齐潜在动力学上训练的朴素贝叶斯分类器（蓝）预测另一只猴的意图目标，几乎与在同一只猴上训练并测试的分类器（灰）一样好，而未对齐时分类很差（绿）。误差条，均值 ± s.d.。统计检验：双侧 Wilcoxon 秩和检验，跨动物相关与动物内相关的分类器表现 *P* = 1.6 × 10<sup>−4</sup>，跨动物相关与下界 *P* = 1.7 × 10<sup>−13</sup>。

### 行为相似性并不充分

我们的假说要求：行为相似性对于潜在动力学的对齐是必要的但并非充分的。为检验这一点，我们训练循环神经网络（recurrent neural networks, RNNs）在产生相似行为输出的同时生成不同的潜在动力学。我们设计了一种 RNN 模拟，通过改变代价函数的一个参数 α，控制潜在动力学的保留程度（图 5a 与扩展数据图 10）。由此我们创建了成对模型：它们产生高度相似的行为（图 5b–d），但表现出不同的潜在动力学，表现为相对缺乏对齐（图 5e）。我们预测：潜在动力学保留的这一下降将由底层回路性质的差异驱动。当我们逆向工程不同网络的权重时，发现更不相似的潜在动力学对应于训练期间权重变化的方差与维度更大的改变（图 5f）。因此，潜在动力学的保留不只是行为相似性的平凡后果；相反，它很可能反映底层回路实现中的基本组织与约束。

![图 5](figures_03_safaie2023/fig5.png)

**图 5｜相似的行为输出对潜在动力学的保留是必要的但并非充分的。** a，我们训练两组 RNN 模型执行猴中心外向伸手任务。第一组为标准 RNN，第二组被约束为产生与标准网络不同的潜在动力学。该额外约束的权重由参数 α 控制。b，标准与约束网络的示例运动轨迹。c,d，标准与约束网络均产生相似行为输出，如误差（c）与跨网络「伸手轨迹」相关（d）所示。数据对每种网络类型显示十个由不同随机种子初始化的网络（每种网络条件内 *n* = 45 次比较）。误差条，均值 ± s.d.。e，增大 α 降低了潜在动力学的保留，确立行为相似性对保留潜在动力学是必要的但并非充分的。线与阴影区，均值 ± s.d.。f，具有不同潜在动力学的网络显示底层连接性差异。随着通过增大 α 将潜在动力学约束为更不同于标准网络，权重变化的方差与维度增加。方差值按 10<sup>−5</sup> 缩放。线与阴影区，均值 ± s.d.。

---

## 讨论

神经群体潜在动力学已被提议作为行为与认知功能的第一级解释者<sup>9,11</sup>，这一观点已阐明众多现象的神经基础，例如隐蔽<sup>25,40,43</sup>与外显行为<sup>33,44,45</sup>背后的过程、学习如何在神经回路中发生<sup>5,46,47</sup>，以及信息如何在不同脑区之间流动<sup>42,48,49</sup>。在此，我们扩展近期工作<sup>20,50–52</sup>，表明在一定行为复杂度范围内，从事相同行为的不同个体共享潜在动力学。跨个体保留潜在动力学的发现，将影响基础与应用神经科学，尤其是脑控装置如神经假体的开发<sup>53,54</sup>：在适当对齐下，在一位参与者上训练的解码器可直接迁移到其他个体<sup>55–59</sup>，以最小化训练与部署时间。

我们研究了两个功能与肢体运动产生紧密相连的区域（运动皮层与背外侧纹状体）。在此研究的行为中，我们用相对较少的维度证明了保留的潜在动力学。这种低维性可部分归因于这些数据集中时间上平滑且相对受约束的运动。此外，同一物种不同个体的肢体共享相似的生物力学性质，这些性质在进化与发育过程中施加了额外约束，强化了潜在动力学的保留。相比之下，具有快速变化输入的高度感觉驱动区域，可能需要更高粒度的分析，但我们仍预期看到跨个体潜在动力学的类似保留。服务更抽象认知功能的「更高」脑区（例如额叶皮层），可能因内部状态（注意、动机、饱足等）差异而显示较少的跨动物潜在动力学保留。即使潜在动力学中与任务最相关的方面在个体间得以保留，这些更抽象内部状态的影响<sup>60,61</sup>也可能改变整体潜在动力学，使这些区域的活动更不易对齐。而且，不同动物也可能基于其通过学习与既往经验获得的偏倚，使用不同隐蔽策略解决相同认知任务<sup>62</sup>。然而，若有可能适当匹配跨个体的内部状态或策略，我们预期神经群体潜在动力学仍会得以保留。

学习与经验对神经回路组织及由此产生的潜在动力学的影响，是一个引人入胜的开放问题。在个体一生中，新技能通过练习获得，并通过神经回路变化得到巩固<sup>63,64</sup>。那么，例如一位吉他名家与一位一年级吉他学生的运动皮层所产生的潜在动力学，应存在何种（若有）差异？无论那些回路是由练习还是甚至由发育所塑造，我们提出：神经回路被调谐以产生潜在动力学，作为行为输出的解。如此，跨个体保留的潜在动力学反映了行为神经基础的基本性质。

在此，我们引入了两种竞争性可能，以解释相似行为如何从不同神经回路中涌现。在第一种假说中，每个个体的脑必须在发育过程中学会在其特异神经回路内产生潜在动力学以实现期望行为，且无法保证两个个体到达相同的「解」。在第二种假说中，期望行为所生成的潜在动力学，受该物种每个个体共享的、由遗传规定的回路层面组织所约束。我们的结果支持第二种假说，并提出一个有趣的可能性：鉴于在高等脊椎动物中基因组并不在很大细节上规定所实现的架构（例如到突触水平）<sup>2–4</sup>，基因组可能提供一个由每个个体脑实例化的「生成模型」（generative model）。该生成模型可能约束神经回路的低层细节，从而使行为库所需的适当神经群体潜在动力学在整个发育过程中涌现。

### 在线内容

任何方法、额外参考文献、Nature Portfolio 报告摘要、源数据、扩展数据、补充信息、致谢、同行评议信息；作者贡献与利益冲突详情；以及数据与代码可用性声明，见 https://doi.org/10.1038/s41586-023-06714-0。


---

## 方法

### 受试者与行为任务

**猴。** 我们训练四只猴（猴 C、M 与 J：雄性，*Macaca mulatta*；猴 T：雄性，*M. fascicularis*；年龄 6–10 岁）坐在灵长类椅子中，使用定制平面操纵装置做伸手运动。计算机屏幕上光标的运动映射到操纵装置手柄的运动，行为任务通过 Matlab（The Mathworks）中的定制软件运行。猴 C、M 与 J 在神经记录前至少训练数月执行二维中心外向伸手任务，确保其达到专家表现。猴 C、M 与 T 在更复杂的随机目标序列伸手任务上接受训练。在中心外向任务中，猴将手移到工作空间中心以开始每次试次。在可变等待期后，向猴呈现八个外周目标之一。目标在圆周上等距分布，并以均匀概率随机选取。随后，听觉 go 提示信号指示动物伸向目标。猴须在 go 提示后 1 s 内到达目标并保持 0.5 s 以获得液体奖励；例外是猴 J，其训练无指令延迟期或 0.5 s 目标保持时间，因此做出更大的运动（扩展数据图 1a，右）。对中心外向任务，猴 C 有 12 个会话，猴 M 有 6 个会话，猴 J 有 3 个会话。

在随机目标任务中，猴在每次试次中对 10 × 10 cm² 工作空间内的随机目标做四次连续伸手。每个目标依次呈现在相对前一目标的内半径 5 cm、外半径 15 cm 的圆环内的随机位置，以强制最小与最大伸手长度。猴在每次成功完成四个随机目标获取序列后的短休息期间获得液体奖励。没有明确的听觉 go 提示，仅有目标内短暂保持期（100 ms），随后在下一目标呈现前有短暂延迟期（100 ms）。这些短约束有助于强制猴做出分开的、有方向的运动，但不要求猴在运动之间必须停下。对随机目标任务，猴 C 有一个「参考」会话，猴 M 有六个会话，猴 T 有四个会话。当猴执行这些任务时，我们用关节中的编码器以 1 kHz 采样频率记录终点位置，并数字记录任务事件（如 go 提示）的时序。中心外向伸手数据的部分此前已在文献 26,28,46,65 中发表并分析。随机目标数据的部分此前已在文献 31,32 中发表并分析。

**小鼠。** 四只 8–16 周龄小鼠在适应头固定与记录装置后，训练约一个月执行前肢伸手与拉动任务（类似于文献 38,66）。在每次试次中，小鼠须伸手并拉动置于距初始手部位置约 1.5 cm 的操纵杆。操纵杆无任何提示地出现在两个位置之一（左或右，相距不到 1 cm）。小鼠随后可自行发起向操纵杆的伸手，并向内拉动以获得液体奖励。操纵杆配有 3 g 或 6 g 负载（轻或重），共构成四种试次类型（两个操纵杆位置 × 两种负载）。每种试次类型重复 20 次后，任务参数无任何提示地切换到下一试次类型。每个会话由按相同顺序呈现的两组四种试次类型组成，共 2 × 4 × 20 = 160 次试次。错误反应（例如将操纵杆推过阈值，5 mm）或超时（10 s 内无拉或推）的试次被标记为不成功。所有操纵杆操作由定制开源 Python 包程序控制：（https://github.com/janelia-pypi/mouse_joystick_interface_python）。小鼠维持 12/12 h（08:00–20:00）光/暗周期，记录在 09:00 与 15:00 之间进行。饲养室温度维持在 21 ± 1 °C，相对湿度 30–70%。

小鼠 38 有两个会话，小鼠 39 有一个会话，小鼠 40 有两个会话，小鼠 44 有一个会话。运动学用无标记视频姿态估计跟踪。行为注释用 Janelia Automatic Animal Behavior Annotator<sup>67</sup> 完成。简言之，行为用两台同步高速（500 帧 s<sup>−1</sup>）、高分辨率单色相机（Point Grey Flea3；1.3 MP Mono USB3 Vision VITA 1300；Point Grey Research）与 6–15 mm（f/1.4）镜头（C-Mount）记录，相机分别垂直置于动物前方与右侧。每台相机上安装定制近红外发光二极管光源。视频用 Janelia Research Campus Scientific Computing Department 与 IO Rodeo 开发的定制软件记录。该软件控制并同步实验的所有方面。对主要分析，轻与重试次合并，因为我们聚焦任务的伸手阶段，且操纵杆位置不取决于其重量。注意在扩展数据图 6a 中，我们重复了主要分析，以证明拉动阶段保留的潜在动力学，并考虑全部四个条件。

### 神经记录

**猴。** 所有手术与实验程序经西北大学机构动物护理与使用委员会批准，方案号 IS00000367。我们用标准手术程序在初级运动皮层（primary motor cortex, M1）或背侧运动前皮层（dorsal premotor cortex, PMd）植入 96 通道 Utah 电极阵列。全文中，来自这两个亚区的神经记录合并，并记为运动皮层。这使我们能确保在同一群体内评估外显与隐蔽动力学。植入在动物任务所用手的对侧半球。猴 M 与 T 同时在 M1 与 PMd 接受两个阵列。猴 J 在 M1 接受单个阵列。猴 C 接受两套植入：在用左手执行任务时于右侧 M1 一个阵列；在移除该原始植入后，在用右手时于左侧 M1 与 PMd 同时两个阵列（分别对应我们先前工作中的猴 CR 与 CL<sup>26</sup>）。注意对所有跨个体分析，CR 与 CL 被视为同一动物。

行为期间用 Cerebus 系统（Blackrock Microsystems）记录神经活动。每个通道的记录经带通滤波（250 Hz–5 kHz），随后基于阈值交叉转换为锋电位时间。阈值设为每个通道均方根活动的 5.5×。我们还对手动锋电位分拣猴 C、M 与 T 的记录，以鉴定假定的单个神经元。猴 J 的良好分离单单位少于其他猴，因此我们不进行锋电位分拣，而直接应用每个电极获得的多单位阈值交叉。然而，已表明从多单位与单神经元活动估计的潜在动力学相似<sup>68</sup>，这一观察对用 CCA 对齐潜在动力学同样成立<sup>26</sup>（注意我们将单神经元与多单位均简称为单位）。我们纳入每只猴的多个实验会话：对中心外向伸手任务，猴 CL 八个、猴 CR 四个、猴 M 六个、猴 J 三个（示例数据见扩展数据图 1）；对随机目标任务，猴 C 一个「参考会话」、猴 M 六个、猴 T 四个（示例数据见扩展数据图 8）。这些实验会话基于单位或试次数目高而选取，并对动物行为盲法。对中心外向伸手任务，每只猴纳入的平均单位数为：猴 CL，277 ± 14（均值 ± s.e.m.；范围，210–345）；猴 CR，85 ± 4（范围，73–92）；猴 M，117 ± 4（范围，106–130）；猴 J，63 ± 9（范围，54–81）。对随机目标任务，纳入的平均单位数为：猴 CL，280（仅一个会话）；猴 M，127 ± 9（范围，101–153）；猴 T，49 ± 8（范围，30–66）。行为与神经记录方法的更详细描述见文献 26。

**小鼠。** 所有手术与实验程序经 Janelia Research Campus 机构动物护理与使用委员会批准。首先进行简短（少于 2 h）手术以植入三维打印头板<sup>69</sup>。恢复后，将小鼠每日水消耗限制为 1.2 ml，以训练其行为任务。训练后，在左半球相对前囟前 0.5 mm、外侧 1.7 mm 处做小开颅用于急性记录。将 neuropixels 探针置于开颅上方中心，并以相对颅骨表面垂直轴 10° 角、以 0.2 mm min<sup>−1</sup> 速度下降。探针尖端位于软膜表面腹侧 3 mm。缓慢平滑下降后，探针在目标深度至少静置 5 min 再开始记录，以使电极稳定。

神经活动经滤波（300 Hz 高通）、放大（200× 增益）、多路复用与数字化（30 kHz），并用 SpikeGLX 3.0 软件（https://github.com/billkarsh/SpikeGLX）记录。记录数据用开源软件 KiloSort 2.0（https://github.com/MouseLand/Kilosort）预处理，并用 Phy（https://github.com/cortex-lab/phy）手动策展，以在初级运动皮层与背外侧纹状体各自鉴定假定的单单位。本工作纳入共六个具有同步运动皮层与纹状体记录的实验会话（来自四只小鼠；扩展数据图 5）。每只小鼠纳入的平均运动皮层单位数为：小鼠 38，98 ± 4（范围，95–102）；小鼠 39，64；小鼠 40，75 ± 5（范围，70–80）；小鼠 44，55。每只小鼠纳入的平均纹状体单位数为：小鼠 38，100 ± 13（范围，87–112）；小鼠 39，108；小鼠 40，74 ± 5（范围，69–79）；小鼠 44，110。

### 数据分析

我们对猴与小鼠数据采用相似方法。在所有分析中，我们仅考虑动物在指定时间内成功完成任务并获得奖励的试次。我们在时间上串联试次以供后续分析——即不取试次平均。对猴中心外向伸手任务与小鼠伸手与拉动任务，随机选取到每个目标的相等试次数（猴八个目标，小鼠两个目标；扩展数据图 6a 除外，其中考虑四个目标）。试次顺序随机化，以消除时间流逝的可能效应。在每次试次内，我们分离一个捕获大部分运动的兴趣窗口，始于运动起始前 50 ms，终于运动起始后 400 ms。为分析猴的隐蔽行为，我们使用跨越运动规划期的窗口，始于运动起始前 400 ms，终于运动起始后 50 ms。重要的是，在合理范围内改变分析窗口时，我们的全部结果仍然成立。

对猴随机游走任务，每次伸手可在工作空间内任何位置开始与结束。为定义可跨动物匹配的运动（条件），我们首先将工作空间分割为 12 个圆形子区。每个子区再分为六个等份扇区，同一角扇区内的目标归为一组，产生 72 个可能的目标条件。我们分离四次连续伸手的序列，并将每次伸手视为一次单独运动。为将每次运动分配到一个目标条件，我们首先根据给定运动的起始位置将其分配到一个子区，排除起始位置距子区中心超过 2 cm 的运动。随后我们将运动重新居中，使其从每个子区中心开始并向外伸向其目标。随后根据目标角度将运动分配到一个扇区与目标条件。为研究执行相似行为的猴间潜在动力学的保留，我们需要跨不同猴的会话匹配运动（伸手条件）。为最大化匹配运动数目，我们将猴 M 与猴 T 的所有会话与猴 CL 成功试次最多的参考会话比较。我们通过最小化运动对之间的均方误差（mean squared error, MSE）匹配每对会话中的运动，排除 MSE 高于所有可能运动对所计算 MSE 的 2% 阈值的匹配。若匹配运动具有不同的对应目标条件，我们使用参考会话的目标条件标签。该过程完成后，我们排除匹配运动少于六个的目标条件，使成对会话具有多达 29 个共享目标条件。由于这些运动比中心外向任务中更具弹道性，我们考察始于运动起始、终于运动起始后 350 ms 的窗口。

所有分析用 Python 实现，使用 numpy、matplotlib、sci-kit、scipy 与 pandas 等开源包<sup>70–74</sup>以及定制代码。由于我们在个体基础上分析既有数据集，未进行样本量的显式规划、组别随机化或盲法。

**行为相关。** 为评估给定动物的行为刻板性，我们计算一个会话内每对试次的手部轨迹相关（Pearson 相关）（扩展数据图 1b 与扩展数据图 5b）。图 2k 插图中的分布示意本工作纳入的全部猴中心外向与小鼠伸手与拉动会话汇总的这些相关。为确定来自不同猴或小鼠的会话对之间的行为相似性（图 2k），我们类似地计算相关以比较两个会话的所有试次对。

**神经群体潜在动力学。** 为估计小鼠与猴每个会话中与所记录神经活动相关的潜在动力学，我们计算每个单位作为时间函数的平滑发放率。我们通过对每个单位的分箱平方根变换锋电位计数（箱宽 30 ms）施加高斯核（σ = 50 ms）获得这些平滑发放率。我们排除平均发放率低的单位（所有箱的平均发放率低于 1 Hz），但未基于缺乏调制或行为调谐等进行进一步排除。对每个会话，这产生维度为 *n* × *T* 的神经数据矩阵 **X**，其中 *n* 为所记录单位数，*T* 为给定日全部串联试次的总时间点数；*T* 因而由每日目标数 × 每目标试次数 × 每试次时间点数给出。我们在如上所述对每只动物每个目标随机子选取相同试次数后进行该串联（猴中心外向 15 次试次，猴随机游走 6 次，小鼠伸手与拉动 22 次）。对每个会话，*n* 个记录单位的活动表示为神经空间——由该脑区全部神经元活动所定义空间的 *n* 维采样。在该空间中，每个时间箱的联合记录活动表示为单点，其坐标由相应单位的发放率决定。在该空间内，我们对 **X** 应用 PCA 估计低维潜在动力学。这产生 *n* 个 PC，每个是全部 *n* 个记录单位平滑发放率的线性组合。这些 PC 按其所解释的神经方差量排序。我们仅保留前 *m* 个 PC（我们称之为神经模式）来定义 *m* 维、会话特异的流形。我们基于先前考察上肢任务期间运动皮层记录的研究选择流形维度 *m* = 10<sup>5,26,46</sup>。在全部数据集中，十维流形对猴运动皮层（扩展数据图 1c）、小鼠运动皮层与小鼠纹状体（扩展数据图 5e）各自解释了约 60% 的神经方差。注意，然而，我们的结果在合理维度范围内成立，类似于文献 26,33,46（扩展数据图 2f 与 4b）。我们通过将所记录神经元的时变平滑发放率投影到跨越流形的 *m* = 10 个 PC 上，计算流形内的潜在动力学。这产生维度为 *m* × *T* 的数据矩阵 **L**。

**通过 CCA 对齐潜在动力学。** 我们通过用 CCA 对齐动力学<sup>26,75</sup>，来检验我们关于执行相同行为的不同动物将共享保留潜在动力学的假说。在将到每个目标（序列伸手任务中的条件）的相同数目随机顺序试次串联后，对每对会话的潜在动力学应用 CCA。关于用 CCA 对齐潜在动力学的细节，见文献 26。

我们通过计算来自任意两只不同猴或小鼠的所有会话对的跨动物相关（作为典型相关 CCs），测量跨动物潜在动力学的相似性。为确立跨动物相关的强度，我们计算由动物内相关定义的上界，后者计算为任意给定会话内两个随机选取试次子集之间相关在 1,000 次采样上的第 99 百分位。「对照」相关代表 CC 的下界。我们通过打乱两个会话间的目标，并在每次试次中使用随机选取的对照窗口（更多细节见下文「对照分析」一节）而非运动或准备时段来计算这些相关。

注意，为将每次比较概括为单个数据点（例如在图 2k 与扩展数据图 2h 与 6d 中），我们计算潜在动力学前四个 CC 的均值<sup>26</sup>。在图 2k 中，我们用该方法确立潜在动力学保留强度与行为一致性之间的关系，行为一致性量化为两只动物间所有可能试次对的平均轨迹相关。此外，在显示跨动物「对齐」轨迹对时，例如图 2e 与扩展数据图 3，为可视化目的用奇异值分解使 CCA 轴正交。

最后，我们表明在广泛的流形维度范围内均可揭示保留的潜在动力学。在扩展数据图 2f 中，我们对流形维度 *m* = 2–19 重复对齐分析。

**解码分析。** 为检验对齐的潜在动力学是否保持运动相关信息，我们构建标准解码器以预测外显行为期间的手部轨迹。若不同动物间对齐的潜在动力学具有行为相关性，即使用于鉴定它们的方法（PCA 与 CCA）是无监督的——即它们并不试图优化解码表现——它们也应允许预测时变手部轨迹。我们比较三种不同类型解码器的预测准确度：(1) 动物内解码器，在每只动物每个会话的两个非重叠试次子集上训练并测试（使用十折交叉验证）；(2) 跨动物「对齐」解码器，在一只动物的对齐动力学上训练并在另一只上测试，该比较在两只不同动物的每对会话上进行；(3) 跨动物「未对齐」解码器，在一只动物的潜在动力学上训练并在另一只上测试，而不用 CCA 对齐动力学。我们还进行了类似分析，以预测猴隐蔽运动准备期间即将到来的目标（图 4f）。

手部轨迹解码器为具有两个 LSTM 层的 LSTM 模型，每层 300 个隐藏单元，后接线性输出层。模型用 Pytorch<sup>76</sup> 实现，并用 Adam 优化器训练十个 epoch，学习率为 0.001。即将到来目标分类器为高斯朴素贝叶斯模型<sup>12</sup>（文献 72 中的 GaussianNB 类）。我们在解码器与分类器的输入中纳入三个箱的近期潜在动力学历史，共 90 ms。这些额外神经输入纳入内在神经动力学信息并计入传导延迟。*R*<sup>2</sup> 值定义为实际与预测手部轨迹之间的相关系数平方，用于量化解码器表现。而且，在扩展数据图 4d 中，我们通过还计算方差解释（variance accounted for, VAF）度量验证：我们选择的跨动物解码器准确度度量并不影响保留潜在动力学对行为具有信息的观察，VAF 定义为：

$$
\mathrm{VAF}=1-\frac{\sum_{i=1}^{n}(y_i-\hat{y}_i)^2}{\sum_{i=1}^{n}(y_i-\bar{y})^2}
$$

其中 *y<sub>i</sub>* 表示预测变量的实际值，*ŷ<sub>i</sub>* 为其预测值，*ȳ* 为其均值。对该分析，我们按伸手长度（由其沿各轴手部位置的第 99 百分位确定）归一化手部轨迹，因为猴具有不同大小的工作空间。

手部轨迹在猴中为二维信号，在小鼠中为三维信号。我们构建单独解码器以预测沿 *x*、*y*（小鼠还有 *z*）轴的手部轨迹。随后我们报告所有轴的平均表现。对目标分类，我们报告分类器的平均准确度（score() 方法）。

为检验对齐潜在动力学的多少维对准确的跨动物行为解码是必要的，我们对流形维度 *m* = 1, 2…,14 在猴中心外向数据集上重复解码分析（扩展数据图 4b）。

最后，我们进行对照分析，以确保我们的跨动物解码结果不被对齐与解码器训练共享相似试次所偏倚。我们将一只动物的完整数据集分为三个非重叠集：一个用于对齐潜在动力学，一个用于训练解码器，一个用于跨动物测试表现。扩展数据图 4c 显示该分析对猴中心外向数据的结果。尽管仅用一半数据对齐潜在动力学，对解码表现的影响可忽略。

### 对照分析

**用随机行为窗口对齐潜在动力学。** 为建立作为对照的「行为无关」窗口，我们沿试次间与试次期合并的整个时长随机选取与我们行为窗口长度相似（450 ms）的窗口。这确保我们具有具有现实统计的神经群体动力学样本，但它们不直接与跨个体共享行为耦合。我们用该窗口为神经群体潜在动力学对齐提供下界对照（图 2f,g,j、3d,e 与 4b,e 以及扩展数据图 2b–d,g、3 与 8d 中的「对照」）。

**通过 Procrustes 分析对齐潜在动力学。** 我们在全部分析中用 CCA 对齐潜在动力学。然而，为确保我们的结果无论用于对齐的具体方法如何均成立，我们用 Procrustes 分析<sup>77</sup>复现主要结果。Procrustes 寻找最小化两个输入数据集差异平方和的最佳变换。遵循与 CCA 分析相同的程序，我们用 Procrustes 分析对齐来自两个不同数据集的动力学（文献 73 中的 scipy.spatial.procrustes 类），随后相关对齐后的动力学以产生与 CCA 可比的度量（扩展数据图 2g,h）。注意用 CCA 与 Procrustes 分析获得的潜在动力学保留程度大体相似。

**对齐潜在动力学所解释的神经方差。** 我们用我们在文献 33 中设计的方法测量保留潜在动力学所解释的神经方差百分比。简言之，我们通过将对齐的潜在动力学沿 CC 轴投影回 PCA 空间（神经流形）再投影回原始神经状态空间，来「重建」保留的神经活动。随后我们用类似于文献 78 的方法测量总神经方差与这些重建信号方差之间的差异。通过对不断增加的流形维度 *m* 迭代重复该程序，我们测量对齐潜在动力学每个维度所解释的神经方差。用该方法，我们发现保留的潜在动力学解释神经群体方差的显著部分（扩展数据图 2e）。

**用 TME 的替代数据集。** 我们通过对齐跨不同任务条件与行为时段采样的随机选取窗口的潜在动力学，建立下界对照（见上）。除该对照外，我们还用 TME 生成替代神经数据作为另一下界对照<sup>29</sup>。TME 产生保留实际神经数据二阶统计（即跨时间、跨神经元或跨实验条件的协方差）但在其他方面随机的替代数据（扩展数据图 2a）。通过与原始数据相同的程序对齐这些替代数据，对猴中心外向任务、随机游走任务与小鼠伸手与拉动任务显示显著更低的相关（扩展数据图 2b–d）。

**对齐神经群体活动中的拓扑结构。** 为检验所产生运动中的拓扑结构是否足以产生保留的潜在动力学，我们量化当对齐神经群体活动的静态拓扑特征而非运动动力学时——使用文献 26 中开发的技术——可揭示的跨个体潜在动力学相似性程度。为对齐神经群体活动的拓扑结构，我们在猴中心外向伸手任务每次试次的执行时段对每个神经元的活动做时间平均。随后我们用先前方法分析时间平均数据：进行 PCA 以找到神经流形，并用 CCA 对齐每对会话（扩展数据图 7a）。该程序导致良好对齐的「拓扑表征」（示例见扩展数据图 7b）。为直接检验对齐神经群体活动的拓扑结构是否足以揭示保留的潜在动力学，我们将潜在动力学投影到通过该（静态）拓扑对齐找到的 CC 轴上，并计算所得投影潜在动力学的成对相关。这些相关显著低于通过对齐时变潜在动力学获得的相关（扩展数据图 7c,d）。

**关于条件数目与神经元数目的对照分析。** 为确立潜在动力学的保留在不同任务复杂度程度上成立，我们计算猴随机目标任务中每对会话在不断增加的子抽样目标条件数目下的相关（图 3f 与扩展数据图 8b）。我们随机子抽样不同目标条件组合，并对每个条件数目计算多达 10,000 个组合的潜在动力学保留程度。

为确立无论具体测量的神经元如何均可揭示保留的潜在动力学，我们还计算随机目标任务中不同神经元数目下的相关（图 3g 与扩展数据图 8c）。对每对会话，我们或以十为增量随机保留神经元（图 3d）或随机丢弃神经元（扩展数据图 8c），直到任一会话的测量神经元用尽，并重复该过程 50 次，在每一步计算保留程度。对两项分析，我们计算每对会话所有子样本前四个 CC 的平均相关。

**不同但相关任务的比较。** 本研究的中心假说是：保留的潜在动力学是同一物种个体间产生相似行为的基础。在此，我们试图通过表明从事相同任务的两个个体所产生的潜在动力学，比同一只个体执行两个不同但相关任务所产生的潜在动力学更相似，来进一步支持该假说。为此，我们将结果与我们先前关于猴中不同但相关的腕部操作或伸手—抓取任务下神经群体活动关系的研究比较<sup>33</sup>（扩展数据图 9）。

### 循环神经网络模型

**模型架构。** 为表明从事相同任务的动物间潜在动力学的保留并非相似行为的平凡后果，我们训练 RNN 执行与猴相同的中心外向伸手任务。这些模型用 Pytorch<sup>76</sup> 实现。类似于先前模拟伸手期间运动皮层动力学的研究<sup>27,79–81</sup>，我们实现动力学系统 \(\dot{\mathbf{x}}=F(\mathbf{x},\mathbf{s})\) 以描述 RNN 动力学：

$$
\tau \dot{x}_i(t)=-x_i+\sum_{j=1}^{N} J_{ij} r_j(t)+\sum_{k=1}^{I} B_{ik} s_k(t)+b_i+\eta_i(t)
$$

其中 *x<sub>i</sub>* 是第 *i* 个单位的隐藏状态，*r<sub>i</sub>* 是 *x<sub>i</sub>* 经 tanh 激活后的对应发放率。所有网络有 *N* = 300 个单位与 *I* = 3 个输入，时间常数 τ = 0.05 s，积分时间步 *dt* = 0.01 s。噪声 η 在每个时间步从高斯分布 \(\mathcal{N}(0,0.2^2)\)【待核：原文排版为 (0,0,2) 的 \(\mathcal{N}\)，按上下文似为 \(\mathcal{N}(0,0.2^2)\)】随机采样。每个单位有偏移偏置 *b<sub>i</sub>*，初始设为零。初始状态 *x<sub>t=0</sub>* 从均匀随机分布 \(\mathcal{U}(-0.2,0.2)\) 采样。所有网络完全循环连接，循环权重 **J** 初始从高斯分布 \(\mathcal{N}(0,g/\sqrt{N})\) 采样，其中 *g* = 1.2。馈入网络的时变输入 **s** 的输入权重 **B** 初始从均匀分布 \(\mathcal{U}(-0.1,0.1)\) 采样。这些输入由一维固视信号（在 go 提示时从 2 变为 0）与在视觉提示呈现前保持为 0 的目标信号组成。二维目标信号 (2 cos θ<sub>target</sub>, 2 sin θ<sub>target</sub>) 规定目标的伸手方向 θ<sub>target</sub>。

网络被训练产生对应实验记录伸手轨迹 *x* 与 *y* 位置的二维输出 **p**，其通过线性映射读出：

$$
p_i(t)=\sum_{k=1}^{N} W_{ik} r_k(t)
$$

其中输出权重 **W** 从均匀分布 \(\mathcal{U}(-0.1,0.1)\) 采样。

**模型训练。** 网络用 Adam 优化器<sup>82</sup>训练以生成伸手轨迹位置，学习率 *l* = 0.0005，一阶矩估计衰减率 β<sub>1</sub> = 0.9，二阶矩估计衰减率 β<sub>2</sub> = 0.999，ε = 1 × 10<sup>−8</sup>。损失函数 *L* 定义为每个时间步 *t* 上二维输出与目标位置之间的 MSE，总时间步数 *T* = 400。前 50 个时间步不纳入，以使网络动力学弛豫：

$$
L=\frac{1}{2B(T-50)}\sum_{b=1}^{B}\sum_{t=50}^{T}\sum_{d=1,2}\big(p_d^{\mathrm{target}}(b,t)-p_d^{\mathrm{output}}(b,t)\big)^2
$$

为考察两个网络是否可在产生相同运动输出的同时具有不同潜在动力学，我们设计了一个具有更多约束的网络，以用不同潜在动力学执行行为任务（图 5a）。我们增加一个损失项，惩罚正在训练的「约束」网络与另一先前训练的「标准」网络在运动执行期间潜在动力学之间的 CC：

$$
L_{\mathrm{constrained}}=L+\alpha\sum_{i=1}^{4} c_i^{2}
$$

其中 *c<sub>i</sub>* 是第 *i* 个 CC。为考察不同程度的保留潜在动力学，我们在 α = 0、0.05、0.25 或 0.50 的不同值下训练网络。

网络训练至最近十个训练试次的平均损失低于 0.2 cm² 的阈值，至少 50 且至多 500 个训练试次，批次大小 *B* = 64。每个批次对每个伸手方向有相等试次数。我们在优化步骤前将梯度范数裁剪在 0.2。标准与约束训练均在十个由不同随机种子初始化的不同网络上进行。对 α 不同值的约束网络使用同一组随机种子。

**连接性分析。** 通过增大 α 的值，我们能够在保持行为表现恒定的同时降低潜在动力学的保留。为考察这如何改变底层连接性，我们计算训练后循环权重 **J** 中权重变化的方差与维度（图 5f,g）。【待核：正文图 5 面板至 f；“图 5f,g” 可能指方差与维度两迹线】

### 统计与可重复性

我们用双侧 Wilcoxon 秩和检验比较各种动物内与跨动物运动解码器与分类器的表现。我们在两个物种（小鼠与猴）、四种行为（中心外向伸手任务、序列伸手任务与伸手—抓取—拉动任务，以及隐蔽运动规划期间）与两个脑区（运动皮层与背外侧纹状体）上复现核心发现。每个物种的实验在两个不同实验室由不同科学家独立进行。小鼠实验在单一队列中完成，而猴数据在两套实验中收集（一套用于中心外向任务，另一套用于随机伸手任务），各跨越 2 年。总体而言，我们的神经记录与行为数据与相关已发表研究吻合良好。所有重复尝试均成功。

### 报告摘要

关于研究设计的进一步信息见与本文链接的 Nature Portfolio Reporting Summary。

### 数据可用性

大多数猴数据集在 Dryad（https://datadryad.org/stash/dataset/doi:10.5061/dryad.xd2547dkt）与 CRCNS（https://doi.org/10.6080/K0FT8J72）公开可用。其余猴数据集与小鼠数据集将在合理请求下提供。

### 代码可用性

所有分析用定制 Python 代码与开源软件实现。所有结果面板可通过运行 Jupyter notebooks 复现。复现全部结果的代码公开于 https://github.com/BeNeuroLab/2022-preserved-dynamics。


---

---

## 参考文献

（参考文献列表保留英文原文。）

1. Harris, K. D. & Shepherd, G. M. G. The neocortical circuit: themes and variations. Nat. Neurosci. 18, 170–181 (2015).

2. Zador, A. M. A critique of pure learning and what artificial neural networks can learn from animal brains. Nat. Commun. 10, 3770 (2019).

3. Hiesinger P. R. The Self-Assembling Brain (Princeton Univ. Press, 2021).

4. Mitchell, K. Innate (Princeton Univ. Press, 2018).

5. Sadtler, P. T. et al. Neural constraints on learning. Nature 512, 423–426 (2014).

6. Marshel, J. H. et al. Cortical layer-specific critical dynamics triggering perception. Science 365, eaaw5202 (2019).

7. Oby, E. R. et al. New neural activity patterns emerge with long-term learning. Proc. Natl Acad. Sci. USA 116, 15210–15215 (2019).

8. Okun, M. et al. Diverse coupling of neurons to populations in sensory cortex. Nature 521, 511–515 (2015).

9. Gallego, J. A., Perich, M. G., Miller, L. E. & Solla, S. A. Neural manifolds for the control of movement. Neuron 94, 978–984 (2017).

10. Vyas, S., Golub, M. D., Sussillo, D. & Shenoy, K. V. Computation through neural population dynamics. Annu. Rev. Neurosci. 43, 249–275 (2020).

11. Barack, D. L. and Krakauer, J. W. Two views on the cognitive brain. Nat. Rev. Neurosci. 22, 359–371 (2021).

12. Santhanam, G. et al. Factor-analysis methods for higher-performance neural prostheses. J. Neurophysiol. 102, 1315–1330 (2009).

13. Grillner, S. Evolution of the vertebrate motor system—from forebrain to spinal cord. Curr. Opin. Neurobiol. 71, 11–18 (2021).

14. Cisek, P. Resynthesizing behavior through phylogenetic refinement. Atten. Percept. Psychophys. 81, 2265–2287 (2019).

15. Tuttle, A. H., Philip, V. M., Chesler, E. J. & Mogil, J. S. Comparing phenotypic variation between inbred and outbred mice. Nat. Methods 15, 994–996 (2018).

16. Keller, D., Ero, C. & Markram, H. Cell densities in the mouse brain: a systematic review. Front. Neuroanat. 12, 83 (2018).

17. Häusser, M., Spruston, N. & Stuart, G. J. Diversity and dynamics of dendritic signaling. Science 290, 739–744 (2000).

18. Nakanishi, S. Molecular diversity of glutamate receptors and implications for brain function. Science 258, 597–603 (1992).

19. Kutsuwada, T. et al. Molecular diversity of the NMDA receptor channel. Nature 358, 36–41 (1992).

20. Brennan, C. & Proekt, A. A quantitative model of conserved macroscopic dynamics predicts future motor commands. eLife 8, e46814 (2019).

21. Goaillard, J.-M., Taylor, A. L., Schulz, D. J. & Marder, E. Functional consequences of animal-to-animal variation in circuit parameters. Nat. Neurosci. 12, 1424–1430 (2009).

22. Kennedy, A. et al. Stimulus-specific hypothalamic encoding of a persistent defensive state. Nature 586, 730–734 (2020).

23. Thura, D., Cabana, J.-F., Feghaly, A. & Cisek, P. Unified neural dynamics of decisions and actions in the cerebral cortex and basal ganglia. Preprint at bioRxiv https://doi.org/ 10.1101/2020.10.22.350280 (2020).

24. Perich, M. G. & Rajan, K. Rethinking brain-wide interactions through multi-region ‘network of networks’ models. Curr. Opin. Neurobiol. 65, 146–151 (2020).

25. Jiang, X., Saggar, H., Ryu, S. I., Shenoy, K. V. & Kao, J. C. Structure in neural activity during observed and executed movements is shared at the neural population level, not in single neurons. Cell Rep. 32, 108006 (2020).

26. Gallego, J. A., Perich, M. G., Chowdhury, R. H., Solla, S. A. & Miller, L. E. Long-term stability of cortical population dynamics underlying consistent behavior. Nat. Neurosci. 23, 260–270 (2020).

27. Sussillo, D., Churchland, M. M., Kaufman, M. T. & Shenoy, K. V. A neural network that finds a naturalistic solution for the production of muscle activity. Nat. Neurosci. 18, 1025–1033 (2015).

28. Gallego-Carracedo, C., Perich, M. G., Chowdhury, R. H., Miller, L. E. & Gallego, J. A. Local field potentials reflect cortical population dynamics in a region-specific and frequency- dependent manner. eLife 11, e73155 (2022). Constrained Standard α = 0 α = 0.05 α = 0.25 α = 0.50 b Target cue Hold cue Step 1: train standard network Position (x, y) Position (x, y) Target cue Hold cue Step 2: train constrained network 0.8 0.9 1.0 Behavioural correlation d 0.1 Standard α = 0 α = 0.05 α = 0.25 α = 0.50 Standard α = 0 α = 0.05 α = 0.25 α = 0.50 0.2 0.3 Error (cm) c Dimensionality of weight changes 4 6 8 10 12 14 f Variance of weight changes 2 4 6 8 10 Standard α = 0 α = 0.05 α = 0.25 α = 0.50 Neural mode Correlation 0 0.2 0.4 0.6 0.8 1.0 1 2 4 6 8 10 e Training ‘constrained’ neural networks to establish that similar behaviour is not sufﬁcient for the preservation of latent dynamics Latent dynamics in the trained network Latent dynamics during training Penalize similarity in constrained network during training based on parameter α a Constrained networks generate similar behaviour output Constrained networks generate less preserved latent dynamics Constrained networks have different connectivity structure α = 0 α = 0.05 α = 0.25 α = 0.50 α = 0 α = 0.05 α = 0.25 α = 0.50 Fig. 5 | Similar behavioural output is necessary but not sufficient for the preservation of latent dynamics. a, We trained two sets of RNN models to perform the monkey centre-out reaching task. The first set of models were standard RNNs, whereas the second were constrained to produce distinct latent dynamics from the standard networks. The weight of this extra constraint was controlled by parameter α. b, Example movement trajectories for standard and constrained networks. c,d, Both standard and constrained networks produced similar behavioural output, as shown by the error (c) and the correlation between ‘reach trajectories’ across networks (d). Data show ten networks initialized from different random seeds for each type of network (n = 45 comparisons within each network condition). Error bars, mean ± s.d. e, Increasing the value of α decreased the preservation of latent dynamics, establishing that behavioural similarity is necessary but not sufficient to have preserved latent dynamics. Line and shaded area, mean ± s.d. f, Networks with distinct latent dynamics show differences in underlying connectivity. The variance and the dimensionality of the weight changes increased as the latent dynamics were constrained to be more distinct from those of standard networks by increasing α. Variance values are scaled by 10−5. Line and shaded area, mean ± s.d. Nature | Vol 623 | 23 November 2023 | 771

29. Elsayed, G. F. & Cunningham, J. P. Structure in neural population recordings: an expected byproduct of simpler phenomena? Nat. Neurosci. 20, 1310–1318 (2017).

30. Glaser, J. I. et al. Machine learning for neural decoding. eNeuro 7, ENEURO.0506-19.2020 (2020).

31. Glaser, J. I., Perich, M. G., Ramkumar, P., Miller, L. E. & Körding, K. P. Population coding of conditional probability distributions in dorsal premotor cortex. Nat. Commun. 9, 1788 (2018).

32. Lawlor, P. N., Perich, M. G., Miller, L. E. & Körding, K. P. Linear-nonlinear-time-warp-Poisson models of neural activity. J. Comput. Neurosci. 45, 173–191 (2018).

33. Gallego, J. A. et al. Cortical population activity within a preserved neural manifold underlies multiple motor behaviors. Nat. Commun. 9, 4233 (2018).

34. Mazzoni, P., Hristova, A. & Krakauer, J. W. Why don’t we move faster? Parkinson’s disease, movement vigor and implicit motivation. J. Neurosci. 27, 7105–7116 (2007).

35. Jurado-Parras, M. T. et al. The dorsal striatum energizes motor routines. Curr. Biol. 30, 4362–4372(2020).

36. Thura, D. & Cisek, P. The basal ganglia do not select reach targets but control the urgency of commitment. Neuron 95, 1160–1170 (2017).

37. Cruz, B. F. et al. Action suppression reveals opponent parallel control via striatal circuits. Nature 607, 521–526 (2022).

38. Park, J. et al. Motor cortical output for skilled forelimb movement is selectively distributed across projection neuron classes. Sci. Adv. 8, eabj5167 (2022).

39. Alexander, G. E., DeLong, M. R. & Strick, P. L. Parallel organization of functionally segregated circuits linking basal ganglia and cortex. Annu. Rev. Neurosci. 9, 357–381 (1986).

40. Vyas, S. et al. Neural population dynamics underlying motor learning transfer. Neuron 97, 1177–1186 (2018).

41. Pruszynski, J. A. et al. Primary motor cortex underlies multi-joint integration for fast feedback control. Nature 478, 387–390 (2011).

42. Perich, M. G. et al. Motor cortical dynamics are shaped by multiple distinct subspaces during naturalistic behavior. Preprint at bioRxiv https://doi.org/10.1101/2020.07.30.228767 (2020).

43. Machens, C. K., Romo, R. & Brody, C. D. Functional, but not anatomical, separation of “what” and “when” in prefrontal cortex. J. Neurosci. 30, 350–360 (2010).

44. Churchland, M. M. et al. Neural population dynamics during reaching. Nature 487, 51–56 (2012).

45. Wang, J., Narain, D., Hosseini, E. A. & Jazayeri, M. Flexible timing by temporal scaling of cortical responses. Nat. Neurosci. 21, 102–110 (2018).

46. Perich, M. G., Gallego, J. A. & Miller, L. E. A neural population mechanism for rapid learning. Neuron 100, 964–976 (2018).

47. Sun, X. et al. Cortical preparatory activity indexes learned motor memories. Nature 602, 274–279 (2022).

48. Kaufman, M. T., Churchland, M. M., Ryu, S. I. & Shenoy, K. V. Cortical activity in the null space: permitting preparation without movement. Nat. Neurosci. 17, 440–448 (2014).

49. Semedo, J. D., Zandvakili, A., Machens, C. K., Yu, B. M. & Kohn, A. Cortical areas interact through a communication subspace. Neuron 102, 249–259 (2019).

50. Chen, H. T., Manning, J. R. & van der Meer, M. A. A. Between-subject prediction reveals a shared representational geometry in the rodent hippocampus. Curr. Biol. 31, 4293–4304 (2021).

51. Herrero-Vidal, P., Rinberg, D. & Savin, C. Across-animal odor decoding by probabilistic manifold alignment. Adv. Neural Inform. Process. Syst. 34, 20360–20372 (2021).

52. Schneider, S., Lee, J. H. & Mathis M. W. Learnable latent embeddings for joint behavioural and neural analysis. Nature 617, 360–368 (2023).

53. Gallego, J. A., Makin, T. R. & McDougle, S. D. Going beyond primary motor cortex to improve brain–computer interfaces. Trends Neurosci. 45, 176–183 (2022).

54. Pandarinath, C. & Bensmaia, S. J. The science and engineering behind sensitized brain- controlled bionic hands. Physiol. Rev. 102, 551–604 (2022).

55. Dyer, E. L. et al. A cryptography-based approach for movement decoding. Nat. Biomed. Eng. 1, 967–976 (2017).

56. Barra, B. et al. Epidural electrical stimulation of the cervical dorsal roots restores voluntary upper limb control in paralyzed monkeys. Nat. Neurosci. 25, 924–934 (2022).

57. Degenhart, A. D. et al. Stabilization of a brain–computer interface via the alignment of low-dimensional spaces of neural activity. Nat. Biomed. Eng. 4, 672–685 (2020).

58. Wen, S. et al. Rapid adaptation of brain–computer interfaces to new neuronal ensembles or participants via generative modelling. Nat. Biomed. Eng. 7, 546–558 (2023).

59. Jude, J., Perich, M. G., Miller, L. E. & Hennig, M. H. Robust alignment of cross-session recordings of neural population activity by behaviour via unsupervised domain adaptation. Preprint at https://doi.org/10.48550/arXiv.2202.06159 (2022).

60. Cowley, B. R. et al. Slow drift of neural activity as a signature of impulsivity in macaque visual and prefrontal cortex. Neuron 108, 551–567 (2020).

61. Allen, W. E. et al. Thirst regulates motivated behavior through modulation of brainwide neural population dynamics. Science 364, eaav3932 (2019).

62. Latimer, K. W. & Freedman, D. J. Low-dimensional encoding of decisions in parietal cortex reflects long-term training history. Nat. Commun. 14, 1010 (2023).

63. Kleim, J. A. et al. Cortical synaptogenesis and motor map reorganization occur during late, but not early, phase of motor skill learning. J. Neurosci. 24, 628–633 (2004).

64. Xu, T. et al. Rapid formation and selective stabilization of synapses for enduring motor memories. Nature 462, 915–919 (2009). Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

65. Perich, M. G. & Miller, L. E. Altered tuning in primary motor cortex does not account for behavioral adaptation during force field learning. Exp. Brain Res. 235, 2689–2704 (2017).

66. Steinmetz, N. A. et al. Neuropixels 2.0: a miniaturized high-density probe for stable, long-term brain recordings. Science 372, eabf4588 (2021).

67. Kabra, M., Robie, A. A., Rivera-Alba, M., Branson, S. & Branson, K. JAABA: interactive machine learning for automatic annotation of animal behavior. Nat. Methods 10, 64–67 (2013).

68. Trautmann, E. M. et al. Accurate estimation of neural population dynamics without spike sorting. Neuron 103, 292–308 (2019).

69. Osborne, J. E. & Dudman, J. T. RIVETS: a mechanical system for in vivo and in vitro electrophysiology and imaging. PLoS ONE 9, e89007 (2014).

70. Harris, C. R. et al. Oliphant. Array programming with NumPy. Nature 585, 357–362 (2020).

71. Hunter, J. D. Matplotlib: a 2d graphics environment. Comput. Sci. Eng. 9, 90–95 (2007).

72. Pedregosa, F. et al. Scikit-learn: machine learning in Python. J. Mach. Learn. Res. 12, 2825–2830 (2011).

73. Virtanen, P. et al. SciPy 1.0: fundamental algorithms for scientific computing in Python. Nat. Methods 17, 261–272 (2020).

74. McKinney, W. Data structures for statistical computing in Python. In Proc. 9th Python in Science Conference (eds van der Walt, S. & Millman, J.) 56–61 (SciPy, 2010).

75. Bach, F. R. & Jordan, M. I. Kernel independent component analysis. J. Mach. Learn. Res. 3, 1 (2003).

76. Paszke, A. et al. Automatic differentiation in PyTorch. In Proc. 31st Conference on Neural Information Processing Systems (NIPS 2017) Autodiff Workshop (NeurIPS, 2017).

77. Gower, J. C. Generalized procrustes analysis. Psychometrika 40, 33–51 (1975).

78. Kobak, D. et al. Demixed principal component analysis of neural population data. eLife 5, e10989 (2016).

79. Michaels, J. A., Dann, B. & Scherberger, H. Neural population dynamics during reaching are better explained by a dynamical system than representational tuning. PLoS Comput. Biol. 12, e1005175 (2016).

80. Feulner, B. et al. Small, correlated changes in synaptic connectivity may facilitate rapid motor learning. Nat. Commun. 13, 5163 (2022).

81. Chang, J. C., Perich, M. G., Miller, L. E., Gallego, J. A. & Clopath, C. De novo motor learning creates structure in neural activity space that shapes adaptation. Preprint at bioRxiv https://doi.org/10.1101/2023.05.23.541925 (2023).

82. Kingma, D. P. & Ba, J. Adam: a method for stochastic optimization. In Proc. 3rd International Conference on Learning Representations (ICLR, 2015).


## 致谢

我们感谢 K. Mitchell 提出基因组编码「生成模型」的概念，以及对本研究的其他有益评论。我们还感谢 L. Li 对解码器分析的贡献、F. H. Taschbach 建议解码分析的进一步对照，以及 C. Massumoto 提供的猴与小鼠插图。本研究部分得到以下支持：欧盟委员会基金 H2020-MSCA-IF-2020-101025630（M.S.）、Wellcome Trust 基金 108908/Z/15/Z（J.C.C.）、NIH 国家神经疾病与卒中研究所基金 NS053603 与 NS074044（L.E.M.）、Fonds de recherche du Quebec Santé 基金（chercheurs-boursiers en intelligence artificielle）（M.G.P.）、UKRI 工程与物理科学研究理事会基金 EP/T020970/1（J.A.G.）以及欧洲研究理事会基金 ERC-2020-StG-949660（J.A.G.）。

## 作者贡献

M.S.、M.G.P. 与 J.A.G. 设计项目。J.P. 与 J.T.D. 提供小鼠数据集。M.G.P. 与 L.E.M. 提供猴数据集。M.S. 与 J.C.C. 分析数据并生成图。J.C.C. 训练并分析神经网络模型。M.S.、J.C.C.、J.T.D.、M.G.P. 与 J.A.G. 解释数据。M.S.、J.C.C.、M.G.P. 与 J.A.G. 撰写手稿。所有作者讨论并编辑手稿。M.G.P. 与 J.A.G. 共同监督本工作。

## 利益冲突

J.A.G. 接受来自 Meta Platform Technologies, LLC 的资助。其余作者声明无利益冲突。

## 附加信息

**补充信息** 在线版本包含补充材料，见 https://doi.org/10.1038/s41586-023-06714-0。  
**通信与材料请求** 应寄 Matthew G. Perich 或 Juan A. Gallego。  
**同行评议信息** *Nature* 感谢 Tatjana Tchumatchenko 及其他匿名审稿人对本工作同行评议的贡献。同行评议报告可用。  
**重印与许可信息** 见 http://www.nature.com/reprints。

**出版商说明** Springer Nature 对已出版地图与机构隶属中的管辖主张保持中立。

**Open Access** 本文依据 Creative Commons Attribution 4.0 International License 许可（http://creativecommons.org/licenses/by/4.0/）。© The Author(s) 2023


---

## 扩展数据（Extended Data）

![扩展数据图 1](figures_03_safaie2023/ext_fig1.png)

**扩展数据图 1（Extended Data Fig. 1）｜执行中心外向伸手任务的猴的行为与神经数据。** A）本工作纳入的每只猴单个会话的手部轨迹。每条线代表一次试次，按目标着色（插图）。比例尺，1 cm。B）三只猴各自所纳入每个会话全部试次对的行为相关分布。灰圆，均值。蓝三角，（A）中所示代表性会话的均值。C）累积神经方差解释量随所纳入神经模式数目的变化。数据包含猴 C 的 12 个会话、猴 M 的 6 个会话与猴 J 的 3 个会话。每条线，一个会话。蓝色虚线，（A）中所示同一会话。

![扩展数据图 2](figures_03_safaie2023/ext_fig2.png)

**扩展数据图 2（Extended Data Fig. 2）｜保留潜在动力学的额外验证。** A）我们用张量最大熵（Tensor Maximum Entropy, TME）生成保留实际神经数据全部二阶统计的替代数据。一例猴中心外向数据集中，记录与替代数据跨时间、目标与神经元协方差的逐元素保守性。B）执行中心外向伸手任务的三只不同猴全部会话对的保留潜在动力学。数据包含图 2g 所示全部 21 个会话与 126 次比较。注意跨猴对齐潜在动力学的相关（红）相当接近猴内相关（灰），并大幅超过随机采样行为时段（橙）与 TME（芥末色）的下界对照。线与阴影区，均值 ± s.d.。C）类似（B），但为伸手与拉动任务期间的小鼠运动皮层。数据包含图 2j 所示四只不同小鼠的全部六个会话与 13 次比较。线与阴影区，均值 ± s.d.。D）类似（B），但为序列伸手任务期间的猴运动皮层。数据包含图 3e 所示三只不同猴的全部 11 个会话与十次比较。线与阴影区，均值 ± s.d.。E）保留的潜在动力学捕获神经群体活动的主导特征。前四个 PC（神经模式）与前四个典型相关所解释总神经方差的比较。单点，全部猴中心外向数据集的各次比较。F）潜在动力学的保留不依赖于流形维度数目。四个所考虑数据集（图例）中平均典型相关作为神经流形维度（主成分数目）的函数。数据按每个数据集分别汇总全部比较。线与阴影区，前四个典型相关的均值 ± s.d.。MCx，运动皮层。G）可用不同线性对齐方法 Procrustes 分析揭示保留的潜在动力学（细节见方法）。数据呈现方式同图 2g，但用 Procrustes 分析而非 CCA 对齐潜在动力学。线与阴影区，均值 ± s.d.。H）CCA 与 Procrustes 分析的成对比较。单点，各次比较。数据包含三只猴的 21 个会话与 126 次比较。

![扩展数据图 3](figures_03_safaie2023/ext_fig3.png)

**扩展数据图 3（Extended Data Fig. 3）｜来自两只不同猴与小鼠的会话对之间典型相关与保留潜在动力学的额外示例。** A）中心外向伸手任务运动执行期间猴运动皮层潜在动力学之间典型相关的示例。所示为图 2g 汇总结果中纳入的五次单独比较。B）运动执行期间小鼠运动皮层潜在动力学之间典型相关的示例。所示为图 2j 汇总结果中纳入的五次单独比较。C）同（B），对小鼠纹状体。D）同（A），但在运动规划期间。E）两只不同小鼠代表性会话对在对齐前（左）与对齐后（右）运动皮层潜在动力学所描述的轨迹。各线，到每个目标的平均潜在轨迹（按插图着色）。F）类似（E），对小鼠纹状体潜在动力学。G）类似（E），对猴隐蔽运动准备期间的运动皮层潜在动力学。

![扩展数据图 4](figures_03_safaie2023/ext_fig4.png)

**扩展数据图 4（Extended Data Fig. 4）｜跨猴保留的潜在动力学具有行为相关性。** A）跨动物运动学预测示例。沿 X（水平，上）与 Y（垂直，下）方向对八个目标各一次伸手期间的实际与解码手部轨迹；每列顶部箭头指示目标方向。图显示三种模型的预测及其各自准确度（图例）。数据来自图 2b 所示同一代表性会话。注意在对齐其潜在动力学后在不同猴上训练的解码器（「跨对齐」）表现几乎与在被测试猴同一会话上训练并测试的解码器（「内」）一样好。B）基于维度递增的流形潜在动力学的手部位置解码。线与阴影区，均值 ± s.d.。C）「完全」交叉验证程序——用三组试次进行训练与测试（一组用于对齐，一组用于解码器训练，一组用于测试）——对跨动物解码准确度无显著影响。误差条，均值 ± s.d.。D）按方差解释度量（variance accounted for；方法），对齐的潜在动力学也允许准确的跨动物运动学解码。数据点，来自不同猴的两个会话之间的各次比较（*n* = 126）。误差条，均值 ± s.d.。

![扩展数据图 5](figures_03_safaie2023/ext_fig5.png)

**扩展数据图 5（Extended Data Fig. 5）｜执行抓取与拉动任务的小鼠的行为与神经活动。** A）本工作纳入的每个会话的手部轨迹（注意两只小鼠各有两个会话）。每条线代表一次试次，按目标着色（左，黄；绿，右；见插图）。圆圈，初始手部位置。比例尺，1 mm。B）每个会话全部试次对的行为相关分布。灰圆，均值。C）两只不同小鼠以运动起始对齐的示例归一化运动皮层发放率（上）与对应手部轨迹（下）。每列，向两个方向各一次伸手。每列顶部箭头，伸手方向，着色同（A）。D）类似（C），但显示相同示例运动期间的纹状体活动。E）累积神经方差解释量随所纳入神经模式数目的变化，按脑区着色。

![扩展数据图 6](figures_03_safaie2023/ext_fig6.png)

**扩展数据图 6（Extended Data Fig. 6）｜运动皮层与纹状体中保留潜在动力学的进一步探索。** A）小鼠抓取与拉动任务抓取周围区间四个条件（两个伸手方向 × 两种负载）期间运动皮层潜在动力学的保留（红）扩展了图 2j 中两个伸手条件期间的结果（蓝）。此处显示图 2j 的下界对照（橙）与动物内上界（灰）以供参考。数据包含四只不同小鼠的六个会话（*n* = 13 次比较）。线与阴影区，均值 ± s.d.。B）在一只小鼠对齐潜在动力学上训练的解码器允许以合理准确度预测不同小鼠的手部位置（蓝），明显优于基于未对齐潜在动力学的解码器（绿）。线，来自不同小鼠的两个会话之间的各次比较（*n* = 6 个会话与 *n* = 13 对），按其间手部运动学相关着色（图例）。误差条，均值 ± s.d.。C–E）在小鼠拉动与抓取任务期间，运动皮层与纹状体潜在动力学相似地得以保留，并允许可比的运动学解码。跨全部比较平均的跨动物运动皮层（黄）与纹状体（橙）相关（再现自图 2j 与图 4b）大体重叠（C）。线与阴影区，均值 ± s.d.。运动皮层与纹状体潜在动力学保留程度（D）与跨动物解码器准确度（E）的成对比较。单点，来自两只不同小鼠的会话对（*n* = 6 个会话与 *n* = 13 对）。F）三个刻板运动执行数据集（图例）中每个会话对基于对齐潜在动力学的解码表现作为其平均行为相关的函数。类似于图 2k。点，跨会话对的各次比较，包含三只猴的 21 个会话与 126 次比较，以及四只小鼠的六个会话与 13 次比较。

![扩展数据图 7](figures_03_safaie2023/ext_fig7.png)

**扩展数据图 7（Extended Data Fig. 7）｜对齐神经数据的拓扑组织不足以揭示跨个体保留的潜在动力学。** A）为基于神经数据的拓扑组织跨会话对齐潜在动力学，我们对每次试次全部时间点平均的群体活动进行 CCA。该过程创建具有对应不同伸手方向清晰拓扑结构的点分布。B）该方法在单试次基础上提供了出色的拓扑对齐。对齐前（左），每只猴神经流形上每次试次的投影（此处彼此叠加显示）看起来不同。对齐后，两只动物均呈现相似的目标特异结构。各标记，向八个目标之一的一次伸手（插图中的颜色代码），猴 CL（实心圆）与猴 M（空心方）。C）将潜在动力学投影到通过对齐拓扑找到的 CC 轴上（纵轴）与投影到通过对齐潜在动力学找到的 CC 轴上（横轴）后相关的成对比较。数据对前六个神经模式显示（见图例颜色代码）。每个点代表一次比较；数据包含中心外向伸手任务期间三只不同猴的 21 个会话与 126 对比较。所有点均远低于对角线（灰色虚线），表明基于拓扑对齐潜在动力学达不到通过对齐潜在动力学获得的相关值。D）当对齐基于保留神经群体活动的拓扑结构而非其潜在动力学时，相关值显著更低，说明精确时间动力学对于揭示保留潜在动力学的重要性。数据同（C）。

![扩展数据图 8](figures_03_safaie2023/ext_fig8.png)

**扩展数据图 8（Extended Data Fig. 8）｜执行序列伸手任务的猴的行为、神经数据与潜在动力学保留。** A）两只不同猴以运动起始对齐的示例归一化神经发放率（上）与对应手部轨迹（下）。每列，向 28 个条件各一次伸手，条件我们根据伸手的起始位置、持续时间与方向定义。B）典型相关作为所考虑条件数目的函数（图例）。注意在考虑约 9 个条件后典型相关稳定。数据来自与（A）相同的示例数据集。C）典型相关作为神经元数目的函数（图例）。注意在考虑约 57 个神经元后迹线良好对齐。数据来自与（A）相同的示例数据集。D）置换条件标签（蓝）显著降低跨动物潜在动力学对齐，使典型相关更接近下界对照。数据来自三只不同猴的全部 11 个会话与十次比较。线与阴影区，均值 ± s.d.。

![扩展数据图 9](figures_03_safaie2023/ext_fig9.png)

**扩展数据图 9（Extended Data Fig. 9）｜执行相同任务的两只不同猴的潜在动力学，比同一只猴执行两个相关任务的潜在动力学保留得更好。** A）我们比较猴使用同一操纵装置执行三个相关的视觉引导一维腕部操作任务时所产生的潜在动力学。我们还比较了两个伸手与抓取任务（细节见文献 33）。B）目标组织与所产生光标轨迹在全部三个腕部操作任务中相同（注意重叠的光标轨迹）。C–E）此处我们显示运动学最相似的两个腕部操作任务的行为与神经数据（(C)；线按目标按 (B) 着色）：一维运动任务与一维弹簧负载（「弹性」）运动任务。这两个任务动用相同肌肉（D），单单位活动在其间也相对相似（(E) 显示三个示例单位）。F）这些任务以及其余腕部与伸手任务所诱发的协方差模式跨行为也相当相似（该图显示按主角分析跨任务良好对齐的十二个神经模式中的数目）。G）尽管任务特征（B）、运动输出（C）、动用肌肉（D）甚至单单位调谐（E）相似，同一只猴在同一天执行不同腕部任务（芥末色与浅灰）或不同伸手任务（深灰）时所生成的潜在动力学，不如从事相同任务的两只不同猴（红）相似。跨猴结果（红）示意猴执行相同中心外向伸手任务时潜在动力学的保留；结果与图 2e 相同，仅用 12 个成分重新计算以匹配 Gallego 等<sup>33</sup> 中的跨任务分析。线与阴影区，图例所示比较的均值 ± s.d.。(A–F) 改编自文献 33；(G) 中的跨任务对齐数据部分再现其中的补充图 7。

![扩展数据图 10](figures_03_safaie2023/ext_fig10.png)

**扩展数据图 10（Extended Data Fig. 10）｜循环神经网络模型的额外数据。** A）对示例标准（左）与因相对标准网络潜在动力学的典型相关相似性而受惩罚的约束（右）网络，每个伸手方向的行为输出与网络动力学。结果呈现方式同图 2b。约束网络数据代表 α = 0.50 的结果。B）两类 RNN 产生的行为输出。标准（上）与约束（下）网络产生相似输出。C）标准与约束网络对内与跨对的行为相关。数据对每种网络类型显示 10 个由不同随机种子初始化的网络，网络类型内 45 次比较，跨网络类型 100 次比较。标记，各次比较。误差条，均值 ± s.d.。D）标准网络对（蓝）与约束网络对（紫）之间以及跨网络类型（灰）潜在动力学的相似性。注意约束网络的相关远比标准网络更不相似。同样，标准与约束网络对之间潜在动力学的相关远低于标准网络对之间。因此，行为相似性不足以获得高度相关的潜在动力学。线与阴影区，均值 ± s.d.。

---

## Nature Portfolio 报告摘要（Reporting Summary）

PDF 末页为 Nature Portfolio Reporting Summary（图像页，无可抽取正文文本）。原样嵌入如下：

![报告摘要 1](figures_03_safaie2023/reporting_summary_p1.png)

![报告摘要 2](figures_03_safaie2023/reporting_summary_p2.png)

![报告摘要 3](figures_03_safaie2023/reporting_summary_p3.png)

---

*译文完。*
