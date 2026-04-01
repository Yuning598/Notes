<span style="font-size:8.666666984558105pt;"><i>Speaker: Qihui Chen | Synthesized by PenguinYT</i></span>

<span style="font-size:12pt;"><b>1. Research Motivation</b></span>
<span style="font-size:8.666666984558105pt;">Addressing the</span> <span style="font-size:8.666666984558105pt;"><b>Statistical Black Box</b></span> <span style="font-size:8.666666984558105pt;">in Asset Pricing. Standard PCA-based factors suffer from dense loadings, making them difficult to interpret economically (难以进行经济学解释).</span>
- <span style="font-size:8.666666984558105pt;"><b>Objective:</b></span> <span style="font-size:8.666666984558105pt;">Combine the high performance of latent factors (潜在因子) with the interpretability of observable characteristics.</span>
<span style="font-size:8.666666984558105pt;"><i>(Refer to Slide 01: Big Picture)</i></span>

<span style="font-size:12pt;"><b>2. Theoretical Framework: EGS Factors</b></span>
<span style="font-size:8.666666984558105pt;">The core innovation is introducing</span> <span style="font-size:8.666666984558105pt;"><b>Sparsity</b></span> <span style="font-size:8.666666984558105pt;">(稀疏性) into the PCA objective function through an</span> <span style="font-size:8.666666984558105pt;"><b>Adaptive Lasso Penalty</b></span> <span style="font-size:8.666666984558105pt;">(自适应Lasso惩罚项).</span>
- <span style="font-size:8.666666984558105pt;"><b>Mathematical Core:</b></span> <span style="font-size:8.666666984558105pt;">The model minimizes PCA error + Sparse penalty subject to</span> <span style="font-size:8.666666984558105pt;"><b>Economic Constraints</b></span> <span style="font-size:8.666666984558105pt;">(经济学约束).</span>
- <span style="font-size:8.666666984558105pt;"><b>Insight:</b></span> <span style="font-size:8.666666984558105pt;">Sparsity forces each factor to associate only with a few key characteristics, mitigating</span> <span style="font-size:8.666666984558105pt;"><b>Overfitting</b></span> <span style="font-size:8.666666984558105pt;">(过拟合) and enhancing the clarity of the</span> <span style="font-size:8.666666984558105pt;"><b>Stochastic Discount Factor (SDF)</b></span> <span style="font-size:8.666666984558105pt;">(随机折现因子).</span>
<span style="font-size:8.666666984558105pt;"><i>(Refer to Slide 05 & 07 for derivation)</i></span>

<span style="font-size:12pt;"><b>3. Empirical Performance</b></span>
<span style="font-size:8.666666984558105pt;">EGS strikes a balance across three dimensions: Interpretability, Comovement Capture, and Asset Pricing Performance. EGS consistently yields</span> <span style="font-size:8.666666984558105pt;"><b>smaller pricing errors</b></span> <span style="font-size:8.666666984558105pt;">(定价误差更小) compared to PCA/IPCA.</span>

<span style="font-size:12pt;"><b>4. Conclusion</b></span>
<span style="font-size:8.666666984558105pt;">EGS provides a unifying, economically disciplined perspective on factor construction, moving away from black-box statistical methods toward</span> <span style="font-size:8.666666984558105pt;"><b>Explainable Finance</b></span><span style="font-size:8.666666984558105pt;">.</span>


[[01_Big_Picture.jpg]]




[[02_Empirical_Overview.jpg]]



[[03_Method_Comparison.jpg]]



[[05_EGS_Formula.jpg]]



[[06_Discussion_Overfitting.jpg]]


[[07_Fama_MacBeth.jpg]]


[[08_Conclusion.jpg]]