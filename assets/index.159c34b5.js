import { d as defineComponent, bO as Alert, bp as Space, aW as shallowRef, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, ap as resolveDynamicComponent, a7 as nextTick, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import { b as useModal } from "./index.54165f05.js";
import Modal1 from "./Modal1.cfd76049.js";
import Modal2 from "./Modal2.3e7adbc0.js";
import Modal3 from "./Modal3.7a4ed7bc.js";
import Modal4 from "./Modal4.1cdcc56c.js";
import { a as PageWrapper } from "./index.b9e9b22c.js";
import { _ as _export_sfc } from "./index.ea7eac1d.js";
import "./useRootSetting.c14ffa63.js";
import "./useAttrs.d4bdb35c.js";
import "./index.54e5dd4b.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./BasicForm.5721ba67.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.fcfce53a.js";
/* empty css                  *//* empty css                  */import "./index.b023b642.js";
import "./usePermission.357026dd.js";
import "./useTabs.933caa4a.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.3d627ea1.js";
import "./base64Conver.08b9f4ec.js";
import "./index.a71380d8.js";
import "./useForm.0209ee0f.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.fd09079c.js";
const _sfc_main = defineComponent({
  components: { Alert, Modal1, Modal2, Modal3, Modal4, PageWrapper, ASpace: Space },
  setup() {
    const currentModal = shallowRef(null);
    const [register1, { openModal: openModal1 }] = useModal();
    const [register2, { openModal: openModal2 }] = useModal();
    const [register3, { openModal: openModal3 }] = useModal();
    const [register4, { openModal: openModal4 }] = useModal();
    const modalVisible = ref(false);
    const userData = ref(null);
    function send() {
      openModal4(true, {
        data: "content",
        info: "Info"
      });
    }
    function openModalLoading() {
      openModal1(true);
    }
    function openTargetModal(index2) {
      switch (index2) {
        case 1:
          currentModal.value = Modal1;
          break;
        case 2:
          currentModal.value = Modal2;
          break;
        case 3:
          currentModal.value = Modal3;
          break;
        default:
          currentModal.value = Modal4;
          break;
      }
      nextTick(() => {
        userData.value = { data: Math.random(), info: "Info222" };
        modalVisible.value = true;
      });
    }
    return {
      register1,
      openModal1,
      register2,
      openModal2,
      register3,
      openModal3,
      register4,
      openModal4,
      modalVisible,
      userData,
      openTargetModal,
      send,
      currentModal,
      openModalLoading
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A97 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A97 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A971 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A972 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A973 ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u5F39\u7A974 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_a_space = resolveComponent("a-space");
  const _component_Modal1 = resolveComponent("Modal1");
  const _component_Modal2 = resolveComponent("Modal2");
  const _component_Modal3 = resolveComponent("Modal3");
  const _component_Modal4 = resolveComponent("Modal4");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Alert, {
        message: "\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable\n    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _ctx.openModalLoading
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_Alert, {
        message: "\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _ctx.openModal2
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_Alert, {
        message: "\u81EA\u9002\u5E94\u9AD8\u5EA6",
        "show-icon": ""
      }),
      createVNode(_component_a_button, {
        type: "primary",
        class: "my-4",
        onClick: _ctx.openModal3
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["onClick"]),
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
        message: "\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97",
        "show-icon": ""
      }),
      createVNode(_component_a_space, null, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            class: "my-4",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openTargetModal(1))
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            type: "primary",
            class: "my-4",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openTargetModal(2))
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            type: "primary",
            class: "my-4",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.openTargetModal(3))
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            type: "primary",
            class: "my-4",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.openTargetModal(4))
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.currentModal), {
        visible: _ctx.modalVisible,
        "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => _ctx.modalVisible = $event),
        userData: _ctx.userData
      }, null, 8, ["visible", "userData"])),
      createVNode(_component_Modal1, {
        onRegister: _ctx.register1,
        minHeight: 100
      }, null, 8, ["onRegister"]),
      createVNode(_component_Modal2, { onRegister: _ctx.register2 }, null, 8, ["onRegister"]),
      createVNode(_component_Modal3, { onRegister: _ctx.register3 }, null, 8, ["onRegister"]),
      createVNode(_component_Modal4, { onRegister: _ctx.register4 }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
