const settingList = [
  {
    key: "1",
    name: "\u57FA\u672C\u8BBE\u7F6E",
    component: "BaseSetting"
  },
  {
    key: "2",
    name: "\u5B89\u5168\u8BBE\u7F6E",
    component: "SecureSetting"
  },
  {
    key: "3",
    name: "\u8D26\u53F7\u7ED1\u5B9A",
    component: "AccountBind"
  },
  {
    key: "4",
    name: "\u65B0\u6D88\u606F\u901A\u77E5",
    component: "MsgNotify"
  }
];
const baseSetschemas = [
  {
    field: "email",
    component: "Input",
    label: "\u90AE\u7BB1",
    colProps: { span: 18 }
  },
  {
    field: "name",
    component: "Input",
    label: "\u6635\u79F0",
    colProps: { span: 18 }
  },
  {
    field: "introduction",
    component: "InputTextArea",
    label: "\u4E2A\u4EBA\u7B80\u4ECB",
    colProps: { span: 18 }
  },
  {
    field: "phone",
    component: "Input",
    label: "\u8054\u7CFB\u7535\u8BDD",
    colProps: { span: 18 }
  },
  {
    field: "address",
    component: "Input",
    label: "\u6240\u5728\u5730\u533A",
    colProps: { span: 18 }
  }
];
const secureSettingList = [
  {
    key: "1",
    title: "\u8D26\u6237\u5BC6\u7801",
    description: "\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A\uFF1A\u5F3A",
    extra: "\u4FEE\u6539"
  },
  {
    key: "2",
    title: "\u5BC6\u4FDD\u624B\u673A",
    description: "\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A\uFF1A138****8293",
    extra: "\u4FEE\u6539"
  },
  {
    key: "3",
    title: "\u5BC6\u4FDD\u95EE\u9898",
    description: "\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",
    extra: "\u4FEE\u6539"
  },
  {
    key: "4",
    title: "\u5907\u7528\u90AE\u7BB1",
    description: "\u5DF2\u7ED1\u5B9A\u90AE\u7BB1\uFF1A\uFF1Aant***sign.com",
    extra: "\u4FEE\u6539"
  },
  {
    key: "5",
    title: "MFA \u8BBE\u5907",
    description: "\u672A\u7ED1\u5B9A MFA \u8BBE\u5907\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4",
    extra: "\u4FEE\u6539"
  }
];
const accountBindList = [
  {
    key: "1",
    title: "\u7ED1\u5B9A\u6DD8\u5B9D",
    description: "\u5F53\u524D\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u53F7",
    extra: "\u7ED1\u5B9A",
    avatar: "ri:taobao-fill",
    color: "#ff4000"
  },
  {
    key: "2",
    title: "\u7ED1\u5B9A\u652F\u4ED8\u5B9D",
    description: "\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u8D26\u53F7",
    extra: "\u7ED1\u5B9A",
    avatar: "fa-brands:alipay",
    color: "#2eabff"
  },
  {
    key: "3",
    title: "\u7ED1\u5B9A\u9489\u9489",
    description: "\u5F53\u524D\u672A\u7ED1\u5B9A\u9489\u9489\u8D26\u53F7",
    extra: "\u7ED1\u5B9A",
    avatar: "ri:dingding-fill",
    color: "#2eabff"
  }
];
const msgNotifyList = [
  {
    key: "1",
    title: "\u8D26\u6237\u5BC6\u7801",
    description: "\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5"
  },
  {
    key: "2",
    title: "\u7CFB\u7EDF\u6D88\u606F",
    description: "\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5"
  },
  {
    key: "3",
    title: "\u5F85\u529E\u4EFB\u52A1",
    description: "\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5"
  }
];
export { accountBindList as a, baseSetschemas as b, settingList as c, msgNotifyList as m, secureSettingList as s };