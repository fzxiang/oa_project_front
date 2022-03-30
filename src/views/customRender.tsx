import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const settleStateRender = ({ text }) => {
  const map = {
    1: { text: '已结算', color: 'green' },
    2: { text: '未结算', color: 'red' },
    3: { text: '暂缓结算', color: 'gold' },
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, { color: obj.color }, () => obj.text);
  } else {
    return '-';
  }
};

export const compensateStateRender = ({ text }) => {
  const map = {
    0: { text: '暂无补偿', color: 'default' },
    1: { text: '稿费补偿', color: 'cyan' },
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, { color: obj.color }, () => obj.text);
  } else {
    return '-';
  }
};

export const writerQualityRender = ({ text }) => {
  const map = {
    1: { text: '好', color: 'green' },
    2: { text: '中', color: 'orange' },
    3: { text: '差', color: 'red' },
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, { color: obj.color }, () => obj.text);
  } else {
    return '-';
  }
};

export const writerSituationRender = ({ text }) => {
  const map = {
    1: { text: '拖稿', color: 'purple' },
    2: { text: '失联', color: 'volcano' },
    3: { text: '拒绝修改', color: 'red' },
    4: { text: '态度差', color: 'magenta' },
  };
  const obj = map[text] || {};
  if (obj.text) {
    return h(Tag, { color: obj.color }, () => obj.text);
  } else {
    return '-';
  }
};

export const moneyRender = ({ text }) => {
  if (text == null || text === undefined || text === '') {
    return '-';
  } else {
    const money = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'RMB' }).format(
      text,
    );
    return money.replace('RMB', '￥');
  }
};
