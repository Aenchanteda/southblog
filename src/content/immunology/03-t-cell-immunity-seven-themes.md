---
title: "第3讲 · T细胞免疫：七个主题深入讲解"
description: "课程分组汇报用中文讲义：CD4/CD8抗病毒协作、TCR灵敏度与触发、CD45动力学分隔、T细胞耗竭、癌症免疫编辑、检查点阻断与RIPR；七个主题均附论文原图中文标注及未标注原图链接。"
pubDate: 2026-11-03
order: 3
tags: ["基础免疫学", "课堂笔记", "T细胞", "检查点", "肿瘤免疫"]
draft: false
---

# T细胞免疫：从抗病毒识别到肿瘤免疫治疗

> 面向课程学习与分组汇报的中文图文讲义。整理日期：2026-11-03。第二版：七个主题全部采用论文原始插图。
> 范围：Wenpei Duan、Zixin Gao、Hua Guo、Yuheng Li、Yingbo Wang、Liqun Wei、Yunnan Zhang的七个主题；不单设Jiale Nan的“细胞毒性T细胞与免疫记忆”章节。必要的CD8功能仅用于解释其他主题。

## 阅读导航

| 负责人 | 主题 | 需要回答的核心问题 | 最容易混淆的点 |
|---|---|---|---|
| Wenpei Duan | CD4⁺和CD8⁺ T细胞的抗病毒作用 | 为什么两者都重要？ | 辅助不是可有可无；启动T细胞与识别感染细胞不同 |
| Zixin Gao | TCR灵敏度与抗原区分 | 为何能发现少量外来肽而不被大量自身肽淹没？ | 高灵敏度不等于无限区分度，耐受也不全由TCR结合决定 |
| Hua Guo | TCR触发机制 | 二聚化、构象变化、动力学分隔各解释哪一步？ | 三模型不是固定先后步骤，也不一定互斥 |
| Yuheng Li | CD45与动力学分隔 | 胞外区尺寸怎样改变胞内信号？ | CD45同时具有促进与限制信号的作用 |
| Yingbo Wang | 慢性感染和癌症中的T细胞耗竭 | 长期抗原刺激为什么降低功能？ | PD-1阳性不等于耗竭；耗竭群体内部并不一致 |
| Liqun Wei | 癌症免疫编辑与逃逸 | 免疫怎样同时抑癌并塑造肿瘤演化？ | 选择原有/新生变异，不是免疫系统有目的地制造突变 |
| Yunnan Zhang | 检查点阻断与RIPR | 改变抑制信号如何增强抗肿瘤反应？ | 抑制PD-1这个“抑制受体”，可以增强T细胞功能 |

**主线：**先有可被识别的肽–MHC，再有TCR触发和信号整合，随后才有足以控制病原体或肿瘤的细胞反应。持续刺激会改变T细胞状态；肿瘤克隆也会在免疫压力下被选择。治疗介入的是这条链中的某些环节，不是保证整条链自动恢复。[R01–R22]

**材料约定：** 正文为中文教学综合；每个主题均有论文原始插图。中文直接叠加在原图相应位置，原图以完整数据嵌入SVG，未使用生成式工具重新绘制分子、箭头或实验结果。裁切仅选择完整且有独立含义的示意面板，图号、来源与未标注原图链接紧邻图片。蛋白、细胞因子和速率变量等标识保留。

## 共同基础：先读懂这些词

| 术语 | 中文与作用 |
|---|---|
| TCR | T细胞受体；通常讨论αβ TCR，识别的是肽–MHC复合物 |
| pMHC | peptide–MHC，肽–主要组织相容性复合体；不是游离肽 |
| APC / DC | 抗原呈递细胞 / 树突状细胞；DC尤其擅长启动初始T细胞 |
| CD3 / ITAM | TCR相关信号亚基 / 免疫受体酪氨酸活化基序；ITAM磷酸化是近端信号关键 |
| Lck / ZAP-70 / LAT | 近端酪氨酸激酶 / 下游激酶 / 信号支架蛋白，不能把它们视为TCR自身的激酶结构域 |
| CD28 / CD80、CD86 | 共刺激受体 / B7配体；能改变激活阈值和细胞反应 |
| CD45 | 受体型蛋白酪氨酸磷酸酶；胞外大、胞内具有酶活性，作用取决于底物与位置 |
| PD-1 / PD-L1、PD-L2 | 抑制性受体 / 配体；是生理性免疫调节系统的一部分 |
| TCF1 / TOX | 与耗竭亚群分化有关的转录调控因子；TCF1由TCF7基因编码 |
| RIPR | receptor inhibition by phosphatase recruitment，通过招募磷酸酶抑制受体 |

## 1. Wenpei Duan：CD4⁺和CD8⁺ T细胞为什么都能影响病毒控制？

### 1.1 先回答问题

CD8⁺ T细胞能识别携带病毒肽–MHC I的细胞，从而减少病毒复制的细胞来源；CD4⁺ T细胞则帮助建立、协调和维持反应。后者包括增强树突状细胞的启动能力、提供支持CD8反应的细胞因子，以及帮助B细胞产生抗体。病毒既有细胞内复制阶段，也有细胞间传播阶段，因此这些功能具有互补性。[R01、R02、R23]

![抗病毒免疫中文机制图](/immunology-assets/t-cell-immunity-2026/zh/01_antiviral.svg)

