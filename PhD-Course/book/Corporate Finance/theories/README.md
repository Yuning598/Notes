# Corporate Finance Theory Notes - Index

## 📚 理论笔记目录

本目录包含公司金融核心理论的系统整理，按照考试样题形式编写，适合复习使用。

---

## 📖 笔记列表

### 0. [理论整合与知识图谱](00_Theory_Integration.md)
**核心内容**：
- 六大理论主题关系图
- 跨理论统一预测
- 融资与派息决策树
- 核心公式速查
- 政策实验设计模板
- 考前检查清单

**适用场景**：考前总复习、理论对比、综合分析题

---

### ⚠️ [常见错误与易混淆点](Common_Mistakes.md) 🔥
**核心内容**：
- 19 个常见错误详解
- 理论预测对比表
- 公式易错点
- 考试陷阱识别
- 记忆技巧
- 考前自查清单

**适用场景**：考前查漏补缺、避免常见错误、快速自测

---

### 1. [MM 定理与税基资本结构理论](MM_and_Tax_Theory.md)
**核心内容**：
- MM Proposition I & II（无税、有税）
- Miller (1977) 个人税模型
- DeAngelo-Masulis (1980) 非债务税盾
- Graham (2000) 税盾价值估算
- Graham-Tucker (2006) 税收庇护

**关键公式**：
$$
\begin{aligned}
V_L &= V_U + T_C D \quad \text{(MM 1963)} \\
V_L &= V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D \quad \text{(Miller 1977)}
\end{aligned}
$$

**实证发现**：税盾价值占企业价值 5-10%

---

### 2. [代理理论](Agency_Theory.md)
**核心内容**：
- Jensen-Meckling (1976) 两类代理冲突
- Jensen (1986) 自由现金流理论
- Myers (1977) 债务悬置（Debt Overhang）
- Smith-Watts (1992) 成长期权与杠杆
- Stulz (1990) 管理层自由裁量权

**关键机制**：
- 资产替代（Asset Substitution）
- 投资不足（Underinvestment）
- 过度投资（Overinvestment）

**实证预测**：成长期权 ↑ → 杠杆 ↓

---

### 3. [Pecking Order 与信息不对称理论](Pecking_Order_Theory.md)
**核心内容**：
- Myers-Majluf (1984) 稀释成本
- Myers (1984) Pecking Order Theory
- Myers (2003) 理论综述
- Ross (1977) 债务信号理论
- Vermaelen (1981) 回购信号理论

**融资优先顺序**：
$$
\text{内部资金} \succ \text{债务} \succ \text{股权}
$$

**关键公式**：
$$
\text{Dilution} = I \times \frac{V_H - E[V]}{E[V] + NPV}
$$

---

### 4. [派息政策理论](Payout_Policy_Theory.md)
**核心内容**：
- MM (1961) 股利无关性
- 税基理论（Ex-dividend pricing）
- Bhattacharya (1979) 股利信号
- Miller-Rock (1985) 隐含现金流
- Jensen (1986) 自由现金流
- Jagannathan et al. (2000) 股利 vs. 回购
- DeAngelo et al. (2006) 生命周期理论

**股利 vs. 回购**：

| 维度       | Dividend   | Repurchase |
| ---------- | ---------- | ---------- |
| 承诺性     | 强         | 弱         |
| 现金流性质 | 永久性     | 临时性     |
| 信号强度   | 强         | 弱         |

---

### 5. [财务困境成本理论](Financial_Distress_Theory.md)
**核心内容**：
- Warner (1977) 直接破产成本
- Weiss (1990) 破产程序成本
- Andrade-Kaplan (1998) 综合困境成本
- Pulvino (1998) 资产贱卖（Fire Sales）
- Benmelech et al. (2005) 清算价值与债务契约
- Brown-Matsa (2016) 劳动力市场渠道

**关键发现**：
- 直接成本：1-5% 企业价值
- 间接成本：远超直接成本
- Fire sale discount：14-30%

---

### 6. [SEO 理论](../SEO_Theory.md)
**核心内容**：
- Myers-Majluf (1984) 逆向选择
- Baker-Wurgler (2002) 市场择时
- Ross (1977) 信号理论
- Miller-Rock (1985) 现金流信号
- Price pressure theory
- Ownership-monitoring theory

**SEO 公告效应**：

| 发行方式          | 平均 CAR |
| ----------------- | -------- |
| Firm commitment   | -3%      |
| Rights offer      | -1%      |
| Private placement | +4%      |

---

## 🎯 使用建议

### 快速查找指南

**我想复习...**

