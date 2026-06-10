# Corporate Finance


### 考题类型

1. Literature Review：按理论/机制分类，每篇文献必须服务于一个理论。
2. Research Proposal：研究假设、数据、模型、预期结论、identification threats。
3. 机制题 + empirical supporting：像 SEO 样题，先写三种 theory，再各配 empirical paper，再设计 policy shock。

**1. Literature Review**

$$
\begin{aligned}
\text{Literature Review}
&=
\left\{
\begin{aligned}
&\text{theory / mechanism}\\
&\text{classic paper and empirical design}\\
&\text{main finding}\\
&\text{how it supports or challenges the theory}
\end{aligned}
\right.
\end{aligned}
$$


**2. Research Proposal**

$$
\begin{aligned}
\text{Research Proposal}
&=
\left\{
\begin{aligned}
&\text{research question}\\
&\text{testable hypotheses}\\
&\text{identification strategy}\\
&\text{data and variable construction}\\
&\text{baseline regression}\\
&\text{expected outcomes}\\
&\text{identification threats and robustness}
\end{aligned}
\right.
\end{aligned}
$$

- DiD：$Y_{i,t}=\alpha_i+\delta_t+\beta(\text{Treated}_i\times \text{Post}_t)+\gamma'X_{i,t-1}+\varepsilon_{i,t}.$
- event study：$Y_{i,t}=\alpha_i+\delta_t+\sum_{k\neq -1}\beta_k\left(\text{Treated}_i\times \mathbf{1}\{t-T_i=k\}\right)+\gamma'X_{i,t-1}+\varepsilon_{i,t}.$
- RDD：$\tau=\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r].$

**Identification threats**

1. Differential trends / invalid counterfactual：treated 与 control 本来趋势不同，违背parallel trend。
2. Confounding shocks / bundled policy：政策同时改变其他机制，无法隔离想检验的机制。
3. selection into treatment
4. manipulation around cutoff
5. measurement error
6. sample composition change
7. spillovers
8. concurrent announcements
9. weak first stage
10. long-run return benchmark sensitivity

**主题结构**

| Theme             | Literature Review                                                        | Research Proposal                               | Mechanism                                              |
| :---------------- | :----------------------------------------------------------------------- | :---------------------------------------------- | :----------------------------------------------------- |
| Capital Structure | trade-off, pecking order, market timing, agency                          | tax shield / interest deductibility shock       | tax shield, adverse selection, timing                  |
| Payout Policy     | tax, signaling, agency, lifecycle, flexibility                           | dividend tax cut or repurchase disclosure shock | tax clientele, signaling, agency                       |
| SEO               | adverse selection, timing, monitoring, price pressure                    | pre-SEO disclosure or waiting-period shock      | adverse selection, market timing, price pressure       |
| Labor Finance     | labor supply, bargaining, adjustment cost, welfare                       | opioid / H-1B / labor protection shock          | IT substitution, leverage response, worker safety      |
| ESG / Climate     | measurement, green human capital, E-S trade-off, climate labor risk      | green hiring / ESG disclosure shock             | real capability, greenwashing, climate adaptation      |
| AI                | AI measurement, AI as GPT, product vs process innovation, GenAI exposure | AI exposure with IV / ChatGPT event study       | growth options, innovation channel, labor reallocation |

**核心文献**

**Theory 文献**

- **Capital Structure**
	- **MM irrelevance**：<span style="color:#1f6feb;font-weight:700">Modigliani and Miller (1958, 1963)</span>；无摩擦市场下资本结构不影响公司价值；加入公司税后 $V_L=V_U+T_CD$
	- **Trade-off theory**：tax shield vs distress costs；firms 在边际税盾收益和破产成本间权衡
	- **Pecking order**：<span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span>；信息不对称下 equity issuance 传递 overvaluation signal，融资顺序为 internal funds → debt → equity
	- **Market timing**：firms 在高估时发行股票，在低估时回购，资本结构是过去择时行为的累积
	- **Agency theory**：debt 可约束 free cash flow，但也会产生 debt overhang 和 risk shifting
- **Payout Policy**
	- **MM irrelevance**：<span style="color:#1f6feb;font-weight:700">Modigliani and Miller (1961)</span>；无摩擦市场下 payout policy 不影响股东财富
	- **Tax clientele**：dividend 和 capital gains 税率不同，投资者根据税率偏好选择股票
	- **Signaling**：dividend 变化传递管理层对未来现金流的私有信息
	- **Agency / free cash flow**：<span style="color:#1f6feb;font-weight:700">Jensen (1986)</span>；payout 减少管理层控制的 free cash flow，约束 overinvestment
- **SEO**
	- **Adverse selection**：<span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span>；管理层信息优势导致 equity issuance 被市场解读为 overvaluation
	- **Market timing**：firms 在高估时发行股票，预测长期负回报
	- **Monitoring**：equity issuance 改变所有权结构，影响治理和监督
	- **Price pressure**：新股供给在短期内压低价格（需求曲线向下倾斜）

**Empirical 文献**

- **Capital Structure**
	- <span style="color:#1f6feb;font-weight:700">Graham (2000)</span>-**Trade-off theory**
		- 利用税法和企业利润分布，模拟出不同债务水平下的“边际税盾收益曲线”。将理论上能使税盾现值最大化的“最优杠杆率”与企业的实际杠杆率进行比对。
		- **核心发现**：增加债务确实能带来经济意义上显著的税盾收益；但企业的**实际杠杆率远低于税盾最大化水平**。证明税盾是重要因素，但并非唯一决定因素，财务困境或代理成本等摩擦限制了举债，挑战了简单的静态权衡理论。
	- <span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span>-**Market timing**
		- 构建一个由“外部融资权重”加权的“历史市净率(M/B)”指标，代表企业的历史择时行为。通过面板回归控制常规变量，检验历史高估值对当前杠杆率是否有持续的预测力。
		- **核心发现：** 历史M/B能强烈且持久（超10年）地负向预测当前杠杆率。证明资本结构主要是**历史择时行为的累积结果**，企业并不会主动向目标杠杆调整，强烈支持市场择时假说。
	- <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2009)</span>-**Leverage determinants**
		- 在大样本面板数据中，将各类理论预测的影响变量放在一起跑回归，检验在不同样本期和杠杆定义下，哪些变量最稳健。
		- **核心发现：** **行业中位数、有形资产占比、规模、M/B**是最稳健的杠杆决定因素；盈利能力与杠杆显著负相关（支持优序融资理论）。证明没有单一理论能解释所有现象，实际杠杆是多种摩擦综合作用的结果。
- **Payout Policy**
	- <span style="color:#1f6feb;font-weight:700">Elton and Gruber (1970)</span>-**Tax clientele**
		- 测量除权日股价下跌幅度与每股股利的比值 $(P_{cum}-P_{ex})/D$。如果股利税高于资本利得税，该比率应小于1，并反映两者的税率差。
		- **核心发现：** 该比率显著小于1且非常接近理论预测的税率比。证明**税率差异导致了投资者分层**，高税率投资者会系统性避开高股利股票。
	- <span style="color:#1f6feb;font-weight:700">Aharony and Swary (1980)</span>-**Signaling**
		- 运用事件研究法，控制住同期的盈余公告，单纯测量股利增减宣告期间的异常收益率 (CAR)，检验其是否传递了未来现金流的信息。
		- **核心发现：** 股利增加带来显著正CAR，减少带来显著负CAR（且负反应更剧烈）。证明市场将**股利变化视为未来盈利的真实信号**。
	- <span style="color:#1f6feb;font-weight:700">Jagannathan, Stephens and Weisbach (2000)</span>-**Flexibility / timing**
		- 比较支付股利与股票回购两类公司的现金流波动性。检验灵活性假设：粘性的股利对应永久性现金流，灵活的回购对应暂时性现金流。
		- **核心发现：** 发放股利的公司现金流更稳定可测，而回购股票的公司现金流波动更大。证明**支付方式的选择反映了现金流的性质**。
	- <span style="color:#1f6feb;font-weight:700">Peyer and Vermaelen (2009)</span>-**Repurchase and market timing**
		- 测量股票回购宣告的短期CAR以及长期（3年）买入持有异常收益率 (BHAR)。检验管理层是否在股价被低估时精准回购。
		- **核心发现：** 短期CAR平均为+2.5%，且宣告后3年长期收益率显著为正。证明回购有效传递了被低估信号，且管理层成功进行了市场择时。
- **SEO**
	- <span style="color:#1f6feb;font-weight:700">Asquith and Mullins (1986)</span>-**Adverse selection**
		- 测量SEO宣告期[-1, +1]窗口的CAR，验证Myers-Majluf理论：市场是否认为管理层只在股价高估时发股。
		- **核心发现：** 宣告期平均CAR为-3.0%，且发行规模越大反应越糟。证明**信息不对称**是股权融资面临的严重摩擦，SEO被视作高估的坏消息。
	- <span style="color:#1f6feb;font-weight:700">Masulis and Korwar (1986)</span>-**insider selling signal**
		- 对比公司纯发新股 (Primary) 与包含内部人老股抛售 (Secondary) 的宣告效应差异。
		- **核心发现：** 包含内部人抛售的增发会引发更严重的市场惩罚 (CAR -4.7% vs -3.0%)。证明内部人减持放大了高估的负面信号。
	- <span style="color:#1f6feb;font-weight:700">Wruck (1989)</span>-**Monitoring**
		- 研究定向增发 (Private placements) 的宣告效应，并检验其与股权集中度变化的关系，对比公开发行的负面效应。
		- **核心发现：** 定向增发带来平均+4.5%的正CAR，且股权集中度上升时正收益更高。证明当增发能引入大股东、**改善公司治理时，监督红利能抵消逆向选择成本**。
	- <span style="color:#1f6feb;font-weight:700">Loughran and Ritter (1995)</span>-**Market timing and Long-run performance**
		- 在匹配规模与M/B后，比较SEO发行公司与未发行公司未来5年的长期回报率。
		- **核心发现：** 发行公司未来5年显著跑输匹配对象约30%。证明发行前股价确实被高估，管理层成功择时，而**投资者对SEO的负面信号反应不足**。
	- <span style="color:#1f6feb;font-weight:700">Eckbo and Masulis (1992)</span>-**Price pressure / flotation method**
		- 探究“配股之谜”：比较配股与包销的直接成本与隐性成本（认购不足风险、流动性成本、逆向选择信号）。
		- **核心发现**：虽然配股的直接承销费低，但隐性成本极高。综合考量后包销仍是最优解，证明**发行方式的选择基于总成本最小化**。
- **Labor Finance**
	- <span style="color:#1f6feb;font-weight:700">Matsa (2010)</span>-**Strategic leverage / bargaining**
		- 利用各州通过“工作权利法案”(削弱工会力量) 作为外生冲击，做DiD回归检验企业杠杆率的变化。
		- **核心发现：** 工会力量被削弱后，企业显著降低了杠杆。证明企业在面临强势工会时，会**利用高债务压缩可用现金流，以此作为工资谈判的防御工具**。
	- <span style="color:#1f6feb;font-weight:700">Agrawal and Matsa (2013)</span>-**Unemployment risk**
		- 利用各州“失业保险金” generosity 的调整作为冲击，检验劳工失业成本下降如何影响企业的债务选择。
		- **核心发现：** 失业福利提高后，企业显著增加了杠杆率。证明社会福利降低了员工面临的财务困境成本，从而**提高了企业的最优举债上限**。
	- <span style="color:#1f6feb;font-weight:700">Simintzi, Vig and Volpin (2015)</span> and <span style="color:#1f6feb;font-weight:700">Serfling (2016)</span>-**Labor adjustment costs**
		- 利用跨国就业保护法或美国各州非正当解雇法的交错通过，检验“裁员成本上升”如何影响资本结构。
		- **核心发现：** 解雇保护加强后，企业显著降低了财务杠杆。证明劳动力成为一种准固定成本（推高了**经营杠杆**），迫使企业降低财务风险以维持总风险平衡。
	- <span style="color:#1f6feb;font-weight:700">Ouimet, Simintzi and Ye (2025)</span>-**Labor supply / IT substitution**
		- 利用阿片类药物滥用危机作为劳动力供给的外生负向冲击，检验劳动力短缺对企业资本投资方向的影响。
		- 受冲击地区的工厂显著增加了IT和自动化投资。证明**劳动力短缺会引发“资本替代劳动”的结构性变化**。
	- <span style="color:#1f6feb;font-weight:700">Cohn and Wardlaw (2016)</span>-**Worker welfare**
		- 通过测量融资约束指标（如 KZ index、到违约距离）与工作场所伤害率的关系来检验。理论预测：财务压力迫使企业削减难以合约化且具有长期性的安全投资，从而增加伤害风险。
		- 核心发现：劳工作为利益相关者的观点。财务受限的公司受伤率显着更高;经济冲击后伤害增加。研究结果表明，财务摩擦的成本不仅体现在项目投资不足，还包括对工人安全的投资不足;工人承担部分经济困境费用。
