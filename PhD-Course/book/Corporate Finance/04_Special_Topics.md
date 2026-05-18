# 04 Special Topics

Important IV examples：

| IV source                 | Research context                            | Good reason                                                                  |
| ------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| H-1B visa lottery         | skilled foreign labor supply                | lottery creates **random variation** in unmet skilled labor demand           |
| Bartik instrument         | local labor demand / human capital distance | combines pre-determined shares with aggregate shocks                         |
| opioid prescription shock | local labor supply                          | emergency-room diagnosis-based prescriptions mitigate drug-seeking selection |

## 0. Course Introduction

### 0.2 Labor and Finance（Introduction, slide 3-4/61）

> [!summary] Labor and Finance 是什么
> - 研究 human capital 如何影响企业财务决策，以及财务政策如何反过来影响劳动结果。
> - 融合 finance、labor economics、organizational economics、entrepreneurship。
> - 关注 human capital 在 corporate policy、financial markets、household finance 中的作用。
> - Human capital 指能提升生产率与竞争优势的技能、知识和经验。

双向作用框架（from slide）：
- `Labor Market (Demand & Supply) -> Finance`：影响投资（investment）、资本结构（capital structure）、企业边界（firm boundaries）。
- `Finance -> Labor Demand`：影响就业规模（employment）与技能需求（skills）。
- `Finance -> Labor Supply`：影响劳动力流动（mobility）、议价（bargaining）、人才配置（talent allocation）。

### 0.3 Topics Not Covered（slide 5/61）
- Pure labor theory（不含 firm-level / finance 链接）。
- Asset pricing with labor risk（macro/consumption-based）。
- Entrepreneurial and startup finance。
- Household finance decisions unrelated to firms。
- Traditional labor topics（如 education、search、minimum wage）。

### 0.4 Our Focus: Labor and Corporate Finance（slide 6/61）
- 关注 firms 与 labor markets 的互动（interactions）。
- 覆盖 labor 与 corporate finance 交叉处的基础框架与近期进展。
- 强调机制（mechanisms）、数据（data）、识别（identification）与实证策略（empirical strategies）。
- 关注前沿问题（emerging frontiers）与开放研究问题（open questions）。

### 0.5 Lecture Plan（slide 7/61）
- Lecture 1: Labor and Corporate Finance: Introduction
- Lecture 2: Labor and Corporate Finance: ESG and AI
- Lecture 3: Creditor Rights, Debt Contracts, and Real Effects


## 1. Labor as a Core Production Input（slide 10-12/61）

### 1.1 Production Function（slide 10/61）

> [!summary] Production Function
> 产出由技术与投入共同决定：
> $$
> \begin{aligned}
> Y_{it}=A_{it}F(K_{it},L_{it}),
> \end{aligned}
> $$
> 其中 $Y_{it}$ 为产出，$A_{it}$ 为全要素生产率（TFP），$K_{it}$ 为资本，$L_{it}$ 为劳动。

Cobb–Douglas 特例：

$$
\begin{aligned}
Y_{it}=A_{it}K_{it}^{\alpha}L_{it}^{\beta}.
\end{aligned}
$$

对数线性化：

$$
\begin{aligned}
\log Y_{it}=\log A_{it}+\alpha\log K_{it}+\beta\log L_{it}.
\end{aligned}
$$

产出弹性（output elasticities）：

$$
\begin{aligned}
\alpha=\frac{\partial\log Y}{\partial\log K},\qquad
\beta=\frac{\partial\log Y}{\partial\log L}.
\end{aligned}
$$

经济含义：
- 劳动投入上升 1%，产出约上升 $\beta\%$（其他条件不变）。
- 在公司金融语境下，$\beta$ 连接了用工调整（hiring/retention）与收入端扩张能力。

### 1.2 Marginal Product of Labor and Productivity Estimation（slide 11-12/61）

> [!summary] Marginal Product of Labor（MPL）
> 在 Cobb–Douglas 下：
> $$
> \begin{aligned}
> MPL_{it}
> =\frac{\partial Y_{it}}{\partial L_{it}}
> =\beta\frac{Y_{it}}{L_{it}}.
> \end{aligned}
> $$

竞争市场（competitive markets）下：

$$
\begin{aligned}
w_{it}=MPL_{it}
\Longrightarrow
\text{Labor Share}
=\frac{w_{it}L_{it}}{Y_{it}}
=\beta.
\end{aligned}
$$

类似地，

$$
\begin{aligned}
\text{Capital Share}
=\frac{r_{it}K_{it}}{Y_{it}}
=\alpha.
\end{aligned}
$$

劳动生产率估计（Labor Productivity: Estimation）：
- 平均劳动生产率（average labor productivity）：$\frac{Y_{it}}{L_{it}}$。
- 产出口径（output）可用 sales、value added、physical quantity。
- 劳动口径（labor）可用 number of workers、hours worked、wage bill。

边际劳动生产率的经验估计：

$$
\begin{aligned}
\log Y_{it}
=\alpha\log K_{it}
+\beta\log L_{it}
+\omega_{it}
+\varepsilon_{it},
\end{aligned}
$$

其中

$$
\begin{aligned}
\beta=\frac{\partial\log Y_{it}}{\partial\log L_{it}},
\qquad
MPL_{it}=\beta\frac{Y_{it}}{L_{it}}.
\end{aligned}
$$

企业层面 TFP（Firm-level Productivity）可写为：

$$
\begin{aligned}
\hat\omega_{it}
=\log Y_{it}-\alpha\log K_{it}-\beta\log L_{it}.
\end{aligned}
$$

## 2. Capital-Labor Substitution

### 2.1 Historical Waves of Automation and Labor Adjustment（slide 14-18/61）

> [!summary] Brozen (1957) 的核心提醒
> 对“技术替代劳动”的担忧在历史上反复出现，但每一轮技术变革通常伴随任务重组（task reallocation）与新岗位创造，而非单向、永久的就业坍缩。

Historical Waves of Automation and Labor Adjustment：
- First Industrial Revolution（late 18th–early 19th）  
  mechanization + factory system；劳动从农业向制造业重配；岗位替代与新职业并存。
- Second Industrial Revolution（late 19th–early 20th）  
  electrification + assembly line；大企业与内部劳动力市场扩张；半熟练劳动需求上升。
- Digital Revolution（late 20th）  
  IT + internet 扩散；routine task 自动化；技能偏向/任务偏向技术进步（SBTC/TBTC）。
- AI Revolution?（21st century）  
  AI 开始作用于 non-routine cognitive tasks；岗位与企业组织边界可能重组；生产率、劳动份额、不平等仍是开放问题。

对资本-劳动替代（capital-labor substitution）的含义：
- 替代不是“岗位总量”的一次性冲击，而是“任务层面”持续重配。
- 短期常见 displacement，长期结果取决于新任务创造速度、组织调整能力与技能供给弹性。
- 企业层面最关键的是：何种资本（机器/软件/AI）替代何种劳动任务，以及由此带来的成本结构与增长路径变化。

### 2.2 Types of Automation: Brozen (1957)（slide 19-20/61）

> [!summary] 两大类自动化机制
> - **Automation as Adaptation（适应型）**：在既有生产函数下，企业沿投入组合调整（更多资本深化）。
> - **Automation from Invention（发明型）**：技术前沿变化，单位投入需求下降（生产前沿外移）。

1) Automation as Adaptation: Capital Deepening  
- 总资本存量增长提高边际生产率（marginal productivity），推升工资。  
- 企业向更资本密集的投入组合重配，但不必假设生产函数本身变化。

2) Automation as Adaptation: General Equilibrium Spillovers  
- 某些部门的生产率提升可通过劳动力流动抬升全经济工资。  
- 更高工资会诱导其他行业资本深化，即使这些行业技术前沿未变。

