import { B as BasicTable } from "./TableImg.9240dc64.js";
import { T as TableAction } from "./BasicForm.14f271b5.js";
import { u as useTable } from "./useTable.af40ffbf.js";
import { h as getMenuList } from "./system.55ae9a3f.js";
import { u as useDrawer } from "./index.350cf742.js";
import { M as MenuDrawer, c as columns, s as searchFormSchema } from "./MenuDrawer.7026e1d3.js";
import { _ as _export_sfc } from "./index.89bba8b1.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, a7 as nextTick, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.c7b849aa.js";
import "./index.c02677d5.js";
import "./index.035cec88.js";
import "./useRootSetting.b4af9267.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.eb16d7c9.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.77489d69.js";
import "./useTabs.28f16105.js";
import "./uuid.2b29000c.js";
import "./index.13115d00.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.d430c85a.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.45368269.js";
import "./download.2e9cabfa.js";
import "./base64Conver.08b9f4ec.js";
import "./index.1ec6dcc0.js";
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
