import { B as BasicTable } from "./TableImg.94a4abda.js";
import "./BasicForm.cfcd0624.js";
import { u as useTable } from "./useTable.3a70673a.js";
import { o as optionsListApi, t as treeOptionsListApi } from "./tree.84a1a4d4.js";
import { d as demoListApi } from "./table.fca2a86e.js";
import { _ as _export_sfc, F as useMessage } from "./index.f575d9f0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.78f1f7c3.js";
import "./index.2c91c99a.js";
import "./index.77d0dee2.js";
import "./useRootSetting.f760cdbc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e38fbece.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.06ecde8e.js";
import "./useTabs.f8c7b545.js";
import "./uuid.2b29000c.js";
import "./index.c96e9887.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.dbd6a110.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.49d9ff5a.js";
import "./download.03b43118.js";
import "./base64Conver.08b9f4ec.js";
import "./index.38b736ac.js";
const columns = [
  {
    title: "\u8F93\u5165\u6846",
    dataIndex: "name",
    edit: true,
    editComponentProps: {
      prefix: "$"
    },
    width: 200
  },
  {
    title: "\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",
    dataIndex: "name7",
    edit: true,
    editable: true,
    width: 200
  },
  {
    title: "\u8F93\u5165\u6846\u6821\u9A8C",
    dataIndex: "name1",
    edit: true,
    editRule: true,
    width: 200
  },
  {
    title: "\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",
    dataIndex: "name2",
    edit: true,
    editRule: async (text) => {
      if (text === "2") {
        return "\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C";
      }
      return "";
    },
    width: 200
  },
  {
    title: "\u6570\u5B57\u8F93\u5165\u6846",
    dataIndex: "id",
    edit: true,
    editRule: true,
    editComponent: "InputNumber",
    width: 200
  },
  {
    title: "\u4E0B\u62C9\u6846",
    dataIndex: "name3",
    edit: true,
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
        }
      ]
    },
    width: 200
  },
  {
    title: "\u8FDC\u7A0B\u4E0B\u62C9",
    dataIndex: "name4",
    edit: true,
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
    dataIndex: "name71",
    edit: true,
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
    edit: true,
    editComponent: "DatePicker",
    editComponentProps: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD"
    },
    width: 200
  },
  {
    title: "\u65F6\u95F4\u9009\u62E9",
    dataIndex: "time",
    edit: true,
    editComponent: "TimePicker",
    editComponentProps: {
      valueFormat: "HH:mm",
      format: "HH:mm"
    },
    width: 200
  },
  {
    title: "\u52FE\u9009\u6846",
    dataIndex: "name5",
    edit: true,
    editComponent: "Checkbox",
    editValueMap: (value) => {
      return value ? "\u662F" : "\u5426";
    },
    width: 200
  },
  {
    title: "\u5F00\u5173",
    dataIndex: "name6",
    edit: true,
    editComponent: "Switch",
    editValueMap: (value) => {
      return value ? "\u5F00" : "\u5173";
    },
    width: 200
  }
];
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const [registerTable] = useTable({
      title: "\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",
      api: demoListApi,
      columns,
      showIndexColumn: false,
      bordered: true
    });
    const { createMessage } = useMessage();
    function handleEditEnd({ record, index, key, value }) {
      console.log(record, index, key, value);
      return false;
    }
    function feakSave({ value, key, id }) {
      createMessage.loading({
        content: `\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${key}`,
        key: "_save_fake_data",
        duration: 0
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          if (value === "") {
            createMessage.error({
              content: "\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",
              key: "_save_fake_data",
              duration: 2
            });
            resolve(false);
          } else {
            createMessage.success({
              content: `\u8BB0\u5F55${id}\u7684${key}\u5DF2\u4FDD\u5B58`,
              key: "_save_fake_data",
              duration: 2
            });
            resolve(true);
          }
        }, 2e3);
      });
    }
    async function beforeEditSubmit({ record, index, key, value }) {
      console.log("\u5355\u5143\u683C\u6570\u636E\u6B63\u5728\u51C6\u5907\u63D0\u4EA4", { record, index, key, value });
      return await feakSave({ id: record.id, key, value });
    }
    function handleEditCancel() {
      console.log("cancel");
    }
    return {
      registerTable,
      handleEditEnd,
      handleEditCancel,
      beforeEditSubmit
    };
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, {
      onRegister: _ctx.registerTable,
      onEditEnd: _ctx.handleEditEnd,
      onEditCancel: _ctx.handleEditCancel,
      beforeEditSubmit: _ctx.beforeEditSubmit
    }, null, 8, ["onRegister", "onEditEnd", "onEditCancel", "beforeEditSubmit"])
  ]);
}
var EditCellTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { EditCellTable as default };
