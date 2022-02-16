import { B as BasicTable } from "./TableImg.173fb010.js";
import "./BasicForm.52e52889.js";
import { u as useTable } from "./useTable.7f5e83bd.js";
import { getMultipleHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.6f367bbc.js";
import { _ as _export_sfc } from "./index.eea97d5b.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.95ae54a7.js";
import "./index.42463de2.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.f18cec8b.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.f7d0c68c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e2cec4bd.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.00148032.js";
import "./base64Conver.08b9f4ec.js";
import "./index.1f07848b.js";
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
