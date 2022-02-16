import { B as BasicTable } from "./TableImg.8a41863a.js";
import "./BasicForm.f6f10751.js";
import { u as useTable } from "./useTable.6c20f056.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.47ad357a.js";
import { _ as _export_sfc } from "./index.d19df3e8.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.fa7b5680.js";
import "./index.1afc6a09.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.814f6021.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.1f0d40c7.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.d009fa9e.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.3d571b80.js";
import "./base64Conver.08b9f4ec.js";
import "./index.495b4e80.js";
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
