import { B as defineComponent, b6 as Result, cB as CloseCircleOutlined, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, J as createBaseVNode, af as createTextVNode, N as pushScopeId, O as popScopeId } from "./vendor.7c0ada15.js";
/* empty css                 */import { _ as _export_sfc } from "./index.9f6c9c50.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Result,
    CloseCircleOutlined
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f1769d94"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "m-5 result-error" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8FD4\u56DE\u4FEE\u6539 ");
const _hoisted_3 = { class: "result-error__content" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "result-error__content-title" }, "\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A", -1));
const _hoisted_5 = { class: "mb-4" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3 ");
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { class: "ml-4" }, "\u7ACB\u5373\u89E3\u51BB >", -1));
const _hoisted_8 = { class: "mb-4" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C ");
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { class: "ml-4" }, "\u7ACB\u5373\u89E3\u51BB >", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Result = resolveComponent("Result");
  const _component_CloseCircleOutlined = resolveComponent("CloseCircleOutlined");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Result, {
      status: "error",
      title: "\u63D0\u4EA4\u5931\u8D25",
      "sub-title": "\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002"
    }, {
      extra: withCtx(() => [
        createVNode(_component_a_button, {
          key: "console",
          type: "primary"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_CloseCircleOutlined, { class: "mr-2 result-error__content-icon" }),
        _hoisted_6,
        _hoisted_7
      ]),
      createBaseVNode("div", _hoisted_8, [
        createVNode(_component_CloseCircleOutlined, { class: "mr-2 result-error__content-icon" }),
        _hoisted_9,
        _hoisted_10
      ])
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f1769d94"]]);
export { index as default };
