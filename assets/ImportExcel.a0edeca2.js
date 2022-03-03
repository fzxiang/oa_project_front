import { I as ImpExcel } from "./index.0f5b9a51.js";
import { B as BasicTable } from "./TableImg.9240dc64.js";
import "./BasicForm.14f271b5.js";
import { a as PageWrapper } from "./index.c02677d5.js";
import { _ as _export_sfc } from "./index.89bba8b1.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, ag as Fragment, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.13115d00.js";
import "./useRootSetting.b4af9267.js";
import "./useAttrs.d4bdb35c.js";
import "./index.035cec88.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useForm.c7b849aa.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.77489d69.js";
import "./useTabs.28f16105.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.d430c85a.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.45368269.js";
import "./download.2e9cabfa.js";
import "./base64Conver.08b9f4ec.js";
import "./index.1ec6dcc0.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.eb16d7c9.js";
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
