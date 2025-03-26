import { B as BasicTable } from "./TableImg.3829b758.js";
import { T as TableAction } from "./BasicForm.b9e70f2c.js";
import { u as useTable } from "./useTable.2ed5024e.js";
import { f as getDeptList } from "./system.0f013b88.js";
import { b as useModal } from "./index.a1fdeced.js";
import { D as DeptModal, c as columns, s as searchFormSchema } from "./DeptModal.19fc4738.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.ef3314e3.js";
import "./index.3f999429.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.a0bf2552.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
const _sfc_main = defineComponent({
  name: "DeptManagement",
  components: { BasicTable, DeptModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: "\u90E8\u95E8\u5217\u8868",
      api: getDeptList,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema
      },
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
      openModal(true, {
        isUpdate: false
      });
    }
    function handleEdit(record) {
      openModal(true, {
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
    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u90E8\u95E8 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_DeptModal = resolveComponent("DeptModal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
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
    }, 8, ["onRegister"]),
    createVNode(_component_DeptModal, {
      onRegister: _ctx.registerModal,
      onSuccess: _ctx.handleSuccess
    }, null, 8, ["onRegister", "onSuccess"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
