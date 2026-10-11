---
title: "罗氏 Pharma Day 2026 · Lab-in-a-Loop 逐页解读"
description: "摘录 Aviv Regev（gRED）Revolutionizing drug R&D with Lab-in-a-Loop 幻灯片（原 PDF 第 64–100 页），逐页配中文标注图与讲解。"
pubDate: 2026-10-11
tags: ["AI制药", "罗氏", "Lab-in-a-Loop", "AIDD"]
draft: false
---

## 写在前面

本文摘录自 **Roche Pharma Day 2026**（2026-09-28，伦敦）中 **Aviv Regev**（Genentech Research and Early Development, **gRED**）专场：**Revolutionizing drug R&D with Lab-in-a-Loop**。

对应原版幻灯片 **第 64–100 页**（共 **37** 页）。每页配有带中文标注的截图，并附「图片里有什么 / 详细解读」。文末提供摘录 PDF 与页码对照表。

> **声明**：本文为学习笔记与公开材料整理，**不代表罗氏/基因泰克官方立场或背书**。幻灯片含前瞻性陈述与合作/管线进度表述，数字与时间点请以罗氏投资者关系原文 PDF 为准；转载请注明出处。

常用缩写：`LitL` = Lab-in-the-Loop / Lab-in-a-Loop；`TA` = Target Assessment；`LI` = Lead Identification；`LO` = Lead Optimization；`FM` = Foundation Model；`DMTA` = Design–Make–Test–Analyze。

## 第 64 页 · 章节封面：用 Lab-in-a-Loop 重塑药物研发

![第 64 页 · 章节封面：用 Lab-in-a-Loop 重塑药物研发](/blog-assets/roche-litl/roche-litl-p64.png)

**图片里有什么**

标题页：主标题 *Revolutionizing drug R&D with Lab-in-a-Loop*；演讲人 Aviv Regev（Genentech Research and Early Development, gRED）；日期 September 28th, 2026；Roche / Genentech 标识。

**详细解读**

本页开启 gRED 对「实验室闭环（Lab-in-a-Loop / LitL）」战略的专场。LitL 的核心主张是：把 AI/ML 嵌进从靶点发现到临床的每一次迭代，用数据—模型—实验的闭环提高研发命中率与速度。后续页会展开为何难、能力建设时间线、靶点/先导/优化/临床各段案例，以及自主实验室与「AI 独立性」。

## 第 65 页 · 药物研发成功率极低

![第 65 页 · 药物研发成功率极低](/blog-assets/roche-litl/roche-litl-p65.png)

**图片里有什么**

漏斗图贯穿 Target discovery → Drug discovery → Preclinical → Clinical studies → Reg. review → Manufacture，终点为 Approved medicine；标注 IND / NDA application。副标题给出行业典型成功率。

**详细解读**

页内关键表述：通常约 100 个在研究端启动的项目，仅约 1–2 个最终上市。这为后面引入 AI 与 LitL 提供动机——问题不只是「算得更快」，而是要在极窄漏斗里提高有效决策密度。

## 第 66 页 · 为何如此难：四大挑战

![第 66 页 · 为何如此难：四大挑战](/blog-assets/roche-litl/roche-litl-p66.png)

**图片里有什么**

四象限标题：BIG NUMBERS（巨大搜索空间）、MULTI-SCALE（原子—基因—蛋白—细胞—组织—器官—患者）、MULTI-MODAL（同一实体多种测量/视角）、VARIED（没有两条研究路径完全相同）。

**详细解读**

罗氏把成药难拆成搜索规模、跨尺度、多模态与路径异质性四类。每一类都对应不同的数据与模型需求，也为后页「AI 可逐项应对」做铺垫。

## 第 67 页 · AI 有望逐项应对上述挑战

![第 67 页 · AI 有望逐项应对上述挑战](/blog-assets/roche-litl/roche-litl-p67.png)

**图片里有什么**

版式与上页相同的四挑战，标题改为 AI has the potential to tackle each of these challenges（视觉上暗示 AI 覆盖四象限）。

**详细解读**

承接第 66 页：不是泛泛说「AI 有用」，而是主张对四大难点分别有切入点（压缩搜索、跨尺度建模、融合模态、适配多样路径）。具体打法在后文 PathoMap、主动学习、虚拟筛选、DMTA 智能体等页展开。