3) Automation from Invention: Capital- and Labor-Saving  
- 新技术降低单位产出的要素需求，推动生产前沿外移。  
- 资源释放可支持其他部门资本深化，广义均衡下可伴随就业扩张。

4) Automation from Invention: Labor-Saving  
- 创新主要以资本替代劳动，显著降低单位产出劳动需求。  
- 若资本释放有限且需求缺乏弹性，可能压低工资或提高失业。

识别要点（对后续实证）：
- 先区分“沿既有函数重配”（adaptation）与“技术前沿位移”（invention）。  
- 两者对 labor share、wage、employment 的短中期路径可完全不同，不能混为一类冲击。

### 2.3 Ouimet, Simintzi, and Ye (2025): Opioids, Labor Supply, and IT Substitution（slide 21-23/61）

> [!summary] Research Question
> 阿片危机（opioid crisis）如何影响企业价值，以及企业在劳动与信息技术（IT）之间的投入选择？

定义（Opioid 是什么）：
- **Opioid（阿片类药物）**：作用于阿片受体（opioid receptors）的镇痛药物（包括处方止痛药和非法阿片）；长期/过量使用会提高依赖与成瘾风险，并可能损害劳动能力与健康。

机制链（slide 核心）：
- 阿片使用削弱劳动能力与生产率，导致本地“合格劳动供给”（qualified labor supply）下降。
- 企业对劳动短缺的响应是增加技术/IT 投资，以资本替代相对稀缺劳动。

数据（仅保留识别相关）：
- Merative MarketScan（个体医疗支出与处方记录，含县级信息）；替代口径可用 CDC WONDER。
- Computer Intelligence Technology Database (CiTDB)：工厂层面 IT 投资与使用。

经验设计：two-stacked long differences

$$
\begin{aligned}
\Delta y_{i,f,c,t}
=\beta\cdot \Delta\text{OpioidPrescriptions}_{c,t-5}
+\delta\cdot \Delta X_{c,t-5}
+FE
+\Delta\varepsilon_{i,f,c,t}.
\end{aligned}
$$

两段匹配窗口（slide）：

$$
\begin{aligned}
\Delta\text{opioid}_{2002\to 2006}\ \leftrightarrow\ \Delta y_{2007\to 2011},\\
\Delta\text{opioid}_{2006\to 2010}\ \leftrightarrow\ \Delta y_{2011\to 2015}.
\end{aligned}
$$

主结果（图表信息）：
- Table 3：$\Delta$opioid prescriptions 对 $\Delta\ln(\text{Sales})$ 与 $\Delta\ln(\text{Employment})$ 系数为负，表示劳动供给冲击压低企业增长。
- Table 4：$\Delta$opioid prescriptions 对 IT budget、PC investment 相关指标系数为正，表明企业进行 IT 替代（capital deepening via IT）。

识别强化（IV）：
- 使用“针对 10 类常见急诊诊断的阿片处方强度”作为工具变量（医生分配近似随机，缓解 drug-seeking 行为偏误）。

结论（capital-labor substitution 语境）：
- 负向劳动供给冲击可诱导企业提高 IT/资本投入；这是一条由 labor scarcity 触发的替代路径，而非纯技术推动。

### 2.4 Dai and Qiu (2024): Minimum Wage Increases and IT Adoption（slide 25/61）

> [!summary] 这页图在说什么
> 研究问题：州最低工资上调（state minimum wage increases）是否促进企业 IT 采用（IT adoption）？
> 识别方法：跨州边界配对县（paired border counties）+ stacked DID（事件研究）。

![[Pasted image 20260413155659.png]]
图左（Map of Treatment and Border Control Counties）：
- 红色是处理组县（treatment），黄色是边界对照县（border control）。
- 核心思想是只比较地理上相邻、经济环境相近但最低工资政策不同的县，降低不可观测异质性偏误。

图右（Dynamic Treatment Effects on IT Budget）：
- 横轴是相对政策时点（year relative to MW event），纵轴是对 IT budget 的估计影响。
- 事件前（负年份）系数接近 0，支持平行趋势（pre-trend）较弱。
- 事件后（正年份）系数转正并抬升，表示最低工资上调后企业 IT 预算增加（以技术对冲劳动成本上升）。

经济含义（和 section 2 对齐）：
- 劳动成本冲击（minimum wage hike）可触发资本深化（capital deepening via IT）。
- 这是“成本推动型资本-劳动替代”的一条直接实证证据。


### 2.5 Minimum Wage and Capital Adjustment: Mixed Evidence（slide 26-27/61）

**Gustafson and Kotter (2023)（slide 26）**
![[Pasted image 20260413155725.png]]

图与结果（高信息）：
- 研究对象：最低工资敏感行业（retail/restaurant/entertainment）的美国上市公司。
- 识别：联邦最低工资上调时，比较 `bound states`（州最低工资=联邦）与 `unbound states`（州最低工资>联邦）。
- 图中事件后 `bound states` 的 CapEx 效应明显转负且持续，`unbound states` 接近 0。
- 含义：劳动成本冲击可导致企业总资本开支收缩（至少在受约束州和相关行业中）。

**Curtis, Garrett, Ohrn, Roberts, and Suarez-Serrato (2023)（slide 27）**
![[Pasted image 20260413155732.png]]

图与结果（高信息）：
- 资本成本下降型税收政策提高制造业工厂投资，同时提高就业。
- 工资与生产率增长不明显。
- 解释：政策主要扩大投入规模，资本与生产工人呈互补（complementarity），而非“机器替代工人”。

与 2.4 的对照（避免混淆）：
- `2.4` 证据更偏向“IT 结构性替代上升”（技术对冲劳动成本）。
- 本节显示“总 CapEx 可能下降”与“资本-劳动互补扩张”在不同政策/样本下都可能出现，关键在冲击类型与约束条件（行业、州约束、资本成本渠道）。

### 2.6 Tuzel and Zhang (2021): Tax Incentives, Routine Tasks, and Skill Upgrading（slide 28/61）

> [!summary] Main Finding
> 州级投资税收激励（state investment tax incentives）使符合条件企业增加设备投资与高技能用工；同时在最多约两年滞后后，routine-task employment 下降。

任务结构测度（Routine-Task Intensity, RTI）：
- 数据基础：DOT / O*NET / OEWS（课件口径）。
- 职业 $k$ 的 RTI 定义：

$$
\begin{aligned}
RTI_k
=\ln\!\left(T_k^{Routine}\right)
-\ln\!\left(T_k^{Abstract}\right)
-\ln\!\left(T_k^{Manual}\right).
\end{aligned}
$$

其中 $T_k^{Routine},T_k^{Abstract},T_k^{Manual}$ 分别表示该职业对 routine、abstract、manual 任务技能的要求强度。

行业层面的 routine employment share（RShare）：

$$
\begin{aligned}
RShare_{j,t}
=\sum_k
\mathbf{1}\!\left[RTI_k>RTI^{P80}\right]
\times
\frac{emp_{j,k,t}\times wage_{j,k,t}}
{\sum_k emp_{j,k,t}\times wage_{j,k,t}}.
\end{aligned}
$$

经济解释（capital-labor substitution 语境）：
- 税收激励降低资本成本后，企业更倾向于“设备资本 + 高技能劳动”组合。
- routine 任务岗位调整出现滞后，符合“资本安装与组织重构需要时间”的机制。

## 3. Acquisition of Human Capital

### 3.1 Build or Buy? Hiring vs Acquiring Talent（slide 30/61）

> [!summary] Acquisition of Human Capital: Build or Buy
> 企业获取人力资本主要有两条路径：
> - **Build（Hiring / Organic Talent Acquisition）**：在外部劳动力市场招聘并内部整合。
> - **Buy（Acquiring / Talent-Driven M&A）**：通过并购直接获取已成型团队与组织能力。

