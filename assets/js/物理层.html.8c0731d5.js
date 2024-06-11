"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33],{6262:(l,i)=>{i.A=(l,i)=>{const e=l.__vccOpts||l;for(const[l,a]of i)e[l]=a;return e}},4e3:(l,i,e)=>{e.r(i),e.d(i,{comp:()=>h,data:()=>r});var a=e(641);const n=e.p+"assets/img/物理层.f20555ae.png",p=[(0,a.Fv)('<figure><img src="'+n+'" alt="物理层" tabindex="0" loading="lazy"><figcaption>物理层</figcaption></figure><h1 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层"><span>物理层</span></a></h1><h2 id="物理层概念" tabindex="-1"><a class="header-anchor" href="#物理层概念"><span>物理层概念</span></a></h2><h3 id="_4个特性" tabindex="-1"><a class="header-anchor" href="#_4个特性"><span>4个特性</span></a></h3><ul><li><p>机械特性</p><ul><li>接口所用接线器的一些物理属性，如接口形状、接口尺寸、引线数目及排列</li></ul></li><li><p>电气特性</p><ul><li>接口电缆的各条线上出现的电压的范围、阻抗匹配、传输速率、距离等</li></ul></li><li><p>功能特性</p><ul><li>某条线上出现的某一电平的电压的意义，接口部件信号线的用途</li></ul></li><li><p>过程特性</p><ul><li>对于不同功能的各种可能时间的出现顺序，定义各条物理线路的工作流程和时序关系</li></ul></li></ul><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h3><ul><li>实现比特流的传输</li></ul><h2 id="数通基础" tabindex="-1"><a class="header-anchor" href="#数通基础"><span>数通基础</span></a></h2><h3 id="常用术语" tabindex="-1"><a class="header-anchor" href="#常用术语"><span>常用术语</span></a></h3><ul><li><p>消息</p></li><li><p>数据</p></li><li><p>信号</p></li><li><p>信源</p></li><li><p>信宿</p></li><li><p>信道</p></li><li><p>基带信号</p></li><li><p>宽带信号</p></li><li><p>码元</p></li></ul><h3 id="通信系统" tabindex="-1"><a class="header-anchor" href="#通信系统"><span>通信系统</span></a></h3><ul><li><p>源系统</p><ul><li><p>源点（信源）</p></li><li><p>发送器</p></li></ul></li><li><p>传输系统</p></li><li><p>目的系统</p><ul><li><p>接受器</p></li><li><p>目的（信宿）</p></li></ul></li></ul><h3 id="三种通信方式" tabindex="-1"><a class="header-anchor" href="#三种通信方式"><span>三种通信方式</span></a></h3><ul><li><p>单工通信</p><ul><li>单向</li></ul></li><li><p>半双工通信</p><ul><li>双向，但不能同时发送和接收</li></ul></li><li><p>全双工通信</p><ul><li>双向，可同时发送和接收</li></ul></li></ul><h3 id="编码与调制" tabindex="-1"><a class="header-anchor" href="#编码与调制"><span>编码与调制</span></a></h3><ul><li><p>信号</p><ul><li><p>数字信号、模拟信号</p></li><li><p>基带信号、宽带信号</p></li></ul></li><li><p>编码</p><ul><li><p>数字-数字</p><ul><li><p>非归零编码（NRZ）</p><ul><li>正电平-1，负电平-0</li></ul></li><li><p>归零编码</p><ul><li>正脉冲-1，负脉冲-0</li></ul></li><li><p>曼彻斯特编码</p><ul><li>高到低跳变-1，低到高跳变-0，可反过来定义</li></ul></li><li><p>差分曼彻斯特编码</p><ul><li>每一位的中心处始终有跳变，位开始边界有跳变-0，位开始边界没有跳变-1</li></ul></li></ul></li><li><p>模拟-数字</p><ul><li>PCM脉码调制</li></ul></li></ul></li><li><p>调制</p><ul><li><p>数字-模拟</p><ul><li><p>调频</p></li><li><p>调幅</p></li><li><p>调相</p></li><li><p>QAM</p></li></ul></li></ul></li></ul><h3 id="两种数据传输方式" tabindex="-1"><a class="header-anchor" href="#两种数据传输方式"><span>两种数据传输方式</span></a></h3><ul><li><p>串行传输</p></li><li><p>并行传输</p></li></ul><h3 id="信道容量" tabindex="-1"><a class="header-anchor" href="#信道容量"><span>信道容量</span></a></h3><ul><li><p>奈氏准则</p><ul><li><p>码元传输速率的上限值=2W Baud（波特）</p><ul><li><p>理想低通信道下的极限数据传输率S=2Wlog2v</p></li><li><p>单位：b/s</p></li></ul></li></ul></li><li><p>香农公式</p><ul><li><p>信道的极限信息传输速率C=Wlog2(1+S/N)</p></li><li><p>单位：bit/s</p></li><li><p>W：信道的带宽（单位Hz）</p></li><li><p>S：信道内所传信号的平均功率</p></li><li><p>N：信道内部的高斯噪声功率</p></li></ul></li></ul><h2 id="传输介质" tabindex="-1"><a class="header-anchor" href="#传输介质"><span>传输介质</span></a></h2><h3 id="引导型传输媒体-有线" tabindex="-1"><a class="header-anchor" href="#引导型传输媒体-有线"><span>引导型传输媒体（有线）</span></a></h3><ul><li><p>双绞线</p></li><li><p>同轴电缆</p></li><li><p>光缆</p></li></ul><h3 id="非引导型传输媒体-无线" tabindex="-1"><a class="header-anchor" href="#非引导型传输媒体-无线"><span>非引导型传输媒体（无线）</span></a></h3><h2 id="信道复用" tabindex="-1"><a class="header-anchor" href="#信道复用"><span>信道复用</span></a></h2><h3 id="频分多路复用" tabindex="-1"><a class="header-anchor" href="#频分多路复用"><span>频分多路复用</span></a></h3><h3 id="时分多路复用" tabindex="-1"><a class="header-anchor" href="#时分多路复用"><span>时分多路复用</span></a></h3><h3 id="统计时分复用" tabindex="-1"><a class="header-anchor" href="#统计时分复用"><span>统计时分复用</span></a></h3><h3 id="波分多路复用" tabindex="-1"><a class="header-anchor" href="#波分多路复用"><span>波分多路复用</span></a></h3><h3 id="码分多路复用" tabindex="-1"><a class="header-anchor" href="#码分多路复用"><span>码分多路复用</span></a></h3><h2 id="设备" tabindex="-1"><a class="header-anchor" href="#设备"><span>设备</span></a></h2><h3 id="中继器" tabindex="-1"><a class="header-anchor" href="#中继器"><span>中继器</span></a></h3><h3 id="集线器" tabindex="-1"><a class="header-anchor" href="#集线器"><span>集线器</span></a></h3><h2 id="宽带接入技术" tabindex="-1"><a class="header-anchor" href="#宽带接入技术"><span>宽带接入技术</span></a></h2><h3 id="adsl技术" tabindex="-1"><a class="header-anchor" href="#adsl技术"><span>ADSL技术</span></a></h3><h3 id="光纤同轴混合网-hfc网" tabindex="-1"><a class="header-anchor" href="#光纤同轴混合网-hfc网"><span>光纤同轴混合网（HFC网）</span></a></h3><h3 id="fttx技术" tabindex="-1"><a class="header-anchor" href="#fttx技术"><span>FTTx技术</span></a></h3>',37)],t={},h=(0,e(6262).A)(t,[["render",function(l,i){return(0,a.uX)(),(0,a.CE)("div",null,p)}]]),r=JSON.parse('{"path":"/cyber/Network/%E7%89%A9%E7%90%86%E5%B1%82.html","title":"物理层","lang":"zh-CN","frontmatter":{"category":"计算机网络","order":2,"description":"物理层物理层 物理层 物理层概念 4个特性 机械特性 接口所用接线器的一些物理属性，如接口形状、接口尺寸、引线数目及排列 电气特性 接口电缆的各条线上出现的电压的范围、阻抗匹配、传输速率、距离等 功能特性 某条线上出现的某一电平的电压的意义，接口部件信号线的用途 过程特性 对于不同功能的各种可能时间的出现顺序，定义各条物理线路的工作流程和时序关系 功能...","head":[["meta",{"property":"og:url","content":"https://Misty-Star.github.io/cyber/Network/%E7%89%A9%E7%90%86%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"MistyStar"}],["meta",{"property":"og:title","content":"物理层"}],["meta",{"property":"og:description","content":"物理层物理层 物理层 物理层概念 4个特性 机械特性 接口所用接线器的一些物理属性，如接口形状、接口尺寸、引线数目及排列 电气特性 接口电缆的各条线上出现的电压的范围、阻抗匹配、传输速率、距离等 功能特性 某条线上出现的某一电平的电压的意义，接口部件信号线的用途 过程特性 对于不同功能的各种可能时间的出现顺序，定义各条物理线路的工作流程和时序关系 功能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-11T13:52:36.000Z"}],["meta",{"property":"article:author","content":"MistyStar"}],["meta",{"property":"article:modified_time","content":"2024-06-11T13:52:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"物理层\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-11T13:52:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MistyStar\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"物理层概念","slug":"物理层概念","link":"#物理层概念","children":[{"level":3,"title":"4个特性","slug":"_4个特性","link":"#_4个特性","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]}]},{"level":2,"title":"数通基础","slug":"数通基础","link":"#数通基础","children":[{"level":3,"title":"常用术语","slug":"常用术语","link":"#常用术语","children":[]},{"level":3,"title":"通信系统","slug":"通信系统","link":"#通信系统","children":[]},{"level":3,"title":"三种通信方式","slug":"三种通信方式","link":"#三种通信方式","children":[]},{"level":3,"title":"编码与调制","slug":"编码与调制","link":"#编码与调制","children":[]},{"level":3,"title":"两种数据传输方式","slug":"两种数据传输方式","link":"#两种数据传输方式","children":[]},{"level":3,"title":"信道容量","slug":"信道容量","link":"#信道容量","children":[]}]},{"level":2,"title":"传输介质","slug":"传输介质","link":"#传输介质","children":[{"level":3,"title":"引导型传输媒体（有线）","slug":"引导型传输媒体-有线","link":"#引导型传输媒体-有线","children":[]},{"level":3,"title":"非引导型传输媒体（无线）","slug":"非引导型传输媒体-无线","link":"#非引导型传输媒体-无线","children":[]}]},{"level":2,"title":"信道复用","slug":"信道复用","link":"#信道复用","children":[{"level":3,"title":"频分多路复用","slug":"频分多路复用","link":"#频分多路复用","children":[]},{"level":3,"title":"时分多路复用","slug":"时分多路复用","link":"#时分多路复用","children":[]},{"level":3,"title":"统计时分复用","slug":"统计时分复用","link":"#统计时分复用","children":[]},{"level":3,"title":"波分多路复用","slug":"波分多路复用","link":"#波分多路复用","children":[]},{"level":3,"title":"码分多路复用","slug":"码分多路复用","link":"#码分多路复用","children":[]}]},{"level":2,"title":"设备","slug":"设备","link":"#设备","children":[{"level":3,"title":"中继器","slug":"中继器","link":"#中继器","children":[]},{"level":3,"title":"集线器","slug":"集线器","link":"#集线器","children":[]}]},{"level":2,"title":"宽带接入技术","slug":"宽带接入技术","link":"#宽带接入技术","children":[{"level":3,"title":"ADSL技术","slug":"adsl技术","link":"#adsl技术","children":[]},{"level":3,"title":"光纤同轴混合网（HFC网）","slug":"光纤同轴混合网-hfc网","link":"#光纤同轴混合网-hfc网","children":[]},{"level":3,"title":"FTTx技术","slug":"fttx技术","link":"#fttx技术","children":[]}]}],"git":{"createdTime":1715771743000,"updatedTime":1718113956000,"contributors":[{"name":"Misty-Star","email":"1278734874@qq.com","commits":2}]},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"cyber/Network/物理层.md","localizedDate":"2024年5月15日","excerpt":"<figure><figcaption>物理层</figcaption></figure>\\n<h1>物理层</h1>\\n<h2>物理层概念</h2>\\n<h3>4个特性</h3>\\n<ul>\\n<li>\\n<p>机械特性</p>\\n<ul>\\n<li>接口所用接线器的一些物理属性，如接口形状、接口尺寸、引线数目及排列</li>\\n</ul>\\n</li>\\n<li>\\n<p>电气特性</p>\\n<ul>\\n<li>接口电缆的各条线上出现的电压的范围、阻抗匹配、传输速率、距离等</li>\\n</ul>\\n</li>\\n<li>\\n<p>功能特性</p>\\n<ul>\\n<li>某条线上出现的某一电平的电压的意义，接口部件信号线的用途</li>\\n</ul>\\n</li>\\n<li>\\n<p>过程特性</p>\\n<ul>\\n<li>对于不同功能的各种可能时间的出现顺序，定义各条物理线路的工作流程和时序关系</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);