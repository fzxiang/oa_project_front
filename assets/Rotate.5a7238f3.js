import { R as RotateDragVerify } from "./index.0f603d27.js";
import { h as headerImg } from "./header.d801b988.js";
import { a as PageWrapper } from "./index.a1d89833.js";
import { _ as _export_sfc } from "./index.b67cb216.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.0e80d1b6.js";
import "./index.7be4058a.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.6125eacd.js";
var Rotate_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { RotateDragVerify, PageWrapper },
  setup() {
    const handleSuccess = () => {
      console.log("success!");
    };
    return {
      handleSuccess,
      img: headerImg
    };
  }
});
const _hoisted_1 = { class: "flex justify-center p-4 items-center bg-gray-700" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RotateDragVerify = resolveComponent("RotateDragVerify");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u65CB\u8F6C\u6821\u9A8C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_RotateDragVerify, {
          src: _ctx.img,
          ref: "el",
          onSuccess: _ctx.handleSuccess
        }, null, 8, ["src", "onSuccess"])
      ])
    ]),
    _: 1
  });
}
var Rotate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8f43371e"]]);
export { Rotate as default };
