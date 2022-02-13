const cardList = (() => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: "OA\u529E\u516C\u7CFB\u7EDF",
      description: "\u57FA\u4E8EVue Next, TypeScript, Ant Design Vue\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",
      datetime: "2020-11-26 17:39",
      extra: "\u7F16\u8F91",
      icon: "logos:vue",
      color: "#1890ff",
      author: "Vben",
      percent: 20 * (i + 1)
    });
  }
  return result;
})();
export { cardList };
