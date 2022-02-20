import { B as defineComponent, bb as Select, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, K as toDisplayString, w as createVNode, a5 as mergeProps, L as normalizeClass } from "./vendor.7c0ada15.js";
import { _ as _export_sfc, a as useDesign } from "./index.d921a71a.js";
import { b as baseHandler } from "./index.1c2da2f4.js";
import "./index.87d22d51.js";
/* empty css                 *//* empty css                 */import "./index.98b1cca3.js";
import "./index.a21ed2c4.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.d76478e3.js";
/* empty css                 */import "./lock.fe120dec.js";
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