## 第 68 页 · Lab-in-the-Loop 概念示意

![第 68 页 · Lab-in-the-Loop 概念示意](/blog-assets/roche-litl/roche-litl-p68.png)

**图片里有什么**

示意图：Human biology, experiments & modalities、LAB (OR CLINIC) IN THE LOOP、Data、AI/ML 组成闭环三角。

**详细解读**

概念页：实验或临床持续产数，AI/ML 在环中学习并指导下一步实验。注意演讲混用 Lab-in-a-Loop / Lab-in-the-Loop，后文脚注亦写作 LitL。

## 第 69 页 · 端到端管线中的 LitL 框架

![第 69 页 · 端到端管线中的 LitL 框架](/blog-assets/roche-litl/roche-litl-p69.png)

**图片里有什么**

横向阶段：Target discovery and assessment (TA) → Lead identification (LI) → Lead optimization (LO) → Clinical candidate；脚注解释 AI/ML、FM、LI、LO、TA。

**详细解读**

这是整场的「导航页」，后文会多次以高亮某一阶段的方式重现。E2E 意味着每个环节内部都有 AI 迭代，而不是只在某一站贴一个模型。

## 第 70 页 · 从建设到交付的时间线

![第 70 页 · 从建设到交付的时间线](/blog-assets/roche-litl/roche-litl-p70.png)

**图片里有什么**

2020–2030 时间轴，三段条带：Build and iterate → Deploy and deliver → Transformative portfolio。

**详细解读**

战略叙事：先建设与迭代能力，再部署交付，最终追求管线组合层面的变革。细节里程碑见下一页矩阵。

## 第 71 页 · 战略投入：人才、AI、组织、数据与算力

![第 71 页 · 战略投入：人才、AI、组织、数据与算力](/blog-assets/roche-litl/roche-litl-p71.png)

**图片里有什么**

按 2020–2022 / 2023–2024 / 2025–2026 分列 Strategy & capability、Organization & talent、Data generation、Compute & software，以及 Example impact milestones（如首个 LitL 大小分子循环、IBD PathoMap、LLM、AI 参与比例等）。脚注含 BRAID、伙伴/收购标注。

**详细解读**

能力建设清单密度很高：早期 LitL 战略、BRAID、PrescientDesign；中期 Prescient 扩展、自动化与 AWS Research Agent；近期 Medra physical AI、Autonomous Lab Accelerator、Foundational Datasets for FMs、NVIDIA AI factory、OpenAI pilot 等。里程碑示例包括首个基于 Roche 数据训练的 LLM、IBD 图谱 +15 个 LI 靶点，以及「AI 参与：100% 大分子 / 50% 小分子（约 90% 合格项目）」等页内数字——引用时请以原 PDF 为准。

## 第 72 页 · 研究组合生产力稳步提升（2022–2026）

![第 72 页 · 研究组合生产力稳步提升（2022–2026）](/blog-assets/roche-litl/roche-litl-p72.png)

**图片里有什么**

三组柱状/趋势：Lead Identification Go、Lead Optimization Go、Internal Development Go；标注 CAGR 约 37%、20%、14%，以及 +155% LI Go、+75% LO Go、+50% internal DevGo；图例含 Actual / Forecasted / Business deals / Historical。

**详细解读**

副标题强调：在资源名义持平、LI 周期时间减半的背景下，从 LI-Go 到 LO-Go 再到内部开发 Go 均上升。这是「LitL 是否转化为组合产出」的量化页，注意区分历史与预测柱。

## 第 73 页 · AI/计算对管线决策的贡献

![第 73 页 · AI/计算对管线决策的贡献](/blog-assets/roche-litl/roche-litl-p73.png)

**图片里有什么**

左：饼图角色占比 Supportive 48%、Fundamental/Critical 41%、Informative 10%；右：分阶段柱状图（含 68%、43%、37%、36%、33%、25% 等）。副标题：40% of Q4 ’25 through Q2 ’26 pipeline decisions had a tracked AI / computational contribution；累计覆盖 40%（Q2 达 44%）。

**详细解读**

定义：Critical=实质影响决策；Supportive=显著增强决策信心；Informative=启发思考。页内同时给出「无计算贡献」对照。解读时抓住窗口期与 40%/44% 覆盖，避免外推到未披露时段。

