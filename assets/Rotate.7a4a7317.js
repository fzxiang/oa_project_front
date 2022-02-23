import { R as RotateDragVerify } from "./index.17436472.js";
import { h as headerImg } from "./header.d801b988.js";
import { a as PageWrapper } from "./index.d1dd7909.js";
import { _ as _export_sfc } from "./index.d5751037.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.66c00070.js";
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
