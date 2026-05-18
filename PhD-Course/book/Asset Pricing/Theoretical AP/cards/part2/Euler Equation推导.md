# Euler Equation 推导

先集中记号，是为了把 Epstein--Zin 递归改写成幂函数形式，后面一阶条件、homotheticity 和 SDF 推导都会明显更短：

$$
\begin{aligned}
\rho&:=1-\psi^{-1}
&&\text{把 time aggregator 的幂指数单独记下},\\
\theta&:=1-\gamma
&&\text{把 certainty equivalent 的幂指数单独记下},\\
\mu_t&:=\mathbb E_t\left[V_{t+1}^{\theta/\rho}\right]
&&\text{把 continuation term 单独记下}.
\end{aligned}
$$

这样后面只要反复代入 $\rho,\theta,\mu_t$，就不用每一步都写一长串 $\frac{1-\psi^{-1}}{1-\gamma}$ 和 $\mathbb E_t[V_{t+1}^{\theta/\rho}]$。

原始的 Epstein--Zin 递归是

$$
\begin{aligned}
J_t
&=\left[(1-\delta)c_t^{1-\psi^{-1}}
+\delta\left(E_t\left[J_{t+1}^{1-\gamma}\right]\right)^{\frac{1-\psi^{-1}}{1-\gamma}}\right]^{\frac{1}{1-\psi^{-1}}},\\
J_T&=c_T.
\end{aligned}
$$

其中

$$
\begin{aligned}
\psi
&=\text{EIS parameter}
&&\text{控制当前消费和 continuation utility 的替代弹性},\\
\gamma
&=\text{risk aversion parameter}
&&\text{控制对未来 continuation utility 不确定性的厌恶程度}.
\end{aligned}
$$

EIS（elasticity of intertemporal substitution）就是：**在“今天消费”和“未来消费”之间，相对价格变动 1\% 时，最优消费增长率愿意调整多少 \%**。  
所以：

$$
\begin{aligned}
\psi\ \text{大}
&\Longrightarrow \text{更愿意把消费从今天挪到未来或反过来},\\
\psi\ \text{小}
&\Longrightarrow \text{更不愿意跨期调整消费}.
\end{aligned}
$$

更具体地，

$$
\begin{aligned}
\underbrace{1-\psi^{-1}}_{\text{time aggregator curvature}}
&\text{决定跨期替代},\\
\underbrace{1-\gamma}_{\text{certainty equivalent curvature}}
&\text{决定风险厌恶}.
\end{aligned}
$$

所以 Epstein--Zin 的关键正是把

$$
\begin{aligned}
\text{intertemporal substitution}
\quad\text{和}\quad
\text{risk aversion}
\end{aligned}
$$

分开：$\psi$ 管前者，$\gamma$ 管后者。

这个 $J_t$ 的形式**不是这里从更深层原始偏好推导出来的**，而是 Epstein--Zin **直接设定的一类 recursive utility functional form**。它的目标就是同时满足：

$$
\begin{aligned}
\text{time aggregator}
&\text{负责跨期替代},\\
\text{certainty equivalent}
&\text{负责风险评价},\\
\text{二者分离}
&\Longrightarrow
\psi \text{ 和 } \gamma \text{ 可以分别控制不同经济含义}.
\end{aligned}
$$

所以这不是“由 CRRA 必然推出”的结果，而是为了摆脱 time-additive CRRA 中

$$
\begin{aligned}
\text{EIS}=\frac{1}{\gamma}
\end{aligned}
$$

这种绑定，而特意选的递归设定。

记忆时可以把它拆成三层：

$$
\begin{aligned}
\underbrace{J_{t+1}}_{\text{future utility}}
\xrightarrow[\text{risk}]{\,1-\gamma\,}
\underbrace{\left(E_t[J_{t+1}^{1-\gamma}]\right)^{\frac{1}{1-\gamma}}}_{\text{certainty equivalent}}
\xrightarrow[\text{substitution}]{\,1-\psi^{-1}\,}
\underbrace{\left[(1-\delta)c_t^{1-\psi^{-1}}+\delta(\cdots)^{1-\psi^{-1}}\right]^{\frac{1}{1-\psi^{-1}}}}_{\text{time aggregator}}.
\end{aligned}
$$

也就是：

$$
\begin{aligned}
\text{先用 } \gamma \text{ 处理未来风险，后用 } \psi \text{ 聚合当前与未来。}
\end{aligned}
$$

这个顺序就是最好记的地方：**先 risk，后 substitution**。
再定义

$$
\begin{aligned}
V_t:=J_t^\rho,\qquad \rho:=1-\psi^{-1},\qquad \theta:=1-\gamma,
\end{aligned}
$$

就得到后面更方便推导的 transformed recursion。

记

$$
\begin{aligned}
\mu_t&:=\mathbb E_t\left[V_{t+1}^{\theta/\rho}\right],\\
V_t&=\underbrace{(1-\delta)c_t^\rho}_{\text{current consumption}}+\underbrace{\delta\mu_t^{\rho/\theta}}_{\text{continuation utility}}.
\end{aligned}
$$

