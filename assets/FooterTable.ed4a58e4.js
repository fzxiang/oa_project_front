import { B as BasicTable } from "./TableImg.45be1fba.js";
import "./BasicForm.9f05b372.js";
import { u as useTable } from "./useTable.a1c9f9f7.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.d35b0e2f.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.9ebef8bf.js";
import "./index.2436ac25.js";
import "./index.a2736d3e.js";
import "./useRootSetting.bd6c6dd4.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4cc144f6.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.9804cee4.js";
import "./useTabs.6eccdc33.js";
import "./uuid.2b29000c.js";
import "./index.ebdec3e2.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.22606648.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.57a89e8a.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
import "./index.74e6c783.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    function handleSummary(tableData) {
      const totalNo = tableData.reduce((prev, next) => {
        prev += next.no;
        return prev;
      }, 0);
      return [
        {
          _row: "\u5408\u8BA1",
          _index: "\u5E73\u5747\u503C",
          no: totalNo
        },
        {
          _row: "\u5408\u8BA1",
          _index: "\u5E73\u5747\u503C",
          no: totalNo
        }
      ];
    }
    const [registerTable] = useTable({
      title: "\u8868\u5C3E\u884C\u5408\u8BA1\u793A\u4F8B",
      api: demoListApi,
      rowSelection: { type: "checkbox" },
      columns: getBasicColumns(),
      showSummary: true,
      summaryFunc: handleSummary,
      scroll: { x: 2e3 },
      canResize: false
    });
    return {
      registerTable
    };
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, null, 8, ["onRegister"])
  ]);
}
var FooterTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FooterTable as default };
