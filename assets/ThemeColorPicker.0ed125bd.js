import { _ as _export_sfc, a as useDesign } from "./index.4f9aa98a.js";
import { b as baseHandler } from "./index.0e352212.js";
import { B as defineComponent, bw as CheckOutlined, a1 as resolveComponent, D as openBlock, F as createElementBlock, ac as Fragment, aq as renderList, L as normalizeClass, Y as normalizeStyle, w as createVNode } from "./vendor.7c0ada15.js";
import "./index.b254afb3.js";
/* empty css                 *//* empty css                 */import "./index.726c9f60.js";
import "./index.6d764e70.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.6ae6f6a6.js";
/* empty css                 */import "./lock.024318e2.js";
var ThemeColorPicker_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "ThemeColorPicker",
  components: { CheckOutlined },
  props: {
    colorList: {
      type: Array,
      defualt: []
    },
    event: {
      type: Number
    },
    def: {
      type: String
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("setting-theme-picker");
    function handleClick(color) {
      props.event && baseHandler(props.event, color);
    }
    return {
      prefixCls,
      handleClick
    };
  }
});
const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckOutlined = resolveComponent("CheckOutlined");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.colorList || [], (color) => {
      return openBlock(), createElementBlock("span", {
        key: color,
        onClick: ($event) => _ctx.handleClick(color),
        class: normalizeClass([
          `${_ctx.prefixCls}__item`,
          {
            [`${_ctx.prefixCls}__item--active`]: _ctx.def === color
          }
        ]),
        style: normalizeStyle({ background: color })
      }, [
        createVNode(_component_CheckOutlined)
      ], 14, _hoisted_1);
    }), 128))
  ], 2);
}
var ThemeColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ThemeColorPicker as default };
