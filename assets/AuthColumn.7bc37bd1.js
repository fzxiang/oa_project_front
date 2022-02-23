import { B as BasicTable } from "./TableImg.7a3d4641.js";
import { T as TableAction } from "./BasicForm.514db834.js";
import { u as useTable } from "./useTable.4c252703.js";
import { d as demoListApi } from "./table.9432d1a3.js";
import { _ as _export_sfc } from "./index.269aa0b6.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.e2739461.js";
import "./index.045730bc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5bf08b88.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.fa2f8a67.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.eeb2a22c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.f0a8dccd.js";
import "./base64Conver.08b9f4ec.js";
import "./index.8d4df286.js";
const columns = [
  {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 100
  },
  {
    title: "\u59D3\u540D",
    dataIndex: "name",
    auth: "test"
  },
  {
    title: "\u72B6\u6001",
    dataIndex: "status"
  },
  {
    title: "\u5730\u5740",
    dataIndex: "address",
    auth: "super",
    ifShow: (_column) => {
      return true;
    }
  },
  {
    title: "\u5F00\u59CB\u65F6\u95F4",
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
      bordered: true,
      actionColumn: {
        width: 250,
        title: "Action",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    function handleEdit(record) {
      console.log("\u70B9\u51FB\u4E86\u7F16\u8F91", record);
    }
    function handleDelete(record) {
      console.log("\u70B9\u51FB\u4E86\u5220\u9664", record);
    }
    function handleOpen(record) {
      console.log("\u70B9\u51FB\u4E86\u542F\u7528", record);
    }
    return {
      registerTable,
      handleEdit,
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
              label: "\u7F16\u8F91",
              onClick: _ctx.handleEdit.bind(null, record),
              auth: "other"
            },
            {
              label: "\u5220\u9664",
              icon: "ic:outline-delete-outline",
              onClick: _ctx.handleDelete.bind(null, record),
              auth: "super"
            }
          ],
          dropDownActions: [
            {
              label: "\u542F\u7528",
              popConfirm: {
                title: "\u662F\u5426\u542F\u7528\uFF1F",
                confirm: _ctx.handleOpen.bind(null, record)
              },
              ifShow: (_action) => {
                return record.status !== "enable";
              }
            },
            {
              label: "\u7981\u7528",
              popConfirm: {
                title: "\u662F\u5426\u7981\u7528\uFF1F",
                confirm: _ctx.handleOpen.bind(null, record)
              },
              ifShow: () => {
                return record.status === "enable";
              }
            },
            {
              label: "\u540C\u65F6\u63A7\u5236",
              popConfirm: {
                title: "\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",
                confirm: _ctx.handleOpen.bind(null, record)
              },
              auth: "super",
              ifShow: () => {
                return true;
              }
            }
          ]
        }, null, 8, ["actions", "dropDownActions"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var AuthColumn = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AuthColumn as default };