- **ESG / Climate**
	- <span style="color:#1f6feb;font-weight:700">Berg et al. (2022)</span>，<span style="color:#1f6feb;font-weight:700">Briscoe-Tran (2026)</span>-**ESG measurement**
		- 比较各大外部评级机构的数据相关性；并用Glassdoor员工评价构建内部视角的ESG指标，比较两者对未来真实ESG事件的预测力。
		- **核心发现：** 外部评级机构间的相关性极低（噪音巨大）。而**员工评价构建的内部指标能更准的预测未来违规和评级变化**，证明外部评级严重滞后于内部真实运营。
	- <span style="color:#1f6feb;font-weight:700">Darendeli, Law and Shen (2022)</span>-**Green human capital**
		- 测量绿色招聘广告（如环境工程师、可持续发展经理）与随后的绿色创新（专利）、环境绩效（排放）及盈利能力之间的关系。
		- 人力资本渠道。绿色招聘能够预测未来绿色专利数量的增长、排放量的减少以及盈利能力的提升。研究结果表明，绿色招聘反映的是真正的能力建设，而非象征性的“漂绿”；绿色人力资本是有效实施ESG的关键投入。
	- <span style="color:#1f6feb;font-weight:700">Ortiz-Molina, Xiao and Zheng (2023)</span>-**Climate-labor risk**
		- 以加州高温预防标准为政策冲击，检验户外高暴露行业的劳动生产率及企业的适应性投资。
		- **核心发现：** 气候变暖直接导致高暴露行业劳动生产率下降及工伤成本上升，迫使企业增加降温和自动化等适应性资本支出，证明**气候物理风险已实质性落地**。
	- <span style="color:#1f6feb;font-weight:700">Huang, Li and Zhou (2025)</span>，<span style="color:#1f6feb;font-weight:700">Effah, Qi and Zhang (2025)</span>-**E-S trade-off**
		- 利用环境监管冲击（污染控制要求）作为实验组，检验其对企业社会责任成果（如工作场所安全、劳工实践）的影响。核心发现：在环境法规收紧后，受监管企业的环境绩效有所提升，但工作场所伤害率和劳工投诉也随之增加。研究结果揭示了资源有限时企业在环境和社会绩效方面面临的权衡取舍，因为企业会优先考虑强制性环境合规，而牺牲可自由支配的社会投资；这挑战了“将环境、社会和治理视为一揽子”的观点。
		- 检验环境 (E) 与社会 (S) 维度在企业价值或资本获取上的交互效应，对比互补性假说与替代性假说。核心发现：对于资源不受限制的企业而言，环境（E）与社会（S）之间的互动是互补的；但对于资源受限（面临财务或注意力限制）的企业而言，这种互动则显著为负。研究结果表明，ESG各维度之间的关系取决于资源的可用性；资源受限的企业会在环境与社会之间做出战略权衡。
- **AI**
	- <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span>-**AI as GPT / product innovation**
		- 根据招聘数据测量企业的AI采用率，利用“历史招聘网络×大学AI实力”构建工具变量(IV)，检验AI采用对企业增长的因果效应。
		- **核心发现：** AI采用显著提升了销售额、就业和市值。其核心驱动力是**增加产品创新和扩展市场**，而不是单纯的裁员降本，支持AI作为通用技术的定位。
	- <span style="color:#1f6feb;font-weight:700">Eisfeldt et al. (2025)</span> and <span style="color:#1f6feb;font-weight:700">Brynjolfsson, Li and Raymond (2025)</span>-**GenAI exposure / repricing**
		- 以ChatGPT发布为自然实验，基于岗位任务构建企业的GenAI暴露度指标，检验市场重定价反应以及对全要素生产率(TFP)的实际影响。
		- 市场迅速给予高GenAI暴露度的企业正向估值重估。微观数据显示，采用GenAI使TFP提升约8%，但伴随劳动力重置：低技能常规岗位被替代，高技能互补岗位（如AI工程师）需求激增。
	- <span style="color:#1f6feb;font-weight:700">Kogan et al. (2023)</span>-**Innovation measurement**
		- 利用机器学习构建基于“引用量”和“文本新颖度”的专利指标，测试其对企业未来销售增长和市值的预测能力。
		- **核心发现：** 引用加权和文本新颖度指标均能显著预测未来业绩增长，证明**专利文本数据是度量企业无形资产和成长机会的有效实证工具**。

### 1. Capital Structure

#### 1-1 Literature Review

**Question** 对 capital structure 做 literature review。按 trade-off、pecking order、market timing、agency-based theory 分类，说明每类理论的机制、预测和代表文献。

What determines leverage? tax shield, distress cost, information asymmetry, market timing, agency conflicts.

::::{solution}

| Theory        | Mechanism                                                             | Predictions                                                                                                             | Papers                                                                                                                                                                                                                                  |
| :------------ | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MM benchmark  | frictionless markets 下 financing mix 只切分现金流，不改变 firm value            | $V_L=V_U$；WACC 不随 leverage 变                                                                                            | <span style="color:#1f6feb;font-weight:700">Modigliani and Miller (1958, 1963)</span>                                                                                                                                                   |
| Trade-off     | tax shield vs expected distress / agency cost                         | tax rate、tangibility、size $\uparrow \Rightarrow leverage\uparrow$；risk、growth $\uparrow \Rightarrow leverage\downarrow$ | <span style="color:#1f6feb;font-weight:700">Graham (2000)</span>, <span style="color:#1f6feb;font-weight:700">Rajan and Zingales (1995)</span>, <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2009)</span>               |
| Pecking order | information asymmetry makes equity most costly                        | internal funds $\succ$ debt $\succ$ equity；profitability $\uparrow \Rightarrow leverage\downarrow$                      | <span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span>, <span style="color:#1f6feb;font-weight:700">Shyam-Sunder and Myers (1999)</span>, <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2003)</span> |
| Market timing | firms issue equity when overvalued, repurchase when undervalued       | high historical $M/B \Rightarrow$ lower current leverage；effects persistent                                             | <span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span>, <span style="color:#1f6feb;font-weight:700">Alti (2006)</span>, <span style="color:#1f6feb;font-weight:700">Kayhan and Titman (2007)</span>                |
| Agency-based  | debt disciplines managers but creates underinvestment / risk shifting | high FCF + low growth $\Rightarrow leverage\uparrow$；growth options $\Rightarrow leverage\downarrow$                    | <span style="color:#1f6feb;font-weight:700">Jensen (1986)</span>, <span style="color:#1f6feb;font-weight:700">Myers (1977)</span>, <span style="color:#1f6feb;font-weight:700">Smith and Watts (1992)</span>                            |

**Trade-off theory**

$$
\begin{aligned}
V_L
&=
V_U
+PV(\text{Tax Shield})
-PV(\text{Distress Cost})
-PV(\text{Agency Cost of Debt})
-PV(\text{Financial Flexibility Loss}).
\end{aligned}
$$

税盾提高债务收益，financial distress 和 agency costs 提高债务成本。Trade-off theory 预测 firms 在边际税盾收益等于边际破产成本处选择最优 leverage。<span style="color:#1f6feb;font-weight:700">Graham (2000)</span> 模拟 firm-specific marginal tax benefit curves，用 tax code 和 income distribution 计算不同 debt 水平下的税盾现值，发现税盾收益很大但实际 leverage 远低于最优，说明 tax benefits 重要但存在其他成本（financial distress、agency costs）或非税收摩擦限制 debt 使用。<span style="color:#1f6feb;font-weight:700">Rajan and Zingales (1995)</span> 与 <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2009)</span> 用大样本 cross-sectional regressions 检验 leverage determinants，发现 tangibility、size 正相关（支持 trade-off），profitability 负相关（支持 pecking order），说明多种理论部分正确，实际 leverage 是多种力量的综合。

**Pecking order**

$$
\begin{aligned}
\text{financing cost}
&:
\text{internal funds}
<
\text{debt}
<
\text{equity}.
\end{aligned}
$$

<span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span> 的 adverse selection 逻辑说明 equity issuance 在信息不对称下传递 overvaluation signal，因此 firm 优先使用 internal funds，再用 debt，最后才用 equity。关键预测是 profitability 与 leverage 负相关（profitable firms 积累 retained earnings，减少外部融资需求）。<span style="color:#1f6feb;font-weight:700">Shyam-Sunder and Myers (1999)</span> 用 financing deficit 回归 debt issuance，发现系数接近 1，支持 pecking order；但 <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2003)</span> 发现大样本中 pecking order 预测力较弱，尤其对 small firms 和 high-growth firms，说明 pecking order 只是部分正确。

**Market timing**

$$
\begin{aligned}
M/B\uparrow
&\Rightarrow
\Pr(\text{equity issue})\uparrow
\Rightarrow
\text{book leverage}\downarrow.
\end{aligned}
$$

<span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span> 构造 external-finance weighted historical market-to-book 作为累积 market timing 指标，发现 historical M/B 强烈负向预测 current leverage 且效应持续十年以上，说明 capital structure 是过去 market timing 行为的累积结果；firms 不会快速调整回 target leverage，支持 market timing 和 inertia，与 static trade-off theory 不符。<span style="color:#1f6feb;font-weight:700">Alti (2006)</span> 和 <span style="color:#1f6feb;font-weight:700">Kayhan and Titman (2007)</span> 进一步检验 timing effects 的持续性和调整速度。

**Agency-based theory**

Debt 一方面 discipline managers，减少 free cash flow agency problem（<span style="color:#1f6feb;font-weight:700">Jensen 1986</span>）；另一方面会造成 debt overhang（<span style="color:#1f6feb;font-weight:700">Myers 1977</span>）和 risk shifting。Agency theory 预测：high FCF + low growth firms 应使用更多 debt（discipline 价值高）；growth opportunities 高的 firms 应减少 debt（debt overhang cost 高）。<span style="color:#1f6feb;font-weight:700">Smith and Watts (1992)</span> 发现 growth firms 的 leverage 显著更低，支持 debt overhang 预测；mature firms with high FCF 更多使用 debt，支持 free cash flow hypothesis。

::::

#### 1-2 Research Proposal

**Question** 设计一个 research proposal，识别 tax shield 是否影响 corporate leverage。需要写 research question、hypotheses、data、model、expected outcomes 和 threats。

::::{collapse} 分析框架

可采用的识别设计是 tax reform / interest deductibility shock。它直接改变 debt tax shield 的价值，适合检验 trade-off theory。

::::

::::{solution}

**Research question**

Corporate tax rate cut 是否通过降低 interest tax shield value，导致企业降低 leverage？

**Hypotheses**

$$
\begin{aligned}
T_C\downarrow
&\Rightarrow
PV(\text{Tax Shield})\downarrow
\Rightarrow
D^\ast/V\downarrow,\\
\text{effect}
&\text{ stronger for profitable / high tax-capacity firms},\\
\text{effect}
&\text{ weaker for constrained firms if adjustment costs bind}.
\end{aligned}
$$

