import { D as Description } from "./index.391db1c6.js";
import { B as BasicTable } from "./TableImg.2c231b5c.js";
import "./BasicForm.46555c9a.js";
import { u as useTable } from "./useTable.21a73546.js";
import { a as PageWrapper } from "./index.4cdf6aa4.js";
import { B as defineComponent, b3 as Divider, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                 */import { refundTableData, refundTableSchema, refundTimeTableSchema, refundTimeTableData, refundSchema, refundData, personSchema, personData } from "./data.ec0af078.js";
import { _ as _export_sfc } from "./index.f009a4b5.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./useForm.cd73db2a.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./useWindowSizeFn.07387e97.js";
import "./index.05bba50f.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.5cb3be60.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.a6ef3701.js";
import "./base64Conver.08b9f4ec.js";
import "./index.097f30e7.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.5a701648.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { Description, BasicTable, PageWrapper, [Divider.name]: Divider },
  setup() {
    const [registerRefundTable] = useTable({
      title: "\u9000\u8D27\u5546\u54C1",
      dataSource: refundTableData,
      columns: refundTableSchema,
      pagination: false,
      showIndexColumn: false,
      scroll: { y: 300 },
      showSummary: true,
      summaryFunc: handleSummary
    });
    const [registerTimeTable] = useTable({
      title: "\u9000\u8D27\u8FDB\u5EA6",
      columns: refundTimeTableSchema,
      pagination: false,
      dataSource: refundTimeTableData,
      showIndexColumn: false,
      scroll: { y: 300 }
    });
    function handleSummary(tableData) {
      let totalT5 = 0;
      let totalT6 = 0;
      tableData.forEach((item) => {
        totalT5 += item.t5;
        totalT6 += item.t6;
      });
      return [
        {
          t1: "\u603B\u8BA1",
          t5: totalT5,
          t6: totalT6
        }
      ];
    }
    return {
      registerRefundTable,
      registerTimeTable,
      refundSchema,
      refundData,
      personSchema,
      personData
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  const _component_a_divider = resolveComponent("a-divider");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u57FA\u7840\u8BE6\u60C5\u9875",
    contentBackground: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Description, {
        size: "middle",
        title: "\u9000\u6B3E\u7533\u8BF7",
        bordered: false,
        column: 3,
        data: _ctx.refundData,
        schema: _ctx.refundSchema
      }, null, 8, ["data", "schema"]),
      createVNode(_component_a_divider),
      createVNode(_component_Description, {
        size: "middle",
        title: "\u7528\u6237\u4FE1\u606F",
        bordered: false,
        column: 3,
        data: _ctx.personData,
        schema: _ctx.personSchema
      }, null, 8, ["data", "schema"]),
      createVNode(_component_a_divider),
      createVNode(_component_BasicTable, { onRegister: _ctx.registerRefundTable }, null, 8, ["onRegister"]),
      createVNode(_component_a_divider),
      createVNode(_component_BasicTable, { onRegister: _ctx.registerTimeTable }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33e8998f"]]);
export { index as default };
