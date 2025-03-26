import { B as BasicTable } from "./TableImg.7b6cade1.js";
import { T as TableAction } from "./BasicForm.51a12356.js";
import { u as useTable } from "./useTable.afa435b3.js";
import { getBasicColumns, getFormConfig, getBasicColumnsChild } from "./tableData.a13f6ef4.js";
import { W as WriterModal, s as searchApi, a as searchChildApi } from "./WriterModal.291badf4.js";
import { b as useModal } from "./index.0fe36650.js";
import { _ as _export_sfc } from "./index.c01f1eb2.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.2a3ca82d.js";
import "./index.9cd07a12.js";
import "./index.7fb5b23a.js";
import "./useRootSetting.f9f62c0d.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.8094aee1.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.cc517659.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
import "./customRender.9280375e.js";
const _sfc_main = defineComponent({
  components: { BasicTable, WriterModal, TableAction },
  setup() {
    const rowId = ref("");
    const [registerTable, { getRawDataSource }] = useTable({
      title: "\u5199\u624B\u5217\u8868",
      api: searchApi,
      columns: getBasicColumns(),
      beforeFetch(info) {
        return { searchParams: info };
      },
      afterFetch: async () => {
        const data = await getRawDataSource();
        console.log(data);
      },
      handleSearchInfoFn(info) {
        return info;
      },
      useSearchForm: true,
      formConfig: getFormConfig(),
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      rowKey: "id",
      actionColumn: {
        width: 80,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: "right"
      },
      onExpand: async (isExpand, record) => {
        if (isExpand) {
          console.log(record);
          rowId.value = record.id;
        }
      }
    });
    const [registerTableChild] = useTable({
      title: "\u5173\u8054\u8BA2\u5355",
      api: searchChildApi,
      columns: getBasicColumnsChild(),
      canResize: false,
      beforeFetch() {
        return { id: rowId.value };
      },
      pagination: false
    });
    const [registerModal, { openModal }] = useModal();
    function handleEdit(record) {
      openModal(true, {
        record,
        isUpdate: true
      });
    }
    return {
      registerTableChild,
      registerModal,
      registerTable,
      handleEdit
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_WriterModal = resolveComponent("WriterModal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              icon: "clarity:note-edit-line",
              onClick: _ctx.handleEdit.bind(null, record)
            }
          ]
        }, null, 8, ["actions"])
      ]),
      expandedRowRender: withCtx(({}) => [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTableChild }, null, 8, ["onRegister"])
      ]),
      _: 1
    }, 8, ["onRegister"]),
    createVNode(_component_WriterModal, { onRegister: _ctx.registerModal }, null, 8, ["onRegister"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