**Data**

- Compustat：debt、assets、profitability、tangibility、cash、market-to-book。
- CRSP：returns and market value。
- Tax data：federal/state statutory tax rates、effective tax rates、NOL carryforwards。
- Sample：U.S. listed nonfinancial nonutility firms。

**Baseline DiD**

$$
\begin{aligned}
\text{Leverage}_{i,s,t}
&=
\alpha_i+\delta_t
+\beta(\text{TaxCutExposure}_{i,s}\times Post_t)
+\gamma'X_{i,t-1}
+\varepsilon_{i,s,t}.
\end{aligned}
$$

$\text{TaxCutExposure}_{i,s}$ 可用 pre-reform taxable income、interest deduction exposure、state tax exposure 或 marginal tax rate exposure 构造。

**Expected outcomes**

$$
\begin{aligned}
\beta<0
&\Longleftrightarrow
\text{tax shield channel},\\
\beta_{\text{high profit}}<\beta_{\text{low profit}}
&\Longleftrightarrow
\text{tax capacity amplifies leverage response}.
\end{aligned}
$$

**Identification threats**

1. States or industries receiving tax cuts may have different leverage trends.
2. Tax reform may bundle investment credits, repatriation incentives, or macro shocks.
3. High-tax-capacity firms may simultaneously have stronger investment opportunities, affecting financing needs.

**Robustness**

- Event-study pre-trends.
- Border-state / matched industry comparisons.
- Alternative leverage measures: book leverage, market leverage, net debt.
- Debt issuance and equity issuance as separate outcomes.

::::

#### 1-3 Mechanism Question

**Question** Briefly state the mechanism and testable predictions for three theories of capital structure: trade-off, pecking order, market timing, and agency-based theory. For each selected theory, summarize one empirical paper. Then design one ideal policy change and give two threats.

::::{collapse} 分析框架

这题就是把样题中的 SEO 换成 capital structure。每个 theory 都要写：机制 $\Rightarrow$ prediction $\Rightarrow$ paper。

::::

::::{solution}

**Trade-off theory**

$$
\begin{aligned}
\max_D V(D)
&=
V_U+T_CD-PV(\text{Distress}(D)),\\
\frac{\partial V}{\partial D}=0
&\Longleftrightarrow
T_C
=
\frac{\partial PV(\text{Distress})}{\partial D}.
\end{aligned}
$$

Predictions：tax capacity、tangibility、size raise leverage；risk and growth opportunities lower leverage. <span style="color:#1f6feb;font-weight:700">Graham (2000)</span> 模拟 firm-specific marginal tax benefit curves，发现税盾收益大但实际 leverage 保守，说明非税成本限制 debt 使用。

**Pecking order**

$$
\begin{aligned}
\text{information asymmetry}
&\Rightarrow
\text{equity is most information-sensitive}\\
&\Rightarrow
\text{internal funds}\succ\text{debt}\succ\text{equity}.
\end{aligned}
$$

Predictions：profitable firms use less debt; financing deficit predicts debt issuance; equity issuance announcement returns are negative. <span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span> provides the theory; <span style="color:#1f6feb;font-weight:700">Shyam-Sunder and Myers (1999)</span> regress debt issuance on financing deficit，发现系数接近 1，支持 pecking order；<span style="color:#1f6feb;font-weight:700">Frank and Goyal (2003)</span> 发现大样本中预测力较弱。

**Market timing**

$$
\begin{aligned}
\text{valuation high}
&\Rightarrow
\text{equity issuance}\uparrow
\Rightarrow
\text{leverage}\downarrow,\\
\text{historical }M/B
&\Rightarrow
\text{current leverage}.
\end{aligned}
$$

<span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span> 构造 external-finance weighted historical $M/B$，回归 current leverage，发现 historical $M/B$ 强烈负向预测 leverage 且效应持续，说明 capital structure 是过去 timing 的累积。

**Ideal policy**

Unexpected limit on interest deductibility. Treated firms are high pre-reform interest-deduction exposure firms.

$$
\begin{aligned}
\text{Leverage}_{i,t}
&=
\alpha_i+\delta_t
+\beta(\text{HighInterestExposure}_i\times Post_t)
+\gamma'X_{i,t-1}
+\varepsilon_{i,t}.
\end{aligned}
$$

Prediction：$\beta<0$，treated firms reduce leverage and debt issuance after reform.

**Threats**

1. High-leverage firms may have different pre-trends.
2. Reform may also affect investment, credit supply, and payout.

::::

#### 1-4 Theory Comparison

**Question** 比较 capital structure 中 trade-off、pecking order、market timing 与 agency-based theory 的机制差异，并整理对应实证文章和支持结论。

::::{collapse} 分析框架

对比题的关键不是重复每个 theory 的定义，而是说明它们依赖的 friction 不同，因此对 profitability、market-to-book、tax capacity、debt issuance 和 adjustment speed 的预测不同。

::::

::::{solution}

**机制差异**

| Theory | 核心摩擦 | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| Trade-off | taxes vs distress costs | debt tax shield 提高价值，但 distress / agency costs 随 leverage 上升 | profitable、tangible、large、high tax-capacity firms leverage 更高；risk 和 growth opportunities 降低 leverage |
| Pecking order | information asymmetry | equity 对 private information 最敏感，因此 firms 先用 internal funds，再用 debt，最后用 equity | profitability 与 leverage 负相关；financing deficit 主要由 debt 填补；equity issue CAR 为负 |
| Market timing | misvaluation / behavioral market timing | managers 在 equity overvaluation 时发行股票，在 undervaluation 时回购或避免发行 | high $M/B$ 后 equity issuance 增加，leverage 下降；historical valuation 对 current leverage 有持久影响 |
| Agency-based | manager-shareholder or shareholder-debtholder conflict | debt 可约束 free cash flow，但也会产生 debt overhang 和 risk shifting | high FCF + low growth firms 可用 debt discipline；high growth firms 因 underinvestment risk 降低 leverage |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| Trade-off | <span style="color:#1f6feb;font-weight:700">Graham (2000)</span> | firm-specific marginal tax benefit curve of debt | tax benefits of debt are large, but many firms appear conservatively levered |
| Trade-off / determinants | <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2009)</span> | broad leverage determinants across firms | median-industry leverage, tangibility, profits, size, $M/B$ predict leverage in ways partly consistent with trade-off |
| Pecking order | <span style="color:#1f6feb;font-weight:700">Shyam-Sunder and Myers (1999)</span> | financing deficit model | debt issues track financing deficits in a restricted sample, consistent with pecking order |
| Pecking order critique | <span style="color:#1f6feb;font-weight:700">Frank and Goyal (2003)</span> | broader sample and financing deficit tests | pecking order fit weakens for small and high-growth firms |
| Market timing | <span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span> | historical market-to-book predicts leverage | capital structure reflects cumulative market timing |
| Agency | <span style="color:#1f6feb;font-weight:700">Jensen (1986)</span>; <span style="color:#1f6feb;font-weight:700">Myers (1977)</span> | free-cash-flow discipline and debt-overhang mechanisms | debt can discipline managers, but high leverage can distort investment incentives |

**核心对比**

$$
\begin{aligned}
\text{Trade-off}
&:\ \text{optimal target leverage from marginal benefit = marginal cost},\\
\text{Pecking order}
&:\ \text{no target leverage; observed debt follows financing needs},\\
\text{Market timing}
&:\ \text{capital structure records past valuation windows},\\
\text{Agency}
&:\ \text{debt is governance device and investment distortion simultaneously}.
\end{aligned}
$$

::::

### 2. Payout Policy

#### 2-1 Literature Review

**Question** 对 payout policy 做 literature review。按 tax clientele、signaling、agency、lifecycle、flexibility、market timing 分类，说明每类机制、预测和代表文献。

::::{collapse} 分析框架

核心问题是为什么 firms pay out cash，以及为什么选择 dividends 或 repurchases。

::::

::::{solution}

$$
\begin{aligned}
\text{Why do firms pay out cash?}
&\Longleftrightarrow
\text{tax clientele, signaling, agency, lifecycle, flexibility, market timing}.
\end{aligned}
$$


| Theory | Mechanism | Predictions | Papers |
| :--- | :--- | :--- | :--- |
| MM dividend irrelevance | investment fixed 时 dividend 只是 financing substitution | payout does not change shareholder wealth | <span style="color:#1f6feb;font-weight:700">Modigliani and Miller (1961)</span> |
| Tax clientele | dividend and capital gains taxed differently | high dividend tax penalty $\Rightarrow$ lower dividend demand | <span style="color:#1f6feb;font-weight:700">Elton and Gruber (1970)</span>, <span style="color:#1f6feb;font-weight:700">Kalay (1982)</span>, <span style="color:#1f6feb;font-weight:700">Allen and Michaely (2003)</span> |
| Signaling | dividend / repurchase conveys private information | dividend increase and buyback announcement $\Rightarrow CAR>0$ | <span style="color:#1f6feb;font-weight:700">Aharony and Swary (1980)</span>, <span style="color:#1f6feb;font-weight:700">Vermaelen (1981)</span> |
| Agency | payout reduces free cash flow under managerial control | high FCF + low growth $\Rightarrow payout\uparrow$ | <span style="color:#1f6feb;font-weight:700">Jensen (1986)</span>, <span style="color:#1f6feb;font-weight:700">La Porta et al. (2000)</span> |
| Lifecycle | mature firms have fewer growth opportunities and more retained earnings | earned/contributed capital high $\Rightarrow$ dividend payer | <span style="color:#1f6feb;font-weight:700">Fama and French (2001)</span>, <span style="color:#1f6feb;font-weight:700">DeAngelo et al. (2006)</span> |
| Flexibility | dividends are sticky; repurchases are discretionary | temporary cash flows $\Rightarrow$ repurchase；permanent cash flows $\Rightarrow$ dividend | <span style="color:#1f6feb;font-weight:700">Jagannathan, Stephens and Weisbach (2000)</span> |
| Market timing / undervaluation | firms repurchase when undervalued | buyback announcement $CAR>0$ and long-run abnormal return $>0$ | <span style="color:#1f6feb;font-weight:700">Ikenberry et al. (1995)</span>, <span style="color:#1f6feb;font-weight:700">Peyer and Vermaelen (2009)</span> |

**Dividends vs repurchases**


| Dimension | Dividends | Repurchases |
| :--- | :--- | :--- |
| commitment | high, sticky | low, flexible |
| tax timing | immediate dividend taxation | capital gains timing option |
| signal | cash-flow sustainability | undervaluation / excess cash |
| best for | permanent cash flows, mature firms | temporary cash flows, undervalued firms |
| agency role | recurring discipline | flexible cash disgorgement |

**机制综合**

$$
\begin{aligned}
\text{payout matters}
&\Longleftrightarrow
\text{MM assumptions fail through taxes, information, agency, transaction costs, or investment frictions}.
\end{aligned}
$$

::::

#### 2-2 Research Proposal

**Question** 设计一个 research proposal，检验公司 payout 决策是 market timing、signaling、agency discipline、tax clientele 还是 financial flexibility。

::::{collapse} 分析框架

较清晰的经验设计是同时看 payout method、announcement return、long-run return、fundamental outcomes。不同 motive 对这些 outcomes 的预测不同。

::::

::::{solution}

**Research question**

Firms choose dividends or repurchases because of which motive?

**Hypotheses**

$$
\begin{aligned}
\text{undervaluation}
&\Rightarrow
\text{repurchase}\uparrow,\ CAR>0,\ BHAR>0,\\
\text{private good news}
&\Rightarrow
\text{payout signal}\uparrow,\ \Delta ROA_{+1,+2}>0,\\
\text{FCF high and }Q\text{ low}
&\Rightarrow
\text{payout}\uparrow,\ \text{overinvestment}\downarrow,\\
\text{dividend tax penalty}\downarrow
&\Rightarrow
\text{dividend}\uparrow,\\
\text{temporary cash flow}
&\Rightarrow
\text{repurchase share}\uparrow.
\end{aligned}
$$

