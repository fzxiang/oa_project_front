import { _ as _export_sfc, q as useUserStore, a as useI18n } from "./index.59040ad2.js";
import { d as useDesign } from "./index.32a28c82.js";
import { B as BasicModal, a as useModalInner } from "./index.14305a79.js";
import { B as BasicForm } from "./BasicForm.b32b4a29.js";
import { u as useForm } from "./useForm.6a32fff8.js";
import { u as useLockStore } from "./lock.ae18b871.js";
import { h as headerImg } from "./header.d801b988.js";
import { d as defineComponent, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, X as normalizeClass, W as toDisplayString, f as createVNode, aj as createTextVNode, aa as mergeProps } from "./vendor.faf2de98.js";
import "./useRootSetting.fdc681cf.js";
import "./useAttrs.d4bdb35c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.cc11ba34.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.22e9b79c.js";
import "./usePermission.5e04722b.js";
import "./useTabs.a7fba09a.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.b28cb32a.js";
import "./base64Conver.08b9f4ec.js";
import "./index.e8738bd1.js";
var LockModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LockModal",
  components: { BasicModal, BasicForm },
  setup() {
    const { t } = useI18n();
    const { prefixCls } = useDesign("header-lock-modal");
    const userStore = useUserStore();
    const lockStore = useLockStore();
    const getRealName = computed(() => {
      var _a;
      return (_a = userStore.getUserInfo) == null ? void 0 : _a.realName;
    });
    const [register, { closeModal }] = useModalInner();
    const [registerForm, { validateFields, resetFields }] = useForm({
      showActionButtonGroup: false,
      schemas: [
        {
          field: "password",
          label: t("layout.header.lockScreenPassword"),
          component: "InputPassword",
          required: true
        }
      ]
    });
    async function handleLock() {
      const values = await validateFields();
      const password = values.password;
      closeModal();
      lockStore.setLockInfo({
        isLock: true,
        pwd: password
      });
      await resetFields();
    }
    const avatar = computed(() => {
      const { avatar: avatar2 } = userStore.getUserInfo;
      return avatar2 || headerImg;
    });
    return {
      t,
      prefixCls,
      getRealName,
      register,
      registerForm,
      handleLock,
      avatar
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps({
    footer: null,
    title: _ctx.t("layout.header.lockScreen")
  }, _ctx.$attrs, {
    class: _ctx.prefixCls,
    onRegister: _ctx.register
  }), {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__entry`)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}__header`)
        }, [
          createBaseVNode("img", {
            src: _ctx.avatar,
            class: normalizeClass(`${_ctx.prefixCls}__header-img`)
          }, null, 10, _hoisted_1),
          createBaseVNode("p", {
            class: normalizeClass(`${_ctx.prefixCls}__header-name`)
          }, toDisplayString(_ctx.getRealName), 3)
        ], 2),
        createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, null, 8, ["onRegister"]),
        createBaseVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}__footer`)
        }, [
          createVNode(_component_a_button, {
            type: "primary",
            block: "",
            class: "mt-2",
            onClick: _ctx.handleLock
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.t("layout.header.lockScreenBtn")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ], 2)
      ], 2)
    ]),
    _: 1
  }, 16, ["title", "class", "onRegister"]);
}
var LockModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LockModal as default };
