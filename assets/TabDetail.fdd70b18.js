import { a as PageWrapper } from "./index.55f54600.js";
import { u as useTabs } from "./useTabs.a6c220d8.js";
import { d as defineComponent, b8 as useRoute, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, W as toDisplayString } from "./vendor.faf2de98.js";
import { _ as _export_sfc } from "./index.26d4b9cf.js";
import "./index.518f457b.js";
import "./useRootSetting.5dedaee7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.80c2cc86.js";
const _sfc_main = defineComponent({
  name: "TabDetail",
  components: { PageWrapper },
  setup() {
    var _a, _b;
    const route = useRoute();
    const index = (_b = (_a = route.params) == null ? void 0 : _a.id) != null ? _b : -1;
    const { setTitle } = useTabs();
    setTitle(`No.${index} - \u8BE6\u60C5\u4FE1\u606F`);
    return {
      index
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "Tab\u8BE6\u60C5\u9875\u9762" }, {
    default: withCtx(() => [
      createBaseVNode("div", null, toDisplayString(_ctx.index) + " - \u8BE6\u60C5\u9875\u5185\u5BB9\u5728\u6B64", 1)
    ]),
    _: 1
  });
}
var TabDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TabDetail as default };