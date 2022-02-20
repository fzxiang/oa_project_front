import { B as defineComponent, br as InputNumber, a1 as resolveComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, K as toDisplayString, w as createVNode, a5 as mergeProps, L as normalizeClass } from "./vendor.7c0ada15.js";
/* empty css                  */import { _ as _export_sfc, a as useDesign } from "./index.400d2de0.js";
import { b as baseHandler } from "./index.795c7b8e.js";
import "./index.d4acf66f.js";
/* empty css                 *//* empty css                 */import "./index.04d9d099.js";
import "./index.d53d7c89.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.4aedc905.js";
/* empty css                 */import "./lock.7769643e.js";
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
