---
title: "DNA 核苷酸组成"
description: "从脱氧核苷酸的碱基、脱氧核糖和磷酸组成出发，梳理 DNA 链方向、碱基配对、双螺旋和经典文献图。"
pubDate: 2026-09-23
tags: ["基因组学", "DNA", "分子基础"]
draft: false
---

# DNA 核苷酸组成

DNA 的单体是脱氧核苷酸。每个脱氧核苷酸含有一个含氮碱基、一分子 2-脱氧核糖和一分子磷酸。DNA 里有四种碱基：腺嘌呤（A）、胸腺嘧啶（T）、鸟嘌呤（G）、胞嘧啶（C）。两条链靠 A·T 和 G·C 的氢键维系，因此双链 DNA 里 A 与 T 的含量接近，G 与 C 的含量接近。

本文有两类图。第 1–5 节是按结构要点重绘的中文示意图。第 6 节嵌入 Minchin 与 Lodge 2019 年综述的原图，该文以 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 发布。Alberts 等的教材图和 Watson、Crick 1953 年的原图受版权保护，第 7 节只给出可在线阅读的链接和读图说明。

糖环上的碳写成 1′、2′、3′、4′、5′。撇号用来和碱基环自己的编号区分。

## 1. 一个核苷酸里有什么

![一个脱氧核苷酸由含氮碱基、脱氧核糖和磷酸组成](/blog-assets/genomics-dna-figures/01-three-parts.svg)

**图 1.** 一个脱氧核苷酸由三部分组成。含氮碱基决定它是哪一种核苷酸；脱氧核糖是五碳糖，2′ 位连接的是氢；磷酸是酸性基团，接在糖的 5′ 碳上。右侧是这三部分连在一起之后的样子：磷酸在糖的上方，碱基从糖的侧面伸出。

碱基加糖称为核苷。核苷再接上磷酸，才称为核苷酸。DNA 链上每个核苷酸只保留一个磷酸。细胞合成 DNA 时用的原料是三磷酸核苷（dATP、dTTP、dGTP、dCTP），接进链里时去掉两个磷酸。这一点在第 6 节的文献原图 (A) 里画得更具体：那张图的例子是带三个磷酸的鸟苷酸。

![DNA 的四种碱基：A、T、G、C](/blog-assets/genomics-dna-figures/02-four-bases.svg)

**图 2.** DNA 的四种碱基。A 和 G 是嘌呤，分子里有并在一起的两个环；T 和 C 是嘧啶，只有一个环。配对方式是固定的：A 对 T，中间 2 个氢键；G 对 C，中间 3 个氢键。嘌呤始终对着嘧啶，每一对碱基的宽度才比较一致，双螺旋的直径才能保持均匀。

| | DNA | RNA |
|---|---|---|
| 糖 | 2-脱氧核糖，2′ 位是氢 | 核糖，2′ 位是羟基 |
| 碱基 | A、T、G、C | A、U、G、C |
| 常见形态 | 两条链绕成双螺旋 | 一条链，并可自身折叠 |

RNA 用尿嘧啶（U）代替胸腺嘧啶。U 和 T 一样可以与 A 形成两个氢键，差别是 T 在环上多一个甲基。

## 2. 糖上的编号决定键接在哪里

![脱氧核糖 1′ 到 5′ 的连接位点](/blog-assets/genomics-dna-figures/03-sugar.svg)

**图 3.** 脱氧核糖是一个五元环，环上的氧标为 O，四个碳按连接顺序标成 1′、2′、3′、4′。5′ 不在环上，它是从 4′ 伸出去的那个 CH2。

按这张图上的四个接口来记：

- **1′** 通过 N-糖苷键连接碱基。嘌呤（A、G）用碱基的 N9 去连，嘧啶（T、C）用碱基的 N1 去连。这两个编号见图 4。
- **2′** 上是氢。RNA 的核糖在这个位置是羟基，所以 DNA 的全称是脱氧核糖核酸。
- **3′** 上的羟基会和后一个核苷酸的磷酸成键。
- **5′** 上接着磷酸。一条链里，露出这个磷酸的一头就是 5′ 端。

![嘧啶的 N1 和嘌呤的 N9 是连到糖 1′ 碳上的氮](/blog-assets/genomics-dna-figures/03b-base-numbering.svg)

