import { _ as _export_sfc, F as __vitePreload, p as propTypes, a as useDesign, f as useUserStore, b as useI18n, o as openWindow } from "./index.563adeec.js";
import { B as defineComponent, aC as Dropdown, aB as Menu, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, a2 as createBlock, ae as createCommentVNode, J as createBaseVNode, L as normalizeClass, K as toDisplayString, ac as Fragment } from "./vendor.7c0ada15.js";
import { D as DOC_URL } from "./siteSetting.c485f07c.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.026375e3.js";
import { b as useModal } from "./index.5b8c94ea.js";
import { h as headerImg } from "./header.d801b988.js";
import "./index.25917f17.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.3d5ad6f3.js";
/* empty css                 *//* empty css                 */import "./lock.feeb5862.js";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "UserDropdown",
  components: {
    Dropdown,
    Menu,
    MenuItem: createAsyncComponent(() => __vitePreload(() => import("./DropMenuItem.f63148cc.js"), true ? ["assets/DropMenuItem.f63148cc.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.563adeec.js","assets/index.4fd0d07c.css"] : void 0)),
    MenuDivider: Menu.Divider,
    LockAction: createAsyncComponent(() => __vitePreload(() => import("./LockModal.9a977e47.js"), true ? ["assets/LockModal.9a977e47.js","assets/LockModal.d34ea5dd.css","assets/index.b770eec7.css","assets/index.20f4923c.css","assets/index.8c4bdb81.css","assets/index.fb702985.css","assets/index.7850813b.css","assets/index.c5cfd1c2.css","assets/index.5f0c7a1e.css","assets/index.1b56d25a.css","assets/index.6c2b6722.css","assets/index.a0941710.css","assets/index.a2686d54.css","assets/index.bec1506c.css","assets/index.386bfc5f.css","assets/index.563adeec.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.5b8c94ea.js","assets/index.fa5fb104.css","assets/useWindowSizeFn.07387e97.js","assets/BasicForm.dac3a60f.js","assets/BasicForm.33d6ac20.css","assets/index.c8b7939e.js","assets/index.d8b0d0fd.css","assets/uuid.2b29000c.js","assets/download.e339f464.js","assets/base64Conver.08b9f4ec.js","assets/index.21ba0761.js","assets/index.5cc747aa.css","assets/useForm.7eecdd87.js","assets/lock.feeb5862.js","assets/header.d801b988.js"] : void 0))
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
