import { B as BasicTable } from "./TableImg.3829b758.js";
import "./BasicForm.b9e70f2c.js";
import { u as useTable } from "./useTable.2ed5024e.js";
import { getMultipleHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.820b4149.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.ef3314e3.js";
import "./index.3f999429.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
import "./uuid.2b29000c.js";
import "./index.a1fdeced.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.a0bf2552.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
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
