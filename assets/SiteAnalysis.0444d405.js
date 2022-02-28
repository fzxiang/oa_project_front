import { d as defineComponent, Q as ref, o as openBlock, c as createBlock, e as withCtx, R as createElementBlock, f as createVNode, ai as createCommentVNode, aa as mergeProps, b as unref, cs as Card } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import _sfc_main$1 from "./VisitAnalysis.56a03b85.js";
import _sfc_main$2 from "./VisitAnalysisBar.15ae235a.js";
import "./useECharts.577d11cd.js";
import "./useRootSetting.40ea27f7.js";
import "./index.327c7452.js";
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
