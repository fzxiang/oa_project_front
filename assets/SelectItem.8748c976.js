import { d as defineComponent, be as Select, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
import { d as useDesign } from "./index.8e8d3248.js";
import { b as baseHandler } from "./index.1e71f6e9.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import "./useRootSetting.cdafd62c.js";
import "./index.247639fc.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.b5f36228.js";
import "./index.ecad28b8.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.a64b04d8.js";
/* empty css                 */import "./useTabs.90482ef5.js";
import "./lock.f7448fe1.js";
import "./index.470150c6.js";
var SelectItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "SelectItem",
  components: { Select },
  props: {
    event: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    title: {
      type: String
    },
    def: {
      type: [String, Number]
    },
    initValue: {
      type: [String, Number]
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("setting-select-item");
    const getBindValue = computed(() => {
      return props.def ? { value: props.def, defaultValue: props.initValue || props.def } : {};
    });
    function handleChange(e) {
      props.event && baseHandler(props.event, e);
    }
    return {
      prefixCls,
      handleChange,
      getBindValue
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = resolveComponent("Select");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createBaseVNode("span", null, toDisplayString(_ctx.title), 1),
    createVNode(_component_Select, mergeProps(_ctx.getBindValue, {
      class: `${_ctx.prefixCls}-select`,
      onChange: _ctx.handleChange,
      disabled: _ctx.disabled,
      size: "small",
      options: _ctx.options
    }), null, 16, ["class", "onChange", "disabled", "options"])
  ], 2);
}
var SelectItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6707e46b"]]);
export { SelectItem as default };