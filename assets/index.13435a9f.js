import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.e23996e1.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.b0eda660.js";
import SecureSetting from "./SecureSetting.a2c885d1.js";
import AccountBind from "./AccountBind.cdeb0a5d.js";
import MsgNotify from "./MsgNotify.0050a089.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import "./useRootSetting.af8c12e8.js";
/* empty css                 */import "./BasicForm.f937f757.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.de30982b.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.655f0e3f.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.7cdd2294.js";
import "./usePermission.47834b00.js";
import "./useTabs.bdcab0ff.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.53a6461c.js";
import "./base64Conver.08b9f4ec.js";
import "./index.c6a83fc1.js";
import "./useForm.18827a13.js";
import "./index.97386804.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.4556f6d4.js";
import "./upload.976dcada.js";
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