## 第 74 页 · 章节分隔：聚焦靶点发现与评估

![第 74 页 · 章节分隔：聚焦靶点发现与评估](/blog-assets/roche-litl/roche-litl-p74.png)

**图片里有什么**

与第 69 页类似的 LitL 阶段框架页（TA→LI→LO→Clinical candidate）。

**详细解读**

分隔页，提示进入靶点发现与评估（TA）专题：PathoMap、TAP、主动学习、TargetNexus 等。

## 第 75 页 · 高质量研究组合入口在增加

![第 75 页 · 高质量研究组合入口在增加](/blog-assets/roche-litl/roche-litl-p75.png)

**图片里有什么**

上半：Input（遗传学、疾病图谱、扰动筛选等）→ AI disease model（Pathobiology maps、AI Agent）→ Output（管线靶点假说）→ Lab validation。下半：TAP 流程——任何人可提议靶点 → Target Champion 组 pack → TAP 约 2 周内建议 → LI 提案或终止。

**详细解读**

两条杠杆并行：科学上用 AI 增强病理图谱提高假说质量；组织上用 TAP 缩短评估周期并统一优先级。脚注：TAP=Target assessment portfolio。

## 第 76 页 · 病理生物学图谱加速管线：IBD 案例

![第 76 页 · 病理生物学图谱加速管线：IBD 案例](/blog-assets/roche-litl/roche-litl-p76.png)

**图片里有什么**

左侧数据模态（Clinical/Histological/Spatial/Cellular/Perturbation/Molecular/Genetics）汇入 AI/ML 与 PathoMap(FM)；右侧 IBD Pathobiology Map v2.0 示例模块（Immune regulation、Inflammatory signaling、Fibrosis and remodeling）连到 Portfolio programs。底部列出新靶点、生物标志物、联用、分子发现等输出。

**详细解读**

目标句：Data & FMs to help break the efficacy ceiling。IBD 图谱强调细胞×空间×人类遗传等多模态；PathoMap 既是知识地图，也是后续靶点与组合设计的输入。

## 第 77 页 · 各治疗领域的 AI 病理图谱

![第 77 页 · 各治疗领域的 AI 病理图谱](/blog-assets/roche-litl/roche-litl-p77.png)

**图片里有什么**

Oncology / Immunology / Neurology / Ophthalmology 均打勾；疾病举例含跨瘤种细胞表面靶点、COPD/IBD、AD/PD/MS/ALS、AMD。底部指标：First map deployed (IBD) 1 YEAR；4 neurology maps in 6 WEEKS；+155% increase in LI entries in 2 years。

**详细解读**

说明能力已从单病种试点扩到多 TA。三个数字分别讲「首图耗时」「神经图谱部署速度」「两年 LI 入口增幅」，可与第 72 页组合生产力叙事对照阅读。

## 第 78 页 · 面向基础模型的基础数据集计划

![第 78 页 · 面向基础模型的基础数据集计划](/blog-assets/roche-litl/roche-litl-p78.png)

**图片里有什么**

三列：Foundational datasets（序列→表型、人类遗传、大规模实验、扰动、患者组织、临床基因组等）→ Foundation models（Cell & tissue / Genomic / Perturbation FM，含 Virtual cell/tissue）→ Target discovery and prediction 用途（因果驱动、机制洞见、靶点跳跃、解卷积、安全性）。

**详细解读**

FD 计划的关键是「为训病生相关 FM 而专门大规模产数」，而不是把既往散落实验数据顺便拿来训。下游用途列表把靶点发现、机制与安全读出写得很清楚。

## 第 79 页 · 主动学习压缩生物学搜索空间

![第 79 页 · 主动学习压缩生物学搜索空间](/blog-assets/roche-litl/roche-litl-p79.png)

**图片里有什么**

左：Iterative Perturb-Seq loop，搜索空间约 180k pairs / 600 impactful genes，每轮约 600 pairs，细胞平台约 140 cells/perturbation，Combinatorial CRISPRi；右：Active learning vs random，Seeds where AI < Random: 20/20，MSE AI 0.083±0.002 vs Random 0.089±0.003。

**详细解读**

