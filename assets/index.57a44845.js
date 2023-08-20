import { d as defineComponent, b9 as Result, cR as Steps, c8 as Descriptions, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import { _ as _export_sfc } from "./index.20a8e034.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Result,
    Steps,
    Step: Steps.Step,
    Descriptions,
    DescriptionItem: Descriptions.Item
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-09367f28"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "m-5 result-success" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8FD4\u56DE\u5217\u8868 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u67E5\u770B\u9879\u76EE ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u6253\u5370 ");
const _hoisted_5 = { class: "result-success__content" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" 111222 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Vben ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" 2016-12-12 ~ 2017-12-12 ");
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "Vben", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "2016-12-12 12:32", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Chad", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Result = resolveComponent("Result");
  const _component_DescriptionItem = resolveComponent("DescriptionItem");
  const _component_Descriptions = resolveComponent("Descriptions");
  const _component_Step = resolveComponent("Step");
  const _component_Steps = resolveComponent("Steps");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Result, {
      status: "success",
      title: "\u63D0\u4EA4\u6210\u529F",
      "sub-title": "\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\uFF0C \u5982\u679C\u4EC5\u662F\u7B80\u5355\u64CD\u4F5C\uFF0C\u4F7F\u7528 Message \u5168\u5C40\u63D0\u793A\u53CD\u9988\u5373\u53EF\u3002 \u672C\u6587\u5B57\u533A\u57DF\u53EF\u4EE5\u5C55\u793A\u7B80\u5355\u7684\u8865\u5145\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u7C7B\u4F3C\u5C55\u793A \u201C\u5355\u636E\u201D\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u7070\u8272\u533A\u57DF\u53EF\u4EE5\u5448\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\u3002"
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
        }),
        createVNode(_component_a_button, { key: "buy" }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_a_button, { key: "buy" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_5, [
      createVNode(_component_Descriptions, { title: "\u9879\u76EE\u540D\u79F0" }, {
        default: withCtx(() => [
          createVNode(_component_DescriptionItem, { label: "\u9879\u76EE ID" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(_component_DescriptionItem, { label: "\u8D1F\u8D23\u4EBA" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_DescriptionItem, { label: "\u751F\u6548\u65F6\u95F4" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Steps, {
        current: 1,
        "progress-dot": "",
        size: "small"
      }, {
        default: withCtx(() => [
          createVNode(_component_Step, { title: "\u521B\u5EFA\u9879\u76EE" }, {
            description: withCtx(() => [
              _hoisted_9,
              _hoisted_10
            ]),
            _: 1
          }),
          createVNode(_component_Step, { title: "\u90E8\u95E8\u521D\u5BA1" }, {
            description: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }),
          createVNode(_component_Step, { title: "\u8D22\u52A1\u590D\u6838" }),
          createVNode(_component_Step, { title: "\u5B8C\u6210" })
        ]),
        _: 1
      })
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-09367f28"]]);
export { index as default };
