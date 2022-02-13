import { B as BasicTable } from "./TableImg.681ffd90.js";
import { T as TableAction } from "./BasicForm.a4670432.js";
import { u as useTable } from "./useTable.910147b7.js";
import { getBasicColumns, getFormConfig, getBasicColumnsChild } from "./tableData.1d4ce05d.js";
import { W as WriterModal, s as searchApi, a as searchChildApi } from "./WriterModal.15e16118.js";
import { b as useModal } from "./index.323d0c2b.js";
import { _ as _export_sfc } from "./index.a74bdb7c.js";
import { B as defineComponent, r as ref, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.7940370b.js";
import "./index.066bd91b.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.e928adad.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.44c62108.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.7980a3dd.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9ed45d.js";
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
