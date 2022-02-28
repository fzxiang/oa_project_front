import { av as defHttp, q as useUserStore } from "./index.327c7452.js";
import { d as downloadByUrl } from "./download.3c201218.js";
import { Q as ref } from "./vendor.faf2de98.js";
const getCustomerApi = async () => {
  const result = await defHttp.get({ url: "/getUsersOfPower" });
  result.unshift({
    nickname: "\u5168\u90E8",
    user_id: ""
  });
  return result;
};
const searchApi = (params) => defHttp.get({ url: "/searchCustomer", params });
const oneKeyApi = (params) => defHttp.post({ url: "/updateAllOrderState", params }, { successMessageMode: "notification" });
const updateApi = (params) => defHttp.post({ url: "/updateOneOrderState", params }, { successMessageMode: "notification" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportCustomer?obj=" + encodeURIComponent(JSON.stringify(params));
  downloadByUrl({ url });
};
const searchChildApi = (params) => defHttp.post({ url: "/getWritersOfOrder", params });
function getBasicColumns() {
  return ref([{
    title: "ID",
    dataIndex: "id",
    ifShow: false
  }, {
    title: "\u53D1\u5355\u53F7",
    dataIndex: "invoice",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u63A5\u5355\u5BA2\u670D",
    dataIndex: "acceptUser",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u8BA2\u5355\u7F16\u53F7",
    dataIndex: "aliOrder",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u7ED3\u7B97\u72B6\u6001",
    dataIndex: "settleState",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false,
    format: /* @__PURE__ */ new Map([[0, "\u5168\u90E8"], [1, "\u5DF2\u7ED3\u7B97"], [2, "\u672A\u7ED3\u7B97"], [3, "\u6682\u7F13\u7ED3\u7B97"]])
  }, {
    title: "\u4F1A\u5458\u540D",
    dataIndex: "memberName",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u6DD8\u5B9D\u4EF7\u683C",
    dataIndex: "taobaoPrice",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5BA2\u6237\u5FAE\u4FE1\u6216QQ",
    dataIndex: "customerContact",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624B\u6D3E\u5355\u603B\u4EF7",
    dataIndex: "writerTotalPrice",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u4ED8\u6B3E\u65F6\u95F4",
    dataIndex: "paymentTime",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u6536\u8D27\u65F6\u95F4",
    dataIndex: "receivingTime",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5907\u6CE8",
    dataIndex: "remarks",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
    resizable: true
  }]);
}
function getFormConfig() {
  return {
    labelWidth: 100,
    fieldMapToTime: [["pTime", ["pStartTime", "pEndTime"], "YYYY-MM-DD"], ["rTime", ["rStartTime", "rEndTime"], "YYYY-MM-DD"]],
    schemas: [{
      field: "customerId",
      label: "\u9009\u62E9\u5BA2\u670D",
      component: "ApiSelect",
      colProps: {
        span: 8
      },
      componentProps: {
        api: getCustomerApi,
        labelField: "nickname",
        valueField: "user_id"
      }
    }, {
      field: "pTime",
      label: "\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4",
      component: "RangePicker",
      colProps: {
        span: 8
      }
    }, {
      field: "rTime",
      label: "\u786E\u8BA4\u6536\u8D27\u65F6\u95F4",
      component: "RangePicker",
      colProps: {
        span: 8
      }
    }, {
      field: "settleState",
      label: "\u7ED3\u7B97\u72B6\u6001",
      component: "RadioButtonGroup",
      colProps: {
        span: 8
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
    }]
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
const writerInfoForm = [{
  field: "writerNum",
  label: "\u624B\u673A\u53F7",
  component: "InputSearch",
  colProps: {
    span: 8
  },
  required: true
}, {
  field: "name",
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
  field: "writerPrice",
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
  field: "alipayAccount",
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
  field: "qqAccount",
  label: "\u5199\u624BQQ",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: "wechatAccount",
  label: "\u5199\u624B\u5FAE\u4FE1",
  colProps: {
    span: 8
  },
  component: "Input",
  componentProps: {
    disabled: true
  }
}, {
  field: "writerSituation",
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
  field: "writerQuality",
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
  field: "",
  label: "",
  colProps: {
    span: 24
  },
  component: "Divider"
}];
function getBasicColumnsChild() {
  return [{
    title: "ID",
    dataIndex: "id",
    ifShow: false
  }, {
    title: "\u5199\u624B\u540D",
    dataIndex: "name",
    fixed: "left",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624B\u624B\u673A",
    dataIndex: "writerNum",
    fixed: "left",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624BQQ",
    dataIndex: "qqAccount",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624B\u5FAE\u4FE1",
    dataIndex: "wechatAccount",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624B\u652F\u4ED8\u5B9D",
    dataIndex: "alipayAccount",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false
  }, {
    title: "\u5199\u624B\u60C5\u51B5",
    dataIndex: "writerSituation",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false,
    format: /* @__PURE__ */ new Map([[1, "\u62D6\u7A3F"], [2, "\u5931\u8054"], [3, "\u62D2\u7EDD\u4FEE\u6539"], [4, "\u6001\u5EA6\u5DEE"]])
  }, {
    title: "\u5199\u624B\u8D28\u91CF",
    dataIndex: "writerQuality",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false,
    format: /* @__PURE__ */ new Map([[1, "\u597D"], [2, "\u4E2D"], [3, "\u5DEE"]])
  }, {
    title: "\u8865\u507F\u72B6\u6001",
    dataIndex: "compensateState",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false,
    format: /* @__PURE__ */ new Map([[0, "\u6682\u65E0\u8865\u507F"], [1, "\u7A3F\u8D39\u8865\u507F"]])
  }, {
    title: "\u7ED3\u7B97\u72B6\u6001",
    dataIndex: "wSettleState",
    width: 150,
    minWidth: 150,
    maxWidth: 250,
    resizable: true,
    ellipsis: false,
    format: /* @__PURE__ */ new Map([[0, "\u5168\u90E8"], [1, "\u5DF2\u7ED3\u7B97"], [2, "\u672A\u7ED3\u7B97"], [3, "\u6682\u7F13\u7ED3\u7B97"]])
  }];
}
var tableData = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getBasicColumns,
  getFormConfig,
  orderInfoForm,
  writerInfoForm,
  getBasicColumnsChild
});
export { getFormConfig as a, searchChildApi as b, getBasicColumnsChild as c, exportApi as e, getBasicColumns as g, oneKeyApi as o, searchApi as s, tableData as t, updateApi as u };
