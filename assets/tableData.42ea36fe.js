import { g as getWriterApi } from "./writer.a8e579e9.js";
import "./index.26d4b9cf.js";
import "./vendor.faf2de98.js";
import "./download.e21de43f.js";
import "./base64Conver.08b9f4ec.js";
function getBasicColumns() {
  return [
    {
      title: "ID",
      dataIndex: "id",
      ifShow: false
    },
    {
      title: "\u5199\u624B\u540D",
      dataIndex: "name",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u5199\u624B\u624B\u673A\u53F7",
      dataIndex: "writerNum",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u5199\u624BQQ",
      dataIndex: "qqAccount",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u5199\u624B\u5FAE\u4FE1",
      dataIndex: "wechatAccount",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u5199\u624B\u652F\u4ED8\u5B9D",
      dataIndex: "alipayAccount",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u8BA2\u5355\u6570",
      dataIndex: "orderNum",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    },
    {
      title: "\u603B\u91D1\u989D",
      dataIndex: "totalWriterPrice",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false
    }
  ];
}
function getBasicColumnsChild() {
  return [
    {
      title: "ID",
      dataIndex: "id",
      ifShow: false,
      width: 200
    },
    {
      title: "\u53D1\u5355\u53F7",
      dataIndex: "invoice"
    },
    {
      title: "\u8BA2\u5355\u7F16\u53F7",
      dataIndex: "aliOrder",
      fixed: "left"
    },
    {
      title: "\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4",
      dataIndex: "paymentTime"
    },
    {
      title: "\u8BA2\u5355\u6536\u8D27\u65F6\u95F4",
      dataIndex: "receivingTime"
    },
    {
      title: "\u6DD8\u5B9D\u4EF7\u683C",
      dataIndex: "taobaoPrice"
    },
    {
      title: "\u5199\u624B\u6D3E\u5355\u4EF7",
      dataIndex: "writerPrice"
    },
    {
      title: "\u6D3E\u5355\u5BA2\u670D",
      dataIndex: "acceptUser"
    },
    {
      title: "\u7ED3\u7B97\u72B6\u6001",
      dataIndex: "wSettleState",
      format: /* @__PURE__ */ new Map([[0, "\u5168\u90E8"], [1, "\u5DF2\u7ED3\u7B97"], [2, "\u672A\u7ED3\u7B97"], [3, "\u6682\u7F13\u7ED3\u7B97"]])
    }
  ];
}
function getFormConfig() {
  return {
    autoAdvancedLine: 4,
    labelWidth: 100,
    fieldMapToTime: [["pTime", ["pStartTime", "pEndTime"], "YYYY-MM-DD"], ["rTime", ["rStartTime", "rEndTime"], "YYYY-MM-DD"]],
    schemas: [
      {
        field: "writerNum",
        label: "\u5199\u624B\u624B\u673A\u53F7",
        component: "Input",
        colProps: {
          span: 8
        }
      },
      {
        field: "qqAccount",
        label: "\u5199\u624BQQ",
        component: "Input",
        colProps: {
          span: 8
        }
      },
      {
        field: "wechatAccount",
        label: "\u5199\u624B\u5FAE\u4FE1",
        component: "Input",
        colProps: {
          span: 8
        }
      },
      {
        field: "writerId",
        label: "\u9009\u62E9\u5199\u624B",
        component: "ApiSelect",
        colProps: {
          span: 8
        },
        componentProps: {
          api: getWriterApi,
          labelField: "name",
          valueField: "id"
        }
      },
      {
        field: "settleState",
        label: "\u7ED3\u7B97\u72B6\u6001",
        component: "RadioButtonGroup",
        colProps: {
          span: 16
        },
        defaultValue: 0,
        componentProps: {
          options: [{
            label: "\u5168\u90E8",
            value: 0
          }, {
            label: "\u5DF2\u7ED3\u7B97",
            value: 1
          }, {
            label: "\u672A\u7ED3\u7B97",
            value: 2
          }, {
            label: "\u6682\u7F13\u7ED3\u7B97",
            value: 3
          }]
        }
      },
      {
        field: "rTime",
        label: "\u786E\u8BA4\u6536\u8D27\u65F6\u95F4",
        component: "RangePicker",
        colProps: {
          span: 8
        }
      },
      {
        field: "pTime",
        label: "\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4",
        component: "RangePicker",
        colProps: {
          span: 8
        }
      }
    ]
  };
}
const orderInfoForm = [{
  field: "aliOrder",
  label: "\u6DD8\u5B9D\u8BA2\u5355\u7F16\u53F7",
  component: "InputSearch",
  colProps: {
    span: 17
  },
  required: true
}, {
  field: "invoice",
  label: "\u53D1\u5355\u53F7",
  component: "Input",
  colProps: {
    span: 8
  },
  required: true,
  componentProps: {
    disabled: true
  }
}, {
  field: "memberName",
  label: "\u4F1A\u5458\u540D",
  component: "Input",
  colProps: {
    span: 8
  },
  required: true,
  componentProps: {
    disabled: true
  }
}, {
  field: "taobaoPrice",
  label: "\u6DD8\u5B9D\u4EF7\u683C",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: "customrContact",
  label: "\u5BA2\u6237\u5FAE\u4FE1\u6216QQ",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: "orderOutline",
  label: "\u8BA2\u5355\u6982\u8981",
  colProps: {
    span: 16
  },
  component: "InputTextArea",
  componentProps: {
    disabled: true
  }
}];
const writerInfoForm = (index) => [{
  field: `writerNum_${index}`,
  label: "\u624B\u673A\u53F7",
  component: "Input",
  colProps: {
    span: 8
  },
  required: true
}, {
  field: `${index}`,
  component: "Input",
  label: " ",
  colProps: {
    span: 16
  },
  slot: "add"
}, {
  field: `name_${index}`,
  label: "\u5199\u624B\u59D3\u540D",
  component: "Input",
  colProps: {
    span: 8
  },
  required: true,
  componentProps: {
    disabled: true
  }
}, {
  field: `writerPrice_${index}`,
  label: "\u5199\u624B\u6D3E\u5355\u4EF7",
  component: "Input",
  colProps: {
    span: 8
  },
  required: true,
  componentProps: {
    disabled: true
  }
}, {
  field: `alipayAccount_${index}`,
  label: "\u5199\u624B\u652F\u4ED8\u5B9D",
  colProps: {
    span: 8
  },
  component: "Input",
  required: true,
  componentProps: {
    disabled: true
  }
}, {
  field: `qqAccount_${index}`,
  label: "\u5199\u624BQQ",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: `wechatAccount_${index}`,
  label: "\u5199\u624B\u5FAE\u4FE1",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: `writerSituation_${index}`,
  label: "\u5199\u624B\u60C5\u51B5",
  colProps: {
    span: 8
  },
  component: "Select",
  componentProps: {
    disabled: true,
    options: [{
      label: "\u62D6\u7A3F",
      value: 1
    }, {
      label: "\u5931\u8054",
      value: 2
    }, {
      label: "\u62D2\u7EDD\u4FEE\u6539",
      value: 3
    }, {
      label: "\u6001\u5EA6\u5DEE",
      value: 4
    }]
  }
}, {
  field: `writerQuality_${index}`,
  label: "\u5199\u624B\u8D28\u91CF",
  colProps: {
    span: 8
  },
  component: "Select",
  componentProps: {
    disabled: true,
    options: [{
      label: "\u597D",
      value: 1
    }, {
      label: "\u4E2D",
      value: 2
    }, {
      label: "\u5DEE",
      value: 3
    }]
  }
}, {
  field: `divider_${index}`,
  label: "",
  colProps: {
    span: 24
  },
  component: "Divider"
}];
export { getBasicColumns, getBasicColumnsChild, getFormConfig, orderInfoForm, writerInfoForm };
