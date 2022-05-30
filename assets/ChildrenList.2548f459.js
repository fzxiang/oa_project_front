import { a as PageWrapper } from "./index.2c91c99a.js";
import { _ as _export_sfc } from "./index.f575d9f0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.77d0dee2.js";
import "./useRootSetting.f760cdbc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e38fbece.js";
const _sfc_main = defineComponent({
  components: { PageWrapper }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u8FDB\u5165\u5B50\u7EA7\u8BE6\u60C5\u9875 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5C42\u7EA7\u9762\u5305\u5C51\u793A\u4F8B",
    content: "\u5B50\u7EA7\u9875\u9762\u9762\u5305\u5C51\u4F1A\u6DFB\u52A0\u5230\u5F53\u524D\u5C42\u7EA7\u540E\u9762"
  }, {
    default: withCtx(() => [
      createVNode(_component_router_link, { to: "/feat/breadcrumb/children/childrenDetail" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ChildrenList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ChildrenList as default };