主动学习用模型选下一轮实验，比在强影响基因上随机抽样更能降低组合效应预测误差。Round#1 无 AI，之后 AI 选点并保留随机基线对照——实验设计本身体现 LitL。

## 第 80 页 · TargetNexus：靶点评估 AI 智能体

![第 80 页 · TargetNexus：靶点评估 AI 智能体](/blog-assets/roche-litl/roche-litl-p80.png)

**图片里有什么**

左：Target Nexus 智能体居中，连接 Tools/FMs/Foundational datasets 与 Hypothesis→Data→AI/ML→Experiment→Measure→Target assessment 环。右：Coverage 分 Target Biology / Drug Discovery / Clinical & Portfolio 细项。副标题：on track to be part of 80% of research portfolio decisions by Q4。

**详细解读**

TargetNexus 被定位为靶点评估的领域 Agent：汇总因果与疾病生物学、成药性/安全性/模态、人群/标志物/组合与竞争格局。80% 是「on track」目标表述，属前瞻性进度语言。

## 第 81 页 · 章节分隔：进入先导鉴定（含功能筛选）

![第 81 页 · 章节分隔：进入先导鉴定（含功能筛选）](/blog-assets/roche-litl/roche-litl-p81.png)

**图片里有什么**

框架页变体，强调 Target discovery with functional screen / Lead identification (LI)。

**详细解读**

提示下一节用功能筛选与虚拟/湿实验表型手段做 LI，案例见肿瘤通路与 PhenoCompass。

## 第 82 页 · 肿瘤靶点与药物发现的 LitL 案例

![第 82 页 · 肿瘤靶点与药物发现的 LitL 案例](/blog-assets/roche-litl/roche-litl-p82.png)

**图片里有什么**

六步条：Start with biology → Define Cell States → Measure cellular response → Identify and prioritize → Reveal new biology → Advance the best；方法标注 Perturb-Seq+Cell Painting、PhenoMaps+TranscriptoMaps；挑战写 Undruggable pathway in cancer，终点 On-pathway activity confirmed in vivo。

**详细解读**

叙事：对原「不可成药」肿瘤通路，用大规模扰动与表型+转录图谱，经 AI 高门槛验证，得到新靶点与新作用机制，并在体内确认通路活性。页脚注明合作完成。

## 第 83 页 · 虚拟高内涵小分子表型筛选

![第 83 页 · 虚拟高内涵小分子表型筛选](/blog-assets/roche-litl/roche-litl-p83.png)

**图片里有什么**

副标题数字：~220K compounds screened in a lab, 90B (10⁵-fold) space in ENAMINE。三步：Train foundation model → Induce phenotype in lab → Conduct phenocopy virtual screen。示例：公开 116K compounds；Enamine virtual library 4B compounds screened。

**详细解读**

LitL 的「尺度跳变」页：湿实验锚定表型，基础模型把筛选扩到十亿级化学空间做 phenocopy，再回到实验室验证——与下页前瞻验证衔接。

## 第 84 页 · 虚拟细胞表型筛选的前瞻验证

![第 84 页 · 虚拟细胞表型筛选的前瞻验证](/blog-assets/roche-litl/roche-litl-p84.png)

**图片里有什么**

案例 mTOR/PI3K：Enamine REAL ~4B → PhenoCompass → Predicted inhibitors → ~500 ordered (400 synthesized)；三轮验证 Morphology → Pathway activity → Kinase inhibition；配 FOXO3A 胞质/胞核示意图与命中阵列。

**详细解读**

强调「虚拟命中」经过形态、通路、激酶抑制层层收紧，并宣称获得确认激酶抑制的新颖骨架。读图时注意从左到右是漏斗，从下到上是读出特异性增强。

## 第 85 页 · 章节分隔：进入先导优化 LO

![第 85 页 · 章节分隔：进入先导优化 LO](/blog-assets/roche-litl/roche-litl-p85.png)

**图片里有什么**

再次出现 TA→LI→LO→Clinical candidate 框架页。

**详细解读**

分隔：进入小分子/大分子 Lead Optimization，以及每周主动学习、骨架跃迁、SM Agent、多特异性等内容。

## 第 86 页 · 小分子与大分子：AI 贯穿各阶段

![第 86 页 · 小分子与大分子：AI 贯穿各阶段](/blog-assets/roche-litl/roche-litl-p86.png)

