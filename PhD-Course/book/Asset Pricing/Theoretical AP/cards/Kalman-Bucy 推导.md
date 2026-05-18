---
orphan: true
---

# Kalman‑Bucy 过滤器的推导

## 背景
连续时间 Kalman‑Bucy 过滤器是针对 **线性高斯** 系统的最优状态估计器。它给出在观察过程 $\mathcal{F}_t^{Y}$ 条件下的 **最小均方误差**（MMSE）估计 $\hat{x}_t = \mathbb{E}[x_t\mid\mathcal{F}_t^{Y}]$，以及对应的误差协方差矩阵 $P_t$ 的演化方程。

## 系统模型
设状态向量 $x_t\in\mathbb{R}^n$、观测向量 $Y_t\in\mathbb{R}^m$，满足

$$
\begin{aligned}
dx_t &= A(t)\,x_t\,dt \;+\; B(t)\,dW_t,\\[4pt]
dY_t &= C(t)\,x_t\,dt \;+\; D(t)\,dV_t,
\end{aligned}
$$

其中
- $W_t$、$V_t$ 为互相独立的标准 Brownian motion，
- $Q(t)=B(t)B(t)^{\top}$ 为过程噪声协方差，
- $R(t)=D(t)D(t)^{\top}$ 为观测噪声协方差。

## 推导步骤

### 1. 引入创新过程（Innovation）
我们先定义观测的**增量**

$$
 dY_t = C(t)\,x_t\,dt + D(t)\,dV_t,
$$

其中 $V_t$ 为独立的 Brownian motion。对已知的最优估计 $\hat{x}_t$（它是 $\mathcal{F}_t^{Y}$‑可测的），构造 **创新**

$$
 d\nu_t \:= dY_t - C(t)\,\hat{x}_t\,dt.
$$

将 $dY_t$ 的表达式代入，得到

$$
 d\nu_t = C(t)\,(x_t-\hat{x}_t)\,dt + D(t)\,dV_t = C(t)\,e_t\,dt + D(t)\,dV_t,
$$

其中误差 $e_t:=x_t-\hat{x}_t$。

**性质**：因为 $\hat{x}_t$ 只依赖已观测信息，$d\nu_t$ 是相对于 $\mathcal{F}_t^{Y}$ 的 **鞅增量**：$\mathbb{E}[d\nu_t\mid\mathcal{F}_t^{Y}] = 0$。

### 2. 假设估计方程的形式
在连续时间线性高斯系统中，最优估计 $\hat{x}_t$ 必然满足线性 SDE（这是最小均方误差投影的结果）

$$
 d\hat{x}_t = A(t)\,\hat{x}_t\,dt + K(t)\,d\nu_t,
$$

其中 $K(t)$ 为待求的 **卡尔曼增益矩阵**。

### 3. 误差动力学（Error SDE）
定义误差 $e_t = x_t - \hat{x}_t$，对其使用 Itô 引理：

$$
de_t = dx_t - d\hat{x}_t.
$$

把系统模型 $dx_t = A(t)\,x_t\,dt + B(t)\,dW_t$ 与估计方程代入，得到

$$
\begin{aligned}
de_t &= \bigl[A(t)\,x_t\,dt + B(t)\,dW_t\bigr] - \bigl[A(t)\,\hat{x}_t\,dt + K(t)\,d\nu_t\bigr] \\
     &= A(t)(x_t-\hat{x}_t)\,dt + B(t)\,dW_t - K(t)\,\bigl[C(t)\,e_t\,dt + D(t)\,dV_t\bigr] \\
     &= \bigl[A(t) - K(t)C(t)\bigr]e_t\,dt + B(t)\,dW_t - K(t)D(t)\,dV_t.
\end{aligned}
$$

### 4. 从误差协方差求增益（Deriving Gain from Covariance）

**核心思想**：最优增益 $K(t)$ 应最小化估计误差协方差 $P_t = \mathbb{E}[e_t e_t^\top]$。我们先推导 $P_t$ 的演化方程，再对 $K$ 变分。

---

**Riccati 方程推导**：对 $P_t = \mathbb{E}[e_t e_t^\top]$ 求微分，利用 Itô 乘积法则（$de_t\,de_t^\top$ 产生二次变差项）：

$$
dP_t = \mathbb{E}[de_t\,e_t^\top + e_t\,de_t^\top + de_t\,de_t^\top] .
$$

代入 $de_t = (A-KC)e_t\,dt + B\,dW_t - KD\,dV_t$，逐项计算：

