import { B as BasicTable } from "./TableImg.9240dc64.js";
import "./BasicForm.14f271b5.js";
import { u as useTable } from "./useTable.af40ffbf.js";
import { getMultipleHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.262730ff.js";
import { _ as _export_sfc } from "./index.89bba8b1.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.c7b849aa.js";
import "./index.c02677d5.js";
import "./index.035cec88.js";
import "./useRootSetting.b4af9267.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.eb16d7c9.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.77489d69.js";
import "./useTabs.28f16105.js";
import "./uuid.2b29000c.js";
import "./index.13115d00.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.d430c85a.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.45368269.js";
import "./download.2e9cabfa.js";
import "./base64Conver.08b9f4ec.js";
import "./index.1ec6dcc0.js";
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