Build（Hiring）的典型约束：
- labor supply 有限、流动性约束（mobility constraints）、匹配摩擦（matching frictions）。
- 制度摩擦：non-compete、移民限制等。

Buy（Acquiring）的典型特征：
- 并购目标常是创业公司/中小企业/业务单元，核心目的是获取高价值人才与团队（founders, engineers, researchers, managers）。
- 非核心资产与冗余人员通常会被剥离、缩编或选择性整合。

核心权衡（tradeoffs）：
- Hiring frictions vs acquiring costs。
- training/integration costs vs 组织能力到位速度（speed-to-capability）。
- firing/restructuring costs 在两种路径下的分布不同。

### 3.2 Beaumont, Hebert, and Lyonnet (2025): Human-Capital Distance and Entry Mode（slide 31-32/61）

> [!summary] Main Findings
> - 当进入“人力资本相近”的行业时，企业更倾向于通过招聘（build）获取人力资本。
> - 当进入“人力资本较远”的行业时，企业更倾向于通过并购（buy）获取已整合的人力资本与组织能力。
> - 在远距离行业中仅靠 build 的企业存在持续性绩效劣势（durable underperformance）。

数据与测度（slide 信息）：
- 法国行政数据：工资、工时、细职业编码等。
- 构造 firm-level HC distance（进入行业 $n$ 相对企业 $g$）：

$$
\begin{aligned}
HCdistance_{g,n}
=1-\frac{\sum_i s_{g,i}\cdot s_{n,i}}
{\sqrt{\sum_i s_{g,i}^2}\sqrt{\sum_i s_{n,i}^2}},
\end{aligned}
$$

其中 $s_{g,i}$ 为企业 $g$ 在职业 $i$ 的工资账单占比，$s_{n,i}$ 为行业 $n$ 在职业 $i$ 的工资账单占比。

经济解释（信息含量）：
- 该指标本质是 $1-$ cosine similarity：越大表示所需人力资本结构越“远”。
- 距离越远，内部培养与整合成本越高，并购相对优势越强。

### 3.3 Bartik Instrument（slide 34-35/61）

> [!summary] 结构方程与内生性
> 目标是识别本地就业增长对工资增长的影响（inverse labor-supply elasticity）：
> $$
> \begin{aligned}
> y_l=\rho+\beta_0 x_l+\epsilon_l,
> \end{aligned}
> $$
> 其中 $y_l$ 是地区 $l$ 的工资增长，$x_l$ 是本地就业增长，且 $\operatorname{Cov}(x_l,\epsilon_l)\neq 0$。

shift-share 分解（Bartik 的基础）：

$$
\begin{aligned}
x_l&=\sum_k z_{lk}g_{lk},\\
g_{lk}&=g_k+\tilde g_{lk}.
\end{aligned}
$$

其中 $z_{lk}$ 是地区 $l$ 在行业 $k$ 的初始就业份额，$g_k$ 是全国行业增长（shift），$\tilde g_{lk}$ 是地区-行业特有增长项。

Bartik 工具变量：

$$
\begin{aligned}
B_l=\sum_k z_{lk}g_k.
\end{aligned}
$$

即“行业初始份额向量”与“全国行业增长向量”的内积（inner product）。

识别直觉（高信息）：
- 用“初始产业结构差异”与“全国行业冲击”交互，生成外生的本地就业需求变动。
- 关键排除限制：全国行业增长 $g_k$ 不能通过其他通道直接影响本地工资增长（除通过 $x_l$）。
- 实证中通常控制初始地区特征，并检查 pre-trends 与 share exogeneity 的稳健性。

### 3.4 Beaumont, Hebert, and Lyonnet (2025): HC Bartik（slide 36/61）

> [!summary] HC Bartik 的核心思想
> 用“进入行业 incumbents 的人力资本结构变化”作为外生冲击，结合企业初始职业结构，构造针对企业-行业对 $(g,n)$ 的 shift-share 工具变量。
> - `share`：$\hat s_{g,i,03}$（企业 $g$ 在 2003 年的职业结构）
> - `shift`：$\Delta\hat s_{n,i,03,11}$（行业 $n$ 的 incumbents 在 2003-2011 的职业结构变化）

写法一（直接 shift-share）：

$$
\begin{aligned}
HCBartik_{g,n}
=\sum_i \hat s_{g,i,03}\cdot \Delta\hat s_{n,i,03,11},
\end{aligned}
$$

其中

$$
\begin{aligned}
\Delta\hat s_{n,i,03,11}=\hat s_{n,i,11}-\hat s_{n,i,03}.
\end{aligned}
$$

写法二（与 HC distance 变化等价）：

$$
\begin{aligned}
HCBartik_{g,n}
=-\left(HCdistance_{g,n,11}^{03}-HCdistance_{g,n,03}^{03}\right),
\end{aligned}
$$

且

$$
\begin{aligned}
HCdistance_{g,n,t}^{t_0}
=1-\sum_i \hat s_{g,i,t_0}\cdot \hat s_{n,i,t}.
\end{aligned}
$$

高值解释（对应 slide 蓝字）：
- 较高的 $HCBartik_{g,n}$ 表示：2003 到 2011 年间，进入行业 $n$ 的 incumbents 劳动力构成更接近企业 $g$ 在 2003 年的构成。

## 4. Labor Mobility

### 4.1 Labor Mobility and Noncompete Agreements（slide 44-45/61）

> [!summary] Labor Mobility（劳动力流动）
> - 劳动力在雇主（employers）、职业（occupations）、行业（industries）与地区（regions）之间流动的能力。
> - 对企业（firms）而言，流动性决定招聘成本、匹配摩擦（search/matching frictions）、员工外部选择（outside options）与议价能力（bargaining power）。
> - 流动性摩擦会影响企业劳动调整成本，并进一步影响资本结构与投资决策。

流动性摩擦来源（slide 44）：
- 移民约束（immigration constraints，如 green card 限制）。
- 劳动市场制度约束：竞业限制协议（NCA）与商业秘密执法。

NCA（Noncompete Agreements）要点（slide 45）：
- 定义：离职后一定时期（常见 6 个月到 2 年）限制员工加入或创办竞争企业。
- 覆盖面：约 38% 美国劳动者签署过 NCA（Starr, Prescott, and Bishara, 2021）。
- 分布：在知识密集职业更常见。
- 经济权衡：保护既有企业投资与知识资产，但可能压低劳动力流动、知识溢出与创业进入。

### 4.2 Jeffers (2024): NCA, Reallocation, and Firm Responses（slide 47/61）

数据（slide）：
- LinkedIn 个体教育与就业轨迹数据（Revelio Labs）。

主结果（图对应结论）：
- 劳动力流动：知识密集型劳动者的离职率显著下降（departure rates decline）。
- 既有企业（incumbents）：增加实体资本投资（physical capital investment），且知识密集企业更明显。
- 创新端：R&D 与专利（patenting）未见显著上升。
- 创业端：受影响行业新企业进入下降（new firm entry declines）。

经济解释（高信息）：
- NCA 的主要作用更像“活动重分配（reallocation）”而非“总创新提升”：资源向 incumbents 集中，远离新企业形成（new firm formation）。

### 4.3 Additional Readings on Labor Mobility（slide 49/61）

按机制分组（只保留信息量高的入口文献）：
- NCA：Kini, Williams, and Yin (2021), *Review of Financial Studies*。
- Inevitable Disclosure Doctrine (IDD)：Klasa, Ortiz-Molina, Serfling, and Srinivasan (2018), *Journal of Financial Economics*。
- Immigration Constraints：Shen (2021), *Review of Financial Studies*。
- Occupation/Industry Mobility：Groes, Kircher, and Manovskii (2015), *Review of Economic Studies*；Tate and Yang (2024), *Review of Financial Studies*。

