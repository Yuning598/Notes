---
orphan: true
---

# Realized Variance and Microstructure Noise

Source: EF8083 slides, pp. 24-36  
Backlinks: [01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH) | [Source of volatility](../01_Volatility_ARCH_GARCH#Source of volatility) | [02_Implied_Volatility_VIX_VRP](../02_Implied_Volatility_VIX_VRP) | [EF8077 Bid-Ask Spread](../../../ProblemSet/Theoretical%20Asset%20Pricing.md)

Continuous-time benchmark:

$$
dp_t=\mu_tdt+\sigma_tdW_t.
$$

Integrated variance:

$$
IV_t=\int_t^{t+1}\sigma_s^2ds.
$$

Realized variance:

$$
RV_t=\sum_{j=1}^M r_{t,j}^2.
$$

Without microstructure noise:

$$
RV_t\to_p IV_t.
$$

With observed price

$$
p_t^{obs}=p_t+\eta_t,
$$

high-frequency returns include noise differences:

$$
r_{t,j}^{obs}=r_{t,j}+(\eta_{t,j}-\eta_{t,j-1}),
$$

so too-frequent sampling can bias $RV$ upward.