$$
\begin{aligned}
de_t\,e_t^\top &= (A-KC)e_t e_t^\top\,dt + B\,dW_t\,e_t^\top - KD\,dV_t\,e_t^\top,\\[4pt]
e_t\,de_t^\top &= e_t e_t^\top(A-KC)^\top\,dt + e_t\,dW_t^\top B^\top - e_t\,dV_t^\top D^\top K^\top,\\[4pt]
de_t\,de_t^\top &= B\,dW_t\,dW_t^\top B^\top + KD\,dV_t\,dV_t^\top D^\top K^\top = BQB^\top\,dt + KRK^\top\,dt .
\end{aligned}
$$

取期望时，交叉项 $\mathbb{E}[dW_t\,e_t^\top]=0$、$\mathbb{E}[dV_t\,e_t^\top]=0$（因 $dW_t$, $dV_t$ 与 $e_t$ 独立），得到

$$
\frac{dP_t}{dt} = (A-KC)P_t + P_t(A-KC)^\top + BQB^\top + KRK^\top .
$$

---

**最小化误差求 $K$**：最优估计使 $\mathrm{tr}(P_t)$ 最小。稳态时 $\frac{dP_t}{dt}=0$，对 Riccati 方程关于 $K$ 变分：

$$
\frac{\partial}{\partial K}\mathrm{tr}\bigl[(A-KC)P_t + P_t(A-KC)^\top + KRK^\top\bigr] = 0 .
$$

**逐项计算**（$A$、$P_t$、$Q$ 不含 $K$，求导时视为常数）：

$$
\begin{aligned}
\frac{\partial}{\partial K}\mathrm{tr}\bigl[(A-KC)P_t\bigr] 
&= \frac{\partial}{\partial K}\mathrm{tr}\bigl[AP_t - KCP_t\bigr] \\[4pt]
&= \underbrace{\frac{\partial}{\partial K}\mathrm{tr}(AP_t)}_{=0} - \frac{\partial}{\partial K}\mathrm{tr}(K\underbrace{CP_t}_{M}) \\[4pt]
&= -(CP_t)^\top = -P_tC^\top .
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial}{\partial K}\mathrm{tr}\bigl[P_t(A-KC)^\top\bigr] 
&= \frac{\partial}{\partial K}\mathrm{tr}\bigl[P_tA^\top - P_tC^\top K^\top\bigr] \\[4pt]
&= -\frac{\partial}{\partial K}\mathrm{tr}(K^\top\underbrace{P_tC^\top}_{M}) \\[4pt]
&= -P_tC^\top . \quad \bigl(\text{利用 }\frac{\partial}{\partial K}\mathrm{tr}(K^\top M) = M\bigr)
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial}{\partial K}\mathrm{tr}(KRK^\top) 
&= K(R+R^\top) \quad \bigl(\text{利用 }\frac{\partial}{\partial K}\mathrm{tr}(KMK^\top) = K(M+M^\top)\bigr) \\[4pt]
&= 2KR . \quad \bigl(\text{因 }R=D D^\top\text{ 对称}\bigr)
\end{aligned}
$$

**汇总**：

$$
-P_tC^\top - P_tC^\top + 2KR = 0 \quad\Longrightarrow\quad K(t) = P_tC^\top R^{-1} .
$$

**代入得到标准 Riccati 方程**：将 $K = P_tC^\top R^{-1}$ 代入 $\frac{dP_t}{dt}$，整理得

$$
\frac{dP_t}{dt} = AP_t + P_tA^\top + Q - P_tC^\top R^{-1}CP_t .
$$

---


## 最终的 Kalman‑Bucy 过滤器
把得到的 $K(t)$ 与 $P_t$ 代回估计方程，得到完整的过滤器：

$$
\begin{aligned}
 d\hat{x}_t &= A(t)\,\hat{x}_t\,dt \;+\; P_t C(t)^{\top}R(t)^{-1}\,\bigl(dY_t - C(t)\,\hat{x}_t\,dt\bigr),\\[4pt]
 \frac{dP_t}{dt} &= A(t)P_t + P_tA(t)^{\top}+Q(t) - P_tC(t)^{\top}R(t)^{-1}C(t)P_t.
\end{aligned}
$$

其中
- 第一个式子给出状态最优估计的 **SDE**，
- 第二个式子给出误差协方差的 **Riccati 微分方程**。

## 小结
- Kalman‑Bucy 过滤器是线性高斯连续时间模型的闭式解。
- 增益 $K(t)=P_tC^\top R^{-1}$ 来自最小化误差协方差 $\mathrm{tr}(P_t)$。
- 误差协方差满足矩阵 Riccati 方程，稳态时 $P_t$ 递减（信息增益）。

---

**参考**：
- Kalman, R. E. (1960) *A New Approach to Linear Filtering and Prediction Problems*.
- Bucy, R. L., & Joseph, P. D. (1968) *Filtering for Stochastic Processes*.
