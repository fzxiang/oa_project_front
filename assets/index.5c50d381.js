import { d as defineComponent, bm as Tabs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, ap as resolveDynamicComponent, ag as Fragment, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                 */import { S as ScrollContainer } from "./index.a2736d3e.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.c489d01c.js";
import SecureSetting from "./SecureSetting.4ed8be57.js";
import AccountBind from "./AccountBind.aa953935.js";
import MsgNotify from "./MsgNotify.8a747a20.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import "./useRootSetting.bd6c6dd4.js";
/* empty css                 */import "./BasicForm.9f05b372.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.22606648.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.ebdec3e2.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.57a89e8a.js";
import "./usePermission.9804cee4.js";
import "./useTabs.6eccdc33.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
import "./index.74e6c783.js";
import "./useForm.9ebef8bf.js";
import "./index.5fe4749b.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.f45bd5ac.js";
import "./upload.b6c45aa3.js";
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
