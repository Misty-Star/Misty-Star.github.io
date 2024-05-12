import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "计算机",
    icon: "laptop-code",
    children: [
      {
        text: "算法",
        icon: "laptop-code",
        link: "algorithm/",
      },
      {
        text: "数据结构",
        icon: "laptop-code",
        link: "datastruc/",
      },
    ],
  },
  {
    text: "网络安全",
    icon: "laptop-code",
    link: "cyber/",
  },
  {
    text: "日语",
    icon: "book",
    link: "Japanese/",
  },
  {
    text: "英语",
    icon: "book",
    link: "English/ ",
  },
]);
