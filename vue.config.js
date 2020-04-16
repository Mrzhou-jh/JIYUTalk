module.exports = {
  pages: {
    index: {
      // index页面的入口
      entry: "src/pages/index/index.js",
      // index页面模板来源
      template: "public/index.html",
      // index页面最终打包在dist目录下输出文件名
      filename: "index.html",
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "index",
    },
    login: {
      // login页面的入口
      entry: "src/pages/login/login.js",
      // login页面模板来源
      template: "public/page1.html",
      // login页面最终打包在dist目录下输出文件名
      filename: "login.html",
      title: "login",
    },
  },
};
