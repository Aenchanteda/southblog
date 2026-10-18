---
title: "第2节笔记 · 感觉运动系统与神经编码原理"
description: "第二节课堂笔记：运动执行、脊髓节律、脑干与皮层编码、感觉反馈、小脑和基底神经节。"
pubDate: 2026-09-22
tags: ["脑机接口", "BCI", "笔记"]
order: 2
draft: false
---


> 周牧　清华大学基础医学院助理教授  
> 课堂日期：2026-09-22

---

## 1. 为什么从运动理解脑，而不是从一个“动作指令”开始？

运动看似自然，实际需要同时解决目标选择、多关节协调、感觉延迟和环境变化。Wolpert把“产生可适应的复杂运动”作为理解脑功能的入口（[剑桥大学的演讲报道](https://www.cam.ac.uk/news/the-master-puppeteer-how-the-brain-controls-the-body)）。这是本课的研究视角，不是把脑的全部功能归结为肌肉收缩的定论。

本节沿一条问题链展开：**肌肉怎样产生力？脊髓能否自行组织节律？脑干怎样调用动作？皮层怎样准备和执行？感觉、小脑与基底神经节又怎样让动作准确、可学习、可选择？** 对BCI来说，这决定了我们记录的活动究竟代表执行、准备、反馈还是调节。

## 2. 多层控制如何把目标变成运动？

运动控制非常具有挑战：从手套玩偶—提线木偶—特斯拉机器人—人体，整体关节组合单元数量巨大。控制分布在不同层级，各层通过并行通路和反馈相互作用。

难度沿这条线上升：手指套进玩偶就能摆姿势；提线木偶要协调很多线；机器人要在不确定的力学环境里保持平衡；人体还要在延迟、噪声和多关节耦合下，把意图变成平滑的力。

从皮层到肌肉的主干，就是皮质脊髓束：皮层神经元轴突下行，多数在延髓锥体交叉后进入对侧脊髓，通过中间神经元或直接影响运动神经元，再由后者支配骨骼肌。图中省略了脑干、小脑和基底神经节；脑干另有直接下行至脊髓的通路，小脑和基底神经节则经其他运动中枢影响执行。感觉既直接进脊髓（牵张反射），也上行到小脑和皮层，用来比较“想做成的动作”和“身体实际做成的动作”。

![皮质脊髓通路](/blog-assets/0922-figures/10-corticospinal-pathway-zh.png)

*皮质脊髓通路。上位运动神经元（橙）起自中央前回，经大脑脚、延髓锥体，多数在锥体交叉后进入外侧皮质脊髓束，终于脊髓腹角的下位运动神经元（青绿）。OpenStax College，图 “Corticospinal Pathway”。https://commons.wikimedia.org/wiki/File:1426_Corticospinal_Pathway.jpg*

---

### 2.1 电信号怎样变成肌肉的力？

先区分两步：神经肌肉传递把运动神经元的信号交给肌纤维；兴奋—收缩偶联再把肌纤维的电活动转成力。α和γ运动神经元的作用也不同。

| 名词 | 它是什么 | 课堂上怎么用 |
| --- | --- | --- |
| 运动单位（motor unit） | 一个运动神经元加上它支配的全部肌纤维 | 力量由募集多少单位、发放多快来调节 |
| 运动神经元池（motor pool） | 支配同一块肌肉的全部运动神经元 | 在脊髓里排成纵柱 |
| α 运动神经元 | 支配梭外肌，直接产生收缩 | 直接作用于执行器 |
| γ 运动神经元 | 支配肌梭里的梭内肌，调节肌梭敏感度 | 维持感觉灵敏度 |

**兴奋—收缩偶联，按因果链记。**

1. 运动神经元末梢释放乙酰胆碱，肌膜产生动作电位。
2. 动作电位沿横管传入肌纤维内部，肌质网释放 Ca²⁺。
3. Ca²⁺ 升高后，肌球蛋白头得以与 F-肌动蛋白结合。
4. 横桥摆动，肌节缩短，整块肌肉产生力。
5. Ca²⁺ 被泵回肌质网，收缩停止。


![兴奋收缩偶联](/blog-assets/0922-figures/01-excitation-contraction-zh.png)

*从神经肌肉接头到肌肉缩短。动作电位进横管，钙释放，粗丝与细丝相互作用。OpenStax，《Anatomy and Physiology 2e》第 10.3 节。https://openstax.org/books/anatomy-and-physiology-2e/pages/10-3-muscle-fiber-contraction-and-relaxation*

![滑动丝模型](/blog-assets/0922-figures/03-sliding-filament-zh.png)

*滑动丝模型。上为舒张，下为收缩：Z 线靠近，I 带变窄，A 带宽度不变。绿色细丝为肌动蛋白，紫色粗丝为肌球蛋白。OpenStax，《Anatomy and Physiology 2e》图 10.10。同上链接。*

![肌梭与高尔基腱器官](/blog-assets/0922-figures/运动神经元-zh.png)

*α 负责梭外肌收缩，γ 支配梭内肌，让肌梭在肌肉缩短时仍保持敏感。*

**读图与解释。** 高尔基腱器官感受张力。OpenStax，《Introduction to Behavioral Neuroscience》第 10.2 节。https://openstax.org/books/introduction-behavioral-neuroscience/pages/10-2-eliciting-contractions-from-lower-levels-lower-motoneurons-and-reflex-arcs

**肌肉协同（muscle synergy）。** 一块肌肉几乎从不单独工作。肌肉协同假说认为，中枢可能通过少数模块组织多肌肉活动，再按任务改变模块的激活强度。这样要控制的变量从“每块肌肉一个指令”降成“几个模块的系数”。多肌肉肌电中可提取协同变化，但统计分解出的模块是否就是固定神经模块，还需要额外实验。Bizzi 与 Cheung 的综述把协同定义为减轻运动与姿势计算负担的神经协调结构（Bizzi & Cheung, 2013）。

**常见误区。** 表面肌电不是“一块肌肉一根干净的线”。单路表面肌电主要反映检测范围内多个运动单位的叠加，也可能受到邻近肌肉串扰；肌肉协同分析通常需要多块肌肉的同步记录。

---

### 2.2 没有大脑逐步发令，脊髓还能产生节律吗？

**牵张反射。** 叩击髌韧带会突然拉长股四头肌。肌梭感觉神经元兴奋，直接兴奋支配这块肌肉的 α 运动神经元，同时通过抑制性中间神经元抑制拮抗肌。腿就踢出去。这是最短的感觉—运动环，中间不必经过大脑。

![膝跳反射](/blog-assets/0922-figures/07-knee-jerk-zh.png)

*膝跳反射的四步：腱被叩击，肌梭拉长，感觉神经元直接兴奋脊髓腹角运动神经元，股四头肌收缩、小腿抬起。*

**读图与解释。** OpenStax，《Introduction to Behavioral Neuroscience》第 10.2 节。https://openstax.org/books/introduction-behavioral-neuroscience/pages/10-2-eliciting-contractions-from-lower-levels-lower-motoneurons-and-reflex-arcs

**去大脑猫与脊髓猫。** 去大脑（decerebration）并非一种固定手术。切面位于丘脑下行走区的吻侧还是尾侧，会改变保留的下行驱动及行为表现（Takakusaki 等，2016；Van de Crommert、Mulder 与 Duysens，1998）。

丘前–乳头体前切断（precollicular–premammillary decerebration）从中脑上丘的前方切到下丘脑乳头体的前方，外侧下丘脑里的丘脑下行走区（subthalamic locomotor region，SLR）还留着。这种猫没有皮层那种目标导向的起步，放上转动的跑步机后可以自己走出协调步态。判断实验结论时，应先确认切面保留了哪些结构。

再往尾侧，丘前–乳头体后切断（precollicular–postmammillary decerebration），或上丘与下丘之间切断（intercollicular decerebration），SLR 不保留。猫可以反射性站立，不会因为带子在转就自己走。行走要电刺激中脑行走区（mesencephalic locomotor region，MLR）。刺激加强，步频变快，走可以变成跑。跑步机托住身体，并提供肢体感觉；带子本身不是起步开关。

胸髓完全横断也不是立刻踏步。急性期常有脊髓休克。慢性期把躯干托住，并在跑步机上训练之后，后肢可以走出交替步态。带子把髋关节拉向伸展，同时让肢体负重，这些感觉负责诱发和调节（Van de Crommert 等，1998）。因此“横断后还能走”说明节拍不必由大脑逐拍发出，还不能单独证明节拍与感觉无关。更干净的证据是虚构行走（fictive locomotion）：肌肉麻痹、没有运动带来的感觉反馈时，运动神经仍可出现行走样的节律放电。

![两种去大脑切面与脊髓猫](/blog-assets/0922-figures/28-decerebrate-cat.png)

*教学示意图，不是论文原图。A：高切（丘前–乳头体前）留住丘脑下行走区，传送带可以带出行走；低切（上丘与下丘之间，或乳头体后方）不会因带子转动而自己走，要刺激中脑行走区，刺激加强则走变成跑。B：胸髓横断后先有脊髓休克；慢性期托住躯干并训练，后肢才在带子上踏步。髋伸展和负重是诱发条件。肌肉麻痹后节律仍可出现，所以不是一串牵张反射。依据 Takakusaki 等（2016）与 Van de Crommert 等（1998）改绘。*

**两种观点，其实是一场历史争论。**

| | 观点 1：反射链 | 观点 2：中枢模式发生器 |
| --- | --- | --- |
| 主张 | 每一步都由上一步的感觉反馈触发下一步 | 脊髓自己能产生节律，感觉只是调制 |
| 关键检验 | 若完全依赖反射链，阻断周期性感觉反馈应破坏节律 | 在隔离或去传入、适当激活的制备中，仍能出现节律性运动神经输出 |
| 课堂例子 | 去大脑猫被跑步机带着走 | 脊髓完全横断后，后肢仍能被诱发踏步 |

单看跑步机上的踏步还不能排除感觉反射链；更强证据来自去传入或肌肉麻痹条件下的虚拟运动（fictive locomotion），即没有真实肢体摆动仍可记录到节律性神经输出。现代观点把中枢节律与感觉调节结合起来。中枢模式发生器（central pattern generator，CPG）是一组被激活后、不必依赖带有明确时间信息的感觉或下行输入，就能产生行走、呼吸、飞行、游泳等节律的神经环路（Marder & Bucher, 2001）。感觉反馈决定这一步踩实没有、要不要抬高，下行指令决定走还是跑。发育建立的连接为节律提供基础，但神经调质、感觉经验和可塑性仍能改变其工作状态。

AB、PD、LP、PY 是甲壳动物口胃神经节里幽门节律的经典细胞，不是四肢的运动神经元。AB 是前爆发器，PD 是幽门扩张器，LP 是侧幽门神经元，PY 是幽门神经元。它们以固定相位差周期性放电，驱动胃的不同肌肉。Marder 与 Bucher（2001）用这个小环路说明：节律可以在没有高级中枢定时的情况下产生，细胞本身的离子通道决定膜电位如何自动变正、再变负。

**三类节律机制。** 本节讨论的三类对应 Marder 与 Bucher（2001）图 3 里解释“节拍从哪来”的前三种膜性质。膜电位变正、再变负，靠的是离子通道，不是每个周期都要等一次新的感觉或下行脉冲。

1. **内源爆发（endogenous bursting）。** 细胞自己先被慢内向电流抬上去，打出一串锋电位，再被外向电流拉下来，下一拍又开始。不需要别的神经元每个周期推它一下。口胃节里的 AB 就是这种起搏细胞。
2. **平台电位（plateau potential）。** 一个短的去极化脉冲把持续内向电流打开，脉冲结束后电位仍停在高处并继续放电；一个超极化脉冲再把它关掉。细胞等于记住了上一次兴奋或抑制输入。
3. **抑制后反跳（post-inhibitory rebound）。** 抑制期间细胞不放电。超极化把反跳要用的电流准备好，抑制一撤，膜电位冲过阈值，打出一串锋电位。在互相抑制的半中枢里，这一拍的时刻常常由对方抑制的结束来定，细胞自己并没有独立的时钟。

同一张图还画了第四种，锋电位频率适应（spike-frequency adaptation）：恒定去极化下放电逐渐变慢，活跃的那一侧自己停下来，对方就从抑制里被释放。课堂说的三类是图里的前三种；适应是半中枢换拍的另一条路。

**单独仍打节拍。** 这里有两层，不要合成一句。第一层是整团口胃神经节放进盐水：感觉断了，也没有上级在计时，幽门节律仍在（Marder & Bucher, 2001，图 1）。第二层才是单个 AB。把它从突触同伴里隔开以后，不加单胺时它是沉默的；浴加多巴胺、五羟色胺或章鱼胺，它才重新爆发，而且三种胺依赖的钠、钙、钾电流并不相同（Harris-Warrick & Flamm, 1987）。所以“单独培养依旧产生节拍”说的是：节拍可以来自这个细胞自己的离子通道，不必由旁边的突触来计时。它不是“任意神经元种进培养皿、什么都不加，就永远打拍”。

![三类节律机制](/blog-assets/0922-figures/29-rhythm-mechanisms.png)

*三类膜电位示意图，根据 Marder 与 Bucher（2001）图 3 的前三格改绘。1：内源爆发，慢波自己抬升再回落。2：平台电位，短去极化脉冲打开后平台比脉冲长，超极化脉冲把它关掉。3：抑制后反跳，抑制期间电位压低，抑制结束才打出一串锋电位。图下说明 AB 在突触隔离后要有单胺才爆发（Harris-Warrick & Flamm, 1987）。*

**用细胞类型检验：不同中间神经元对步态有什么贡献？** 胚胎腹侧脊髓四个祖细胞域 p0–p3 产生四类中间神经元：V0、V1、V2、V3。V2 再分成兴奋性的 V2a 和抑制性的 V2b。Kiehn（2016）把这几类放进同一张行走环路图。

研究者在小鼠中按细胞类型进行遗传切除或沉默，再测量不同速度下的左右协调和步态。这样的干预可检验某一类细胞对环路功能是否必要；不能理解为植入一类细胞就能产生一种固定步态。

切除或沉默之后，各自丢掉的是不同的一块：

| 细胞 | 标记与投射 | 去掉之后 |
| --- | --- | --- |
| V0 | Dbx1，连合。抑制性 V0D、兴奋性 V0V | 左右交替垮掉。离体脊髓上，V0D 保住低频交替，V0V 保住高频交替。完整小鼠里，只去 V0V：慢速仍能走，trot 消失，较快时变成奔驰和蹦；V0 全部去掉，各个速度都只剩同步的蹦。V0D 单独切除的小鼠活不到能测步态，所以“V0D 对应走”是从上面两条推出来的，不是直接测到的（Bellardita & Kiehn, 2015；Kiehn, 2016） |
| V1 | En1，同侧抑制 | 主要影响步频。和 V2b 一起去掉后，同侧屈肌和伸肌不再交替（Kiehn, 2016 所综述） |
| V2a | Chx10，同侧兴奋 | 高速时的左右交替保不住。慢速仍是交替的 trot，速度一高就变成左右同步的 gallop（Crone 等, 2009） |
| V3 | Sim1，多为兴奋性连合 | 节律的幅度和周期变散，左右交替本身还在（Zhang 等, 2008）。高速时左右同步（蹦）用的兴奋性连合通路，Kiehn（2016）认为可能是 V3，这条当时还没有直接测过 |

“走路时也会跑”指的是同一只小鼠随速度换模块：野生型从走（walk）到对侧快步（trot），再进入奔驰（gallop）和蹦（bound）。拿掉其中一类，某一个速度段的步态会整段换掉，所以走和跑不是一根连续旋钮上的两个刻度。Crone 等（2009）的 V2a 切除鼠最贴近这句话：慢的时候仍是交替的 trot，速度一高就变成左右接近同步的 gallop。

**推荐看的图。**

- Kiehn, 2016, *Nature Reviews Neuroscience*，图 2：V0 切除后，walk、trot、gallop、bound 如何改组。链接：https://doi.org/10.1038/nrn.2016.9
- Crone et al., 2009, *The Journal of Neuroscience* 29:7098–7109，V2a 切除后步态随速度从 trot 变成 gallop。链接：https://doi.org/10.1523/JNEUROSCI.1206-09.2009
- Bellardita & Kiehn, 2015, *Current Biology*，完整小鼠与 V0 突变鼠的步态—速度图。链接：https://doi.org/10.1016/j.cub.2015.04.005
- Marder & Bucher, 2001, *Current Biology* 11:R986–R996，口胃节 CPG 环路图。链接：https://doi.org/10.1016/S0960-9822(01)00581-4

---

### 2.3 既然脊髓能产生节律，脑干还控制什么？

MLR 不是一个均匀的“行走按钮”。Caggiano 等（2018）表明，中脑里两群谷氨酸能神经元分工：脚桥核（pedunculopontine nucleus，PPN）更支持较慢的探索性交替步态；楔状核（cuneiform nucleus，CnF）对高速、同步步态是必要的。刺激强度或频率升高，动物从走转到跑。论文题目就是“设定行走速度和步态选择的中脑环路”。

![脑干位置](/blog-assets/0922-figures/23-brainstem-zh.png)

*中脑、脑桥、延髓的位置。MLR 在中脑，MdV 在延髓网状结构。OpenStax，《Anatomy and Physiology 2e》第 13.2 节。https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system*

光遗传把速度和步态拆开的实验图在 Caggiano et al., 2018, *Nature* 553:455–460。链接：https://doi.org/10.1038/nature25448

MdV 这一段对应 Esposito、Capelli 与 Arber（2014）。他们用交叉病毒示踪看到：脑干不同亚核与脊髓不同功能的运动神经元之间有选择性连接；MdV 特别对准支配前肢的运动神经元。沉默或消融 MdV 后，受损的是技巧性前肢任务（加速滚轴、单粒食物抓取），不是所有运动一起消失。

“4 类细胞、各类对应一个动作”与 Ruder 等（2021）的方向一致：脑干里存在一张多样前肢动作的功能图，光遗传激活不同群体引出不同前肢动作。

运动音节理论（motor syllable theory）是解释运动控制的一种组合理论。复杂动作不从每一块肌肉、每一毫秒重新计算，而是从一套已经会做的短单元里挑选、排序、拼接。一个音节是一段可重复使用的短动作；换顺序或换强度，就得到另一个动作。要决定的是调用哪几个音节、何时接上下一个。音节内部的肌肉配合不必每次重算。

课堂用视觉层级作对照：

- 视网膜神经节细胞的感受野多是圆形的中心—周围结构，例如一个圆。
- 初级视皮层神经元对特定朝向的条形或边缘反应强，例如一个 bar。
- 下颞叶皮层有对面孔选择性很高的细胞，例如人脸。

视觉侧是圆斑组成条形、条形再组成面孔。运动侧与之对应的，是短音节组成完整动作。

Wiltschko 等（2015）把这个想法落到小鼠的全身行为上。深度摄像看到姿态在亚秒尺度上分成一块一块；这些块被反复使用，块与块之间有稳定的转移概率。他们按鸟鸣的叫法，把这种模块称为行为音节（behavioral syllable），把转移关系统称为行为语法（behavioral grammar）。光遗传激活运动皮层，可以插入特定的音节，说明这些单元和运动环路是连着的。

![运动音节](/blog-assets/0922-figures/30-motor-syllable.png)

*运动音节理论的教学示意图，不是论文原图。伸、抓、收回各自是一个可复用的短单元，按顺序接成一次够取；换顺序就是另一个动作。单元的实验叫法见 Wiltschko 等（2015）。*

肌肉协同、CPG与行为音节都提供了降低描述维度的思路，但它们处在不同层级：协同描述肌肉活动组合，CPG描述节律生成网络，行为音节描述可重复的姿态片段。不能仅凭这些相似性，就把它们排成已经证实的一套固定层级模块。脑干干预实验为某些动作单元提供因果线索，全身行为分解则先给出统计结构。

---

### 2.4 准备时皮层已经活跃，为什么手还没有动？

运动小人来自 Penfield 与 Boldrey（1937）对清醒人运动皮层的电刺激：身体各部在中央前回上有一块代表区，手和口的代表区特别大。它是刺激图，不是“皮层里住着一个变形的人”。相邻部位大体相邻，但边界没有课本卡通画那么整齐。

![感觉小人](/blog-assets/0922-figures/26-homunculus-zh.png)

*感觉小人。脚和生殖器在中央沟内侧，手和脸在外侧，手指、嘴唇、舌的代表区大得不成比例。运动小人画在中央前回，比例关系与此同类。这张是体感皮层的卡通，不是运动皮层的电刺激原图。OpenStax，《Anatomy and Physiology 2e》图 14.23。https://openstax.org/books/anatomy-and-physiology-2e/pages/14-2-central-processing*

Lawrence 与 Kuypers（1968）在猴上做了两类切断：

- 双侧锥体束（皮质脊髓束的主要通路）切断后，姿势和粗大运动大多还能做，独立的手指运动明显变差。笔记里的“吃苹果不用手抓”，指的就是失去精密抓握。
- 再切断脑干下行通路后，姿势、行走这些轴心和近端运动也垮掉。

**待核实：** “4 年后运动正常”的时间，本次核对的 Lawrence & Kuypers（1968）摘要没有支持“满 4 年才恢复、且恢复到正常”。可靠的对照是：粗大运动可恢复，精密手指运动长期受损。年数以课件为准。

Georgopoulos、Schwartz 与 Kettner（1986）的结果是：单个运动皮层细胞对运动方向有选择性，但是很宽，大致呈余弦调谐，一个细胞覆盖一大片方向；动物能做得很准，是因为一群细胞各自按偏好方向加权之后，群体向量（population vector）指向实际运动方向。单细胞宽调谐和群体精确估计并不矛盾。群体向量的原图见 *Science* 233:1416–1419。https://doi.org/10.1126/science.3749885

同时记录几百个神经元时，它们并不在几百个独立方向上乱走。大部分方差落在少数几个协同变化的模式上，这些模式张成的低维空间就是神经流形（Gallego, Perich, Miller & Solla, 2017）。

Kaufman、Churchland、Ryu 与 Shenoy（2014）把这个空间再分成两截：

- 输出零空间：群体活动沿这些方向变化时，在所拟合的线性肌电读出中相互抵消，不改变该读出量。准备期的方向信息主要待在这里。
- 输出有效空间（output-potent dimension）：群体活动沿这些方向变化时，所拟合的肌电读出量随之改变。零空间和有效空间都相对于特定读出模型定义，不意味着零空间对所有下游都没有作用。

“两个神经元的和不变”可用这篇论文图 2 的教学模型。下面三张图依次展示教学模型、群体轨迹和相对于肌电读出的实验证据。

![Kaufman 2014 图2](/blog-assets/0922-figures/31-kaufman-fig2-zh.png)

*Kaufman 等（2014）图 2。假设一块肌肉只接收两个神经元，输出是二者发放率的线性相加。蓝线是输出零空间：神经元 1 高、2 低，或反过来，和都不变，肌肉分不出这两种状态。绿线是输出有效空间：和一变，肌肉输出就变。准备期两种伸手（向左、向右）只沿蓝线分开，手仍停着；出发信号之后活动也走上绿线，动作才发生。四周小图是这两个细胞，以及零空间、有效空间上的时间过程。T 是目标出现，G 是出发信号。*

![Kaufman 2014 图3](/blog-assets/0922-figures/32-kaufman-fig3-zh.png)

*Kaufman 等（2014）图 3。*

**读图与解释。** a：把左边神经元按常数 c = 0.37 加权，加到中间那个神经元上。单独看，准备期调谐相对运动期分别是 25% 和 150%；加完之后掉到 16%。两个细胞只能抵消一部分，细胞多了抵消更干净。颜色按左边神经元的准备期活动来分。b：真实群体数据的二维线性读出，维度用 jPCA 找出。每条线是一个试次平均条件。蓝是准备期，灰点是出发信号当时的状态，绿是运动期，红椭圆是准备活动的 2 倍标准差。不同条件的准备活动主要铺在一个方向上，运动期则两个方向都走，和上面图 2 的预言一致。左为猴 J，右为猴 N。

![Kaufman 2014 图4](/blog-assets/0922-figures/33-kaufman-fig4-zh.png)

*Kaufman 等（2014）图 4。*

**读图与解释。** 这里的维度是相对肌电找出来的，不再是示意图。a：一个输出零维度。目标出现后，不同条件的投影已经分开。b：一个输出有效维度。准备期各条件几乎叠在一起，运动开始后才散开。这一对示例维度的调谐比是 9.2。横条标出检验时段（目标出现前 100 ms 到后 400 ms）和回归时段（运动开始前 50 ms 到后 600 ms）。c：四个数据集里，准备期调谐大部分落在零空间（灰），有效空间（黑）只占一小截。柱上的倍数都显著大于 1。d：按时间看，零空间的调谐在目标出现后很快升起，有效空间要到运动附近才起来。细线是按条件重抽样得到的标准误。

Churchland 等（2012）进一步看到，伸手时群体活动在这个低维空间里画出一段短暂的旋转。准备活动像是把旋转的初始相位和幅度设好，而不是把每一块肌肉的发射率直接写成运动参数。下面两张图来自作者手稿（PMC3393826）。

![Churchland 2012 图1](/blog-assets/0922-figures/34-churchland-fig1-zh.png)

*Churchland 等（2012）图 1。上排是单个记录，下排是群体状态投到 jPCA 平面上。a、d：水蛭游泳，发放率按大约 1.5 Hz 振荡，群体状态在平面里转圈。b、e：猴子走路，大约 1 Hz，同样转圈。c、f：猴子伸手。单个细胞的发放率只起伏大约一个周期，群体状态也只转不到一圈，黑点是运动开始。伸手本身不是节律运动，但群体轨迹仍是一段短旋转。*

![Churchland 2012 图3](/blog-assets/0922-figures/35-churchland-fig3-zh.png)

*Churchland 等（2012）图 3。每个子图是一只猴子、一次记录里的全部伸手条件。圆点是准备期末的群体状态，曲线是此后 200 ms 的运动相关活动，箭头是时间方向。颜色按准备状态在 jPC1 上的投影来分。六个数据集里，不同方向的伸手都往同一个旋转方向走；圆点落在哪一侧，决定了旋转从哪个相位、以多大半径出发。手是直的还是弯的，并不决定神经状态往哪边转。a、b 是直达；c–f 里直达和弯曲伸手混在一起。*

流形、零空间和有效空间放在一起的综述图是 Gallego 等（2017）。下面两张来自该文作者手稿（PMC6122849）。

![Gallego 2017 图1](/blog-assets/0922-figures/36-gallego-fig1-zh.png)

*Gallego 等（2017）图 1，神经流形假说。A：两个潜变量（绿、蓝）以不同权重加到各个神经元上。B：三个神经元的发放，写成这两个潜变量的线性组合再加噪声。C：三个神经元张成的空间里，群体轨迹大部分贴着灰平面走，这张平面就是神经流形，由神经模式 u1、u2 张成。D：流形也可以是弯曲的，线性方法只是在任务用到的一小块上取一个平面近似。E：两个任务各自看到的平面，可能是同一张大流形上的两块局部近似，也可能是两套并不共用模式的流形。*

![Gallego 2017 图3](/blog-assets/0922-figures/37-gallego-fig3-zh.png)

*Gallego 等（2017）图 3，运动皮层里的神经模式，各幅改绘自不同实验。*

**读图与解释。** A：准备期，八个目标在三维流形上分成八团（Santhanam 等，2009）。B：目标出现前试次很散，Go 信号附近轨迹收拢（Churchland 等，2010）。C：和上面 Kaufman 的结果同一结构。左图准备期沿一个方向铺开；右上是相对肌电的输出零空间，目标一出现条件就分开；右下是输出有效空间，要到运动附近才分开（Kaufman 等，2014）。D：准备模式和运动模式张在互相正交的方向上。彩点是各目标的初始状态，运动轨迹主要落在灰色的运动平面里（Elsayed 等，2016）。

**常见误区。** 零空间不是“这些细胞不重要”。它们在准备动作，只是这份准备暂时不泄漏到肌肉。旋转描述的是群体状态轨迹，不是肌肉在画圆；旋转动力学和输出零空间来自不同分析，不能合并成所有准备活动必然“旋转进有效空间”的规则。

**脑机接口里怎么用。** 若解码器把准备期的零空间活动当成运动指令，光标会在人还没想动的时候漂走。群体向量、流形和零空间，是后来运动脑机接口把“准备”和“执行”分开的概念基础。这一句是联系，不是本节实验。

---

### 2.5 指令已经发出，为什么仍然离不开感觉？

   254|#### 看得见物体，为什么仍可能抓不准？

M/P通路与背侧/腹侧视觉流属于不同层级的组织方式。先分清它们，再看“认得出”和“做得准”为什么可以分离。

**大细胞通路与小细胞通路。** 这两类通路从视网膜就已分化，到外侧膝状体（lateral geniculate nucleus，LGN）还保持分层，然后进入初级视皮层。

| | 大细胞通路（magnocellular pathway，M） | 小细胞通路（parvocellular pathway，P） |
| --- | --- | --- |
| 视网膜起点 | 伞状节细胞，树突野大，感受野大 | 侏儒节细胞，感受野小，常常只对着很少几个视锥 |
| 外侧膝状体 | 腹侧两层，第 1、2 层 | 背侧四层，第 3–6 层 |
| 进入 V1 | 第 4Cα 层 | 第 4Cβ 层 |
| 时间 | 反应快、短暂，对闪烁和运动敏感 | 反应较持续 |
| 空间与对比 | 对比阈值低，粗的亮度变化就能驱动；空间细节差 | 空间分辨率高，负责细结构 |
| 颜色 | 主要看亮度差，颜色分辨弱 | 红–绿颜色拮抗，承担大部分颜色和细节 |

两套之外还有粒状细胞通路（koniocellular pathway，K），夹在大、小细胞层之间，和蓝–黄颜色有关。所以视网膜出去的并行通道不止 M 和 P。

M 的主要去向是中颞区（MT/V5）和顶叶，所以它给背侧流提供了运动和粗定位。P 的主要去向是 V4 和下颞叶，所以它给腹侧流提供了颜色和精细形状。这是偏向，不是一一对应：背侧流里也有 P 的输入，腹侧流里也有 M 的输入。把“M = 背侧、P = 腹侧”画成两根互不相通的管子，会把交叉输入画丢。

**背侧通路与腹侧通路。** 这一分叉在初级视皮层之后。两条流都从枕叶出发，终点和用途不同（Goodale & Milner, 1992）。

| | 背侧通路（dorsal pathway） | 腹侧通路（ventral pathway） |
| --- | --- | --- |
| 路线 | 枕叶经 MT，到后顶叶 | 枕叶经 V4，到下颞叶 |
| 要回答的问题 | 手该伸到哪、手腕该转多少、缝相对手指在什么位置 | 这是什么东西、什么颜色、什么形状 |
| 坐标 | 为动作服务，常换成相对手和身体的坐标 | 为辨认服务，更接近物体本身的描述 |
| 旧标签 | 早期写成 where，位置 | 早期写成 what，物体 |
| 课堂用的分法 | 视觉引导的动作 | 知觉性辨认 |

Goodale 与 Milner 强调的是用途，不是“背侧没有形状、腹侧没有位置”。背侧也用形状，用的是为了把手送进缝里；腹侧也用位置，用的是为了说出物体关系。图上的 Where / What 是更早的叫法。

**怎样从损伤看到功能分离？** 课堂中的症状描述可帮助理解两种加工需求，但缺少完整病例资料，不能据此确定具体损伤范围。

- 背侧通路受伤：伸手穿过缝隙很困难。缝的方向他知道，知觉性判断还在；出问题的是把这个视觉信息变成伸手的决策，手的方向和开口对不齐。这类表现可见于视觉性共济失调（optic ataxia）。
- 腹侧通路受伤：照着图像画，画得很好，但是说不出画的是什么。临摹还在，辨认掉了。两条能力分开，就是笔记里的分离现象。

一个病人能认出、不能按视觉把手指进缝；另一个能照着画出来、不能叫出名字。这提示辨认和视觉引导动作可部分分离，不表示两条通路各只承担一种功能。

![背侧与腹侧视觉流](/blog-assets/0922-figures/11-visual-streams-zh.png)

*两条视觉流的教材画法。*

**读图与解释。** 背侧（粉）从枕叶到顶叶，图上写成 “Where is it?”；腹侧（绿）到颞叶，写成 “What is it?”。这是 Ungerleider 与 Mishkin 的旧标签。Goodale 与 Milner（1992）把背侧改成“怎么伸手去做”，腹侧仍是“这是什么”。看图时用课堂的动作/知觉区分，不要停在“哪里/什么”。OpenStax College，图 “Visual Streams”。https://commons.wikimedia.org/wiki/File:1424_Visual_Streams.jpg

论文：Goodale & Milner, 1992, *Trends in Neurosciences* 15:20–25。https://doi.org/10.1016/0166-2236(92)90344-8

#### 不看自己的手，如何知道它在哪里？

本体感觉是身体报告“关节在什么角度、肌肉被拉长了多少”的感觉，感受器主要在肌梭和关节。PIEZO2 是机械敏感离子通道。Woo 等（2015）证明它是小鼠本体感觉的主要转导通道。Chesler 等（2016）报告了携带 PIEZO2 失活变异的人：辨别性触觉和关节位置觉严重下降，没有视觉时共济失调和辨距不良更明显；他们仍能走、说、写。这说明：动作指令还在，缺少“肢体现在在哪”的反馈，所以动得出来，但对不齐自己的意图。

**推荐图。** Chesler et al., 2016, *New England Journal of Medicine*，闭眼与睁眼时的运动学比较。链接：https://doi.org/10.1056/NEJMoa1602812

#### 反馈来得太晚，系统怎样仍然及时控制？

**反馈控制**根据实际感觉与目标的偏差修正动作；**前馈控制**利用已知目标、扰动或内部预测提前发令，不等待本次动作的感觉误差返回。两者都有神经传导和计算延迟，“前馈”不等于零延迟。

| 眼动行为 | 主要输入与作用 | 为什么不能与一种控制机制简单画等号？ |
| --- | --- | --- |
| 平滑追踪（smooth pursuit） | 根据运动目标的视觉信息让眼睛跟随 | 既包含视网膜滑移驱动的视觉反馈，也可利用目标规律进行预测 |
| 前庭眼反射（VOR） | 用头部运动的前庭信号驱动反向眼动，稳定视网膜像 | 快速补偿不必等待视网膜报错；视觉误差还参与长期增益适应 |

![前庭眼反射](/blog-assets/0922-figures/09-vor-zh.png)

*水平前庭眼反射：头转向一侧时，前庭输入经脑干环路协调两侧眼外肌，让眼睛向相反方向转。图源：OpenStax，Vestibulo-Ocular Reflex。*

因此应先明确“相对于什么误差闭环”：VOR利用头动信息迅速补偿；如果讨论视网膜像的稳定，它不能简单叫作等待视觉误差的反馈。这种前庭与视觉控制的配合，也是[闭环小脑系统研究](https://elifesciences.org/articles/84770)讨论的问题。

内部模型提供了另一种克服延迟的思路（[Kawato，1999](https://doi.org/10.1016/S0959-4388(99)00028-8)）：

- **逆向模型**：从期望轨迹估计所需运动指令，可参与前馈控制。
- **前向模型**：从运动指令副本和当前状态预测运动及感觉后果，可用于状态估计与误差比较。

前馈、反馈、前向模型、逆向模型不是两组同义词。真实控制可以把它们组合使用：先预测，再用感觉更新；感觉也参与模型的学习。

---

### 2.6 感觉有延迟，小脑怎样帮助预测和学习？

**细胞数。** Herculano-Houzel（2010）比较多种哺乳动物后得出：小脑神经元数量与大脑皮层神经元数量按比例一起增长，平均约为皮层的 3.6 倍。所以“体积小，神经元却占全脑的大部分”这一课堂印象，和细胞计数的方向一致。颗粒细胞占了其中绝大多数。皱褶表面下的白质呈树枝状，叫活树（arbor vitae）。

![小脑的位置和切面](/blog-assets/0922-figures/27-cerebellum-zh.png)

*上：小脑切面，可见深部白质和紧邻的脑桥、下橄榄（棱镜适应依赖的爬行纤维来源）。下：磁共振上小脑染成紫色，贴在脑干后方。OpenStax，《Anatomy and Physiology 2e》图 13.13。https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system*

**损伤后出现哪些可分离的困难？**

1. 指鼻、指点交替时指不准：辨距不良。它提示幅度与协调控制受损，但不能单靠这一症状定位到某一种计算模型。
2. 走路摇晃：时序和多关节协调散了，平衡修正来得不合拍。
3. 棱镜眼镜掷飞镖：健康人起初偏到棱镜把目光弯过去的那一侧，投十几到三十次后改准；摘掉眼镜后会暂时偏到相反一侧，这叫负后效，也就是通常所说的适应后效。Martin 等（1996）发现，橄榄小脑通路、下小脑脚、脑桥到小脑的苔藓纤维通路损伤时，这种适应减弱或消失。有的后下小脑动脉梗死病人几乎没有共济失调，适应却没了；有的上小脑动脉或小脑丘脑损伤共济失调明显，适应还在。所以“指不准”和“学不会新映射”可以分开。

**小脑运动学习的突触机制（synaptic mechanism of cerebellar motor learning）。** 爬行纤维带来的是“这次错了”的教学信号，平行纤维带来的是感觉或指令的情境。两者一起出现时，平行纤维到浦肯野细胞的突触发生长时程压抑（long-term depression，LTD），以后同样情境下浦肯野细胞的简单棘波输出改变，动作被校准。这是经典的关联性LTD模型；小脑还存在其他突触与内在可塑性，爬行纤维信号也不只编码单一运动误差。

![小脑的输入与皮层环路](/blog-assets/0922-figures/39-sathyanesan-fig1-zh.png)

*Sathyanesan 等（2019）图 1，作者手稿。a：进、出小脑的大路。橙色经脑桥进入，蓝色来自下橄榄。b：皮层细胞。橙色浦肯野细胞，品红颗粒细胞，蓝色爬行纤维来自下橄榄，灰色苔藓纤维来自脑和脊髓的核团。紫色是分子层中间神经元，绿色是高尔基细胞，青色是单极刷状细胞。实线兴奋，虚线抑制。本图选取a、b，聚焦输入输出与局部微环路。https://doi.org/10.1038/s41583-019-0152-2*

**图 a：情境和误差从不同的门进来。** 进小脑的兴奋性输入分成两路。橙色来自脑桥核，脊髓来的感觉走同一类入口，进皮层以后成为苔藓纤维。课堂说的“当时的情境”先走这扇门，并不直接撞上浦肯野细胞。蓝色来自下橄榄，进皮层以后成为爬行纤维，直接爬到浦肯野细胞上，带的是误差。出去的路画在左侧：小脑核经丘脑回到大脑皮层。浦肯野细胞的放电一变，回到皮层的信号就变，下一次动作被校准。Martin 等看到的橄榄小脑通路和脑桥—苔藓纤维通路，就是图上这两扇门；两扇都坏了，棱镜适应会减弱。

**图 b：一条情境要穿过很多棵树。** 灰线是苔藓纤维，止在品红颗粒细胞的树突上，释放谷氨酸。颗粒细胞的轴突没有髓鞘，升到分子层后分成 T 形，两臂就是平行纤维。平行纤维沿叶片左右排开，也就是图上的冠状方向；浦肯野细胞的树突是扁的，摊在前后方向，也就是矢状方向。所以一条平行纤维穿过许多棵浦肯野细胞，一棵浦肯野细胞又被极多条平行纤维穿过。综述的 Box 1 给了数量：新皮层一个锥体细胞大约 8000 个突触，一个浦肯野细胞大约 20 万个；多出来的，主要是颗粒细胞经平行纤维送上来的。蓝线是爬行纤维，沿橙色树突向上爬，也释放谷氨酸。综述写明，经爬行纤维到达浦肯野细胞的信息，对小脑形式的联合学习是关键的。和课堂合在一起就是：爬行纤维标记“这一次要改”，当时正活动的那几条平行纤维突触发生长时程压抑，其余大量平行纤维仍留着别的情境。

**图上另外几种细胞，调节的是情境的强度。** 紫色是分子层中间神经元，位于分子层。平行纤维兴奋它们，它们再用 GABA 抑制浦肯野细胞。同一条情境因此有两手：直接兴奋浦肯野细胞，同时经中间神经元抑制它。绿色是高尔基细胞，位于颗粒层。它接收苔藓纤维，再抑制颗粒细胞，等于在情境变成平行纤维之前先调节音量。青色是单极刷状细胞，颗粒层里的局部兴奋性中间神经元；课堂这条学习规则不靠它。浦肯野细胞是这层皮层往小脑核去的输出，本身是抑制性神经元。简单棘波一变，小脑核受到的抑制跟着变，再经丘脑影响皮层。

**这些学习是否只由一种内部模型解释？** 前向预测是理解小脑的重要假说，不能把它当作小脑唯一的已证实计算。Wolpert、Miall 与 Kawato（1998）的综述两面都写了：眼追随反应支持小脑里有逆向模型；用预测克服反馈延迟，则支持前向模型。同一篇综述给出的图 1，是逆向模型如何被反馈误差训练。因此“主要是前向模型”是课堂采取的立场，不是该综述的唯一结论。复习时两者都要能说清，并标明老师强调的是前向模型。

**推荐图。**

- Wolpert, Miall & Kawato, 1998, *Trends in Cognitive Sciences* 2(9)，图 1（小脑反馈误差学习）与图 2（眼追随环路）。链接：https://doi.org/10.1016/S1364-6613(98)01221-2
- Martin et al., 1996, *Brain* 119:1183–1198，棱镜投掷的适应曲线。链接：https://doi.org/10.1093/brain/119.4.1183
- 同组第二篇写负后效和校准如何长期保存：Martin et al., 1996, *Brain* 119:1199–1211。链接：https://doi.org/10.1093/brain/119.4.1199

---

### 2.7 动作很多，基底神经节怎样参与选择？

基底神经节不直接支配骨骼肌。它们通过调节下游活动，参与动作选择、活力与学习。SNr 是主要输出核之一，平时用 GABA 抑制脑干和丘脑；经典模型以去抑制解释部分动作的释放，真实神经活动还包含更复杂的增减变化。

![基底核的位置](/blog-assets/0922-figures/21-basal-nuclei-zh.png)

*额状切面上的基底核。纹状体包括尾状核和壳，其内侧是苍白球。黑质网状部在这张切面上更靠下，没有单独标出。OpenStax，《Anatomy and Physiology 2e》第 13.2 节。https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system*

![基底核环路](/blog-assets/0922-figures/22-basal-ganglia-loop-zh.png)

*皮层兴奋纹状体。直接路：纹状体抑制 GPi/SNr，从而少抑制丘脑，动作被放开。间接路绕经 GPe 和丘脑底核。黑质致密部（SNc）的多巴胺调这两条路；多巴胺神经元丢失，就是笔记里的帕金森病起点。OpenStax，《Anatomy and Physiology 2e》第 13.2 节。同上链接。*

中脑多巴胺神经元丢失后，这条选择环路的平衡被打乱，出现运动减少、强直等帕金森症状。这里的病理主线是多巴胺缺失改变环路调节，而非肌肉本身失去收缩能力。

“不同 SNr 神经元投射到不同脑干靶区”有直接解剖证据。McElvain 等（2021）在小鼠里把 SNr 的输出画全了。要回答的问题是：SNr 是一群混在一起、每颗细胞都投向所有下游的总开关，还是位置分开的几群细胞、各管一个脑干对象。答案是后者，但每群细胞同时还抄一份侧支到同一组公共靶区。下面按“输出在哪里—各群是否不同—是否有共同侧支”的顺序读五张图。

![McElvain 2021 图1](/blog-assets/0922-figures/39-mcelvain-fig1-zh.png)

*McElvain 等（2021）图 1。*

**读图与解释。** 先看 A 和 B 两张假说。A：细胞在 SNr 里混在一起，每颗都投向所有彩色靶区，只是轴突多少不同。B：不同颜色的细胞占 SNr 的不同位置，各自只投一个靶区。后面的实验否定了 A，也没有做成严格的一对一；实际是 B 的位置分开，再加上每群都有的公共侧支。C：SNr 里发 GABA 的神经元（Slc32a1，绿）绝大多数同时表达小清蛋白（Pvalb，红），约 87%；多巴胺神经元（TH）只占很小一块，所以后面标的主要是抑制性输出。D：在 PV-Cre 小鼠的 SNr 打依赖 Cre 的病毒，轴突膜上是绿色 mGFP，突触前末梢是红色 synaptophysin-mRuby。E–G：间脑里的运动丘脑（VA、VM）、板内/中线丘脑（MD、Pf）和未定带。H–K：中脑上丘的外侧、中央、内侧，以及中脑、脑桥（PNo）、延髓（PcRT、IRT）网状结构，还有脚桥核和中缝背核。L：红色是全脑重建出来的末梢，从间脑一直铺到延髓。

![McElvain 2021 图2](/blog-assets/0922-figures/40-mcelvain-fig2-zh.png)

*McElvain 等（2021）图 2。*

**读图与解释。** 42 个靶区的轴突密度连续排开，最密和最疏大约差五十倍，不是“有或没有”两档。A 左：末梢密度，以腹内侧丘脑（VM）为 1；空心点是每只小鼠，黑点是平均。最密的是运动丘脑 VA/VM、脚桥核（PPN）、上丘中央和外侧。最疏的一端包括楔状核（CnF）。A 中：把核团体积乘进去。A 右和 D：总末梢量（密度 × 体积）主要堆在体积大的脑干网状结构和上、下丘，这两块合计约占三分之二；其余三十多个核团每个都不到总输出的 2%。所以“密度最高”和“拿走的轴突最多”不是同一份名单。B、C：密度大致按指数往下掉，最密的那几个才是平台。

密度图只说明轴突落到哪里，还没说明是不是同一群细胞。下一步是从体积大的脑干核团做逆向示踪，再只记录被标上的那颗 SNr 细胞。

![McElvain 2021 图4](/blog-assets/0922-figures/41-mcelvain-fig4-zh.png)

*McElvain 等（2021）图 4。*

**读图与解释。** A：每个动物只往一个脑干靶区打逆向荧光，再在切片上找发荧光的 SNr 细胞做全细胞膜片钳。B–D：投向上丘外侧（LSC，绿）和上丘中央（CSC，浅蓝）的细胞锋电位又窄又快，自发发放和最高发放都高；投向上丘内侧（MSC，黄）和下丘（IC，浅绿）的较慢。后脑里，脑桥网状结构（PNo，深蓝）和延髓网状结构（Med，紫）也是快细胞；中缝背核（DR，红）是整团里最慢的，发放低、时间常数长。每一群只占全 SNr 电生理范围的一段，没有一群铺满所有性质。E：超极化之后的反跳。投向延髓网状结构和下丘的反跳最强，瞬时发放平均大约 69 Hz 和 58 Hz；投向中缝背核的几乎不反跳。F：这些细胞在 SNr 里不是散的。快的、投向感觉运动相关靶区的细胞偏外侧，这里接着纹状体感觉运动区的输入；慢细胞偏内侧，对着联合区纹状体，另有一小簇在最背侧、伸进黑质外侧部，对着听觉纹状体。

从丘脑（VA、MD、Pf）或脚桥核逆向标回来的细胞正好相反：电生理铺满整个 SNr，胞体也铺满整个核，和随机抽到的 SNr 细胞分不开（该文图 5，这里不嵌）。看起来像“丘脑和脚桥核由另一类混杂细胞负责”。图 6 说明那是侧支造成的假象。

![McElvain 2021 图6](/blog-assets/0922-figures/42-mcelvain-fig6-zh.png)

*McElvain 等（2021）图 6。*

**读图与解释。** A：往一个下游核团打逆向的、带 Cre 的慢病毒，只感染投向这个核团的 SNr 细胞；再往 SNr 打依赖 Cre 的 AAV，让这群细胞和它们的全部轴突发黄色荧光。这样能看见侧支，而不是只看见注射点那一头。B–D 是一个例子：从延髓网状结构标回来的细胞，轴突回到延髓（C），同时也出现在 VA、MD、Pf、VM、CL 等丘脑，以及脚桥核（D）；上丘、下丘、中缝背核这些别的大靶区里几乎没有。E：每一行是从左边那个核团标回来的一群细胞，横轴是脑里其他地方的轴突密度，高度相对于注射点本身。黑柱是别的大脑干核团，灰柱是小的运动前核团，蓝柱是间脑。规律是：每一群都密密地侧支到间脑、脚桥核和中脑网状结构，却很少侧支到彼此的“专线”脑干靶区。例外是下丘那一行：间脑侧支弱，脚桥核和中脑网状结构仍有。最上一行如果从脚桥核标，侧支出现在几乎所有其他靶区，因为脚桥核本来就收着各专线抄来的那一份。F 和 G：间脑侧支的强度比较匀，脑干侧支则大多很弱、少数很强。

所以丘脑和脚桥核收到的是许多专线亚群各自抄来的侧支，不是单独一种“只投丘脑”的细胞。专线之间互相抄得很少。公共侧支为并行协调提供了解剖基础；是否在具体行为中传递同样的信息，还需要活动记录与干预验证。

![McElvain 2021 图8](/blog-assets/0922-figures/43-mcelvain-fig8-zh.png)

*McElvain 等（2021）图 8，把上面的结果收成一张。*

**读图与解释。** A：投向上丘、下丘的细胞（左）偏 SNr 头侧；投向中缝背核、延髓和脑桥网状结构的细胞（右）偏尾侧。上丘这条线上，下丘最靠外、靠背，上丘从内侧到外侧对应 SNr 头侧从内到外。后脑这条线上，中缝背核、脑桥网状结构、延髓网状结构在尾侧 SNr 上从内到外排开。B：每一条颜色是一群细胞。上方虚线框是所有群共有的侧支：脚桥核、中脑网状结构、运动丘脑、板内核、未定带。右侧色块是这一群自己的脑干专线，色块上的小字是这条专线还顺带碰到的小核团。最右一列是作者按这些下游核团已经知道的功能配上的行为方向，不是这篇论文里刺激每群细胞后测出来的行为。从上到下大致是：下丘一带，防御和行走；延髓网状结构，口面部和头的朝向；上丘外侧，同样偏口面部和头；上丘中央，眼动；脑桥网状结构，后肢和肌张力；中缝背核，调制；上丘内侧，又是防御和行走。

这组研究支持“平行输出通道加共同侧支”的组织方式。经典去抑制模型可以帮助理解动作释放，但真实SNr活动具有异质性，动作相关变化也不全是暂停。解剖投射、电生理性质和行为因果是三层证据；图8的功能归纳不能替代逐群干预实验。

Roseberry 等（2016）把这条线接到行走上：基底神经节以细胞类型特异的方式控制脑干行走环路。和 2.3 的 MLR 连起来读：基底神经节可以影响脑干行走环路，MLR的不同群体参与速度与步态调节；这不是唯一的串联控制链。脚桥核既是这里的公共侧支靶，也是 2.3 里 MLR 偏慢速行走的那一部分。

**常见误区。** 帕金森病不是“肌肉或运动皮层坏了”。损伤在多巴胺对基底神经节的调节，所以人想动、也还知道怎么动，但动作难以启动、幅度变小。这和 PIEZO2 缺陷相反：那里是指令在、感觉位置不在。

---

## 用六个问题串起本节

1. **力从哪里来？** α运动神经元经神经肌肉接头触发肌纤维兴奋，Ca²⁺调控肌丝滑动；γ运动神经元调节肌梭敏感度。
2. **每一步都要大脑下令吗？** 反射依赖感觉输入，CPG能在适当激活条件下组织节律，两者在真实行走中相互作用。
3. **动作怎样被调用？** 脑干下行系统参与速度、步态、姿势及特定动作协调，不能压缩成一个总开关。
4. **准备为何没有立即变成动作？** 群体活动可在相对于肌电读出的零空间中变化；旋转动力学是另一种群体结构，不能与零空间简单等同。
5. **动作怎样变准？** 视觉和本体感觉提供当前状态，预测与反馈共同克服延迟；小脑参与协调、适应和多种形式的学习。
6. **如何在动作之间选择？** 基底神经节通过并行输出影响多个下游系统；共同侧支提供协调的结构基础，具体行为功能仍需因果检验。

---

## 术语表

| 中文 | 英文 | 缩写 | 在本节中的意思 |
| --- | --- | --- | --- |
| 运动神经元池 | motor pool | — | 支配同一块肌肉的运动神经元全体 |
| α 运动神经元 | alpha motor neuron | — | 支配梭外肌，产生收缩 |
| γ 运动神经元 | gamma motor neuron | — | 支配梭内肌，调节肌梭 |
| 牵张反射 | stretch reflex | — | 肌肉被突然拉长后的自动收缩，如膝跳 |
| 中枢模式发生器 | central pattern generator | CPG | 不靠上级定时也能产生节律的环路 |
| 运动音节 | motor syllable；实验文献中常称 behavioral syllable | — | 可复用的短动作单元；复杂动作由这些单元排序拼接而成 |
| 腹侧中间神经元 V0–V3 | ventral interneurons V0–V3 | — | 脊髓四个祖细胞域产生的行走环路细胞；遗传切除后，左右交替、步频或节律稳健性分别受损 |
| 中脑行走区 | mesencephalic locomotor region | MLR | 中脑里能启动并调节行走的区域 |
| 脚桥核 | pedunculopontine nucleus | PPN | MLR 中偏慢速探索行走的部分 |
| 楔状核 | cuneiform nucleus | CnF | MLR 中偏高速逃离步态的部分 |
| 延髓网状结构腹侧部 | medullary reticular formation, ventral part | MdV | 特异联系前肢运动神经元的脑干核 |
| 运动小人 | motor homunculus | — | 电刺激画出的身体在运动皮层上的代表图 |
| 皮质脊髓束 | corticospinal tract | — | 皮层到脊髓的下行通路，与手指独立运动关系密切 |
| 群体向量 | population vector | — | 许多宽调谐细胞按偏好方向加权后的合向量 |
| 神经流形 | neural manifold | — | 群体活动实际占据的低维空间 |
| 输出零空间 | output-null dimension | — | 有神经活动但不改变肌肉输出的方向 |
| 输出有效空间 | output-potent dimension | — | 沿此方向变化会改变所拟合的肌电读出 |
| 背侧视觉通路 | dorsal visual pathway | — | 枕叶到顶叶，服务视觉引导的动作 |
| 腹侧视觉通路 | ventral visual pathway | — | 枕叶到下颞叶，服务物体辨认 |
| 大细胞通路 | magnocellular pathway | M | 视网膜到外侧膝状体第 1、2 层；快、粗、对运动敏感，主要供给背侧流 |
| 小细胞通路 | parvocellular pathway | P | 视网膜到外侧膝状体第 3–6 层；细、颜色拮抗，主要供给腹侧流 |
| 本体感觉 | proprioception | — | 肢体位置与运动的感觉 |
| 前庭眼反射 | vestibulo-ocular reflex | VOR | 以头动前庭输入驱动反向眼动，稳定视网膜像 |
| 平滑眼动追踪 | smooth pursuit | — | 跟随运动目标，结合视觉反馈与预测 |
| 前向模型 | forward model | — | 由指令预测感觉后果 |
| 逆向模型 | inverse model | — | 由期望轨迹计算运动指令 |
| 苔藓纤维 | mossy fiber | mf | 来自脑桥、脊髓等的输入，先止于颗粒细胞，情境由此进入小脑 |
| 颗粒细胞 | granule cell | GC | 数量极多；轴突升到分子层后分成 T 形，成为平行纤维 |
| 平行纤维 | parallel fiber | pf | 颗粒细胞的 T 形轴突，把当时的感觉或指令情境送到许多浦肯野细胞 |
| 爬行纤维 | climbing fiber | cf | 下橄榄的轴突，爬上浦肯野细胞树突，带来“这次错了”的教学信号 |
| 浦肯野细胞 | Purkinje cell | PC | 小脑皮层的输出细胞，抑制小脑核；简单棘波随平行纤维突触的强弱而变 |
| 高尔基细胞 | Golgi cell | GoC | 颗粒层的抑制性细胞，调节颗粒细胞，从而调节进入平行纤维的情境 |
| 分子层中间神经元 | molecular layer interneuron | MLI | 被平行纤维兴奋，再抑制浦肯野细胞 |
| 帕金森病 | Parkinson disease | PD | 此处指中脑多巴胺丢失后的运动环路失调 |
| 黑质网状部 | substantia nigra pars reticulata | SNr | 基底神经节的主要输出核之一 |

---

## 参考文献

Bellardita, C., & Kiehn, O. (2015). Phenotypic characterization of speed-associated gait changes in mice reveals modular organization of locomotor networks. *Current Biology, 25*(11), 1426–1436. https://doi.org/10.1016/j.cub.2015.04.005

Bizzi, E., & Cheung, V. C. K. (2013). The neural origin of muscle synergies. *Frontiers in Computational Neuroscience, 7*, 51. https://doi.org/10.3389/fncom.2013.00051

Caggiano, V., Leiras, R., Goñi-Erro, H., Masini, D., Bellardita, C., Bouvier, J., Caldeira, V., Fisone, G., & Kiehn, O. (2018). Midbrain circuits that set locomotor speed and gait selection. *Nature, 553*(7689), 455–460. https://doi.org/10.1038/nature25448

Chesler, A. T., Szczot, M., Bharucha-Goebel, D., Čeko, M., Donkervoort, S., Laubacher, C., Hayes, L. H., Alter, K., Zampieri, C., Stanley, C., Innes, A. M., Mah, J. K., Grosmann, C. M., Bradley, N., Nguyen, D., Foley, A. R., Le Pichon, C. E., & Bönnemann, C. G. (2016). The role of PIEZO2 in human mechanosensation. *The New England Journal of Medicine, 375*(14), 1355–1364. https://doi.org/10.1056/NEJMoa1602812

Churchland, M. M., Cunningham, J. P., Kaufman, M. T., Foster, J. D., Nuyujukian, P., Ryu, S. I., & Shenoy, K. V. (2012). Neural population dynamics during reaching. *Nature, 487*(7405), 51–56. https://doi.org/10.1038/nature11129

Crone, S. A., Zhong, G., Harris-Warrick, R., & Sharma, K. (2009). In mice lacking V2a interneurons, gait depends on speed of locomotion. *The Journal of Neuroscience, 29*(21), 7098–7109. https://doi.org/10.1523/JNEUROSCI.1206-09.2009

Esposito, M. S., Capelli, P., & Arber, S. (2014). Brainstem nucleus MdV mediates skilled forelimb motor tasks. *Nature, 508*(7496), 351–356. https://doi.org/10.1038/nature13023

Gallego, J. A., Perich, M. G., Miller, L. E., & Solla, S. A. (2017). Neural manifolds for the control of movement. *Neuron, 94*(5), 978–984. https://doi.org/10.1016/j.neuron.2017.05.025

Georgopoulos, A. P., Schwartz, A. B., & Kettner, R. E. (1986). Neuronal population coding of movement direction. *Science, 233*(4771), 1416–1419. https://doi.org/10.1126/science.3749885

Goodale, M. A., & Milner, A. D. (1992). Separate visual pathways for perception and action. *Trends in Neurosciences, 15*(1), 20–25. https://doi.org/10.1016/0166-2236(92)90344-8

Harris-Warrick, R. M., & Flamm, R. E. (1987). Multiple mechanisms of bursting in a conditional bursting neuron. *The Journal of Neuroscience, 7*(7), 2113–2128. https://doi.org/10.1523/JNEUROSCI.07-07-02113.1987

Herculano-Houzel, S. (2010). Coordinated scaling of cortical and cerebellar numbers of neurons. *Frontiers in Neuroanatomy, 4*, 12. https://doi.org/10.3389/fnana.2010.00012

Kaufman, M. T., Churchland, M. M., Ryu, S. I., & Shenoy, K. V. (2014). Cortical activity in the null space: Permitting preparation without movement. *Nature Neuroscience, 17*(3), 440–448. https://doi.org/10.1038/nn.3643

Kawato, M. (1999). Internal models for motor control and trajectory planning. *Current Opinion in Neurobiology, 9*(6), 718–727. https://doi.org/10.1016/S0959-4388(99)00028-8

Kiehn, O. (2016). Decoding the organization of spinal circuits that control locomotion. *Nature Reviews Neuroscience, 17*(4), 224–238. https://doi.org/10.1038/nrn.2016.9

Lawrence, D. G., & Kuypers, H. G. J. M. (1968a). The functional organization of the motor system in the monkey. I. The effects of bilateral pyramidal lesions. *Brain, 91*(1), 1–14. https://doi.org/10.1093/brain/91.1.1

Lawrence, D. G., & Kuypers, H. G. J. M. (1968b). The functional organization of the motor system in the monkey. II. The effects of lesions of the descending brain-stem pathways. *Brain, 91*(1), 15–36. https://doi.org/10.1093/brain/91.1.15

Marder, E., & Bucher, D. (2001). Central pattern generators and the control of rhythmic movements. *Current Biology, 11*(23), R986–R996. https://doi.org/10.1016/S0960-9822(01)00581-4

Martin, T. A., Keating, J. G., Goodkin, H. P., Bastian, A. J., & Thach, W. T. (1996a). Throwing while looking through prisms: I. Focal olivocerebellar lesions impair adaptation. *Brain, 119*(4), 1183–1198. https://doi.org/10.1093/brain/119.4.1183

Martin, T. A., Keating, J. G., Goodkin, H. P., Bastian, A. J., & Thach, W. T. (1996b). Throwing while looking through prisms: II. Specificity and storage of multiple gaze–throw calibrations. *Brain, 119*(4), 1199–1211. https://doi.org/10.1093/brain/119.4.1199

McElvain, L. E., Chen, Y., Moore, J. D., Brigidi, G. S., Bloodgood, B. L., Lim, B. K., Costa, R. M., & Kleinfeld, D. (2021). Specific populations of basal ganglia output neurons target distinct brain stem areas while collateralizing throughout the diencephalon. *Neuron, 109*(10), 1721–1738. https://doi.org/10.1016/j.neuron.2021.03.017

Penfield, W., & Boldrey, E. (1937). Somatic motor and sensory representation in the cerebral cortex of man as studied by electrical stimulation. *Brain, 60*(4), 389–443. https://doi.org/10.1093/brain/60.4.389

Roseberry, T. K., Lee, A. M., Lalive, A. L., Wilbrecht, L., Bonci, A., & Kreitzer, A. C. (2016). Cell-type-specific control of brainstem locomotor circuits by basal ganglia. *Cell, 164*(3), 526–537. https://doi.org/10.1016/j.cell.2015.12.037

Ruder, L., Schina, R., Kanodia, H., Valencia-Garcia, S., Pivetta, C., & Arber, S. (2021). A functional map for diverse forelimb actions within brainstem circuitry. *Nature, 590*(7846), 445–450. https://doi.org/10.1038/s41586-020-03080-z

Sathyanesan, A., Zhou, J., Scafidi, J., Heck, D. H., Sillitoe, R. V., & Gallo, V. (2019). Emerging connections between cerebellar development, behavior, and complex brain disorders. *Nature Reviews Neuroscience, 20*(5), 298–313. https://doi.org/10.1038/s41583-019-0152-2

Takakusaki, K., Chiba, R., Nozu, T., & Okumura, T. (2016). Brainstem control of locomotion and muscle tone with special reference to the role of the mesopontine tegmentum and medullary reticulospinal systems. *Journal of Neural Transmission, 123*(7), 695–729. https://doi.org/10.1007/s00702-015-1475-4

Van de Crommert, H. W. A. A., Mulder, T., & Duysens, J. (1998). Neural control of locomotion: Sensory control of the central pattern generator and its relation to treadmill training. *Gait & Posture, 7*(3), 251–263. https://doi.org/10.1016/S0966-6362(98)00010-1

Wiltschko, A. B., Johnson, M. J., Iurilli, G., Peterson, R. E., Katon, J. M., Pashkovski, S. L., Abraira, V. E., Adams, R. P., & Datta, S. R. (2015). Mapping sub-second structure in mouse behavior. *Neuron, 88*(6), 1121–1135. https://doi.org/10.1016/j.neuron.2015.11.031

Wolpert, D. M., Miall, R. C., & Kawato, M. (1998). Internal models in the cerebellum. *Trends in Cognitive Sciences, 2*(9). https://doi.org/10.1016/S1364-6613(98)01221-2

Woo, S.-H., Lukacs, V., de Nooij, J. C., Zaytseva, D., Criddle, C. R., Francisco, A., Jessell, T. M., Wilkinson, K. A., & Patapoutian, A. (2015). Piezo2 is the principal mechanotransduction channel for proprioception. *Nature Neuroscience, 18*(12), 1756–1762. https://doi.org/10.1038/nn.4162

Zhang, Y., Narayan, S., Geiman, E., Lanuza, G. M., Velasquez, T., Shanks, B., Akay, T., Dyck, J., Pearson, K., Gosgnach, S., Fan, C.-M., & Goulding, M. (2008). V3 spinal neurons establish a robust and balanced locomotor rhythm during walking. *Neuron, 60*(1), 84–96. https://doi.org/10.1016/j.neuron.2008.09.027

University of Cambridge. (n.d.). *The master puppeteer: How the brain controls the body*. https://www.cam.ac.uk/news/the-master-puppeteer-how-the-brain-controls-the-body

Wolpert, D. (2011). *The real reason for brains* [Video]. TED.

---

## 原始课堂笔记

- [查看 Lesson 2 原始课堂笔记](/raw-notes/0922-bci-lesson-2-raw.md)

