import { d as defineComponent, b9 as Result, c8 as Descriptions, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 *//* empty css                  */import { _ as _export_sfc } from "./index.582c447f.js";
var Step3_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    [Result.name]: Result,
    [Descriptions.name]: Descriptions,
    [Descriptions.Item.name]: Descriptions.Item
  },
  emits: ["redo"],
  setup(_, { emit }) {
    return {
      redo: () => {
        emit("redo");
      }
    };
  }
});
const _hoisted_1 = { class: "step3" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u518D\u8F6C\u4E00\u7B14 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u67E5\u770B\u8D26\u5355 ");
const _hoisted_4 = { class: "desc-wrap" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" ant-design@alipay.com ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" test@example.com ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Vben ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" 500\u5143 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_a_result = resolveComponent("a-result");
  const _component_a_descriptions_item = resolveComponent("a-descriptions-item");
  const _component_a_descriptions = resolveComponent("a-descriptions");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_a_result, {
      status: "success",
      title: "\u64CD\u4F5C\u6210\u529F",
      "sub-title": "\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26"
    }, {
      extra: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.redo
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, null, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_a_descriptions, {
        column: 1,
        class: "mt-5"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_descriptions_item, { label: "\u4ED8\u6B3E\u8D26\u6237" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_a_descriptions_item, { label: "\u6536\u6B3E\u8D26\u6237" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(_component_a_descriptions_item, { label: "\u6536\u6B3E\u4EBA\u59D3\u540D" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_a_descriptions_item, { label: "\u8F6C\u8D26\u91D1\u989D" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
var Step3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e6e2d500"]]);
export { Step3 as default };
