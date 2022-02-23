import { B as defineComponent, bs as Switch, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, K as toDisplayString, w as createVNode, a5 as mergeProps, L as normalizeClass } from "./vendor.7c0ada15.js";
/* empty css                  */import { _ as _export_sfc, a as useDesign, b as useI18n } from "./index.f009a4b5.js";
import { b as baseHandler } from "./index.faa02325.js";
import "./index.17bb2826.js";
/* empty css                 *//* empty css                 */import "./index.8d00282f.js";
import "./index.94a6100e.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5a701648.js";
/* empty css                 */import "./lock.3654509f.js";
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
