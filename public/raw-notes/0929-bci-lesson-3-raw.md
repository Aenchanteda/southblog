---
title: 神经信号收集与神经界面解码 · Lesson 3
description: 第三节课堂笔记：从 spike 到 EEG 的记录层次、电极—组织界面、柔性与水凝胶涂层，以及从记录到调控。
pubDate: 2026-09-29
tags:
  - 脑机接口
  - BCI
  - 笔记
---

# 第三节　神经信号收集与神经界面解码

> 仵婷　北京脑科学与类脑研究所  
> 课堂日期：2026-09-29　13:00–15:00　北脑

## 1. 神经信号获取方式

### 非侵入、半侵入、侵入

非侵入式：EEG、MEG、fNIRS，安全、便捷、可穿戴，空间精度差。半侵入式是临床主攻，ECoG 或硬膜外阵列，在精度和安全之间折中。侵入式把电极刺入皮层，Utah 阵列和 Michigan 探针可以到单神经元，风险最高。

| 路线 | 电极放在哪 | 课堂上给的判断 |
| --- | --- | --- |
| 非侵入 | 头皮外：EEG、MEG、fNIRS，以及作为对照的 fMRI | 安全、可重复、可穿戴；空间尺度停在厘米级 |
| 半侵入 | 硬膜下或硬膜外：ECoG | 临床主攻。精度与安全折中 |
| 侵入 | 针尖进入皮层：Utah 阵列、Michigan 探针 | 单神经元级；风险最高 |

### 从单神经元到头皮：神经信号的 4 个层次

同一块皮层，电极离细胞多远，看到的就是不同的信号。课堂上的数量级如下。

| 信号 | 幅度 | 带宽 | 电极在哪 | 空间尺度 |
| --- | --- | --- | --- | --- |
| Spike | 50–100 μV | 0.3–8 kHz | 皮层内微电极，贴着神经元 | 单细胞 |
| LFP，局部场电位 | < 1 mV | 约 300 Hz 以下 | 皮层内电极，但不一定贴着某一个胞体 | 局部群体 |
| ECoG，皮层电图 | 10–100 μV | 0.5–200 Hz，含 gamma | 硬膜下或硬膜外 | 毫米级皮层 |
| EEG | 10–100 μV | 0.1–50 Hz | 头皮 | 厘米级，看起来像全脑 |

**文献补充。** Buzsáki、Anastassiou 与 Koch（2012）把 spike、LFP、ECoG、EEG 看成同一类细胞外电流在不同空间平滑尺度上的样子。贡献最大的通常不是锋电位本身，而是突触在树突上造成的跨膜电流。锥体细胞沿顶端树突排成开放电场，许多细胞同步时，电流才会在远处叠加。锋电位的钠、钙电流时间短、空间衰减快，所以要用高阻抗、靠得很近的微电极，并在 300 Hz 以上去看。把头皮上的 EEG 理解成 LFP 在大约 10 cm² 量级上再被颅骨和头皮抹过一遍，就对上了课堂上的“低通滤波”和“厘米级”。

因此四行表不是四种生理现象，而是四套滤波器加四种电极距离。Spike 与 LFP 可以来自同一根皮层内电极，只是数字滤波的频段不同。ECoG 已经到不了单细胞，但还留得住高 gamma。EEG 连 gamma 的空间细节也大多保不住。

### 皮层节律

![皮层节律](0929-figures/IMG_7795.jpg)

*课堂幻灯片。Delta 到 gamma 的频段、典型情境，以及在 BCI 或临床里的用法。β-ERD 被标成运动想象的标志。*

| 频段 | 范围 | 典型情境 | 幻灯片上的用法 |
| --- | --- | --- | --- |
| δ Delta | 0.5–4 Hz | 深睡、无意识 | 麻醉深度 |
| θ Theta | 4–8 Hz | 浅睡、冥想、记忆 | 认知负荷 |
| α Alpha | 8–13 Hz | 安静闭眼 | 感觉运动区的静息节律 |
| β Beta | 13–30 Hz | 警觉、专注、运动 | β-ERD：运动想象 |
| γ Gamma | 30–100 Hz | 认知、注意、局部加工 | 跨区功能连接；ECoG 比 EEG 更容易看到 |

**文献补充。** 运动想象 BCI 用的不是一个锁相的诱发电位，而是背景节律的功率变化。Pfurtscheller 与 Lopes da Silva（1999）把事件相关去同步（ERD）定义成某个频段功率下降，事件相关同步（ERS）是功率上升。它不与事件锁相，而且可以在不同频段、不同电极上同时发生。手部运动或运动想象时，对侧感觉运动区的 mu（大约 8–13 Hz）和 beta 功率下降，这就是幻灯片上的 β-ERD。任务结束后，beta 功率常会短暂冲高，叫 post-movement beta rebound。做分类时，mu 与 beta 要分开看，不能把 8–30 Hz 合成一条“运动波”。

### 看见神经信号很难

| 困难 | 原因 | 工程对策 |
| --- | --- | --- |
| 信号微弱 | 微伏到毫伏，比环境噪声低几个数量级 | 低噪声前端、阻抗匹配、屏蔽 |
| 频段混叠 | Spike、LFP、EEG 的频段挨在一起，滤不干净就互相污染 | 模拟滤波加上按频带做的数字分离 |
| 界面不稳 | 电极移位、胶质瘢痕、阻抗漂移 | 柔性基底、抗炎或抗纤维化涂层、长期封装 |
| 现场干扰 | 工频、肌电、眼动和运动伪迹 | 共模抑制、参考电极、伪迹剔除 |

