import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.8e8d3248.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.28a68a6f.js";
import SecureSetting from "./SecureSetting.47489139.js";
import AccountBind from "./AccountBind.ab6e7e11.js";
import MsgNotify from "./MsgNotify.ffdd51ed.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import "./useRootSetting.cdafd62c.js";
/* empty css                 */import "./BasicForm.79a1fa4e.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.078ba8da.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.2d2e5b53.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.65b7d1eb.js";
import "./usePermission.a90974d3.js";
import "./useTabs.90482ef5.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
import "./index.3cb89c42.js";
import "./useForm.c5eb71b8.js";
import "./index.f8aa96c4.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.84e533f6.js";
import "./upload.ce5201f1.js";
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
