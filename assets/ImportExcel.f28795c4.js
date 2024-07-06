import { I as ImpExcel } from "./index.6860693b.js";
import { B as BasicTable } from "./TableImg.b7ec07e4.js";
import "./BasicForm.da1c9705.js";
import { a as PageWrapper } from "./index.089391a0.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, ag as Fragment, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.6184b776.js";
import "./useRootSetting.3e9429c5.js";
import "./useAttrs.d4bdb35c.js";
import "./index.55d49599.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useForm.47d181cc.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.94a33a2b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.cff27d3a.js";
import "./download.4c317275.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fba49a50.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.4a5cf1f5.js";
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
        dateFormat: "YYYY-MM-DD hh:mm:ss"
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
