import { d as defineComponent, be as Select, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
import { d as useDesign } from "./index.5dccf356.js";
import { b as baseHandler } from "./index.40596d95.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import "./useRootSetting.13d2da37.js";
import "./index.0f005da3.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.91b253ee.js";
import "./index.c8950cd4.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4b9264e1.js";
/* empty css                 */import "./useTabs.70cf65e5.js";
import "./lock.189f038a.js";
import "./index.c2944c7f.js";
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
