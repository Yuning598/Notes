# 11 LATE, Roy Model, and Marginal Treatment Effects

Source: EF8090 slides, PDF pp. 248-325; PS4 Q5-Q6, PS5 Q1-Q2.  
Links: [10_Potential_Outcomes_ATE_Matching](10_Potential_Outcomes_ATE_Matching) | [12_DiD_Fixed_Effects_Event_Study](12_DiD_Fixed_Effects_Event_Study) | [cards/LATE_Compliers](cards/LATE_Compliers) | [cards/MTE_Weights](cards/MTE_Weights) | [cards/Roy_Model_Selection](cards/Roy_Model_Selection)

## 1. LATE setting

Slides introduce LATE through Angrist's draft lottery setting：instrument affects treatment take-up, but treatment is not perfectly determined by the instrument。

Let $Z\in\{0,1\}$ be instrument, $D(z)\in\{0,1\}$ potential treatment, and $Y(d)$ potential outcome。

:::{admonition} Definition (LATE assumptions)
1. Independence: $(Y(1),Y(0),D(1),D(0))\perp Z$.
2. Exclusion: $Z$ affects $Y$ only through $D$.
3. Relevance: $E[D\mid Z=1]\ne E[D\mid Z=0]$.
4. Monotonicity: $D(1)\ge D(0)$ a.s., so no defiers。

:::

Compliance types:

$$
\begin{array}{c|cc}
\text{Type}&D(0)&D(1)\\\hline
\text{Never taker}&0&0\\
\text{Complier}&0&1\\
\text{Always taker}&1&1\\
\text{Defier}&1&0
\end{array}
$$

## 2. Wald estimand equals LATE

:::{admonition} Lemma (LATE theorem)
:::

#### Proof of Lemma (LATE theorem)

$$ \frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]} =E[Y(1)-Y(0)\mid D(1)>D(0)]. $$

**联立系统：** Observed treatment and outcome:
$$ D=ZD(1)+(1-Z)D(0), $$
$$ Y=Y(0)+D(Y(1)-Y(0)). $$

**连续求解：** By independence,
$$ \begin{aligned} E[D\mid Z=1]-E[D\mid Z=0] &=E[D(1)-D(0)]. \end{aligned} $$
For outcomes,
$$ \begin{aligned} E[Y\mid Z=1]-E[Y\mid Z=0] &=E[Y(0)+D(1)(Y(1)-Y(0))]\\ &\quad -E[Y(0)+D(0)(Y(1)-Y(0))]\\ &=E[(D(1)-D(0))(Y(1)-Y(0))]. \end{aligned} $$
Under monotonicity, $D(1)-D(0)=1$ for compliers and 0 otherwise。Thus
$$ \begin{aligned} \frac{E[(D(1)-D(0))\tau]}{E[D(1)-D(0)]} &=\frac{E[\tau\mathbf 1\{C\}]}{P(C)}\\ &=E[\tau\mid C]. \end{aligned} $$

**结论：** IV identifies the average treatment effect for compliers, not necessarily ATE。

## 3. Estimating compliance shares

PS4 Q6 asks whether always-taker, never-taker, and complier shares are estimable。
Under independence and monotonicity:

$$
a=P(D(1)=1,D(0)=1)=P(D=1\mid Z=0),
$$

$$
n=P(D(1)=0,D(0)=0)=P(D=0\mid Z=1),
$$

$$
c=P(D(1)=1,D(0)=0)=P(D=1\mid Z=1)-P(D=1\mid Z=0).
$$

Sample analogs replace probabilities by sample proportions。

If monotonicity is dropped, the Wald estimand becomes

$$
\frac{P(C)E[\tau\mid C]-P(DF)E[\tau\mid DF]}{P(C)-P(DF)},
$$

where $DF$ are defiers。This is hard to interpret as a clean average treatment effect。

## 4. Probability integral transform

PS5 Q1 supports the Roy/MTE normalization。If $X$ has continuous strictly increasing cdf $F$, define $Y=F(X)$。Then

$$
P(Y\le y)=P(F(X)\le y)=P(X\le F^{-1}(y))=F(F^{-1}(y))=y.
$$

