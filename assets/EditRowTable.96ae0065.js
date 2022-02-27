import { B as BasicTable } from "./TableImg.24c448cb.js";
import { T as TableAction } from "./BasicForm.9a4a9312.js";
import { u as useTable } from "./useTable.acbbbf48.js";
import { o as optionsListApi, t as treeOptionsListApi } from "./tree.33c774b0.js";
import { d as demoListApi } from "./table.162e4117.js";
import { _ as _export_sfc, F as useMessage } from "./index.deb64523.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, A as cloneDeep } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.70b03046.js";
import "./index.28f5128b.js";
import "./index.96780b6a.js";
import "./useRootSetting.2926bd9b.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.968fd34e.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.4e45ee86.js";
import "./useTabs.da79212b.js";
import "./uuid.2b29000c.js";
import "./index.b2b953b0.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.3fbd530e.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.69296395.js";
import "./download.6fde1c28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fc4b8bf2.js";
const columns = [
  {
    title: "\u8F93\u5165\u6846",
    dataIndex: "name",
    editRow: true,
    editComponentProps: {
      prefix: "$"
    },
    width: 150
  },
  {
    title: "\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",
    dataIndex: "name7",
    editRow: true,
    width: 150
  },
  {
    title: "\u8F93\u5165\u6846\u6821\u9A8C",
    dataIndex: "name1",
    editRow: true,
    align: "left",
    editRule: true,
    width: 150
  },
  {
    title: "\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",
    dataIndex: "name2",
    editRow: true,
    align: "right",
    editRule: async (text) => {
      if (text === "2") {
        return "\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C";
      }
      return "";
    }
  },
  {
    title: "\u6570\u5B57\u8F93\u5165\u6846",
    dataIndex: "id",
    editRow: true,
    editRule: true,
    editComponent: "InputNumber",
    width: 150
  },
  {
    title: "\u4E0B\u62C9\u6846",
    dataIndex: "name3",
    editRow: true,
    editComponent: "Select",
    editComponentProps: {
      options: [
        {
          label: "Option1",
          value: "1"
        },
        {
          label: "Option2",
          value: "2"
        },
        {
          label: "Option3",
          value: "3"
        }
      ]
    },
    width: 200
  },
  {
    title: "\u8FDC\u7A0B\u4E0B\u62C9",
    dataIndex: "name4",
    editRow: true,
    editComponent: "ApiSelect",
    editComponentProps: {
      api: optionsListApi,
      resultField: "list",
      labelField: "name",
      valueField: "id"
    },
    width: 200
  },
  {
    title: "\u8FDC\u7A0B\u4E0B\u62C9\u6811",
    dataIndex: "name8",
    editRow: true,
    editComponent: "ApiTreeSelect",
    editRule: false,
    editComponentProps: {
      api: treeOptionsListApi,
      resultField: "list"
    },
    width: 200
  },
  {
    title: "\u65E5\u671F\u9009\u62E9",
    dataIndex: "date",
    editRow: true,
    editComponent: "DatePicker",
    editComponentProps: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD"
    },
    width: 150
  },
  {
    title: "\u65F6\u95F4\u9009\u62E9",
    dataIndex: "time",
    editRow: true,
    editComponent: "TimePicker",
    editComponentProps: {
      valueFormat: "HH:mm",
      format: "HH:mm"
    },
    width: 100
  },
  {
    title: "\u52FE\u9009\u6846",
    dataIndex: "name5",
    editRow: true,
    editComponent: "Checkbox",
    editValueMap: (value) => {
      return value ? "\u662F" : "\u5426";
    },
    width: 100
  },
  {
    title: "\u5F00\u5173",
    dataIndex: "name6",
    editRow: true,
    editComponent: "Switch",
    editValueMap: (value) => {
      return value ? "\u5F00" : "\u5173";
    },
    width: 100
  }
];
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const { createMessage: msg } = useMessage();
    const currentEditKeyRef = ref("");
    const [registerTable] = useTable({
      title: "\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",
      titleHelpMessage: [
        "\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"
      ],
      api: demoListApi,
      columns,
      showIndexColumn: false,
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      actionColumn: {
        width: 160,
        title: "Action",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    function handleEdit(record) {
      var _a;
      currentEditKeyRef.value = record.key;
      (_a = record.onEdit) == null ? void 0 : _a.call(record, true);
    }
    function handleCancel(record) {
      var _a;
      currentEditKeyRef.value = "";
      (_a = record.onEdit) == null ? void 0 : _a.call(record, false, false);
    }
    async function handleSave(record) {
      var _a, _b;
      msg.loading({ content: "\u6B63\u5728\u4FDD\u5B58...", duration: 0, key: "saving" });
      const valid = await ((_a = record.onValid) == null ? void 0 : _a.call(record));
      if (valid) {
        try {
          const data = cloneDeep(record.editValueRefs);
          console.log(data);
          const pass = await ((_b = record.onEdit) == null ? void 0 : _b.call(record, false, true));
          if (pass) {
            currentEditKeyRef.value = "";
          }
          msg.success({ content: "\u6570\u636E\u5DF2\u4FDD\u5B58", key: "saving" });
        } catch (error) {
          msg.error({ content: "\u4FDD\u5B58\u5931\u8D25", key: "saving" });
        }
      } else {
        msg.error({ content: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E", key: "saving" });
      }
    }
    function createActions(record, column) {
      if (!record.editable) {
        return [
          {
            label: "\u7F16\u8F91",
            disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
            onClick: handleEdit.bind(null, record)
          }
        ];
      }
      return [
        {
          label: "\u4FDD\u5B58",
          onClick: handleSave.bind(null, record, column)
        },
        {
          label: "\u53D6\u6D88",
          popConfirm: {
            title: "\u662F\u5426\u53D6\u6D88\u7F16\u8F91",
            confirm: handleCancel.bind(null, record, column)
          }
        }
      ];
    }
    function onEditChange({ column, value, record }) {
      if (column.dataIndex === "id") {
        record.editValueRefs.name4.value = `${value}`;
      }
      console.log(column, value, record);
    }
    return {
      registerTable,
      handleEdit,
      createActions,
      onEditChange
    };
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, {
      onRegister: _ctx.registerTable,
      onEditChange: _ctx.onEditChange
    }, {
      action: withCtx(({ record, column }) => [
        createVNode(_component_TableAction, {
          actions: _ctx.createActions(record, column)
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister", "onEditChange"])
  ]);
}
var EditRowTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { EditRowTable as default };
