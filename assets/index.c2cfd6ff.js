import { B as BasicTable } from "./TableImg.d3f41730.js";
import { T as TableAction } from "./BasicForm.e1646202.js";
import { u as useTable } from "./useTable.6ef84e5d.js";
import { f as getDeptList } from "./system.45ccbd89.js";
import { b as useModal } from "./index.42d40cd7.js";
import { D as DeptModal, c as columns, s as searchFormSchema } from "./DeptModal.139e89e8.js";
import { _ as _export_sfc } from "./index.26d4b9cf.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.ae352f89.js";
import "./index.55f54600.js";
import "./index.518f457b.js";
import "./useRootSetting.5dedaee7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.80c2cc86.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.dd4dcbd6.js";
import "./useTabs.a6c220d8.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.5345229d.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.86ef7b16.js";
import "./download.e21de43f.js";
import "./base64Conver.08b9f4ec.js";
import "./index.5f21054e.js";
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