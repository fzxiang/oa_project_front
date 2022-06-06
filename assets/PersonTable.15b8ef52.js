import { B as BasicTable } from "./TableImg.e3723d94.js";
import { T as TableAction } from "./BasicForm.3082faf1.js";
import { u as useTable } from "./useTable.3c19a45e.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.8431ddf4.js";
import "./index.a0022527.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
import "./uuid.2b29000c.js";
import "./index.ddb6a176.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.33861ed4.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.acc04ae7.js";
const columns = [
  {
    title: "\u6210\u5458\u59D3\u540D",
    dataIndex: "name",
    editRow: true
  },
  {
    title: "\u5DE5\u53F7",
    dataIndex: "no",
    editRow: true
  },
  {
    title: "\u6240\u5C5E\u90E8\u95E8",
    dataIndex: "dept",
    editRow: true
  }
];
const data = [
  {
    name: "John Brown",
    no: "00001",
    dept: "New York No. 1 Lake Park"
  },
  {
    name: "John Brown2",
    no: "00002",
    dept: "New York No. 2 Lake Park"
  },
  {
    name: "John Brown3",
    no: "00003",
    dept: "New York No. 3Lake Park"
  }
];
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const [registerTable, { getDataSource }] = useTable({
      columns,
      showIndexColumn: false,
      dataSource: data,
      actionColumn: {
        width: 160,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      },
      pagination: false
    });
    function handleEdit(record) {
      var _a;
      (_a = record.onEdit) == null ? void 0 : _a.call(record, true);
    }
    function handleCancel(record) {
      var _a;
      (_a = record.onEdit) == null ? void 0 : _a.call(record, false);
      if (record.isNew) {
        const data2 = getDataSource();
        const index = data2.findIndex((item) => item.key === record.key);
        data2.splice(index, 1);
      }
    }
    function handleSave(record) {
      var _a;
      (_a = record.onEdit) == null ? void 0 : _a.call(record, false, true);
    }
    function handleEditChange(data2) {
      console.log(data2);
    }
    function handleAdd() {
      const data2 = getDataSource();
      const addRow = {
        name: "",
        no: "",
        dept: "",
        editable: true,
        isNew: true,
        key: `${Date.now()}`
      };
      data2.push(addRow);
    }
    function createActions(record, column) {
      if (!record.editable) {
        return [
          {
            label: "\u7F16\u8F91",
            onClick: handleEdit.bind(null, record)
          },
          {
            label: "\u5220\u9664"
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
    return {
      registerTable,
      handleEdit,
      createActions,
      handleAdd,
      getDataSource,
      handleEditChange
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u6210\u5458 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_a_button = resolveComponent("a-button");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, {
      onRegister: _ctx.registerTable,
      onEditChange: _ctx.handleEditChange
    }, {
      action: withCtx(({ record, column }) => [
        createVNode(_component_TableAction, {
          actions: _ctx.createActions(record, column)
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister", "onEditChange"]),
    createVNode(_component_a_button, {
      block: "",
      class: "mt-5",
      type: "dashed",
      onClick: _ctx.handleAdd
    }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
var PersonTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PersonTable as default };