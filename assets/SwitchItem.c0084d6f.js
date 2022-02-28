import { d as defineComponent, bu as Switch, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                  */import { d as useDesign } from "./index.be8bc98d.js";
import { _ as _export_sfc, a as useI18n } from "./index.327c7452.js";
import { b as baseHandler } from "./index.4fef767d.js";
import "./useRootSetting.40ea27f7.js";
import "./index.cf2d1887.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0b2a2b92.js";
import "./index.3a3d36e2.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.94ef1254.js";
/* empty css                 */import "./useTabs.ce8e3a49.js";
import "./lock.8e3229f9.js";
import "./index.62f5bb2b.js";
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
