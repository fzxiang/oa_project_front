import { B as BasicTable } from "./TableImg.e3723d94.js";
import { T as TableAction } from "./BasicForm.3082faf1.js";
import { u as useTable } from "./useTable.3c19a45e.js";
import { d as demoListApi } from "./table.299ea4cc.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx } from "./vendor.faf2de98.js";
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
    title: "ID",
    dataIndex: "id",
    fixed: "left",
    width: 280
  },
  {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 260
  },
  {
    title: "\u5730\u5740",
    dataIndex: "address"
  },
  {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 300
  },
  {
    title: "\u5F00\u59CB\u65F6\u95F4",
    width: 200,
    dataIndex: "beginTime"
  },
  {
    title: "\u7ED3\u675F\u65F6\u95F4",
    dataIndex: "endTime",
    width: 200
  }
];
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const [registerTable] = useTable({
      title: "TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",
      api: demoListApi,
      columns,
      rowSelection: { type: "radio" },
      bordered: true,
      actionColumn: {
        width: 160,
        title: "Action",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    function handleDelete(record) {
      console.log("\u70B9\u51FB\u4E86\u5220\u9664", record);
    }
    function handleOpen(record) {
      console.log("\u70B9\u51FB\u4E86\u542F\u7528", record);
    }
    return {
      registerTable,
      handleDelete,
      handleOpen
    };
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              label: "\u5220\u9664",
              icon: "ic:outline-delete-outline",
              onClick: _ctx.handleDelete.bind(null, record)
            }
          ],
          dropDownActions: [
            {
              label: "\u542F\u7528",
              popConfirm: {
                title: "\u662F\u5426\u542F\u7528\uFF1F",
                confirm: _ctx.handleOpen.bind(null, record)
              }
            }
          ]
        }, null, 8, ["actions", "dropDownActions"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var FixedColumn = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FixedColumn as default };