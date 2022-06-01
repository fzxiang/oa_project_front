import { B as BasicModal } from "./index.887225a6.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, R as createElementBlock, as as renderList, V as createBaseVNode, ag as Fragment, aa as mergeProps } from "./vendor.faf2de98.js";
import "./useRootSetting.13d2da37.js";
import "./useAttrs.d4bdb35c.js";
import "./index.5dccf356.js";
import "./useWindowSizeFn.7703d3fa.js";
const _sfc_main = defineComponent({
  components: { BasicModal },
  setup() {
    return {};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps(_ctx.$attrs, {
    title: "Modal Title",
    helpMessage: ["\u63D0\u793A1", "\u63D0\u793A2"],
    width: "700px"
  }), {
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(20, (index) => {
        return createBaseVNode("p", {
          class: "h-20",
          key: index
        }, "\u6839\u636E\u5C4F\u5E55\u9AD8\u5EA6\u81EA\u9002\u5E94");
      }), 64))
    ]),
    _: 1
  }, 16);
}
var Modal3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Modal3 as default };
