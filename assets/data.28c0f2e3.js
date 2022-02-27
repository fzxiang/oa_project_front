import { f as createVNode } from "./vendor.faf2de98.js";
const tags = ["\u5F88\u6709\u60F3\u6CD5\u7684", "\u4E13\u6CE8\u8BBE\u8BA1", "\u5DDD\u59B9\u5B50", "\u5927\u957F\u817F", "\u6D77\u7EB3\u767E\u5DDD", "\u524D\u7AEF\u5F00\u53D1", "vue3"];
createVNode("span", {
  "class": "iconify",
  "data-icon": "jam:codepen-circle",
  "data-inline": "false"
}, null);
const teams = [{
  icon: "ri:alipay-fill",
  title: "\u79D1\u5B66\u642C\u7816\u7EC4",
  color: "#ff4000"
}, {
  icon: "emojione-monotone:letter-a",
  title: "\u4E2D\u4E8C\u5C11\u5E74\u56E2",
  color: "#7c51b8"
}, {
  icon: "ri:alipay-fill",
  title: "\u9AD8\u903C\u683C\u8BBE\u8BA1",
  color: "#00adf7"
}, {
  icon: "jam:codepen-circle",
  title: "\u7A0B\u5E8F\u5458\u65E5\u5E38",
  color: "#00adf7"
}, {
  icon: "fa:behance-square",
  title: "\u79D1\u5B66\u642C\u7816\u7EC4",
  color: "#7c51b8"
}, {
  icon: "jam:codepen-circle",
  title: "\u7A0B\u5E8F\u5458\u65E5\u5E38",
  color: "#ff4000"
}];
const details = [{
  icon: "ic:outline-contacts",
  title: "\u4EA4\u4E92\u4E13\u5BB6"
}, {
  icon: "grommet-icons:cluster",
  title: "\u67D0\u67D0\u67D0\u4E8B\u4E1A\u7FA4"
}, {
  icon: "bx:bx-home-circle",
  title: "\u798F\u5EFA\u7701\u53A6\u95E8\u5E02"
}];
const achieveList = [{
  key: "1",
  name: "\u6587\u7AE0",
  component: "Article"
}, {
  key: "2",
  name: "\u5E94\u7528",
  component: "Application"
}, {
  key: "3",
  name: "\u9879\u76EE",
  component: "Project"
}];
const actions = [{
  icon: "clarity:star-line",
  text: "156",
  color: "#018ffb"
}, {
  icon: "bx:bxs-like",
  text: "156",
  color: "#459ae8"
}, {
  icon: "bx:bxs-message-dots",
  text: "2",
  color: "#42d27d"
}];
const articleList = (() => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      description: ["Vben", "\u8BBE\u8BA1\u8BED\u8A00", "Typescript"],
      content: "\u57FA\u4E8EVue Next, TypeScript, Ant Design\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u3002",
      time: "2020-11-14 11:20"
    });
  }
  return result;
})();
const applicationList = (() => {
  const result = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      icon: "emojione-monotone:letter-a",
      color: "#1890ff",
      active: "100",
      new: "1,799",
      download: "bx:bx-download"
    });
  }
  return result;
})();
const projectList = (() => {
  const result = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      content: "\u57FA\u4E8EVue Next, TypeScript, Ant Design\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u3002"
    });
  }
  return result;
})();
export { achieveList, actions, applicationList, articleList, details, projectList, tags, teams };
