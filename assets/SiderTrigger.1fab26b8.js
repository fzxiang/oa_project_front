import { d as defineComponent, cF as DoubleRightOutlined, cU as DoubleLeftOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, c as createBlock, aC as withModifiers } from "./vendor.faf2de98.js";
import { i as useMenuSetting } from "./index.be8bc98d.js";
import { _ as _export_sfc } from "./index.327c7452.js";
import "./useRootSetting.40ea27f7.js";
const _sfc_main = defineComponent({
  name: "SiderTrigger",
  components: { DoubleRightOutlined, DoubleLeftOutlined },
  setup() {
    const { getCollapsed, toggleCollapsed } = useMenuSetting();
    return { getCollapsed, toggleCollapsed };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DoubleRightOutlined = resolveComponent("DoubleRightOutlined");
  const _component_DoubleLeftOutlined = resolveComponent("DoubleLeftOutlined");
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.toggleCollapsed && _ctx.toggleCollapsed(...args), ["stop"]))
  }, [
    _ctx.getCollapsed ? (openBlock(), createBlock(_component_DoubleRightOutlined, { key: 0 })) : (openBlock(), createBlock(_component_DoubleLeftOutlined, { key: 1 }))
  ]);
}
var SiderTrigger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { SiderTrigger as default };