### 非侵入式：EEG、MEG、fNIRS、fMRI

**EEG。** 头皮电极拾取的是大量锥体细胞同步突触电流经过容积导体之后的电位。优势是无创、可重复、成本低、可以做成穿戴设备。局限也来自同一件事：颅骨和脑膜把空间细节抹平，分辨率停在厘米级，肌电、眼动和工频都比脑电容易大。课堂参数：10–100 μV，0.1–50 Hz。

**MEG。** 神经元电流同时产生极弱的磁场。Buzsáki 等（2012）给出的量级是头外约 10–1000 fT，要用超导量子干涉器件，并放在磁屏蔽室里。时间分辨率仍是毫秒，空间上对切向电流更敏感，设备不可移动。

**fNIRS 与 fMRI。** 两者看的都不是离子电流。fNIRS 用近红外看血红蛋白浓度，fMRI 的常用对比度是血氧水平依赖信号（BOLD；Ogawa 等，1990）。神经活动先改血流，信号要过数秒才起来，所以时间精度是秒级。fNIRS 可以更接近可穿戴，空间仍然粗；fMRI 空间细，机器笨重。它们适合问“哪一块组织更活跃”，不适合问“这一毫秒哪一个细胞放电”。Jöbsis（1977）是用近红外无创观察组织氧合的经典起点。

### 半侵入式：ECoG

ECoG 的课堂参数：空间分辨率毫米级，带宽 0.5–200 Hz，幅度 10–100 μV。要开颅或至少打开到达硬膜的通路，风险低于把针扎进皮层，高于贴在头皮上。高 gamma 还在，这是它相对 EEG 的主要信息优势。

课堂上的产品案例是 Precision Neuroscience 的 Layer 7：超薄柔性膜、经颅骨微缝植入、可再取出。速记里的电极数是 529/1024。这是课堂案例，这次没有用一篇同行评议论文去核对这个配置，下面不把它写成已核实的器件指标。

### 侵入式：皮层内微电极阵列

Utah 阵列是在硅片上做出约一百根针，针尖扎进皮层，每根针尖一个记录点，代表器件来自 BrainGate 和 Blackrock Neurotech 这条线。Maynard、Nordhausen 与 Normann（1997）把它定义为一种可望用于脑机接口的皮层内记录结构。Hochberg 等（2006）在一位四肢瘫痪者的初级运动皮层植入 96 通道阵列，被试能用意图驱动光标、开关和机械臂。

Michigan 探针是另一条硅工艺：一根细柄上沿深度排多个触点，适合看一层一层的皮层，科研里用得多。课堂上说临床几乎见不到这种探针，指的是它没有像 Utah 阵列那样进入运动假体的人体试验。再往后的 Neuropixels 仍是 Michigan 式的硅柄，但把放大和数字化做进了针基：一根针上 960 个位点、一次可记录 384 个通道（Jun 等，2017）。

![Utah 阵列](0929-figures/IMG_7796.jpg)

*侵入式：皮层内微电极阵列。左为 10×10 的百电极针床，中为导线束与参考线，右为穿皮连接座。幻灯片右侧列出带宽 0.3–8 kHz、可分离单个 spike，以及长期植入后的胶质瘢痕。

课堂上还把 Neuralink 的 N1 和植入机器人 R1 放在一起，并有人追问：导线从一百多根加到约一千根，是否必要。这句是课堂讨论，不是某篇论文的结论。2019 年的平台论文描述的是聚合物细丝上的高通道植入系统（Musk 与 Neuralink，2019）。通道数上去之后，瓶颈会从“还能不能多扎一根针”转到封装、无线传输、功耗和能稳定跟踪多久。这件事放在第 2 章的 Stevenson 定律里看。

### Synchron Stentrode：血管内路线

![Synchron Stentrode](0929-figures/IMG_7797.jpg)

*支架电极经颈静脉送入上矢状窦，贴在血管壁上，采集邻近皮层的场电位。幻灯片写约 16 通道、创伤接近介入手术。动画署名 Pierre Smith，墨尔本皇家医院。课堂照片。*

**文献补充。** Oxley 等（2016）在绵羊的皮层表面静脉里放入支架电极，自由活动状态下记录到 190 天，频谱和带宽与硬膜外阵列相当，血管腔保持通畅。Mitchell 等（2023）报告澳大利亚 SWITCH 首例人体研究：导管送入、全植入、无线传到体外，严重上肢瘫痪的被试用运动相关信号控制电脑。课堂幻灯片写的 FDA IDE 与 COMMAND 试验，是这条线从动物记录走到早期可行性试验的后续，不是 2016 年那篇论文本身。幻灯片上的“约 16 通道”是产品配置，论文里的动物实验阵列不必是同一个通道数。

### 没有最好的路线，只有最合适的场景

EEG 能重复做、几乎没有手术风险，换来的是厘米级空间分辨率。ECoG 留得住高 gamma，但要打开到达硬膜的通路。Utah 阵列能分出单个 spike，同时带来胶质瘢痕和最高的手术风险。Stentrode 不进入脑组织，通道数也少。课堂的收束是按场景选路线，而不是排出一个总名次。

