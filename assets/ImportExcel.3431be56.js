import { I as ImpExcel } from "./index.b4714800.js";
import { B as BasicTable } from "./TableImg.e3723d94.js";
import "./BasicForm.3082faf1.js";
import { a as PageWrapper } from "./index.a0022527.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, ag as Fragment, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.ddb6a176.js";
import "./useRootSetting.32bfb7e7.js";
import "./useAttrs.d4bdb35c.js";
import "./index.4f32056b.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useForm.8431ddf4.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.33861ed4.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.acc04ae7.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.333b8fbf.js";
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