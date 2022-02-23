import { B as defineComponent, bk as Tabs, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, F as createElementBlock, aq as renderList, am as resolveDynamicComponent, ac as Fragment, L as normalizeClass } from "./vendor.7c0ada15.js";
/* empty css                 */import { _ as _export_sfc, S as ScrollContainer } from "./index.563adeec.js";
import { c as settingList } from "./data.a0e55b88.js";
import BaseSetting from "./BaseSetting.a27c1873.js";
import SecureSetting from "./SecureSetting.249e39d7.js";
import AccountBind from "./AccountBind.6ac5cd2c.js";
import MsgNotify from "./MsgNotify.3ed2cb4f.js";
/* empty css                 */import "./BasicForm.dac3a60f.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.c8b7939e.js";
/* empty css                 */import "./index.5b8c94ea.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.e339f464.js";
import "./base64Conver.08b9f4ec.js";
import "./index.21ba0761.js";
import "./useForm.7eecdd87.js";
import "./index.37100f88.js";
/* empty css                  */import "./header.d801b988.js";
import "./account.1017b202.js";
import "./upload.b82a09e1.js";
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