**图 4.** N 是氮原子，数字是这个环上的位置号。橙圈标出的氮连到脱氧核糖的 1′ 碳上，这根键就是 N-糖苷键。糖上的碳写成 1′。碱基上的 N1、N9 是氮的编号，不加撇号。

左图是嘧啶，T 和 C 都是这种单环。接糖的氮排在 1 号，所以叫 N1。环上另一个氮是 N3。

右图是嘌呤，A 和 G 都是这种双环，左边是六元环，右边是五元环。接糖的氮在五元环上，排在 9 号，所以叫 N9。六元环里也有一个 N1；图 6 里 A、G 用来形成氢键的就是这个 N1。T 和 C 的 N1 则是接糖的那个氮。看到 N1 时先看它属于哪一类碱基。

## 3. 核苷酸怎样连成一条链

![5′ 到 3′ 的四核苷酸链，碱基顺序为 T、C、A、G](/blog-assets/genomics-dna-figures/04-strand.svg)

**图 5.** 四个核苷酸连成一条链，方向从左到右是 5′ → 3′。碱基顺序是 T、C、A、G，与第 6 节文献原图 (B) 从上到下的顺序相同。

磷酸画在骨架线上，而不是挂在糖的外面。最左边的 P 属于第一个核苷酸的 5′ 端。此后每一个 P 都夹在两个糖之间：它一边连着前一个糖的 3′，另一边连着后一个糖的 5′。这个键叫 **3′–5′ 磷酸二酯键**。图中括号标出的是 T 和 C 之间的那一个：括号上方的 3′ 属于胸腺嘧啶核苷酸的糖，5′ 属于胞嘧啶核苷酸的糖。链的最右端不再接磷酸，而是一个游离的 3′–OH，所以这一头是 3′ 端。

读一条链时，习惯从 5′ 端念到 3′ 端。图 5 这条链记作 5′–TCAG–3′。

## 4. 碱基怎样配对

![A·T 的两个氢键和 G·C 的三个氢键](/blog-assets/genomics-dna-figures/05-base-pairs.svg)

**图 6.** 配对发生在两条链的碱基之间。中间浅色区域里的虚线是氢键，原子编号写在虚线两端，不画进碱基框里。

A·T 有两条氢键：

- 腺嘌呤的 N1 对着胸腺嘧啶 N3 上的氢
- 腺嘌呤 N6 上的氢对着胸腺嘧啶的 O4

G·C 有三条氢键：

- 鸟嘌呤的 O6 对着胞嘧啶 N4 上的氢
- 鸟嘌呤 N1 上的氢对着胞嘧啶的 N3
- 鸟嘌呤 N2 上的氢对着胞嘧啶的 O2

碱基框下面的「糖 · N9」和「糖 · N1」表示糖苷键接在碱基的哪一个氮上。A、G 接在 N9，T、C 接在 N1，环上的位置见图 4。G·C 比 A·T 多一条氢键，所以 GC 含量高的双链需要更高的温度才能解开。

![反向平行的四碱基对](/blog-assets/genomics-dna-figures/06-duplex.svg)

**图 7.** 两条链的方向相反。上链从左到右是 5′–ATGC–3′，下链从左到右是 3′–TACG–5′。竖的虚线是碱基对之间的氢键：A·T 两根，G·C 三根。横线是每一条链自己的骨架，也就是图 5 里的磷酸二酯键，不是氢键。

因为 A 只能对着 T、G 只能对着 C，一条链的序列定下来，另一条链的序列就跟着定下来。双链里于是有 A 的数目接近 T、G 的数目接近 C。只看一条链，或者看单链 DNA，没有这个数量关系。

## 5. 两条链绕成双螺旋

![B-DNA 双螺旋示意，标出链的方向、大沟、小沟、碱基对间距和直径](/blog-assets/genomics-dna-figures/07-helix.svg)

**图 8.** 两条链绕同一条轴，形成右手螺旋。蓝色链从上到下是 5′ → 3′，橙色链从上到下是 3′ → 5′，方向与图 7 一致。横档是碱基对，画在螺旋内侧；两色曲线是糖–磷酸骨架，留在外侧。

图中的尺寸按现在常用的 B-DNA 参数标注，与第 6 节文献原图一致：

- 相邻碱基对沿轴上升 **0.34 nm**（3.4 Å）
- 螺旋直径约 **2 nm**
- 每一圈约 **10.5** 个碱基对