| 需求                           | 推荐笔记                     | 关键章节                     |
| ------------------------------ | ---------------------------- | ---------------------------- |
| MM 定理推导                    | 笔记 1                       | §1.1-1.4                     |
| 税盾价值估算                   | 笔记 1                       | §4 (Graham 2000)             |
| 资产替代问题                   | 笔记 2                       | §1.3                         |
| 投资不足问题                   | 笔记 2                       | §3 (Myers 1977)              |
| 自由现金流理论                 | 笔记 2                       | §2 (Jensen 1986)             |
| Myers-Majluf 模型              | 笔记 3                       | §1                           |
| Pecking Order 检验             | 笔记 3                       | §2                           |
| 债务信号理论                   | 笔记 3                       | §4 (Ross 1977)               |
| 股利信号理论                   | 笔记 4                       | §3 (Bhattacharya)            |
| 股利 vs. 回购                  | 笔记 4                       | §5                           |
| 生命周期理论                   | 笔记 4                       | §6.3 (DeAngelo et al.)       |
| 破产成本估算                   | 笔记 5                       | §2-3                         |
| Fire Sales                     | 笔记 5                       | §3.4 (Pulvino 1998)          |
| 清算价值与债务                 | 笔记 5                       | §4 (Benmelech et al.)        |
| SEO 公告效应                   | 笔记 6                       | §2-6                         |
| 理论对比                       | 笔记 0 (Integration)         | §2-3                         |
| 公式速查                       | 笔记 0 (Integration)         | §5                           |
| 政策实验模板                   | 笔记 0 (Integration)         | §6                           |

### 按主题复习
1. **资本结构**：笔记 1, 2, 3, 5
2. **派息政策**：笔记 4
3. **股权融资**：笔记 3, 6
4. **信息不对称**：笔记 3, 4, 6

### 按理论类型复习
1. **完美市场基准**：笔记 1 (MM)
2. **市场摩擦**：笔记 1 (税收), 2 (代理), 3 (信息), 5 (困境)
3. **信号理论**：笔记 3 (Ross, Vermaelen), 4 (Bhattacharya), 6 (SEO)

### 按实证方法复习
1. **事件研究**：笔记 3, 4, 6
2. **DiD 实验**：所有笔记的政策实验部分
3. **截面回归**：笔记 1, 2, 5

---

## 📊 核心公式速查

### 企业价值
$$
V_L = V_U + PV(\text{tax shield}) - PV(\text{distress}) - PV(\text{agency})
$$

### MM 定理
$$
\begin{aligned}
V_L &= V_U + T_C D \\
r_E &= r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

### 稀释成本
$$
\text{Dilution} = I \times \frac{V_H - E[V]}{E[V] + NPV}
$$

### 投资不足
$$
\max(V + C - D, 0) - I < \max(V - D, 0)
$$

### Ex-dividend pricing
$$
P_{\text{cum}} - P_{\text{ex}} = D \times \frac{1-t_d}{1-t_g}
$$

---

## ✅ 考前检查清单

### 理论理解
- [ ] 能推导 MM Proposition II (有税)
- [ ] 能解释 Pecking Order vs. Trade-Off 的区别
- [ ] 能用数值例子说明资产替代和投资不足
- [ ] 能解释股利与回购的区别
- [ ] 能说明 Fire Sale 的机制

### 实证证据
- [ ] 记住 Graham (2000) 税盾价值估计
- [ ] 记住 Warner (1977) 直接破产成本
- [ ] 记住 Pulvino (1998) Fire sale discount
- [ ] 记住主要公告效应（股利、回购、SEO）

### 实验设计
- [ ] 会设计税改实验检验税盾理论
- [ ] 会设计披露改革检验信息不对称
- [ ] 会设计破产法改革检验困境成本
- [ ] 会写 DiD 方程和平行趋势检验

---

## 📝 样题类型

### 类型 1：理论推导
- 推导 MM Proposition II
- 推导 Myers-Majluf 稀释成本
- 推导 Ross 分离均衡条件

### 类型 2：机制解释
- 解释为什么高成长企业杠杆率低
- 解释为什么盈利能力与杠杆负相关
- 解释 Fire Sale 的行业流动性效应

### 类型 3：实证预测
- 预测税改对杠杆的影响
- 预测强制披露对 SEO 公告效应的影响
- 预测破产法改革对投资的影响

### 类型 4：实验设计
- 设计 DiD 实验检验某理论
- 写出回归方程
- 说明识别假设和数据需求

### 类型 5：综合分析
- 给定企业特征，建议融资方式
- 用多个理论分析同一现象
- 比较不同理论的预测

---

## 🔗 相关资源

- **Paper Index**: `../Corporate_Finance_Paper_Index.md`
- **Empirical Notes**: `../01_Empirical_Corporate_Finance.md`
- **Reading Guide**: `../Theory_Reading_Guide.md`

---

## 📅 更新日志

- 2026-05-29: 创建所有核心理论笔记
  - MM & Tax Theory
  - Agency Theory
  - Pecking Order Theory
  - Payout Policy Theory
  - Financial Distress Theory
  - SEO Theory
  - Theory Integration

---

**祝考试顺利！** 🎓
