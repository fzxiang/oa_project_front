import { B as BasicTable } from "./TableImg.d9009f44.js";
import "./BasicForm.c8f30ddc.js";
import { u as useTable } from "./useTable.765ceee1.js";
import { getMultipleHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.c0511c9d.js";
import { _ as _export_sfc } from "./index.d5751037.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.29a2ef95.js";
import "./index.d1dd7909.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.66c00070.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.e350f83b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.9d22f67b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.cca74ae9.js";
import "./base64Conver.08b9f4ec.js";
import "./index.ffce29af.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const [registerTable] = useTable({
      title: "\u591A\u7EA7\u8868\u5934\u793A\u4F8B",
      api: demoListApi,
      columns: getMultipleHeaderColumns()
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
var MultipleHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MultipleHeader as default };
