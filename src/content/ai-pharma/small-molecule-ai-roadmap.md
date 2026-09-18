---
title: "小分子 AI 制药 · 学习路线图"
description: "适合医学信息学在读博士、Python 熟练但深度学习待补的学习者；这是一张小分子 AI Drug Discovery 打怪地图，按阶段用验收标准和里程碑项目推进。"
pubDate: 2026-09-18
tags: ["AI制药", "小分子", "学习路线"]
draft: false
---

# 小分子 AI 制药 · 学习路线图

> **适用对象**:医学信息学在读博士 · Python 熟练 · 深度学习待补 · 目标聚焦小分子药物发现(AI Drug Discovery)。
> **怎么用这份文档**:它不是课程表,是一张"打怪地图"。每个阶段有明确的**验收标准(能做出什么)**和一个**里程碑项目**——只有里程碑跑通了,才算真正过关,而不是"看完了视频"。节奏按每周 10–15 小时估算,可随你导师的课题和进度伸缩。

---

## 0. 核心心智模型(先建立,后面所有东西挂上去)

小分子 AI 制药,说到底是围绕分子做一个闭环:

**表示 (Represent) → 预测 (Predict) → 生成 (Generate) → 优化/筛选 (Optimize)**

- **表示**:怎么把一个分子喂给模型——SMILES 字符串、分子指纹(fingerprint)、分子图(graph)、3D 构象。
- **预测**:给分子打分——活性、ADMET(吸收/分布/代谢/排泄/毒性)、溶解度、结合亲和力。
- **生成**:凭空造出新分子——VAE、自回归、扩散模型。
- **优化/筛选**:朝目标性质迭代——强化学习、贝叶斯优化、虚拟筛选、分子对接。

你的技术栈就是沿这条链一层层长出来的。而工业界真正的工作流叫 **DMTA 循环**(Design–Make–Test–Analyze,设计-合成-测试-分析),AI 的价值就是加速其中的 Design 和 Test。把每个方法都放回这个循环里理解,你就不会学成一堆孤立的模型。

**你的差异化**:医学信息学背景让你天然懂临床/组学语境。别把自己练成"又一个会调 GNN 的人"——要成为能把生物医学问题翻译成建模问题的桥梁。这条护城河后面单独讲。

---

## 阶段总览

| 阶段 | 时间 | 主题 | 过关标志 |
|---|---|---|---|
| **Phase 0** | 0–3 月 | 深度学习地基 + 分子入门 | 能用 PyTorch 复现模型;会用 RDKit 处理分子 |
| **Phase 1** | 3–6 月 | 图神经网络(分子 ML 主力) | 在 TDC/MoleculeNet 上复现 ChemProp |
| **Phase 2** | 6–9 月 | 3D、几何深度学习与结合亲和力 | 跑通一次对接;做一个结合亲和力回归 |
| **Phase 3** | 9–15 月 | 分子生成与目标导向优化 | 复现一个生成模型并朝某性质优化 |
| **Phase 4** | 15 月+ | 收敛研究课题 + 前沿 + 发表 | 端到端 pipeline;一个真实课题 |

---

## Phase 0 · 深度学习地基 + 分子入门(0–3 月)

**目标**:把你唯一的短板(DL)补扎实,同时打开化学信息学的门。结束时你应该能**独立用 PyTorch 从零搭一个模型并训练**,并能用 **RDKit** 把 SMILES 变成指纹、图和描述符。

**主线课程(二选一,别都学)**:
- 《动手学深度学习》**d2l.ai**(中文版极佳,边写代码边学,PyTorch 版)——推荐,最贴合你"Python 强、要动手"的特点。
- 或 **course.fast.ai**(fast.ai),自上而下、快速出成果的风格。
- 概念补充:3Blue1Brown 的神经网络系列(建立直觉)。

**周级计划(约 12 周)**:

| 周 | 深度学习主线 | 并行:分子入门 |
|---|---|---|
| W1–2 | PyTorch 基础:张量、autograd、训练循环、GPU | 装好 RDKit,读懂 SMILES;从 SMILES 画分子 |
| W3–4 | MLP;损失函数、优化器、正则化、评估指标 | Morgan/ECFP 指纹、分子描述符、Lipinski 五规则 |
| W5–6 | CNN 与表示学习的直觉;embedding 概念 | ADMET 概念、类药性、数据集里的坑(标签噪声) |
| W7–9 | **Transformer 与注意力机制(重点)** | 读《Deep Learning for the Life Sciences》前几章 |
| W10–12 | 综合:自己完整训练 + 调参 + 评估一个模型 | 跑 DeepChem 教程,理解 train/valid/test scaffold split |

**里程碑项目**:用**分子指纹 + 一个你亲手写的 PyTorch MLP**(或 sklearn 随机森林作对照)在 MoleculeNet 的 **ESOL**(溶解度回归)或 **BBBP**(血脑屏障穿透分类)上训练一个 baseline。