## 2. 神经界面技术-连接大脑与机器

### 信号采集链路

![信号采集链路](0929-figures/IMG_7798.jpg)

*五步：神经组织里的离子电流，电极界面上的离子—电子转换，模拟前端的放大、滤波和阻抗匹配，16 bit ADC，再是特征、分类和控制指令。*

幻灯片把整条链收成一句话：每经过一步，信噪比只会减少，不会增加；电极—组织界面是第一个决定因素。后面的材料、电路和涂层，都是在保护这一步已经得到的电压。放大器不能把淹没在界面噪声里的 spike 变回来。

### 高性能植入式神经界面的挑战

课堂上把高性能植入界面收成三件事。

1. **电化学。** 1 kHz 阻抗要低；电荷存储容量（CSC）和电荷注入容量（CIC）要高。Cogan（2008）把这两个量分开：CSC 来自循环伏安，是水窗之内能可逆存储的电荷；CIC 是一个刺激脉冲里、电极电位还没有冲出水窗时能注入的每相电荷。记录看的是小信号阻抗，刺激看的是大信号电荷。只报一个 1 kHz 阻抗，说明不了它能不能安全刺激。
2. **生物学。** 蛋白吸附之后会走向纤维化。纤维囊不一定造成急性伤害，但会把电信号挡住，信噪比下降。Polikov、Tresco 与 Reichert（2005）综述了慢性微电极周围的组织反应：小胶质细胞和星形胶质细胞活化、包裹层形成、记录质量随时间变差。
3. **材料和结构。** 课堂上的材料顺序是贵金属，到纳米结构，到二维材料，再到水凝胶和丝素这类软物质。结构上则是做柔、做密，并用多极刺激做电流导向。

### 电极材料体系全景：从贵金属到新型材料

![电极材料](0929-figures/IMG_7799.jpg)

*从 Pt/Ir/Au 到纳米铂、MXene、碳纳米管与石墨烯、PEDOT:PSS 与水凝胶、丝素与细菌纤维素。幻灯片底部的权衡是电化学性能、力学柔顺、生物相容和可制造性。*

| 体系 | 代表 | 幻灯片上的优势 | 幻灯片上的麻烦 |
| --- | --- | --- | --- |
| 传统金属 | Pt / Ir / Au | 工艺成熟，注入行为清楚 | 模量在 GPa，CSC 有限 |
| 纳米结构铂 | 纳米草、纳米锥、PtNRGrid | 面积上去，阻抗降几个数量级 | 工艺复杂，长期是否稳还要证 |
| 二维材料 | MXene（Ti₃C₂Tₓ） | 导电、光热、有多模态的可能 | 易氧化，难做成均匀的膜 |
| 碳 | CNT、石墨烯 | 表面积和 CSC 高，可以做得很柔 | 高分辨图形化和批量制造难 |
| 导电聚合物 / 水凝胶 | PEDOT:PSS、水凝胶 | 模量可以到 kPa，界面阻抗低 | 反复充放电时的电化学稳定性 |
| 天然可降解 | 丝素、细菌纤维素、ECM | 生物相容，可做成短暂存在的界面 | 导电差，寿命短 |

### 电极结构：柔性设计四策略

弯曲刚度（薄板的抗弯刚度）

\[
D = \frac{E h^{3}}{12(1-\nu^{2})}
\]

厚度 \(h\) 减半，\(D\) 变成八分之一，因为厚度以三次方进入。脑组织的模量大约是 kPa，聚酰亚胺是 GPa。只换一种“看起来软”的塑料不够，还得把承受弯曲的厚度降下来，或者把实心片改成纤维和网。

![柔性设计四策略](0929-figures/IMG_7800.jpg)

*四条几何路线：超薄片、细纤维、低模量弹性体、网格或三维多孔。图引自 Lee 等，Nano Letters，2019，19，2741–2749。课堂照片。*

Lee、Shim、Choi 与 Kim（2019）把这四条写成长期高分辨探针的设计菜单。

1. **超薄片，约 10 μm 甚至更薄。** 刚度按厚度的立方下降，片子可以贴上硬膜或皮层。
2. **细纤维，热拉可以到 10 μm 以下。** 直径接近细胞尺度，植入造成的置换体积小。课堂上的说法是“细到可以骗过免疫”，文献里的对应表述更谨慎：更小的横截面和更低的弯曲刚度减轻慢性组织反应，不是免疫学上的隐形。
3. **低模量弹性体，kPa 级。** 材料本身靠近组织，但封装、导体和吸水溶胀会把这个优势吃回去。
4. **网格或三维多孔。** 网比整片更容易随组织变形，孔隙让突起和组织长进来。Lieber 组的网状电子学是这一条的代表：组织可以长进网孔，而不是把一块实心异物顶在外面。

### 电学-电路模型

![柔性电极的分布电路](0929-figures/IMG_7802.jpg)

*从神经元到放大器的分布参数模型。界面、导体与封装、前置放大器分成三段。图引自 Lin 等，Advanced Materials，2025，37，2413938。课堂照片。*