**图片里有什么**

两行：Small molecules（Druggability → Hit generation → Make/Test/Analyze/Design）；Biologics（Lead discovery → Hit expansion → 同样循环）。顶栏 Target assessment / Lead identification / Lead optimization。

**详细解读**

总览页：无论小分子还是生物药，AI 都可嵌入评估、Hit 生成与 DMTA 优化环。后续页分别给结构生物学 Hit、SM 主动学习、多特异性积木化例子。

## 第 87 页 · AI 结构生物学加速 Hit 发现

![第 87 页 · AI 结构生物学加速 Hit 发现](/blog-assets/roche-litl/roche-litl-p87.png)

**图片里有什么**

左：生成蛋白构象系综 → 设计 HDX-NMR → 作溶剂可及图；右：VoxBind（口袋条件 voxel-denoising 生成）、SAGE（多属性配体设计）。时间条对比 Generic timeline X months 与 AI-enabled 相对缩短（页内 X-80%/X-90%/X-40% 等相对表述）。脚注 ICML 2026 GenBio Boltz-Jump。

**详细解读**

结构侧闭环：构象与实验（HDX-NMR）标定可药口袋，再条件生成与多属性设计出 Hit。时间轴用相对「X months」表达加速，未给出绝对月数。

## 第 88 页 · 小分子优化中的每周主动学习

![第 88 页 · 小分子优化中的每周主动学习](/blog-assets/roche-litl/roche-litl-p88.png)

**图片里有什么**

左环：Synthetic & target aware idea generation → Potency & ADME prediction → Selection for Active Learning → Experimental synthesis and testing，旁注 Project data / Project ready designs。右两图：Predicted P(active) vs Measured pIC50（Better molecules）；TPR–FPR（Better model）。

**详细解读**

双提升：主动学习每周选点，既改善分子质量，也改善模型本身——典型 LitL「模型与物料一起进化」。

## 第 89 页 · AI+物理引导的骨架跃迁加速 LO

![第 89 页 · AI+物理引导的骨架跃迁加速 LO](/blog-assets/roche-litl/roche-litl-p89.png)

**图片里有什么**

四步 Expand→Prioritize→Optimize→Learn；细节含 MedChem 起始骨架、内部 ML 过滤、>90k enumeration、预测相对效力、选 lead、结合优化（WIP）。底部：<35 min 生成并过滤 ~100K structures；>1k compounds；~40x improvement in potency。

**详细解读**

场景：在保持效力下优化代谢稳定性。页内给出明确量级（分钟级枚举过滤、千级化合物、约 40× 效力提升）；「WIP」标明结合优化仍在进行。

## 第 90 页 · 支持小分子发现的 AI Agent

![第 90 页 · 支持小分子发现的 AI Agent](/blog-assets/roche-litl/roche-litl-p90.png)

**图片里有什么**

左 Scientific foundation：Models & tools / Skills / Data / Context；右 AI support：LLM + Harness、Reasoning、Orchestration。

**详细解读**

把对接、ADME/效力、FEP、枚举、SAR、DesignHub 等技能与项目上下文接到 LLM 编排层，缩短从问题到设计决策的路径。脚注含 ADME、SAR、SM。

## 第 91 页 · 下一代多特异性抗体平台

![第 91 页 · 下一代多特异性抗体平台](/blog-assets/roche-litl/roche-litl-p91.png)

**图片里有什么**

左：多模态数据→AI/ML→PathoMap→Target building blocks；右：100+ foundational building blocks → 组装优化（例 5 programs）→ 快速产生临床候选（例 2 of 5）；另有 long-acting 组合示意。

**详细解读**

平台逻辑：先用 AI 病理图谱与数据驱动选对靶，再用可复用抗体积木并行多项目，以提高 PTS、加速并降本。数字均为页内举例口径。

## 第 92 页 · 集成 AI 优化低开发风险的 lead arms

![第 92 页 · 集成 AI 优化低开发风险的 lead arms](/blog-assets/roche-litl/roche-litl-p92.png)

**图片里有什么**

上：多种属免疫→高亲和与交叉反应→单价臂强功能→每靶 lead/backup。下：免疫原性模型 vs PK 风险模型散点，中间高通量亲和数据集 ~1,200 single mutants + sequence optimization；示例 Parallel efforts for each of 4 targets。

