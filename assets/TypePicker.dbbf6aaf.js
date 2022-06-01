import { d as defineComponent, ae as Tooltip, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, X as normalizeClass, c as createBlock, e as withCtx, V as createBaseVNode, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
import { d as useDesign } from "./index.5dccf356.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import "./useRootSetting.13d2da37.js";
var TypePicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "MenuTypePicker",
  components: { Tooltip },
  props: {
    menuTypeList: {
      type: Array,
      defualt: () => []
    },
    handler: {
      type: Function,
      default: () => ({})
    },
    def: {
      type: String,
      default: ""
    }
  },
  setup() {
    const { prefixCls } = useDesign("setting-menu-type-picker");
    return {
      prefixCls
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-119d0732"), n = n(), popScopeId(), n);
const _hoisted_1 = ["onClick"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mix-sidebar" }, null, -1));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuTypeList || [], (item) => {
      return openBlock(), createBlock(_component_Tooltip, {
        key: item.title,
        title: item.title,
        placement: "bottom"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            onClick: ($event) => _ctx.handler(item),
            class: normalizeClass([
              `${_ctx.prefixCls}__item`,
              `${_ctx.prefixCls}__item--${item.type}`,
              {
                [`${_ctx.prefixCls}__item--active`]: _ctx.def === item.type
              }
            ])
          }, _hoisted_3, 10, _hoisted_1)
        ]),
        _: 2
      }, 1032, ["title"]);
    }), 128))
  ], 2);
}
var TypePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-119d0732"]]);
export { TypePicker as default };