**Data**

- Compustat：dividends、repurchases、cash flow、capex、assets、earnings.
- CRSP：announcement-window CAR、BHAR.
- SDC / firm announcements：repurchase authorizations, dividend changes.
- IBES：analyst revisions.
- 13F / ownership：institutional and taxable ownership proxies.

**Payout method model**

$$
\begin{aligned}
\text{RepurchaseShare}_{i,t}
&=
\alpha_i+\delta_t
+\beta_1\text{Undervaluation}_{i,t-1}
+\beta_2\text{TemporaryCashShock}_{i,t}\\
&\quad
+\beta_3\text{FCF}_{i,t-1}\times \text{LowQ}_{i,t-1}
+\beta_4\text{TaxSensitiveOwn}_{i,t-1}
+\gamma'X_{i,t-1}
+u_{i,t}.
\end{aligned}
$$

**Announcement-return test**

$$
\begin{aligned}
CAR_{i,[-1,+1]}
&=
a
+b_1\text{Repurchase}_i
+b_2\text{Undervaluation}_i
+b_3(\text{Repurchase}_i\times \text{Undervaluation}_i)\\
&\quad
+b_4\text{InfoAsym}_i
+b_5(\text{Payout}_i\times \text{InfoAsym}_i)
+c'X_i
+\varepsilon_i.
\end{aligned}
$$

**Interpretation**

$$
\begin{aligned}
b_3>0
&\Rightarrow \text{market timing / undervaluation},\\
b_5>0
&\Rightarrow \text{signaling},\\
\beta_3>0
&\Rightarrow \text{agency discipline},\\
\beta_2>0
&\Rightarrow \text{flexibility}.
\end{aligned}
$$

**Threats**

1. Repurchase authorization 不等于 actual repurchase，measurement error 会混淆 timing 和 flexibility。
2. Concurrent earnings announcements or M&A may contaminate payout announcement CAR.
3. Future fundamentals may drive payout decisions, creating reverse causality.

::::

#### 2-3 Mechanism Question

**Question** 比较 payout policy 的 tax clientele、signaling、agency、financial flexibility / repurchase timing 四类机制。每类配一篇 empirical paper，并设计一个检验 dividend tax clientele 的政策实验。

::::{collapse} 分析框架

这类题最好先写 MM benchmark，再说明现实摩擦如何让 payout 变得 relevant。

::::

::::{solution}

**Tax clientele**

$$
\begin{aligned}
\frac{P_{cum}-P_{ex}}{D}
&\approx
\frac{1-\tau_d}{1-\tau_g}.
\end{aligned}
$$

Dividend tax penalty 越高，taxable investors 越不愿持有 high-dividend stocks。Tax clientele theory 预测 ex-dividend price drop ratio 应反映 marginal investor 的 after-tax 无差异条件。<span style="color:#1f6feb;font-weight:700">Elton and Gruber (1970)</span> 测量 ex-dividend day price drop ratio $(P_{cum}-P_{ex})/D$，发现 ratio 显著小于 1 且接近理论预测的税率比 $\frac{1-\tau_d}{1-\tau_g}$，说明税收影响 dividend valuation，不同税率投资者形成 clienteles，支持 tax clientele theory，挑战 MM dividend irrelevance。<span style="color:#1f6feb;font-weight:700">Kalay (1982)</span> 强调 transaction costs 和 arbitrage bounds 限制了 tax arbitrage，使 tax clientele effect 得以存在。

**Signaling**

$$
\begin{aligned}
\Delta D>0
&\Rightarrow
\mathbb{E}[\text{future cash flow}\mid \Delta D>0]\uparrow
\Rightarrow
CAR>0.
\end{aligned}
$$

Signaling theory 预测 dividend change 传递管理层对 future cash flow 的私有信息，announcement 应产生同向 stock price reaction。<span style="color:#1f6feb;font-weight:700">Aharony and Swary (1980)</span> 用 event study 测量 dividend increase/decrease announcement returns，发现 dividend increases 产生显著正 CAR，decreases 产生显著负 CAR（cuts 更负），说明市场将 dividend change 解读为 future profitability signal，支持 signaling theory；asymmetric reaction 说明 bad news 信号更强。<span style="color:#1f6feb;font-weight:700">Vermaelen (1981)</span> 发现 repurchase announcements（尤其 tender offers）产生显著正 announcement returns，tender offers 因成本更高而信号更强，支持 costly signaling 和 undervaluation hypothesis。

**Agency**

$$
\begin{aligned}
\text{FCF high}+\text{growth low}
&\Rightarrow
\text{overinvestment risk}\uparrow
\Rightarrow
\text{payout discipline value}\uparrow.
\end{aligned}
$$

Agency theory 预测 payout 减少管理层控制的 free cash flow，约束 overinvestment，尤其对 high FCF + low growth firms 价值更大。<span style="color:#1f6feb;font-weight:700">Jensen (1986)</span> 是 free cash flow hypothesis 的理论核心，预测 mature firms with limited growth opportunities 应通过 payout 约束 managerial discretion。<span style="color:#1f6feb;font-weight:700">La Porta et al. (2000)</span> 用 cross-country evidence 检验 investor protection 与 payout policy 的关系，发现 strong investor protection countries 的 firms payout ratio 更高，说明 legal protection 和 payout 都是约束 agency problem 的机制；weak protection countries 中 payout 更低，支持 agency-based payout theory。

**Flexibility / timing**

$$
\begin{aligned}
\text{temporary cash flow}
&\Rightarrow
\text{repurchase},\\
\text{persistent cash flow}
&\Rightarrow
\text{dividend}.
\end{aligned}
$$

Flexibility theory 预测 dividends 是 sticky commitment（适合 permanent cash flows），repurchases 是 flexible（适合 temporary/volatile cash flows）。<span style="color:#1f6feb;font-weight:700">Jagannathan, Stephens and Weisbach (2000)</span> 比较 dividends 和 repurchases 与 cash flow volatility 的关系，发现 repurchases 与 temporary earnings shocks 正相关，dividends 与 persistent cash flows 正相关，说明 firms 用 repurchases 管理 temporary cash，用 dividends commit to permanent payout，支持 flexibility theory。<span style="color:#1f6feb;font-weight:700">Peyer and Vermaelen (2009)</span> 发现 buyback firms 有显著正 long-run abnormal returns，且效应在 undervaluation proxies 高的 firms 更强，说明 repurchases 传递 undervaluation signal，支持 market timing / undervaluation hypothesis。

**Ideal policy**

Dividend tax cut. Treated firms are firms with high taxable individual ownership or high historical dividend propensity.

$$
\begin{aligned}
\text{Dividend}_{i,t}
&=
\alpha_i+\delta_t
+\beta(\text{TaxSensitiveOwner}_i\times Post_t)
+\gamma'X_{i,t-1}
+\varepsilon_{i,t}.
\end{aligned}
$$

Prediction：$\beta>0$；dividends rise more for tax-sensitive firms, and ex-dividend price-drop ratio changes.

**Threats**

1. Tax reform may coincide with macro shocks.
2. Investor ownership composition may change endogenously.

::::

#### 2-4 Theory Comparison

**Question** 比较 payout policy 中 tax clientele、signaling、agency、life-cycle / flexibility 与 repurchase market timing 的机制差异，并整理相关实证文章和支持结论。

::::{collapse} 分析框架

payout theories 的差异在于 payout 改变的是投资者税后收益、信息集合、managerial discretion、cash-flow commitment，还是股票供给和误定价。

::::

::::{solution}

**机制差异**

| Theory | 核心摩擦 | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| Tax clientele | dividends and capital gains are taxed differently | investors sort into firms with tax-preferred payout policies | dividend yield 与 investor tax status 相关；tax cuts raise dividend propensity |
| Signaling | managers have private information about future cash flows | costly payout increase signals future profitability | dividend increase / repurchase announcement CAR 为正，且后续 earnings or forecasts 改善 |
| Agency | free cash flow creates overinvestment | payout reduces cash under managerial control | high FCF + low $Q$ firms payout 更高；payout 后 inefficient investment 下降 |
| Life-cycle / flexibility | cash-flow persistence and investment opportunities differ across firms | mature firms pay dividends; temporary cash-flow shocks use repurchases | mature profitable firms pay dividends；volatile or temporary cash-flow firms use repurchases |
| Repurchase timing | market undervaluation / underreaction | managers repurchase when shares are undervalued | repurchase announcements follow poor prior returns and predict positive long-run abnormal returns |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| Tax clientele | <span style="color:#1f6feb;font-weight:700">Elton and Gruber (1970)</span> | ex-dividend-day price drop ratio | price drop reflects relative taxation of dividends and capital gains |
| Tax clientele | <span style="color:#1f6feb;font-weight:700">Brav et al. (2008)</span> | 2003 dividend tax cut and managerial responses | dividend tax penalty affects payout, but taxes are not the only determinant |
| Signaling | <span style="color:#1f6feb;font-weight:700">Aharony and Swary (1980)</span> | dividend-change announcement returns | dividend increases are good news and cuts are bad news |
| Signaling / repurchase | <span style="color:#1f6feb;font-weight:700">Vermaelen (1981)</span> | repurchase tender-offer announcements | repurchases can reveal undervaluation or favorable private information |
| Agency | <span style="color:#1f6feb;font-weight:700">Jensen (1986)</span>; <span style="color:#1f6feb;font-weight:700">La Porta et al. (2000)</span> | free-cash-flow theory and cross-country payout evidence | payout is linked to agency conflicts and investor protection |
| Life-cycle | <span style="color:#1f6feb;font-weight:700">Fama and French (2001)</span>; <span style="color:#1f6feb;font-weight:700">DeAngelo, DeAngelo and Stulz (2006)</span> | dividend propensity and earned / contributed capital mix | mature firms with accumulated earned capital are more likely to pay dividends |
| Flexibility / timing | <span style="color:#1f6feb;font-weight:700">Jagannathan, Stephens and Weisbach (2000)</span>; <span style="color:#1f6feb;font-weight:700">Peyer and Vermaelen (2009)</span> | dividends vs repurchases and buyback anomaly | repurchases are more flexible and often associated with undervaluation |

**核心对比**

$$
\begin{aligned}
\text{Tax}
&:\ \text{payout changes after-tax investor payoff},\\
\text{Signaling}
&:\ \text{payout changes market beliefs about future cash flow},\\
\text{Agency}
&:\ \text{payout changes managerial control over cash},\\
\text{Flexibility}
&:\ \text{payout method matches cash-flow persistence},\\
\text{Timing}
&:\ \text{repurchase exploits undervaluation and market underreaction}.
\end{aligned}
$$

::::

### 3. Seasoned Equity Offerings

#### 3-1 Literature Review

**Question** 对 Seasoned Equity Offerings 做 literature review。按 adverse selection、market timing、ownership-monitoring、price pressure、target leverage adjustment 分类，说明机制、预测和代表文献。

::::{collapse} 分析框架

SEO 题的核心是 announcement effect、flotation method、long-run performance。样题很可能直接从这里出。

::::

::::{solution}

SEO 是已经上市公司在 IPO 后再次发行股票筹资。重点是 primary SEO。