## 5. Labor and Capital Structure

### 5.1 Framework（slide 51/61）

> [!summary] 核心框架
> 传统资本结构模型（capital structure）主要围绕物质资本融资；但企业还依赖人力资本（human capital），其特征是不可被“拥有”、可退出并议价、受失业风险与劳动监管影响。

在 trade-off theory 下，劳动市场摩擦可作为额外债务成本进入目标函数：

$$
\begin{aligned}
NPV[\text{Debt}]
&=\underbrace{\text{Tax Shield}}_{\text{融资收益}}
-\underbrace{\mathbb{E}[\text{Distress Costs}]}_{\text{财务困境成本}}
-\underbrace{\text{Labor Costs}}_{\text{劳动相关债务成本}}.
\end{aligned}
$$

直觉：债务提高财务困境与裁员概率，工人会要求补偿性工资差（compensating wage differentials）来承担额外失业风险。

### 5.2 Implication I: Unemployment Costs and Leverage（slide 52/61）

机制（图对应）：
- 财务困境风险上升 $\Rightarrow$ 裁员风险上升 $\Rightarrow$ 工人要求更高补偿 $\Rightarrow$ 债务边际成本上升。
- 工人失业成本越高（unemployment costs 越高），企业最优杠杆（optimal leverage）越低。

证据（Agrawal and Matsa, 2013）：
- 利用州失业保险（UI）制度变化识别工人失业成本外生变动。
- 发现更高失业保险福利（higher unemployment benefits）对应更高企业杠杆：因为工人承担的失业风险下降，企业用债成本下降。

### 5.3 Implication II: Bargaining Power, Unions, and Labor Protection（slide 55-57/61）

工会议价（Bargaining Power and Labor Unions）：
- 工会提高工人议价能力与租金提取能力（rent extraction）。
- 债务可通过压缩自由现金流（free cash flow）降低工资谈判中的可分配剩余，形成“战略性杠杆”（strategic leverage）动机。
- Matsa (2010) 的 RTW（right-to-work）证据：工会力量被削弱后，高工会行业企业债务下降（图中 total debt 与 current debt 均下行）。

劳动保护与解雇成本（Labor Protection / Firing Costs）：
- 就业保护、最低工资、解雇成本提高会降低下行期成本调整弹性，推高经营杠杆（operating leverage）。
- 经营杠杆更高 $\Rightarrow$ 最优财务杠杆更低（financial leverage 下调）。
- Matsa (2018)：就业保护指数更高的地区，企业财务杠杆更低（负相关）。
- Simintzi, Vig, and Volpin (2015) 与 Serfling (2016)：加强劳动保护改革后，企业债务比率下降（event-time 图在政策后转负）。

### 5.4 Implication III: Firm-Specific Human Capital and DB Pension（slide 58/61）

Firm-specific human capital：
- 高杠杆会抑制工人投入企业专用技能（firm-specific skills）的激励。
- 更依赖专用人力资本的企业倾向选择更低债务，以维持长期雇佣承诺与组织资本积累。

Defined Benefit (DB) pension：
- DB 养老金承诺形成“类债务”的未来固定给付（debt-like obligations）。
- 养老金欠资（underfunding）可理解为向员工的隐性借款（borrowing from employees）。
- 企业会将养老金负债与金融负债联动管理，通常表现为 pension obligations 上升时财务杠杆下调。

## 6. Summary

- 劳动（labor）是核心生产要素（core production input），也是企业价值（firm value）的关键决定因素。
- 金融政策（financial policy）会系统性影响劳动需求、劳动力流动、议价权与人力资本投资。
- 劳动力市场摩擦（supply constraints / mobility barriers / regulations）会改变人力资本配置，并共同决定企业最优资本结构（optimal capital structure）。

## 7. Labor Welfare

### 7.1 Labor Welfare and Corporate Finance（slide 6/61）

> [!summary] Framework
> - 企业在追求劳动成本最小化时，也会投资工人技能、生产率与安全福祉（worker safety and well-being）。
> - 金融政策（leverage / liquidity / governance / performance pressure）会改变企业在 labor welfare 上的投资激励。
> - 劳动福利影响生产率、运营风险、诉讼暴露与企业价值（firm value）。

核心映射（课堂口径）：
- workplace safety 是一种真实投资决策（real investment margin），可观察金融压力如何传导到工人结果（worker outcomes）。

### 7.2 Financing Constraints and Workplace Safety（Cohn and Wardlaw, 2016; slide 7/61）

数据：
- BLS 的 Survey of Occupational Injuries and Illnesses (SOII)。

主结果（图对应）：
- 融资约束更强（financially constrained）企业发生更多 workplace injuries。
- 伤害率随杠杆与负向现金流冲击上升（例如 2007 债务到期压力），随正向现金流冲击下降（例如 2004 AJCA、油价波动带来的现金流改善）。
- 伤害率上升伴随企业价值显著下降。

机制（高信息）：
- 资金约束 $\Rightarrow$ 对安全投入不足（underinvestment in workplace safety）。
- 工伤上升 $\Rightarrow$ 生产率下降 + 补偿性工资差上升（compensating wage differentials）$\Rightarrow$ 价值受损。

### 7.3 Earnings Pressure and Workplace Safety（Caskey and Ozel, 2017; slide 9/61）

数据：
- OSHA Data Initiative Program（ODI）工伤数据。

主结果（图对应）：
- 在“刚好达到/略超分析师预测”的企业中，工伤/疾病率显著高于“未达标或显著超预期”企业。
- 同时观察到员工工作负荷上升（per-employee 产出与销售上升）以及可自由裁量费用异常压缩（SGA 的相关部分）。
- 效应在以下情形更强：工会力量弱、工伤赔付对企业更不敏感、政府业务占比较低。

经济解释（高信息）：
- 短期 earnings pressure 会诱导企业压缩“难以在当期报表体现收益”的安全投入，形成对 labor welfare 的逆向激励。

## 8. Theory of the Firm

### 8.1 Shareholder Primacy vs Stakeholder Theory（slide 3/61）

> [!summary] Two Views of Corporate Purpose
> - **Shareholder Primacy（股东至上）**：公司目标是最大化股东价值（shareholder value maximization）。
> - **Stakeholder Theory（利益相关者理论）**：公司应为所有受影响群体创造价值，而不只服务股东。

Stakeholder Theory 的课堂要点：
- 经典来源：Freeman (1984), *Strategic Management: A Stakeholder Approach*。
- stakeholders 包括 shareholders, employees, customers, suppliers, creditors, local communities, environment。
- 决策含义：公司治理是多方利益权衡（trade-off），而非单一目标最优化。

### 8.2 From Theory to Practice: ESG Channels（slide 4/61）

ESG 三个维度（与公司金融映射）：
- `E`（Environmental）：企业与自然环境互动（排放、污染、能源、废弃物、生物多样性、资源保护）；在金融中对应 climate finance / biodiversity finance。
- `S`（Social）：企业如何对待“人”（劳动条件、工作场所实践、与员工/社区/客户/供应链关系）；与 Labor & Finance、Social Finance、Supply Chain Management 直接相连。
- `G`（Governance）：企业如何被治理（问责、透明度、激励）；对应经典 Corporate Governance 文献。

课程语境下的高信息结论：
- ESG 政策很多是通过 labor-related decisions 落地：招聘（hiring）、安全投入（safety investment）、组织实践（organizational practices）。
- 因此 ESG 不只是“非财务披露”，而是会进入企业成本、风险与资本配置（investment/financing）决策。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Shareholder-Primacy-vs-Stakeholder-Theory](Asset Pricing/Theoretical AP/cards/Shareholder-Primacy-vs-Stakeholder-Theory)
- [Asset Pricing/Theoretical AP/cards/Stakeholder-Objective-and-Firm-Value](Asset Pricing/Theoretical AP/cards/Stakeholder-Objective-and-Firm-Value)
- [Asset Pricing/Theoretical AP/cards/ESG-Labor-Channel-in-Corporate-Finance](Asset Pricing/Theoretical AP/cards/ESG-Labor-Channel-in-Corporate-Finance)