*图1：Kamphorst与Ahmed，Immunotherapy 2013，图1A，CD4支持CD8反应的原始机制图。仅摘录A面板；[未标注原图](/immunology-assets/t-cell-immunity-2026/original/antiviral.jpg)，[论文与图注](https://pmc.ncbi.nlm.nih.gov/articles/PMC3864579/)。原图讨论慢性LCMV背景下CD4细胞帮助及治疗思路，不应当作所有急性病毒感染的固定流程。[R24]*

### 1.2 “识别方式不同”究竟意味着什么？

通常，CD8⁺ T细胞的TCR识别肽–MHC I，CD4⁺ T细胞的TCR识别肽–MHC II；CD8/CD4是共受体，不能代替TCR完成肽特异性识别。MHC I与细胞内来源抗原呈递密切相关，MHC II与摄取抗原的加工呈递密切相关，但两者不是没有例外的“内源/外源”二分。例如，树突状细胞可以通过**交叉呈递**，把摄取的外源抗原送入MHC I途径，启动初始CD8反应。[R01、R03、R09]

必须区分两件事：一是专业APC在淋巴组织中启动初始T细胞；二是已形成的效应T细胞在组织中识别靶细胞。感染细胞可以成为效应CD8细胞的识别对象，却未必具备高效启动初始CD8细胞所需的共刺激条件。用“只要感染细胞有MHC I就能完成全部T细胞启动”解释，会漏掉DC和CD4帮助。[R01、R09、R19]

### 1.3 CD4帮助有三条重要路线

**路线一：对DC进行许可（licensing）。** CD4细胞通过其TCR识别DC上的相应pMHC II后，CD40L与DC上的CD40相互作用，增强APC支持CD8启动的能力。经典实验发现，适当的CD40信号可以在特定交叉启动体系中替代CD4帮助。这支持“CD4先调节APC，再由APC启动CD8”的路径，而不要求CD4与CD8永久形成三细胞复合体。[R01]

**路线二：提供持续反应的细胞因子支持。** 小鼠慢性LCMV感染研究表明，CD8细胞自身需要IL-21信号来维持反应；缺少它可导致抗病毒CD8功能受损和持续感染控制不良。这里的重点不是“IL-21越多越好”，而是CD4帮助可以通过具体受体信号改变CD8在慢性刺激下的命运。[R02]

**路线三：支持抗体反应。** 滤泡辅助性T细胞（Tfh，CD4亚群）与B细胞协作，支持生发中心反应。抗体能限制病毒的细胞外传播，而细胞免疫处理的是已感染的细胞来源。病毒感染小鼠研究也显示，B、T细胞之间的IL-6/IL-21协作受时间和条件影响，不能把所有帮助简化成一种细胞因子。[R23]

### 1.4 文献摘录卡与边界

> **短句摘录：** “IL-21 specifically sustains CD8⁺ T cell effector activity.”
>
> **中文释义：** 在该慢性病毒感染模型中，IL-21能维持CD8效应活性。原文：Elsaesser等，摘要。[R02](https://doi.org/10.1126/science.1174182)

**实验告诉我们什么：** CD4帮助不只是提高细胞数量，也可以影响持续刺激条件下CD8反应的质量。**不能推出什么：** 不能把小鼠LCMV结果直接变成所有人类病毒的治疗方案；强烈先天刺激有时能降低急性CD8启动对CD4帮助的依赖，帮助需求也随病毒、组织和时间变化。[R01、R02]

**汇报可用表述：** “CD8细胞直接限制感染细胞来源，CD4细胞则通过APC许可、细胞因子和B细胞帮助维持整体抗病毒反应；两者在不同阶段互相补充。”

**自测：** 若短期CD8扩增接近正常，但长期病毒控制恶化，为什么不能据此否认CD4帮助的重要性？因为数量上的早期扩增与持续功能是不同终点。[R02]

## 2. Zixin Gao：为什么少量外来肽能被识别，而大量自身肽通常不引发攻击？

### 2.1 这是两个同时存在的问题

**灵敏度（sensitivity）**指多低的抗原量就能产生反应；**区分度（discrimination）**指不同结合性质的配体，其功能效力相差多少。少量配体能触发信号，不等于系统能百分之百排除所有自身配体。Huang等在特定实验体系中观察到单个pMHC即可触发CD4细胞的细胞因子分泌；Pettmann等则定量指出，TCR区分具有增强性但并非完美。[R03、R06]

![抗原区分中文机制图](/immunology-assets/t-cell-immunity-2026/zh/02_sensitivity.svg)

*图2：Pettmann等，eLife 2021，图5A的动力学校验模型原图。[未标注完整图5](/immunology-assets/t-cell-immunity-2026/original/sensitivity.jpg)，[论文与图注](https://elifesciences.org/articles/67092/figures)。原图的C0、C1、CN是结合后的中间状态；kon为结合速率，koff为解离速率，kp为前进速率。模型图不等于直接拍摄到各个反应步骤。[R06]*

### 2.2 动力学校验：结合后还要连续通过若干关卡

最简单的模型可写成：

```text
TCR + pMHC ⇌ C0 → C1 → C2 → … → CN → 有效信号
               配体提前解离时，部分或全部中间状态回退
```

其中每一步可以代表磷酸化、蛋白招募或其他必要转变，而不是必须一一对应固定的已知酶。若在完成步骤前就解离，信号进程可能被磷酸酶等机制重置。因此，两种配体即使结合寿命只有相对有限的差异，完成整条反应链的概率也能明显不同。[R05]

在“每一步速率相同、解离后完全重置”的简化假设下：

`P(完成校验) ≈ [kp / (kp + koff)]^N`

`kp`为前进速率，`koff`为解离速率，`N`为步骤数。这里只是模型中的单次结合成功概率，不是整个人体免疫反应概率。增加N可放大寿命差异，但也会拖慢反应、减少输出，所以不能无代价地提高区分度。[R05、R06]

Pettmann等对所研究体系拟合得到约2.67个有效步骤和约2.8秒的延迟。**2.67是模型有效参数，不是细胞真实存在“2.67个分子反应”**，也不是所有TCR通用的计时器。[R06]

### 2.3 低抗原量如何仍能给出足够输出？

**连续触发（serial triggering）：** 同一个pMHC可以先后结合多个TCR，使稀少配体被重复利用。这与“单个配体永远占住同一个受体”不同，也不等于所有TCR必须同时被交联。经典研究中的受体占用/下调数据支持这一思想，但不能把其估计值当作所有抗原的固定倍增系数。[R04]

**局部组织和共受体支持：** CD4/CD8相关Lck、黏附分子和接触界面组织，会改变有效碰撞、停留和信号条件。把TCR从细胞表面拿到溶液中测出的亲和力，并不能独自决定细胞响应。Pettmann研究显示，呈递表面和共信号条件可改变灵敏度与区分度。[R06]

**信号放大与数字式响应：** 单细胞可能达到阈值后进入相近强度的分泌状态；增加抗原首先增加的是响应细胞的比例，而不一定让每个响应细胞无限增加分泌。这里“数字式”描述某类输出的全或无特征，不表示所有信号分子都只有0或1。[R03]

### 2.4 为什么自身肽没有全部触发攻击？

不能回答成“自身肽都不与TCR结合”。自身pMHC可参与胸腺选择和外周基础信号，TCR也有交叉反应性。健康状态下的自体耐受依赖多个层面：受体谱形成、反应阈值、共刺激条件和抑制性调节。TCR结合动力学只是其中一层，而“自身/外来”也不是TCR能直接读取的化学标签。[R06、R10、R18、R19]

### 2.5 文献摘录卡与边界

> **短句摘录：** “enhanced but imperfect discrimination”
>
> **中文释义：** 区分能力有所增强，但并非完美。Pettmann等的实验和模型分析针对可测量的亲和力—功能效力关系，而不是宣布免疫系统不会发生自身免疫。[R06](https://doi.org/10.7554/eLife.67092)

**汇报可用表述：** “T细胞通过结合后的时间校验提高配体区分，通过局部接触、共信号和信号放大保持灵敏度；自体耐受还需要受体谱与调节机制共同参与。”

**自测：** 一种配体亲和力更强，为什么不一定在所有条件下引起更强反应？因为抗原密度、解离速率、二维接触、共刺激及输出终点也会影响结果。[R06]

## 3. Hua Guo：二聚化、构象变化和动力学分隔如何解释TCR触发？

### 3.1 三个模型解释的是同一个起点，但提出不同的因果环节

TCRαβ负责识别，CD3/ζ链承载胞内ITAM，TCR本身不具有内源激酶结构域。需要解释的是：细胞外pMHC结合，如何让胞内ITAM获得有效磷酸化并启动下游信号。三个模型分别强调受体靠近、受体结构状态改变和局部酶分布改变。[R07、R09、R10]

![TCR触发三模型中文示意](/immunology-assets/t-cell-immunity-2026/zh/03_triggering.svg)

*图3：Mariuzza等，J Biol Chem 2020，图1原始插图，中文直接覆盖对应英文标签。[未标注原图](/immunology-assets/t-cell-immunity-2026/original/triggering.jpg)，[论文与图注](https://pmc.ncbi.nlm.nih.gov/articles/PMC6983839/)。A为聚集，B为分隔，D为变构，分别对应本主题三类解释；C是机械感知，E是机械感知与变构耦合的统一模型。这些是并列模型，不是五个连续步骤。[R25]*

### 3.2 模型一：二聚化／聚集

这里的二聚化不是指TCRα链和β链组成异二聚体——那是受体的基本结构。模型真正关注的是**两个或多个完整受体复合体靠近，或受体与共受体形成有利信号的组织方式**。靠近可能提高Lck接触底物和信号组分协作的机会。[R07]

**可检验预测：** 改变配体价态、间距或膜上流动性，应该改变触发效率。**主要困难：** 多价可溶试剂能交联受体，不代表天然单个膜锚定pMHC的触发必须依赖同一种交联；成像看到聚簇，也不证明聚簇发生在最初信号之前。微簇可能是信号的放大装置或结果。[R03、R04、R07]

因此，汇报时应使用“聚集模型提出……”而不是“抗原一定先把两个TCR连起来”。

### 3.3 模型二：构象变化

这一类模型认为，配体结合或机械力改变TCR–CD3的结构、相对排列、倾角或胞内尾部可及性，使信号蛋白更容易结合。Gil等报道受体刺激后CD3ε的富脯氨酸区域可被Nck识别，为构象/可及性变化提供了实验线索。[R08]

要区分两种“构象变化”：TCR结合面为了适配抗原而局部重排，与这种改变是否一路传递到跨膜/胞内信号位点，是不同问题。证明前者，不自动证明后者足以触发。类似地，观察到Nck结合并不能单独解释所有受体、所有激活条件下的第一步。[R07、R08]

**可检验预测：** 在尽量不改变配体结合与表达量的情况下，限制受体运动、破坏相关尾部位点，应改变触发。实际实验还必须排除突变影响蛋白装配、膜定位和受力传递等替代解释。[R07、R08]

### 3.4 模型三：动力学分隔

短的TCR–pMHC复合物使两细胞膜局部靠近，而较大的CD45胞外结构不容易进入这一区域。Lck与CD45的局部比例随之改变，CD3上的磷酸化更容易积累。“kinetic”强调持续进行的磷酸化—去磷酸化竞争，“segregation”强调空间分布，不是简单把激酶永久打开。[R09、R10]

James与Vale将信号组分重构到非T细胞体系，并使用人工受体证明：在该简化系统中，细胞外结合所驱动的空间分隔，不依赖天然TCR专属的跨膜构象改变，也能产生信号。这是机制充分性证据；不能因此断言天然T细胞完全不需要构象调控。[R09]

### 3.5 如何判断三者关系？

| 模型 | 直接改变的变量 | 最有价值的实验操作 | 单独不能回答的问题 |
|---|---|---|---|
| 二聚化／聚集 | 受体间距离、局部密度 | 控制价态、间距、扩散 | 聚簇是原因还是结果？ |
| 构象变化 | 位点可及性、受体排列 | 构象探针、定点突变、受力控制 | 局部结构改变怎样连接完整信号？ |
| 动力学分隔 | 激酶/磷酸酶相对分布 | 改变CD45或配体尺寸、重构界面 | 如何在真实细胞中兼顾高速和精确识别？ |

**证据综合：** 三类过程可以发生在不同尺度并相互加强。某实验支持一种模型，不等于排除另两种。讲清实验操纵变量，比把模型排成“已证明/已淘汰”更准确。[R07–R10]

### 3.6 文献摘录卡

> **短句摘录：** “without a transmembrane conformational change”
>
> **中文释义：** James与Vale在人工重构系统中发现，空间分隔可以在不需要跨膜构象变化的情况下发生并支持触发。其适用范围是该实验系统，不能扩写成所有天然TCR都没有构象变化。[R09](https://doi.org/10.1038/nature11220)

**汇报可用表述：** “三类模型分别强调受体组织、结构可及性和局部酶平衡；共同终点是促进CD3近端信号，但它们的必要性和贡献依赖实验情境。”

## 4. Yuheng Li：CD45的物理尺寸为什么影响TCR信号？

### 4.1 从“胞外太高”到“胞内磷酸化”的因果桥

尺寸影响进入接触区的概率，接触区分布影响磷酸酶接近底物的机会，底物接近性再改变净磷酸化。因此，胞外几何结构可以不经“CD45被特殊配体打开”的步骤，就影响胞内反应。该解释需要同时考虑膜间距、胞外区刚性与糖基化、局部分子密度和接触持续时间。[R09、R10]

### 4.2 论文原图摘录：直接看相对尺寸

![Chang等图3e中文标注](/immunology-assets/t-cell-immunity-2026/zh/04_cd45.svg)

*图4：Chang等，Nature Immunology 2016，图3e原始结构比较面板。中文文字叠加在原始像素上，分子轮廓和相对尺寸未重绘。[未标注完整图3](/immunology-assets/t-cell-immunity-2026/original/chang_fig3.jpg)，[论文与图注](https://pmc.ncbi.nlm.nih.gov/articles/PMC4839504/)。这是结构比较，不是细胞接触的显微照片。[R10]*

**读图顺序：**

1. 找到TCR与MHC II的结构组合，理解它们对应相对较短的识别复合物；CD4在相邻位置参与识别/共受体功能。
2. 看右侧CD2–CD58黏附分子组合：它也适合形成相近尺度的膜间接触，提示接触几何不只由TCR决定。
3. 比较CD45R0顶端与水平虚线：CD45即使是较短的R0异构体，也高于该示意中的短复合物尺度。
4. 图中152 Å等于15.2 nm；它是图中参考尺度，不是所有细胞膜接触都固定为15.2 nm。CD45异构体和糖链会影响其有效高度。[R10]

**图能支持：** 大分子进入短接触区在几何上不利。**图本身不能支持：** CD45已在活细胞中完全消失，或细胞已经产生钙信号。后两者需要定位成像与信号测定，不能仅凭结构图推断。[R10]

### 4.3 为什么CD45缺失反而可能无法激活？

CD45不是只针对TCR的“刹车”。它能够去除Lck C端抑制性酪氨酸（常用编号Y505）的磷酸，使一部分Lck处于可参与信号的状态；同时又能去磷酸化CD3等底物，限制信号。因此必须区分“全细胞没有CD45”和“接触区CD45局部降低”。前者可能损伤Lck准备状态，后者可以让已经可用的激酶在局部更占优势。[R10]

可用“橡皮与铅笔”理解局部反应：Lck写入磷酸化，CD45擦掉某些标记；接触区减少橡皮进入，有利于标记积累。但这个类比不完整，因为CD45在细胞其他位置还参与为Lck解除抑制。因此不能用“橡皮全部拿走就最好”推论。[R09、R10]

### 4.4 如何用实验检验？

**预测A：** 缩短CD45胞外区，使它更容易进入近接触区，应削弱原有的尺寸分隔效应。**预测B：** 增长识别复合物、增大膜间距，可能允许CD45接近并降低触发。**预测C：** 在排除配体特异性构象解释的重构系统中，单纯改变局部分布仍可能产生信号。[R09、R10]

上述操作都需要控制表达量、酶活性、结合能力和膜定位。否则，信号改变也可能来自错误折叠或激酶储备改变。CD45分隔通常是相对减少，不应自动画成整个接触区绝对为零。[R10]

### 4.5 文献摘录卡与边界

> **短句摘录：** “the extracellular region of CD45 is rigid”
>
> **中文释义：** 该研究的结构与生物物理结果支持CD45胞外区具有刚性特征，这为尺寸排斥机制提供依据。文中也研究了人工表面产生的近接触及信号，不能把玻璃/脂双层体系与体内抗原识别完全等同。[R10](https://doi.org/10.1038/ni.3392)

**汇报可用表述：** “CD45尺寸决定它能否有效进入短接触区，从而改变局部磷酸酶与激酶的竞争；它并非被全局关闭，而是发生位置依赖的功能变化。”

## 5. Yingbo Wang：慢性感染和癌症中，持续刺激怎样形成T细胞耗竭？

### 5.1 耗竭不是单纯“累了”

耗竭（exhaustion）是一组与持续刺激相关的细胞状态，涉及效应功能、增殖能力、抑制性受体表达、转录网络和染色质调控。它与短期激活、无反应（anergy）及衰老（senescence）不能互换。PD-1可以在正常激活后上调，所以单独检测PD-1阳性不足以判定耗竭。[R11–R14]

### 5.2 持续刺激如何“写入”细胞程序？

急性反应中的刺激可随病原清除而减少；慢性感染或肿瘤中，抗原可能持续存在，细胞反复收到TCR输入。在这样的背景下，NFAT及TOX等调控网络会影响细胞状态。Khan等通过扰动TOX证明，它不仅是伴随表达的标志，还参与建立耗竭相关的转录和表观遗传程序。[R11]

同时，抑制配体、炎症、氧和营养条件可以进一步限制功能。但“肿瘤缺氧导致全部耗竭”仍过于简化；抗原持续性和细胞内分化程序不能被省略。相反，把TOX直接称为应删除的“坏基因”也不妥：其作用还涉及细胞适应长期刺激和维持，删除某个标志不保证细胞数量与有效反应一起恢复。[R11、R14]

### 5.3 论文图形摘要摘录：耗竭细胞内部也有层级

![Beltra等耗竭亚群中文标注图](/immunology-assets/t-cell-immunity-2026/zh/05_exhaustion.svg)

*图5：Beltra等，Immunity 2020，原论文图形摘要的图内翻译版，细胞群、箭头和分子标志均来自原图。[未标注原图](/immunology-assets/t-cell-immunity-2026/original/exhaustion_graphical_abstract.jpg)，[论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC8360766/)。该四亚群分化框架来自小鼠慢性LCMV感染研究，不能视为所有人类感染和肿瘤的固定分化路径。[R14]*

**逐栏阅读：** 第一栏为较静息、驻留的祖细胞样耗竭群；第二栏为更具增殖性和循环特征的祖细胞样群；第三栏为中间状态，保留一定效应特征；第四栏为终末耗竭状态。图中的Ly108和CD69组合用于该实验体系的分群，不能不经验证直接当作人类患者通用诊断标准。[R14]

“祖细胞样”不意味着正常初始T细胞，也不是把免疫记忆主题重新引入；它表示在耗竭反应内部，某些细胞仍能自我维持并提供下游细胞。Im等的研究显示，PD-1治疗后的增殖反应主要来自特定具有干样特征的群体，而非所有终末耗竭细胞同步恢复。[R13]

### 5.4 为什么阻断PD-1不等于彻底重置耗竭？

表面抑制信号与稳定分化程序是两个层面。阻断PD-1可以改变当前信号平衡，但未必消除此前形成的染色质状态。Pauken等在小鼠慢性感染模型中发现，短期功能重振与稳定表观遗传改变并不等价，提示恢复的持续性受限制。[R12]

因此，研究报告最好分别写：受体表达是否改变、细胞是否增殖、细胞因子是否恢复、肿瘤/病毒是否减少，以及恢复是否持久。只看到一种细胞因子增加，不能宣布耗竭已经逆转；只看到肿瘤PD-1高表达，也不能保证检查点药物有效。[R12、R13、R19]

### 5.5 文献摘录卡与汇报重点

> **短句摘录：** “epigenetic stability”
>
> **中文释义：** 耗竭相关表观遗传状态具有稳定性，能限制PD-1通路阻断后功能重振的持续性。原文证据来自小鼠实验，并不意味着人类患者都无法获得长期获益。[R12](https://doi.org/10.1126/science.aaf2807)

**汇报可用表述：** “长期抗原刺激推动T细胞形成异质性的耗竭分化程序。检查点阻断主要解除部分抑制并动员可响应亚群，而不一定把所有耗竭细胞恢复成同一种健康状态。”

**自测：** 为什么“PD-1降低、细胞增殖”仍不足以证明长期控制改善？因为需要独立验证效应功能、持久性和疾病负荷。[R12、R13]

## 6. Liqun Wei：免疫系统为何既能抑制癌症，又能塑造肿瘤演化？

### 6.1 免疫编辑的核心是“控制＋选择”

肿瘤由不同克隆组成，不同细胞可具有不同抗原表达、呈递能力和免疫敏感性。T细胞优先消灭容易被识别的细胞时，较难识别或能抵抗攻击的克隆获得相对存活优势。于是免疫系统一方面减少肿瘤细胞，另一方面改变残存群体的组成。[R15、R16]

这不是免疫系统有目的地帮助癌症，也不要求免疫攻击直接制造针对性的逃逸突变。原有变异、治疗/生长过程中产生的变异以及可逆的表达变化，都可能接受选择；“选择”与“突变产生”应分开。[R16、R17]

![免疫编辑三阶段中文图](/immunology-assets/t-cell-immunity-2026/zh/06_immunoediting.svg)

*图6：Teng等，J Clin Invest 2015，图1A原始插图，展示肿瘤抗原呈递、DC启动与T细胞激活不足这一类免疫逃逸。中文直接标在图上。[未标注完整图1](/immunology-assets/t-cell-immunity-2026/original/immunoediting.jpg)，[论文与图注](https://www.jci.org/articles/view/80004)。TAA为肿瘤相关抗原，TSMA为肿瘤特异性突变抗原；下方列的是综述当时讨论的治疗策略，不等于对所有患者适用的治疗建议。[R26]*

**原图怎么读：** 上方是淋巴结中的DC与CD8细胞相互作用，下方是肿瘤与抗原来源。图的重点是“抗原信息不足或启动失败”，属于逃逸机制；它没有直接画出清除—平衡—逃逸三阶段，不能把这张图当作三阶段的完整实验演示。三阶段框架见下文与R15、R16。[R26]

### 6.2 清除、平衡、逃逸分别意味着什么？

**清除（elimination）：** 免疫反应识别并移除部分转化细胞，发挥外源性抑癌作用。清除失败不等于免疫系统完全没有识别；也可能是识别后效应不足。[R15、R16]

**平衡（equilibrium）：** 免疫压力把残存肿瘤限制在不能明显扩增的水平。Koebel等通过小鼠致癌模型中的免疫干预，提供了潜伏病灶可以受适应性免疫维持于平衡状态的证据。小鼠潜伏肿瘤控制不能等同于每个人类未检出癌症都处于免疫平衡。[R15]

**逃逸（escape）：** 某些克隆绕开识别或破坏免疫效应条件，获得可见的生长优势。免疫逃逸可以由肿瘤细胞内在变化或周围微环境共同构成，不只有PD-L1上调这一种机制。[R16、R17]

### 6.3 一个具体的“克隆选择”思想实验

设原有100个肿瘤细胞，其中90个高表达某个可被TCR识别的突变抗原，10个低表达。若免疫反应更有效地清除前90个，即使总体细胞数先减少，残余肿瘤也可能富集低表达克隆。这里的90/10只是教学假设，**不是文献中的实测比例**。[R16，教学解释]

Matsushita等把肿瘤外显子测序与T细胞识别实验结合，研究了特定突变抗原及其相关免疫选择。这比仅在逃逸肿瘤中发现一个不同基因更有说服力：它尝试连接“具体突变→可呈递抗原→T细胞反应→克隆结果”。[R16]

### 6.4 逃逸可以发生在不同环节

| 环节 | 可能的逃逸变化 | 为什么有效 | 解释边界 |
|---|---|---|---|
| 抗原本身 | 抗原低表达/丢失，抗原阴性克隆富集 | 对应TCR失去有效目标 | 不代表所有其他抗原都消失 |
| 抗原呈递 | B2M等受损，MHC I表面呈递异常 | CD8识别链受阻 | NK的缺失自身识别可能形成另一种压力 |
| 炎症应答 | JAK1/JAK2等变化影响IFN通路 | 改变细胞对免疫信号的反应 | 不同突变效果不同，不能仅凭基因名断言耐药 |
| 微环境与免疫状态 | 抑制配体、抑制细胞和耗竭程序 | 即使被识别也可能难以有效清除 | 不完全由肿瘤细胞基因决定 |

表中B2M和JAK通路的临床例证来自Zaretsky等的获得性耐药研究；其分析仅涉及4名被选择研究的黑色素瘤患者，并非总体耐药发生率调查。[R17]

### 6.5 文献摘录卡与汇报重点

> **短句摘录：** “control and shape cancer”
>
> **中文释义：** 免疫系统既能控制癌症，也能改变其残存细胞群的性质。Koebel等把这一双重作用放进清除、平衡和逃逸框架中。[R15](https://doi.org/10.1038/nature06309)

**汇报可用表述：** “免疫压力并不只是决定肿瘤细胞死多少，还会改变哪些克隆留下；逃逸是这种选择与微环境变化共同作用的结果。”

**与下一章连接：** 检查点阻断可以改善免疫反应，但若肿瘤已失去关键呈递能力，只解除抑制未必能恢复识别。治疗失败要检查整条链，不能只看PD-1。[R17–R19]

## 7. Yunnan Zhang：检查点阻断与RIPR怎样增强抗肿瘤T细胞反应？

### 7.1 生理性抑制为什么会成为治疗靶点？

抑制性受体限制过强免疫并参与维持耐受；在肿瘤环境中，这些调节可被利用，使已有抗原识别的细胞难以发挥作用。因此检查点治疗不是凭空给T细胞创造新特异性，而是调节已有或可建立的反应条件。抗原呈递、共刺激和可响应细胞仍然重要。[R18、R19]

### 7.2 PD-1怎样发出抑制信号？

PD-1与PD-L1/PD-L2结合后，其胞内ITIM/ITSM等基序的酪氨酸磷酸化有利于招募SHP2等调控蛋白，降低激活网络中的磷酸化。Hui等通过生化重构和细胞实验指出，在其体系中CD28是PD-1相关磷酸酶作用的重要优先靶点。因此“PD-1只是直接关闭TCR”并不准确，共刺激轴也是核心。[R18]

Kamphorst等进一步用条件性基因干预等实验显示，PD-1通路治疗后的CD8增殖恢复依赖CD28/B7共刺激；在人类肺癌样本中观察到治疗后增殖群体主要为CD28阳性。这包含小鼠因果证据和人类相关观察，两者证据性质不能混为一谈。[R19]

### 7.3 传统检查点阻断做了什么？

抗PD-1或抗PD-L1抗体主要通过阻断受体与配体结合，降低配体驱动的抑制；抗CTLA-4则主要影响与CD28共享B7配体相关的调节等过程，其细胞/组织作用并不与PD-1完全一致。两者都不应被画成“直接杀死肿瘤细胞”的药物。[R18、R21、R22]

临床试验支持部分检查点治疗在特定患者群中产生获益。例如，KEYNOTE-006将834名晚期黑色素瘤患者随机分组，证明了研究条件下pembrolizumab相对ipilimumab的临床效应。这是人类随机试验证据，与体外细胞因子升高不在同一个证据层面；也不代表所有癌种或所有患者均有同样效果。[R22]

解除生理性抑制还可能产生免疫相关不良反应。Hodi等的试验同时记录了获益和毒性，说明“增强免疫”不是只有收益而没有代价。[R21]

### 7.4 RIPR的名字为何看起来“相反”？

RIPR全称为**receptor inhibition by phosphatase recruitment**，意为“通过招募磷酸酶抑制受体”。它本身是一种靶受体抑制策略，不是“招募磷酸酶必然增强免疫”的通用规律。增强还是削弱T细胞，取决于所抑制受体的功能。[R20]

在RIPR-PD1中，被抑制的是本来用于抑制T细胞的PD-1：

```text
RIPR分子在同一细胞膜上连接CD45与PD-1（cis，顺式）
             ↓
CD45胞内磷酸酶更接近PD-1胞内磷酸化基序
             ↓
PD-1去磷酸化，抑制信号下降
             ↓
在有激活输入的条件下，T细胞功能可增强
```

这里不是把CD45从T细胞拉到肿瘤细胞上，也不是把磷酸酶放进细胞核；“胞外双特异分子拉近受体→胞内酶接近底物”是关键空间关系。[R20]

### 7.5 论文原图摘录：看清招募发生在哪里

![RIPR图2a-b中文标注](/immunology-assets/t-cell-immunity-2026/zh/07_ripr.svg)

*图7：Fernandes等，Nature 2020，图2a–b原始示意面板，中文直接叠加于原图，未使用AI重绘受体或箭头。[未标注完整图2](/immunology-assets/t-cell-immunity-2026/original/ripr_fig2.png)，[论文与图注](https://pmc.ncbi.nlm.nih.gov/articles/PMC7875542/)。这里只摘录机制与构型，未把实验数据面板裁成缺少对照的片段。[R20]*

**左侧读图：** RIPR先连接CD45和PD-1，随后CD45的胞内酶结构域更容易作用于PD-1上的磷酸化位点。P表示磷酸基团，不是“PD-1蛋白减少”。**右侧读图：** 抗CD45与抗PD-1的结合模块被连接在一个分子中；重/轻链可变区与scFv标注是工程构型，而不是新的信号通路。[R20]

原研究报告RIPR能够降低模型中的持续性/配体相关PD-1信号，并在细胞和小鼠肿瘤模型中增强功能或治疗效应。**不能从这张示意图本身推出效果大小**，更不能把小鼠结果写成已证实的人体优越疗效。[R20]

### 7.6 与传统阻断比较，及与CD45章节的联系

| 问题 | 配体结合阻断 | RIPR-PD1 |
|---|---|---|
| 直接干预位置 | 受体–配体胞外相互作用 | 利用胞外连接改变胞内酶–底物接近性 |
| 主要思路 | 减少外部输入的抑制信号 | 直接降低靶受体的磷酸化状态 |
| 持续/配体非依赖信号 | 不保证覆盖所有研究体系中的此类信号 | 原研究尝试覆盖这类信号 |
| 必要条件 | 有可恢复的抗肿瘤反应等 | 还需合适CD45表达、几何构型与可及性 |
| 本讲义引用的证据 | 机制研究＋人类临床随机试验 | 2020年原研究的细胞与小鼠证据 |

第4章说CD45在TCR近接触区减少可以促进触发；这里却要把CD45拉近PD-1。这并不矛盾：**被去磷酸化的底物不同**。擦掉CD3 ITAM的磷酸可能限制激活，擦掉PD-1抑制基序的磷酸则可能削弱抑制。把CD45简单涂成“绿色激活分子”或“红色抑制分子”都容易误导。[R10、R20]

### 7.7 文献摘录卡与边界

> **短句摘录：** “receptor inhibition by phosphatase recruitment”
>
> **中文释义：** 通过把磷酸酶招募至靶受体附近来削弱该受体信号；若靶受体是PD-1，解除其抑制可以增强T细胞。原研究并未提供人体随机临床优越性证据。[R20](https://doi.org/10.1038/s41586-020-2851-2)

**汇报可用表述：** “传统检查点抗体主要阻止配体触发抑制，RIPR则通过诱导CD45与PD-1在同膜接近，直接降低PD-1磷酸化。它展示了不同干预层级，但临床成熟度不能等同。”

## 8. 七部分如何串成一个完整讨论？

1. **Duan：** 抗病毒控制需要不同T细胞功能之间的协作，不仅是存在多少CD8细胞。
2. **Gao：** 在复杂自身背景中识别稀有抗原，需要同时平衡敏感、快速与区分。
3. **Guo：** 识别后如何开始信号，有受体组织、结构和局部空间环境等解释。
4. **Li：** CD45提供一个具体例子：分子尺寸改变空间分布，再改变酶反应。
5. **Wang：** 持续输入不意味着持续高效输出，细胞状态可能进入耗竭程序。
6. **Wei：** 在肿瘤端，免疫压力还改变克隆组成，导致控制与逃逸并存。
7. **Zhang：** 治疗可以调节抑制信号，但其效果仍取决于抗原、呈递、共刺激及细胞状态。

### 汇报前的七条准确性检查

- 把“某些体系单个pMHC可触发”与“所有T细胞永远只需一个抗原”分开。
- 把动力学校验的时间步骤与动力学分隔的空间机制分开。
- 不把αβ受体基本结构说成配体诱导的二聚化。
- 不把CD45局部排斥说成全细胞CD45缺失。
- 不用单一PD-1表达诊断耗竭，也不把所有耗竭细胞当作一个群体。
- 不把克隆选择说成有目的地产生逃逸突变。
- 不把RIPR细胞/小鼠结果写成已证实的患者临床优越性。

## 9. 参考文献

下面各条均以Europe PMC结构化记录核对题名、作者、年份和DOI，并提供原始期刊/DOI链接。R07及R24–R26为综述，R05为理论模型论文，其他主要是原始实验或临床研究；具体证据类型见每条末尾。完整核验记录保存在`sources/reference_metadata.json`。

**[R01]** Schoenberger SP; Toes RE; van der Voort EI; et al. T-cell help for cytotoxic T lymphocytes is mediated by CD40-CD40L interactions. *Nature*. 1998;393(6684):480-483. [DOI: 10.1038/31002](https://doi.org/10.1038/31002). **类型：原始机制/实验研究。**

**[R02]** Elsaesser H; Sauer K; Brooks DG. IL-21 is required to control chronic viral infection. *Science (New York, N.Y.)*. 2009;324(5934):1569-1572. [DOI: 10.1126/science.1174182](https://doi.org/10.1126/science.1174182). **类型：原始机制/实验研究。**

**[R03]** Huang J; Brameshuber M; Zeng X; et al. A single peptide-major histocompatibility complex ligand triggers digital cytokine secretion in CD4(+) T cells. *Immunity*. 2013;39(5):846-857. [DOI: 10.1016/j.immuni.2013.08.036](https://doi.org/10.1016/j.immuni.2013.08.036). **类型：原始机制/实验研究。**

**[R04]** Valitutti S; Müller S; Cella M; et al. Serial triggering of many T-cell receptors by a few peptide-MHC complexes. *Nature*. 1995;375(6527):148-151. [DOI: 10.1038/375148a0](https://doi.org/10.1038/375148a0). **类型：原始机制/实验研究。**

**[R05]** McKeithan TW. Kinetic proofreading in T-cell receptor signal transduction. *Proceedings of the National Academy of Sciences of the United States of America*. 1995;92(11):5042-5046. [DOI: 10.1073/pnas.92.11.5042](https://doi.org/10.1073/pnas.92.11.5042). **类型：理论模型。**

**[R06]** Pettmann J; Huhn A; Abu Shah E; et al. The discriminatory power of the T cell receptor. *eLife*. 2021;10:e67092. [DOI: 10.7554/elife.67092](https://doi.org/10.7554/elife.67092). **类型：人类T细胞实验与模型拟合。**

**[R07]** van der Merwe PA; Dushek O. Mechanisms for T cell receptor triggering. *Nature reviews. Immunology*. 2011;11(1):47-55. [DOI: 10.1038/nri2887](https://doi.org/10.1038/nri2887). **类型：机制综述。**

**[R08]** Gil D; Schamel WW; Montoya M; et al. Recruitment of Nck by CD3 epsilon reveals a ligand-induced conformational change essential for T cell receptor signaling and synapse formation. *Cell*. 2002;109(7):901-912. [DOI: 10.1016/s0092-8674(02)00799-7](https://doi.org/10.1016/s0092-8674(02)00799-7). **类型：原始机制/实验研究。**

**[R09]** James JR; Vale RD. Biophysical mechanism of T-cell receptor triggering in a reconstituted system. *Nature*. 2012;487(7405):64-69. [DOI: 10.1038/nature11220](https://doi.org/10.1038/nature11220). **类型：原始机制/实验研究。**

**[R10]** Chang VT; Fernandes RA; Ganzinger KA; et al. Initiation of T cell signaling by CD45 segregation at 'close contacts'. *Nature immunology*. 2016;17(5):574-582. [DOI: 10.1038/ni.3392](https://doi.org/10.1038/ni.3392). **类型：原始机制/实验研究。**

**[R11]** Khan O; Giles JR; McDonald S; et al. TOX transcriptionally and epigenetically programs CD8+ T cell exhaustion. *Nature*. 2019;571(7764):211-218. [DOI: 10.1038/s41586-019-1325-x](https://doi.org/10.1038/s41586-019-1325-x). **类型：原始机制/实验研究。**

**[R12]** Pauken KE; Sammons MA; Odorizzi PM; et al. Epigenetic stability of exhausted T cells limits durability of reinvigoration by PD-1 blockade. *Science (New York, N.Y.)*. 2016;354(6316):1160-1165. [DOI: 10.1126/science.aaf2807](https://doi.org/10.1126/science.aaf2807). **类型：原始机制/实验研究。**

**[R13]** Im SJ; Hashimoto M; Gerner MY; et al. Defining CD8+ T cells that provide the proliferative burst after PD-1 therapy. *Nature*. 2016;537(7620):417-421. [DOI: 10.1038/nature19330](https://doi.org/10.1038/nature19330). **类型：原始机制/实验研究。**

**[R14]** Beltra JC; Manne S; Abdel-Hakeem MS; et al. Developmental Relationships of Four Exhausted CD8+ T Cell Subsets Reveals Underlying Transcriptional and Epigenetic Landscape Control Mechanisms. *Immunity*. 2020;52(5):825-841.e8. [DOI: 10.1016/j.immuni.2020.04.014](https://doi.org/10.1016/j.immuni.2020.04.014). **类型：原始机制/实验研究。**

**[R15]** Koebel CM; Vermi W; Swann JB; et al. Adaptive immunity maintains occult cancer in an equilibrium state. *Nature*. 2007;450(7171):903-907. [DOI: 10.1038/nature06309](https://doi.org/10.1038/nature06309). **类型：原始机制/实验研究。**

**[R16]** Matsushita H; Vesely MD; Koboldt DC; et al. Cancer exome analysis reveals a T-cell-dependent mechanism of cancer immunoediting. *Nature*. 2012;482(7385):400-404. [DOI: 10.1038/nature10755](https://doi.org/10.1038/nature10755). **类型：原始机制/实验研究。**

**[R17]** Zaretsky JM; Garcia-Diaz A; Shin DS; et al. Mutations Associated with Acquired Resistance to PD-1 Blockade in Melanoma. *The New England journal of medicine*. 2016;375(9):819-829. [DOI: 10.1056/nejmoa1604958](https://doi.org/10.1056/nejmoa1604958). **类型：人类获得性耐药病例与功能研究。**

**[R18]** Hui E; Cheung J; Zhu J; et al. T cell costimulatory receptor CD28 is a primary target for PD-1-mediated inhibition. *Science (New York, N.Y.)*. 2017;355(6332):1428-1433. [DOI: 10.1126/science.aaf1292](https://doi.org/10.1126/science.aaf1292). **类型：原始机制/实验研究。**

**[R19]** Kamphorst AO; Wieland A; Nasti T; et al. Rescue of exhausted CD8 T cells by PD-1-targeted therapies is CD28-dependent. *Science (New York, N.Y.)*. 2017;355(6332):1423-1427. [DOI: 10.1126/science.aaf0683](https://doi.org/10.1126/science.aaf0683). **类型：原始机制/实验研究。**

**[R20]** Fernandes RA; Su L; Nishiga Y; et al. Immune receptor inhibition through enforced phosphatase recruitment. *Nature*. 2020;586(7831):779-784. [DOI: 10.1038/s41586-020-2851-2](https://doi.org/10.1038/s41586-020-2851-2). **类型：原始机制/实验研究。**

**[R21]** Hodi FS; O'Day SJ; McDermott DF; et al. Improved survival with ipilimumab in patients with metastatic melanoma. *The New England journal of medicine*. 2010;363(8):711-723. [DOI: 10.1056/nejmoa1003466](https://doi.org/10.1056/nejmoa1003466). **类型：人类随机对照试验。**

**[R22]** Robert C; Schachter J; Long GV; et al. Pembrolizumab versus Ipilimumab in Advanced Melanoma. *The New England journal of medicine*. 2015;372(26):2521-2532. [DOI: 10.1056/nejmoa1503093](https://doi.org/10.1056/nejmoa1503093). **类型：人类随机对照试验。**

**[R23]** Karnowski A; Chevrier S; Belz GT; et al. B and T cells collaborate in antiviral responses via IL-6, IL-21, and transcriptional activator and coactivator, Oct2 and OBF-1. *The Journal of experimental medicine*. 2012;209(11):2049-2064. [DOI: 10.1084/jem.20111504](https://doi.org/10.1084/jem.20111504). **类型：原始机制/实验研究。**

**[R24]** Kamphorst AO, Ahmed R. CD4 T-cell immunotherapy for chronic viral infections and cancer. *Immunotherapy*. 2013;5(9):975-987. [DOI: 10.2217/imt.13.91](https://doi.org/10.2217/imt.13.91). **类型：机制/转化研究综述，作为原图来源。**

**[R25]** Mariuzza RA, Agnihotri P, Orban J. The structural basis of T-cell receptor (TCR) activation: An enduring enigma. *The Journal of biological chemistry*. 2020;295(4):914-925. [DOI: 10.1074/jbc.rev119.009411](https://doi.org/10.1074/jbc.rev119.009411). **类型：机制/转化研究综述，作为原图来源。**

**[R26]** Teng MW, Galon J, Fridman WH, Smyth MJ. From mice to humans: developments in cancer immunoediting. *The Journal of clinical investigation*. 2015;125(9):3338-3346. [DOI: 10.1172/jci80004](https://doi.org/10.1172/jci80004). **类型：机制/转化研究综述，作为原图来源。**

## 10. 图示来源、处理和复核说明

| 主题 | 原始插图 | 本讲义处理 |
|---|---|---|
| CD4/CD8抗病毒协作 | Kamphorst与Ahmed 2013，图1A | 只取A面板，图内中文 |
| TCR抗原区分 | Pettmann等2021，图5A | 只取动力学校验模型，图内中文 |
| TCR触发机制 | Mariuzza等2020，图1 | 完整图，五种模型对应标注 |
| CD45尺寸与分隔 | Chang等2016，图3e | 只取结构比较面板，图内中文 |
| T细胞耗竭 | Beltra等2020，图形摘要 | 完整图形摘要，图内中文 |
| 免疫编辑与逃逸 | Teng等2015，图1A | 抗原呈递/启动不足的逃逸机制面板，图内中文 |
| 检查点/RIPR | Fernandes等2020，图2a–b | 只取机制和构型面板，图内中文 |

**原图保真：** 所有结构、细胞、箭头和图形元素均来自下载的原始插图，未进行生成式重绘。SVG直接内嵌原始图像文件，并用独立文字层覆盖英文或在相邻位置给出中文。完整原图保存在[`/immunology-assets/t-cell-immunity-2026/original/`](/immunology-assets/t-cell-immunity-2026/original/)；各文件SHA-256与裁切坐标见`sources/figure_manifest.json`。标注层可能遮住原来的英文文字，因此也提供未标注原图作对照。SVG中的文字层可后续修改，原图不受影响。

论文图版权仍归原权利人。本讲义为个人课程学习与批判性解读提供有限图示摘录、出处及图注链接；公开出版或商业再利用须另核许可。选取的均为独立示意面板，未重绘或改动实验数据。

## 11. 检索方法、证据边界与文件使用

**检索日期：** 2026-11-03。**用途：** 定向教学证据综合，不是系统综述或临床决策指南。**渠道：** PubMed/PMC、原始出版社页面、Europe PMC元数据接口；优先使用可识别原始研究。

**主要检索式：** `CD4 help CD8 CD40 licensing IL-21 chronic viral infection`；`TCR antigen discrimination kinetic proofreading few pMHC`；`TCR triggering dimerization conformational change kinetic segregation`；`CD45 close contacts size Chang 2016`；`TOX TCF1 exhausted T cells epigenetic stability PD-1`；`cancer immunoediting equilibrium antigen loss Matsushita Koebel`；`PD-1 CD28 phosphatase RIPR Fernandes`。

**纳入原则：** 与七个问题有直接机制联系的奠基研究、因果扰动/重构实验、可连接机制的人类样本研究，以及用于区分临床证据层级的随机试验。**排除原则：** 无法核实出处的材料、仅凭标题推断的结论、与主题无关的细胞杀伤/记忆延伸，以及把推测当作临床定论的二手介绍。

**局限：** 未进行穷尽式检索或正式偏倚风险评分；不存在“引用Nature/Science所以结论自动正确”的推理。动物模型、人工重构和人类关联观察各有局限，已在对应章节说明。未逐项重新审计原始数据，也未查询所有文献的最新勘误/撤稿数据库。本讲义解释RIPR原始研究，不构成其截至今日全部研发或注册状态的调查。

**AI辅助说明：** 本讲义使用AI辅助检索、中文综合和标注文案整理；出处与模型边界经核对，原图保留供读者复查；本版图片采用确定性的SVG中文叠加，未使用生成式重绘。讲义不代表原作者审核或认可。

**本站阅读：** 图片托管于 `/immunology-assets/t-cell-immunity-2026/`，正文链接为绝对路径。