| Theory | Mechanism | Predictions | Papers |
| :--- | :--- | :--- | :--- |
| Adverse selection | managers issue equity when overvalued; market infers bad news | SEO announcement $CAR<0$；more negative for opaque firms | <span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span>, <span style="color:#1f6feb;font-weight:700">Asquith and Mullins (1986)</span>, <span style="color:#1f6feb;font-weight:700">Masulis and Korwar (1986)</span> |
| Market timing | firms exploit high valuation / hot market windows | SEOs after high prior returns and high $M/B$；post-SEO BHAR $<0$ | <span style="color:#1f6feb;font-weight:700">Baker and Wurgler (2002)</span>, <span style="color:#1f6feb;font-weight:700">Loughran and Ritter (1995)</span>, <span style="color:#1f6feb;font-weight:700">Spiess and Affleck-Graves (1995)</span> |
| Ownership-monitoring | equity issue can bring blockholder certification and monitoring | private placements / blockholder participation $\Rightarrow CAR$ less negative or positive | <span style="color:#1f6feb;font-weight:700">Wruck (1989)</span>, <span style="color:#1f6feb;font-weight:700">Hertzel and Smith (1993)</span> |
| Price pressure | new share supply depresses price mechanically when demand slopes down | larger relative offer size and lower liquidity $\Rightarrow$ more negative price impact, reversal later | Scholes logic, <span style="color:#1f6feb;font-weight:700">Corwin (2003)</span> |
| Target leverage adjustment | SEO reduces leverage when firm is overlevered | high leverage gap $\Rightarrow SEO$；post-SEO leverage closer to target | <span style="color:#1f6feb;font-weight:700">Masulis (1980)</span>, dynamic trade-off literature |
| Rights offer puzzle | rights have low direct cost but hidden participation / liquidity / signal costs | firm commitment remains common despite higher direct cost | <span style="color:#1f6feb;font-weight:700">Eckbo and Masulis (1992)</span> |

**Adverse-selection dilution**

$$
\begin{aligned}
n&=\frac{I}{\hat p},\\
\Delta W_{\text{old}}
&=
NPV
-I\left(\frac{p^\ast}{\hat p}-1\right).
\end{aligned}
$$

If $\hat p<p^\ast$, existing shareholders bear dilution losses; therefore managers issue equity mainly when stock is not undervalued, creating negative announcement interpretation.

**Rights offer puzzle**

Rights issues often have lower direct flotation costs, but U.S. firms often use firm commitment offers. The reason is that total flotation cost includes hidden costs, liquidity effects, take-up risk, adverse selection, and agency considerations.

$$
\begin{aligned}
\text{total flotation cost}
&=
\text{direct cost}
+\text{indirect cost}
+\text{information / agency cost}.
\end{aligned}
$$

::::

#### 3-2 Research Proposal

**Question** 设计一个 research proposal，检验 SEO announcement effects 是 adverse selection 还是 market timing。

::::{collapse} 分析框架

Adverse selection 最适合用 disclosure shock；market timing 最适合用 waiting-period / timing-restriction shock。

::::

::::{solution}

**Research question**

Does enhanced disclosure before SEO reduce adverse-selection costs?

**Policy shock**

SEC unexpectedly requires detailed use-of-proceeds disclosure, segment forecasts, and insider trading plans before SEO filings for a treated subset of issuers.

**Mechanism**

$$
\begin{aligned}
\text{Disclosure}\uparrow
&\Rightarrow
\text{InfoAsym}\downarrow
\Rightarrow
\text{adverse selection cost}\downarrow\\
&\Rightarrow
CAR^{SEO}\uparrow,\ \text{issue discount}\downarrow.
\end{aligned}
$$

**Data**

- SDC：SEO announcements, offer size, flotation method, issuance date.
- CRSP：daily returns for CAR and long-run returns.
- Compustat：firm controls.
- SEC filings / textual disclosure：pre-SEO disclosure quality.
- IBES：analyst coverage and forecast dispersion.

**Regression**

$$
\begin{aligned}
CAR^{SEO}_{i,t}
&=
\alpha
+\beta(\text{Treated}_i\times Post_t)
+\theta \text{InfoAsym}_{i,t-1}
+\lambda \text{OfferSize}_{i,t}\\
&\quad
+\gamma'X_{i,t-1}
+\delta_t+\eta_j+\varepsilon_{i,t}.
\end{aligned}
$$

Expected:

$$
\begin{aligned}
\beta>0
&\Rightarrow
\text{less negative SEO reaction after disclosure},\\
\theta<0
&\Rightarrow
\text{opaque issuers have more negative CAR},\\
\left|\theta\right| \text{ declines after policy}
&\Rightarrow
\text{disclosure weakens adverse selection}.
\end{aligned}
$$

**Alternative market-timing design**

Randomly lengthen filing-to-issuance waiting period for a subset of firms:

$$
\begin{aligned}
\Pr(\text{SEO}_{i,t})
&=
\alpha_i+\delta_t
+\beta(\text{TimingRestriction}_i\times Post_t)
+\theta Valuation_{i,t-1}
+\gamma'X_{i,t-1}
+u_{i,t}.
\end{aligned}
$$

If market timing matters, timing restrictions reduce the sensitivity of SEO issuance to high $M/B$ and reduce post-SEO underperformance.

**Threats**

1. Disclosure rule may also increase litigation risk and change issuer composition.
2. Long-run SEO underperformance is sensitive to benchmark choice and sample selection.

::::

#### 3-3 Mechanism Question

**Question** Briefly state the economic mechanism and testable predictions for three SEO announcement-effect theories: information asymmetry / adverse selection, market timing, ownership-monitoring, and price pressure. For each selected theory, summarize one empirical paper and design one ideal policy change.

::::{collapse} 分析框架

这类问题应围绕每个 theory 的 mechanism、prediction 与 empirical paper 展开。

::::

::::{solution}

**Adverse selection**

$$
\begin{aligned}
\text{InfoAsym}\uparrow
&\Rightarrow
\Pr(\text{overvalued equity issue})\uparrow
\Rightarrow
CAR^{SEO}\downarrow.
\end{aligned}
$$

Adverse selection theory 预测信息不对称下 equity issuance 被市场解读为 overvaluation signal，announcement 应产生负 CAR，且 information asymmetry 越高、issue size 越大，CAR 越负。<span style="color:#1f6feb;font-weight:700">Asquith and Mullins (1986)</span> 和 <span style="color:#1f6feb;font-weight:700">Masulis and Korwar (1986)</span> 用 event study 测量 SEO announcement returns，发现 SEO announcements 产生显著负 CAR，且 issue size 越大、management sells shares 时 CAR 更负，说明市场将 SEO 解读为 overvaluation signal，支持 Myers-Majluf adverse selection theory。

**Market timing**

$$
\begin{aligned}
\text{prior return},M/B\uparrow
&\Rightarrow
\Pr(\text{SEO})\uparrow,\\
\text{SEO}
&\Rightarrow
BHAR_{[1,36/60]}\downarrow.
\end{aligned}
$$

Market timing theory 预测 firms 在 overvaluation windows 发行股票，post-SEO 应有 long-run underperformance。<span style="color:#1f6feb;font-weight:700">Loughran and Ritter (1995)</span> 和 <span style="color:#1f6feb;font-weight:700">Spiess and Affleck-Graves (1995)</span> 测量 post-SEO long-run returns，比较 issuers 和 matched non-issuers，发现 issuers 显著 underperform（持续 3-5 年），且 high prior $M/B$ 和 high prior returns 的 issuers underperformance 更严重，说明 firms 在 overvaluation 时 time the market 发行股票，支持 market timing theory，挑战 efficient market hypothesis。

**Ownership-monitoring**

$$
\begin{aligned}
\text{blockholder entry}
&\Rightarrow
\text{monitoring}\uparrow
\Rightarrow
CAR^{SEO}\uparrow.
\end{aligned}
$$

Ownership-monitoring theory 预测如果 equity issuance 引入 blockholders 或改善 ownership structure，monitoring 增强应产生正 announcement effect。<span style="color:#1f6feb;font-weight:700">Wruck (1989)</span> 检验 private placements 的 announcement returns，发现 private placements（相比 public offerings）产生显著正 CAR，且 ownership concentration 增加、blockholder entry 时 CAR 更高，说明 equity issuance 可通过改善 ownership structure 和 monitoring 创造价值，支持 monitoring hypothesis；但 public SEOs 通常分散 ownership，因此 monitoring effect 较弱。

**Price pressure**

$$
\begin{aligned}
\frac{\text{OfferSize}}{\text{MarketCap}}\uparrow,\ \text{Liquidity}\downarrow
&\Rightarrow
\text{temporary price impact}\downarrow.
\end{aligned}
$$

Price pressure theory 预测新股供给在短期内压低价格（需求曲线向下倾斜），temporary price impact 取决于 offer size 和 liquidity。<span style="color:#1f6feb;font-weight:700">Corwin (2003)</span> 分解 SEO discounts 为 information component 和 price pressure component，用 offer size、liquidity、post-SEO price recovery 识别两种效应，发现 both information asymmetry and price pressure 显著影响 SEO pricing；large offers 和 low liquidity stocks 的 price pressure 更强；post-SEO price partially recovers，说明部分 discount 是 temporary price pressure 而非 permanent information effect，支持 downward-sloping demand curves 和 price pressure theory。

**Ideal policy**

Mandatory pre-SEO disclosure. Expected outcome：SEO announcement CAR becomes less negative, especially for opaque firms.

**Threats**

1. Policy may change issuer composition.
2. Disclosure may affect litigation risk and underwriter screening, not just information asymmetry.

::::

#### 3-4 Theory Comparison

**Question** 比较 SEO announcement effects 的 adverse selection、market timing、ownership-monitoring 与 price pressure 机制差异，并整理相关实证文章和支持结论。

::::{collapse} 分析框架

SEO 的对比重点是区分 negative announcement return 来自 information revelation、overvaluation correction、ownership/control change，还是短期股票供给冲击。

::::

::::{solution}

**机制差异**

| Theory | 核心摩擦 | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| Adverse selection | managers know whether equity is overvalued | equity issue reveals possible overvaluation | SEO announcement CAR negative；effect stronger for opaque firms, large issues, and insider selling |
| Market timing | managers issue when market valuation is temporarily high | high valuation induces issuance, followed by correction | SEO follows high prior returns / high $M/B$ and predicts long-run underperformance |
| Ownership-monitoring | issuance changes blockholder incentives and monitoring | private placement or concentrated buyer improves governance | CAR can be positive when ownership concentration and monitoring rise |
| Price pressure | demand curve for shares is downward sloping in short run | large new share supply temporarily depresses price | discount / price drop increases with offer size and illiquidity; reversal may occur after absorption |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| Adverse selection | <span style="color:#1f6feb;font-weight:700">Asquith and Mullins (1986)</span>; <span style="color:#1f6feb;font-weight:700">Masulis and Korwar (1986)</span> | SEO announcement event studies | common-stock SEO announcements are negative, consistent with adverse information revelation |
| Adverse selection | <span style="color:#1f6feb;font-weight:700">Myers and Majluf (1984)</span> | theory of financing under asymmetric information | equity issuance is interpreted as an overvaluation signal |
| Market timing | <span style="color:#1f6feb;font-weight:700">Loughran and Ritter (1995)</span>; <span style="color:#1f6feb;font-weight:700">Spiess and Affleck-Graves (1995)</span> | long-run post-issue stock returns | issuers underperform matched non-issuers after SEOs |
| Ownership-monitoring | <span style="color:#1f6feb;font-weight:700">Wruck (1989)</span> | private placement announcements and ownership concentration | private placements can create positive returns when monitoring improves |
| Price pressure | <span style="color:#1f6feb;font-weight:700">Eckbo and Masulis (1992)</span>; <span style="color:#1f6feb;font-weight:700">Corwin (2003)</span> | rights offers / underwriting choice / SEO discounts | flotation method, offer size, and liquidity affect price impact and discount |

**核心对比**

$$
\begin{aligned}
\text{Adverse selection}
&:\ \text{announcement reveals issuer type},\\
\text{Market timing}
&:\ \text{issuance exploits temporary overvaluation},\\
\text{Monitoring}
&:\ \text{issuance changes control and governance},\\
\text{Price pressure}
&:\ \text{issuance changes temporary share supply and liquidity demand}.
\end{aligned}
$$

::::

### 4. Labor and Corporate Finance

#### 4-1 Literature Review