**详细解读**

多特异性成功不仅靠结合，还要过可开发性：用约 1200 单突变高通量数据与序列优化，在免疫原性与 PK 风险之间找更优臂。

## 第 93 页 · 过渡空白页

![第 93 页 · 过渡空白页](/blog-assets/roche-litl/roche-litl-p93.png)

**图片里有什么**

几乎无正文内容，仅见页码 93。

**详细解读**

保留该页以保持与原 PDF 页码一致；可视作章节视觉过渡，无额外科学主张。

## 第 94 页 · 迈向药物研发自主实验室

![第 94 页 · 迈向药物研发自主实验室](/blog-assets/roche-litl/roche-litl-p94.png)

**图片里有什么**

Autonomous Lab Accelerator；水平能力环 Observe→Learn→Predict→Design→Execute→Analyze→Results→Report；垂直成熟度 L0 Fully manual … L5 Lab-wide autonomy；Human role: Operator→Assistant→Approver→Auditor。脚注合作与 Cheng et al. Preprints.org 2026。

**详细解读**

把 LitL 从「人驱动的环」推向分级自主。L3–L5 对应 AI 辅助到域内/全实验室自主；人的角色从操作转向审批与审计。

## 第 95 页 · 章节分隔：进入临床候选

![第 95 页 · 章节分隔：进入临床候选](/blog-assets/roche-litl/roche-litl-p95.png)

**图片里有什么**

框架页再次出现，阶段含 Clinical candidate。

**详细解读**

分隔：进入临床阶段分子案例与 Clinic-in-the-Loop（影像 AI、协变量调整、GWAS 新结局）。

## 第 96 页 · LitL 更快发现更好分子：临床案例

![第 96 页 · LitL 更快发现更好分子：临床案例](/blog-assets/roche-litl/roche-litl-p96.png)

**图片里有什么**

流程 Data→Lead identification→Lead optimization→Phase 1；时间线 2022 Target identification (novel) → 2023 LI Go → 2024 LO Go → 2025 Clinical candidate → 2026 First patient in。要点：LI to clinical candidate in 18 months: 2x faster, reduced immunogenicity risk。

**详细解读**

用一条临床期分子证明闭环可同时谈速度与风险（免疫原性）。「2x faster」与「18 months」均为页内相对/绝对表述，需与项目背景一并理解。

## 第 97 页 · Clinic-in-the-Loop 概念

![第 97 页 · Clinic-in-the-Loop 概念](/blog-assets/roche-litl/roche-litl-p97.png)

**图片里有什么**

示意：Disease, phenotype and progression + Clinical trials + AI/ML，中心 CLINIC IN THE LOOP；文字 Lab-in-the-Loop to predict disease progression；旁注 Covariate adjustment。

**详细解读**

概念从实验室环延伸到诊所环：用 AI 预测进展并做协变量调整，服务试验解读与决策。具体眼科 GA 案例见下两页。

## 第 98 页 · AI 预测病灶生长并做协变量调整

![第 98 页 · AI 预测病灶生长并做协变量调整](/blog-assets/roche-litl/roche-litl-p98.png)

**图片里有什么**

左：基线单/多模态影像→AI model→预测 GA GROWTH RATE，训练验证于 >2,000 张既往 GA 试验影像。右：Mahalo unadjusted 假阳性效应 ~20% (p=0.16) vs deep-learning FAF 调整后 ~4.5% (p=0.6) 无效应。要点：调整改变 Ph2 解读；精度相当于该例中试验规模 >2×。引用 Anegondi N et al. Ophthalmology Retina 2023。

**详细解读**

Clinic-in-the-Loop 的硬例子：同一试验，AI 协变量调整可推翻「看似有效」的未调整结论，并提高效应估计精度。GA=geographic atrophy；FAF=眼底自发荧光。

## 第 99 页 · Clinic-in-the-Loop：AI 结局做 GWAS

![第 99 页 · Clinic-in-the-Loop：AI 结局做 GWAS](/blog-assets/roche-litl/roche-litl-p99.png)

**图片里有什么**