## 9. Labor Perspective of Firms’ E&S Practices

### 9.1 Measuring Firms’ E&S Practices（slide 13/61）

> [!summary] 传统 E&S 测度的问题
> - 常见指标来自外部评级（MSCI、Refinitiv）、企业披露（10-K、sustainability report）与媒体文本。
> - 这些指标偏“外部视角”（outside view），存在噪声、评级分歧（rating disagreement）与策略性披露（greenwashing）风险。

图对应信息（Berg et al., 2022）：
- 不同 ESG/E&S 评级之间相关性有限，评级机构间分歧在公司层面普遍存在。
- 含义：仅依赖外部评级会引入测度误差（measurement error），削弱识别与预测能力。

### 9.2 Understanding E&S from the Employee Perspective（slide 15/61）

员工“内部视角”（inside view）逻辑：
- 员工通过日常运营直接观察企业 E&S 实践：工作条件、合规执行、对利益相关者的实际对待、环境管理行为。
- E&S 政策本身依赖 labor/human capital 去执行与落地，因此员工信息可能更及时、更贴近真实执行质量。
- 聚合员工评论可补充传统 ESG 指标，并可能提供更前瞻（forward-looking）的信号。

### 9.3 Briscoe-Tran (2026): Employee Inside View of ESG（slide 15/61）

数据与测度：
- 约 10 million Glassdoor 员工评论。
- 约 43% 评论涉及 E/S/G 相关内容。
- 构建文本型 ESG “inside-view” 指标。

主结果（图对应）：
- 员工 ESG 视角对企业未来 ESG 表现具有显著预测力（如 carbon emissions、diversity rankings、workplace controversy、internal control weaknesses）。
- 在预测表现上优于商业评级（如 MSCI）。
- 对 ESG “cheap talk”（如 Business Roundtable pledge）更稳健，不易被口号式披露污染。

高信息结论：
- labor 不仅是生产要素，也是 ESG 信息渠道（information channel）。
- 对公司金融研究的含义是：可把员工文本指标作为 E&S 执行质量与未来风险暴露的先行变量（leading indicator）。

## 10. Labor Demand in Implementing E&S Practices

### 10.1 Green Human Capital and Labor Demand（slide 21/61）

> [!summary] Labor Demand in Implementing E&S Practices
> - 企业的 E&S 承诺（commitment）直接反映在其招聘决策（hiring decisions）中。
> - E&S 投资需要专门的人力资本（specialized human capital），例如环境工程、合规、气候科学与绿色运营。
> - 招聘启事（job postings）揭示了企业对绿色技能（green skills）的真实需求——超越了单纯的披露与评级。

对公司金融的含义：
- 观察企业的 green labor demand 是检验其真实 E&S 投资意愿的“行为视角”（behavioral perspective），比传统的 ESG 披露更难造假。

### 10.2 Measuring Green Human Capital（slide 22/61）

> [!summary] Measurement Approaches
> 如何在实证中测度企业的绿色人力资本（Green Human Capital）？
> - 核心逻辑：从岗位任务/技能（skills）或人员履历（resumes）出发。

主流数据源与测度（以 Darendeli, Law, and Shen, 2022 为例）：
- **数据源**：Lightcast (formerly Burning Glass)，提供详细的招聘岗位文本、雇主身份、发布日期、所需技能、职业代码等。
- **绿色技能（Green skills）**：基于环境技能分类体系（environment skill taxonomy），例如水处理（water treatment）、危险材料处理（hazardous materials）、环境法规与合规（environmental regulations and compliance）。
- **绿色度评分（Green Score per Job）**：

$$
\begin{aligned}
\text{Green Score per Job}
=\frac{\text{Number of green skills}}{\text{Total number of skills in each job}}.
\end{aligned}
$$

其他替代测度（Alternatives）：
- O*NET：基于 Green Occupations 的职业级分类。
- LinkedIn / Cognism：基于个人履历数据（resume data）测度企业现存人力资本存量。
- Revelio Labs：估计企业在各职业的雇员数量。

### 10.3 Darendeli, Law, and Shen (2022): Implications of Green Hiring（slide 24/61）

主结果（Main Findings）：
- 绿色招聘（Green hiring）$\Longrightarrow$ 更高的未来盈利能力（higher future profitability），且该预测力超越了传统的 ESG 评级。
- 带来更多绿色专利（more green patents）与更高的专利质量。
- 与传统 KLD 评级没有很强的相关性（no strong association with KLD ratings）。
- 对应更高的工资（higher wages）。

### 10.4 Discussions: Signals, Greenwashing, and Real Capabilities（slide 25/61）

> [!summary] Discussions: What information is captured by job postings?
> - **捕捉的是需求而非结果**：Job postings 衡量的是企业的劳动力需求（labor demand），并不必然等同于实际招聘落地（realized hiring）或最终的劳动力结构组成。

Greenwashing（漂绿）与真实能力的辨析：
- 招聘启事可以作为企业投资绿色人力资本的信号（signal），这比单纯的文本披露更进一步。
- **但信号依然可以是策略性的（strategic）**：需区分 Marketing（象征性信号，symbolic signaling）与 Engineering（真实的组织能力构建，real capability building）。
- **Chen (2022) 的机制区分**：
  - Reporting & disclosure tasks（如 ESG 指标测算、分析、沟通）：主要具有**信息特征（informational）**。
  - Implementation & operational governance tasks：更可能产生**直接的环境改善（direct environmental improvements）**。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Green-Human-Capital-Measurement](Asset Pricing/Theoretical AP/cards/Green-Human-Capital-Measurement)
- [Asset Pricing/Theoretical AP/cards/Job-Postings-as-E-S-Demand-Signal](Asset Pricing/Theoretical AP/cards/Job-Postings-as-E-S-Demand-Signal)
- [Asset Pricing/Theoretical AP/cards/Greenwashing-Marketing-vs-Engineering-Tasks](Asset Pricing/Theoretical AP/cards/Greenwashing-Marketing-vs-Engineering-Tasks)

## 11. Balancing E & S Practices

### 11.1 Trade-offs Across E & S Dimensions（slide 27/61）

> [!summary] Balancing E & S Practices
> - 此前讨论的是企业如何在 E&S 目标与财务目标（financial objectives）之间做权衡。
> - 实际上，E&S 经常被视为一个单一概念（single construct），但企业在不同维度（dimensions）之间也面临权衡（trade-offs）。

E 与 S 投资可能会在以下方面产生竞争（compete for）：
- 财务资源（Financial resources）
- 管理层注意力（Managerial attention）
- 组织能力（Organizational capacity）
- 监管与利益相关者压力（Regulatory and stakeholder pressure）

**核心研究问题（Key Question）**：企业是否在不同维度之间替代努力（substitute effort across different dimensions）？

### 11.2 Empirical Evidence on E & S Substitution（slide 28/61）

> [!summary] Empirical Evidence
> 两篇最新工作论文展示了环境（E）与社会（S）维度的替代效应（substitution）证据。

**Huang, Li, and Zhou (2025)**：
- **政策冲击**：州层面实施 E-Verify mandates（要求雇主核实新员工的工作授权，从而减少非法劳工雇佣及相关的工作场所剥削——这是一种 **Social improvement**）。
- **结果**：在 E-Verify 实施后，工厂层面的有毒排放（toxic emissions）增加，这主要由更低的排放效率（lower emission efficiency）驱动。
- **机制探讨**：几乎没有证据表明是财务约束（financial constraints）驱动了这些效应。