左侧括号标的是骨架之间一窄一宽的两处开口。较窄的是小沟，较宽的是大沟。这是示意图上的开口，不是从晶体坐标量出来的沟宽。1953 年 Watson 和 Crick 的模型把每一圈取整为 10 个碱基对、螺距 3.4 nm，相邻残基转角 36°。后来在溶液里测到的 B-DNA 更接近每圈 10.5 对。

## 6. 文献原图

下面两张图来自 Minchin 与 Lodge 的开放获取综述，英文标注保留原样。配文说明每一部分对应前面的哪一张示意图。

![Minchin 与 Lodge 2019 年 Figure 1：核苷酸结构和一条 DNA 链](/blog-assets/genomics-dna-figures/minchin-lodge-2019-fig1.jpg)

**图 9.** Minchin & Lodge, 2019, Figure 1. *The structure of DNA.* 许可：CC BY 4.0。

**(A) 一个核苷酸。** 例子是鸟苷三磷酸。右侧鸟嘌呤连在脱氧核糖的 1′ 碳上，左侧三个磷酸连在 5′ 碳上。图中用括号分开了三层范围：最上面是含氮碱基，中间是脱氧核糖，碱基加糖是核苷，再加上磷酸才是核苷酸。2′ 碳上画的是 H，3′ 碳上画的是 OH。链上的核苷酸只留最靠近糖的那一个磷酸，外面两个磷酸在接入链时离去。对照本文图 1 和图 3。

**(B) 一条四核苷酸链。** 上端标 5′，下端标 3′。从上到下的碱基是 T、C、A、G，与本文图 5 从左到右的顺序相同。每一个糖的 3′ 氧连到下一个核苷酸的磷酸上，再由那个磷酸连到下一个糖的 5′ 碳。

![Minchin 与 Lodge 2019 年 Figure 2：DNA 双螺旋以及 A·T、G·C 碱基对](/blog-assets/genomics-dna-figures/minchin-lodge-2019-fig2.jpg)

**图 10.** Minchin & Lodge, 2019, Figure 2. *DNA structure.* 许可：CC BY 4.0。

**(A) 双螺旋。** 骨架在外，碱基在内。图上标出磷酸（phosphate）、脱氧核糖（deoxyribose）和碱基（bases）。相邻碱基对的间距是 0.34 nm，螺旋直径是 2 nm。螺旋一侧较宽的凹槽是大沟（major groove），较窄的是小沟（minor groove）。对照本文图 8。

**(B) 两种碱基对。** 上面是 A·T，虚线是两条氢键；下面是 G·C，虚线是三条氢键。红色箭头所指的 C1′ 是糖环上连接碱基的那个碳。四个 C1′ 的相对位置相同，所以 A·T 和 G·C 的宽度接近。碱基对的上沿朝向大沟，下沿朝向小沟。对照本文图 6。

## 7. 另外两处原图

这两处可以在浏览器里打开。原图不放进本文。

### Alberts 等，《Molecular Biology of the Cell》第 4 版

