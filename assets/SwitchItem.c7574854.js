import { d as defineComponent, bu as Switch, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, W as toDisplayString, f as createVNode, aa as mergeProps, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                  */import { d as useDesign } from "./index.a2736d3e.js";
import { _ as _export_sfc, a as useI18n } from "./index.20a8e034.js";
import { b as baseHandler } from "./index.50e22903.js";
import "./useRootSetting.bd6c6dd4.js";
import "./index.740c21e4.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.896205b1.js";
import "./index.7709f7b7.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4cc144f6.js";
/* empty css                 */import "./useTabs.6eccdc33.js";
import "./lock.48f82a20.js";
import "./index.a88e505e.js";
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