**验收标准**:
- [ ] 不看教程能从零写出 PyTorch 训练循环。
- [ ] 能解释你用的评估指标(RMSE / ROC-AUC)和为什么分子任务要用 **scaffold split** 而不是随机划分。
- [ ] baseline 数字落在合理范围(能和 MoleculeNet 报告的量级对上)。

> ⚠️ 常见坑:分子任务如果用随机划分会**严重高估**性能,因为测试集里混进了和训练集骨架相同的分子。一开始就养成 scaffold split 的习惯。

---

## Phase 1 · 图神经网络:分子 ML 的主力(3–6 月)

**目标**:分子天然是图,GNN 是这个领域的通用语言。掌握消息传递(message passing),能在分子图上建模并超过指纹 baseline。

**核心资源**:
- **斯坦福 CS224W**(Machine Learning with Graphs,有公开课与讲义)——图机器学习最系统的入门。
- **PyTorch Geometric (PyG)** 官方教程——动手主力库(或 DGL,二选一)。
- **ChemProp** 代码库(Barzilay/Coley 组)——工业级、可直接复现。

**要吃透的模型/概念**:
- MPNN(Gilmer 2017,消息传递的奠基)、**D-MPNN = ChemProp**(有向边消息传递,分子性质预测的强 baseline)。
- GIN(图同构网络)、图注意力(GAT 类)。
- 三种分子表示的取舍:**指纹 vs 图(GNN) vs SMILES-transformer(如 ChemBERTa)**——什么时候用哪个。

**里程碑项目**:在 **Therapeutics Data Commons (TDC)** 的 ADMET Benchmark Group 上复现 **ChemProp**,挑 3–5 个任务,把你的数字和官方 leaderboard 对齐。

**验收标准**:
- [ ] 能用 PyG 自己写一个简单的消息传递层,而不只是调 API。
- [ ] 你的 GNN 在至少一个任务上**稳定超过** Phase 0 的指纹 baseline。
- [ ] 结果能复现(固定随机种子、记录超参、跑多次取均值±方差)。

---

## Phase 2 · 3D、几何深度学习与结合亲和力(6–9 月)

**目标**:从 2D 图走向 3D 结构,踏进 structure-based drug design(基于结构的药物设计)的门。这也是小分子和蛋白结构方向的交汇点。

**要掌握的**:
- **几何/等变深度学习**:理解为什么 3D 任务需要 **E(3)/SE(3) 等变**(平移旋转不变性)。代表:**EGNN**(E(n) 等变图网络)、SE(3)-Transformer;库用 **e3nn**。
- **分子对接(docking)**:用 **AutoDock Vina** 亲手对接一个蛋白-配体对,理解打分函数;再看 **DiffDock**(用扩散做对接)的思路。
- **结合亲和力预测**:在 **PDBbind** 数据上,用 3D-CNN 或几何 GNN 做回归。

**里程碑项目**(二选一):
- 用 AutoDock Vina 对一个已知靶点做一次小型虚拟筛选,并复述 docking score 的含义与局限;或
- 在 PDBbind 的一个子集上做结合亲和力回归,对比几何 GNN 与非 3D baseline。

**验收标准**:
- [ ] 能讲清楚"等变"在分子/蛋白里到底解决什么问题(拿一个具体例子)。
- [ ] 独立跑通一次对接,能读懂输出的构象和打分。
- [ ] 知道 docking score ≠ 真实亲和力,能说出为什么(打分函数近似、缺柔性、水分子等)。

---

## Phase 3 · 分子生成与目标导向优化(9–15 月)

**目标**:小分子 AI 的皇冠——**de novo 分子设计**。不是预测已有分子,而是造出满足多目标的新分子。

**生成范式(按这条线学)**:
- **VAE**:JT-VAE(Junction Tree VAE,保证生成合法分子)。
- **自回归图生成**:GraphAF 等。
- **扩散模型**:EDM(3D 分子生成)、GeoDiff(构象生成)——当前主流。

**目标导向优化**:
- 让生成"朝目标走":强化学习、贝叶斯优化、遗传算法。
- **多目标**:活性 + ADMET + **合成可及性(SA score)**要一起权衡——只优化活性会造出根本合不出来的分子。
- **逆合成(retrosynthesis)**入门:Coley 组的工作、ASKCOS,判断分子能不能合成。

**里程碑项目**:复现一个生成模型(JT-VAE 或一个扩散模型),做一次针对某目标性质(如 logP 或某个预测活性)的优化,报告 **validity / novelty / uniqueness** 和优化前后的性质分布。

**验收标准**:
- [ ] 生成的分子有效率(validity)高、且有新颖性(不是照抄训练集)。
- [ ] 能把"生成 + 一个打分器"接成一个最简优化闭环。
- [ ] 能批判性讨论:生成的分子合成可行吗?评估指标可靠吗?

