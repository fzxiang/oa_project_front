import { B as BasicTable } from "./TableImg.860610ae.js";
import "./BasicForm.2d3a56da.js";
import { u as useTable } from "./useTable.e30bfd2f.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.0dedf14f.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.b4c80bfe.js";
import "./index.5258464e.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.fe0d1d3b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e6ebc007.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
import "./index.770ef330.js";
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
