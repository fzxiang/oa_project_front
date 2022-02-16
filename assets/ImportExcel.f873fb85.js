import { I as ImpExcel } from "./index.b4b1cf51.js";
import { B as BasicTable } from "./TableImg.173fb010.js";
import "./BasicForm.52e52889.js";
import { a as PageWrapper } from "./index.42463de2.js";
import { _ as _export_sfc } from "./index.eea97d5b.js";
import { B as defineComponent, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, aq as renderList, ac as Fragment, af as createTextVNode } from "./vendor.7c0ada15.js";
import "./index.f7d0c68c.js";
import "./useWindowSizeFn.07387e97.js";
import "./useForm.95ae54a7.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e2cec4bd.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.00148032.js";
import "./base64Conver.08b9f4ec.js";
import "./index.1f07848b.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.f18cec8b.js";
const _sfc_main = defineComponent({
  components: { BasicTable, ImpExcel, PageWrapper },
  setup() {
    const tableListRef = ref([]);
    function loadDataSuccess(excelDataList) {
      tableListRef.value = [];
      console.log(excelDataList);
      for (const excelData of excelDataList) {
        const {
          header,
          results,
          meta: { sheetName }
        } = excelData;
        const columns = [];
        for (const title of header) {
          columns.push({ title, dataIndex: title });
        }
        tableListRef.value.push({ title: sheetName, dataSource: results, columns });
      }
    }
    return {
      loadDataSuccess,
      tableListRef
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5BFC\u5165Excel ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_ImpExcel = resolveComponent("ImpExcel");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_ImpExcel, {
        onSuccess: _ctx.loadDataSuccess,
        dateFormat: "YYYY-MM-DD"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, { class: "m-3" }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["onSuccess"]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableListRef, (table, index) => {
        return openBlock(), createBlock(_component_BasicTable, {
          key: index,
          title: table.title,
          columns: table.columns,
          dataSource: table.dataSource
        }, null, 8, ["title", "columns", "dataSource"]);
      }), 128))
    ]),
    _: 1
  });
}
var ImportExcel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ImportExcel as default };