Lin 等（2025）讨论的是可光刻、可放大产量的柔性脑机接口：材料的杨氏模量、电导和介电常数要同时放进电路和力学。幻灯片把界面写成溶液扩散电阻 \(R_\mathrm{spread}\) 串上双电层。双电层电容是内、外亥姆霍兹面加上扩散层，粗糙表面上常常要用常相位元件，而不是一只理想电容。导体沿针长有分布电阻，封装介质有分布的寄生电容。寄生电容是一条通向地的旁路：频率一高，信号还没进放大器就漏了。

![前端阻抗与后端阻抗](0929-figures/IMG_7803.jpg)

*分布参数收成两只阻抗。前端 \(Z_f = Z_e + R_c\)，后端 \(Z_b = Z_d \parallel Z_\mathrm{amp}\)。要让电压主要落在放大器输入端，需要 \(Z_b \gg Z_f\)。Lin 等，2025，图 3。课堂照片。*

这是一个分压器。组织里的源电压先经过界面和导线，再被封装寄生和放大器输入阻抗分流。放大器输入阻抗不够高，或者界面阻抗因为纤维化升得太高，输出/输入幅度就掉下去。所以“低 1 kHz 阻抗”和“高输入阻抗放大器”是同一条分压关系的两端。

刺激时看的是电流注入，不是小信号分压。

![电流注入的界面模型](0929-figures/IMG_7804.jpg)

*工作电极与回流电极之间的扩散电阻、双电层和法拉第阻抗。圆盘电极的扩散电阻 \(R_s \propto \rho/(4a)\)。总阻抗 \(Z(\omega)=R_s + R_{ct}\parallel Z_\mathrm{CPE}\)。电化学阻抗谱从约 1 MHz 扫到 0.1 Hz。图引自 Zeng 与 Huang，Advanced Functional Materials，2023，33，2301223。课堂照片。*

Zeng 与 Huang（2023）把植入界面的困难收成电化学和生物学两侧：电极一小，阻抗上去、能注入的电荷下来，电场还会在相邻通道之间串扰；电极比组织硬，炎症又把传输通路弄坏。常相位元件

\[
Z_\mathrm{CPE}=\frac{1}{Y_0\,(j\omega)^{n}},\quad 0<n\le 1
\]

里的 \(n\) 偏离 1，表示表面不像一只纯电容。\(n=1\) 才是理想电容。

### 电刺激的安全边界：Shannon 判据

电荷平衡的双向脉冲，是先让一相把电荷送出去，再让相反的一相把同样多的电荷收回来，净直流接近零，从而减轻电解和不可逆的组织损伤。每相电荷 \(Q=I\cdot t\)。电荷注入容量是在安全电位窗内、单位面积能注入的电荷。电荷存储容量来自循环伏安在水窗里的积分。

![Shannon 判据](0929-figures/IMG_7805.jpg)

*左：阴极相与阳极相，以及电荷平衡的开关电路。中：单极、多极和电流导向；多极刺激可以把高电场放在电极之间，形成所谓虚拟通道。右：Shannon 关系。图引自 Zeng 与 Huang，2023。课堂照片。*

Shannon（1992）把 McCreery 等人的损伤数据收成一条经验线：

\[
\log_{10} D = k - \log_{10} Q
\]

\(Q\) 是每相电荷，\(D=Q/A\) 是每相电荷密度。\(k\) 越大，这条线越往损伤一侧移动。Shannon 用 \(k=1.5\) 作为原数据里没有观察到损伤的保守线；\(k=2\) 已经落进出现损伤的区域。后来的综述常把分界参数放在大约 1.5 到 1.85 之间，1.85 更接近较大表面电极上损伤与未损伤的分界，不是一个可以随便取的安全系数。

课堂上说“系数在 1.5–1.85 之间才安全”，容易听成：\(k\) 只要落在这个区间，刺激就安全。更准确的读法是：先选定一条 \(k\) 线，刺激的 \((Q, D)\) 必须落在这条线的安全一侧。而且这条线来自较大的表面电极。微电极的电流密度分布不同，不能把同一个 \(k\) 直接拿来当许可证。幻灯片底部已经写了后半句：Shannon 对微电极偏保守，是否适用要靠动物实验。Cogan（2008）也把电荷密度、电荷量和电位窗分开讨论，而不是只留一个 \(k\)。

多极刺激和虚拟通道是同一张图的另一半：几根电极同时出电流，电场极大值可以不在某一根电极正下方，而在电极之间。这是“电流导向”，用来缩小激活的组织体积，不是增加总电荷的理由。

### 神经记录的摩尔定律：Stevenson 定律

![Stevenson 定律](0929-figures/IMG_7806.jpg)

*左：Stevenson 与 Kording（2011）图 1，同时记录神经元数约每 7.4 年翻倍。右：Urai 等（2022）把电生理和钙成像分开画。课堂照片；两张图的版权属于原论文。*

Stevenson 与 Kording（2011）调查了几十年的电生理文献。论文摘要写的是同时记录的神经元数大约每 7 年翻一倍。课堂幻灯片给出的拟合是 \(7.4\pm 0.4\) 年（\(n=56\)，约 1950–2010），并标明这是经验规律，不是自然定律，速度还不到摩尔定律（约 2 年翻倍）的一半。增速由电极、集成度和数据链路一起决定。他们真正要问的是分析：神经元各自的调谐曲线不会因为你同时记录了更多细胞就自动变准；一旦要估计细胞之间的相互作用，模型会更准，也会更贵。