---

## Phase 4 · 收敛课题 · 前沿 · 发表(15 月+)

到这里你已具备完整技术栈,重心从"学"转向"做研究":

- **收敛主线**:和导师定一个**具体、可发表**的课题,端到端跑通一个 pipeline。别再铺新方向。
- **前沿追踪**:分子基础模型 / 大规模预训练、生成与对接的联合建模、湿实验闭环(active learning 驱动的 DMTA)、可解释性与不确定性。
- **产出**:复现 → 改进 → 原创。把复现的 SOTA 放 GitHub,做成 portfolio——这是找导师合作和未来求职最硬的信号。

**工业界目标(小分子向)**:Schrödinger、Isomorphic Labs、Recursion、Insilico Medicine、Genesis Therapeutics、Iambic 等,以及大药企的 AI/计算化学团队。他们要的是"**有相关发表 + 能落地实现**"的博士。

---

## 附录 A · 书单与课程

- **深度学习**:《动手学深度学习》(d2l.ai)/ fast.ai(二选一);概念补 3Blue1Brown。
- **领域入门**:《Deep Learning for the Life Sciences》(O'Reilly,配 DeepChem 库)。
- **图机器学习**:斯坦福 CS224W。
- **Transformer/NLP(可选)**:斯坦福 CS224N(帮助理解注意力与序列模型)。
- **官方教程**:RDKit(rdkit.org)、DeepChem(deepchem.io)、PyTorch Geometric、Therapeutics Data Commons(tdcommons.ai)。

## 附录 B · 必读 / 必复现模型清单(小分子向)

| 环节 | 模型 / 方法 | 备注 |
|---|---|---|
| 表示·baseline | Morgan/ECFP 指纹 + RF/MLP | 永远先跑的对照组 |
| 性质预测 | **ChemProp (D-MPNN)** | 入门必做的强 baseline |
| 序列表示 | ChemBERTa(SMILES transformer) | 理解"分子当语言"的思路 |
| 3D / 等变 | **EGNN**、SE(3)-Transformer | 几何深度学习代表 |
| 对接 | AutoDock Vina、**DiffDock** | 传统 vs ML 版 |
| 生成 | **JT-VAE**、GraphAF、EDM、GeoDiff | VAE→自回归→扩散 |
| 逆合成 | Coley 组 / ASKCOS | 合成可行性把关 |

## 附录 C · 数据与基准

- **练兵主场**:**Therapeutics Data Commons (TDC)**——统一了大量制药 ML 任务,配 leaderboard,最适合你练手和找 baseline。
- **分子性质基准**:MoleculeNet(ESOL、BBBP、Tox21、BACE、Lipophilicity 等)。
- **化合物库**:ChEMBL、PubChem、ZINC。
- **结合/结构**:PDBbind、BindingDB;虚拟筛选基准 DUD-E。
- **常用指标**:预测用 ROC-AUC / RMSE;生成用 validity / novelty / uniqueness / SA score;对接用 docking score。

## 附录 D · 工具箱

RDKit(化学信息学核心)· DeepChem · PyTorch · PyTorch Geometric(PyG)· Therapeutics Data Commons(TDC)· AutoDock Vina · 可选 TorchDrug / e3nn。

## 附录 E · 值得跟踪的实验室 / 人

Regina Barzilay & Tommi Jaakkola(MIT)· Connor Coley(MIT,逆合成/实验自动化)· Jian Tang(Mila,TorchDrug)· Marinka Zitnik(Harvard,TDC)。方法前沿看 NeurIPS / ICML / ICLR,重大突破看 Nature / Science。

---

## 附录 F · 给你的策略提醒(重要)

1. **收敛,别贪多**。地基阶段广撒网没问题,但做研究时**收敛到一条主线**(如"分子生成"或"ADMET 预测"),另一条当辅助,否则博士期间容易铺太开、什么都不深。

2. **用你的医信背景造护城河**。纯 CS 背景的人不缺,你的稀缺性在于能把**临床/组学数据**和**分子层面**连起来。可考虑的差异化方向:药物重定位(drug repurposing)、真实世界数据 / 组学指导的靶点与化合物优先级、临床可翻译性评估。这是你比别人更容易做出独特工作的地方。

3. **复现即信号**。每个阶段以"复现一篇 SOTA 并跑出接近数字"作为硬验收,公开到 GitHub。这比任何简历描述都有说服力。

4. **和导师对齐**。这份路线是通用地基,最终课题必须落在你实验室实际在做的问题上。早点聊、早点收敛。

5. **警惕数据泄漏与虚高指标**。scaffold split、去重、合理的 baseline——领域里大量"惊艳结果"经不起严格划分。养成怀疑自己数字的习惯。