**Effah, Qi, and Zhang (2025)**：
- **政策冲击**：更严格的环境监管（Stringent environmental regulations，属于 **E 的提升**）。
- **结果**：导致工作场所安全违规（workplace safety violations，属于 **S 的下降**）增加。
- **机制探讨**：由于合规所需要的财务约束（financial constraints）与运营调整（operational adjustments）带来了压力。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Trade-offs-in-ESG-Dimensions](Asset Pricing/Theoretical AP/cards/Trade-offs-in-ESG-Dimensions)
- [Asset Pricing/Theoretical AP/cards/Substitution-between-E-and-S](Asset Pricing/Theoretical AP/cards/Substitution-between-E-and-S)

## 12. Climate Change and the Labor Market

### 12.1 Heat Risk and Workplace Safety（slide 30/61）

> [!summary] Heat Risk Facts（US context）
> - 长期趋势：美国气温变化呈持续上升（slide 图示，source: NASA/GISS & EPA）。
> - 截面暴露：各州升温幅度存在明显异质性（地图图示）。
> - 具体时间点：**2024年8月（August 2024）** 是 NOAA 175-year record 中最热的 8 月。
> - 劳动健康含义：极端高温（extreme heat）已成为关键天气相关死亡与伤害风险来源之一（课堂引用 Biden, 2021）。
> - 数量级：当前每年约 **120,000** 起高温相关伤害，若缺乏适应措施，至 **2050** 年可能升至 **450,000**（Atlantic Council, 2021）。

对企业与公司金融（Corporate Finance）的映射：
- 高温暴露提升用工成本（injury, absenteeism, turnover）并压低劳动生产率（labor productivity）。
- 适应性资本开支（adaptation CAPEX）成为必要投资：降温设备、排班调整、PPE、安全培训。
- 热风险暴露可进入估值与融资约束：现金流波动、保险成本、运营中断风险上升。
- 劳动密集且户外暴露行业（construction, logistics, agriculture）受影响更强，存在行业异质性。

实证识别入口（后续可展开）：
- 天气冲击（temperature anomalies）× 行业户外暴露度 的 DiD / panel 设计。
- 用县级气温与企业-工厂地理匹配，识别热冲击对 injury rate、wage bill、TFP、利润率的影响。
- 检验 adaptation 的缓释效应：高温地区中，先行投资降温/安全措施的企业是否损失更小。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Heat-Risk-and-Workplace-Safety](Asset Pricing/Theoretical AP/cards/Heat-Risk-and-Workplace-Safety)
- [Asset Pricing/Theoretical AP/cards/Climate-Labor-Productivity-Channel](Asset Pricing/Theoretical AP/cards/Climate-Labor-Productivity-Channel)
- [Asset Pricing/Theoretical AP/cards/Adaptation-CAPEX-and-Firm-Value](Asset Pricing/Theoretical AP/cards/Adaptation-CAPEX-and-Firm-Value)

### 12.2 Heat-Induced Labor Costs（slide 31/61）

> [!summary] Heat → Labor Cost Channels
> - 高温暴露（heat exposure）会引发疾病，损害工人的体能与认知表现（physical and cognitive performance）。
> - 极端高温会降低劳动生产率（labor productivity），进而压低经营收入（operating revenues）。
> - 极端高温会降低劳动供给（labor force supply），表现为缺勤、工时下降、离职上升。
> - 企业需增加预防与适应投入（preventive measures），并提高 compensation package 与 medical care。
> - 若发生热伤害/致死事件，企业面临声誉损失（reputational damage）与诉讼风险（litigation risk）。

文献锚点（slide cited）：
- 健康与认知损伤：Luber and McGeehin (2008); Mora et al. (2017); LoPalo (2023)。
- 生产率下降：Xiao (2024); Addoum et al. (2023); Pankratz and Schiller (2023)。
- 劳动供给下降：Graff Zivin and Neidell (2014); Somanathan et al. (2021)。
- 诉讼/声誉风险：Ortiz-Molina, Xiao, and Zheng (2023)。

对公司金融（Corporate Finance）的映射：
- 成本端：wage bill、benefits、health/safety OPEX 上升。
- 收入端：单位工时产出下降，订单履约与服务质量受冲击，revenues/margins 承压。
- 风险端：法律赔付、监管处罚、保险保费与融资风险溢价（risk premium）上行。
- 投资端：形成“适应性投资 vs 不作为损失”的资本预算问题（CAPEX vs expected loss）。

可操作的实证变量（后续建模）：
- labor outcomes：injury claims, absenteeism, turnover, overtime, wage growth。
- firm outcomes：sales, gross margin, operating income, SG&A, insurance expense。
- exposure：temperature bins（如 >90°F 天数）、湿球温度（WBGT）、户外作业占比。
- adaptation proxy：空调/降温设备投资、安全培训、高温停工规则、班次调整。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Heat-Induced-Labor-Cost-Channels](Asset Pricing/Theoretical AP/cards/Heat-Induced-Labor-Cost-Channels)
- [Asset Pricing/Theoretical AP/cards/Heat-Exposure-and-Firm-Performance](Asset Pricing/Theoretical AP/cards/Heat-Exposure-and-Firm-Performance)
- [Asset Pricing/Theoretical AP/cards/Climate-Adaptation-vs-Financial-Constraint](Asset Pricing/Theoretical AP/cards/Climate-Adaptation-vs-Financial-Constraint)

### 12.3 Mechanism: Human Capital Efficiency and Labor Market Frictions（slide 32/61）

> [!summary] Core Mechanism
> 人力资本效率（efficiency of human capital）下降 + 劳动力市场摩擦（labor market frictions）上升  
> $\Longrightarrow$ 单位产出的劳动成本（labor cost per unit of output）上升。

紧凑表达：

$$
\begin{aligned}
\text{ULC}
:=\frac{w}{A_L},
\end{aligned}
$$

其中 $w$ 为单位劳动价格（wage + benefits），$A_L$ 为劳动生产率（labor productivity）。

$$
\begin{aligned}
A_L\downarrow\ \text{(heat stress)}\quad \text{且}\quad w\uparrow\ \text{(frictions/compensation pressure)}
\Longrightarrow \text{ULC}\uparrow.
\end{aligned}
$$

公司金融含义（直接）：
- 在产出价格短期粘性的情况下，ULC 上升会压缩利润率（margin compression）。
- 劳动调整摩擦（招聘、培训、替换成本）会放大高温冲击的持久性。
- 企业更有动力进行 adaptation investment 或生产自动化（automation/AI）以对冲劳动效率下滑。

### 12.4 Mitigation, Adaptation, and Transition（slide 33/61）

> [!summary] 三个概念要严格区分
> - **Mitigation（减缓）**：减少温室气体排放，降低气候变化幅度（长期“降源”）。
> - **Adaptation（适应）**：提升对物理气候冲击的韧性（应对 heat/flood/extreme weather）。
> - **Transition（转型）**：因气候政策与监管变化带来的经营调整（carbon tax、emission standard、disclosure rules）。

在企业层面的对应动作：
- mitigation：节能改造、低碳技术替代、供应链减排。
- adaptation：降温设备、工时/班次重排、高温防护和安全流程。
- transition：合规披露体系建设、碳成本管理、资产与业务重配置。

对公司金融（Corporate Finance）的识别意义：
- mitigation 更偏长期现金流与资本开支结构（long-horizon CAPEX mix）。
- adaptation 更偏短中期运营韧性与劳动成本波动管理（operational resilience）。
- transition 更偏政策冲击下的估值重定价与融资约束变化（policy-induced repricing）。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Mitigation-vs-Adaptation-vs-Transition](Asset Pricing/Theoretical AP/cards/Mitigation-vs-Adaptation-vs-Transition)
- [Asset Pricing/Theoretical AP/cards/Climate-Policy-Transition-Risk-and-Firm-Value](Asset Pricing/Theoretical AP/cards/Climate-Policy-Transition-Risk-and-Firm-Value)
- [Asset Pricing/Theoretical AP/cards/Adaptation-Investment-and-Labor-Resilience](Asset Pricing/Theoretical AP/cards/Adaptation-Investment-and-Labor-Resilience)

