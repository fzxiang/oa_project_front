import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.4f32056b.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.8328cf88.js";
import SecureSetting from "./SecureSetting.78bf8611.js";
import AccountBind from "./AccountBind.18036600.js";
import MsgNotify from "./MsgNotify.a74cba23.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                 */import "./BasicForm.3082faf1.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.33861ed4.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.ddb6a176.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.acc04ae7.js";
import "./useForm.8431ddf4.js";
import "./index.bc3da481.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.89fa3287.js";
import "./upload.a6fa2f18.js";
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