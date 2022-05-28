import { N as h, bo as Tag } from "./vendor.faf2de98.js";
/* empty css                 */const settleStateRender = ({
  text
}) => {
  const map = {
    1: {
      text: "\u5DF2\u7ED3\u7B97",
      color: "green"
    },
    2: {
      text: "\u672A\u7ED3\u7B97",
      color: "red"
    },
    3: {
      text: "\u6682\u7F13\u7ED3\u7B97",
      color: "gold"
    }
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, {
      color: obj.color
    }, () => obj.text);
  } else {
    return "-";
  }
};
const saleStateRender = ({
  text
}) => {
  const map = {
    1: {
      text: "\u5DF2\u5904\u7406",
      color: "green"
    },
    2: {
      text: "\u672A\u5904\u7406",
      color: "red"
    }
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, {
      color: obj.color
    }, () => obj.text);
  } else {
    return "-";
  }
};
const compensateStateRender = ({
  text
}) => {
  const map = {
    0: {
      text: "\u6682\u65E0\u8865\u507F",
      color: "default"
    },
    1: {
      text: "\u7A3F\u8D39\u8865\u507F",
      color: "cyan"
    }
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, {
      color: obj.color
    }, () => obj.text);
  } else {
    return "-";
  }
};
const writerQualityRender = ({
  text
}) => {
  const map = {
    1: {
      text: "\u597D",
      color: "green"
    },
    2: {
      text: "\u4E2D",
      color: "orange"
    },
    3: {
      text: "\u5DEE",
      color: "red"
    }
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, {
      color: obj.color
    }, () => obj.text);
  } else {
    return "-";
  }
};
const writerSituationRender = ({
  text
}) => {
  const map = {
    1: {
      text: "\u62D6\u7A3F",
      color: "purple"
    },
    2: {
      text: "\u5931\u8054",
      color: "volcano"
    },
    3: {
      text: "\u62D2\u7EDD\u4FEE\u6539",
      color: "red"
    },
    4: {
      text: "\u6001\u5EA6\u5DEE",
      color: "magenta"
    }
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, {
      color: obj.color
    }, () => obj.text);
  } else {
    return "-";
  }
};
const moneyRender = ({
  text
}) => {
  if (text == null || text === void 0 || text === "") {
    return "-";
  } else {
    const money = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "RMB"
    }).format(text);
    return money.replace("RMB", "\uFFE5");
  }
};
export { compensateStateRender, moneyRender, saleStateRender, settleStateRender, writerQualityRender, writerSituationRender };
