import { B as BasicTable } from "./TableImg.7b6cade1.js";
import { T as TableAction } from "./BasicForm.51a12356.js";
import { u as useTable } from "./useTable.afa435b3.js";
import { h as getMenuList } from "./system.b56744aa.js";
import { u as useDrawer } from "./index.b3856fee.js";
import { M as MenuDrawer, c as columns, s as searchFormSchema } from "./MenuDrawer.dc96f699.js";
import { _ as _export_sfc } from "./index.c01f1eb2.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, a7 as nextTick, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.2a3ca82d.js";
import "./index.9cd07a12.js";
import "./index.7fb5b23a.js";
import "./useRootSetting.f9f62c0d.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.8094aee1.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
import "./uuid.2b29000c.js";
import "./index.0fe36650.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.cc517659.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
/* empty css                 */const _sfc_main = defineComponent({
  name: "MenuManagement",
  components: { BasicTable, MenuDrawer, TableAction },
  setup() {
    const [registerDrawer, { openDrawer }] = useDrawer();
    const [registerTable, { reload, expandAll }] = useTable({
      title: "\u83DC\u5355\u5217\u8868",
      api: getMenuList,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema
      },
      isTreeTable: true,
      pagination: false,
      striped: false,
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      canResize: false,
      actionColumn: {
        width: 80,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: void 0
      }
    });
    function handleCreate() {
      openDrawer(true, {
        isUpdate: false
      });
    }
    function handleEdit(record) {
      openDrawer(true, {
        record,
        isUpdate: true
      });
    }
    function handleDelete(record) {
      console.log(record);
    }
    function handleSuccess() {
      reload();
    }
    function onFetchSuccess() {
      nextTick(expandAll);
    }
    return {
      registerTable,
      registerDrawer,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      onFetchSuccess
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u83DC\u5355 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_MenuDrawer = resolveComponent("MenuDrawer");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, {
      onRegister: _ctx.registerTable,
      onFetchSuccess: _ctx.onFetchSuccess
    }, {
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.handleCreate
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              icon: "clarity:note-edit-line",
              onClick: _ctx.handleEdit.bind(null, record)
            },
            {
              icon: "ant-design:delete-outlined",
              color: "error",
              popConfirm: {
                title: "\u662F\u5426\u786E\u8BA4\u5220\u9664",
                confirm: _ctx.handleDelete.bind(null, record)
              }
            }
          ]
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister", "onFetchSuccess"]),
    createVNode(_component_MenuDrawer, {
      onRegister: _ctx.registerDrawer,
      onSuccess: _ctx.handleSuccess
    }, null, 8, ["onRegister", "onSuccess"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