### 12.5 Adaptation to Heat Risk and Real Impact（slide 36/61）

> [!summary] Empirical Evidence: How Firms Adapt to Heat Risk
> - **Pankratz and Schiller (2024)**：高温风险扰动供应链，企业转向预期热暴露更低的供应商。
> - **Acharya, Bhardwaj, Tomunen (2024)**：多地企业将就业从高温受影响县转移到较少受影响县。
> - **Ponticelli, Xu, Zeume (2024)**：高温提升小工厂能耗并压低生产率；长期看工厂数量下降、地方劳动力市场集中度上升。
> - **Xiao (2024)**：企业通过资本深化（capital deepening）缓解热致劳动效率损失。
> - **Xiao (2025)**：高温风险抑制企业进入与就业创造；高质量创业者与在位企业扩张仅能部分对冲总体进入下滑。
> - **Ortiz-Molina, Xiao, Zheng (2023)**：高温疾病防护标准（HIPS）推动受影响工厂增加 IT 投资。

机制归纳（从“冲击”到“重配”）：
- 运营重配：供应链、就业与产能在地区间重新配置（reallocation）。
- 技术替代：通过自动化/IT/资本深化降低对高温脆弱劳动投入的依赖。
- 市场结构变化：长期可能出现进入下降与集中度上升（concentration rise）。

对公司金融（Corporate Finance）的含义：
- 资本预算从“增长型 CAPEX”部分转向“韧性型 CAPEX”（resilience CAPEX）。
- 热风险暴露影响企业边际进入决策、扩张节奏与组织边界（make/buy、location）。
- 资产定价与信贷评估需纳入“适应能力差异”（adaptation capacity heterogeneity）。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Heat-Adaptation-Reallocation-and-Firm-Boundaries](Asset Pricing/Theoretical AP/cards/Heat-Adaptation-Reallocation-and-Firm-Boundaries)
- [Asset Pricing/Theoretical AP/cards/Heat-Risk-Capital-Deepening-and-Automation](Asset Pricing/Theoretical AP/cards/Heat-Risk-Capital-Deepening-and-Automation)
- [Asset Pricing/Theoretical AP/cards/Climate-Risk-and-Market-Concentration](Asset Pricing/Theoretical AP/cards/Climate-Risk-and-Market-Concentration)

### 12.6 Ortiz-Molina, Xiao and Zheng (2023): HIPS Policy Variation（slide 37/61）

> [!summary] Why This Slide Matters
> Table B.1 展示了美国各州 Heat Illness Prevention Standards（HIPS）的**采用/待定**进展、实施年份与覆盖范围（indoor/outdoor）。
> 这类跨州、跨时间政策差异为识别热风险治理效果提供了准自然实验（quasi-experiment）基础。

识别直觉（identification intuition）：
- 横截面差异：有些州已实施 HIPS，有些州仍处于 pending/未实施。
- 时间差异：实施年份不同，形成 staggered adoption。
- 暴露差异：行业/工厂的热暴露强度不同（outdoor 更敏感）。

可行研究设计（后续展开）：
- `DiD / event-study`：比较实施州与未实施州在政策前后的变化。
- 三重差分（DDD）：`HIPS state × post × high-heat-exposure plants/workers`。
- 结果变量：injury rate、absenteeism、wage bill、IT/automation investment、plant closure/entry。

公司金融含义：
- HIPS 本质上把“气候劳动风险”从软约束变成制度化合规约束（compliance constraint）。
- 短期可能推高合规成本，长期可能通过降低伤害与停工风险改善现金流稳定性。

### 12.7 Additional Readings（slide 38/61）

> [!summary] Reading Pool for Extension
> - **Asset Pricing**：温度敏感度、错定价（mispricing）与可预测收益（predictable returns）。
> - **Credit Access**：极端温度冲击与低收入家庭信贷可得性（如 payday loans）。

课件列出的文献（slide cited）：
- Cuculiza, Kumar, Xin, and Zhang (2025), *Temperature sensitivity, mispricing, and predictable returns*, *Management Science* (forthcoming)。
- Pu (2023), *Abnormal local temperatures and asset prices*, Working Paper。
- Xie, Xie, and Zhang (2024), *Extreme Temperature and Low-income Household Finance: Evidence from Payday Loans*, Working Paper。

与本节连接点：
- 从 labor channel 向 asset-pricing / household-finance 外溢，说明热风险是“全市场约束”而非仅企业运营问题。

## 13. AI and the Labor Market

### 13.1 AI and Corporate Finance（slide 40/61）

> [!summary] AI as a General-Purpose Technology（GPT）
> - AI 是通用技术（general-purpose technology），会重塑生产函数、劳动需求与企业组织方式。
> - labor demand and skill composition（岗位结构与技能结构重配）。
> - investment in computing, GPUs, data infrastructure, and intangible capital（算力/数据/无形资本投入）。
> - organization structure and firm boundaries（组织结构与企业边界调整）。

Financial implications（公司金融视角）：
- 增长与规模化（growth opportunities and scalability）：AI 可放大规模报酬与市场扩张速度。
- 风险、不确定性与估值（risk, uncertainty, valuation）：技术路径与竞争格局不确定性上升，估值分化加剧。
- 资本结构与融资需求（capital structure and financing needs）：前期高投入可能提高外部融资需求并改变资本结构选择。

核心研究问题（from slide）：

$$
\begin{aligned}
\text{How does AI adoption reshape firms' production, growth trajectories, and valuation?}
\end{aligned}
$$

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/AI-as-GPT-and-Firm-Production](Asset Pricing/Theoretical AP/cards/AI-as-GPT-and-Firm-Production)
- [Asset Pricing/Theoretical AP/cards/AI-Adoption-Labor-Demand-and-Skill-Composition](Asset Pricing/Theoretical AP/cards/AI-Adoption-Labor-Demand-and-Skill-Composition)
- [Asset Pricing/Theoretical AP/cards/AI-Investment-Intangible-Capital-and-Valuation](Asset Pricing/Theoretical AP/cards/AI-Investment-Intangible-Capital-and-Valuation)

### 13.2 Babina et al. (2024): Measurement, Identification, and Mechanisms（slide 41-48/61）

> [!summary] Research Question
> 企业层面的 AI 投资是否提升增长（growth）？主要通过哪条渠道实现？
> - product innovation（产品创新）？
> - process innovation / cost reduction（流程创新/降本）？

核心贡献：构建企业级 AI 投资强度（firm-level AI intensity）指标。

测度框架（data + construction）：
- Job postings（Burning Glass）：识别企业对 AI 人才与 AI 相关技能的需求流量（flow demand）。
- Resumes（Cognism）：识别企业 AI 技能存量（stock of AI-skilled workers）。
- Data-driven skill taxonomy：以 AI / ML / NLP / CV 相关词汇与技能共现构造技能层面的 AI 暴露度。

Skill-level 指标（job postings）：

$$
\begin{aligned}
w^{AI}_{s}
=
\frac{
\#\{\text{jobs requiring skill }s\ \text{and}\ (\text{AI/ML/NLP/CV in required skills or job title})\}
}{
\#\{\text{jobs requiring skill }s\}
}.
\end{aligned}
$$

其中：
- 分子：同时要求技能 $s$ 且岗位文本出现 AI 相关要求的招聘数量。
- 分母：所有要求技能 $s$ 的招聘数量。
- 直觉：$w_s^{AI}$ 越高，说明该技能与 AI 的互补性/关联度越强。

