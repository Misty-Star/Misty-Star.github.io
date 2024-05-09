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
  "/algorithm/": "structure",
  "/datastruc/": "structure",
  "/Japanese/": "structure",
  "/English/": "structure",
});