**Question** 对 Labor and Corporate Finance 做 literature review。按 labor supply shocks、labor adjustment costs、bargaining power、human capital、labor welfare 分类。

::::{collapse} 分析框架

Labor 同时是 production input、stakeholder、financing friction 与 adjustment margin。分析时应把 labor shock 映射到 investment、leverage、payout 与 firm value。

::::

::::{solution}

$$
\begin{aligned}
\text{Labor affects corporate finance}
&\Longleftrightarrow
\text{labor is a production input, a stakeholder, a financing friction, and an adjustment margin}.
\end{aligned}
$$


| Channel | Mechanism | Predictions | Papers / slides |
| :--- | :--- | :--- | :--- |
| Labor supply shocks and IT substitution | labor scarcity raises relative labor cost; firms substitute IT / automation | labor shock $\Rightarrow$ employment growth $\downarrow$, IT investment $\uparrow$ | <span style="color:#1f6feb;font-weight:700">Ouimet, Simintzi and Ye (2025)</span>; <span style="color:#1f6feb;font-weight:700">Dai and Qiu (2024)</span> |
| Capital-labor complementarity | lower capital cost can expand both equipment and labor | tax incentive $\Rightarrow$ capex and employment $\uparrow$ | <span style="color:#1f6feb;font-weight:700">Curtis et al. (2023)</span> |
| Labor adjustment costs and leverage | firing costs / labor protection raise operating leverage; firms lower financial leverage | employment protection $\uparrow \Rightarrow leverage\downarrow$ | <span style="color:#1f6feb;font-weight:700">Simintzi, Vig and Volpin (2015)</span>, <span style="color:#1f6feb;font-weight:700">Serfling (2016)</span> |
| Labor bargaining and strategic leverage | debt can reduce surplus available to unions | union power $\uparrow$ can induce strategic debt, but labor rigidity can reduce debt | <span style="color:#1f6feb;font-weight:700">Matsa (2010)</span> |
| Unemployment risk and debt costs | workers demand compensation for firm distress risk | stronger UI lowers worker unemployment cost and raises debt capacity | <span style="color:#1f6feb;font-weight:700">Agrawal and Matsa (2013)</span> |
| Human capital and mobility | skilled labor is non-collateralizable and mobile | high human capital intensity $\Rightarrow$ lower debt, more cash, stronger response to mobility shocks | <span style="color:#1f6feb;font-weight:700">Klasa et al. (2018)</span>, <span style="color:#1f6feb;font-weight:700">Jeffers (2024)</span>, <span style="color:#1f6feb;font-weight:700">Shen (2021)</span> |
| Labor welfare | financial pressure reduces safety investment | constraints / earnings pressure $\Rightarrow$ injuries $\uparrow$ | <span style="color:#1f6feb;font-weight:700">Cohn and Wardlaw (2016)</span>, <span style="color:#1f6feb;font-weight:700">Caskey and Ozel (2017)</span> |

Capital structure with labor costs:

$$
\begin{aligned}
NPV[\text{Debt}]
&=
\underbrace{\text{Tax Shield}}_{\text{benefit}}
-\underbrace{\mathbb{E}[\text{Distress Costs}]}_{\text{financial distress}}
-\underbrace{\text{Labor Costs}}_{\text{wage compensation, turnover, bargaining}}.
\end{aligned}
$$

Key conclusion：labor frictions change optimal leverage, cash holdings, investment, safety investment, and technology adoption.

::::

#### 4-2 Research Proposal

**Question** 设计一个 research proposal，检验 negative labor supply shock 是否导致 firms substitute IT capital for labor。

::::{collapse} 分析框架

可采用的识别设计是 local labor supply shock，例如 opioid prescriptions、H-1B visa lottery / constraints、demographic shock。结果变量是 IT investment、employment、capital-labor ratio。

::::

::::{solution}

**Research question**

Do negative local labor supply shocks cause firms to substitute IT capital for labor?

**Hypotheses**

$$
\begin{aligned}
\text{LaborSupply}_{c,t}\downarrow
&\Rightarrow
w_{c,t}\uparrow
\Rightarrow
\frac{K^{IT}_{i,t}}{L_{i,t}}\uparrow,\\
\text{effect}
&\text{ stronger for routine-task-intensive firms},\\
\text{effect}
&\text{ ambiguous for skilled labor if AI/IT and skill are complements}.
\end{aligned}
$$

**Data**

- Local labor shock：opioid prescriptions, H-1B visa lottery / green card constraints, demographic shocks.
- IT investment：CiTDB, Compustat software capex, job postings for IT/AI skills.
- Employment and wage：BLS, Compustat employees, wage bill.
- Firm controls：assets, cash flow, sales, industry, local demand.

**Long-difference design**

$$
\begin{aligned}
\Delta \ln(\text{IT Investment})_{i,c,t}
&=
\alpha_j+\delta_t
+\beta \Delta \text{LaborShock}_{c,t-5}
+\gamma'\Delta X_{c,t-5}
+\varepsilon_{i,c,t}.
\end{aligned}
$$

**Alternative H-1B design**

$$
\begin{aligned}
\ln(\text{IT Investment})_{i,t}
&=
\alpha_i+\delta_t
+\beta(\text{H1BExposure}_{i}\times Post_t)
+\gamma'X_{i,t-1}
+\varepsilon_{i,t}.
\end{aligned}
$$

Expected:

$$
\begin{aligned}
\beta>0
&\Rightarrow
\text{labor scarcity induces IT substitution},\\
\beta<0
&\Rightarrow
\text{skilled labor and IT are complements}.
\end{aligned}
$$

**Threats**

1. Local opioid / labor shocks may also reduce product demand, not only labor supply.
2. Firms may relocate or change plant composition, creating sample selection.
3. Technology adoption may be driven by industry-level automation trends rather than local labor scarcity.

::::

#### 4-3 Mechanism Question

**Question** State three channels through which labor markets affect corporate finance: labor supply and automation, labor adjustment costs and leverage, bargaining power and strategic debt, labor welfare and financing constraints. For each channel, summarize one empirical paper and propose an ideal policy setting.

::::{collapse} 分析框架

可选择三条可检验机制：IT substitution、labor protection and leverage、worker safety。

::::

::::{solution}

**Labor supply shock and IT substitution**

$$
\begin{aligned}
\text{qualified labor supply}\downarrow
&\Rightarrow
\text{relative labor cost}\uparrow
\Rightarrow
\text{IT / automation}\uparrow.
\end{aligned}
$$

Labor supply theory 预测 qualified labor supply 下降提高 relative labor cost，诱发 IT/automation substitution。<span style="color:#1f6feb;font-weight:700">Ouimet, Simintzi and Ye (2025)</span> 利用 local opioid prescription shocks 作为 labor supply 外生负向冲击，发现 opioid-exposed counties 的 plants 显著增加 IT investment 和 automation，employment growth 下降，说明 labor scarcity 诱发 capital-labor substitution。

**Labor adjustment costs and leverage**

$$
\begin{aligned}
\text{labor rigidity}\uparrow
&\Rightarrow
\text{operating leverage}\uparrow
\Rightarrow
\text{financial leverage}\downarrow.
\end{aligned}
$$

Labor adjustment costs theory 预测 labor rigidity 提高 operating leverage，firms 降低 financial leverage 以减少 total risk。<span style="color:#1f6feb;font-weight:700">Simintzi, Vig and Volpin (2015)</span> 利用跨国 employment protection reforms，<span style="color:#1f6feb;font-weight:700">Serfling (2016)</span> 利用 U.S. wrongful-discharge laws staggered adoption，均发现 labor protection 加强后 firms 显著降低 leverage，说明 operating leverage 和 financial leverage 是 substitutes。

**Labor bargaining**

$$
\begin{aligned}
\text{union bargaining power}\uparrow
&\Rightarrow
\text{rent extraction risk}\uparrow
\Rightarrow
\text{strategic leverage motive}\uparrow.
\end{aligned}
$$

Labor bargaining theory 预测 debt commitments 减少可供 labor rent extraction 的 free cash flow，在 union bargaining power 高时 firms 有 strategic leverage motive。<span style="color:#1f6feb;font-weight:700">Matsa (2010)</span> 利用 right-to-work laws 变化作为 union bargaining power shocks，用 DiD 检验 union power 对 leverage 的影响，发现 union bargaining power 上升时 firms 显著提高 leverage，说明 firms 用 debt 作为 strategic commitment device 限制 labor rent extraction，支持 strategic debt hypothesis；debt 不仅是 financing tool，也是 bargaining tool。

**Labor welfare**

$$
\begin{aligned}
\text{financial pressure}\uparrow
&\Rightarrow
\text{safety investment}\downarrow
\Rightarrow
\text{workplace injuries}\uparrow.
\end{aligned}
$$

Worker welfare theory 预测 financial pressure 降低 safety investment，将风险转移给 workers，导致 workplace injuries 上升。<span style="color:#1f6feb;font-weight:700">Cohn and Wardlaw (2016)</span> 检验 financing constraints 对 workplace safety 的影响，用 credit rating downgrades 和 covenant violations 识别 financial pressure shocks，发现 financially constrained firms 的 injury rates 显著上升，说明 financial pressure 导致 firms 削减 safety investment，将 operational risk 转移给 workers。<span style="color:#1f6feb;font-weight:700">Caskey and Ozel (2017)</span> 发现 earnings pressure（接近 analyst forecasts）时 firms 的 workplace injuries 显著增加，说明 short-term earnings management 牺牲 worker safety，支持 financial pressure 恶化 labor welfare 的预测。

**Ideal policy**

Randomized H-1B quota expansion or staggered labor protection reform. Use DiD / event study and test employment, IT investment, leverage, and productivity.

**Threats**

1. Labor policy may be adopted in states or industries with different trends.
2. Spillovers across local labor markets may contaminate control groups.

::::

#### 4-4 Theory Comparison

**Question** 比较 labor and corporate finance 中 labor supply / automation、labor adjustment costs、labor bargaining / strategic debt 与 worker welfare mechanisms 的机制差异，并整理相关实证文章和支持结论。

::::{collapse} 分析框架

labor finance 的理论差异来自 labor 在企业中扮演的角色不同：生产要素、准固定成本、谈判方、风险承担者。不同角色对应不同 corporate policy。

::::

::::{solution}

**机制差异**

| Theory | Labor role | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| Labor supply / automation | variable production input | local qualified labor supply falls, raising relative labor cost and inducing IT substitution | labor scarcity increases IT budget, PC investment, automation, capital-labor ratio |
| Labor adjustment costs | quasi-fixed operating cost | firing costs and labor rigidity raise operating leverage, so firms reduce financial leverage | stronger employment protection lowers debt ratios and debt issuance |
| Labor bargaining / strategic debt | stakeholder with rent-extraction power | debt commitments reduce free cash flow available to labor and strengthen bargaining position | union power or bargaining pressure can increase leverage |
| Worker welfare / financing constraints | residual claimant on firm risk | financial pressure reduces safety investment and shifts risk to workers | financing constraints or earnings pressure increase workplace injuries |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| Labor supply / automation | <span style="color:#1f6feb;font-weight:700">Ouimet, Simintzi and Ye (2025)</span> | opioid prescription shocks and plant-level IT investment | negative labor supply shocks induce IT substitution |
| Labor adjustment costs | <span style="color:#1f6feb;font-weight:700">Simintzi, Vig and Volpin (2015)</span> | employment protection reforms across countries | stronger labor protection reduces leverage |
| Labor adjustment costs | <span style="color:#1f6feb;font-weight:700">Serfling (2016)</span> | U.S. wrongful-discharge laws | labor adjustment costs lead firms to choose lower financial leverage |
| Labor bargaining | <span style="color:#1f6feb;font-weight:700">Matsa (2010)</span> | right-to-work laws and union bargaining | firms use debt strategically when labor bargaining power is high |
| Worker welfare | <span style="color:#1f6feb;font-weight:700">Cohn and Wardlaw (2016)</span>; <span style="color:#1f6feb;font-weight:700">Caskey and Ozel (2017)</span> | financing constraints / earnings pressure and injury rates | financial pressure worsens workplace safety outcomes |