Urai 等（2022）把这张图续到了光学记录。电生理仍沿着那条慢斜率走，钙成像因为一次能看见很多细胞而跳了上去，但钙信号不是锋电位的毫秒复制。幻灯片上的里程碑可以对照着记：Utah 约 100 个位点，BrainGate 用 96 通道，Neuropixels 1.0 是 384 通道 / 960 位点，Neuralink N1 的公开描述在千通道量级。

## 3. 自研ECoG研究进展

### 微纳加工：让电极可批量、可设计

自研的是柔性颅内皮层电极，不是一颗留在脑子里的硅芯片。课堂上把 Intel《从沙子到芯片》当作光刻的类比：同一套“用光把图形转移到薄膜上”的步骤，这里用来做电极，不用来做晶体管。

论文里的做法是标准微纳加工，硅片只当临时托底。先在 4 英寸硅片上旋涂约 3 μm 聚酰亚胺（PI-2611）并固化，光刻后蒸镀 10 nm 钛和 200 nm 金，剥离掉多余金属；再盖一层约 3 μm 聚酰亚胺，刻开电极触点和焊盘，最后把整片薄膜从硅片上揭下来。植入时留下的基座是这两层聚酰亚胺夹着 Ti/Au 导线，总厚约 6 μm。硅片不进颅。电极位点以后再电镀 PEDOT:PSS，水凝胶是涂在这层薄膜上的，不是涂在芯片上。

所以这条工艺链管的是电极薄膜本身：聚酰亚胺基座、金属走线、开口的位置和密度。基片清洗、涂胶、前烘、曝光、显影、刻蚀、去胶，是在这张薄膜上画电极图形。紫外光刻特征尺寸大约 1–2 μm，适合大面积阵列；电子束光刻可以到 100 nm 以下，但慢、贵。通道能做密，是因为图形可以设计、可以在一张膜上重复做，不是因为课题组在流片。

![微纳加工](0929-figures/IMG_7807.jpg)

*光刻把电极图形转移到薄膜上。紫外光刻适合大面积阵列，电子束光刻更细、更慢。课堂照片。硅片在论文流程里是加工时的托底，揭膜之后不留在器件里。*

### 临床转化路径

临床转化在幻灯片上是五步：动物实验、大动物、首例人体、多中心、注册审批。三道门槛是数年稳定、没有慢性损伤、手术可复制。课堂上补充：大动物不一定是猴子，猪也可以。

![临床转化路径](0929-figures/IMG_7808.jpg)

*半侵入式脑机接口从实验室到注册审批。课堂照片。*

### 纤维囊，以及水凝胶这道桥

纤维囊是生物学和力学都不匹配的结果。它把电极和组织隔开，记录幅度掉、阻抗漂。Yuk 等（2019）说明水凝胶可以做这道桥，也指出当时的困难：为了粘住组织而做的化学改性，可能带来新的生物相容问题；很多硬膜下演示短于一周；涂层本身会不会把信号抹平，常常没人算。课堂上的三句批评，和陈等（2025）引言里的缺口是对齐的：儿茶酚、N-羟基琥珀酰亚胺这类化学粘附粘得很死，取出时有组织损伤和化学残留的担心；只靠氢键的可逆粘附，又缺少长期硬膜下数据；中间夹一层水凝胶，等于在电极和皮层之间加了一层容积导体，厚度和电导率选不好，空间分辨率会掉。

