import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.69692b74.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.d72a489a.js";
import SecureSetting from "./SecureSetting.4ad9f034.js";
import AccountBind from "./AccountBind.7de418da.js";
import MsgNotify from "./MsgNotify.0feb9ce6.js";
import { _ as _export_sfc } from "./index.e7b2878b.js";
import "./useRootSetting.63072823.js";
/* empty css                 */import "./BasicForm.261143ca.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.638502e4.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.c1e8e80f.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.5ce4970f.js";
import "./usePermission.109c4b87.js";
import "./useTabs.09edbb4d.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.0d4c5faf.js";
import "./base64Conver.08b9f4ec.js";
import "./index.02a30961.js";
import "./useForm.4cd00726.js";
import "./index.5ee1377b.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.20f42b17.js";
import "./upload.4b5803e3.js";
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
