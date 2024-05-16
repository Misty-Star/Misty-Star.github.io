import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
/*     {
      text: "算法",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    }, */
  ],
  "/cyber/": [
    {
      text: "网络安全",
      icon: "laptop-code",
      children: [
        {
          text: "计算机网络",
          prefix: "Network/",
          children: "structure",
        },
      ]
    },
  ],
  "/algorithm/": [
    {
      text: "算法",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/datastruc/": [
    {
      text: "数据结构",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/Japanese/": "structure",
  "/English/": "structure",
});
