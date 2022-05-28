import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.a3d18deb.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.ccacc2fa.js";
import SecureSetting from "./SecureSetting.97674552.js";
import AccountBind from "./AccountBind.62dbc901.js";
import MsgNotify from "./MsgNotify.1c08f52e.js";
import { _ as _export_sfc } from "./index.6c404263.js";
import "./useRootSetting.aff873bd.js";
/* empty css                 */import "./BasicForm.729218be.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.705b4bcb.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.19462b5e.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.616f0251.js";
import "./usePermission.a730a0f8.js";
import "./useTabs.c67c8382.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.64bdccba.js";
import "./base64Conver.08b9f4ec.js";
import "./index.a5f32e74.js";
import "./useForm.58aadad1.js";
import "./index.ad7a213f.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.a405410d.js";
import "./upload.6f37dbed.js";
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
