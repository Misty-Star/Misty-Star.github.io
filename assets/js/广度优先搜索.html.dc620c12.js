"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83],{6262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},4781:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>o,data:()=>c});var p=a(641);const t=[(0,p.Fv)('<h1 id="广度优先搜索" tabindex="-1"><a class="header-anchor" href="#广度优先搜索"><span>广度优先搜索</span></a></h1><p>广度优先搜索（Breadth First Search，简称BFS）是一种用于遍历或搜索树或图的算法。它从树的根（或图中的某个节点）开始，探索邻近的节点，然后再对每个邻近节点做同样的操作，层层递进。这个过程持续进行，直到找到目标节点或遍历完所有节点。</p><p>BFS的核心思想是使用队列来实现搜索过程。在搜索的每一步中，算法都会取出队列中的第一个节点，检查它是否为目标节点，如果不是，就将其所有未访问过的邻近节点加入队列。这样，队列中的节点就像是在按层次扩展，先进入队列的节点会先被探索。</p><p>这种搜索策略不仅可以用来确定从源节点到目标节点是否存在路径，还可以用来找到最短路径，因为在无权图中，BFS首次访问到的路径便是最短路径。</p><h3 id="队列解决迷宫问题" tabindex="-1"><a class="header-anchor" href="#队列解决迷宫问题"><span>队列解决迷宫问题</span></a></h3><p>思路：从一个节点开始，寻找所有接下来能继续走的点，继续不断寻找，知道找到出口</p><p>使用队列存储当前正在考虑的节点</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> deque\n\nmaze <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span>\n\ndirs <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span>\n\n\n<span class="token keyword">def</span> <span class="token function">print_r</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    curNode <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>\n\n    realpath <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">while</span> curNode<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>\n        realpath<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        curNode <span class="token operator">=</span> path<span class="token punctuation">[</span>curNode<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n\n    realpath<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 起点</span>\n    realpath<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">for</span> node <span class="token keyword">in</span> realpath<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>\n\n\n<span class="token keyword">def</span> <span class="token function">maze_path_queue</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    queue <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>\n        <span class="token keyword">if</span> curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> x2 <span class="token keyword">and</span> curNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> y2<span class="token punctuation">:</span>\n            <span class="token comment"># 终点</span>\n            print_r<span class="token punctuation">(</span>path<span class="token punctuation">)</span>\n            <span class="token keyword">return</span> <span class="token boolean">True</span>\n        <span class="token keyword">for</span> <span class="token builtin">dir</span> <span class="token keyword">in</span> dirs<span class="token punctuation">:</span>\n            nextNode <span class="token operator">=</span> <span class="token builtin">dir</span><span class="token punctuation">(</span>curNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span> maze<span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 后续节点进队，记录哪个节点带他来的</span>\n                maze<span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>nextNode<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 标记为已经走过</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;没有路&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token boolean">False</span>\n\n\nmaze_path_queue<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8)],e={},o=(0,a(6262).A)(e,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,t)}]]),c=JSON.parse('{"path":"/datastruc/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2.html","title":"广度优先搜索","lang":"zh-CN","frontmatter":{"category":"数据结构","description":"广度优先搜索 广度优先搜索（Breadth First Search，简称BFS）是一种用于遍历或搜索树或图的算法。它从树的根（或图中的某个节点）开始，探索邻近的节点，然后再对每个邻近节点做同样的操作，层层递进。这个过程持续进行，直到找到目标节点或遍历完所有节点。 BFS的核心思想是使用队列来实现搜索过程。在搜索的每一步中，算法都会取出队列中的第一个节...","head":[["meta",{"property":"og:url","content":"https://Misty-Star.github.io/datastruc/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2.html"}],["meta",{"property":"og:site_name","content":"MistyStar"}],["meta",{"property":"og:title","content":"广度优先搜索"}],["meta",{"property":"og:description","content":"广度优先搜索 广度优先搜索（Breadth First Search，简称BFS）是一种用于遍历或搜索树或图的算法。它从树的根（或图中的某个节点）开始，探索邻近的节点，然后再对每个邻近节点做同样的操作，层层递进。这个过程持续进行，直到找到目标节点或遍历完所有节点。 BFS的核心思想是使用队列来实现搜索过程。在搜索的每一步中，算法都会取出队列中的第一个节..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T15:02:29.000Z"}],["meta",{"property":"article:author","content":"MistyStar"}],["meta",{"property":"article:modified_time","content":"2024-05-09T15:02:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"广度优先搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-09T15:02:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MistyStar\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"队列解决迷宫问题","slug":"队列解决迷宫问题","link":"#队列解决迷宫问题","children":[]}],"git":{"createdTime":1715266949000,"updatedTime":1715266949000,"contributors":[{"name":"Misty-Star","email":"1278734874@qq.com","commits":1}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"datastruc/广度优先搜索.md","localizedDate":"2024年5月9日","excerpt":"\\n<p>广度优先搜索（Breadth First Search，简称BFS）是一种用于遍历或搜索树或图的算法。它从树的根（或图中的某个节点）开始，探索邻近的节点，然后再对每个邻近节点做同样的操作，层层递进。这个过程持续进行，直到找到目标节点或遍历完所有节点。</p>\\n<p>BFS的核心思想是使用队列来实现搜索过程。在搜索的每一步中，算法都会取出队列中的第一个节点，检查它是否为目标节点，如果不是，就将其所有未访问过的邻近节点加入队列。这样，队列中的节点就像是在按层次扩展，先进入队列的节点会先被探索。</p>\\n<p>这种搜索策略不仅可以用来确定从源节点到目标节点是否存在路径，还可以用来找到最短路径，因为在无权图中，BFS首次访问到的路径便是最短路径。</p>","autoDesc":true}')}}]);