import { defineConfig } from "vitepress";
import taskLists from "markdown-it-task-lists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Docs/",
  title: "AutoTestNext 自动化框架文档",
  description: "Auto Test Next 自动化框架文档",
  markdown: {
    toc: { level: [1, 2] },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/index" },
      { text: "特性介绍", link: "/docs/001/001" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          { text: "框架分层介绍", link: "/markdown-examples" },
          { text: "用户登录设计", link: "/api-examples" },
          { text: "丰富的断言", link: "/docs/001/001" },
          { text: "MySQL设计", link: "/docs/001/001" },
          { text: "Kafka使用", link: "/docs/001/001" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
