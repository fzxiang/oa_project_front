import { B as defineComponent, bk as Tabs, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, F as createElementBlock, aq as renderList, am as resolveDynamicComponent, ac as Fragment, L as normalizeClass } from "./vendor.7c0ada15.js";
/* empty css                 */import { _ as _export_sfc, S as ScrollContainer } from "./index.a74bdb7c.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.39684656.js";
import SecureSetting from "./SecureSetting.c12f6692.js";
import AccountBind from "./AccountBind.92da34e0.js";
import MsgNotify from "./MsgNotify.664b6ade.js";
/* empty css                 */import "./BasicForm.a4670432.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.44c62108.js";
/* empty css                 */import "./index.323d0c2b.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.7980a3dd.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9ed45d.js";
import "./useForm.7940370b.js";
import "./index.367af69a.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.09af7b5b.js";
import "./upload.f68b99b4.js";
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
