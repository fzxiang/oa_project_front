import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.71897494.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.96110be3.js";
import SecureSetting from "./SecureSetting.e36f19a7.js";
import AccountBind from "./AccountBind.f8906cb0.js";
import MsgNotify from "./MsgNotify.3a762328.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
import "./useRootSetting.2943f044.js";
/* empty css                 */import "./BasicForm.b9e70f2c.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.a0bf2552.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.a1fdeced.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
import "./useForm.ef3314e3.js";
import "./index.e223ce45.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.01bf7908.js";
import "./upload.0f00ea3d.js";
/* empty css                  */var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: {
    ScrollContainer,
    Tabs,
    TabPane: Tabs.TabPane,
    BaseSetting,
    SecureSetting,
    AccountBind,
    MsgNotify
  },
  setup() {
    return {
      prefixCls: "account-setting",
      settingList,
      tabBarStyle: {
        width: "220px"
      }
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TabPane = resolveComponent("TabPane");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  return openBlock(), createBlock(_component_ScrollContainer, null, {
    default: withCtx(() => [
      createBaseVNode("div", {
        ref: "wrapperRef",
        class: normalizeClass(_ctx.prefixCls)
      }, [
        createVNode(_component_Tabs, {
          "tab-position": "left",
          tabBarStyle: _ctx.tabBarStyle
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.settingList, (item) => {
              return openBlock(), createBlock(_component_TabPane, {
                key: item.key,
                tab: item.name
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                ]),
                _: 2
              }, 1032, ["tab"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["tabBarStyle"])
      ], 2)
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
