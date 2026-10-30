---
title: "脑机接口视角下的大脑结构"
description: "从电极到达的层次、沟回和分区说明脑机接口为什么读得到、写得进，也漏得掉某些脑结构。"
pubDate: 2026-10-09
tags: ["脑机接口", "BCI", "大脑结构"]
order: 8
draft: false
---

# 脑机接口视角下的大脑结构

脑机接口要决定的是电极停在哪一层、那一层的细胞朝哪一个方向产生电流，以及这块皮层折在沟的哪一面。叶、脑室和“语言中枢”这些词只在它们改变电极位置或信号种类时才进入本文。

第 2 讲写运动环路和群体编码，第 3 讲写电极材料与信号链。这篇只处理结构。运动皮层里的流形、零空间，以及水凝胶涂层，这里不重复。

图尽量用文献原图。OpenStax《Anatomy and Physiology 2e》、McCann 等（2019）、Willett 等（2023）和 Schone 等（2025）预印本都以 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 发布，英文标注保留原样。六层、开放电场和手结这三张仍是按文献重画的示意图：Mohan、Buzsáki、Yousry 的原图受版权限制，不能嵌进页面。Rathelot 与 Strick、Gordon 等同样只在文末给链接。

## 1. 电极先遇到的是一套膜，不是一个脑区

![头皮、颅骨、硬膜、脑脊液、灰质和白质的分层](/blog-assets/bci-brain-structure/mccann2019-fig1.png)