章节：[The Structure and Function of DNA](https://www.ncbi.nlm.nih.gov/books/NBK26821/)

- [Figure 4-3 DNA and its building blocks](https://www.ncbi.nlm.nih.gov/books/NBK26821/figure/A598/?report=objectonly)。四种核苷酸连成一条链，碱基从糖–磷酸骨架上伸出。两条链方向相反，中间是氢键。图的左侧把双链画直，右侧画成螺旋。对应本文图 5 和图 7。
- [Figure 4-5 The DNA double helix](https://www.ncbi.nlm.nih.gov/books/NBK26821/figure/A600/?report=objectonly)。(A) 是约一圈半的空间填充模型，标出大沟和小沟，并写明每圈约 10.4 个碱基对。(B) 是短的一段侧视图，标出 3′–5′ 磷酸二酯键，以及 5′ 端的游离磷酸和 3′ 端的游离羟基。对应本文图 3、图 5 和图 8。

### Watson 与 Crick，1953

[Molecular structure of nucleic acids: a structure for deoxyribose nucleic acid. *Nature* 171:737–738](https://www.genome.gov/sites/default/files/media/files/2022-08/nature_article_molecular_structure_of_nucleic_acids_1953.pdf)（美国国家人类基因组研究所提供的 PDF）。

文中那张图是两条右旋链绕同一条轴的示意图，不是四种碱基的化学结构式。正文给出的模型参数是：每个残基沿轴前进 3.4 Å，相邻残基转角 36°，10 个残基、34 Å 重复一圈，磷原子距离轴约 10 Å。配对关系写在正文里：腺嘌呤对胸腺嘧啶，鸟嘌呤对胞嘧啶。文中同时引用了 Chargaff 的组成测定，说明 A/T 和 G/C 都接近 1。

## 8. 碱基含量：Chargaff 的组成规律

双链 DNA 的碱基含量有三条可以用表核对的规律：

1. A 的含量接近 T，G 的含量接近 C，所以 A/T 和 G/C 都接近 1。
2. 嘌呤的总量接近嘧啶的总量，也就是 A + G 接近 T + C。
3. A + T 与 G + C 的比例随物种变化。G 与 C 所占的百分比称为 GC 含量。

**表 1.** 文献中常被转引的一套碱基组成，单位是摩尔百分比。人、玉米、小麦、酵母和大肠杆菌来自 Chargaff 在 1950–1952 年前后的测定汇编；同一物种在不同论文里的数字可以相差大约 1 个百分点。φX174 是单链 DNA，放在表末作为对照，A/T 明显偏离 1。汇编表见 [Chargaff's rules](https://en.wikipedia.org/wiki/Chargaff%27s_rules)。

| 来源 | A | T | G | C | A/T | G/C | GC 含量 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 人 | 29.3 | 30.0 | 20.7 | 20.0 | 0.98 | 1.04 | 40.7 |
| 玉米 | 26.8 | 27.2 | 22.8 | 23.2 | 0.99 | 0.98 | 46.0 |
| 小麦 | 27.3 | 27.1 | 22.7 | 22.8 | 1.01 | 1.00 | 45.5 |
| 酵母 | 31.3 | 32.9 | 18.7 | 17.1 | 0.95 | 1.09 | 35.8 |
| 大肠杆菌 | 24.7 | 23.6 | 26.0 | 25.7 | 1.05 | 1.01 | 51.7 |
| φX174（单链） | 24.0 | 31.2 | 23.3 | 21.5 | 0.77 | 1.08 | 44.8 |

表里前五行的 A 和 T、G 和 C 都成对接近。GC 含量则从酵母的 35.8% 到大肠杆菌的 51.7%，并不是一个固定数。φX174 的 A 是 24.0、T 是 31.2，A/T 只有 0.77。单链没有互补链来补齐数量，所以不服从 A ≈ T。

Chargaff 测到的是含量关系。Watson 和 Crick 给出的结构解释是：A 与 T、G 与 C 成对出现在两条链上，所以整条双链里这两种碱基的数目必然接近。

## 参考文献

1. Chargaff E. Chemical specificity of nucleic acids and mechanism of their enzymatic degradation. *Experientia*. 1950;6(6):201–209. doi:10.1007/BF02173653
2. Chargaff E, Lipshitz R, Green C. Composition of the deoxypentose nucleic acids of four genera of sea-urchin. *J Biol Chem*. 1952;195(1):155–160. doi:10.1016/S0021-9258(19)50884-5
3. Watson JD, Crick FHC. Molecular structure of nucleic acids: a structure for deoxyribose nucleic acid. *Nature*. 1953;171(4356):737–738. doi:10.1038/171737a0. [PDF](https://www.genome.gov/sites/default/files/media/files/2022-08/nature_article_molecular_structure_of_nucleic_acids_1953.pdf)
4. Sinsheimer RL. A single-stranded deoxyribonucleic acid from bacteriophage ΦX174. *J Mol Biol*. 1959;1(1):43–53. doi:10.1016/S0022-2836(59)80006-1
5. Alberts B, Johnson A, Lewis J, Raff M, Roberts K, Walter P. *Molecular Biology of the Cell*. 4th ed. New York: Garland Science; 2002. [The Structure and Function of DNA](https://www.ncbi.nlm.nih.gov/books/NBK26821/)
6. Minchin S, Lodge J. Understanding biochemistry: structure and function of nucleic acids. *Essays in Biochemistry*. 2019;63(4):433–456. doi:10.1042/EBC20180038. [全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6822018/)
