import { B as BasicTable } from "./TableImg.05fa72f6.js";
import "./BasicForm.43e0950f.js";
import { u as useTable } from "./useTable.28757989.js";
import { getMultipleHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.24eb9741.js";
import { _ as _export_sfc } from "./index.9f6c9c50.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.c3298bf0.js";
import "./index.3ed09f6c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.ca4f2553.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.4a1637a4.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.2d1b1706.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.062a3e68.js";
import "./base64Conver.08b9f4ec.js";
import "./index.f905e655.js";
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
