const searchList = (() => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      description: ["Vben", "\u8BBE\u8BA1\u8BED\u8A00", "Typescript"],
      content: "\u57FA\u4E8EVue Next, TypeScript, Ant Design\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u3002",
      time: "2020-11-14 11:20"
    });
  }
  return result;
})();
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
const schemas = [{
  field: "field1",
  component: "InputSearch",
  label: "\u9879\u76EE\u540D",
  colProps: {
    span: 8
  },
  componentProps: {
    onChange: (e) => {
      console.log(e);
    }
  }
}];
export { actions, schemas, searchList };