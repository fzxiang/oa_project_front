import { B as BasicDrawer } from "./index.87d22d51.js";
import { _ as _export_sfc } from "./index.d921a71a.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, aq as renderList, J as createBaseVNode, ac as Fragment, a5 as mergeProps, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */const _sfc_main = defineComponent({
  components: { BasicDrawer },
  setup() {
    return {
      handleOk: () => {
        console.log("=====================");
        console.log("ok");
        console.log("======================");
      }
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" btn");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" btn2");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" btn3");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    title: "Modal Title",
    width: "50%",
    showFooter: "",
    onOk: _ctx.handleOk
  }), {
    insertFooter: withCtx(() => [
      createVNode(_component_a_button, null, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      })
    ]),
    centerFooter: withCtx(() => [
      createVNode(_component_a_button, null, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      })
    ]),
    appendFooter: withCtx(() => [
      createVNode(_component_a_button, null, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(40, (index) => {
        return createBaseVNode("p", {
          class: "h-20",
          key: index
        }, "\u6839\u636E\u5C4F\u5E55\u9AD8\u5EA6\u81EA\u9002\u5E94");
      }), 64))
    ]),
    _: 1
  }, 16, ["onOk"]);
}
var Drawer3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Drawer3 as default };