**核心对比**

$$
\begin{aligned}
\text{Supply / automation}
&:\ \text{labor scarcity changes input mix},\\
\text{Adjustment costs}
&:\ \text{labor rigidity changes optimal leverage},\\
\text{Bargaining}
&:\ \text{labor power changes strategic debt incentives},\\
\text{Worker welfare}
&:\ \text{financial pressure changes safety and risk allocation}.
\end{aligned}
$$

::::

### 5. ESG and Climate

#### 5-1 Literature Review

**Question** 对 ESG and Climate 做 literature review。按 ESG measurement、green human capital、E-S trade-off、climate labor risk 分类。

::::{collapse} 分析框架

ESG 主题应避免停留在概念层面，分析时必须映射回 real investment、human capital demand、risk exposure、information measurement、valuation and financing。

::::

::::{solution}

$$
\begin{aligned}
\text{ESG / Climate}
&\Rightarrow
\left\{
\begin{aligned}
&\text{real investment}\\
&\text{human capital demand}\\
&\text{risk exposure and adaptation}\\
&\text{information and measurement}\\
&\text{valuation and financing}
\end{aligned}
\right.
\end{aligned}
$$


| Theme | Mechanism | Predictions | Papers / slides |
| :--- | :--- | :--- | :--- |
| Stakeholder theory | firms trade off shareholder value with employee, community, environment claims | ESG affects investment, risk, labor demand, governance | <span style="color:#1f6feb;font-weight:700">Freeman (1984)</span>, <span style="color:#1f6feb;font-weight:700">Edmans (2023)</span> |
| ESG measurement / inside view | external ESG ratings noisy; employee text reveals implementation quality | employee ESG view predicts future ESG outcomes better than ratings | <span style="color:#1f6feb;font-weight:700">Berg et al. (2022)</span>, <span style="color:#1f6feb;font-weight:700">Briscoe-Tran (2026)</span> |
| Green human capital | real E&S implementation requires specialized labor | green hiring predicts green innovation and profitability | <span style="color:#1f6feb;font-weight:700">Darendeli, Law and Shen (2022)</span> |
| E vs S trade-off | firms have limited resources and attention across ESG dimensions | improvement in one ESG dimension may reduce another | <span style="color:#1f6feb;font-weight:700">Huang, Li and Zhou (2025)</span>, <span style="color:#1f6feb;font-weight:700">Effah, Qi and Zhang (2025)</span> |
| Climate labor channel | heat reduces labor productivity and raises safety / wage / litigation costs | heat exposure lowers productivity and raises adaptation investment | <span style="color:#1f6feb;font-weight:700">Somanathan et al. (2021)</span>, <span style="color:#1f6feb;font-weight:700">Ortiz-Molina et al. (2023)</span>, <span style="color:#1f6feb;font-weight:700">Xiao (2024)</span> |

**机制综合**

ESG 不只是 disclosure 或 moral preference。分析中应将 ESG 表述为可观测 corporate policy：green hiring、safety investment、emissions, adaptation CAPEX, labor risk management, and future profitability。

::::

#### 5-2 Research Proposal

**Question** 设计一个 research proposal，检验 firms 的 green hiring 是真实 capability building 还是 greenwashing。

::::{collapse} 分析框架

ESG 的核心难点是 measurement 和 greenwashing。较清晰的经验设计是用 job postings / employee reviews 捕捉行为信号，再看 future real outcomes。

::::

::::{solution}

**Research question**

Do firms that post more green jobs subsequently improve real environmental and financial outcomes, or are green postings mainly symbolic disclosure?

**Hypotheses**

$$
\begin{aligned}
\text{GreenHiring}_{i,t}\uparrow
&\Rightarrow
\text{green patents}_{i,t+k}\uparrow,\ \text{emissions}_{i,t+k}\downarrow,\\
\text{real capability channel}
&\Rightarrow
\text{profitability}_{i,t+k}\uparrow,\\
\text{greenwashing channel}
&\Rightarrow
\text{ESG disclosure / rating}\uparrow
\quad\text{but real outcomes unchanged}.
\end{aligned}
$$

**Data**

- Lightcast / Burning Glass：job postings, green skills, job titles, required tasks.
- ESG data：MSCI / Refinitiv / KLD ratings, sustainability reports, 10-K climate text.
- Real environmental outcomes：emissions, toxic releases, green patents, environmental violations.
- Financial outcomes：profitability, Tobin's $Q$, sales growth, operating margins.
- Employee inside view：Glassdoor reviews if available.

**Green hiring measure**

$$
\begin{aligned}
\text{GreenScore}_{i,t}
&=
\frac{
\#\{\text{green skills in firm }i\text{ postings at }t\}
}{
\#\{\text{all skills in firm }i\text{ postings at }t\}
}.
\end{aligned}
$$

**Baseline model**

$$
\begin{aligned}
Y_{i,t+k}
&=
\alpha_i+\delta_t
+\beta \text{GreenScore}_{i,t}
+\theta \text{DisclosureESG}_{i,t}
+\gamma'X_{i,t}
+\varepsilon_{i,t+k}.
\end{aligned}
$$

Outcomes $Y$ include green patents, emissions, environmental violations, workplace safety, profitability, and ESG ratings.

**Mechanism split**

$$
\begin{aligned}
\text{real capability}
&\Longleftrightarrow
\beta_{\text{real outcomes}}\neq0,\\
\text{greenwashing}
&\Longleftrightarrow
\beta_{\text{ratings/disclosure}}>0
\quad\text{but}\quad
\beta_{\text{emissions/patents}}\approx0.
\end{aligned}
$$

**Identification strategy**

Use a disclosure mandate, climate policy shock, or stakeholder-pressure shock that increases ESG salience for exposed firms. Treated firms are firms with high pre-policy environmental exposure or high customer / investor ESG pressure.

**Threats**

1. Firms with better future green projects may post green jobs before outcomes.
2. Job postings measure labor demand, not realized hiring.
3. ESG policy shocks may also change regulation, financing constraints, or consumer demand.

::::

#### 5-3 Mechanism Question

**Question** Explain three mechanisms in ESG / Climate corporate finance: ESG measurement and inside view, green human capital, E-S trade-off, and climate-labor risk. For each, summarize one empirical paper and give testable predictions.

::::{collapse} 分析框架

这类题要避免 moral discussion。必须写成 measurable corporate finance mechanism：谁受冲击、哪类投入变化、什么 real outcome 改变。

::::

::::{solution}

**ESG measurement / inside view**

$$
\begin{aligned}
\text{External rating noise}
&\Rightarrow
\text{measurement error},\\
\text{employee inside view}
&\Rightarrow
\text{implementation information}.
\end{aligned}
$$

ESG measurement theory 预测 external ratings 存在 measurement error，employee inside view 可能有 superior implementation information。<span style="color:#1f6feb;font-weight:700">Briscoe-Tran (2026)</span> 用 Glassdoor reviews 构造 employee inside-view ESG measures，检验其预测 future ESG outcomes 的能力，发现 inside-view measures 预测力显著超过 commercial ratings，说明 employees 有 superior information about real ESG practices。

**Green human capital**

$$
\begin{aligned}
\text{green job postings}
&\Rightarrow
\text{green capability investment}
\Rightarrow
\text{green patents and profitability}\uparrow.
\end{aligned}
$$

Green human capital theory 预测 green job postings 反映 green capability investment，应预测 future green innovation 和 profitability。<span style="color:#1f6feb;font-weight:700">Darendeli, Law and Shen (2022)</span> 测量 green job postings 与 subsequent green patents、emissions、profitability 的关系，发现 green hiring 预测 future green patents 增加、emissions 下降、profitability 提高，说明 green hiring 是 real capability building，非仅 symbolic。

**Climate-labor risk**

$$
\begin{aligned}
\text{heat exposure}\uparrow
&\Rightarrow
A_L\downarrow,\ w\uparrow
\Rightarrow
\text{unit labor cost}\uparrow
\Rightarrow
\text{adaptation investment}\uparrow.
\end{aligned}
$$

Climate-labor risk theory 预测 heat exposure 降低 labor productivity、提高 wage，诱发 adaptation investment。<span style="color:#1f6feb;font-weight:700">Ortiz-Molina, Xiao and Zheng (2023)</span> 利用 California Heat Illness Prevention Standards 作为 policy shock，发现 exposed firms 的 labor productivity 下降、injury costs 上升，firms 增加 cooling equipment 和 automation，说明 climate heat risk 通过 labor channel 影响 firms。

**E-S trade-off**

$$
\begin{aligned}
\text{ESG resources limited}
&\Rightarrow
\text{improvement in one dimension may crowd out another},\\
\text{E regulation}\uparrow
&\Rightarrow
\text{S safety / labor outcomes may deteriorate if compliance costs bind}.
\end{aligned}
$$

E-S trade-off theory 预测当 ESG resources 有限时，一个维度的强制改善可能 crowd out 另一维度投资。<span style="color:#1f6feb;font-weight:700">Huang, Li and Zhou (2025)</span> 测量 environmental regulation shocks 对 social outcomes 的影响，发现 E regulation 收紧后 environmental performance 改善但 workplace injuries 上升，说明 E-S 存在 trade-off when resources constrained。<span style="color:#1f6feb;font-weight:700">Effah, Qi and Zhang (2025)</span> 发现 constrained firms 的 E 和 S 负向 interact，支持 resource-based view。

**Threats**

1. ESG measures are noisy and rating disagreement creates measurement error.
2. Green hiring can be symbolic if postings do not turn into realized capabilities.
3. Climate shocks may affect both labor productivity and local demand.

::::

#### 5-4 Theory Comparison

**Question** 比较 ESG / Climate 中 measurement / greenwashing、green human capital、E-S trade-off 与 climate-labor risk 的机制差异，并整理相关实证文章和支持结论。

::::{collapse} 分析框架

ESG 对比题要把 ESG 拆成可观测企业政策：measurement signal、capability investment、resource allocation trade-off、physical climate exposure。

::::

::::{solution}

**机制差异**

| Theory | 核心问题 | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| Measurement / greenwashing | ESG ratings and disclosure are noisy | firms may improve disclosure without improving real outcomes | ratings / disclosure improve, but emissions, safety, green patents or future ESG outcomes do not |
| Green human capital | ESG requires specialized human capital | green hiring builds implementation capability | green job postings predict green patents, environmental performance, and profitability |
| E-S trade-off | ESG dimensions compete for resources and attention | environmental compliance may crowd out social investment, or vice versa | improvements in E may coincide with deterioration in safety / labor outcomes when constraints bind |
| Climate-labor risk | physical climate risk affects labor productivity | heat exposure lowers labor productivity and raises adaptation costs | exposed firms increase adaptation CAPEX, safety investment, automation, or relocate activity |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| Measurement disagreement | <span style="color:#1f6feb;font-weight:700">Berg et al. (2022)</span> | ESG rating divergence across providers | ESG measurement is noisy and disagreement is economically meaningful |
| Inside-view measurement | <span style="color:#1f6feb;font-weight:700">Briscoe-Tran (2026)</span> | employee reviews and future ESG outcomes | employee inside-view ESG predicts future outcomes beyond external ratings |
| Green human capital | <span style="color:#1f6feb;font-weight:700">Darendeli, Law and Shen (2022)</span> | green job postings and subsequent outcomes | green hiring captures real capability building and predicts green innovation / profitability |
| E-S trade-off | <span style="color:#1f6feb;font-weight:700">Huang, Li and Zhou (2025)</span>; <span style="color:#1f6feb;font-weight:700">Effah, Qi and Zhang (2025)</span> | environmental-social outcome interaction | ESG dimensions can substitute when attention or financial resources are constrained |
| Climate-labor risk | <span style="color:#1f6feb;font-weight:700">Ortiz-Molina, Xiao and Zheng (2023)</span>; <span style="color:#1f6feb;font-weight:700">Somanathan et al. (2021)</span> | heat exposure and labor productivity / firm adaptation | climate heat risk operates through labor productivity and adaptation investment |

**核心对比**

$$
\begin{aligned}
\text{Measurement}
&:\ \text{signal quality problem},\\
\text{Green human capital}
&:\ \text{capability investment problem},\\
\text{E-S trade-off}
&:\ \text{resource allocation problem across ESG dimensions},\\
\text{Climate-labor risk}
&:\ \text{physical risk changes productivity and adaptation demand}.
\end{aligned}
$$

::::

### 6. AI and Corporate Finance

#### 6-1 Literature Review

**Question** 对 AI and Corporate Finance 做 literature review。按 AI measurement、AI as general-purpose technology、product innovation vs process innovation、GenAI exposure and valuation 分类。

::::{collapse} 分析框架

AI 应单独讨论，不宜混入 ESG 框架。核心是把 AI adoption 映射到 growth、innovation、labor reallocation、valuation 和 financing needs。

::::

::::{solution}

$$
\begin{aligned}
\text{AI adoption}
&\Rightarrow
\left\{
\begin{aligned}
&\text{product innovation and market expansion}\\
&\text{process innovation and cost reduction}\\
&\text{skill demand and labor reallocation}\\
&\text{intangible capital and financing needs}\\
&\text{growth-option valuation}
\end{aligned}
\right.
\end{aligned}
$$


| Theme | Mechanism | Predictions | Papers / slides |
| :--- | :--- | :--- | :--- |
| AI measurement | job postings and resumes reveal AI labor demand and AI worker stock | AI skill share predicts future firm outcomes | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> |
| AI as GPT | AI changes production function and scalability | AI intensity $\uparrow \Rightarrow$ sales, employment, market value $\uparrow$ | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> |
| Product innovation | AI expands product scope and innovation opportunities | product patents, trademarks, product portfolio breadth $\uparrow$ | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> |
| Process innovation | AI may automate tasks and reduce costs | TFP $\uparrow$, costs $\downarrow$, exposed labor demand ambiguous | AI / automation literature |
| GenAI exposure | task exposure changes market expectations and hiring demand | high GenAI exposure firms reprice after ChatGPT; labor demand reallocates | <span style="color:#1f6feb;font-weight:700">Eisfeldt et al. (2025)</span> |

**AI measurement from job postings**

$$
\begin{aligned}
w_s^{AI}
&=
\frac{
\#\{\text{jobs requiring skill }s\text{ and AI/ML/NLP/CV}\}
}{
\#\{\text{jobs requiring skill }s\}
},\\
\text{AIIntensity}_{i,t}
&=
\sum_s \text{SkillShare}_{i,s,t}\times w_s^{AI}.
\end{aligned}
$$

**GenAI exposure**

$$
\begin{aligned}
X^O
&=
\frac{\sum_{T\in O}X^T}{\sum_{T\in O}1},\\
X^f
&=
\sum_{O\in f}\text{EmpShare}_{f,O}X^O.
\end{aligned}
$$

::::

#### 6-2 Research Proposal

**Question** 设计一个 research proposal，检验 firm-level AI investment 是否提升 firm growth and valuation，并区分 product innovation 和 cost reduction 机制。

::::{collapse} 分析框架

可使用 <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> 式 AI worker / job posting measure，再用 pre-existing hiring network $\times$ AI university strength 做 IV。

::::

::::{solution}

**Research question**

Does firm-level AI investment causally increase growth, and is the mechanism product innovation or cost reduction?

**Hypotheses**

$$
\begin{aligned}
\text{AIIntensity}\uparrow
&\Rightarrow
\text{sales growth}\uparrow,\ \text{employment growth}\uparrow,\ \text{market value}\uparrow,\\
\text{product innovation channel}
&\Rightarrow
\text{patents/trademarks/product scope}\uparrow,\\
\text{process innovation channel}
&\Rightarrow
\text{TFP}\uparrow,\ \text{costs}\downarrow,\ \text{labor demand}\downarrow.
\end{aligned}
$$

**Data**

- Burning Glass / Lightcast：AI job postings and skills.
- Cognism / LinkedIn / Revelio：AI worker stock.
- Compustat / CRSP：sales, employment, market value, investment, returns.
- Patent and trademark data：innovation mechanisms.
- Pre-2010 hiring network and AI university research strength for IV-style design.

**Long-difference model**

$$
\begin{aligned}
\Delta \log Y_i
&=
\beta \Delta \text{ShareAIWorkers}_i
+\Gamma'\Delta X_i
+\eta_j
+\varepsilon_i,
\end{aligned}
$$

where $Y_i\in\{\text{Sales},\text{Employment},\text{Market Value}\}$.

**IV idea**

$$
\begin{aligned}
Z_i
&=
\text{Pre-2010 HiringNetwork}_{i,u}
\times
\text{AIResearchStrength}_{u,\text{ex ante}}.
\end{aligned}
$$

First stage：

$$
\begin{aligned}
\Delta \text{ShareAIWorkers}_i
&=
\pi Z_i+\Gamma'\Delta X_i+\eta_j+\nu_i.
\end{aligned}
$$

Second stage：

$$
\begin{aligned}
\Delta \log Y_i
&=
\beta \widehat{\Delta \text{ShareAIWorkers}}_i
+\Gamma'\Delta X_i+\eta_j+\varepsilon_i.
\end{aligned}
$$

**Expected results**

$$
\begin{aligned}
\beta>0
&\Rightarrow
\text{AI raises growth / valuation},\\
\beta_{\text{patent/trademark}}>0
&\Rightarrow
\text{product innovation channel},\\
\beta_{\text{cost}}<0
&\Rightarrow
\text{process innovation channel}.
\end{aligned}
$$

**Threats**

1. AI adoption is endogenous: high-growth firms hire AI workers because they already expect growth.
2. Job postings measure demand, not actual adoption; measurement error may bias OLS.
3. IV exclusion may fail if historical university networks affect growth through other high-skill channels.

::::

#### 6-3 Mechanism Question

**Question** Explain three mechanisms in AI corporate finance: AI as general-purpose technology, product innovation vs process innovation, and GenAI exposure / repricing. For each, summarize one empirical paper and give predictions.

::::{collapse} 分析框架

AI 题要写成 corporate finance：它改变 growth options、labor demand、intangible investment、valuation，而不是只讨论技术本身。

::::

::::{solution}

**AI as general-purpose technology**

$$
\begin{aligned}
\text{AI adoption}
&\Rightarrow
\text{scalability}\uparrow,\ \text{growth option value}\uparrow
\Rightarrow
\text{market value}\uparrow.
\end{aligned}
$$

AI as GPT theory 预测 AI 提高生产函数可扩展性，创造 growth options，提高 market value。<span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> 用 AI job postings 和 IV（pre-existing hiring networks × AI university strength）测量 AI adoption，发现 AI adoption 因果性提高 sales、employment、market value，且 product innovation 渠道强于 cost reduction。

**Product innovation vs process innovation**

$$
\begin{aligned}
\text{product innovation}
&\Rightarrow
\text{patents/trademarks/product scope}\uparrow,\\
\text{process innovation}
&\Rightarrow
\text{TFP}\uparrow,\ \text{costs}\downarrow.
\end{aligned}
$$

Product innovation vs process innovation：AI 可通过扩展 product scope（产生 patents、trademarks）或提高 productivity（TFP、cost reduction）创造价值。实证证据显示 AI 的 product innovation 渠道更强：AI intensity 显著预测 product patents 和 trademarks 增加，但短期内对 TFP 和 costs 影响较弱，说明 AI 主要通过扩展产品和市场而非立即削减成本提升价值。

**GenAI exposure and repricing**

$$
\begin{aligned}
\text{GenAI exposure}\uparrow
&\Rightarrow
\text{expected productivity / profits}\uparrow
\Rightarrow
\text{stock market repricing}\uparrow,\\
\text{GenAI exposure}\uparrow
&\Rightarrow
\text{labor demand reallocation}.
\end{aligned}
$$

GenAI exposure theory 预测 GenAI 改变 task-level productivity expectations，high GenAI-exposed firms 预期利润上升，触发 stock market repricing 和 labor reallocation。<span style="color:#1f6feb;font-weight:700">Eisfeldt et al. (2025)</span> 用 ChatGPT release 作为 event study，构造 firm-level GenAI exposure（基于 occupation-level task exposure），发现 high-exposure firms 显著正向 repriced，且 labor demand 从 exposed occupations 转向 complementary occupations。

**Threats**

1. AI exposure may proxy for pre-existing high-skill or tech orientation.
2. Market repricing may reflect hype or sentiment rather than realized productivity.
3. Job postings capture intended hiring, not realized adoption or productive use.

::::

#### 6-4 Theory Comparison

**Question** 比较 AI and Corporate Finance 中 AI measurement、AI as GPT、product vs process innovation 与 GenAI exposure 的机制差异，并整理相关实证文章和支持结论。

::::{collapse} 分析框架

AI 对比题的关键是把 AI adoption 拆成可观测企业决策：labor demand signal、capability investment、innovation channel choice、task-exposure repricing。

::::

::::{solution}

**机制差异**

| Theory | 核心问题 | 机制链条 | 区别性预测 |
| :--- | :--- | :--- | :--- |
| AI measurement | how to measure firm-level AI adoption | AI job postings and AI worker stock reveal AI labor demand and capability | AI intensity predicts future sales, employment, and market value growth |
| AI as GPT | AI is general-purpose technology that changes production function | AI raises scalability and creates growth options | AI firms grow faster in sales, employment, innovation, and valuation |
| Product innovation | AI expands product scope and market opportunities | AI enables new products, patents, trademarks, and market entry | AI intensity predicts product patents, trademarks, and product-line breadth |
| Process innovation | AI automates tasks and reduces costs | AI substitutes for routine tasks and raises productivity | AI intensity predicts TFP gains, cost reductions, and labor displacement in exposed tasks |
| GenAI exposure | ChatGPT and GenAI change expected productivity and labor demand | high GenAI task exposure raises expected profits and reallocates labor | high GenAI-exposure firms are repriced after ChatGPT; labor demand shifts away from exposed tasks |

**实证支持**

| Theory | Empirical paper | Empirical design / evidence | 支持结论 |
| :--- | :--- | :--- | :--- |
| AI measurement | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> | AI job postings and resume-based AI worker stock | AI job postings and worker stock measure firm-level AI adoption and predict outcomes |
| AI as GPT | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> | long-difference and IV using pre-existing hiring networks × AI university strength | AI adoption causally increases sales, employment, and market value |
| Product innovation | <span style="color:#1f6feb;font-weight:700">Babina et al. (2024)</span> | AI intensity and subsequent patents, trademarks, product scope | AI investment predicts product innovation more strongly than immediate cost reduction |
| Process innovation | <span style="color:#1f6feb;font-weight:700">Brynjolfsson, Li and Raymond (2025)</span> | GenAI adoption and firm productivity | AI adoption can raise productivity and automate routine tasks |
| GenAI exposure | <span style="color:#1f6feb;font-weight:700">Eisfeldt et al. (2025)</span> | ChatGPT event study and occupation-level GenAI exposure | high GenAI-exposure firms are repriced positively after ChatGPT; labor demand reallocates |

**核心对比**

$$
\begin{aligned}
\text{Measurement}
&:\ \text{how to observe AI adoption at firm level},\\
\text{AI as GPT}
&:\ \text{AI changes production function and scalability},\\
\text{Product innovation}
&:\ \text{AI expands product scope and growth options},\\
\text{Process innovation}
&:\ \text{AI automates tasks and raises productivity},\\
\text{GenAI exposure}
&:\ \text{GenAI changes expectations and labor reallocation}.
\end{aligned}
$$

::::