由 homotheticity，

$$
\begin{aligned}
\frac{\partial V_t}{\partial W_t}
&=\rho\frac{V_t}{W_t}.
\end{aligned}
$$

这里的 homotheticity 是指：如果把所有“规模变量”按同一比例放大，value function 只按幂次放大，而最优比例不变：

$$
\begin{aligned}
(c_t,W_t)\to (\lambda c_t,\lambda W_t)
\quad\Longrightarrow\quad
V_t(\lambda W_t)=\lambda^\rho V_t(W_t).
\end{aligned}
$$

因此 $V_t$ 对 wealth 必须是 degree-$\rho$ 的齐次函数，可以写成

$$
\begin{aligned}
V_t(W_t,X_t)=W_t^\rho F(X_t),
\end{aligned}
$$

于是直接求导就有

$$
\begin{aligned}
\frac{\partial V_t}{\partial W_t}
&=\rho W_t^{\rho-1}F(X_t)\\
&=\rho\frac{W_t^\rho F(X_t)}{W_t}\\
&=\rho\frac{V_t}{W_t}.
\end{aligned}
$$

先看当前消费的 FOC。因为

$$
\begin{aligned}
V_t
&=(1-\delta)c_t^\rho+\delta \mu_t^{\rho/\theta},
\end{aligned}
$$

而预算约束里当前多消费 $1$ 单位，就少留给组合投资 $1$ 单位，所以

$$
\begin{aligned}
\frac{\partial V_t}{\partial c_t}
&=(1-\delta)\rho c_t^{\rho-1},\\
\frac{\partial V_t}{\partial c_t}
&=\frac{\partial V_t}{\partial W_t}.
\end{aligned}
$$

在最优点，**多消费一单位** 与 **多留下一单位财富** 的边际价值必须相同。

再看 envelope condition。它的意思是：对 state variable $W_t$ 求导时，只保留它对价值函数的**直接影响**，因为 choice variable $c_t$ 已经满足最优 FOC，所以通过 $c_t^*(W_t)$ 传来的间接项在一阶上消失。于是

$$
\begin{aligned}
\frac{dV_t(W_t,c_t^*(W_t))}{dW_t}
&=V_W+V_c\frac{dc_t^*}{dW_t}\\
&=V_W,
\end{aligned}
$$

最后一个等号用到最优点的一阶条件把间接项消掉。

因此

$$
\begin{aligned}
(1-\delta)\rho c_t^{\rho-1}
&=\frac{\partial V_t}{\partial W_t}
=\rho\frac{V_t}{W_t} \\
\Longrightarrow\qquad
V_t
&=(1-\delta)c_t^{\rho-1}W_t.
\end{aligned}
$$

同理，

$$
\begin{aligned} V_{t+1} &= (1-\delta)c_{t+1}^{\rho-1}W_{t+1}. \end{aligned}
$$

* * *

现在从 pricing kernel 开始。用原始 utility  $J_t=V_t^{1/\rho}$ ，边际价值为

$$
\pi_t=\frac{\partial J_t}{\partial W_t}.
$$

因为

$$
\begin{aligned} J_t &= V_t^{1/\rho}, \\ \pi_t &= \frac{\partial J_t}{\partial W_t} = \frac{1}{\rho}V_t^{1/\rho-1} \frac{\partial V_t}{\partial W_t}= \frac{1}{\rho}V_t^{1/\rho-1} \left(\rho\frac{V_t}{W_t}\right) = \frac{V_t^{1/\rho}}{W_t}. \end{aligned}
$$

但是为了得到  $M_{t,t+1}$ ，更方便直接写边际替代率。对  $J_t$  求导：

$$
\begin{aligned} J_t &= \left[ (1-\delta)c_t^\rho+\delta \mu_t^{\rho/\theta} \right]^{1/\rho}. \end{aligned}
$$

当前消费的边际效用：

$$
\begin{aligned} \frac{\partial J_t}{\partial c_t} &= \frac{1}{\rho} V_t^{1/\rho-1} (1-\delta)\rho c_t^{\rho-1} \\ &= (1-\delta)V_t^{1/\rho-1}c_t^{\rho-1}. \end{aligned}
$$

明天财富的边际效用影响：

$$
\begin{aligned} \frac{\partial J_t}{\partial W_{t+1}} &= \frac{1}{\rho}V_t^{1/\rho-1} \cdot \delta\frac{\rho}{\theta} \mu_t^{\rho/\theta-1} \cdot \frac{\theta}{\rho} V_{t+1}^{\theta/\rho-1} \frac{\partial V_{t+1}}{\partial W_{t+1}} \\ &= \frac{\delta}{\rho} V_t^{1/\rho-1} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho-1} \frac{\partial V_{t+1}}{\partial W_{t+1}} \\ &= \frac{\delta}{\rho} V_t^{1/\rho-1} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho-1} \left(\rho\frac{V_{t+1}}{W_{t+1}}\right) \\ &= \delta V_t^{1/\rho-1} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho} \frac{1}{W_{t+1}}. \end{aligned}
$$

