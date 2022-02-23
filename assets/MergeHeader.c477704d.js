import { B as BasicTable } from "./TableImg.00b1d9f6.js";
import "./BasicForm.dac3a60f.js";
import { u as useTable } from "./useTable.90fca055.js";
import { getMergeHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.ae33b2f1.js";
import { _ as _export_sfc } from "./index.563adeec.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.7eecdd87.js";
import "./index.c839abbc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.3d5ad6f3.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.5b8c94ea.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.c8b7939e.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.e339f464.js";
import "./base64Conver.08b9f4ec.js";
import "./index.21ba0761.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const [registerTable] = useTable({
      title: "\u591A\u7EA7\u8868\u5934\u793A\u4F8B",
      api: demoListApi,
      columns: getMergeHeaderColumns()
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
var MergeHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MergeHeader as default };
