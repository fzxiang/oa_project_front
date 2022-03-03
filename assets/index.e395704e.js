import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.f8ad7e32.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.f82a0a9b.js";
import SecureSetting from "./SecureSetting.0fca95b1.js";
import AccountBind from "./AccountBind.8fceff5e.js";
import MsgNotify from "./MsgNotify.7b7a0b49.js";
import { _ as _export_sfc } from "./index.9790552f.js";
import "./useRootSetting.36606a1c.js";
/* empty css                 */import "./BasicForm.0ec394b9.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.b1a33e7f.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.7ede3b48.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.25ce6cda.js";
import "./usePermission.4f36844b.js";
import "./useTabs.8475cac7.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e5aed721.js";
import "./base64Conver.08b9f4ec.js";
import "./index.9cebab9d.js";
import "./useForm.1ef0ba4b.js";
import "./index.29f8abb9.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.222f6fb1.js";
import "./upload.99071535.js";
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