**图 1.** McCann、Pisano 与 Beltrachini（2019）图 1。上：轴位上的组织隔室，头皮分成皮、脂肪和肌肉，颅骨分成密质骨、板障和骨缝，其内是硬膜、脑脊液、灰质和白质。下：同一套层次的局部放大，硬膜再分成骨膜层和脑膜层。许可：CC BY 4.0。[10.1007/s10548-019-00710-2](https://doi.org/10.1007/s10548-019-00710-2)。这张图没有画电极；电极停在哪一层，见下文四类记录。

从头皮往里，记录电极要经过头皮、颅骨、硬膜、一层很窄的硬膜下间隙、充满脑脊液的蛛网膜下腔、贴着脑回的软膜，然后才是灰质。灰质下面是白质。白质是轴突，不是用来分离锋电位的地方。

Fischl 与 Dale（2000）用磁共振测量人的新皮层厚度：大约 1–4.5 mm，平均约 2.5 mm。脑回顶部约 2.7 mm，沟底约 2.2 mm。初级体感皮层里，中央沟后壁的 3 区是最薄的区域之一。运动皮层偏厚，手结所在的脑回可以超过 3 mm。所以“皮层”在手术里不是一张均匀的 2 mm 膜。

四类电极就停在这叠组织的不同深度上。

- **EEG** 在头皮外。它看见的是许多锥体细胞同步突触电流，经过脑脊液和颅骨之后的电位。
- **硬膜外 ECoG** 贴在硬膜外面，还隔着硬膜。**硬膜下 ECoG** 打开硬膜，电极朝向软膜。临床网格的中心距常常大约 10 mm；研究用的高密度网格可以到数毫米。
- **Utah 阵列** 是 10×10 的硅针，中心距 400 μm，针长 1.0 mm 或 1.5 mm，只有针尖导电（Campbell 等，1991）。针从软膜扎进灰质。1.5 mm 相对平均 2.5 mm、局部常常更厚的皮层，针尖停在灰质中上层，不进入白质。
- **深部电极** 可以贴着沟壁往下，或进入海马、丘脑和基底节。

Maynard、Nordhausen 与 Normann（1997）用这种阵列做了脑机接口取向的记录：小群神经元的平均信噪比约 6:1。他们的结论是，稳定、对刺激有选择性的信号来自小的神经元群体，而不是每一个针尖都必须分出干净的单细胞。通道变多之后，可以同时看到空间上和时间上的发放模式。

![硬膜、蛛网膜、软膜和上矢状窦](/blog-assets/bci-brain-structure/openstax-13-17-meninges.jpg)

**图 2.** 上矢状窦处的脑膜。硬膜贴着颅骨并在中线围成上矢状窦；蛛网膜和软膜之间是蛛网膜下腔；软膜跟着皮层进入纵裂。OpenStax《Anatomy and Physiology 2e》图 13.17，CC BY 4.0。[原书页面](https://openstax.org/books/anatomy-and-physiology-2e/pages/13-3-circulation-and-the-central-nervous-system)

图 1 是容积导体用的组织隔室，图 2 把上矢状窦处的膜画回解剖位置。从上到下可以读到骨、硬膜、硬膜下间隙、蛛网膜、蛛网膜下腔、软膜和皮层。中线的蓝色空腔是上矢状窦，它坐在纵裂的顶部，两侧皮层在它下面相对。血管内脑机接口的支架电极就放在这个窦里，不穿过软膜。这一点放到第 7 节，和手结的位置对照。

软膜跟着每一个沟走。表面电极若只铺在脑回冠上，沟壁上的灰质仍然隔着脑脊液。垂直扎进回顶的 Utah 针，穿过的是回顶从表到里的层，不是沟对面那一层。

## 2. 这几毫米灰质分成六层

![新皮层 I 到 VI 层、锥体细胞，以及颞叶上 1.5 mm 针尖的大致深度](/blog-assets/bci-brain-structure/02-six-layers.svg)

**图 3.** 示意图，按 Mohan 等（2015）的层厚和投射关系重画。新皮层六层的输入和输出，以及一根锥体细胞从顶端树突到轴突的方向。左侧绿线是颞叶层厚下 1.5 mm 的层位示意，不是比例尺。层厚数字由 Dickey 等（2020）引用。Mohan 的原图受版权限制，不嵌进页面。

从软膜到白质，新皮层常规分成六层。和脑机接口直接有关的是每一层把信号送到哪里。

| 层 | 结构上要记住的事 | 对记录或刺激的含义 |
| --- | --- | --- |
| I | 细胞少，充满顶端树突 | 远处场电位的电流很多发生在这里的树突上 |
| II–III | 皮层之间、两侧半球之间的锥体细胞 | 长的垂直树突构成开放电场 |
| IV | 丘脑感觉纤维的主要终点 | 体感皮层厚；运动皮层几乎没有这一层 |
| V | 大型锥体细胞，皮质脊髓束的起点 | 运动指令离开皮层的一层；含 Betz 细胞 |
| VI | 投回丘脑 | 再深就是白质 |

初级运动皮层是无颗粒皮层，第 IV 层很薄。初级体感皮层是颗粒皮层，第 IV 层厚，因为来自丘脑的皮肤和本体感觉纤维停在这里。同样叫“皮层”，运动接口和感觉写入接口扎进去的细胞建筑不一样。

Betz 细胞是运动皮层第 V 层里胞体特别大的锥体细胞，轴突进入皮质脊髓束。它们是这层输出细胞里最显眼的一类，不是第 V 层仅有的细胞。

1.5 mm 的针尖落在哪一层，取决于那一块皮层有多厚。Mohan 等（2015）重建了成人颞叶各层锥体细胞的树突和轴突。Dickey 等在 2020 年的预印本里用这项测量估计自己的植入深度：颞叶第 II 层平均约从 252 μm 开始，第 III 层平均约到 1201 μm。因此插在颞上回或颞中回、针长 1.0–1.5 mm 的 Utah 阵列，针尖预期在 II/III 层，至多到第 IV 层上部。

这段估计不能搬到手结。运动皮层更厚，又缺少清楚的第 IV 层。人运动皮层上 1.5 mm 针尖是停在第 III 层还是已经进入第 V 层，要用那一位被试、那一个脑回的厚度来算。现在还没有一篇和 Mohan 同等级的测量，把 BrainGate 手结阵列的每个针尖标到层。

400 μm 的针距和经典的皮层柱宽度是同一个数量级。Mountcastle（1997）把柱看成皮层的基本模块。Horton 与 Adams（2005）的题目直接写成“一种没有功能的结构”：柱在初级视觉皮层的某些动物里很清楚，不能因此认为每一块人的联合皮层都按 400 μm 切成独立的计算器。对阵列的谨慎读法是，400 μm 减少了相邻针尖碰到同一个大细胞的机会，并不保证相邻通道在功能上互不相关。这和 Maynard 等（1997）的记录结论接得上：一个针尖上可靠的是一小群细胞。

Azevedo 等（2009）用各向同性组分器计数了 4 个成人男性的脑：平均 86.1 ± 8.1 亿个 NeuN 阳性细胞，其中大脑皮层约 163 亿，只占全部神经元的 19%；小脑约 690 亿，约占 80%，质量却只有全脑的约 10%。一块 96 通道的阵列能稳定跟上的细胞是几十到几百个。靶点必须先选对种群，因为抽样比例极小。小脑神经元虽多，当前的交流和运动接口并不把电极放进小脑皮层。小脑环路本身是第 2 讲的内容。

## 3. 远处能看见的，是排成一列的锥体细胞

![开放电场与远处互相抵消](/blog-assets/bci-brain-structure/07-open-closed-field.svg)

**图 4.** 示意图，按 Buzsáki、Anastassiou 与 Koch（2012）的开放电场与闭合电场重画。左：新皮层锥体细胞平行排列，突触电流在远处相加。右：放射状排列用来表示远离结构之后的抵消；海马本身是卷曲的古皮层，局部仍有整齐的锥体细胞。原图受版权限制，不嵌进页面。

Buzsáki、Anastassiou 与 Koch（2012）把锋电位、局部场电位、ECoG 和 EEG 看成同一类细胞外电流在不同距离上的样子。贡献最大的通常不是锋电位本身。锋电位时程短，空间衰减快，要用高阻抗、靠得很近的微电极，并在数百赫兹以上去看。远处电位主要来自突触在树突上造成的跨膜电流。锥体细胞的顶端树突朝向软膜，许多细胞同步时，电流才会在头皮上叠加。树突呈星形的抑制性中间神经元在远处互相抵消，头皮记录几乎看不见它们。

所以 EEG 读不到“全部神经元”。它读到的是排齐了的锥体细胞上，那些足够同步的突触电流。第 3 讲把 spike、LFP、ECoG、EEG 收成四套滤波器，依据就是这篇综述。

局部场电位能传多远，文献并不给一个单一半径。Katzner 等（2009）在猫的初级视觉皮层里估计，刺激诱发的场电位有 95% 以上来自电极周围约 250 μm。Lindén 等（2011）的模型说明这个半径不是常数：输入越相关、频率越低，场电位传得越远；不相关的突触电流衰减很快。高频、尤其是和多单元发放一起变化的高 gamma，空间上更接近局部群体。Crone 等（1998）在人的 ECoG 上看到，运动任务时 gamma 的事件相关同步比 α、β 的去同步更局限在感觉运动皮层。Bouchard 等（2013）后来用 85–175 Hz 的高 gamma 画出发音器地图，用的就是这种局部性。

海马是反例，说明“局部很强”和“头皮能看见”是两件事。海马有很大的局部场电位，包括 theta 和尖波。它是卷起来的古皮层，局部锥体细胞仍然排齐，所以深部电极看得到。离开这片结构之后，弯曲皮层两侧的电流在头皮上抵消。头皮 EEG 不是阅读海马的工具。

Hampson 等（2018）的记忆实验因此用深部电极。他们在已经因癫痫监测而植入海马的人身上，用 CA3 与 CA1 的发放建立非线性多输入多输出模型，再在记忆编码期按模型刺激 CA1。文中报告短时记忆任务提高约 37%，延迟再认提高约 35%。这是利用既有深部电极做的概念验证，不是一枚长期记忆植入物的安全性和疗效试验。结构上的结论只是：海马的信号在深部，刺激也得送到 CA1 那一层细胞，而不是送到头皮。

## 4. 颅骨和脑脊液改写同一块皮层

![各组织电导率的文献分布，以及脑与颅骨电导率比](/blog-assets/bci-brain-structure/mccann2019-fig2.png)

**图 5.** McCann 等（2019）图 2。各组织电导率（S/m）的文献分布，插图把颅骨各层放大；右侧单独画脑 / 颅骨电导率比。叉号是各篇报道，箱子是四分位。许可：CC BY 4.0。[10.1007/s10548-019-00710-2](https://doi.org/10.1007/s10548-019-00710-2)。2020 年的更正把纳入文献改为 41 篇，并把脑脊液、灰质、白质的加权平均改为 1.736、0.379 和 0.146 S/m；下表仍是 2019 年原文摘要里的加权平均，与这张未更正的图一致。

McCann 等（2019）把人体头部组织电导率文献做了加权平均，原文写 56 篇，2020 年更正改为 41 篇。和脑机接口有关的几个数是：

| 组织 | 加权平均 | 标准差 |
| --- | ---: | ---: |
| 脑脊液 | 1.71 S/m | 0.30 |
| 灰质 | 0.47 S/m | 0.24 |
| 头皮 | 0.41 S/m | 0.18 |
| 白质（各向同性报道） | 0.22 S/m | 0.17 |
| 整层颅骨 | 0.02 S/m | 0.02 |
| 脑 / 颅骨电导率比 | 50 | 39 |

标准差和均值一样大，说明这些数不能当成某一个病人头骨的设计常数。历史文献本身就差一个数量级。Rush 与 Driscoll（1968）的物理模型用过大约 80 倍的脑—颅骨比。Oostendorp、Delbeke 与 Stegeman（2000）在离体和在体测量里得到颅骨电导率约 0.015 S/m，认为比值接近 15 倍。McCann 等的加权比约 50，标准差 39，15 和 80 都还在这团散点里面。

不依赖精确倍数的结构事实有三条。颅骨比灰质和脑脊液难导电得多，电流穿过它时被摊开。脑脊液是这叠组织里最好的导体，会把一部分电流分流掉。白质沿纤维方向和垂直于纤维的方向电导率不同，各篇报道也很散，头模型若把白质画成均匀介质，深部电源的位置会偏。

因此 EEG 的空间尺度停在厘米。国际 10–20 系统（Jasper，1958）是按鼻根、枕外隆凸和耳前点之间的百分比把电极放在头皮上。名为 C3 的电极，并不保证落在这个人的手结正上方。个体的中央沟要在磁共振上认，认的标志是下一节的手结。

ECoG 已经躲开了颅骨，所以高 gamma 还在。它仍然贴在软膜或硬膜上，看见的是脑回表面附近的群体突触电流，不是沟底某一个锥体细胞的锋电位。Utah 针尖把距离缩到一百微米量级，换来的是只能抽样针尖旁边的大细胞。四种尺度是电极停靠深度的结果，不是四种独立的生理波。

## 5. 沟把表面电极留在脑回顶上

![手结的倒 Ω，以及中央沟前壁与回顶电极的关系](/blog-assets/bci-brain-structure/05-central-sulcus.svg)

**图 6.** 示意图，按 Yousry 等（1997）最常见的倒 Ω 重画。左：轴位上的手结。右：中央沟两侧的脑回。表面电极和垂直插入的针都画在回顶；蓝点在沟前壁。Yousry 的磁共振原图受版权限制，不嵌进页面。

Yousry 等（1997）用功能磁共振看手的运动激活落在中央前回的哪一段。最常包含手运动功能的是一个结：轴位上 90% 像倒过来的 Ω，10% 像横置的 ε；矢状位上 92% 像一个向后的钩。这个结对着中央沟的中膝，位于中央沟与中央前沟交叉的附近，皮层表面也能看见。一名梗死局限在这个结里的病人出现对侧手的选择性瘫痪，手臂、面部、腿和感觉相对保留。样本是功能成像加上这一例病灶，不是大样本的预后研究。它成为运动脑机接口的原因很具体：开颅或看轴位磁共振时，手结是少数可以指给人看的个体标志。群平均的 Brodmann 4 区盖不住这种沟的形状。

沟还把初级运动皮层分成冠面和沟壁。Rathelot 与 Strick（2009）用狂犬病毒从猕猴的单块肌肉逆向跨突触追踪。直接、单突触联系脊髓运动神经元的皮质—运动神经元细胞，集中在中央沟前壁，肩、肘和手指都是这样。回顶上的初级运动皮层同样有皮质脊髓神经元，但那些细胞主要连到脊髓中间神经元，对运动神经元是间接的。他们把沟里这一截称为较晚出现的“新”初级运动皮层，回顶称为和其他哺乳动物更接近的“旧”初级运动皮层。

这是猕猴的解剖，不是人的狂犬病毒实验。人的 4 区确实有很大一部分贴在中央沟前壁上，手术计划里值得用这个几何，不值得把猴的细胞类型图直接印到人的磁共振上。

几何本身已经约束电极。垂直扎进回顶的 Utah 针，穿过的是回顶从表到里的层。沟前壁上的细胞位于另一片与沟平行的灰质，中间隔着脑脊液。铺在回顶的 ECoG 对沟壁是隔沟记录，靠的是容积传导，空间上更模糊。要直接碰到沟壁，电极得沿沟进入，或者在打开沟之后贴到沟壁上。血管也在沟里，这是表面网格常常留在冠上的原因之一。

## 6. 运动地图在手结附近被分成几段

![体感皮层上的感觉小人](/blog-assets/bci-brain-structure/openstax-14-23-homunculus.jpg)

**图 7.** 中央后回上的感觉小人。足、趾和生殖器画在切面的上方，对应半球内侧面；手、唇和舌依次更靠外侧，代表区大。OpenStax《Anatomy and Physiology 2e》图 14.23，CC BY 4.0。[原书页面](https://openstax.org/books/anatomy-and-physiology-2e/pages/14-2-central-processing)

Penfield 与 Boldrey（1937）在清醒人的中央沟两侧做电刺激，得到身体各部在中央前、后回上的代表区。手和口的区域大，躯干的区域小，相邻身体部位大体相邻。图 7 是后来的教学画，画的是体感皮层，不是 1937 年的刺激原图。运动小人的比例关系与此同类，画在中央前回上。第 2 讲已经用过同一张 OpenStax 图，这里再放一次，是因为后面的修订都针对这张图所代表的连续条带。

这张连续条带后来被两套不同尺度的证据改写。

Graziano、Taylor 与 Moore（2002）在猕猴中央前回做较长时间的微刺激，诱发出伸手、抓握和防御这类协调动作，而不是每一处都只抽动一块肌肉。代表区更像一组动作区域的镶嵌，仍然保留大致的身体分区。

Gordon 等（2023）用高精度功能磁共振看人的运动皮层。经典小人被打断：足、手、口这三块效应器区之间，夹着彼此连接很强的效应器间区。这些间区皮层更薄，和扣带—岛盖网络相连，在协调手脚的动作计划和躯干、眉这样的轴向运动时一起激活。效应器区负责把精细控制隔开，效应器间区被他们称为躯体—认知动作网络，负责把目标、生理状态和全身动作合在一起。这个图案在个体的重复扫描里，也在 UK Biobank、ABCD 和 Human Connectome Project 的群体图里都能看到。

这是血氧信号的分区，不是单细胞发放的分区。一块 4 mm 见方的 Utah 阵列可能整个落在手效应器区里，也可能踩在效应器区和间区的边界上。边界因人而异，要用这个人自己的影像，而不能用一张群平均小人代替。

同一块手结的锋电位记录给出了另一个修订。Willett 等（2020）报告，中央前回手结区以组合的方式表征全身，而不只是手指。Willett 等（2021）仍把手写脑机接口的阵列放在这个手结区：瘫痪被试尝试手写，解码速率约每分钟 90 个字符。手结作为手术标志仍然有效；把它理解成一块只负责五个手指的键盘，和 2020 年的群体记录不符。

Georgopoulos、Schwartz 与 Kettner（1986）显示，运动皮层单个细胞的方向调谐很宽，群体向量才指向实际运动方向。第 2 讲已经把群体向量、准备期的输出零空间和运动期的旋转写完。那些计算发生在这一节所定的手结及其邻近皮层里。结构选错，后面的解码器没有可解的群体。

Hochberg 等（2006）把 96 通道阵列植入一位脊髓损伤后四肢瘫痪者的初级运动皮层手区。被试用意图驱动光标和简单的开关、机械臂控制。脊髓下行通路已经断了，皮层里的上运动神经元还在。这是“靶点在皮层、不在已经断开的脊髓”的人体证据。病灶若直接毁了手结，这个坐标就空了，要改到前运动皮层、后顶叶或对侧还保留的区域，不能默认原坐标仍有信号。

## 7. 三条路靠近的不是同一块运动皮层

![支架电极放在上矢状窦，以及十名被试的矢状位影像](/blog-assets/bci-brain-structure/schone2025-fig1.jpg)

**图 8.** Schone 等（2025）预印本图 1。A 左：支架电极位于大脑表面的静脉内，冠状小图表示它在中线窦里、贴近两侧皮层。A 右是使用场景，不是解剖。D：十名被试植入后的矢状位影像，箭头指向支架。许可：CC BY 4.0。

血管内路线从颈内静脉逆行进入上矢状窦，把带电极的支架张开在窦壁上。Oxley 等（2016）在绵羊的皮层表面静脉里记录到最长 190 天，频谱和硬膜外阵列相当，管腔保持通畅。Mitchell 等（2023）报告 SWITCH 早期可行性研究：4 名进入分析的重症上肢瘫痪被试完成 12 个月随访，没有装置移位或血管闭塞；信号带宽平均 233 ± 16 Hz，并且在研究期间保持稳定；离线至少能区分 5 类尝试动作，每位被试用这个接口控制了电脑。233 Hz 的带宽和“电极在血管里、不在灰质里”一致，它更接近场电位，而不是 Utah 针尖上的锋电位。

![十名被试的支架与 SMA、M1、S1 的位置](/blog-assets/bci-brain-structure/schone2025-fig3.jpg)

**图 9.** Schone 等（2025）预印本图 3。蓝是辅助运动区，绿是初级运动皮层，紫是初级体感皮层，黑网是支架。每名被试配矢状面和上面观。P8 带剑号。许可：CC BY 4.0。

图 9 里的支架都贴着中线，盖在背内侧的辅助运动区、初级运动皮层和初级体感皮层上。外侧凸面上的手结不在这张覆盖范围的中心。上矢状窦的解剖入口先决定了它靠近半球内侧面和背侧冠面，也就是图 7 里足、腿那一段所在的旁中央小叶及其紧邻的背侧运动皮层，而不是外侧的手结。

![支架到皮层表面的距离，以及与 SMA、M1、S1 的重叠](/blog-assets/bci-brain-structure/schone2025-fig4.jpg)

**图 10.** Schone 等（2025）预印本图 4。C：到皮层表面的平均距离标为 6.1 mm，最短距离标为 3.7 mm。D、E：支架与辅助运动区、初级运动皮层、初级体感皮层的重叠比例和距离。H：运动神经元病被试的初级运动皮层厚度随患病年数变薄。许可：CC BY 4.0。预印本，尚未作为期刊论文发表。

图 10C 把距离写在图上：支架到皮层表面的组平均约 6.1 mm，最短距离的组平均约 3.7 mm。这几毫米里有血管壁、硬膜和脑脊液，所以信号要穿过图 5 里导电最好的那一层脑脊液，再被空间上摊开。预印本的主要解剖结果是，支架与初级运动皮层的重叠，比单纯靠近运动任务功能磁共振的热点，更能预测运动信号的强度；文中特别写到中央沟前壁。功能激活的质心常常比实际支架更靠前。图 10H 还有一个临床结构事实：运动神经元病被试的初级运动皮层更薄，变薄和患病年数有关。同一套背内侧坐标，在诊断多年之后，灰质本身可能已经不是健康人的厚度。

这 10 人的距离和重叠来自预印本。可以用来理解“窦里的电极离哪一块皮层更近”，不宜写成已经完成同行评议的植入规范。同行评议的人体安全性证据仍是 Mitchell 等（2023）的 4 人、12 个月数据。

![硬膜窦把血液引向颈内静脉](/blog-assets/bci-brain-structure/openstax-13-16-sinuses.jpg)

**图 11.** 头颅矢状面的硬膜窦。上矢状窦沿颅顶中线向后，经窦汇、横窦和乙状窦进入颈内静脉。OpenStax《Anatomy and Physiology 2e》图 13.16，CC BY 4.0。

图 11 是这条路径的解剖底图。血流自上矢状窦向后、向下进入颈内静脉。支架电极的导管沿相反方向，从颈内静脉向上送到上矢状窦里预先标好的那一段。Mitchell 等把靶点标在上矢状窦与中央前回背内侧缘相邻的位置，标记范围盖住辅助运动区、初级运动皮层和初级体感皮层的中线端。功能磁共振不是这次配准所必需的；他们用的是结构像和术中三维血管造影。有的支架比计划更靠后，中央后回的重叠因此变多。

把第 5 节和第 7 节放在一起：开颅阵列对准外侧手结，读的是手和口面附近的回顶，深度 1.5 mm 以内的锋电位；血管内支架对准背内侧运动皮层，读的是数毫米之外的场电位，带宽在 SWITCH 里约 200 Hz。两种“运动脑机接口”的解剖入口不同，能解的动作细节也不同。

## 8. 体感皮层是写进去的那一层

中央沟后壁和中央后回是初级体感皮层，Brodmann 3、1、2 区。按 Kaas（1983）对第一体感区的整理，这几块的输入并不相同：3a 偏本体感觉，3b 是皮肤感觉的主要入口，1 区继续处理皮肤信息，2 区更偏向关节和复杂触觉。丘脑纤维主要停在第 IV 层。所以感觉写入要考虑两件事：刺激落在沟后的哪一个亚区，以及电流影响的是哪一层。

Flesher 等（2016）在一位长程脊髓损伤者的体感皮层手区做皮层内微刺激。被试感到的触觉来自手的不同位置，刺激位点的排列与预期的躯体定位一致。不少知觉带有压力这样的自然性质，低电流就能诱发，并在数月内保持稳定。增大刺激幅度，知觉强度跟着分级。这篇论文证明的是：手区体感皮层的空间结构还在，可以用它把接触位置和压力写回去。

Flesher 等（2021）把这种刺激接进闭环，标题中的结果是：能诱发触觉的脑机接口改善了机械臂控制。视觉仍然在，体感皮层提供的是视觉替代不了的接触信息。结构前提是中央沟两侧可以同时利用：前壁和中央前回读运动意图，后壁写触觉。两侧的层厚和颗粒层不同，阵列深度不能共用一个毫米数。

## 9. 言语皮层分成三块，信号种类不同

![四枚阵列放在腹侧 6v 和 44 区，以及口面动作、音素和词的分类](/blog-assets/bci-brain-structure/willett2023-fig1.png)

**图 12.** Willett 等（2023）图 1。a：中央沟（CS，红线）附近的皮层内阵列。d：口面动作、音素和词的分类准确率，6v 远高于 44 区。f：额、眼睑、颌、唇、舌、喉、音素和词在各电极上的解释方差，深浅点混在同一块阵列里。许可：CC BY 4.0。[10.1038/s41586-023-06377-x](https://doi.org/10.1038/s41586-023-06377-x)。颞上回的语音感知不在这张图里，见 Mesgarani 等（2014）。

Bouchard、Mesgarani、Johnson 与 Chang（2013）在说出辅音—元音音节时，用高密度 ECoG 记录腹侧中央前、后回。他们分析 85–175 Hz 的高 gamma。唇、颌、舌、喉的代表区沿背腹方向排列，在单个电极上又部分重叠。空间模式按语音特征组织，并在几十毫秒里从辅音转到元音。这是发音动作的感觉运动地图，位置在外侧沟上方的腹侧中央沟两侧。

Willett 等（2023）把四枚 64 通道、针长 1.5 mm 的阵列植入一名延髓起病的 ALS 被试的左半球。植入坐标按 Human Connectome Project 的多模态分区来选：两枚在腹侧 6v，两枚在 44 区。6v 用 1 秒的群体活动做朴素贝叶斯分类，33 种口面动作的准确率 92%，39 个音素 62%，50 个词 94%。44 区在同样的分类里低于 12%。6v 内部也不均匀：腹侧阵列在指令延迟期对语音信息更多，背侧阵列对口面动作更多。唇、颌、舌、喉的调谐在 3.2×3.2 mm 的阵列里是混在一起的，每一枚阵列都能看到全部发音器。

在线解码是另一项结果：50 词词表的词错误率 9.1%；125 000 词词表的词错误率 23.8%，速率每分钟 62 个词。论文用每分钟约 160 个词作为自然对话的对照。44 区在这项生产任务里几乎不提供可用的发放。教科书把 44、45 区合称 Broca 区、并把它写成“说话的皮层”，和这次单细胞分辨率的记录对不上。规划、句法可以仍然依赖额下回；把电极扎进 44 区来解尝试说话的音素，这篇数据不支持。

听和说也不在同一块。Mesgarani、Cheung、Johnson 与 Chang（2014）在六名癫痫监测被试的颞上回记录高密度表面电位，任务是听连续语音。高 gamma 取 75–150 Hz。单个电极对特定语音特征有选择性，发音方式比发音部位更分开，群体响应对应频谱—时间上的声学线索。这是听觉到音位的地图。它解释被试听见了什么，不直接提供舌和喉的运动命令。

三块皮层在外侧面上挨着，一张大的术中网格可以同时盖住。解码目标不同，该保留的电极也不同：尝试说话看腹侧 6v 的锋电位或中央前回下部的高 gamma；听写看颞上回的高 gamma；44 区在上述生产分类里贡献很小。

## 10. 初级视觉皮层折在距状沟里

![左右视野在视交叉交换后进入对侧视觉皮层](/blog-assets/bci-brain-structure/openstax-14-24-visual-map.jpg)

**图 13.** 视野如何进入视觉皮层。左、右视野在视交叉处交换鼻侧纤维，一侧半球接收对侧视野。图上把视觉皮层分成上方和下方，分别对应下视野和上视野。最下方是两侧合起来的完整画面。OpenStax《Anatomy and Physiology 2e》图 14.24，CC BY 4.0。[原书页面](https://openstax.org/books/anatomy-and-physiology-2e/pages/14-2-central-processing)

图 13 先解决左右。左视野里的景物主要到达右半球视觉皮层，右视野到达左半球。一侧枕叶的表面电极或针刺阵列，覆盖的是对侧视野，不是整个世界。

上下也分开。距状沟上壁（楔叶，图中的 superior visual cortex）对应下视野，下壁（舌回，图中的 inferior visual cortex）对应上视野。中央视野的代表区靠近枕极，周边视野更靠前，而且中央视野在皮层上占的毫米数大得多（Horton 与 Hoyt，1991）。因此同样大约 4 mm 见方的阵列，放在距状沟后部，覆盖的视野角度小；放在沟的前部，覆盖的视野角度大。沟本身把初级视觉皮层的大部分埋起来。只贴在枕叶表面的网格，接触到的是露出的那一部分，沟两壁上的视野地图还在硬膜下面。

Beauchamp 等（2020）没有把光点当成屏幕像素来静态点亮，而是按视觉皮层上的空间地图，用动态顺序刺激表面电极，在皮层上“画出”形状。能看见的被试和失明的被试都能按这个地图认出字母。文中一名失明被试达到每分钟 86 个形状、准确率 87%。这是表面电极加上电流导向，利用的是皮层表面还能碰到的那一部分视野地图。

Fernández 等（2021）把 96 通道皮层内阵列植入一名完全失明 16 年的 57 岁被试的枕叶视觉皮层，留置 6 个月，取出时没有并发症。单电极诱发光幻视的平均阈值是 66.8 ± 36.5 μA；多个电极同时刺激时阈值下降。被试能辨认一部分字母和物体边界。试验登记号 NCT02983370。和表面刺激相比，刺入灰质用更小的电流就能产生光幻视，因为电流离第 IV 层的输入细胞更近。一块阵列仍然只是视野地图上的一小块，落在中央视野还是周边视野，取决于它在距状沟前后方向上的位置。

## 11. 后顶叶携带的是目标

Aflalo 等（2015）把阵列植入一位四肢瘫痪者的后顶叶，解码的是运动想象，包括想要到达的目标和轨迹，而不是只解码肌肉层面的参数。后顶叶坐在中央沟后方的顶上小叶和顶内沟附近，离手结有一条沟和几厘米皮层。它适合问“要做什么”，手结更适合问“手正在怎样动”。两个靶点可以并存，不能互相替代。第 2 讲的背侧视觉通路停在这一带，那一讲写的是视觉如何引导动作；这里只确定电极若要读目标，结构上该离开初级运动皮层。

## 12. 白质是出口，核团是另一套坐标

![额状切面上的纹状体和苍白球](/blog-assets/bci-brain-structure/openstax-13-9-basal-nuclei.jpg)

**图 14.** 额状切面。图上标出尾状核、壳核、苍白球、侧脑室和胼胝体。尾状核与壳核之间那条浅色白质是内囊，图本身没有写这个名字。丘脑底核不在这一层切面上。OpenStax《Anatomy and Physiology 2e》图 13.9，CC BY 4.0。

第 V 层锥体细胞的轴突离开灰质后进入白质，经放射冠收进内囊。皮质脊髓纤维集中在内囊后肢，再向下进入大脑脚和延髓锥体（Lemon，2008）。图 14 的切面正好把尾状核和壳核分开，中间的浅色带就是内囊经过的位置。一小段后肢里的病变，可以切断大片皮层的下行输出，而那些皮层细胞本身还在。Hochberg 等（2006）能在脊髓损伤之后读到初级运动皮层，依靠的就是这种分离：通路断在下方，上运动神经元的发放还在颅内。

基底节是另一套深部坐标。图 14 能看见的是纹状体和苍白球。闭环深部脑刺激常用的丘脑底核更靠下，不在这张教科书切面上。Little 等（2013）在晚期帕金森病里，按丘脑底核的 β 活动调节刺激。那里的信号是核团里的场电位节律，电极是深部刺激电极，不是铺在中央前回上的网格。把它和运动皮层脑机接口放在同一个“运动”字下面，解剖上它们一个在皮层灰质，一个在间脑的核团。

胼胝体在图的顶部，连接两侧半球。它不是记录锋电位的靶点。两侧手区若要一起用，连合纤维解释的是它们为什么会互相影响，电极仍然要放在两侧的灰质里。

## 13. 分区图给出名字，沟给出这一位被试的坐标

![Brodmann 1909 年分区在外侧和内侧表面的教学图](/blog-assets/bci-brain-structure/openstax-13-8-brodmann.jpg)

**图 15.** Brodmann 分区的外侧观和内侧观。绿是 4 区，蓝是 3、1、2 区，橙黄是 44、45 区，内侧后部的粉红是 17 区。OpenStax《Anatomy and Physiology 2e》图 13.8，CC BY 4.0。OpenStax 写 Brodmann 按细胞构筑分成 52 个区；人脑图上并不是每个编号都有对应皮层。

图 15 把前面用过的名字放回一张经典地图。和脑机接口关系最直接的是：

| 图上的区 | 结构位置 | 接口里用来做什么 |
| --- | --- | --- |
| 4 | 中央前回，并伸进中央沟前壁 | 运动意图、手写。手结是个体标志 |
| 3、1、2 | 中央沟后壁和中央后回 | 触觉写入。3a、3b、1、2 的输入不同 |
| 6，以及 HCP 的 6v | 中央前回下部、4 区前方 | 尝试说话的锋电位主要在 6v |
| 44、45 | 额下回 | 经典 Broca 区。2023 年的生产分类里 44 区贡献很小 |
| 17 | 距状沟两侧，图的内侧后部 | 视觉写入。大部分埋在沟里 |
| 22 一带的颞上回 | 外侧沟下方 | 听语音时的音位特征 |

Glasser 等（2016）用 Human Connectome Project 的髓鞘、厚度、连接和任务功能磁共振，在 210 名年轻人的群体上划出每侧半球 180 个区，其中 97 个是新划的，83 个能对上以往的显微镜或专门研究。分类器在新的被试里检测到 96.6% 的这些区。6v 就是这套分区里的名字，Brodmann 的编号里没有 6v。Willett 等（2023）选择阵列位置时用的就是这套分区，再落到该被试自己的解剖和功能像上。180 区是群体模板。沟的倒 Ω 是哪一位病人的手结，仍然要在他或她的磁共振上指认（Yousry 等，1997）。

## 14. 结构、信号和电极对照

| 结构 | 电极实际碰到的东西 | 常见信号 | 代表工作 |
| --- | --- | --- | --- |
| 头皮外的感觉运动皮层 | 颅骨和脑脊液之后的开放电场 | μ、β 节律的功率变化 | 第 3 讲；Pfurtscheller 的 ERD 传统 |
| 中央前回手结，回顶 | 灰质中上层的小群细胞 | 锋电位、局部场电位 | Hochberg 等，2006；Willett 等，2021 |
| 中央沟前壁 | 表面电极隔沟才能看见 | 场电位；直接输出细胞在猕猴位于这里 | Rathelot 与 Strick，2009 |
| 背内侧运动皮层 | 上矢状窦内的支架，距皮层数毫米 | 约 200 Hz 以内的场电位 | Mitchell 等，2023；Schone 等，2025 预印本 |
| 中央后回手区 | 颗粒皮层，第 IV 层接收丘脑输入 | 微刺激写入触觉 | Flesher 等，2016、2021 |
| 腹侧 6v | 1.5 mm 针尖上的口面与发音群体 | 锋电位 | Willett 等，2023 |
| 颞上回 | 表面电极下的听觉群体 | 高 gamma | Mesgarani 等，2014 |
| 距状沟两侧的 17 区 | 表面网格或枕叶内阵列 | 电刺激产生光幻视 | Beauchamp 等，2020；Fernández 等，2021 |
| 后顶叶 | 顶叶皮层内阵列 | 目标与想象轨迹 | Aflalo 等，2015 |
| 海马 CA1 | 内侧颞叶深部电极 | 局部发放；可按模型刺激 | Hampson 等，2018 |
| 丘脑底核 | 深部刺激电极 | β 频段场电位 | Little 等，2013 |

## 15. 仍未嵌入的原图

已经嵌入的文献原图是 McCann 等（2019）图 1 和图 2、Willett 等（2023）图 1、OpenStax 的脑膜、硬膜窦、感觉小人、视野、基底节和 Brodmann 分区，以及 Schone 等（2025）预印本图 1、3、4。

图 3、图 4、图 6 仍是示意图。对应原图受版权限制，只给链接：

- 图 3：Mohan 等（2015）对人颞叶锥体细胞树突和轴突的重建，[Cereb Cortex 25:4839–4853](https://doi.org/10.1093/cercor/bhv188)。
- 图 4：Buzsáki、Anastassiou 与 Koch（2012）关于开放电场和四种细胞外信号的图，[Nat Rev Neurosci 13:407–420](https://doi.org/10.1038/nrn3241)。
- 图 6：Yousry 等（1997）轴位倒 Ω、横置 ε 和矢状位的钩，[Brain 120:141–157](https://doi.org/10.1093/brain/120.1.141)。
- Rathelot 与 Strick（2009）图 6，猕猴沟前壁与回顶的两种初级运动皮层：[PNAS 106:918–923](https://doi.org/10.1073/pnas.0808362106)。
- Gordon 等（2023）图 1，效应器区与效应器间区的交替：[Nature 617:351–359](https://www.nature.com/articles/s41586-023-05964-2)。
- Bouchard 等（2013）的发音器地图和 Mesgarani 等（2014）的颞上回语音特征图，分别见 [Nature 495:327–332](https://doi.org/10.1038/nature11911) 与 [Science 343:1006–1010](https://doi.org/10.1126/science.1245994)。图 12 用的是同一问题里可以转载的 Willett 等（2023）图 1。

## 参考文献

1. Penfield W, Boldrey E. Somatic motor and sensory representation in the cerebral cortex of man as studied by electrical stimulation. *Brain*. 1937;60(4):389–443. doi:10.1093/brain/60.4.389
2. Brodmann K. *Vergleichende Lokalisationslehre der Grosshirnrinde*. Leipzig: Barth; 1909.
3. Jasper HH. The ten-twenty electrode system of the International Federation. *Electroencephalogr Clin Neurophysiol*. 1958;10(2):371–375.
4. Rush S, Driscoll DA. Current distribution in the brain from surface electrodes. *Anesth Analg*. 1968;47(6):717–723.
5. Campbell PK, Jones KE, Huber RJ, Horch KW, Normann RA. A silicon-based, three-dimensional neural interface: manufacturing processes for an intracortical electrode array. *IEEE Trans Biomed Eng*. 1991;38(8):758–768. doi:10.1109/10.83588
6. Kaas JH. What, if anything, is SI? Organization of first somatosensory area of cortex. *Physiol Rev*. 1983;63(1):206–231. doi:10.1152/physrev.1983.63.1.206
7. Georgopoulos AP, Schwartz AB, Kettner RE. Neuronal population coding of movement direction. *Science*. 1986;233(4771):1416–1419. doi:10.1126/science.3749885
8. Yousry TA, Schmid UD, Alkadhi H, et al. Localization of the motor hand area to a knob on the precentral gyrus: a new landmark. *Brain*. 1997;120(1):141–157. doi:10.1093/brain/120.1.141
9. Maynard EM, Nordhausen CT, Normann RA. The Utah Intracortical Electrode Array: a recording structure for potential brain-computer interfaces. *Electroencephalogr Clin Neurophysiol*. 1997;102(3):228–239. doi:10.1016/s0013-4694(96)95176-0
10. Mountcastle VB. The columnar organization of the neocortex. *Brain*. 1997;120(4):701–722. doi:10.1093/brain/120.4.701
11. Crone NE, Miglioretti DL, Gordon B, Lesser RP. Functional mapping of human sensorimotor cortex with electrocorticographic spectral analysis. II. Event-related synchronization in the gamma band. *Brain*. 1998;121(12):2301–2315. doi:10.1093/brain/121.12.2301
12. Fischl B, Dale AM. Measuring the thickness of the human cerebral cortex from magnetic resonance images. *Proc Natl Acad Sci U S A*. 2000;97(20):11050–11055. doi:10.1073/pnas.200033797
13. Oostendorp TF, Delbeke J, Stegeman DF. The conductivity of the human skull: results of in vivo and in vitro measurements. *IEEE Trans Biomed Eng*. 2000;47(11):1487–1492. doi:10.1109/tbme.2000.880100
14. Graziano MSA, Taylor CSR, Moore T. Complex movements evoked by microstimulation of precentral cortex. *Neuron*. 2002;34(5):841–851. doi:10.1016/s0896-6273(02)00698-0
15. Horton JC, Adams DL. The cortical column: a structure without a function. *Philos Trans R Soc Lond B Biol Sci*. 2005;360(1456):837–862. doi:10.1098/rstb.2005.1623
16. Hochberg LR, Serruya MD, Friehs GM, et al. Neuronal ensemble control of prosthetic devices by a human with tetraplegia. *Nature*. 2006;442(7099):164–171. doi:10.1038/nature04970
17. Lemon RN. Descending pathways in motor control. *Annu Rev Neurosci*. 2008;31:195–218. doi:10.1146/annurev.neuro.31.060407.125547
18. Azevedo FAC, Carvalho LRB, Grinberg LT, et al. Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain. *J Comp Neurol*. 2009;513(5):532–541. doi:10.1002/cne.21974
19. Katzner S, Nauhaus I, Benucci A, Bonin V, Ringach DL, Carandini M. Local origin of field potentials in visual cortex. *Neuron*. 2009;61(1):35–41. doi:10.1016/j.neuron.2008.11.016
20. Rathelot JA, Strick PL. Subdivisions of primary motor cortex based on cortico-motoneuronal cells. *Proc Natl Acad Sci U S A*. 2009;106(3):918–923. doi:10.1073/pnas.0808362106
21. Lindén H, Tetzlaff T, Potjans TC, et al. Modeling the spatial reach of the LFP. *Neuron*. 2011;72(5):859–872. doi:10.1016/j.neuron.2011.11.006
22. Horton JC, Hoyt WF. The representation of the visual field in human striate cortex: a revision of the classic Holmes map. *Arch Ophthalmol*. 1991;109(6):816–824. doi:10.1001/archopht.1991.01080060080030
23. Buzsáki G, Anastassiou CA, Koch C. The origin of extracellular fields and currents — EEG, ECoG, LFP and spikes. *Nat Rev Neurosci*. 2012;13(6):407–420. doi:10.1038/nrn3241
24. Bouchard KE, Mesgarani N, Johnson K, Chang EF. Functional organization of human sensorimotor cortex for speech articulation. *Nature*. 2013;495(7441):327–332. doi:10.1038/nature11911
25. Little S, Pogosyan A, Neal S, et al. Adaptive deep brain stimulation in advanced Parkinson disease. *Ann Neurol*. 2013;74(3):449–457. doi:10.1002/ana.23951
26. Mesgarani N, Cheung C, Johnson K, Chang EF. Phonetic feature encoding in human superior temporal gyrus. *Science*. 2014;343(6174):1006–1010. doi:10.1126/science.1245994
27. Mohan H, Verhoog MB, Doreswamy KK, et al. Dendritic and axonal architecture of individual pyramidal neurons across layers of adult human neocortex. *Cereb Cortex*. 2015;25(12):4839–4853. doi:10.1093/cercor/bhv188
28. Aflalo T, Kellis S, Klaes C, et al. Decoding motor imagery from the posterior parietal cortex of a tetraplegic human. *Science*. 2015;348(6237):906–910. doi:10.1126/science.aaa5417
29. Glasser MF, Coalson TS, Robinson EC, et al. A multi-modal parcellation of human cerebral cortex. *Nature*. 2016;536(7615):171–178. doi:10.1038/nature18933
30. Oxley TJ, Opie NL, John SE, et al. Minimally invasive endovascular stent-electrode array for high-fidelity, chronic recordings of cortical neural activity. *Nat Biotechnol*. 2016;34(3):320–327. doi:10.1038/nbt.3428
31. Flesher SN, Collinger JL, Foldes ST, et al. Intracortical microstimulation of human somatosensory cortex. *Sci Transl Med*. 2016;8(361):361ra141. doi:10.1126/scitranslmed.aaf8083
32. Hampson RE, Song D, Robinson BS, et al. Developing a hippocampal neural prosthetic to facilitate human memory encoding and recall. *J Neural Eng*. 2018;15(3):036014. doi:10.1088/1741-2552/aaaed7
33. McCann H, Pisano G, Beltrachini L. Variation in reported human head tissue electrical conductivity values. *Brain Topogr*. 2019;32(5):825–858. doi:10.1007/s10548-019-00710-2
34. Dickey CW, Sargsyan A, Madsen JR, Eskandar EN, Cash SS, Halgren E. Travelling spindles create necessary conditions for spike-timing-dependent plasticity in humans. *bioRxiv*. 2020. doi:10.1101/2020.05.21.079152
35. Willett FR, Deo DR, Avansino DT, et al. Hand knob area of premotor cortex represents the whole body in a compositional way. *Cell*. 2020;181(2):396–409.e26. doi:10.1016/j.cell.2020.02.043
36. Beauchamp MS, Oswalt D, Sun P, et al. Dynamic stimulation of visual cortex produces form vision in sighted and blind humans. *Cell*. 2020;181(4):774–783.e5. doi:10.1016/j.cell.2020.04.033
37. Willett FR, Avansino DT, Hochberg LR, Henderson JM, Shenoy KV. High-performance brain-to-text communication via handwriting. *Nature*. 2021;593(7858):249–254. doi:10.1038/s41586-021-03506-2
38. Flesher SN, Downey JE, Weiss JM, et al. A brain-computer interface that evokes tactile sensations improves robotic arm control. *Science*. 2021;372(6544):831–836. doi:10.1126/science.abd0380
39. Fernández E, Alfaro A, Soto-Sánchez C, et al. Visual percepts evoked with an intracortical 96-channel microelectrode array inserted in human occipital cortex. *J Clin Invest*. 2021;131(23):e151331. doi:10.1172/JCI151331
40. Mitchell P, Lee SCM, Yoo PE, et al. Assessment of safety of a fully implanted endovascular brain-computer interface for severe paralysis in 4 patients: the Stentrode with thought-controlled digital switch (SWITCH) study. *JAMA Neurol*. 2023;80(3):270–278. doi:10.1001/jamaneurol.2022.4847
41. Gordon EM, Chauvin RJ, Van AN, et al. A somato-cognitive action network alternates with effector regions in motor cortex. *Nature*. 2023;617(7960):351–359. doi:10.1038/s41586-023-05964-2
42. Willett FR, Kunz EM, Fan C, et al. A high-performance speech neuroprosthesis. *Nature*. 2023;620(7976):1031–1036. doi:10.1038/s41586-023-06377-x
43. Schone HR, Yoo P, Fry A, et al. Motor cortex coverage predicts signal strength of a Stentrode endovascular brain-computer interface. *medRxiv*. Preprint posted September 25, 2025. doi:10.1101/2025.09.19.25335875
44. Betts JG, Young KA, Wise JA, et al. *Anatomy and Physiology 2e*. Houston, TX: OpenStax; 2022. [CC BY 4.0](https://openstax.org/books/anatomy-and-physiology-2e/pages/preface)
