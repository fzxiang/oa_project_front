import { moneyRender, settleStateRender } from "./customRender.c3aecc29.js";
import "./vendor.faf2de98.js";
/* empty css                 */function getBasicColumns() {
  return [{
    title: "ID",
    dataIndex: "id",
    ifShow: false,
    width: 200
  }, {
    title: "\u5199\u624B\u540D",
    dataIndex: "name",
    fixed: "left",
    width: 150
  }, {
    title: "\u5199\u624B\u624B\u673A",
    dataIndex: "writerNum",
    fixed: "left",
    width: 150
  }, {
    title: "\u5199\u624BQQ",
    dataIndex: "qqAccount",
    width: 150
  }, {
    title: "\u5199\u624B\u5FAE\u4FE1",
    dataIndex: "wechatAccount",
    width: 120
  }, {
    title: "\u5199\u624B\u652F\u4ED8\u5B9D",
    dataIndex: "alipayAccount",
    width: 150
  }];
}
function getFormConfig() {
  return {
    labelWidth: 100,
    schemas: [{
      field: "writerNum",
      label: "\u5199\u624B\u624B\u673A\u53F7",
      component: "Input",
      colProps: {
        span: 8
      }
    }, {
      field: "qqAccount",
      label: "\u5199\u624BQQ",
      component: "Input",
      colProps: {
        span: 8
      }
    }, {
      field: "wechatAccount",
      label: "\u5199\u624B\u5FAE\u4FE1",
      component: "Input",
      colProps: {
        span: 8
      }
    }]
  };
}
const writerInfoForm = [{
  field: "id",
  label: "id",
  ifShow: false,
  component: "Input"
}, {
  field: "writerNum",
  label: "\u624B\u673A\u53F7",
  component: "Input",
  required: true
}, {
  field: "name",
  label: "\u5199\u624B\u540D",
  component: "Input",
  required: true
}, {
  field: "alipayAccount",
  label: "\u5199\u624B\u652F\u4ED8\u5B9D",
  component: "Input",
  required: true
}, {
  field: "qqAccount",
  label: "\u5199\u624BQQ",
  component: "Input"
}, {
  field: "wechatAccount",
  label: "\u5199\u624B\u5FAE\u4FE1",
  component: "Input"
}];
function getBasicColumnsChild() {
  return [{
    title: "ID",
    dataIndex: "id",
    ifShow: false,
    width: 200
  }, {
    title: "\u53D1\u5355\u53F7",
    dataIndex: "invoice"
  }, {
    title: "\u8BA2\u5355\u7F16\u53F7",
    dataIndex: "aliOrder"
  }, {
    title: "\u4ED8\u6B3E\u65F6\u95F4",
    dataIndex: "paymentTime"
  }, {
    title: "\u6DD8\u5B9D\u4EF7\u683C",
    dataIndex: "taobaoPrice",
    customRender: moneyRender,
    width: 120
  }, {
    title: "\u5199\u624B\u6D3E\u5355\u4EF7",
    dataIndex: "writerPrice",
    customRender: moneyRender
  }, {
    title: "\u6D3E\u5355\u5BA2\u670D",
    dataIndex: "acceptUser"
  }, {
    title: "\u7ED3\u7B97\u72B6\u6001",
    dataIndex: "settleState",
    customRender: settleStateRender
  }];
}
export { getBasicColumns, getBasicColumnsChild, getFormConfig, writerInfoForm };
