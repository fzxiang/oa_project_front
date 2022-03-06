import { H as CollapseContainer } from "./index.999485f7.js";
import { _ as _export_sfc, F as useMessage } from "./index.582c447f.js";
import { a as PageWrapper } from "./index.45878fb6.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.9c256099.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.37926036.js";
const _sfc_main = defineComponent({
  components: { CollapseContainer, PageWrapper },
  setup() {
    const {
      createMessage,
      createConfirm,
      createSuccessModal,
      createInfoModal,
      createErrorModal,
      createWarningModal,
      notification
    } = useMessage();
    const { info, success, warning, error } = createMessage;
    function handleLoading() {
      createMessage.loading("Loading...");
    }
    function handleConfirm(type) {
      createConfirm({
        iconType: type,
        title: "Tip",
        content: "content message..."
      });
    }
    function handleSuccessModal() {
      createSuccessModal({ title: "Tip", content: "content message..." });
    }
    function handleErrorModal() {
      createErrorModal({ title: "Tip", content: "content message..." });
    }
    function handleWarningModal() {
      createWarningModal({ title: "Tip", content: "content message..." });
    }
    function handleInfoModal() {
      createInfoModal({ title: "Tip", content: "content message..." });
    }
    function handleNotify() {
      notification.success({
        message: "Tip",
        description: "content message..."
      });
    }
    return {
      infoMsg: info,
      successMsg: success,
      warningMsg: warning,
      errorMsg: error,
      handleLoading,
      handleConfirm,
      handleSuccessModal,
      handleErrorModal,
      handleWarningModal,
      handleInfoModal,
      handleNotify
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Info ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Success ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Warning ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Error ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Loading ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Info ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Warning ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Success ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Error ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Info ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Success ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Error ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Warning ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Success ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u6D88\u606F\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 bg-white rounded-md",
        title: "Message"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.infoMsg("Info message")),
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.successMsg("Success message")),
            class: "mr-2",
            color: "success"
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.warningMsg("Warning message")),
            class: "mr-2",
            color: "warning"
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.errorMsg("Error message")),
            class: "mr-2",
            color: "error"
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _ctx.handleLoading,
            class: "mr-2",
            type: "primary"
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 mt-5 bg-white rounded-md",
        title: "Comfirm"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleConfirm("info")),
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleConfirm("warning")),
            color: "warning",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[6] || (_cache[6] = ($event) => _ctx.handleConfirm("success")),
            color: "success",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleConfirm("error")),
            color: "error",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 mt-5 bg-white rounded-md",
        title: "Modal"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            onClick: _ctx.handleInfoModal,
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            onClick: _ctx.handleSuccessModal,
            color: "success",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            onClick: _ctx.handleErrorModal,
            color: "error",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            onClick: _ctx.handleWarningModal,
            color: "warning",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 mt-5 bg-white rounded-md",
        title: "Notification \u7528\u6CD5\u4E0E\u4E0A\u9762\u4E00\u81F4"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            onClick: _ctx.handleNotify,
            color: "success",
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