所以 SDF 是明天财富边际价值除以今天消费边际价值：

$$
\begin{aligned} M_{t,t+1} &= \frac{ \delta V_t^{1/\rho-1} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho} W_{t+1}^{-1} }{ (1-\delta)V_t^{1/\rho-1}c_t^{\rho-1} } \\ &= \frac{\delta}{1-\delta} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho} W_{t+1}^{-1} c_t^{1-\rho}. \end{aligned}
$$

现在把  $\mu_t$  消掉。由 Bellman equation，

$$
\begin{aligned} V_t &= (1-\delta)c_t^\rho+\delta\mu_t^{\rho/\theta}. \end{aligned}
$$

而 envelope 给出

$$
V_t=(1-\delta)c_t^{\rho-1}W_t.
$$

所以

$$
\begin{aligned} (1-\delta)c_t^{\rho-1}W_t &= (1-\delta)c_t^\rho+\delta\mu_t^{\rho/\theta} \\ \delta\mu_t^{\rho/\theta} &= (1-\delta)c_t^{\rho-1}W_t - (1-\delta)c_t^\rho \\ &= (1-\delta)c_t^{\rho-1}(W_t-c_t) \\ \Longrightarrow\qquad \mu_t^{\rho/\theta} &= \frac{1-\delta}{\delta} c_t^{\rho-1}(W_t-c_t). \end{aligned}
$$

因此

$$
\begin{aligned} \mu_t^{\rho/\theta-1} &= \left(\mu_t^{\rho/\theta}\right)^{1-\theta/\rho} \\ &= \left[ \frac{1-\delta}{\delta} c_t^{\rho-1}(W_t-c_t) \right]^{1-\theta/\rho}. \end{aligned}
$$

再代入

$$
V_{t+1} = (1-\delta)c_{t+1}^{\rho-1}W_{t+1},
$$

得到

$$
\begin{aligned} V_{t+1}^{\theta/\rho} &= \left[ (1-\delta)c_{t+1}^{\rho-1}W_{t+1} \right]^{\theta/\rho} \\ &= (1-\delta)^{\theta/\rho} c_{t+1}^{(\rho-1)\theta/\rho} W_{t+1}^{\theta/\rho}. \end{aligned}
$$

现在全部代回  $M_{t,t+1}$ ：

$$
\begin{aligned} M_{t,t+1} &= \frac{\delta}{1-\delta} \mu_t^{\rho/\theta-1} V_{t+1}^{\theta/\rho} W_{t+1}^{-1} c_t^{1-\rho} \\[4pt] &= \frac{\delta}{1-\delta} \left[ \frac{1-\delta}{\delta} c_t^{\rho-1}(W_t-c_t) \right]^{1-\theta/\rho} \\ &\qquad\qquad\times (1-\delta)^{\theta/\rho} c_{t+1}^{(\rho-1)\theta/\rho} W_{t+1}^{\theta/\rho} W_{t+1}^{-1} c_t^{1-\rho} \\[4pt] &= \delta^{\theta/\rho} c_t^{(\rho-1)(1-\theta/\rho)} (W_t-c_t)^{1-\theta/\rho} c_{t+1}^{(\rho-1)\theta/\rho} W_{t+1}^{\theta/\rho-1} c_t^{1-\rho}. \end{aligned}
$$

整理  $c_t$  的指数：

$$
\begin{aligned} (\rho-1)\left(1-\frac{\theta}{\rho}\right)+1-\rho &= (\rho-1) - (\rho-1)\frac{\theta}{\rho} - (\rho-1) \\ &= -(\rho-1)\frac{\theta}{\rho}. \end{aligned}
$$

所以

$$
\begin{aligned} M_{t,t+1} &= \delta^{\theta/\rho} c_{t+1}^{(\rho-1)\theta/\rho} c_t^{-(\rho-1)\theta/\rho} W_{t+1}^{\theta/\rho-1} (W_t-c_t)^{1-\theta/\rho} \\ &= \delta^{\theta/\rho} \left(\frac{c_{t+1}}{c_t}\right)^{(\rho-1)\theta/\rho} \left(\frac{W_{t+1}}{W_t-c_t}\right)^{\theta/\rho-1}. \end{aligned}
$$

因此在 slide 这套记号下：

$$
\boxed{ M_{t,t+1} = \frac{\pi_{t+1}}{\pi_t} = \delta^{\theta/\rho} \left(\frac{c_{t+1}}{c_t}\right)^{(\rho-1)\theta/\rho} \left(\frac{W_{t+1}}{W_t-c_t}\right)^{\theta/\rho-1}. }
$$

因为

$$
R_{a,t+1} = \frac{W_{t+1}}{W_t-c_t}, \qquad g_{c,t+1} = \frac{c_{t+1}}{c_t},
$$

所以也可以写成

$$
\boxed{ M_{t,t+1} = \delta^{\theta/\rho} g_{c,t+1}^{(\rho-1)\theta/\rho} R_{a,t+1}^{\theta/\rho-1}. }
$$
