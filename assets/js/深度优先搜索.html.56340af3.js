"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[201],{6262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},5576:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>o,data:()=>c});var p=a(641);const t=[(0,p.Fv)('<h1 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索"><span>深度优先搜索</span></a></h1><p>深度优先搜索算法（Depth-First Search，简称DFS）是一种用于遍历或搜索树或图的算法。这个算法会尽可能深地搜索树的分支。当节点v的所在边都已被探寻过，搜索将回溯到发现节点v的那条边的起始节点。整个过程反复进行直到所有节点都被访问为止。DFS属于盲目搜索，最糟糕的情况算法时间复杂度为O(n!)。</p><p>基本思想是为了求得问题的解，先选择某一种可能情况向前探索；在探索过程中，一旦发现原来的选择是错误的，就退回一步重新选择，继续向前探索；如此反复进行，直至得到解或证明无解。</p><p>源: 与必应的对话， 2024/3/28 (1) 深度优先搜索_百度百科. https://baike.baidu.com/item/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2/5224976. (2) DFS (深度优先搜索) 算法详解 + 模板 + 例题，这一篇就够了_dfs算法-CSDN博客. https://blog.csdn.net/qq_47733361/article/details/123858318. (3) 深度优先搜索 - 维基百科，自由的百科全书. https://zh.wikipedia.org/zh-hans/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2. (4) DFS（图论） - OI Wiki. https://oi-wiki.org/graph/dfs/.</p><h3 id="栈解决迷宫问题" tabindex="-1"><a class="header-anchor" href="#栈解决迷宫问题"><span>栈解决迷宫问题</span></a></h3><p>回溯法</p><p>思路：从一个节点开始，任意找下一个能走的点，当找不到能走的点时，退回上一个点寻找是否有其它方向的点。</p><p>使用栈存储当前路径</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>maze <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span>\n\ndirs <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">def</span> <span class="token function">maze_path</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span>y1<span class="token punctuation">,</span>x2<span class="token punctuation">,</span>y2<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        curNode <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># 当前的节点</span>\n        <span class="token keyword">if</span> curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> x2 <span class="token keyword">and</span> curNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> y2<span class="token punctuation">:</span>\n            <span class="token comment"># 走到终点了</span>\n            <span class="token keyword">for</span> p <span class="token keyword">in</span> stack<span class="token punctuation">:</span>\n                <span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>\n            <span class="token keyword">return</span> <span class="token boolean">True</span>\n\n        <span class="token comment"># x,y 四个方向 x-1,y; x+1,y; x,y-1; x,y+1</span>\n        <span class="token keyword">for</span> <span class="token builtin">dir</span> <span class="token keyword">in</span> dirs<span class="token punctuation">:</span>\n            nextNode <span class="token operator">=</span> <span class="token builtin">dir</span><span class="token punctuation">(</span>curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n            <span class="token comment"># 如果下一个节点能走</span>\n            <span class="token keyword">if</span> maze<span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span>\n                maze<span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment"># 2表示为已经走过</span>\n                <span class="token keyword">break</span>\n        <span class="token keyword">else</span><span class="token punctuation">:</span>\n            maze<span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>\n            stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;没有路&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token boolean">False</span>\n\nmaze_path<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)],e={},o=(0,a(6262).A)(e,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,t)}]]),c=JSON.parse('{"path":"/datastruc/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2.html","title":"深度优先搜索","lang":"zh-CN","frontmatter":{"category":"数据结构","description":"深度优先搜索 深度优先搜索算法（Depth-First Search，简称DFS）是一种用于遍历或搜索树或图的算法。这个算法会尽可能深地搜索树的分支。当节点v的所在边都已被探寻过，搜索将回溯到发现节点v的那条边的起始节点。整个过程反复进行直到所有节点都被访问为止。DFS属于盲目搜索，最糟糕的情况算法时间复杂度为O(n!)。 基本思想是为了求得问题的解，...","head":[["meta",{"property":"og:url","content":"https://Misty-Star.github.io/datastruc/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2.html"}],["meta",{"property":"og:site_name","content":"MistyStar"}],["meta",{"property":"og:title","content":"深度优先搜索"}],["meta",{"property":"og:description","content":"深度优先搜索 深度优先搜索算法（Depth-First Search，简称DFS）是一种用于遍历或搜索树或图的算法。这个算法会尽可能深地搜索树的分支。当节点v的所在边都已被探寻过，搜索将回溯到发现节点v的那条边的起始节点。整个过程反复进行直到所有节点都被访问为止。DFS属于盲目搜索，最糟糕的情况算法时间复杂度为O(n!)。 基本思想是为了求得问题的解，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T15:02:29.000Z"}],["meta",{"property":"article:author","content":"MistyStar"}],["meta",{"property":"article:modified_time","content":"2024-05-09T15:02:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深度优先搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-09T15:02:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MistyStar\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"栈解决迷宫问题","slug":"栈解决迷宫问题","link":"#栈解决迷宫问题","children":[]}],"git":{"createdTime":1715266949000,"updatedTime":1715266949000,"contributors":[{"name":"Misty-Star","email":"1278734874@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":647},"filePathRelative":"datastruc/深度优先搜索.md","localizedDate":"2024年5月9日","excerpt":"\\n<p>深度优先搜索算法（Depth-First Search，简称DFS）是一种用于遍历或搜索树或图的算法。这个算法会尽可能深地搜索树的分支。当节点v的所在边都已被探寻过，搜索将回溯到发现节点v的那条边的起始节点。整个过程反复进行直到所有节点都被访问为止。DFS属于盲目搜索，最糟糕的情况算法时间复杂度为O(n!)。</p>\\n<p>基本思想是为了求得问题的解，先选择某一种可能情况向前探索；在探索过程中，一旦发现原来的选择是错误的，就退回一步重新选择，继续向前探索；如此反复进行，直至得到解或证明无解。</p>\\n<p>源: 与必应的对话， 2024/3/28\\n(1) 深度优先搜索_百度百科. https://baike.baidu.com/item/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2/5224976.\\n(2) DFS (深度优先搜索) 算法详解 + 模板 + 例题，这一篇就够了_dfs算法-CSDN博客. https://blog.csdn.net/qq_47733361/article/details/123858318.\\n(3) 深度优先搜索 - 维基百科，自由的百科全书. https://zh.wikipedia.org/zh-hans/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2.\\n(4) DFS（图论） - OI Wiki. https://oi-wiki.org/graph/dfs/.</p>","autoDesc":true}')}}]);