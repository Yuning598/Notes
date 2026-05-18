# EF8084 Final Review：Core Questions to Memorize

## Part 1：Corporate Financial Policy

MM benchmark says financial policy is irrelevant if markets are perfect, information is symmetric, there are no taxes, and financial policy does not affect cash flows.  
Corporate financial policy matters once these assumptions fail.

$$
\begin{aligned}
\text{financial policy matters}
&\Longleftarrow
\begin{cases}
\text{taxes} \Rightarrow \text{debt tax shield / payout tax clientele} \\
\text{distress costs} \Rightarrow \text{debt capacity limits} \\
\text{agency costs} \Rightarrow \text{debt and payout discipline} \\
\text{information asymmetry} \Rightarrow \text{pecking order / signaling / adverse selection} \\
\text{market timing} \Rightarrow \text{issue high, repurchase low}
\end{cases}
\end{aligned}
$$

### Capital Structure

Debt is valuable because interest is tax deductible, but too much debt creates expected financial distress costs and agency problems.

$$
\begin{aligned}
\text{leverage choice}
&\Longleftarrow
\begin{cases}
\text{tax benefit of debt} \uparrow \Rightarrow \text{leverage} \uparrow \\
\text{expected distress cost} \uparrow \Rightarrow \text{leverage} \downarrow \\
\text{growth opportunities} \uparrow \Rightarrow \text{underinvestment risk} \uparrow \Rightarrow \text{leverage} \downarrow \\
\text{information asymmetry} \uparrow \Rightarrow \text{internal funds} \succ \text{debt} \succ \text{equity} \\
\text{equity overvaluation} \uparrow \Rightarrow \text{equity issuance} \uparrow \Rightarrow \text{leverage} \downarrow
\end{cases}
\end{aligned}
$$

### Payout Policy

Dividend and buyback are not irrelevant because taxes, signaling, agency costs, and financial flexibility matter.

$$
\begin{aligned}
\text{payout policy}
&\Longleftarrow
\begin{cases}
\text{dividend tax penalty} \uparrow \Rightarrow \text{dividend demand} \downarrow \\
\text{credible dividend increase} \Rightarrow \text{future cash flow signal} \uparrow \Rightarrow CAR \uparrow \\
\text{false signal cost} \uparrow \Rightarrow \text{dividend smoothing} \uparrow \\
\text{free cash flow} \uparrow \Rightarrow \text{agency cost} \uparrow \Rightarrow \text{payout discipline} \uparrow \\
\text{temporary excess cash} \uparrow \Rightarrow \text{buyback} \uparrow
\end{cases}
\end{aligned}
$$

Dividend = payout with commitment.  
Buyback = payout with flexibility.

### SEO / Equity Issuance

Equity issue announcement is usually negative because managers have private information. If managers issue equity, the market infers that equity may be overvalued.

$$
\begin{aligned}
\text{SEO announcement effect}
&\Longleftarrow
\begin{cases}
\text{information asymmetry} \uparrow
\Rightarrow \text{overvaluation concern} \uparrow
\Rightarrow CAR \downarrow \\
\text{market-to-book / prior return} \uparrow
\Rightarrow \Pr(\text{SEO}) \uparrow
\Rightarrow \text{long-run return} \downarrow \\
\text{monitoring investor participation} \uparrow
\Rightarrow \text{certification value} \uparrow
\Rightarrow CAR \uparrow \\
\text{offer size} \uparrow,\ \text{liquidity} \downarrow
\Rightarrow \text{price pressure} \uparrow
\Rightarrow CAR \downarrow
\end{cases}
\end{aligned}
$$

Firm commitment is more negative because it sells shares to outside investors.  
Rights offer is less negative because existing shareholders can avoid dilution.  
Private placement can be positive because selected investors may certify or monitor the firm.

## Part 2：Identification

The identification question is: where does causal variation come from?

$$
\begin{aligned}
\text{method choice}
&\Longleftarrow
\begin{cases}
\text{policy before/after + treated/control} \Rightarrow \text{DiD} \\
\text{treatment assigned by cutoff} \Rightarrow \text{RDD} \\
\text{endogenous } X \text{ moved by external } Z \Rightarrow \text{IV}
\end{cases}
\end{aligned}
$$

DiD identifies treatment effects from differential changes over time, assuming parallel trends.  
RDD identifies local treatment effects from discontinuous treatment assignment at a cutoff, assuming no precise manipulation.  
IV identifies causal effects from the \(Z\)-driven part of endogenous \(X\), assuming relevance and exclusion.

### IV：Source, Good or Bad Reason

A valid IV must satisfy relevance and exclusion.

$$
\begin{aligned}
\text{valid IV}
&\Longleftarrow
\begin{cases}
\text{relevance}: Z \text{ significantly affects } X \\
\text{exclusion}: Z \text{ affects } Y \text{ only through } X
\end{cases}
\end{aligned}
$$

Good IV sources:
random assignment, lottery, policy shock, eligibility cutoff, supply-side shock.

Bad or dangerous IV sources:
lagged \(X\), peer average, endogenous policy exposure, instruments driven by common shocks.

Always discuss:
first-stage strength, exclusion restriction, weak IV risk, and LATE interpretation.

## Part 4 Lecture 1：Labor and Corporate Finance

Labor is not only a cost; it is also human capital, production input, and a source of financial frictions.

$$
\begin{aligned}
\text{labor and firm outcomes}
&\Longleftarrow
\begin{cases}
\text{worker skill / matching / management} \uparrow
\Rightarrow \text{TFP} \uparrow \\
\text{labor cost} \uparrow
\Rightarrow \text{automation / capital substitution} \uparrow \\
\text{labor mobility friction} \uparrow
\Rightarrow \text{matching efficiency} \downarrow \\
\text{firm-specific human capital} \uparrow
\Rightarrow \text{distress cost} \uparrow
\Rightarrow \text{leverage} \downarrow
\end{cases}
\end{aligned}
$$

TFP means output unexplained by capital and labor.

## Part 4 Lecture 2：ESG and AI

ESG and AI affect firms through labor, innovation, productivity, and valuation channels.

$$
\begin{aligned}
\text{ESG / AI through labor channel}
&\Longleftarrow
\begin{cases}
\text{financial pressure} \uparrow
\Rightarrow \text{safety investment} \downarrow
\Rightarrow \text{workplace injuries} \uparrow \\
\text{green human capital} \uparrow
\Rightarrow \text{real ESG implementation capacity} \uparrow \\
\text{AI investment} \uparrow
\Rightarrow \text{product innovation / process innovation} \uparrow \\
\text{AI exposure} \uparrow
\Rightarrow \text{labor substitution or complementarity}
\Rightarrow \text{employment and valuation change}
\end{cases}
\end{aligned}
$$

ESG is not only disclosure; it can reflect real labor, environmental, and governance investments.  
AI is a general-purpose technology that changes product innovation, process efficiency, labor demand, and firm value.
