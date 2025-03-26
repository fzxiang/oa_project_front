import { d as defineComponent, bO as Alert, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  */import { u as useDrawer } from "./index.ec445d7f.js";
import Drawer1 from "./Drawer1.f169b9b1.js";
import Drawer2 from "./Drawer2.d8185887.js";
import Drawer3 from "./Drawer3.8ca51853.js";
import Drawer4 from "./Drawer4.b9b23db4.js";
import Drawer5 from "./Drawer5.8b2bf73c.js";
import { a as PageWrapper } from "./index.5130582f.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
/* empty css                 */import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
import "./useAttrs.d4bdb35c.js";
import "./BasicForm.bba6a6c9.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.ab6708c9.js";
/* empty css                 */import "./index.70d953ef.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  */import "./index.a55d30ed.js";
import "./usePermission.6cf7b264.js";
import "./useTabs.6f065f0a.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9f696d.js";
import "./useForm.89bb8bd3.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.3baa48d8.js";
const _sfc_main = defineComponent({
  components: { Alert, PageWrapper, Drawer1, Drawer2, Drawer3, Drawer4, Drawer5 },
  setup() {
    const [register1, { openDrawer: openDrawer1, setDrawerProps }] = useDrawer();
    const [register2, { openDrawer: openDrawer2 }] = useDrawer();
    const [register3, { openDrawer: openDrawer3 }] = useDrawer();
    const [register4, { openDrawer: openDrawer4 }] = useDrawer();
    const [register5, { openDrawer: openDrawer5 }] = useDrawer();
    function send() {
      openDrawer4(true, {
        data: "content",
        info: "Info"
      });
    }
    function openDrawerLoading() {
      openDrawer1();
      setDrawerProps({ loading: true });
      setTimeout(() => {
        setDrawerProps({ loading: false });
      }, 2e3);
    }
    return {
      register1,
      openDrawer1,
      register2,
      openDrawer2,
      register3,
      openDrawer3,
      register4,
      register5,
      openDrawer5,
      send,
      openDrawerLoading
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00Drawer ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00Drawer ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00Drawer ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u8BE6\u60C5Drawer ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Drawer1 = resolveComponent("Drawer1");
  const _component_Drawer2 = resolveComponent("Drawer2");
  const _component_Drawer3 = resolveComponent("Drawer3");
  const _component_Drawer4 = resolveComponent("Drawer4");
  const _component_Drawer5 = resolveComponent("Drawer5");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Alert, {
        message: "\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _ctx.openDrawerLoading
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_Alert, {
        message: "\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openDrawer2(true))
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }),
      createVNode(_component_Alert, {
        message: "\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openDrawer3(true))
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }),
      createVNode(_component_Alert, {
        message: "\u5185\u5916\u6570\u636E\u4EA4\u4E92",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _ctx.send
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_Alert, {
        message: "\u8BE6\u60C5\u9875\u6A21\u5F0F",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.openDrawer5(true))
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }),
      createVNode(_component_Drawer1, { onRegister: _ctx.register1 }, null, 8, ["onRegister"]),
      createVNode(_component_Drawer2, { onRegister: _ctx.register2 }, null, 8, ["onRegister"]),
      createVNode(_component_Drawer3, { onRegister: _ctx.register3 }, null, 8, ["onRegister"]),
      createVNode(_component_Drawer4, { onRegister: _ctx.register4 }, null, 8, ["onRegister"]),
      createVNode(_component_Drawer5, { onRegister: _ctx.register5 }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
