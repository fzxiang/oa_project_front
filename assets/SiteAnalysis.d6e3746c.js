import { B as defineComponent, r as ref, D as openBlock, a2 as createBlock, a7 as withCtx, F as createElementBlock, w as createVNode, ae as createCommentVNode, a5 as mergeProps, u as unref, cb as Card } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import _sfc_main$1 from "./VisitAnalysis.a2f7f0b1.js";
import _sfc_main$2 from "./VisitAnalysisBar.5f80dd91.js";
import "./useECharts.a351f3a1.js";
import "./index.d19df3e8.js";
import "./props.f48aca0b.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeKey = ref("tab1");
    const tabListTitle = [
      {
        key: "tab1",
        tab: "\u6D41\u91CF\u8D8B\u52BF"
      },
      {
        key: "tab2",
        tab: "\u8BBF\u95EE\u91CF"
      }
    ];
    function onTabChange(key) {
      activeKey.value = key;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), mergeProps({ "tab-list": tabListTitle }, _ctx.$attrs, {
        "active-tab-key": activeKey.value,
        onTabChange
      }), {
        default: withCtx(() => [
          activeKey.value === "tab1" ? (openBlock(), createElementBlock("p", _hoisted_1, [
            createVNode(_sfc_main$1)
          ])) : createCommentVNode("", true),
          activeKey.value === "tab2" ? (openBlock(), createElementBlock("p", _hoisted_2, [
            createVNode(_sfc_main$2)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 16, ["active-tab-key"]);
    };
  }
});
export { _sfc_main as default };