**文献补充。** Yuk、Lu 与 Zhao（2019）把水凝胶写成干、硬电子器件和湿、软组织之间的桥：它含水、模量接近组织，又可以把导电网络做进去。综述把器件分成涂层与封装、离子导电水凝胶、导电复合材料和本征导电水凝胶几类。课堂笔记里的 “Chemical Society Reviews 48.6 (2019): 1642-” 就是这篇，页码到 1667，DOI [10.1039/C8CS00595H](https://doi.org/10.1039/C8CS00595H)。它解释的是为什么要用水凝胶，不是 aGel 这一个配方。aGel 的配方在本章下一节。

### 提出具有水凝胶涂层的硬膜下皮层电极：aGel-微ECoG

Chen、Zhong、Wang 等（2025）报告了 aGel-µECoG。通讯作者是邱东和仵婷。水凝胶是亲水的聚乙烯醇（PVA）和疏水的 3-(三甲氧基硅基)甲基丙烯酸丙酯（PTPM）互穿网络，干态贴到组织上形成物理粘附，不靠缝线。电极侧是聚酰亚胺上的 Ti/Au，表面电镀 PEDOT:PSS，用来把界面阻抗降下来。

![aGel-µECoG 示意](0929-figures/literature/chen2025-fig1.jpg)

*图 a：没有涂层时，数月后界面出现纤维囊，记录变差。图 b：aGel-µECoG 的层状结构，以及三项设计目标——可逆粘附、电学保真、长期稳定。图 c：有涂层时界面没有明显纤维囊。Chen 等，Advanced Science，2025，12(47)，e15453，图 1。CC BY 4.0。https://doi.org/10.1002/advs.202515453*

课堂幻灯片 `IMG_7809` 就是这张图的右半边。

![课堂幻灯片上的 aGel 结构](0929-figures/IMG_7809.jpg)

*幻灯片引用 L. Chen et al., Advanced Science, 2025。层序为 aGel、PI、PEDOT:PSS、Ti/Au、PI。课堂照片。*

论文给出的设计点，可以把课堂上的“构建流程”对回去。

- **粘附。** 搭接剪切测试给出的组织粘附强度是 \(25.2\pm 3.8\) kPa，对聚酰亚胺也粘。目标是剪切方向贴得住、需要时又能无损取下。课堂把这一点记成“剪切强、剥离弱”。论文正文强调的是可逆、可取出、不必缝合，而不是只报一个剥离角度。
- **力学。** 要测杨氏模量和在生理盐水里的溶胀。溶胀太大，薄膜会皱、会从组织或电极上翘起来。疏水网络用来压住溶胀。
- **电学保真。** 有限元把涂层厚度 \(t\) 和电导率 \(\sigma\) 扫了一遍。论文选的工作点大约是 \(t\approx 10\ \mu\mathrm{m}\)、\(\sigma\approx 2\ \mathrm{S\,m^{-1}}\)。10 μm 的离子导电层仍然能保住亚毫米的空间分辨率，幅度也没有被这层膜吃掉。课堂上的“不同厚度、不同频段信噪比，横向扩散被限制住”，指的就是这个仿真，不是动物实验本身。
- **生物相容。** 8 周组织学用 NeuN、GFAP、Iba1 和纤维囊厚度，比较有涂层和无涂层。涂层一侧胶质活化更低，纤维囊几乎起不来。
- **16 周电学。** 64 通道阵列放在大鼠视皮层，涂层厚 10 μm。1 kHz 阻抗：无涂层从第 1 天约 20 kΩ 升到第 11 天约 540 kΩ，随后又降下来；aGel 从约 20 kΩ 到第 11 天约 27 kΩ，第 40 天约 41 kΩ。摘要里的“急性期阻抗增幅大约低 20 倍”，就是这两条曲线的对比，不是阻抗永远不变。等效电路把电极侧的常相位元件和组织侧的电阻、电容分开拟合，用来看漂移来自界面还是来自周围组织。

![16 周阻抗](0929-figures/literature/chen2025-fig5.jpg)

*图 b 是 1 kHz 阻抗。无涂层在第 11 天附近冲高，aGel 保持在几十 kΩ。图 c 是体外和体内的等效电路。Chen 等，2025，图 5。CC BY 4.0。*

- **信号。** 稳态视觉诱发电位用 8 Hz 闪光，看 8 Hz 及其谐波的信噪比。线性混合模型预测：aGel 在第 16 周仍有初始信噪比的 94.8%。无涂层不是单调掉到某一个数。模型在第 7 周给到 69.5%，之后有回升，第 16 周的预测值是 78.4%。摘要和课堂都把对照组说成“降到 69.5%”，那是第 7 周的低点，不是第 16 周的终点。论文还写了一件和直觉不一致的事：阻抗在第 11 天之后已经开始下降，信噪比却继续坏到第 7 周。所以阻抗稳定不等于信号稳定，局部组织电阻率的变化可以主导信噪比。

![16 周 SSVEP](0929-figures/literature/chen2025-fig6.jpg)

*8 Hz 稳态视觉诱发电位的长期信噪比、16 周后的二次谐波成像，以及纤维囊的组织学。Chen 等，2025，图 6。CC BY 4.0。*

![力学、粘附与厚度仿真](0929-figures/literature/chen2025-fig2.jpg)

*图 a–c：模量、溶胀和细胞毒性。图 d–g：水凝胶如何贴住聚酰亚胺和组织，以及离体皮层上的贴附。图 h–i：厚度和电导率的有限元，白星是大约 10 μm、2 S/m 的设计点。Chen 等，2025，图 2。CC BY 4.0。*

课堂上说的“看 EIS、看等效电路、16 周保持 94.8%”，对应的就是图 5 和图 6，不是幻灯片上那张结构卡通单独能证明的。

## 4. 从纪录到调控

### 读、写、测

课堂上把神经界面的功能收成三个字。

| | 做什么 | 例子 |
| --- | --- | --- |
| 读 | 记录神经活动 | spike、LFP、ECoG、EEG |
| 写 | 把能量送回去 | 电、光、声、磁 |
| 测 | 电化学传感 | 神经递质、离子、pH、温度 |

### 聚焦超声脑机接口

经颅聚焦超声是一条无创的“写”。Legon 等（2014）在人身上显示，头外聚焦超声可以改变初级体感皮层的活动和触觉辨别。那是神经调控实验，不是一套完整的闭环脑机接口。

### 电刺激的原理与参数

电荷平衡的双向脉冲放在第 2 章：阴极相把电荷送出，阳极相把同样的电荷收回，净直流接近零。参数和 Shannon 界限不在这一章重复。

### 神经调控：DBS

脑深部电刺激是电这一格里最成熟的临床形态。

![脑深部电刺激](0929-figures/IMG_7810.jpg)

*幻灯片列出的靶点是丘脑底核、苍白球内侧部和丘脑腹中间核，适应证包括帕金森病、特发震颤和肌张力障碍，参数大约是 130 Hz。电极连到胸壁的脉冲发生器。课堂照片。*

Lozano 等（2019）把 DBS 写成已经进入常规治疗的技术：高频刺激丘脑底核或苍白球内侧部用于帕金森病，腹中间核用于震颤。约 130 Hz 这一档来自临床编程经验，机制不是“把一块组织电接通”，更接近对异常节律的抑制或扰乱。闭环 DBS 用实时场电位调节刺激，而不是从头到尾用同一组参数。Little 等（2013）在晚期帕金森病人身上比较了自适应刺激和持续刺激，自适应刺激可以在更低的刺激时间占比下改善症状。幻灯片上的“全球数十万例”是课堂给出的普及程度，这次没有逐一核对登记数。

## 5. 下一个十年

### 5.1 高通量×低功耗

散热与无线传输是瓶颈。热和无线传输会先碰到天花板。通道数沿第 2 章 Stevenson 那条曲线上涨时，数据不能全靠一根穿皮线送出来。

### 5.2 十年量级稳定性

材料、封装、免疫学要一起突破。aGel 的 16 周是大鼠硬膜下的一个数据点，不是十年。

### 5.3 多模态一体化

电、化学、光在同一界面集成，同时读、写、测。材料表里 MXene 的“光热”、测这一格里的递质和 pH，都是这一条的零件，还不是一台器件。

### 5.4 伦理与治理

隐私、知情同意。侵入越深，受试者退出和取出设备的路径越要先写清楚。aGel 把“可逆取出”当成设计指标，就是这一条在材料上的对应物。

### 推荐阅读

![推荐阅读](0929-figures/IMG_7811.jpg)

*本讲教材是 Wolpaw 与 Wolpaw（2012）。Rao（2013）偏算法，He 主编的 Neural Engineering 第 2 版（2013）偏界面和电化学，Graimann 等（2010）是综述入门。课堂照片。*

| 书 | 作者、年份 | 幻灯片上的定位 |
| --- | --- | --- |
| Brain–Computer Interfaces: Principles and Practice | Wolpaw 与 Wolpaw，2012 | 本讲主教材 |
| Brain–Computer Interfacing | Rao，2013 | 算法与信号处理 |
| Neural Engineering，第 2 版 | He 主编，2013 | 神经界面与电化学 |
| Brain–Computer Interfaces | Graimann、Allison 与 Pfurtscheller 主编，2010 | 综述入门 |

## 参考文献

课堂照片是听课记录，其中 Lee 等（2019）、Lin 等（2025）、Zeng 与 Huang（2023）、Stevenson 与 Kording（2011）、Urai 等（2022）、Chen 等（2025）的图均以幻灯片形式出现。Chen 等（2025）为 CC BY 4.0，图 1、图 2、图 5、图 6 的开放获取版本另存在 `0929-figures/literature/`。其余论文图只在课堂照片里出现，笔记不另存文件。

- Buzsáki, G., Anastassiou, C. A., & Koch, C. (2012). The origin of extracellular fields and currents — EEG, ECoG, LFP and spikes. *Nature Reviews Neuroscience, 13*(6), 407–420. https://doi.org/10.1038/nrn3241
- Chen, L., Zhong, H., Wang, L., Xu, L., Fan, W., Zhao, Y., Zhang, H., Shen, Y., Wu, K., Fu, X., Guo, J., Li, K., Qiu, D., & Wu, T. (2025). Long-term stable subdural recordings enabled by fibrosis-resistant hydrogel-integrated µECoG arrays. *Advanced Science, 12*(47), e15453. https://doi.org/10.1002/advs.202515453
- Cogan, S. F. (2008). Neural stimulation and recording electrodes. *Annual Review of Biomedical Engineering, 10*, 275–309. https://doi.org/10.1146/annurev.bioeng.10.061807.160518
- Graimann, B., Allison, B., & Pfurtscheller, G. (Eds.). (2010). *Brain–computer interfaces: Revolutionizing human–computer interaction*. Springer.
- He, B. (Ed.). (2013). *Neural engineering* (2nd ed.). Springer.
- Hochberg, L. R., Serruya, M. D., Friehs, G. M., Mukand, J. A., Saleh, M., Caplan, A. H., Branner, A., Chen, D., Penn, R. D., & Donoghue, J. P. (2006). Neuronal ensemble control of prosthetic devices by a human with tetraplegia. *Nature, 442*, 164–171. https://doi.org/10.1038/nature04970
- Jöbsis, F. F. (1977). Noninvasive, infrared monitoring of cerebral and myocardial oxygen sufficiency and circulatory parameters. *Science, 198*(4323), 1264–1267. https://doi.org/10.1126/science.929199
- Jun, J. J., Steinmetz, N. A., Siegle, J. H., Denman, D. J., Bauza, M., Barbarits, B., Lee, A. K., Anastassiou, C. A., Andrei, A., Aydın, Ç., Barbic, M., Blanche, T. J., Bonin, V., Couto, J., Dutta, B., Gratiy, S. L., Gutnisky, D. A., Häusser, M., Karsh, B., … Harris, T. D. (2017). Fully integrated silicon probes for high-density recording of neural activity. *Nature, 551*, 232–236. https://doi.org/10.1038/nature24636
- Lee, M., Shim, H. J., Choi, C., & Kim, D.-H. (2019). Soft high-resolution neural interfacing probes: Materials and design approaches. *Nano Letters, 19*(5), 2741–2749. https://doi.org/10.1021/acs.nanolett.8b04895
- Legon, W., Sato, T. F., Opitz, A., Mueller, J., Barbour, A., Williams, A., & Tyler, W. J. (2014). Transcranial focused ultrasound modulates the activity of primary somatosensory cortex in humans. *Nature Neuroscience, 17*, 322–329. https://doi.org/10.1038/nn.3620
- Lin, X., Zhang, X., Chen, J., & Liu, J. (2025). Material selection and device design of scalable flexible brain-computer interfaces: A balance between electrical and mechanical performance. *Advanced Materials, 37*(26), e2413938. https://doi.org/10.1002/adma.202413938
- Little, S., Pogosyan, A., Neal, S., Zavala, B., Zrinzo, L., Hariz, M., Foltynie, T., Limousin, P., Ashkan, K., FitzGerald, J., Green, A. L., Aziz, T. Z., & Brown, P. (2013). Adaptive deep brain stimulation in advanced Parkinson disease. *Annals of Neurology, 74*(3), 449–457. https://doi.org/10.1002/ana.23951
- Lozano, A. M., Lipsman, N., Bergman, H., Brown, P., Chabardes, S., Chang, J. W., Matthews, K., McIntyre, C. C., Schlaepfer, T. E., Schulder, M., Temel, Y., Volkmann, J., & Krauss, J. K. (2019). Deep brain stimulation: Current challenges and future directions. *Nature Reviews Neurology, 15*, 148–160. https://doi.org/10.1038/s41582-018-0128-2
- Maynard, E. M., Nordhausen, C. T., & Normann, R. A. (1997). The Utah Intracortical Electrode Array: A recording structure for potential brain-computer interfaces. *Electroencephalography and Clinical Neurophysiology, 102*(3), 228–239. https://doi.org/10.1016/S0013-4694(96)95176-0
- Mitchell, P., Lee, S. C. M., Yoo, P. E., Morokoff, A., Sharma, R. P., Williams, D. L., MacIsaac, C., Howard, M. E., Irving, L., Vrljic, I., Williams, C., Bush, S., Balabanski, A. H., Drummond, K. J., Desmond, P., Weber, D., Denison, T., Mathers, S., O’Brien, T. J., … Campbell, B. C. V. (2023). Assessment of safety of a fully implanted endovascular brain-computer interface for severe paralysis in 4 patients: The Stentrode with thought-controlled digital switch (SWITCH) study. *JAMA Neurology, 80*(3), 270–278. https://doi.org/10.1001/jamaneurol.2022.4847
- Musk, E., & Neuralink. (2019). An integrated brain-machine interface platform with thousands of channels. *Journal of Medical Internet Research, 21*(10), e16194. https://doi.org/10.2196/16194
- Ogawa, S., Lee, T. M., Kay, A. R., & Tank, D. W. (1990). Brain magnetic resonance imaging with contrast dependent on blood oxygenation. *Proceedings of the National Academy of Sciences, 87*(24), 9868–9872. https://doi.org/10.1073/pnas.87.24.9868
- Oxley, T. J., Opie, N. L., John, S. E., Rind, G. S., Ronayne, S. M., Wheeler, T. L., Judy, J. W., McDonald, A. J., Dornom, A., Lovell, T. J. H., Steward, C., Garrett, D. J., Moffat, B. A., Lui, E. H., Yassi, N., Campbell, B. C. V., Wong, Y. T., Fox, K. E., Nurse, E. S., … O’Brien, T. J. (2016). Minimally invasive endovascular stent-electrode array for high-fidelity, chronic recordings of cortical neural activity. *Nature Biotechnology, 34*, 320–327. https://doi.org/10.1038/nbt.3428
- Pfurtscheller, G., & Lopes da Silva, F. H. (1999). Event-related EEG/MEG synchronization and desynchronization: Basic principles. *Clinical Neurophysiology, 110*(11), 1842–1857. https://doi.org/10.1016/S1388-2457(99)00141-8
- Polikov, V. S., Tresco, P. A., & Reichert, W. M. (2005). Response of brain tissue to chronically implanted neural electrodes. *Journal of Neuroscience Methods, 148*(1), 1–18. https://doi.org/10.1016/j.jneumeth.2005.08.015
- Rao, R. P. N. (2013). *Brain–computer interfacing: An introduction*. Cambridge University Press.
- Shannon, R. V. (1992). A model of safe levels for electrical stimulation. *IEEE Transactions on Biomedical Engineering, 39*(4), 424–426. https://doi.org/10.1109/10.126616
- Stevenson, I. H., & Kording, K. P. (2011). How advances in neural recording affect data analysis. *Nature Neuroscience, 14*(2), 139–142. https://doi.org/10.1038/nn.2731
- Urai, A. E., Doiron, B., Leifer, A. M., & Churchland, A. K. (2022). Large-scale neural recordings call for new insights to link brain and behavior. *Nature Neuroscience, 25*, 11–19. https://doi.org/10.1038/s41593-021-00980-9
- Wolpaw, J. R., & Wolpaw, E. W. (Eds.). (2012). *Brain–computer interfaces: Principles and practice*. Oxford University Press.
- Yuk, H., Lu, B., & Zhao, X. (2019). Hydrogel bioelectronics. *Chemical Society Reviews, 48*, 1642–1667. https://doi.org/10.1039/C8CS00595H
- Zeng, Q., & Huang, Z. (2023). Challenges and opportunities of implantable neural interfaces: From material, electrochemical and biological perspectives. *Advanced Functional Materials, 33*(32), 2301223. https://doi.org/10.1002/adfm.202301223