Resume-based 补充测度（Cognism）：
- 在个人履历中识别顶级 AI 技能（top AI-related skills）在岗位经历、论文、专利、奖项中的出现。
- 聚合到企业层面后，可得到 AI 人才存量与技能结构升级速度。

对公司金融（Corporate Finance）的用途：
- 可作为解释变量进入 growth/valuation 回归，检验 AI 投资与企业成长路径的关系。
- 也可用于异质性分析：高 AI intensity 企业是否更偏向 product innovation 或 cost-reducing process innovation。

> [!summary] 识别设定（2010→2018 long-difference）
> $$
> \begin{aligned}
> \Delta \log Y_i
> = \beta\,\Delta \text{ShareAIWorkers}_i
> + \Gamma' \Delta X_i
> + \text{Industry FE}
> + \varepsilon_i,
> \end{aligned}
> $$
> 其中 $Y_i\in\{\text{Sales},\text{Employment},\text{Market Value}\}$。

**图A：Long-difference OLS（slide 46）**
![[Pasted image 20260413152226.png]]

图A结果解读：
- $\beta$ 在三类结果变量上均为正且显著（约 $0.20\sim0.24$），加入 controls 后结论稳健。
- 直观上，AI worker share 上升与销售、就业、市场价值同步增长相关。
- 量级示例：若 $\Delta\text{ShareAIWorkers}=0.10$（10pp），则对应 $\Delta\log Y\approx 0.02\sim0.024$（约 2.0%–2.4%）。

**图B：IV 结果（slide 47）**
![[Pasted image 20260413152211.png]]

图B识别与结果解读：

$$
\begin{aligned}
Z_i
=\text{Exposure}_{i,\text{pre-2010 hiring network}}
\times
\text{AIResearchStrength}_{u,\text{ex-ante}}.
\end{aligned}
$$

- 识别假设（课件原意）：2010 年企业与 AI 强校的历史连接，尤其在非科技企业样本中，不是由当期 AI 人才需求直接驱动。
- 二阶段系数整体高于 OLS，销售约 $0.316\sim0.516$，就业约 $0.339\sim0.764$，市值约 $0.344\sim0.554$。
- 方向一致且多数显著，支持“AI 投资提升企业增长与估值”的因果解释。
- IV > OLS 的模式与“OLS 受测度误差/反向因果等偏误向下”一致（至少不支持纯粹的虚假相关）。

公司金融含义（可直接放结论）：
- AI 人才与 AI 资本投入不仅改变成本结构，也与规模扩张（sales/employment）和资本市场定价（market value）正相关。
- 对融资决策而言，AI 投资可被视为“高前期投入 + 高增长期权（growth option）”的项目类型。

**机制分解（slide 48/61）**

> [!summary] Main Takeaway
> 更高 AI intensity 与更高的 sales growth、employment growth、market valuation 相关；
> 机制上更支持 **product innovation**，而非 **process innovation / cost reduction**。

机制证据（支持 product innovation）：
- 更多产品专利（more product patents）。
- 更多商标（more trademarks）。
- 产品组合扩张（expansion of product portfolios）。

弱证据（不支持“主要靠降本提效”）：
- 对更高 TFP（productivity）证据有限。
- 对成本下降（cost reduction）证据有限。
- 对流程创新（process innovation）证据有限。

解释（和上文识别结果联动）：
- AI 在样本期内更像“需求扩张/产品拓展”工具，而不是“即时运营效率提升”工具。
- 因此估值上行可更多理解为增长期权（growth option）重估，而非短期利润率机械抬升。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Babina-et-al-2024-AI-Investment-Measurement](Asset Pricing/Theoretical AP/cards/Babina-et-al-2024-AI-Investment-Measurement)
- [Asset Pricing/Theoretical AP/cards/AI-Skill-Exposure-w_sAI-Construction](Asset Pricing/Theoretical AP/cards/AI-Skill-Exposure-w_sAI-Construction)
- [Asset Pricing/Theoretical AP/cards/AI-Intensity-Growth-and-Innovation-Channel](Asset Pricing/Theoretical AP/cards/AI-Intensity-Growth-and-Innovation-Channel)
- [Asset Pricing/Theoretical AP/cards/AI-Product-Innovation-vs-Process-Innovation-Channel](Asset Pricing/Theoretical AP/cards/AI-Product-Innovation-vs-Process-Innovation-Channel)

### 13.3 Eisfeldt et al. (2025): GenAI Exposure and Firm Outcomes（slide 49-52/61）

> [!summary] 测度定义（用于后续所有图）
> - 任务暴露度：$X^T\in\{0,\ 0.5,\ 1\}$（无暴露/需要额外支持才可显著提效/可直接显著提效）。
> - 职业暴露度：
> $$
> \begin{aligned}
> X^O=\frac{\sum_{T\in O}X^T}{\sum_{T\in O}1}.
> \end{aligned}
> $$
> - 企业暴露度：
> $$
> \begin{aligned}
> X^f=\sum_{O\in f}\text{EmpShare}_{f,O}\times X^O.
> \end{aligned}
> $$

**图A：职业暴露度与工资（slide 49-50）**
![[Pasted image 20260413152855.png]]

图A结果解读：
- 横轴为年工资（2022），纵轴为 GenAI 暴露度；拟合线显著向上，表示高工资职业平均暴露度更高。
- 高暴露集中在 `Computer and Mathematical`、`Legal`、`Business and Financial Operations` 等知识密集职业。
- 低暴露集中在体力/现场任务占比高的职业（如 maintenance、grounds cleaning、healthcare support）。

**图B：ChatGPT 事件期市场反应（slide 51）**
![[Pasted image 20260413153000.png]]

图B结果解读：
- 在 ChatGPT event period（图中虚线区间）后，高 GenAI 暴露组合路径明显上行并持续高于低暴露组合。
- 说明资本市场对“可被 GenAI 增强的岗位结构”给出更高定价。

**图C：招聘与就业调整（slide 52）**
![[Pasted image 20260413153005.png]]

图C结果解读：
- `Post × GenAI Exp` 在高暴露招聘与高暴露就业上为负，表示事件后企业缩减高暴露岗位需求/配置。
- `Post × GenAI Exp × ShareSupp` 为正，说明当补充型技能供给（complementary supply）更高时，收缩幅度更小。

**图D：盈利预期与利润（slide 52）**
![[Pasted image 20260413153010.png]]

图D结果解读：
- `Post × GenAI Exp` 对分析师 EPS 预测、长期增长预测（LTG）和总利润（gross profit）为正且显著。
- 与图C合并看：企业一边重配岗位结构，一边获得更高盈利预期与利润表现。

对公司金融（Corporate Finance）的信息含量结论：
- GenAI 冲击在短期同时体现为“岗位重配（labor reallocation）+ 估值与盈利上修（repricing + profit upgrade）”。
- 企业 GenAI 暴露度 $X^f$ 可作为解释异质性的重要状态变量（state variable）。

可挂接卡片（后续展开）：
- [Asset Pricing/Theoretical AP/cards/Eisfeldt-et-al-2025-GenAI-Exposure-Framework](Asset Pricing/Theoretical AP/cards/Eisfeldt-et-al-2025-GenAI-Exposure-Framework)
- [Asset Pricing/Theoretical AP/cards/Task-to-Occupation-AI-Exposure-Aggregation](Asset Pricing/Theoretical AP/cards/Task-to-Occupation-AI-Exposure-Aggregation)
- [Asset Pricing/Theoretical AP/cards/GenAI-Productivity-vs-Demand-Creation-Channel](Asset Pricing/Theoretical AP/cards/GenAI-Productivity-vs-Demand-Creation-Channel)
