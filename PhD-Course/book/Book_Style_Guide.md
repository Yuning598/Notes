# Book Style Guide

这份规范用于维护 `PhD-Course/book` 的长期一致性。全书目标不是完整教材，而是服务 PhD 课程复习、QE 准备和跨课知识迁移。

## 1. 全书结构

全书按三层组织：

1. **Course notes**：Asset Pricing、Corporate Finance、Econometrics、Microeconomics 是主线内容。
2. **Problem Sets**：按课程收集考试题、推导题和 proof templates。
3. **Cross-Course Links**：按共同数学对象连接课程，例如 SDF、projection、moment restriction、identification 和 HJB。

每门课的 `index.md` 必须提供最短入口、章节顺序和跨课程导航；index 不放长推导。

## 2. 页面类型

### Course index

- 一级标题只写课程名，必要时可带课程代码。
- 第一段说明这门课在全书中的作用。
- 只做导航，不放长推导。

### Chapter note

- 一级标题使用 `编号 + 主题`，例如 `# 03 Probability Limits, OLS Asymptotics, and Wald Tests`。
- 主体用 `##` 组织大节；`###` 用于子主题；避免跳级。
- 每个大节只承担一个主题。

### Card note

- 适合单个概念、定理、公式或易错点。
- 必须有且只有一个 `#` 标题。
- 若使用 frontmatter，必须从第 1 行开始。

### Problem Set note

- 一级标题只写课程名，例如 `# Econometrics`。
- 每道大题使用 `### <连续编号>. <题名>`。
- 小题用正文加粗标签，例如 `**（a）**`，不要用 markdown header。
- 每个小题后紧跟自己的 `::::{solution}` 块。
- Problem Set 中不要使用 `####` 或更深标题。

### Cross-Course note

- Bridge note 以共同数学对象为中心，而不是课程目录为中心。
- 标准结构：共同对象、等价命题、跨课翻译、考场写法、常见错误、进入原始材料。
- 交互图的数据写在 `Cross-Course/data/qe_graph.yml`；正文不手写图谱 HTML。

### Corporate Finance paper/theory note

- Paper note 优先回答：research question、identification、main finding、course use。
- Theory note 优先写 mechanism、testable predictions、empirical paper、ideal policy change、threats to identification。
- 文献选择优先来自 `Corporate_Finance_Paper_Index.md`。

## 3. 标题与导航

- 每个 Markdown 文件最多一个一级标题。
- Frontmatter 若存在，必须从第 1 行开始。
- 不使用连续多个空标题或重复编号标题。
- 课程和 Problem Set 的导航标题尽量短。
- `ProblemSets` 作为目录名可保留，但展示标题使用 `Problem Sets`。

## 4. 数学排版

- 数学符号、函数、条件和比较静态都用 `$...$` 或 `$$...$$`；不要用反引号包数学内容。
- 反引号只用于文件名、命令、代码字段和原始字符串。
- 多步推导使用 display math + `aligned`：

```latex
$$
\begin{aligned}
a
&= b \\
&= c
\end{aligned}
$$
```

- 联立系统使用左大括号：

```latex
$$
\left\{
\begin{aligned}
...
\end{aligned}
\right.
$$
```

- 推导链中不要插入短句打断等号链；解释放在完整公式块前后，或放在右侧 `\text{}` 标签。
- 变量说明、符号含义和取值范围优先用行内公式。
- `\tag{}` 不放在 `aligned` 内部；标准写法是单独放在 `\end{aligned}` 之后、`$$` 之前：

```latex
$$
\begin{aligned}
a
&= b \\
&= c
\end{aligned}
\tag{1.1}
$$
```

- 不要把 `\begin{aligned}` 放在 display math 之外。
- 一个公式块只用一对 `$$...$$` 包住完整内容。
- 全书必须保持 display math delimiter 成对。

## 5. Admonition、solution 与 raw HTML

- 定义、命题、定理、警告使用 MyST admonition：

```markdown
:::{admonition} Definition (...)
...
:::
```

- 定理陈述可以放在 admonition 中；证明和长计算优先放在 admonition 外。
- Problem Set 答案使用 `::::{solution}`，并保证开闭配对。
- 内嵌 iframe 或 HTML widget 必须使用：

````markdown
```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe ...></iframe>
</div>
```
````

- TikZJax 若恢复使用，必须包含 `\begin{document}` 和 `\end{document}`；当前优先使用 Mermaid 或稳定静态图。

## 6. 链接、图片与 block ID

- 书内链接优先使用相对 Markdown 链接，例如 `[Econometrics](../Econometrics/index.md)`。
- 发布到 HTML 的 widget 路径使用构建后实际可访问路径。
- 图片必须确认源文件存在；避免裸 `Pasted image...`。
- Obsidian block ID 用于精确引用，格式保持 `^stable-id`，并避免重复。
- Block ID 必须单独成行，且前后各有一个空行。

## 7. 统一检查清单

每次大改后至少运行：

```bash
git diff --check
node --check PhD-Course/book/_static/cross-course-graph.js
PhD-Course/.venv/bin/python PhD-Course/book/tools/validate_cross_course_graph.py --graph PhD-Course/book/Cross-Course/data/qe_graph.yml --book-root PhD-Course/book
```

全书审计时检查：

- 每个 Markdown 文件最多一个 `#` 标题。
- 所有 display math delimiter 成对。
- 不存在 display math 外的 `aligned`。
- 不存在 `aligned` 内部或同一行尾部的 `\tag{}`。
- 不存在数学符号被反引号包裹。
- `::::{solution}` 开闭配对。
- raw HTML 都包在 `{raw} html` fence 内。
- `_toc.yml` 中的文件都存在。

## 8. 当前全书状态

截至 2026-06-07 的审计结果：

- 源码 Markdown：271 个，不含 `_build`。
- display math delimiter 无奇数文件；`Book_Style_Guide.md` 的示例代码块除外。
- TikZ fence：0 个。
- raw iframe 均使用 `{raw} html` 包装。
- Problem Set 课程页标题已统一为课程名。
- 本轮统一项：MS8956 GMM 公式标签移出 `aligned`，Corporate Finance 数学反引号改为 LaTeX 行内公式，MS8956 block ID 空行补齐。
