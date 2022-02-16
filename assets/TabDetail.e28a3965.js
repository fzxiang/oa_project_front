import { a as PageWrapper } from "./index.1afc6a09.js";
import { _ as _export_sfc, a5 as useTabs } from "./index.d19df3e8.js";
import { B as defineComponent, b5 as useRoute, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, K as toDisplayString } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.814f6021.js";
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