OCT→AI segmentation→Retinal zone mapping→EZ loss / RPE loss（例 15.0 vs 5.2 mm²，高 EZ/RPE=预后差）→GWAS of novel outcomes；底部：Closing the loop E2E: added as new input for GA pathobiology map driving target discovery。

**详细解读**

AI 定义的定量结局（光感受器相关 EZ 与 RPE 丢失）可发现传统风险研究未见的位点，并回灌 PathoMap，真正把临床读出接到靶点发现——完整 E2E 闭环。

## 第 100 页 · AI 独立性：掌控闭环与学习收益

![第 100 页 · AI 独立性：掌控闭环与学习收益](/blog-assets/roche-litl/roche-litl-p100.png)

**图片里有什么**

中心 Scientist；Capabilities 列表含 Proprietary FMs、Expert domain agents and harness、AI factory、Multiple data generation streams、Ability to iterate (lab and AL/RL)、Autonomous lab capabilities；旁列 Partnerships。副标题强调 data generation and AI independence。

**详细解读**

收束页：外部伙伴重要，但要「拥有」闭环中的数据生成、模型、智能体与迭代能力，才能把学习沉淀为竞争壁垒。AL/RL=主动学习/强化学习；与第 71、94 页的 AI factory、自主实验室叙述呼应。

## 原文与页码

- **完整原版**: Roche Pharma Day 2026 投资者材料（官方站点 / Investor downloads）。
- **本文覆盖**: 原 PDF **第 64–100 页**（Aviv Regev · Lab-in-a-Loop 全段；其后 *Financial Excellence and Digitalization* 未收录）。
- **摘录 PDF**: [`/blog-assets/roche-litl/roche-pharma-day-2026-lab-in-a-loop-pp64-100.pdf`](/blog-assets/roche-litl/roche-pharma-day-2026-lab-in-a-loop-pp64-100.pdf)

| 页码 | 中文标题 |
| ---: | --- |
| 64 | 章节封面：用 Lab-in-a-Loop 重塑药物研发 |
| 65 | 药物研发成功率极低 |
| 66 | 为何如此难：四大挑战 |
| 67 | AI 有望逐项应对上述挑战 |
| 68 | Lab-in-the-Loop 概念示意 |
| 69 | 端到端管线中的 LitL 框架 |
| 70 | 从建设到交付的时间线 |
| 71 | 战略投入：人才、AI、组织、数据与算力 |
| 72 | 研究组合生产力稳步提升（2022–2026） |
| 73 | AI/计算对管线决策的贡献 |
| 74 | 章节分隔：聚焦靶点发现与评估 |
| 75 | 高质量研究组合入口在增加 |
| 76 | 病理生物学图谱加速管线：IBD 案例 |
| 77 | 各治疗领域的 AI 病理图谱 |
| 78 | 面向基础模型的基础数据集计划 |
| 79 | 主动学习压缩生物学搜索空间 |
| 80 | TargetNexus：靶点评估 AI 智能体 |
| 81 | 章节分隔：进入先导鉴定（含功能筛选） |
| 82 | 肿瘤靶点与药物发现的 LitL 案例 |
| 83 | 虚拟高内涵小分子表型筛选 |
| 84 | 虚拟细胞表型筛选的前瞻验证 |
| 85 | 章节分隔：进入先导优化 LO |
| 86 | 小分子与大分子：AI 贯穿各阶段 |
| 87 | AI 结构生物学加速 Hit 发现 |
| 88 | 小分子优化中的每周主动学习 |
| 89 | AI+物理引导的骨架跃迁加速 LO |
| 90 | 支持小分子发现的 AI Agent |
| 91 | 下一代多特异性抗体平台 |
| 92 | 集成 AI 优化低开发风险的 lead arms |
| 93 | 过渡空白页 |
| 94 | 迈向药物研发自主实验室 |
| 95 | 章节分隔：进入临床候选 |
| 96 | LitL 更快发现更好分子：临床案例 |
| 97 | Clinic-in-the-Loop 概念 |
| 98 | AI 预测病灶生长并做协变量调整 |
| 99 | Clinic-in-the-Loop：AI 结局做 GWAS |
| 100 | AI 独立性：掌控闭环与学习收益 |

---

*整理日期：2026-10-11。图片为原幻灯片渲染并叠加中文标注，便于阅读；正式引用请核对原 PDF。*
