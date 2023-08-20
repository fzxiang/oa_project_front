import { d as useDesign } from "./index.7be4058a.js";
import { b as baseHandler } from "./index.db89d9af.js";
import { _ as _export_sfc } from "./index.b67cb216.js";
import { d as defineComponent, by as CheckOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, X as normalizeClass, a3 as normalizeStyle, f as createVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.0e80d1b6.js";
import "./index.7458d76c.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0f3ec7d2.js";
import "./index.227302f2.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.6125eacd.js";
/* empty css                 */import "./useTabs.bf5d7fd8.js";
import "./lock.dbd00376.js";
import "./index.c17c02e4.js";
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
