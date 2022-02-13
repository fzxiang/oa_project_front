function getBasicColumns() {
  return [{
    title: "ID",
    dataIndex: "id",
    fixed: "left",
    width: 200
  }, {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 150,
    filters: [{
      text: "Male",
      value: "male"
    }, {
      text: "Female",
      value: "female"
    }]
  }, {
    title: "\u5730\u5740",
    dataIndex: "address"
  }, {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 150,
    sorter: true,
    defaultHidden: true
  }, {
    title: "\u5F00\u59CB\u65F6\u95F4",
    width: 150,
    sorter: true,
    dataIndex: "beginTime"
  }, {
    title: "\u7ED3\u675F\u65F6\u95F4",
    width: 150,
    sorter: true,
    dataIndex: "endTime"
  }];
}
function getBasicShortColumns() {
  return [{
    title: "ID",
    width: 150,
    dataIndex: "id",
    sorter: true,
    sortOrder: "ascend"
  }, {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 120
  }, {
    title: "\u5730\u5740",
    dataIndex: "address"
  }, {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 80
  }];
}
function getMultipleHeaderColumns() {
  return [{
    title: "ID",
    dataIndex: "id",
    width: 200
  }, {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 120
  }, {
    title: "\u5730\u5740",
    dataIndex: "address",
    sorter: true,
    children: [{
      title: "\u7F16\u53F7",
      dataIndex: "no",
      width: 120,
      filters: [{
        text: "Male",
        value: "male",
        children: []
      }, {
        text: "Female",
        value: "female",
        children: []
      }]
    }, {
      title: "\u5F00\u59CB\u65F6\u95F4",
      dataIndex: "beginTime",
      width: 120
    }, {
      title: "\u7ED3\u675F\u65F6\u95F4",
      dataIndex: "endTime",
      width: 120
    }]
  }];
}
function getCustomHeaderColumns() {
  return [{
    title: "ID",
    dataIndex: "id",
    width: 200
  }, {
    dataIndex: "name",
    width: 120,
    slots: {
      title: "customTitle"
    }
  }, {
    dataIndex: "address",
    width: 120,
    slots: {
      title: "customAddress"
    },
    sorter: true
  }, {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 120,
    filters: [{
      text: "Male",
      value: "male",
      children: []
    }, {
      text: "Female",
      value: "female",
      children: []
    }]
  }, {
    title: "\u5F00\u59CB\u65F6\u95F4",
    dataIndex: "beginTime",
    width: 120
  }, {
    title: "\u7ED3\u675F\u65F6\u95F4",
    dataIndex: "endTime",
    width: 120
  }];
}
const renderContent = ({
  text,
  index
}) => {
  const obj = {
    children: text,
    attrs: {}
  };
  if (index === 9) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};
function getMergeHeaderColumns() {
  return [{
    title: "ID",
    dataIndex: "id",
    width: 300,
    customRender: renderContent
  }, {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 300,
    customRender: renderContent
  }, {
    title: "\u5730\u5740",
    dataIndex: "address",
    colSpan: 2,
    width: 120,
    sorter: true,
    customRender: ({
      text,
      index
    }) => {
      const obj = {
        children: text,
        attrs: {}
      };
      if (index === 2) {
        obj.attrs.rowSpan = 2;
      }
      if (index === 3) {
        obj.attrs.colSpan = 0;
      }
      return obj;
    }
  }, {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    colSpan: 0,
    filters: [{
      text: "Male",
      value: "male",
      children: []
    }, {
      text: "Female",
      value: "female",
      children: []
    }],
    customRender: renderContent
  }, {
    title: "\u5F00\u59CB\u65F6\u95F4",
    dataIndex: "beginTime",
    width: 200,
    customRender: renderContent
  }, {
    title: "\u7ED3\u675F\u65F6\u95F4",
    dataIndex: "endTime",
    width: 200,
    customRender: renderContent
  }];
}
const getAdvanceSchema = (itemNumber = 6) => {
  const arr = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `\u5B57\u6BB5${index}`,
      component: "Input",
      colProps: {
        xl: 12,
        xxl: 8
      }
    });
  }
  return arr;
};
function getFormConfig() {
  return {
    labelWidth: 100,
    schemas: [...getAdvanceSchema(5), {
      field: `field11`,
      label: `Slot\u793A\u4F8B`,
      component: "Select",
      slot: "custom",
      colProps: {
        xl: 12,
        xxl: 8
      }
    }]
  };
}
function getBasicData() {
  const data = (() => {
    const arr = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: "John Brown",
        age: `1${index}`,
        no: `${index + 10}`,
        address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString()
      });
    }
    return arr;
  })();
  return data;
}
function getTreeTableData() {
  const data = (() => {
    const arr = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: "John Brown",
        age: `1${index}`,
        no: `${index + 10}`,
        address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        children: [{
          id: `l2-${index}`,
          name: "John Brown",
          age: `1${index}`,
          no: `${index + 10}`,
          address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
          beginTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString()
        }]
      });
    }
    return arr;
  })();
  return data;
}
export { getAdvanceSchema, getBasicColumns, getBasicData, getBasicShortColumns, getCustomHeaderColumns, getFormConfig, getMergeHeaderColumns, getMultipleHeaderColumns, getTreeTableData };
