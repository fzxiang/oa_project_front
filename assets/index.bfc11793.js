import { _ as _export_sfc, X as __vitePreload, q as useUserStore, a as useI18n, a5 as openWindow } from "./index.59040ad2.js";
import { d as defineComponent, aF as Dropdown, aE as Menu, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, c as createBlock, ai as createCommentVNode, V as createBaseVNode, X as normalizeClass, W as toDisplayString, ag as Fragment } from "./vendor.faf2de98.js";
import { D as DOC_URL } from "./siteSetting.c485f07c.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.aa9cb969.js";
import { p as propTypes, d as useDesign } from "./index.32a28c82.js";
import { b as useModal } from "./index.14305a79.js";
import { h as headerImg } from "./header.d801b988.js";
import "./useRootSetting.fdc681cf.js";
import "./index.adb341ab.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.537cfdd7.js";
/* empty css                 *//* empty css                 */import "./useTabs.a7fba09a.js";
import "./lock.ae18b871.js";
import "./useAttrs.d4bdb35c.js";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "UserDropdown",
  components: {
    Dropdown,
    Menu,
    MenuItem: createAsyncComponent(() => __vitePreload(() => import("./DropMenuItem.d1857725.js"), true ? ["assets/DropMenuItem.d1857725.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.32a28c82.js","assets/index.8e026f0f.css","assets/index.59040ad2.js","assets/useRootSetting.fdc681cf.js"] : void 0)),
    MenuDivider: Menu.Divider,
    LockAction: createAsyncComponent(() => __vitePreload(() => import("./LockModal.bc0dbd5b.js"), true ? ["assets/LockModal.bc0dbd5b.js","assets/LockModal.d34ea5dd.css","assets/index.b770eec7.css","assets/index.20f4923c.css","assets/index.8c4bdb81.css","assets/index.fb702985.css","assets/index.7850813b.css","assets/index.c5cfd1c2.css","assets/index.5f0c7a1e.css","assets/index.1b56d25a.css","assets/index.6c2b6722.css","assets/index.a0941710.css","assets/index.a2686d54.css","assets/index.bec1506c.css","assets/index.386bfc5f.css","assets/index.59040ad2.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.32a28c82.js","assets/index.8e026f0f.css","assets/useRootSetting.fdc681cf.js","assets/index.14305a79.js","assets/index.fa5fb104.css","assets/useAttrs.d4bdb35c.js","assets/useWindowSizeFn.7703d3fa.js","assets/BasicForm.b32b4a29.js","assets/BasicForm.33d6ac20.css","assets/index.cc11ba34.js","assets/index.d8b0d0fd.css","assets/index.22e9b79c.js","assets/usePermission.5e04722b.js","assets/useTabs.a7fba09a.js","assets/uuid.2b29000c.js","assets/download.b28cb32a.js","assets/base64Conver.08b9f4ec.js","assets/index.e8738bd1.js","assets/index.5cc747aa.css","assets/useForm.6a32fff8.js","assets/lock.ae18b871.js","assets/header.d801b988.js"] : void 0))
  },
  props: {
    theme: propTypes.oneOf(["dark", "light"])
  },
  setup() {
    const { prefixCls } = useDesign("header-user-dropdown");
    const { t } = useI18n();
    const { getShowDoc, getUseLockPage } = useHeaderSetting();
    const userStore = useUserStore();
    const getUserInfo = computed(() => {
      const { realName = "", avatar, desc } = userStore.getUserInfo || {};
      return { realName, avatar: avatar || headerImg, desc };
    });
    const [register, { openModal }] = useModal();
    function handleLock() {
      openModal(true);
    }
    function handleLoginOut() {
      userStore.confirmLoginOut();
    }
    function openDoc() {
      openWindow(DOC_URL);
    }
    function handleMenuClick(e) {
      switch (e.key) {
        case "logout":
          handleLoginOut();
          break;
        case "doc":
          openDoc();
          break;
        case "lock":
          handleLock();
          break;
      }
    }
    return {
      prefixCls,
      t,
      getUserInfo,
      handleMenuClick,
      getShowDoc,
      register,
      getUseLockPage
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_MenuDivider = resolveComponent("MenuDivider");
  const _component_Menu = resolveComponent("Menu");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_LockAction = resolveComponent("LockAction");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Dropdown, {
      placement: "bottomLeft",
      overlayClassName: `${_ctx.prefixCls}-dropdown-overlay`
    }, {
      overlay: withCtx(() => [
        createVNode(_component_Menu, { onClick: _ctx.handleMenuClick }, {
          default: withCtx(() => [
            _ctx.getUseLockPage ? (openBlock(), createBlock(_component_MenuItem, {
              key: "lock",
              text: _ctx.t("layout.header.tooltipLock"),
              icon: "ion:lock-closed-outline"
            }, null, 8, ["text"])) : createCommentVNode("", true),
            _ctx.getShowDoc ? (openBlock(), createBlock(_component_MenuDivider, { key: 1 })) : createCommentVNode("", true),
            createVNode(_component_MenuItem, {
              key: "logout",
              text: _ctx.t("layout.header.dropdownItemLoginOut"),
              icon: "ion:power-outline"
            }, null, 8, ["text"])
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass([[_ctx.prefixCls, `${_ctx.prefixCls}--${_ctx.theme}`], "flex"])
        }, [
          createBaseVNode("img", {
            class: normalizeClass(`${_ctx.prefixCls}__header`),
            src: _ctx.getUserInfo.avatar
          }, null, 10, _hoisted_1),
          createBaseVNode("span", {
            class: normalizeClass(`${_ctx.prefixCls}__info hidden md:block`)
          }, [
            createBaseVNode("span", {
              class: normalizeClass([`${_ctx.prefixCls}__name  `, "truncate"])
            }, toDisplayString(_ctx.getUserInfo.realName), 3)
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["overlayClassName"]),
    createVNode(_component_LockAction, { onRegister: _ctx.register }, null, 8, ["onRegister"])
  ], 64);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