So $Y\sim U[0,1]$。This lets the latent selection variable $U_D$ be normalized to uniform。

## 5. Roy model and selection

:::{admonition} Definition (Nonparametric Roy / selection model)
$$ Y=DY_1+(1-D)Y_0, \qquad D=1[U_D\le p(Z)], $$
where $U_D\sim U[0,1]$ and $(Y_0,Y_1,U_D)\perp Z$。

:::

The key economic object is selection on gains：individuals with low $U_D$ are more likely to take treatment。

:::{admonition} Definition (Marginal Treatment Effect)
$$ MTE(u)=E[Y_1-Y_0\mid U_D=u]. $$
It is the treatment effect for individuals indifferent at margin $u$。

:::

## 6. MTE weights

Slides stress that ATE, ATT, LATE and IV estimands are weighted averages of MTE。

:::{admonition} Lemma (ATE is integral of MTE)
:::

#### Proof of Lemma (ATE is integral of MTE)

$$ ATE=\int_0^1MTE(u)du. $$

$$ U_D\sim U[0,1]. $$

$$ \begin{aligned} E[Y_1-Y_0] &=E[E[Y_1-Y_0\mid U_D]]\\ &=\int_0^1E[Y_1-Y_0\mid U_D=u]du\\ &=\int_0^1MTE(u)du. \end{aligned} $$

**结论：** ATE weights all margins equally。

:::{admonition} Lemma (LATE weights MTE over changed margins)
**WTS：** If $p(z)>p(z')$,
$$ LATE(z,z')=\frac{\int_{p(z')}^{p(z)}MTE(u)du}{p(z)-p(z')}. $$

**联立系统：**
$$ D=1[U_D\le p(Z)]. $$

**连续求解：** The first stage is
$$ E[D\mid Z=z]-E[D\mid Z=z']=p(z)-p(z'). $$
The reduced form is
$$ \begin{aligned} E[Y\mid Z=z]-E[Y\mid Z=z'] &=\int_0^{p(z)}MTE(u)du-\int_0^{p(z')}MTE(u)du\\ &=\int_{p(z')}^{p(z)}MTE(u)du. \end{aligned} $$
Ratio gives the result。

**结论：** IV identifies treatment effects for individuals whose treatment status is shifted by the instrument。

:::

PS5 Q2 asks for untreated-group effect:

$$
E[Y_1-Y_0\mid D=0]
=\int_0^1MTE(u)\frac{P[p(Z)<u]}{P[D=0]}du.
$$

Derivation:

$$
\begin{aligned}
E[\tau\mathbf 1\{D=0\}]
&=E[\tau\mathbf 1\{U_D>p(Z)\}]\\
&=\int_0^1E[\tau\mid U_D=u]P[p(Z)<u]du\\
&=\int_0^1MTE(u)P[p(Z)<u]du.
\end{aligned}
$$

Divide by $P[D=0]$。

## 7. Vytlacil equivalence and policy effects

Slides state Vytlacil's equivalence: monotonicity in the LATE model corresponds to a latent index selection model

$$
D=1[p(Z)\ge U_D].
$$

Thus LATE and MTE frameworks are not separate worlds；LATE is a special weighted average of MTE。

Policy relevant treatment effect changes the distribution of $p(Z)$ under a policy and compares average outcomes before and after policy。MTE is useful because once $MTE(u)$ is identified or modeled, many policy counterfactuals become alternative weighting schemes over $u$。

## 8. What the older notes add

The older notes make the normalization step explicit:

$$
X\sim F \quad\Longrightarrow\quad F(X)\sim U[0,1].
$$

That is the clean way to think about the latent selection variable in Roy-type models: after normalization, the marginal individual is indexed by $u\in[0,1]$.

They also keep the weighting logic visible:

$$
ATE=\int_0^1 MTE(u)\,du.
$$

For untreated units,

$$
E[Y_1-Y_0\mid D=0]
=\int_0^1 MTE(u)\frac{P[p(Z)<u]}{P[D=0]}du.
$$

The point is that the estimand is a weighted average over the margins not selected into treatment.
