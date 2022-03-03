import { a as PageWrapper } from "./index.c0604aaf.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.e23996e1.js";
import "./useRootSetting.af8c12e8.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e1900874.js";
const _sfc_main = defineComponent({
  components: { PageWrapper }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u8FDB\u5165\u5E73\u7EA7\u8BE6\u60C5\u9875 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5E73\u7EA7\u9762\u5305\u5C51\u793A\u4F8B",
    content: "\u5B50\u7EA7\u9875\u9762\u9762\u5305\u5C51\u4F1A\u8986\u76D6\u5F53\u524D\u5C42\u7EA7"
  }, {
    default: withCtx(() => [
      createVNode(_component_router_link, { to: "/feat/breadcrumb/flatDetail" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var FlatList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FlatList as default };
