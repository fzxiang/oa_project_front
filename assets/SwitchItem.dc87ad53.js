import { d as defineComponent, bu as Switch, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                  */import { d as useDesign } from "./index.71897494.js";
import { _ as _export_sfc, a as useI18n } from "./index.fda518c0.js";
import { b as baseHandler } from "./index.e5575d09.js";
import "./useRootSetting.2943f044.js";
import "./index.192f430a.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.257a16eb.js";
import "./index.d2c3b704.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                 */import "./useTabs.9073d208.js";
import "./lock.5105f1e8.js";
import "./index.e81e404b.js";
var SwitchItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "SwitchItem",
  components: { Switch },
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
      type: Boolean
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("setting-switch-item");
    const { t } = useI18n();
    const getBindValue = computed(() => {
      return props.def ? { checked: props.def } : {};
    });
    function handleChange(e) {
      props.event && baseHandler(props.event, e);
    }
    return {
      prefixCls,
      t,
      handleChange,
      getBindValue
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createBaseVNode("span", null, toDisplayString(_ctx.title), 1),
    createVNode(_component_Switch, mergeProps(_ctx.getBindValue, {
      onChange: _ctx.handleChange,
      disabled: _ctx.disabled,
      checkedChildren: _ctx.t("layout.setting.on"),
      unCheckedChildren: _ctx.t("layout.setting.off")
    }), null, 16, ["onChange", "disabled", "checkedChildren", "unCheckedChildren"])
  ], 2);
}
var SwitchItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-440e72fd"]]);
export { SwitchItem as default };
