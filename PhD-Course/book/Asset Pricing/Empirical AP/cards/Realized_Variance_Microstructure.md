---
orphan: true
---

# Realized Variance and Microstructure Noise

导航：[Asset Pricing index](../../index.md) · [Empirical AP MOC](../00-MOC_EF8083_Empirical_Asset_Pricing.md) · 来源：[01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH)

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
