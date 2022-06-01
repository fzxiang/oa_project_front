import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.5dccf356.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.f1b656d5.js";
import SecureSetting from "./SecureSetting.844bc7b0.js";
import AccountBind from "./AccountBind.af937261.js";
import MsgNotify from "./MsgNotify.129fa006.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import "./useRootSetting.13d2da37.js";
/* empty css                 */import "./BasicForm.d23fb742.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.54ed2975.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.887225a6.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.08c91988.js";
import "./usePermission.cc442475.js";
import "./useTabs.70cf65e5.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.a353efeb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.55fcb74e.js";
import "./useForm.e6cca252.js";
import "./index.cc89c08c.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.8827876c.js";
import "./upload.2eb993d4.js";
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
