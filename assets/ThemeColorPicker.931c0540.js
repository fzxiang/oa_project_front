import { d as useDesign } from "./index.999485f7.js";
import { b as baseHandler } from "./index.f607528d.js";
import { _ as _export_sfc } from "./index.582c447f.js";
import { d as defineComponent, by as CheckOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, X as normalizeClass, a3 as normalizeStyle, f as createVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.9c256099.js";
import "./index.cc4eee22.js";
/* empty css                 */import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.e43bc999.js";
import "./index.19f42a99.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.37926036.js";
/* empty css                 */import "./useTabs.b2e3f296.js";
import "./lock.64cae5b8.js";
import "./index.819c30b9.js";
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
