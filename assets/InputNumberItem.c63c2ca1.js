import { d as defineComponent, bt as InputNumber, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                  */import { d as useDesign } from "./index.31fe8755.js";
import { b as baseHandler } from "./index.086e69f6.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
import "./useRootSetting.f743f654.js";
import "./index.ec445d7f.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.7e29f15e.js";
import "./index.af29aab4.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.3baa48d8.js";
/* empty css                 */import "./useTabs.6f065f0a.js";
import "./lock.81318948.js";
import "./index.2b70d5e8.js";
var InputNumberItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "InputNumberItem",
  components: { InputNumber },
  props: {
    event: {
      type: Number
    },
    title: {
      type: String
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("setting-input-number-item");
    function handleChange(e) {
      props.event && baseHandler(props.event, e);
    }
    return {
      prefixCls,
      handleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputNumber = resolveComponent("InputNumber");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createBaseVNode("span", null, toDisplayString(_ctx.title), 1),
    createVNode(_component_InputNumber, mergeProps(_ctx.$attrs, {
      size: "small",
      class: `${_ctx.prefixCls}-input-number`,
      onChange: _ctx.handleChange
    }), null, 16, ["class", "onChange"])
  ], 2);
}
var InputNumberItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2dfafc16"]]);
export { InputNumberItem as default };
