import { _ as _export_sfc, c as useAppStore, I as PermissionModeEnum } from "./index.7a39a7ac.js";
import { d as defineComponent, b6 as Divider, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                 */import { u as usePermission } from "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
const _sfc_main = defineComponent({
  name: "CurrentPermissionMode",
  components: { Divider },
  setup() {
    const appStore = useAppStore();
    const permissionMode = computed(() => appStore.getProjectConfig.permissionMode);
    const { togglePermissionMode } = usePermission();
    return {
      permissionMode,
      PermissionModeEnum,
      togglePermissionMode
    };
  }
});
const _hoisted_1 = { class: "mt-2" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Divider = resolveComponent("Divider");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_a_button, { type: "link" }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.permissionMode === _ctx.PermissionModeEnum.BACK ? "\u540E\u53F0\u6743\u9650\u6A21\u5F0F" : "\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"), 1)
      ]),
      _: 1
    }),
    createVNode(_component_a_button, {
      class: "ml-4",
      onClick: _ctx.togglePermissionMode,
      type: "primary"
    }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_Divider)
  ]);
}
var CurrentPermissionMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentPermissionMode as default };
