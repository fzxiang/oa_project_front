const step1Schemas = [{
  field: "account",
  component: "Select",
  label: "\u4ED8\u6B3E\u8D26\u6237",
  required: true,
  defaultValue: "1",
  componentProps: {
    options: [{
      label: "anncwb@126.com",
      value: "1"
    }]
  }
}, {
  field: "fac",
  component: "InputGroup",
  label: "\u6536\u6B3E\u8D26\u6237",
  required: true,
  defaultValue: "test@example.com",
  slot: "fac"
}, {
  field: "pay",
  component: "Input",
  label: "",
  defaultValue: "zfb",
  show: false
}, {
  field: "payeeName",
  component: "Input",
  label: "\u6536\u6B3E\u4EBA\u59D3\u540D",
  defaultValue: "Vben",
  required: true
}, {
  field: "money",
  component: "Input",
  label: "\u8F6C\u8D26\u91D1\u989D",
  defaultValue: "500",
  required: true,
  renderComponentContent: () => {
    return {
      prefix: () => "\uFFE5"
    };
  }
}];
const step2Schemas = [{
  field: "pwd",
  component: "InputPassword",
  label: "\u652F\u4ED8\u5BC6\u7801",
  required: true,
  defaultValue: "123456"
}];
export { step1Schemas, step2Schemas };
