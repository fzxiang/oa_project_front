var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a;
import { c as useAppStore, M as MenuModeEnum, m as MenuTypeEnum, n as TriggerEnum, S as SIDE_BAR_SHOW_TIT_MINI_WIDTH, o as SIDE_BAR_MINI_WIDTH, _ as _export_sfc, q as useUserStore, u as useGlobSetting, t as useGo, v as PageEnum, w as prefixCls, x as isString, y as isFunction, z as getPopupContainer, A as isArray, B as withInstall, C as isUnDef, D as isDef, a as useI18n, F as useMessage, G as isServer$1, H as transformMenuModule, I as PermissionModeEnum, r as router, J as isUrl, K as useAppStoreWithOut, L as usePermissionStore, N as filter, O as getAllParentPath, Q as forEach, U as useLocaleStoreWithOut, V as i18n, W as loadLocalePool, X as __vitePreload, Y as setHtmlPageLang, Z as localeList, T as ThemeEnum } from "./index.91073af9.js";
import { u as useRouter, O as computed, b as unref, Q as ref, d as defineComponent, o as openBlock, R as createElementBlock, S as withDirectives, T as vShow, V as createBaseVNode, W as toDisplayString, X as normalizeClass, Y as pushScopeId, Z as popScopeId, _ as inject, $ as reactive, a0 as readonly, a1 as provide, a2 as toRefs, a3 as normalizeStyle, a4 as Iconify$1, a5 as R, w as watch, a6 as onMounted, a7 as nextTick, r as resolveComponent, c as createBlock, a8 as Transition, a9 as TransitionGroup, f as createVNode, aa as mergeProps, ab as upperFirst$1, e as withCtx, ac as renderSlot, ad as toHandlers, ae as Tooltip, af as InfoCircleOutlined, ag as Fragment, ah as useSlots, ai as createCommentVNode, aj as createTextVNode, ak as index, al as Skeleton, am as getCurrentInstance, an as onUnmounted, N as h, ao as onBeforeUnmount, ap as resolveDynamicComponent, aq as watchEffect, ar as toRef, I as Input, as as renderList, at as Popover, au as Pagination, av as Empty, aw as useDebounceFn, ax as onBeforeUpdate, ay as pathToRegexp, az as onBeforeMount, A as cloneDeep, aA as onKeyStroke, aB as SearchOutlined, aC as withModifiers, aD as Teleport, aE as Menu, aF as Dropdown$1, k as omit, aG as normalizeProps, aH as createSlots, aI as Popconfirm, aJ as loadDarkThemeCss, aK as darkCssIsReady } from "./vendor.faf2de98.js";
import { c as createBreakpointListen, u as useTimeoutFn, a as useRootSetting } from "./useRootSetting.32bfb7e7.js";
var LogoImg = "/assets/logo.63028018.png";
const useFullContent = () => {
  const appStore = useAppStore();
  const router2 = useRouter();
  const { currentRoute } = router2;
  const getFullContent = computed(() => {
    const route = unref(currentRoute);
    const query = route.query;
    if (query && Reflect.has(query, "__full__")) {
      return true;
    }
    return appStore.getProjectConfig.fullContent;
  });
  return { getFullContent };
};
const mixSideHasChildren = ref(false);
function useMenuSetting() {
  const { getFullContent: fullContent } = useFullContent();
  const appStore = useAppStore();
  const getShowSidebar = computed(() => {
    return unref(getSplit) || unref(getShowMenu) && unref(getMenuMode) !== MenuModeEnum.HORIZONTAL && !unref(fullContent);
  });
  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);
  const getMenuType = computed(() => appStore.getMenuSetting.type);
  const getMenuMode = computed(() => appStore.getMenuSetting.mode);
  const getMenuFixed = computed(() => appStore.getMenuSetting.fixed);
  const getShowMenu = computed(() => appStore.getMenuSetting.show);
  const getMenuHidden = computed(() => appStore.getMenuSetting.hidden);
  const getMenuWidth = computed(() => appStore.getMenuSetting.menuWidth);
  const getTrigger = computed(() => appStore.getMenuSetting.trigger);
  const getMenuTheme = computed(() => appStore.getMenuSetting.theme);
  const getSplit = computed(() => appStore.getMenuSetting.split);
  const getMenuBgColor = computed(() => appStore.getMenuSetting.bgColor);
  const getMixSideTrigger = computed(() => appStore.getMenuSetting.mixSideTrigger);
  const getCanDrag = computed(() => appStore.getMenuSetting.canDrag);
  const getAccordion = computed(() => appStore.getMenuSetting.accordion);
  const getMixSideFixed = computed(() => appStore.getMenuSetting.mixSideFixed);
  const getTopMenuAlign = computed(() => appStore.getMenuSetting.topMenuAlign);
  const getCloseMixSidebarOnChange = computed(() => appStore.getMenuSetting.closeMixSidebarOnChange);
  const getIsSidebarType = computed(() => unref(getMenuType) === MenuTypeEnum.SIDEBAR);
  const getIsTopMenu = computed(() => unref(getMenuType) === MenuTypeEnum.TOP_MENU);
  const getCollapsedShowTitle = computed(() => appStore.getMenuSetting.collapsedShowTitle);
  const getShowTopMenu = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.HORIZONTAL || unref(getSplit);
  });
  const getShowHeaderTrigger = computed(() => {
    if (unref(getMenuType) === MenuTypeEnum.TOP_MENU || !unref(getShowMenu) || unref(getMenuHidden)) {
      return false;
    }
    return unref(getTrigger) === TriggerEnum.HEADER;
  });
  const getIsHorizontal = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.HORIZONTAL;
  });
  const getIsMixSidebar = computed(() => {
    return unref(getMenuType) === MenuTypeEnum.MIX_SIDEBAR;
  });
  const getIsMixMode = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.INLINE && unref(getMenuType) === MenuTypeEnum.MIX;
  });
  const getRealWidth = computed(() => {
    if (unref(getIsMixSidebar)) {
      return unref(getCollapsed) && !unref(getMixSideFixed) ? unref(getMiniWidthNumber) : unref(getMenuWidth);
    }
    return unref(getCollapsed) ? unref(getMiniWidthNumber) : unref(getMenuWidth);
  });
  const getMiniWidthNumber = computed(() => {
    const { collapsedShowTitle } = appStore.getMenuSetting;
    return collapsedShowTitle ? SIDE_BAR_SHOW_TIT_MINI_WIDTH : SIDE_BAR_MINI_WIDTH;
  });
  const getCalcContentWidth = computed(() => {
    const width = unref(getIsTopMenu) || !unref(getShowMenu) || unref(getSplit) && unref(getMenuHidden) ? 0 : unref(getIsMixSidebar) ? (unref(getCollapsed) ? SIDE_BAR_MINI_WIDTH : SIDE_BAR_SHOW_TIT_MINI_WIDTH) + (unref(getMixSideFixed) && unref(mixSideHasChildren) ? unref(getRealWidth) : 0) : unref(getRealWidth);
    return `calc(100% - ${unref(width)}px)`;
  });
  function setMenuSetting(menuSetting) {
    appStore.setProjectConfig({ menuSetting });
  }
  function toggleCollapsed() {
    setMenuSetting({
      collapsed: !unref(getCollapsed)
    });
  }
  return {
    setMenuSetting,
    toggleCollapsed,
    getMenuFixed,
    getRealWidth,
    getMenuType,
    getMenuMode,
    getShowMenu,
    getCollapsed,
    getMiniWidthNumber,
    getCalcContentWidth,
    getMenuWidth,
    getTrigger,
    getSplit,
    getMenuTheme,
    getCanDrag,
    getCollapsedShowTitle,
    getIsHorizontal,
    getIsSidebarType,
    getAccordion,
    getShowTopMenu,
    getShowHeaderTrigger,
    getTopMenuAlign,
    getMenuHidden,
    getIsTopMenu,
    getMenuBgColor,
    getShowSidebar,
    getIsMixMode,
    getIsMixSidebar,
    getCloseMixSidebarOnChange,
    getMixSideTrigger,
    getMixSideFixed,
    mixSideHasChildren
  };
}
function useDesign(scope) {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls
  };
}
var AppLogo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-503d0598"), n = n(), popScopeId(), n);
const _hoisted_1$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: LogoImg }, null, -1));
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, validator: (v) => ["light", "dark"].includes(v) },
    showTitle: { type: Boolean, default: true },
    alwaysShowTitle: { type: Boolean }
  },
  setup(__props) {
    const props2 = __props;
    const { prefixCls: prefixCls2 } = useDesign("app-logo");
    const { getCollapsedShowTitle } = useMenuSetting();
    const userStore = useUserStore();
    const { title } = useGlobSetting();
    const go = useGo();
    const getAppLogoClass = computed(() => [
      prefixCls2,
      props2.theme,
      { "collapsed-show-title": unref(getCollapsedShowTitle) }
    ]);
    const getTitleClass = computed(() => [
      `${prefixCls2}__title`,
      {
        "xs:opacity-0": !props2.alwaysShowTitle
      }
    ]);
    function goHome() {
      go(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["anticon", unref(getAppLogoClass)]),
        onClick: goHome
      }, [
        _hoisted_1$8,
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["ml-2 truncate md:opacity-100", unref(getTitleClass)])
        }, toDisplayString(unref(title)), 3), [
          [vShow, __props.showTitle]
        ])
      ], 2);
    };
  }
});
var appLogo = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-503d0598"]]);
function createContext(context, key2 = Symbol(), options = {}) {
  const { readonly: readonly$1 = true, createProvider = false, native = false } = options;
  const state = reactive(context);
  const provideData = readonly$1 ? readonly(state) : state;
  !createProvider && provide(key2, native ? context : provideData);
  return {
    state
  };
}
function useContext(key2 = Symbol(), defaultValue) {
  return inject(key2, defaultValue || {});
}
const key = Symbol();
function createAppProviderContext(context) {
  return createContext(context, key);
}
function useAppProviderContext() {
  return useContext(key);
}
const props$3 = {
  prefixCls: { type: String, default: prefixCls }
};
const _sfc_main$j = defineComponent({
  name: "AppProvider",
  inheritAttrs: false,
  props: props$3,
  setup(props2, { slots }) {
    const isMobile = ref(false);
    const isSetState = ref(false);
    const appStore = useAppStore();
    createBreakpointListen(({ screenMap, sizeEnum, width }) => {
      const lgWidth = screenMap.get(sizeEnum.LG);
      if (lgWidth) {
        isMobile.value = width.value - 1 < lgWidth;
      }
      handleRestoreState();
    });
    const { prefixCls: prefixCls2 } = toRefs(props2);
    createAppProviderContext({ prefixCls: prefixCls2, isMobile });
    function handleRestoreState() {
      if (unref(isMobile)) {
        if (!unref(isSetState)) {
          isSetState.value = true;
          const {
            menuSetting: {
              type: menuType,
              mode: menuMode,
              collapsed: menuCollapsed,
              split: menuSplit
            }
          } = appStore.getProjectConfig;
          appStore.setProjectConfig({
            menuSetting: {
              type: MenuTypeEnum.SIDEBAR,
              mode: MenuModeEnum.INLINE,
              split: false
            }
          });
          appStore.setBeforeMiniInfo({ menuMode, menuCollapsed, menuType, menuSplit });
        }
      } else {
        if (unref(isSetState)) {
          isSetState.value = false;
          const { menuMode, menuCollapsed, menuType, menuSplit } = appStore.getBeforeMiniInfo;
          appStore.setProjectConfig({
            menuSetting: {
              type: menuType,
              mode: menuMode,
              collapsed: menuCollapsed,
              split: menuSplit
            }
          });
        }
      }
    }
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
var SvgIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 16
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  setup(props2) {
    const { prefixCls: prefixCls2 } = useDesign("svg-icon");
    const symbolId = computed(() => `#${props2.prefix}-${props2.name}`);
    const getStyle = computed(() => {
      const { size } = props2;
      let s = `${size}`;
      s = `${s.replace("px", "")}px`;
      return {
        width: s,
        height: s
      };
    });
    return { symbolId, prefixCls: prefixCls2, getStyle };
  }
});
const _hoisted_1$7 = ["xlink:href"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass([_ctx.prefixCls, _ctx.$attrs.class, _ctx.spin && "svg-icon-spin"]),
    style: normalizeStyle(_ctx.getStyle),
    "aria-hidden": "true"
  }, [
    createBaseVNode("use", { "xlink:href": _ctx.symbolId }, null, 8, _hoisted_1$7)
  ], 6);
}
var SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$6], ["__scopeId", "data-v-442f5584"]]);
const Iconify = Iconify$1.default || Iconify$1;
const collections = JSON.parse('[{"prefix":"ion","width":512,"height":512,"icons":{"airplane":{"body":"<path d=\\"M186.62 464H160a16 16 0 0 1-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 0 1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 0 0 0-.15a14.82 14.82 0 0 1-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0 1 13.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05l97.32-1.44l-64.44-142A16 16 0 0 1 160 48h26.91a25 25 0 0 1 19.35 9.8l125.05 152l57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16c-14.93 6.6-34.85 9.94-59.21 9.94c-2.68 0-14.37-.08-18.66-.31l-57.76-1.54l-125.36 152a25 25 0 0 1-19.32 9.75z\\" fill=\\"currentColor\\"/>"},"aperture-outline":{"body":"<path d=\\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M360 94.59V296\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M443.13 212.87L296 360\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M417.41 360H216\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M299.13 443.13l-144-144\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M152 416V216\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M68.87 299.13l144-144\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M94.59 152H288\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M212.87 68.87L360 216\\"/>"},"apps-outline":{"body":"<rect x=\\"64\\" y=\\"64\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"216\\" y=\\"64\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"368\\" y=\\"64\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"64\\" y=\\"216\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"216\\" y=\\"216\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"368\\" y=\\"216\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"64\\" y=\\"368\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"216\\" y=\\"368\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><rect x=\\"368\\" y=\\"368\\" width=\\"80\\" height=\\"80\\" rx=\\"40\\" ry=\\"40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/>"},"arrow-down-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M112 268l144 144l144-144\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M256 392V100\\"/>"},"arrow-redo-outline":{"body":"<path d=\\"M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"arrow-undo-outline":{"body":"<path d=\\"M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"arrow-up-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M112 244l144-144l144 144\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M256 120v292\\"/>"},"bar-chart-outline":{"body":"<path d=\\"M32 32v432a16 16 0 0 0 16 16h432\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"96\\" y=\\"224\\" width=\\"80\\" height=\\"192\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"240\\" y=\\"176\\" width=\\"80\\" height=\\"240\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"383.64\\" y=\\"112\\" width=\\"80\\" height=\\"304\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"bug-outline":{"body":"<path d=\\"M370 378c28.89 23.52 46 46.07 46 86\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M142 378c-28.89 23.52-46 46.06-46 86\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M384 208c28.89-23.52 32-56.07 32-96\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M128 206c-28.89-23.52-32-54.06-32-94\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M464 288.13h-80\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M128 288.13H48\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M256 192v256\\"/><path d=\\"M256 448h0c-70.4 0-128-57.6-128-128v-96.07c0-65.07 57.6-96 128-96h0c70.4 0 128 25.6 128 96V320c0 70.4-57.6 128-128 128z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M179.43 143.52a49.08 49.08 0 0 1-3.43-15.73A80 80 0 0 1 255.79 48h.42A80 80 0 0 1 336 127.79a41.91 41.91 0 0 1-3.12 14.3\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"chevron-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M112 184l144 144l144-144\\"/>"},"chevron-forward":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"48\\" d=\\"M184 112l144 144l-144 144\\"/>"},"document":{"body":"<path d=\\"M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4z\\" fill=\\"currentColor\\"/><path d=\\"M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z\\" fill=\\"currentColor\\"/>"},"document-text-outline":{"body":"<path d=\\"M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M256 56v120a32 32 0 0 0 32 32h120\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 288h160\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 368h160\\"/>"},"download-outline":{"body":"<path d=\\"M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 272l80 80l80-80\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M256 48v288\\"/>"},"drag":{"body":"<path d=\\"M0 144h512v32H0z\\" fill=\\"currentColor\\"/><path d=\\"M0 240h512v32H0z\\" fill=\\"currentColor\\"/><path d=\\"M0 336h512v32H0z\\" fill=\\"currentColor\\"/>","hidden":true},"ellipsis-vertical":{"body":"<circle cx=\\"256\\" cy=\\"256\\" r=\\"48\\" fill=\\"currentColor\\"/><circle cx=\\"256\\" cy=\\"416\\" r=\\"48\\" fill=\\"currentColor\\"/><circle cx=\\"256\\" cy=\\"96\\" r=\\"48\\" fill=\\"currentColor\\"/>"},"git-compare-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M304 160l-64-64l64-64\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M207 352l64 64l-64 64\\"/><circle cx=\\"112\\" cy=\\"96\\" r=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><circle cx=\\"400\\" cy=\\"416\\" r=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M256 96h84a60 60 0 0 1 60 60v212\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M255 416h-84a60 60 0 0 1-60-60V144\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"grid-outline":{"body":"<rect x=\\"48\\" y=\\"48\\" width=\\"176\\" height=\\"176\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"288\\" y=\\"48\\" width=\\"176\\" height=\\"176\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"48\\" y=\\"288\\" width=\\"176\\" height=\\"176\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"288\\" y=\\"288\\" width=\\"176\\" height=\\"176\\" rx=\\"20\\" ry=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"home":{"body":"<path d=\\"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z\\" fill=\\"currentColor\\"/><path d=\\"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z\\" fill=\\"currentColor\\"/>"},"home-outline":{"body":"<path d=\\"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M400 179V64h-48v69\\"/>"},"key-outline":{"body":"<path d=\\"M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"language":{"body":"<path d=\\"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z\\" fill=\\"currentColor\\"/><path d=\\"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z\\" fill=\\"currentColor\\"/>"},"layers-outline":{"body":"<path d=\\"M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path d=\\"M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"lock-closed-outline":{"body":"<path d=\\"M336 208v-95a80 80 0 0 0-160 0v95\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><rect x=\\"96\\" y=\\"208\\" width=\\"320\\" height=\\"272\\" rx=\\"48\\" ry=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"logo-angular":{"body":"<path d=\\"M213.57 256h84.85l-42.43-89.36L213.57 256z\\" fill=\\"currentColor\\"/><path d=\\"M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z\\" fill=\\"currentColor\\"/>"},"logo-html5":{"body":"<path d=\\"M64 32l34.94 403.21L255.77 480L413 435.15L448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28l-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z\\" fill=\\"currentColor\\"/>"},"logo-javascript":{"body":"<path d=\\"M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64z\\" fill=\\"currentColor\\"/>"},"logo-vue":{"body":"<path d=\\"M256 144.03l-55.49-96.11h-79.43L256 281.61L390.92 47.92h-79.43L256 144.03z\\" fill=\\"currentColor\\"/><path d=\\"M409.4 47.92L256 313.61L102.6 47.92H15.74L256 464.08L496.26 47.92H409.4z\\" fill=\\"currentColor\\"/>"},"menu-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M80 160h352\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M80 256h352\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M80 352h352\\"/>"},"power-outline":{"body":"<path d=\\"M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M256 64v192\\"/>"},"reload-sharp":{"body":"<path d=\\"M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"square\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><path d=\\"M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83z\\" fill=\\"currentColor\\"/>"},"settings-outline":{"body":"<path d=\\"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"tv-outline":{"body":"<rect x=\\"32\\" y=\\"96\\" width=\\"448\\" height=\\"272\\" rx=\\"32.14\\" ry=\\"32.14\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M128 416h256\\" fill=\\"currentColor\\"/>"}}},{"prefix":"bx","width":24,"height":24,"icons":{"bx-download":{"body":"<path d=\\"M12 16l4-5h-3V4h-2v7H8z\\" fill=\\"currentColor\\"/><path d=\\"M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z\\" fill=\\"currentColor\\"/>"},"bx-home":{"body":"<path d=\\"M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z\\" fill=\\"currentColor\\"/>"},"bx-home-circle":{"body":"<path d=\\"M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z\\" fill=\\"currentColor\\"/><path d=\\"M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z\\" fill=\\"currentColor\\"/>"},"bx-paper-plane":{"body":"<path d=\\"M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168l4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34l-5.269-2.306L16 9.167l-7.649 4.25l-2.932-1.283l13.471-6.34l-.793 11.886z\\" fill=\\"currentColor\\"/>"},"bxl-react":{"body":"<circle cx=\\"12\\" cy=\\"11.245\\" r=\\"1.785\\" fill=\\"currentColor\\"/><path d=\\"M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452c0-1.452 1.684-2.711 4.617-3.452l.395-.1l.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178l-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542c0 .954 1.368 1.913 3.598 2.54c.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177l.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39l.395.1c2.935.741 4.617 2 4.617 3.453c0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54c2.23-.627 3.599-1.586 3.599-2.54c0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z\\" fill=\\"currentColor\\"/><path d=\\"M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717c1.235-.715 3.222.13 5.303 2.265l.284.292l-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162l-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145c-.828.477-.974 2.138-.404 4.38c.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291l.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16l.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1l.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986c.225 0 .423-.05.589-.145c.829-.478.976-2.142.404-4.384c-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z\\" fill=\\"currentColor\\"/><path d=\\"M17.58 8.695l-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017l-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291l.283-.29c2.08-2.134 4.066-2.979 5.303-2.265c1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417c.571-2.242.425-3.903-.404-4.381c-.824-.477-2.375.253-4.004 1.841c.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391l.395.1c.964.243 2.026.414 3.158.507l.194.019l.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29l-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384c.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123a20.692 20.692 0 0 1-2.696-.419z\\" fill=\\"currentColor\\"/><path d=\\"M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017l-.113-.162a25.697 25.697 0 0 1-1.126-1.769a26.028 26.028 0 0 1-.971-1.859l-.084-.177l.084-.179c.299-.632.622-1.252.971-1.858c.347-.596.726-1.192 1.126-1.77l.113-.16l.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019l.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179l-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162l-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168a23.916 23.916 0 0 0-1.832-3.168a23.877 23.877 0 0 0-3.667 0a23.743 23.743 0 0 0-1.832 3.168a24.82 24.82 0 0 0 1.832 3.168z\\" fill=\\"currentColor\\"/>"},"bxs-folder-open":{"body":"<path d=\\"M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z\\" fill=\\"currentColor\\"/>"},"bxs-like":{"body":"<path d=\\"M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z\\" fill=\\"currentColor\\"/>"},"bxs-message-dots":{"body":"<path d=\\"M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025c.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25c.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5A1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025c.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"carbon","width":32,"height":32,"icons":{"cloud-upload":{"body":"<path d=\\"M11 18l1.41 1.41L15 16.83V29h2V16.83l2.59 2.58L21 18l-5-5l-5 5z\\" fill=\\"currentColor\\"/><path d=\\"M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22z\\" fill=\\"currentColor\\"/>"},"delete":{"body":"<path d=\\"M12 12h2v12h-2z\\" fill=\\"currentColor\\"/><path d=\\"M18 12h2v12h-2z\\" fill=\\"currentColor\\"/><path d=\\"M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z\\" fill=\\"currentColor\\"/><path d=\\"M12 2h8v2h-8z\\" fill=\\"currentColor\\"/>"},"document-view":{"body":"<defs/><circle cx=\\"22\\" cy=\\"24\\" r=\\"2\\" fill=\\"currentColor\\"/><path d=\\"M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.521A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.479L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z\\" fill=\\"currentColor\\"/><path d=\\"M12 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h4zm6-23.6l5.6 5.6H18z\\" fill=\\"currentColor\\"/>"},"logo-github":{"body":"<path d=\\"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z\\" fill-rule=\\"evenodd\\" fill=\\"currentColor\\"/>"},"table-split":{"body":"<path d=\\"M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z\\" fill=\\"currentColor\\"/>"},"user-role":{"body":"<path d=\\"M28.07 21L22 15l6.07-6l1.43 1.41L24.86 15l4.64 4.59L28.07 21z\\" fill=\\"currentColor\\"/><path d=\\"M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z\\" fill=\\"currentColor\\"/><path d=\\"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z\\" fill=\\"currentColor\\"/>"},"warning":{"body":"<path d=\\"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12z\\" fill=\\"currentColor\\"/><path d=\\"M15 8h2v11h-2z\\" fill=\\"currentColor\\"/><path d=\\"M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"ic","width":24,"height":24,"icons":{"outline-contacts":{"body":"<path d=\\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM4 0h16v2H4zm0 22h16v2H4zm8-10a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10v-1.01zm-8.19-.49c.61-.52 2.03-1 3.19-1c1.17 0 2.59.48 3.2 1H8.81z\\" fill=\\"currentColor\\"/>"},"outline-delete-outline":{"body":"<path d=\\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"ant-design","width":1024,"height":1024,"icons":{"cloud-upload-outlined":{"body":"<path d=\\"M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z\\" fill=\\"currentColor\\"/><path d=\\"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7c-23.5-24.2-36-56.8-34.9-90.6c.9-26.4 9.9-51.2 26.2-72.1c16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9l13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9c15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5l37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z\\" fill=\\"currentColor\\"/>"},"customer-service-outlined":{"body":"<path d=\\"M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z\\" fill=\\"currentColor\\"/>"},"delete-outlined":{"body":"<path d=\\"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z\\" fill=\\"currentColor\\"/>"},"enter-outlined":{"body":"<path d=\\"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z\\" fill=\\"currentColor\\"/>"},"key-outlined":{"body":"<path d=\\"M608 112c-167.9 0-304 136.1-304 304c0 70.3 23.9 135 63.9 186.5l-41.1 41.1l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-44.9 44.9l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8c-43.1-43-66.8-100.3-66.8-161.2c0-60.9 23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8c60.9 0 118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2c0 60.9-23.7 118.2-66.8 161.2z\\" fill=\\"currentColor\\"/>"},"laptop-outlined":{"body":"<path d=\\"M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z\\" fill=\\"currentColor\\"/>"},"pay-circle-outlined":{"body":"<path d=\\"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 0 0-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8c-.1-4.4-3.7-8-8.1-8z\\" fill=\\"currentColor\\"/>"},"reconciliation-outlined":{"body":"<path d=\\"M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92s92-41.2 92-92s-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34s34 15.2 34 34s-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z\\" fill=\\"currentColor\\"/>"},"reload-outlined":{"body":"<path d=\\"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92C290 92 102.3 279.5 102 511.5C101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1c1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9c-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27c-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4c31.6-31.6 68.4-56.4 109.3-73.8c42.3-17.9 87.4-27 133.8-27c46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z\\" fill=\\"currentColor\\"/>"},"rotate-left-outlined":{"body":"<defs/><path d=\\"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z\\" fill=\\"currentColor\\"/><path d=\\"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5c42.1 5.2 82.1 18.2 119 38.7c38.1 21.2 71.2 49.7 98.4 84.3c27.1 34.7 46.7 73.7 58.1 115.8c11 40.7 14 82.7 8.9 124.8c-.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z\\" fill=\\"currentColor\\"/>"},"rotate-right-outlined":{"body":"<defs/><path d=\\"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2c-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-.9-5.3-1.7-10.7-2.4-16.1c-5.1-42.1-2.1-84.1 8.9-124.8c11.4-42.2 31-81.1 58.1-115.8c27.2-34.7 60.3-63.2 98.4-84.3c37-20.6 76.9-33.6 119.1-38.8z\\" fill=\\"currentColor\\"/><path d=\\"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z\\" fill=\\"currentColor\\"/>"},"shop-outlined":{"body":"<path d=\\"M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1c24.4 0 48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1c24.4 0 48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3c-40.8 0-76.4-22.1-95.2-54.9c-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7c-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z\\" fill=\\"currentColor\\"/>"},"smile-outlined":{"body":"<path d=\\"M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z\\" fill=\\"currentColor\\"/>"},"upload-outlined":{"body":"<path d=\\"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z\\" fill=\\"currentColor\\"/>"},"zoom-in-outlined":{"body":"<path d=\\"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430z\\" fill=\\"currentColor\\"/>"},"zoom-out-outlined":{"body":"<path d=\\"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"bi","width":16,"height":16,"icons":{"eye":{"body":"<g fill=\\"currentColor\\"><path d=\\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\\"/><path d=\\"M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0z\\"/></g>"},"plus":{"body":"<g fill=\\"currentColor\\"><path d=\\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\\"/></g>"}}},{"prefix":"line-md","width":24,"height":24,"icons":{"arrow-align-left":{"body":"<g fill=\\"none\\"><path d=\\"M7 12l4 4\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-4\\"/><path d=\\"M7 12l4-4\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-4\\"/><path d=\\"M21 12H7.5\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-2\\"/><path d=\\"M3 3v18\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-25 il-md-duration-2 il-md-delay-0\\"/></g>"},"arrow-close-left":{"body":"<g fill=\\"none\\"><path d=\\"M7 12l7 7\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-4\\"/><path d=\\"M7 12l7-7\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-4\\"/><path d=\\"M21 12H7.5\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" class=\\"il-md-length-15 il-md-duration-2 il-md-delay-2\\"/><path d=\\"M3 3v18\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"il-md-length-25 il-md-duration-2 il-md-delay-0\\"/></g>"}}},{"prefix":"jam","width":24,"height":24,"icons":{"codepen-circle":{"body":"<g fill=\\"currentColor\\"><path d=\\"M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10z\\"/><path d=\\"M12.402 7.131a.79.79 0 0 0-.887.01L7.54 9.91a.79.79 0 0 0-.339.648v2.982a.79.79 0 0 0 .355.659l4.039 2.67a.79.79 0 0 0 .87 0l4.12-2.722a.79.79 0 0 0 .354-.658v-2.93a.79.79 0 0 0-.354-.66l-4.184-2.768zm3.077 3.23l-1.523 1.023l-1.428-1.038l-.009-2.043l2.96 2.059zm-3.993-2.055v1.999l-1.463 1.022l-1.46-.979l2.923-2.043zm-3.322 3.027l.944.633l-.944.661v-1.294zm3.347 4.261l-2.947-1.976l1.472-1.029l1.475.99v2.015zm-.56-3.644l.955-.667l1.11.73l-.984.662l-1.08-.725zm1.601 3.644v-2.016l1.41-.944l1.517.997l-2.927 1.963zm3.347-2.933l-1-.657l1-.671v1.328z\\"/></g>"}}},{"prefix":"ri","width":24,"height":24,"icons":{"alipay-fill":{"body":"<path d=\\"M21.422 15.358c-3.83-1.153-6.055-1.84-6.678-2.062a12.41 12.41 0 0 0 1.32-3.32H12.8V8.872h4v-.68h-4V6.344h-1.536c-.28 0-.312.248-.312.248v1.592H7.2v.68h3.752v1.104H7.88v.616h6.224a10.972 10.972 0 0 1-.888 2.176c-1.408-.464-2.192-.784-3.912-.944c-3.256-.312-4.008 1.48-4.128 2.576C5 16.064 6.48 17.424 8.688 17.424s3.68-1.024 5.08-2.72c1.167.558 3.338 1.525 6.514 2.902A9.99 9.99 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.983 9.983 0 0 1-.578 3.358zm-12.99 1.01c-2.336 0-2.704-1.48-2.584-2.096c.12-.616.8-1.416 2.104-1.416c1.496 0 2.832.384 4.44 1.16c-1.136 1.48-2.52 2.352-3.96 2.352z\\" fill=\\"currentColor\\"/>"},"dingding-fill":{"body":"<path d=\\"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.49 9.04l-.006.014c-.42.898-1.516 2.66-1.516 2.66l-.005-.012l-.32.558h1.543l-2.948 3.919l.67-2.666h-1.215l.422-1.763a16.91 16.91 0 0 0-1.223.349s-.646.378-1.862-.729c0 0-.82-.722-.344-.902c.202-.077.981-.175 1.594-.257c.83-.112 1.339-.172 1.339-.172s-2.555.038-3.161-.057c-.606-.095-1.375-1.107-1.539-1.996c0 0-.253-.488.545-.257c.798.231 4.101.9 4.101.9S8.27 9.312 7.983 8.99c-.286-.32-.841-1.754-.769-2.634c0 0 .031-.22.257-.16c0 0 3.176 1.45 5.347 2.245c2.172.795 4.06 1.199 3.816 2.228c-.02.087-.072.216-.144.37z\\" fill=\\"currentColor\\"/>"},"pushpin-2-fill":{"body":"<path d=\\"M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3z\\" fill=\\"currentColor\\"/>"},"pushpin-2-line":{"body":"<path d=\\"M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3h12zM9 5v6.606L7.404 14h9.192L15 11.606V5H9z\\" fill=\\"currentColor\\"/>"},"taobao-fill":{"body":"<path d=\\"M3.576 8.277l-1.193 1.842l2.2 1.371s1.464.754.763 2.169c-.65 1.338-3.846 4.27-3.846 4.27l2.862 1.798c1.984-4.326 1.85-3.75 2.347-5.306c.512-1.58.624-2.794-.242-3.677c-1.113-1.125-1.238-1.23-2.891-2.467zm1.564-.694c1.04 0 1.883-.758 1.883-1.693c0-.943-.843-1.701-1.883-1.701c-1.048 0-1.887.762-1.887 1.701c.005.931.84 1.693 1.887 1.693zm17.005.21s-.624-4.87-11.207-1.854c.455-.795.669-1.307.669-1.307l-2.64-.75s-1.07 3.508-2.972 5.14c0 0 1.846 1.073 1.826 1.04a17.07 17.07 0 0 0 1.407-1.596c.424-.19.83-.363 1.226-.524c-.492.887-1.278 2.218-2.068 3.056l1.112.984s.762-.738 1.589-1.62h.943v1.636H8.345v1.306h3.685v3.133l-.14-.004c-.408-.02-1.037-.089-1.287-.484c-.298-.484-.077-1.359-.064-1.903H7.995l-.093.052s-.935 4.205 2.689 4.113c3.386.092 5.33-.956 6.265-1.677l.37 1.394l2.09-.882l-1.416-3.484l-1.693.536l.314 1.19c-.427.33-.93.572-1.467.754v-2.738h3.592v-1.31h-3.592v-1.637h3.604V9.051h-6.41c.464-.569.822-1.089.92-1.415l-1.122-.307c4.798-1.733 7.47-1.435 7.45 1.403v7.475s.283 2.564-2.636 2.383l-1.58-.343l-.367 1.512s6.817 1.967 7.374-3.314c.552-5.282-.142-8.652-.142-8.652z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"emojione-monotone","width":64,"height":64,"icons":{"letter-a":{"body":"<path d=\\"M28.216 35.543h7.431l-3.666-11.418z\\" fill=\\"currentColor\\"/><path d=\\"M32 2C15.432 2 2 15.431 2 32c0 16.569 13.432 30 30 30s30-13.432 30-30C62 15.431 48.568 2 32 2m7.167 44.508l-1.914-5.965H26.567L24.6 46.508h-6.342l10.358-29.016h6.859l10.266 29.016h-6.574\\" fill=\\"currentColor\\"/>"}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"behance-square":{"body":"<path d=\\"M1248 0q119 0 203.5 84.5T1536 288v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960zM499 367H128v787h382q117 0 197-57.5T787 926q0-158-143-200q107-52 107-164q0-57-19.5-96.5T675 405t-79-29.5t-97-8.5zm-22 318H301V501h163q119 0 119 90q0 94-106 94zm9 335H301V803h189q124 0 124 113q0 104-128 104zm650 32q-68 0-104-38t-36-107h411q1-10 1-30q0-132-74.5-220.5T1130 568q-128 0-210 86t-82 216q0 135 79 217t213 82q205 0 267-191h-138q-11 34-47.5 54t-75.5 20zm-10-366q113 0 124 122H996q4-56 39-89t91-33zM964 420h319v77H964v-77z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"grommet-icons","width":24,"height":24,"icons":{"cluster":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" d=\\"M8 9h8V1H8v8zM1 23h8v-8H1v8zm14 0h8v-8h-8v8zM5 15l3-6l-3 6zm5 4h4h-4zm6-10l3 6l-3-6z\\"/>"}}},{"prefix":"clarity","width":36,"height":36,"icons":{"close-line":{"body":"<path class=\\"clr-i-outline clr-i-outline-path-1\\" d=\\"M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z\\" fill=\\"currentColor\\"/>"},"info-standard-line":{"body":"<circle class=\\"clr-i-outline clr-i-outline-path-1\\" cx=\\"17.97\\" cy=\\"10.45\\" r=\\"1.4\\" fill=\\"currentColor\\"/><path class=\\"clr-i-outline clr-i-outline-path-2\\" d=\\"M21 25h-2V14.1h-3a1 1 0 0 0 0 2h1V25h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\\" fill=\\"currentColor\\"/><path class=\\"clr-i-outline clr-i-outline-path-3\\" d=\\"M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4z\\" fill=\\"currentColor\\"/>"},"minus-line":{"body":"<path d=\\"M26 17H10a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z\\" class=\\"clr-i-outline clr-i-outline-path-1\\" fill=\\"currentColor\\"/>"},"note-edit-line":{"body":"<path d=\\"M28 30H6V8h13.22l2-2H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V15l-2 2z\\" class=\\"clr-i-outline clr-i-outline-path-1\\" fill=\\"currentColor\\"/><path d=\\"M33.53 5.84l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.17 16.26l-1.11 4.81A1.61 1.61 0 0 0 14.63 23a1.69 1.69 0 0 0 .37 0l4.85-1.07L33.53 8.12a1.61 1.61 0 0 0 0-2.28zM18.81 20.08l-3.66.81l.85-3.63L26.32 6.87l2.82 2.82zM30.27 8.56l-2.82-2.82L29 4.16L31.84 7z\\" class=\\"clr-i-outline clr-i-outline-path-2\\" fill=\\"currentColor\\"/>"},"star-line":{"body":"<path class=\\"clr-i-outline clr-i-outline-path-1\\" d=\\"M27.19 34a2.22 2.22 0 0 1-1.24-.38l-7.46-5a.22.22 0 0 0-.25 0l-7.46 5a2.22 2.22 0 0 1-3.38-2.41l2.45-8.64a.23.23 0 0 0-.08-.24l-7.06-5.55a2.22 2.22 0 0 1 1.29-4l9-.34a.23.23 0 0 0 .2-.15l3.1-8.43a2.22 2.22 0 0 1 4.17 0l3.1 8.43a.23.23 0 0 0 .2.15l9 .34a2.22 2.22 0 0 1 1.29 4L27 22.33a.22.22 0 0 0-.08.24l2.45 8.64A2.23 2.23 0 0 1 27.19 34zm-8.82-7.42a2.21 2.21 0 0 1 1.23.42l7.46 5a.22.22 0 0 0 .34-.25l-2.45-8.64a2.21 2.21 0 0 1 .77-2.35l7.06-5.55a.22.22 0 0 0-.13-.4l-9-.34a2.22 2.22 0 0 1-2-1.46l-3.1-8.43a.22.22 0 0 0-.42 0L15.06 13a2.22 2.22 0 0 1-2 1.46l-9 .34a.22.22 0 0 0-.13.4L11 20.76a2.22 2.22 0 0 1 .77 2.35l-2.44 8.64a.21.21 0 0 0 .08.24a.2.2 0 0 0 .26 0l7.46-5a2.22 2.22 0 0 1 1.23-.37z\\" fill=\\"currentColor\\"/>"},"tree-view-line":{"body":"<path d=\\"M15 32h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-3-2h2v-2h-2z\\" class=\\"clr-i-outline clr-i-outline-path-1\\" fill=\\"currentColor\\"/><path d=\\"M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8h6.36a.8.8 0 0 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM4 8h2v2H4zm10 12h-2v-2h2z\\" class=\\"clr-i-outline clr-i-outline-path-2\\" fill=\\"currentColor\\"/><path d=\\"M34 9a1 1 0 0 0-1-1H10v2h23a1 1 0 0 0 1-1z\\" class=\\"clr-i-outline clr-i-outline-path-3\\" fill=\\"currentColor\\"/><path d=\\"M33 18H18v2h15a1 1 0 0 0 0-2z\\" class=\\"clr-i-outline clr-i-outline-path-4\\" fill=\\"currentColor\\"/><path d=\\"M33 28H18v2h15a1 1 0 0 0 0-2z\\" class=\\"clr-i-outline clr-i-outline-path-5\\" fill=\\"currentColor\\"/>"}}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"alipay":{"body":"<path d=\\"M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6c-45.96-25.62-110.59-60.34-171.6-88.44c-32.07 43.97-84.14 81-148.62 81c-70.59 0-93.73-45.3-97.04-76.37c-3.97-39.01 14.88-81.5 99.52-81.5c35.38 0 79.35 10.25 127.13 24.96c16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73c52.07 0 92.58-39.68 117.87-72.9c-44.63-18.68-84.48-31.41-109.44-31.41c-67.45 0-79.35 33.06-78.36 50.58z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"logos","width":256,"height":256,"icons":{"vue":{"body":"<path d=\\"M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36z\\" fill=\\"#41B883\\"/><path d=\\"M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0z\\" fill=\\"#41B883\\"/><path d=\\"M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56z\\" fill=\\"#35495E\\"/>","height":221}}},{"prefix":"mdi","width":24,"height":24,"icons":{"form-select":{"body":"<path d=\\"M15 5h3l-1.5 2L15 5M5 2h14a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h14V4H5m0 16h14V10H5v10m2-8h10v2H7v-2m0 4h10v2H7v-2z\\" fill=\\"currentColor\\"/>"},"keyboard-esc":{"body":"<path d=\\"M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2z\\" fill=\\"currentColor\\"/>"},"microsoft-excel":{"body":"<path d=\\"M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25M7 13.06l1.18 2.22h1.79L8 12.06l1.93-3.17H8.22L7.13 10.9l-.04.06l-.03.07q-.26-.53-.56-1.07q-.25-.53-.53-1.07H4.16l1.89 3.19L4 15.28h1.78m8.1 4.22V17H8.25v2.5m5.63-3.75v-3.12H12v3.12m1.88-4.37V8.25H12v3.13M13.88 7V4.5H8.25V7m12.5 12.5V17h-5.62v2.5m5.62-3.75v-3.12h-5.62v3.12m5.62-4.37V8.25h-5.62v3.13M20.75 7V4.5h-5.62V7z\\" fill=\\"currentColor\\"/>"},"page-next-outline":{"body":"<path d=\\"M22 3H5a2 2 0 0 0-2 2v4h2V5h17v14H5v-4H3v4a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 15v-2H0v-2h7V9l4 3l-4 3m13-2h-7v-2h7v2m0-4h-7V7h7v2m-3 8h-4v-2h4v2z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"codicon","width":16,"height":16,"icons":{"screen-full":{"body":"<g fill=\\"currentColor\\"><path d=\\"M3 12h10V4H3v8zm2-6h6v4H5V6zM2 6H1V2.5l.5-.5H5v1H2v3zm13-3.5V6h-1V3h-3V2h3.5l.5.5zM14 10h1v3.5l-.5.5H11v-1h3v-3zM2 13h3v1H1.5l-.5-.5V10h1v3z\\"/></g>"},"screen-normal":{"body":"<g fill=\\"currentColor\\"><path d=\\"M3.5 4H1V3h2V1h1v2.5l-.5.5zM13 3V1h-1v2.5l.5.5H15V3h-2zm-1 9.5V15h1v-2h2v-1h-2.5l-.5.5zM1 12v1h2v2h1v-2.5l-.5-.5H1zm11-1.5l-.5.5h-7l-.5-.5v-5l.5-.5h7l.5.5v5zM10 7H6v2h4V7z\\"/></g>"},"zoom-in":{"body":"<g fill=\\"currentColor\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26l-.7.71l-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608zm-5.45 4.888a4.51 4.51 0 0 0 3.18-1.32l-.04.02a4.51 4.51 0 0 0 1.36-3.2a4.5 4.5 0 1 0-4.5 4.5zm2.44-4v-1h-2v-2h-1v2h-2v1h2v2h1v-2h2z\\"/></g>"},"zoom-out":{"body":"<g fill=\\"currentColor\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26l-.7.71l-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608zm-5.45 4.888a4.51 4.51 0 0 0 3.18-1.32l-.04.02a4.51 4.51 0 0 0 1.36-3.2a4.5 4.5 0 1 0-4.5 4.5zm-2.54-4.98h5v1h-5v-1z\\"/></g>"}}},{"prefix":"ph","width":256,"height":256,"icons":{}},{"prefix":"bpmn","width":2048,"height":2048,"icons":{}},{"prefix":"et","width":32,"height":32,"icons":{}},{"prefix":"foundation","width":100,"height":100,"icons":{}},{"prefix":"eva","width":24,"height":24,"icons":{"arrow-ios-downward-outline":{"body":"<path fill=\\"currentColor\\" d=\\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z\\"/>"}}},{"prefix":"dashicons","width":20,"height":20,"icons":{"align-center":{"body":"<path d=\\"M3 5h14V3H3v2zm12 8V7H5v6h10zM3 17h14v-2H3v2z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"vaadin","width":16,"height":16,"icons":{"arrows-long-h":{"body":"<path fill=\\"currentColor\\" d=\\"M16 8l-3-3v2H3V5L0 8l3 3V9h10v2z\\"/>"},"arrows-long-v":{"body":"<path fill=\\"currentColor\\" d=\\"M9 3h2L8 0L5 3h2v10H5l3 3l3-3H9z\\"/>"}}},{"prefix":"geo","width":100,"height":100,"icons":{}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"simple-icons","width":24,"height":24,"icons":{}},{"prefix":"tabler","width":24,"height":24,"icons":{"chart-dots":{"body":"<g class=\\"icon-tabler\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 3v18h18\\"/><circle cx=\\"9\\" cy=\\"9\\" r=\\"2\\"/><circle cx=\\"19\\" cy=\\"7\\" r=\\"2\\"/><circle cx=\\"14\\" cy=\\"15\\" r=\\"2\\"/><path d=\\"M10.16 10.62l2.34 2.88\\"/><path d=\\"M15.088 13.328l2.837-4.586\\"/></g>"}}},{"prefix":"whh","width":1024,"height":1024,"icons":{"paintroll":{"body":"<path d=\\"M992.193 448h-480v192q26 0 45 19t19 45v256q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45V704q0-26 18.5-45t45.5-19V416q0-13 9.5-22.5t22.5-9.5h480V192h-64v64q0 26-19 45t-45 19h-768q-27 0-45.5-18.5T.193 256V64q0-26 18.5-45t45.5-19h768q26 0 45 19t19 45v64h96q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5z\\" fill=\\"currentColor\\"/>","width":1025}}}]');
collections.forEach((c) => Iconify.addCollection(c));
const propTypes = R({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
propTypes.extend([
  {
    name: "style",
    getter: true,
    type: [String, Object],
    default: void 0
  },
  {
    name: "VNodeChild",
    getter: true,
    type: void 0
  }
]);
var Icon_vue_vue_type_style_index_0_lang = "";
const SVG_END_WITH_FLAG = "|svg";
const _sfc_main$h = defineComponent({
  name: "Icon",
  components: { SvgIcon },
  props: {
    icon: propTypes.string,
    color: propTypes.string,
    size: {
      type: [String, Number],
      default: 16
    },
    spin: propTypes.bool.def(false),
    prefix: propTypes.string.def("")
  },
  setup(props2) {
    const elRef = ref(null);
    const isSvgIcon = computed(() => {
      var _a2;
      return (_a2 = props2.icon) == null ? void 0 : _a2.endsWith(SVG_END_WITH_FLAG);
    });
    const getSvgIcon = computed(() => props2.icon.replace(SVG_END_WITH_FLAG, ""));
    const getIconRef = computed(() => `${props2.prefix ? props2.prefix + ":" : ""}${props2.icon}`);
    const update = async () => {
      if (unref(isSvgIcon))
        return;
      const el = unref(elRef);
      if (!el)
        return;
      await nextTick();
      const icon = unref(getIconRef);
      if (!icon)
        return;
      const svg = Iconify.renderSVG(icon, {});
      if (svg) {
        el.textContent = "";
        el.appendChild(svg);
      } else {
        const span = document.createElement("span");
        span.className = "iconify";
        span.dataset.icon = icon;
        el.textContent = "";
        el.appendChild(span);
      }
    };
    const getWrapStyle = computed(() => {
      const { size, color } = props2;
      let fs = size;
      if (isString(size)) {
        fs = parseInt(size, 10);
      }
      return {
        fontSize: `${fs}px`,
        color,
        display: "inline-flex"
      };
    });
    watch(() => props2.icon, update, { flush: "post" });
    onMounted(update);
    return { elRef, getWrapStyle, isSvgIcon, getSvgIcon };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  return _ctx.isSvgIcon ? (openBlock(), createBlock(_component_SvgIcon, {
    key: 0,
    size: _ctx.size,
    name: _ctx.getSvgIcon,
    class: normalizeClass([_ctx.$attrs.class, "anticon"]),
    spin: _ctx.spin
  }, null, 8, ["size", "name", "class", "spin"])) : (openBlock(), createElementBlock("span", {
    key: 1,
    ref: "elRef",
    class: normalizeClass([_ctx.$attrs.class, "app-iconify anticon", _ctx.spin && "app-iconify-spin"]),
    style: normalizeStyle(_ctx.getWrapStyle)
  }, null, 6));
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$5]]);
function getSlot(slots, slot = "default", data) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn)
    return null;
  return slotFn(data);
}
function extendSlots(slots, excludeKeys = []) {
  const slotKeys = Object.keys(slots);
  const ret = {};
  slotKeys.map((key2) => {
    if (excludeKeys.includes(key2)) {
      return null;
    }
    ret[key2] = () => getSlot(slots, key2);
  });
  return ret;
}
function createSimpleTransition(name, origin = "top center 0", mode) {
  return defineComponent({
    name,
    props: {
      group: {
        type: Boolean,
        default: false
      },
      mode: {
        type: String,
        default: mode
      },
      origin: {
        type: String,
        default: origin
      }
    },
    setup(props2, {
      slots,
      attrs
    }) {
      const onBeforeEnter = (el) => {
        el.style.transformOrigin = props2.origin;
      };
      return () => {
        const Tag = !props2.group ? Transition : TransitionGroup;
        return createVNode(Tag, mergeProps({
          "name": name,
          "mode": props2.mode
        }, attrs, {
          "onBeforeEnter": onBeforeEnter
        }), {
          default: () => getSlot(slots)
        });
      };
    }
  });
}
function createJavascriptTransition(name, functions, mode = "in-out") {
  return defineComponent({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      }
    },
    setup(props2, {
      attrs,
      slots
    }) {
      return () => {
        return createVNode(Transition, mergeProps({
          "name": name,
          "mode": props2.mode
        }, attrs, {
          "onBeforeEnter": functions.beforeEnter,
          "onEnter": functions.enter,
          "onLeave": functions.leave,
          "onAfterLeave": functions.afterLeave,
          "onLeaveCancelled": functions.afterLeave
        }), {
          default: () => getSlot(slots)
        });
      };
    }
  });
}
function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function ExpandTransitionGenerator(expandedParentClass = "", x = false) {
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = `offset${upperFirst(sizeProperty)}`;
  return {
    beforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    enter(el) {
      const initialStyle = el._initialStyle;
      el.style.setProperty("transition", "none", "important");
      el.style.overflow = "hidden";
      void el.offsetHeight;
      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
      });
    },
    afterEnter: resetStyles,
    enterCancelled: resetStyles,
    leave(el) {
      el._initialStyle = {
        transition: "",
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = "hidden";
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => el.style[sizeProperty] = "0");
    },
    afterLeave,
    leaveCancelled: afterLeave
  };
  function afterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null)
      el.style[sizeProperty] = size;
    Reflect.deleteProperty(el, "_initialStyle");
  }
}
function getBoundingClientRect(element) {
  if (!element || !element.getBoundingClientRect) {
    return 0;
  }
  return element.getBoundingClientRect();
}
function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
}
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
function addClass(el, cls) {
  if (!el)
    return;
  let curClass = el.className;
  const classes = (cls || "").split(" ");
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  const classes = cls.split(" ");
  let curClass = " " + el.className + " ";
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
function getViewportOffset(element) {
  const doc = document.documentElement;
  const docScrollLeft = doc.scrollLeft;
  const docScrollTop = doc.scrollTop;
  const docClientLeft = doc.clientLeft;
  const docClientTop = doc.clientTop;
  const pageXOffset = window.pageXOffset;
  const pageYOffset = window.pageYOffset;
  const box = getBoundingClientRect(element);
  const { left: retLeft, top: rectTop, width: rectWidth, height: rectHeight } = box;
  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0);
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0);
  const offsetLeft = retLeft + pageXOffset;
  const offsetTop = rectTop + pageYOffset;
  const left = offsetLeft - scrollLeft;
  const top = offsetTop - scrollTop;
  const clientWidth = window.document.documentElement.clientWidth;
  const clientHeight = window.document.documentElement.clientHeight;
  return {
    left,
    top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top
  };
}
function hackCss(attr, value) {
  const prefix = ["webkit", "Moz", "ms", "OT"];
  const styleObj = {};
  prefix.forEach((item) => {
    styleObj[`${item}${upperFirst$1(attr)}`] = value;
  });
  return __spreadProps(__spreadValues({}, styleObj), {
    [attr]: value
  });
}
function on(element, event, handler) {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
}
function off(element, event, handler) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, false);
  }
}
function useRafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked)
      return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}
const _sfc_main$g = defineComponent({
  name: "CollapseTransition",
  setup() {
    return {
      on: {
        beforeEnter(el) {
          addClass(el, "collapse-transition");
          if (!el.dataset)
            el.dataset = {};
          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;
          el.style.height = "0";
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        },
        enter(el) {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + "px";
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          } else {
            el.style.height = "";
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          }
          el.style.overflow = "hidden";
        },
        afterEnter(el) {
          removeClass(el, "collapse-transition");
          el.style.height = "";
          el.style.overflow = el.dataset.oldOverflow;
        },
        beforeLeave(el) {
          if (!el.dataset)
            el.dataset = {};
          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;
          el.dataset.oldOverflow = el.style.overflow;
          el.style.height = el.scrollHeight + "px";
          el.style.overflow = "hidden";
        },
        leave(el) {
          if (el.scrollHeight !== 0) {
            addClass(el, "collapse-transition");
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          }
        },
        afterLeave(el) {
          removeClass(el, "collapse-transition");
          el.style.height = "";
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
      }
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, toHandlers(_ctx.on)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$4]]);
const FadeTransition = createSimpleTransition("fade-transition");
const ScaleTransition = createSimpleTransition("scale-transition");
const SlideYTransition = createSimpleTransition("slide-y-transition");
const ScrollYTransition = createSimpleTransition("scroll-y-transition");
const SlideYReverseTransition = createSimpleTransition("slide-y-reverse-transition");
const ScrollYReverseTransition = createSimpleTransition("scroll-y-reverse-transition");
const SlideXTransition = createSimpleTransition("slide-x-transition");
const ScrollXTransition = createSimpleTransition("scroll-x-transition");
const SlideXReverseTransition = createSimpleTransition("slide-x-reverse-transition");
const ScrollXReverseTransition = createSimpleTransition("scroll-x-reverse-transition");
const ScaleRotateTransition = createSimpleTransition("scale-rotate-transition");
const ExpandXTransition = createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
const ExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator(""));
var BasicArrow_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    expand: { type: Boolean },
    up: { type: Boolean },
    down: { type: Boolean },
    inset: { type: Boolean }
  },
  setup(__props) {
    const props2 = __props;
    const { prefixCls: prefixCls2 } = useDesign("basic-arrow");
    const getClass = computed(() => {
      const { expand, up, down, inset } = props2;
      return [
        prefixCls2,
        {
          [`${prefixCls2}--active`]: expand,
          up,
          inset,
          down
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(getClass))
      }, [
        createVNode(unref(Icon), {
          icon: "ion:chevron-forward",
          style: normalizeStyle(_ctx.$attrs.iconStyle)
        }, null, 8, ["style"])
      ], 2);
    };
  }
});
var basicArrow = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-1ba7d1b3"]]);
const props$2 = {
  maxWidth: {
    type: String,
    default: "600px"
  },
  showIndex: {
    type: Boolean
  },
  color: {
    type: String,
    default: "#ffffff"
  },
  fontSize: {
    type: String,
    default: "14px"
  },
  placement: {
    type: String,
    default: "right"
  },
  text: {
    type: [Array, String]
  }
};
var _sfc_main$e = defineComponent({
  name: "BasicHelp",
  components: {
    Tooltip
  },
  props: props$2,
  setup(props2, {
    slots
  }) {
    const {
      prefixCls: prefixCls2
    } = useDesign("basic-help");
    const getTooltipStyle = computed(() => ({
      color: props2.color,
      fontSize: props2.fontSize
    }));
    const getOverlayStyle = computed(() => ({
      maxWidth: props2.maxWidth
    }));
    function renderTitle() {
      const textList = props2.text;
      if (isString(textList)) {
        return createVNode("p", null, [textList]);
      }
      if (isArray(textList)) {
        return textList.map((text, index2) => {
          return createVNode("p", {
            "key": text
          }, [createVNode(Fragment, null, [props2.showIndex ? `${index2 + 1}. ` : "", text])]);
        });
      }
      return null;
    }
    return () => {
      return createVNode(Tooltip, {
        "overlayClassName": `${prefixCls2}__wrap`,
        "title": createVNode("div", {
          "style": unref(getTooltipStyle)
        }, [renderTitle()]),
        "autoAdjustOverflow": true,
        "overlayStyle": unref(getOverlayStyle),
        "placement": props2.placement,
        "getPopupContainer": () => getPopupContainer()
      }, {
        default: () => [createVNode("span", {
          "class": prefixCls2
        }, [getSlot(slots) || createVNode(InfoCircleOutlined, null, null)])]
      });
    };
  }
});
var BasicHelp_vue_vue_type_style_index_0_lang = "";
var BasicTitle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    helpMessage: {
      type: [String, Array],
      default: ""
    },
    span: { type: Boolean },
    normal: { type: Boolean }
  },
  setup(__props) {
    const props2 = __props;
    const { prefixCls: prefixCls2 } = useDesign("basic-title");
    const slots = useSlots();
    const getClass = computed(() => [
      prefixCls2,
      { [`${prefixCls2}-show-span`]: props2.span && slots.default },
      { [`${prefixCls2}-normal`]: props2.normal }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(getClass))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        __props.helpMessage ? (openBlock(), createBlock(_sfc_main$e, {
          key: 0,
          class: normalizeClass(`${unref(prefixCls2)}-help`),
          text: __props.helpMessage
        }, null, 8, ["class", "text"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var basicTitle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-0d18fe68"]]);
const BasicArrow = withInstall(basicArrow);
const BasicTitle = withInstall(basicTitle);
const BasicHelp = withInstall(_sfc_main$e);
const props$1 = {
  prefixCls: { type: String },
  helpMessage: {
    type: [Array, String],
    default: ""
  },
  title: { type: String },
  show: { type: Boolean },
  canExpan: { type: Boolean }
};
const _sfc_main$c = defineComponent({
  components: { BasicArrow, BasicTitle },
  inheritAttrs: false,
  props: props$1,
  emits: ["expand"]
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTitle = resolveComponent("BasicTitle");
  const _component_BasicArrow = resolveComponent("BasicArrow");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([`${_ctx.prefixCls}__header px-2 py-5`, _ctx.$attrs.class])
  }, [
    createVNode(_component_BasicTitle, {
      helpMessage: _ctx.helpMessage,
      normal: ""
    }, {
      default: withCtx(() => [
        _ctx.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
      ]),
      _: 3
    }, 8, ["helpMessage"]),
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}__action`)
    }, [
      renderSlot(_ctx.$slots, "action"),
      _ctx.canExpan ? (openBlock(), createBlock(_component_BasicArrow, {
        key: 0,
        up: "",
        expand: _ctx.show,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("expand"))
      }, null, 8, ["expand"])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var CollapseHeader = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3]]);
const isServer = typeof window === "undefined";
function resizeHandler(entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  }
}
function addResizeListener(element, fn) {
  if (isServer)
    return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new index(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
}
function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__)
    return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
}
function triggerWindowResize() {
  const event = document.createEvent("HTMLEvents");
  event.initEvent("resize", true, true);
  event.eventType = "message";
  window.dispatchEvent(event);
}
var CollapseContainer_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "p-2" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, default: "" },
    loading: { type: Boolean },
    canExpan: { type: Boolean, default: true },
    helpMessage: {
      type: [Array, String],
      default: ""
    },
    triggerWindowResize: { type: Boolean },
    lazyTime: { type: Number, default: 0 }
  },
  setup(__props) {
    const props2 = __props;
    const show = ref(true);
    const { prefixCls: prefixCls2 } = useDesign("collapse-container");
    function handleExpand() {
      show.value = !show.value;
      if (props2.triggerWindowResize) {
        useTimeoutFn(triggerWindowResize, 200);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls2))
      }, [
        createVNode(CollapseHeader, mergeProps(props2, {
          prefixCls: unref(prefixCls2),
          show: show.value,
          onExpand: handleExpand
        }), {
          title: withCtx(() => [
            renderSlot(_ctx.$slots, "title")
          ]),
          action: withCtx(() => [
            renderSlot(_ctx.$slots, "action")
          ]),
          _: 3
        }, 16, ["prefixCls", "show"]),
        createBaseVNode("div", _hoisted_1$6, [
          createVNode(unref(CollapseTransition), { enable: __props.canExpan }, {
            default: withCtx(() => [
              __props.loading ? (openBlock(), createBlock(unref(Skeleton), {
                key: 0,
                active: __props.loading
              }, null, 8, ["active"])) : withDirectives((openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(`${unref(prefixCls2)}__body`)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)), [
                [vShow, show.value]
              ])
            ]),
            _: 3
          }, 8, ["enable"])
        ]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls2)}__footer`)
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var componentSetting = {
  table: {
    fetchSetting: {
      pageField: "page",
      sizeField: "pageSize",
      listField: "items",
      totalField: "total"
    },
    pageSizeOptions: ["10", "50", "80", "100"],
    defaultPageSize: 10,
    defaultSize: "middle",
    defaultSortFn: (sortInfo) => {
      const { field, order } = sortInfo;
      if (field && order) {
        return {
          field,
          order
        };
      } else {
        return {};
      }
    },
    defaultFilterFn: (data) => {
      return data;
    }
  },
  scrollbar: {
    native: false
  }
};
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
function renderThumbStyle({ move: move2, size, bar }) {
  const style = {};
  const translate = `translate${bar.axis}(${move2}%)`;
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}
function extend(to, _from) {
  return Object.assign(to, _from);
}
function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
var Bar = defineComponent({
  name: "Bar",
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  setup(props2) {
    const instance = getCurrentInstance();
    const thumb = ref();
    const wrap = inject("scroll-bar-wrap", {});
    const bar = computed(() => {
      return BAR_MAP[props2.vertical ? "vertical" : "horizontal"];
    });
    const barStore = ref({});
    const cursorDown = ref();
    const clickThumbHandler = (e) => {
      var _a2;
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e);
      barStore.value[bar.value.axis] = e.currentTarget[bar.value.offset] - (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      var _a2;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 / ((_a2 = instance == null ? void 0 : instance.vnode.el) == null ? void 0 : _a2[bar.value.offset]);
      wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown.value = true;
      on(document, "mousemove", mouseMoveDocumentHandler);
      on(document, "mouseup", mouseUpDocumentHandler);
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      var _a2, _b;
      if (cursorDown.value === false)
        return;
      const prevPage = barStore.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (((_a2 = instance == null ? void 0 : instance.vnode.el) == null ? void 0 : _a2.getBoundingClientRect()[bar.value.direction]) - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / ((_b = instance == null ? void 0 : instance.vnode.el) == null ? void 0 : _b[bar.value.offset]);
      wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
    };
    function mouseUpDocumentHandler() {
      cursorDown.value = false;
      barStore.value[bar.value.axis] = 0;
      off(document, "mousemove", mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
    onUnmounted(() => {
      off(document, "mouseup", mouseUpDocumentHandler);
    });
    return () => h("div", {
      class: ["scrollbar__bar", "is-" + bar.value.key],
      onMousedown: clickTrackHandler
    }, h("div", {
      ref: thumb,
      class: "scrollbar__thumb",
      onMousedown: clickThumbHandler,
      style: renderThumbStyle({
        size: props2.size,
        move: props2.move,
        bar: bar.value
      })
    }));
  }
});
var Scrollbar_vue_vue_type_style_index_0_lang = "";
const { scrollbar } = componentSetting;
const _sfc_main$a = defineComponent({
  name: "Scrollbar",
  components: { Bar },
  props: {
    native: {
      type: Boolean,
      default: (_a = scrollbar == null ? void 0 : scrollbar.native) != null ? _a : false
    },
    wrapStyle: {
      type: [String, Array],
      default: ""
    },
    wrapClass: {
      type: [String, Array],
      default: ""
    },
    viewClass: {
      type: [String, Array],
      default: ""
    },
    viewStyle: {
      type: [String, Array],
      default: ""
    },
    noresize: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props2) {
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const moveX = ref(0);
    const moveY = ref(0);
    const wrap = ref();
    const resize = ref();
    provide("scroll-bar-wrap", wrap);
    const style = computed(() => {
      if (Array.isArray(props2.wrapStyle)) {
        return toObject(props2.wrapStyle);
      }
      return props2.wrapStyle;
    });
    const handleScroll = () => {
      if (!props2.native) {
        moveY.value = unref(wrap).scrollTop * 100 / unref(wrap).clientHeight;
        moveX.value = unref(wrap).scrollLeft * 100 / unref(wrap).clientWidth;
      }
    };
    const update = () => {
      if (!unref(wrap))
        return;
      const heightPercentage = unref(wrap).clientHeight * 100 / unref(wrap).scrollHeight;
      const widthPercentage = unref(wrap).clientWidth * 100 / unref(wrap).scrollWidth;
      sizeHeight.value = heightPercentage < 100 ? heightPercentage + "%" : "";
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + "%" : "";
    };
    onMounted(() => {
      if (props2.native)
        return;
      nextTick(update);
      if (!props2.noresize) {
        addResizeListener(unref(resize), update);
        addResizeListener(unref(wrap), update);
        addEventListener("resize", update);
      }
    });
    onBeforeUnmount(() => {
      if (props2.native)
        return;
      if (!props2.noresize) {
        removeResizeListener(unref(resize), update);
        removeResizeListener(unref(wrap), update);
        removeEventListener("resize", update);
      }
    });
    return {
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
      style,
      wrap,
      resize,
      update,
      handleScroll
    };
  }
});
const _hoisted_1$5 = { class: "scrollbar" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bar = resolveComponent("bar");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", {
      ref: "wrap",
      class: normalizeClass([_ctx.wrapClass, "scrollbar__wrap", _ctx.native ? "" : "scrollbar__wrap--hidden-default"]),
      style: normalizeStyle(_ctx.style),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        ref: "resize",
        class: normalizeClass(["scrollbar__view", _ctx.viewClass]),
        style: normalizeStyle(_ctx.viewStyle)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    !_ctx.native ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_bar, {
        move: _ctx.moveX,
        size: _ctx.sizeWidth
      }, null, 8, ["move", "size"]),
      createVNode(_component_bar, {
        vertical: "",
        move: _ctx.moveY,
        size: _ctx.sizeHeight
      }, null, 8, ["move", "size"])
    ], 64)) : createCommentVNode("", true)
  ]);
}
var Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2]]);
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
const move = (el, amount) => {
  el.scrollTop = amount;
};
const position = (el) => {
  return el.scrollTop;
};
function useScrollTo({ el, to, duration = 500, callback }) {
  const isActiveRef = ref(false);
  const start = position(el);
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  duration = isUnDef(duration) ? 500 : duration;
  const animateScroll = function() {
    if (!unref(isActiveRef)) {
      return;
    }
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    move(el, val);
    if (currentTime < duration && unref(isActiveRef)) {
      requestAnimationFrame(animateScroll);
    } else {
      if (callback && isFunction(callback)) {
        callback();
      }
    }
  };
  const run = () => {
    isActiveRef.value = true;
    animateScroll();
  };
  const stop = () => {
    isActiveRef.value = false;
  };
  return { start: run, stop };
}
var ScrollContainer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = defineComponent({
  name: "ScrollContainer",
  components: { Scrollbar },
  setup() {
    const scrollbarRef = ref(null);
    function scrollTo(to, duration = 500) {
      const scrollbar2 = unref(scrollbarRef);
      if (!scrollbar2) {
        return;
      }
      nextTick(() => {
        const wrap = unref(scrollbar2.wrap);
        if (!wrap) {
          return;
        }
        const { start } = useScrollTo({
          el: wrap,
          to,
          duration
        });
        start();
      });
    }
    function getScrollWrap() {
      const scrollbar2 = unref(scrollbarRef);
      if (!scrollbar2) {
        return null;
      }
      return scrollbar2.wrap;
    }
    function scrollBottom() {
      const scrollbar2 = unref(scrollbarRef);
      if (!scrollbar2) {
        return;
      }
      nextTick(() => {
        const wrap = unref(scrollbar2.wrap);
        if (!wrap) {
          return;
        }
        const scrollHeight = wrap.scrollHeight;
        const { start } = useScrollTo({
          el: wrap,
          to: scrollHeight
        });
        start();
      });
    }
    return {
      scrollbarRef,
      scrollTo,
      scrollBottom,
      getScrollWrap
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Scrollbar = resolveComponent("Scrollbar");
  return openBlock(), createBlock(_component_Scrollbar, mergeProps({
    ref: "scrollbarRef",
    class: "scroll-container"
  }, _ctx.$attrs), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var scrollContainer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
function useIntersectionObserver({
  target,
  root,
  onIntersect,
  rootMargin = "0px",
  threshold = 0.1
}) {
  let cleanup = () => {
  };
  const observer = ref(null);
  const stopEffect = watchEffect(() => {
    cleanup();
    observer.value = new IntersectionObserver(onIntersect, {
      root: root ? root.value : null,
      rootMargin,
      threshold
    });
    const current = target.value;
    current && observer.value.observe(current);
    cleanup = () => {
      if (observer.value) {
        observer.value.disconnect();
        target.value && observer.value.unobserve(target.value);
      }
    };
  });
  return {
    observer,
    stop: () => {
      cleanup();
      stopEffect();
    }
  };
}
const props = {
  timeout: { type: Number },
  viewport: {
    type: typeof window !== "undefined" ? window.HTMLElement : Object,
    default: () => null
  },
  threshold: { type: String, default: "0px" },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  tag: { type: String, default: "div" },
  maxWaitingTime: { type: Number, default: 80 },
  transitionName: { type: String, default: "lazy-container" }
};
const _sfc_main$8 = defineComponent({
  name: "LazyContainer",
  components: { Skeleton },
  inheritAttrs: false,
  props,
  emits: ["init"],
  setup(props2, { emit }) {
    const elRef = ref();
    const state = reactive({
      isInit: false,
      loading: false,
      intersectionObserverInstance: null
    });
    onMounted(() => {
      immediateInit();
      initIntersectionObserver();
    });
    function immediateInit() {
      const { timeout } = props2;
      timeout && useTimeoutFn(() => {
        init();
      }, timeout);
    }
    function init() {
      state.loading = true;
      useTimeoutFn(() => {
        if (state.isInit)
          return;
        state.isInit = true;
        emit("init");
      }, props2.maxWaitingTime || 80);
    }
    function initIntersectionObserver() {
      const { timeout, direction, threshold } = props2;
      if (timeout)
        return;
      let rootMargin = "0px";
      switch (direction) {
        case "vertical":
          rootMargin = `${threshold} 0px`;
          break;
        case "horizontal":
          rootMargin = `0px ${threshold}`;
          break;
      }
      try {
        const { stop, observer } = useIntersectionObserver({
          rootMargin,
          target: toRef(elRef.value, "$el"),
          onIntersect: (entries) => {
            const isIntersecting = entries[0].isIntersecting || entries[0].intersectionRatio;
            if (isIntersecting) {
              init();
              if (observer) {
                stop();
              }
            }
          },
          root: toRef(props2, "viewport")
        });
      } catch (e) {
        init();
      }
    }
    return __spreadValues({
      elRef
    }, toRefs(state));
  }
});
const _hoisted_1$4 = { key: "component" };
const _hoisted_2$3 = { key: "skeleton" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Skeleton = resolveComponent("Skeleton");
  return openBlock(), createBlock(TransitionGroup, mergeProps({ class: "h-full w-full" }, _ctx.$attrs, {
    ref: "elRef",
    name: _ctx.transitionName,
    tag: _ctx.tag,
    mode: "out-in"
  }), {
    default: withCtx(() => [
      _ctx.isInit ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        renderSlot(_ctx.$slots, "default", { loading: _ctx.loading })
      ])) : (openBlock(), createElementBlock("div", _hoisted_2$3, [
        _ctx.$slots.skeleton ? renderSlot(_ctx.$slots, "skeleton", { key: 0 }) : (openBlock(), createBlock(_component_Skeleton, { key: 1 }))
      ]))
    ]),
    _: 3
  }, 16, ["name", "tag"]);
}
var lazyContainer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
const CollapseContainer = withInstall(_sfc_main$b);
const ScrollContainer = withInstall(scrollContainer);
const LazyContainer = withInstall(lazyContainer);
var iconsData = {
  prefix: "ant-design",
  icons: [
    "account-book-filled",
    "account-book-outlined",
    "account-book-twotone",
    "aim-outlined",
    "alert-filled",
    "alert-outlined",
    "alert-twotone",
    "alibaba-outlined",
    "align-center-outlined",
    "align-left-outlined",
    "align-right-outlined",
    "alipay-circle-filled",
    "alipay-circle-outlined",
    "alipay-outlined",
    "alipay-square-filled",
    "aliwangwang-filled",
    "aliwangwang-outlined",
    "aliyun-outlined",
    "amazon-circle-filled",
    "amazon-outlined",
    "amazon-square-filled",
    "android-filled",
    "android-outlined",
    "ant-cloud-outlined",
    "ant-design-outlined",
    "apartment-outlined",
    "api-filled",
    "api-outlined",
    "api-twotone",
    "apple-filled",
    "apple-outlined",
    "appstore-add-outlined",
    "appstore-filled",
    "appstore-outlined",
    "appstore-twotone",
    "area-chart-outlined",
    "arrow-down-outlined",
    "arrow-left-outlined",
    "arrow-right-outlined",
    "arrow-up-outlined",
    "arrows-alt-outlined",
    "audio-filled",
    "audio-muted-outlined",
    "audio-outlined",
    "audio-twotone",
    "audit-outlined",
    "backward-filled",
    "backward-outlined",
    "bank-filled",
    "bank-outlined",
    "bank-twotone",
    "bar-chart-outlined",
    "barcode-outlined",
    "bars-outlined",
    "behance-circle-filled",
    "behance-outlined",
    "behance-square-filled",
    "behance-square-outlined",
    "bell-filled",
    "bell-outlined",
    "bell-twotone",
    "bg-colors-outlined",
    "block-outlined",
    "bold-outlined",
    "book-filled",
    "book-outlined",
    "book-twotone",
    "border-bottom-outlined",
    "border-horizontal-outlined",
    "border-inner-outlined",
    "border-left-outlined",
    "border-outer-outlined",
    "border-outlined",
    "border-right-outlined",
    "border-top-outlined",
    "border-verticle-outlined",
    "borderless-table-outlined",
    "box-plot-filled",
    "box-plot-outlined",
    "box-plot-twotone",
    "branches-outlined",
    "bug-filled",
    "bug-outlined",
    "bug-twotone",
    "build-filled",
    "build-outlined",
    "build-twotone",
    "bulb-filled",
    "bulb-outlined",
    "bulb-twotone",
    "calculator-filled",
    "calculator-outlined",
    "calculator-twotone",
    "calendar-filled",
    "calendar-outlined",
    "calendar-twotone",
    "camera-filled",
    "camera-outlined",
    "camera-twotone",
    "car-filled",
    "car-outlined",
    "car-twotone",
    "caret-down-filled",
    "caret-down-outlined",
    "caret-left-filled",
    "caret-left-outlined",
    "caret-right-filled",
    "caret-right-outlined",
    "caret-up-filled",
    "caret-up-outlined",
    "carry-out-filled",
    "carry-out-outlined",
    "carry-out-twotone",
    "check-circle-filled",
    "check-circle-outlined",
    "check-circle-twotone",
    "check-outlined",
    "check-square-filled",
    "check-square-outlined",
    "check-square-twotone",
    "chrome-filled",
    "chrome-outlined",
    "ci-circle-filled",
    "ci-circle-outlined",
    "ci-circle-twotone",
    "ci-outlined",
    "ci-twotone",
    "clear-outlined",
    "clock-circle-filled",
    "clock-circle-outlined",
    "clock-circle-twotone",
    "close-circle-filled",
    "close-circle-outlined",
    "close-circle-twotone",
    "close-outlined",
    "close-square-filled",
    "close-square-outlined",
    "close-square-twotone",
    "cloud-download-outlined",
    "cloud-filled",
    "cloud-outlined",
    "cloud-server-outlined",
    "cloud-sync-outlined",
    "cloud-twotone",
    "cloud-upload-outlined",
    "cluster-outlined",
    "code-filled",
    "code-outlined",
    "code-sandbox-circle-filled",
    "code-sandbox-outlined",
    "code-sandbox-square-filled",
    "code-twotone",
    "codepen-circle-filled",
    "codepen-circle-outlined",
    "codepen-outlined",
    "codepen-square-filled",
    "coffee-outlined",
    "column-height-outlined",
    "column-width-outlined",
    "comment-outlined",
    "compass-filled",
    "compass-outlined",
    "compass-twotone",
    "compress-outlined",
    "console-sql-outlined",
    "contacts-filled",
    "contacts-outlined",
    "contacts-twotone",
    "container-filled",
    "container-outlined",
    "container-twotone",
    "control-filled",
    "control-outlined",
    "control-twotone",
    "copy-filled",
    "copy-outlined",
    "copy-twotone",
    "copyright-circle-filled",
    "copyright-circle-outlined",
    "copyright-circle-twotone",
    "copyright-outlined",
    "copyright-twotone",
    "credit-card-filled",
    "credit-card-outlined",
    "credit-card-twotone",
    "crown-filled",
    "crown-outlined",
    "crown-twotone",
    "customer-service-filled",
    "customer-service-outlined",
    "customer-service-twotone",
    "dash-outlined",
    "dashboard-filled",
    "dashboard-outlined",
    "dashboard-twotone",
    "database-filled",
    "database-outlined",
    "database-twotone",
    "delete-column-outlined",
    "delete-filled",
    "delete-outlined",
    "delete-row-outlined",
    "delete-twotone",
    "delivered-procedure-outlined",
    "deployment-unit-outlined",
    "desktop-outlined",
    "diff-filled",
    "diff-outlined",
    "diff-twotone",
    "dingding-outlined",
    "dingtalk-circle-filled",
    "dingtalk-outlined",
    "dingtalk-square-filled",
    "disconnect-outlined",
    "dislike-filled",
    "dislike-outlined",
    "dislike-twotone",
    "dollar-circle-filled",
    "dollar-circle-outlined",
    "dollar-circle-twotone",
    "dollar-outlined",
    "dollar-twotone",
    "dot-chart-outlined",
    "double-left-outlined",
    "double-right-outlined",
    "down-circle-filled",
    "down-circle-outlined",
    "down-circle-twotone",
    "down-outlined",
    "down-square-filled",
    "down-square-outlined",
    "down-square-twotone",
    "download-outlined",
    "drag-outlined",
    "dribbble-circle-filled",
    "dribbble-outlined",
    "dribbble-square-filled",
    "dribbble-square-outlined",
    "dropbox-circle-filled",
    "dropbox-outlined",
    "dropbox-square-filled",
    "edit-filled",
    "edit-outlined",
    "edit-twotone",
    "ellipsis-outlined",
    "enter-outlined",
    "environment-filled",
    "environment-outlined",
    "environment-twotone",
    "euro-circle-filled",
    "euro-circle-outlined",
    "euro-circle-twotone",
    "euro-outlined",
    "euro-twotone",
    "exception-outlined",
    "exclamation-circle-filled",
    "exclamation-circle-outlined",
    "exclamation-circle-twotone",
    "exclamation-outlined",
    "expand-alt-outlined",
    "expand-outlined",
    "experiment-filled",
    "experiment-outlined",
    "experiment-twotone",
    "export-outlined",
    "eye-filled",
    "eye-invisible-filled",
    "eye-invisible-outlined",
    "eye-invisible-twotone",
    "eye-outlined",
    "eye-twotone",
    "facebook-filled",
    "facebook-outlined",
    "fall-outlined",
    "fast-backward-filled",
    "fast-backward-outlined",
    "fast-forward-filled",
    "fast-forward-outlined",
    "field-binary-outlined",
    "field-number-outlined",
    "field-string-outlined",
    "field-time-outlined",
    "file-add-filled",
    "file-add-outlined",
    "file-add-twotone",
    "file-done-outlined",
    "file-excel-filled",
    "file-excel-outlined",
    "file-excel-twotone",
    "file-exclamation-filled",
    "file-exclamation-outlined",
    "file-exclamation-twotone",
    "file-filled",
    "file-gif-outlined",
    "file-image-filled",
    "file-image-outlined",
    "file-image-twotone",
    "file-jpg-outlined",
    "file-markdown-filled",
    "file-markdown-outlined",
    "file-markdown-twotone",
    "file-outlined",
    "file-pdf-filled",
    "file-pdf-outlined",
    "file-pdf-twotone",
    "file-ppt-filled",
    "file-ppt-outlined",
    "file-ppt-twotone",
    "file-protect-outlined",
    "file-search-outlined",
    "file-sync-outlined",
    "file-text-filled",
    "file-text-outlined",
    "file-text-twotone",
    "file-twotone",
    "file-unknown-filled",
    "file-unknown-outlined",
    "file-unknown-twotone",
    "file-word-filled",
    "file-word-outlined",
    "file-word-twotone",
    "file-zip-filled",
    "file-zip-outlined",
    "file-zip-twotone",
    "filter-filled",
    "filter-outlined",
    "filter-twotone",
    "fire-filled",
    "fire-outlined",
    "fire-twotone",
    "flag-filled",
    "flag-outlined",
    "flag-twotone",
    "folder-add-filled",
    "folder-add-outlined",
    "folder-add-twotone",
    "folder-filled",
    "folder-open-filled",
    "folder-open-outlined",
    "folder-open-twotone",
    "folder-outlined",
    "folder-twotone",
    "folder-view-outlined",
    "font-colors-outlined",
    "font-size-outlined",
    "fork-outlined",
    "form-outlined",
    "format-painter-filled",
    "format-painter-outlined",
    "forward-filled",
    "forward-outlined",
    "frown-filled",
    "frown-outlined",
    "frown-twotone",
    "fullscreen-exit-outlined",
    "fullscreen-outlined",
    "function-outlined",
    "fund-filled",
    "fund-outlined",
    "fund-projection-screen-outlined",
    "fund-twotone",
    "fund-view-outlined",
    "funnel-plot-filled",
    "funnel-plot-outlined",
    "funnel-plot-twotone",
    "gateway-outlined",
    "gif-outlined",
    "gift-filled",
    "gift-outlined",
    "gift-twotone",
    "github-filled",
    "github-outlined",
    "gitlab-filled",
    "gitlab-outlined",
    "global-outlined",
    "gold-filled",
    "gold-outlined",
    "gold-twotone",
    "golden-filled",
    "google-circle-filled",
    "google-outlined",
    "google-plus-circle-filled",
    "google-plus-outlined",
    "google-plus-square-filled",
    "google-square-filled",
    "group-outlined",
    "hdd-filled",
    "hdd-outlined",
    "hdd-twotone",
    "heart-filled",
    "heart-outlined",
    "heart-twotone",
    "heat-map-outlined",
    "highlight-filled",
    "highlight-outlined",
    "highlight-twotone",
    "history-outlined",
    "home-filled",
    "home-outlined",
    "home-twotone",
    "hourglass-filled",
    "hourglass-outlined",
    "hourglass-twotone",
    "html5-filled",
    "html5-outlined",
    "html5-twotone",
    "idcard-filled",
    "idcard-outlined",
    "idcard-twotone",
    "ie-circle-filled",
    "ie-outlined",
    "ie-square-filled",
    "import-outlined",
    "inbox-outlined",
    "info-circle-filled",
    "info-circle-outlined",
    "info-circle-twotone",
    "info-outlined",
    "insert-row-above-outlined",
    "insert-row-below-outlined",
    "insert-row-left-outlined",
    "insert-row-right-outlined",
    "instagram-filled",
    "instagram-outlined",
    "insurance-filled",
    "insurance-outlined",
    "insurance-twotone",
    "interaction-filled",
    "interaction-outlined",
    "interaction-twotone",
    "issues-close-outlined",
    "italic-outlined",
    "key-outlined",
    "laptop-outlined",
    "layout-filled",
    "layout-outlined",
    "layout-twotone",
    "left-circle-filled",
    "left-circle-outlined",
    "left-circle-twotone",
    "left-outlined",
    "left-square-filled",
    "left-square-outlined",
    "left-square-twotone",
    "like-filled",
    "like-outlined",
    "like-twotone",
    "line-chart-outlined",
    "line-height-outlined",
    "line-outlined",
    "link-outlined",
    "linkedin-filled",
    "linkedin-outlined",
    "loading-3-quarters-outlined",
    "loading-outlined",
    "lock-filled",
    "lock-outlined",
    "lock-twotone",
    "login-outlined",
    "logout-outlined",
    "mac-command-filled",
    "mac-command-outlined",
    "mail-filled",
    "mail-outlined",
    "mail-twotone",
    "man-outlined",
    "medicine-box-filled",
    "medicine-box-outlined",
    "medicine-box-twotone",
    "medium-circle-filled",
    "medium-outlined",
    "medium-square-filled",
    "medium-workmark-outlined",
    "meh-filled",
    "meh-outlined",
    "meh-twotone",
    "menu-fold-outlined",
    "menu-outlined",
    "menu-unfold-outlined",
    "merge-cells-outlined",
    "message-filled",
    "message-outlined",
    "message-twotone",
    "minus-circle-filled",
    "minus-circle-outlined",
    "minus-circle-twotone",
    "minus-outlined",
    "minus-square-filled",
    "minus-square-outlined",
    "minus-square-twotone",
    "mobile-filled",
    "mobile-outlined",
    "mobile-twotone",
    "money-collect-filled",
    "money-collect-outlined",
    "money-collect-twotone",
    "monitor-outlined",
    "more-outlined",
    "node-collapse-outlined",
    "node-expand-outlined",
    "node-index-outlined",
    "notification-filled",
    "notification-outlined",
    "notification-twotone",
    "number-outlined",
    "one-to-one-outlined",
    "ordered-list-outlined",
    "paper-clip-outlined",
    "partition-outlined",
    "pause-circle-filled",
    "pause-circle-outlined",
    "pause-circle-twotone",
    "pause-outlined",
    "pay-circle-filled",
    "pay-circle-outlined",
    "percentage-outlined",
    "phone-filled",
    "phone-outlined",
    "phone-twotone",
    "pic-center-outlined",
    "pic-left-outlined",
    "pic-right-outlined",
    "picture-filled",
    "picture-outlined",
    "picture-twotone",
    "pie-chart-filled",
    "pie-chart-outlined",
    "pie-chart-twotone",
    "play-circle-filled",
    "play-circle-outlined",
    "play-circle-twotone",
    "play-square-filled",
    "play-square-outlined",
    "play-square-twotone",
    "plus-circle-filled",
    "plus-circle-outlined",
    "plus-circle-twotone",
    "plus-outlined",
    "plus-square-filled",
    "plus-square-outlined",
    "plus-square-twotone",
    "pound-circle-filled",
    "pound-circle-outlined",
    "pound-circle-twotone",
    "pound-outlined",
    "poweroff-outlined",
    "printer-filled",
    "printer-outlined",
    "printer-twotone",
    "profile-filled",
    "profile-outlined",
    "profile-twotone",
    "project-filled",
    "project-outlined",
    "project-twotone",
    "property-safety-filled",
    "property-safety-outlined",
    "property-safety-twotone",
    "pull-request-outlined",
    "pushpin-filled",
    "pushpin-outlined",
    "pushpin-twotone",
    "qq-circle-filled",
    "qq-outlined",
    "qq-square-filled",
    "qrcode-outlined",
    "question-circle-filled",
    "question-circle-outlined",
    "question-circle-twotone",
    "question-outlined",
    "radar-chart-outlined",
    "radius-bottomleft-outlined",
    "radius-bottomright-outlined",
    "radius-setting-outlined",
    "radius-upleft-outlined",
    "radius-upright-outlined",
    "read-filled",
    "read-outlined",
    "reconciliation-filled",
    "reconciliation-outlined",
    "reconciliation-twotone",
    "red-envelope-filled",
    "red-envelope-outlined",
    "red-envelope-twotone",
    "reddit-circle-filled",
    "reddit-outlined",
    "reddit-square-filled",
    "redo-outlined",
    "reload-outlined",
    "rest-filled",
    "rest-outlined",
    "rest-twotone",
    "retweet-outlined",
    "right-circle-filled",
    "right-circle-outlined",
    "right-circle-twotone",
    "right-outlined",
    "right-square-filled",
    "right-square-outlined",
    "right-square-twotone",
    "rise-outlined",
    "robot-filled",
    "robot-outlined",
    "rocket-filled",
    "rocket-outlined",
    "rocket-twotone",
    "rollback-outlined",
    "rotate-left-outlined",
    "rotate-right-outlined",
    "safety-certificate-filled",
    "safety-certificate-outlined",
    "safety-certificate-twotone",
    "safety-outlined",
    "save-filled",
    "save-outlined",
    "save-twotone",
    "scan-outlined",
    "schedule-filled",
    "schedule-outlined",
    "schedule-twotone",
    "scissor-outlined",
    "search-outlined",
    "security-scan-filled",
    "security-scan-outlined",
    "security-scan-twotone",
    "select-outlined",
    "send-outlined",
    "setting-filled",
    "setting-outlined",
    "setting-twotone",
    "shake-outlined",
    "share-alt-outlined",
    "shop-filled",
    "shop-outlined",
    "shop-twotone",
    "shopping-cart-outlined",
    "shopping-filled",
    "shopping-outlined",
    "shopping-twotone",
    "shrink-outlined",
    "signal-filled",
    "sisternode-outlined",
    "sketch-circle-filled",
    "sketch-outlined",
    "sketch-square-filled",
    "skin-filled",
    "skin-outlined",
    "skin-twotone",
    "skype-filled",
    "skype-outlined",
    "slack-circle-filled",
    "slack-outlined",
    "slack-square-filled",
    "slack-square-outlined",
    "sliders-filled",
    "sliders-outlined",
    "sliders-twotone",
    "small-dash-outlined",
    "smile-filled",
    "smile-outlined",
    "smile-twotone",
    "snippets-filled",
    "snippets-outlined",
    "snippets-twotone",
    "solution-outlined",
    "sort-ascending-outlined",
    "sort-descending-outlined",
    "sound-filled",
    "sound-outlined",
    "sound-twotone",
    "split-cells-outlined",
    "star-filled",
    "star-outlined",
    "star-twotone",
    "step-backward-filled",
    "step-backward-outlined",
    "step-forward-filled",
    "step-forward-outlined",
    "stock-outlined",
    "stop-filled",
    "stop-outlined",
    "stop-twotone",
    "strikethrough-outlined",
    "subnode-outlined",
    "swap-left-outlined",
    "swap-outlined",
    "swap-right-outlined",
    "switcher-filled",
    "switcher-outlined",
    "switcher-twotone",
    "sync-outlined",
    "table-outlined",
    "tablet-filled",
    "tablet-outlined",
    "tablet-twotone",
    "tag-filled",
    "tag-outlined",
    "tag-twotone",
    "tags-filled",
    "tags-outlined",
    "tags-twotone",
    "taobao-circle-filled",
    "taobao-circle-outlined",
    "taobao-outlined",
    "taobao-square-filled",
    "team-outlined",
    "thunderbolt-filled",
    "thunderbolt-outlined",
    "thunderbolt-twotone",
    "to-top-outlined",
    "tool-filled",
    "tool-outlined",
    "tool-twotone",
    "trademark-circle-filled",
    "trademark-circle-outlined",
    "trademark-circle-twotone",
    "trademark-outlined",
    "transaction-outlined",
    "translation-outlined",
    "trophy-filled",
    "trophy-outlined",
    "trophy-twotone",
    "twitter-circle-filled",
    "twitter-outlined",
    "twitter-square-filled",
    "underline-outlined",
    "undo-outlined",
    "ungroup-outlined",
    "unlock-filled",
    "unlock-outlined",
    "unlock-twotone",
    "unordered-list-outlined",
    "up-circle-filled",
    "up-circle-outlined",
    "up-circle-twotone",
    "up-outlined",
    "up-square-filled",
    "up-square-outlined",
    "up-square-twotone",
    "upload-outlined",
    "usb-filled",
    "usb-outlined",
    "usb-twotone",
    "user-add-outlined",
    "user-delete-outlined",
    "user-outlined",
    "user-switch-outlined",
    "usergroup-add-outlined",
    "usergroup-delete-outlined",
    "verified-outlined",
    "vertical-align-bottom-outlined",
    "vertical-align-middle-outlined",
    "vertical-align-top-outlined",
    "vertical-left-outlined",
    "vertical-right-outlined",
    "video-camera-add-outlined",
    "video-camera-filled",
    "video-camera-outlined",
    "video-camera-twotone",
    "wallet-filled",
    "wallet-outlined",
    "wallet-twotone",
    "warning-filled",
    "warning-outlined",
    "warning-twotone",
    "wechat-filled",
    "wechat-outlined",
    "weibo-circle-filled",
    "weibo-circle-outlined",
    "weibo-outlined",
    "weibo-square-filled",
    "weibo-square-outlined",
    "whats-app-outlined",
    "wifi-outlined",
    "windows-filled",
    "windows-outlined",
    "woman-outlined",
    "yahoo-filled",
    "yahoo-outlined",
    "youtube-filled",
    "youtube-outlined",
    "yuque-filled",
    "yuque-outlined",
    "zhihu-circle-filled",
    "zhihu-outlined",
    "zhihu-square-filled",
    "zoom-in-outlined",
    "zoom-out-outlined"
  ]
};
function pagination(list, pageNo, pageSize) {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret = offset + Number(pageSize) >= list.length ? list.slice(offset, list.length) : list.slice(offset, offset + Number(pageSize));
  return ret;
}
function usePagination(list, pageSize) {
  const currentPage = ref(1);
  const pageSizeRef = ref(pageSize);
  const getPaginationList = computed(() => {
    return pagination(unref(list), unref(currentPage), unref(pageSizeRef));
  });
  const getTotal = computed(() => {
    return unref(list).length;
  });
  function setCurrentPage(page) {
    currentPage.value = page;
  }
  function setPageSize(pageSize2) {
    pageSizeRef.value = pageSize2;
  }
  return { setCurrentPage, getTotal, setPageSize, getPaginationList };
}
function useCopyToClipboard(initial) {
  const clipboardRef = ref(initial || "");
  const isSuccessRef = ref(false);
  const copiedRef = ref(false);
  watch(clipboardRef, (str) => {
    if (isDef(str)) {
      copiedRef.value = true;
      isSuccessRef.value = copyTextToClipboard(str);
    }
  }, { immediate: !!initial, flush: "sync" });
  return { clipboardRef, isSuccessRef, copiedRef };
}
function copyTextToClipboard(input, { target = document.body } = {}) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = input;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  let originalRange;
  if (selection && selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = input.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch (e) {
    throw new Error(e);
  }
  element.remove();
  if (originalRange && selection) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}
var svgIcons = ["icon-download-count", "icon-dynamic-avatar-1", "icon-dynamic-avatar-2", "icon-dynamic-avatar-3", "icon-dynamic-avatar-4", "icon-dynamic-avatar-5", "icon-dynamic-avatar-6", "icon-moon", "icon-sun", "icon-test", "icon-total-sales", "icon-transaction", "icon-visit-count"];
var IconPicker_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "flex justify-between" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3 = { class: "flex flex-wrap px-2" };
const _hoisted_4 = ["onClick", "title"];
const _hoisted_5 = {
  key: 0,
  class: "flex py-2 items-center justify-center"
};
const _hoisted_6 = {
  key: 1,
  class: "p-5"
};
const _hoisted_7 = {
  key: 0,
  class: "cursor-pointer px-2 py-1 flex items-center"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    value: propTypes.string,
    width: propTypes.string.def("100%"),
    pageSize: propTypes.number.def(140),
    copy: propTypes.bool.def(false),
    mode: propTypes.oneOf(["svg", "iconify"]).def("iconify")
  },
  emits: ["change", "update:value"],
  setup(__props, { emit }) {
    const props2 = __props;
    const AInput = Input;
    const APopover = Popover;
    const APagination = Pagination;
    const AEmpty = Empty;
    function getIcons() {
      var _a2, _b;
      const data = iconsData;
      const prefix = (_a2 = data == null ? void 0 : data.prefix) != null ? _a2 : "";
      let result = [];
      if (prefix) {
        result = ((_b = data == null ? void 0 : data.icons) != null ? _b : []).map((item) => `${prefix}:${item}`);
      } else if (Array.isArray(iconsData)) {
        result = iconsData;
      }
      return result;
    }
    function getSvgIcons() {
      return svgIcons.map((icon) => icon.replace("icon-", ""));
    }
    const isSvgMode = props2.mode === "svg";
    const icons = isSvgMode ? getSvgIcons() : getIcons();
    const currentSelect = ref("");
    const visible = ref(false);
    const currentList = ref(icons);
    const { t } = useI18n();
    const { prefixCls: prefixCls2 } = useDesign("icon-picker");
    const debounceHandleSearchChange = useDebounceFn(handleSearchChange, 100);
    const { clipboardRef, isSuccessRef } = useCopyToClipboard(props2.value);
    const { createMessage } = useMessage();
    const { getPaginationList, getTotal, setCurrentPage } = usePagination(currentList, props2.pageSize);
    watchEffect(() => {
      currentSelect.value = props2.value;
    });
    watch(() => currentSelect.value, (v) => {
      emit("update:value", v);
      return emit("change", v);
    });
    function handlePageChange(page) {
      setCurrentPage(page);
    }
    function handleClick(icon) {
      currentSelect.value = icon;
      if (props2.copy) {
        clipboardRef.value = icon;
        if (unref(isSuccessRef)) {
          createMessage.success(t("component.icon.copy"));
        }
      }
    }
    function handleSearchChange(e) {
      const value = e.target.value;
      if (!value) {
        setCurrentPage(1);
        currentList.value = icons;
        return;
      }
      currentList.value = icons.filter((item) => item.includes(value));
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(AInput), {
        disabled: "",
        style: normalizeStyle({ width: __props.width }),
        placeholder: unref(t)("component.icon.placeholder"),
        class: normalizeClass(unref(prefixCls2)),
        value: currentSelect.value,
        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => currentSelect.value = $event)
      }, {
        addonAfter: withCtx(() => [
          createVNode(unref(APopover), {
            placement: "bottomLeft",
            trigger: "click",
            modelValue: visible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
            overlayClassName: `${unref(prefixCls2)}-popover`
          }, {
            title: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createVNode(unref(AInput), {
                  placeholder: unref(t)("component.icon.search"),
                  onChange: unref(debounceHandleSearchChange),
                  allowClear: ""
                }, null, 8, ["placeholder", "onChange"])
              ])
            ]),
            content: withCtx(() => [
              unref(getPaginationList).length ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                createVNode(unref(ScrollContainer), { class: "border border-solid border-t-0" }, {
                  default: withCtx(() => [
                    createBaseVNode("ul", _hoisted_3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getPaginationList), (icon) => {
                        return openBlock(), createElementBlock("li", {
                          key: icon,
                          class: normalizeClass([currentSelect.value === icon ? "border border-primary" : "", "p-2 w-1/8 cursor-pointer mr-1 mt-1 flex justify-center items-center border border-solid hover:border-primary"]),
                          onClick: ($event) => handleClick(icon),
                          title: icon
                        }, [
                          isSvgMode ? (openBlock(), createBlock(SvgIcon, {
                            key: 0,
                            name: icon
                          }, null, 8, ["name"])) : (openBlock(), createBlock(Icon, {
                            key: 1,
                            icon
                          }, null, 8, ["icon"]))
                        ], 10, _hoisted_4);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }),
                unref(getTotal) >= __props.pageSize ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(unref(APagination), {
                    showLessItems: "",
                    size: "small",
                    pageSize: __props.pageSize,
                    total: unref(getTotal),
                    onChange: handlePageChange
                  }, null, 8, ["pageSize", "total"])
                ])) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(unref(AEmpty))
              ]))
            ]),
            default: withCtx(() => [
              isSvgMode && currentSelect.value ? (openBlock(), createElementBlock("span", _hoisted_7, [
                createVNode(SvgIcon, { name: currentSelect.value }, null, 8, ["name"])
              ])) : (openBlock(), createBlock(Icon, {
                key: 1,
                icon: currentSelect.value || "ion:apps-outline",
                class: "cursor-pointer px-2 py-1"
              }, null, 8, ["icon"]))
            ]),
            _: 1
          }, 8, ["modelValue", "overlayClassName"])
        ]),
        _: 1
      }, 8, ["style", "placeholder", "class", "value"]);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    icon: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(_ctx.$attrs.class)
      }, [
        createVNode(unref(Icon), { icon: __props.icon }, null, 8, ["icon"])
      ], 2);
    };
  }
});
var AppSearchFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { prefixCls: prefixCls2 } = useDesign("app-search-footer");
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(prefixCls2)}`)
      }, [
        createVNode(_sfc_main$6, {
          class: normalizeClass(`${unref(prefixCls2)}-item`),
          icon: "ant-design:enter-outlined"
        }, null, 8, ["class"]),
        createBaseVNode("span", null, toDisplayString(unref(t)("component.app.toSearch")), 1),
        createVNode(_sfc_main$6, {
          class: normalizeClass(`${unref(prefixCls2)}-item`),
          icon: "ion:arrow-up-outline"
        }, null, 8, ["class"]),
        createVNode(_sfc_main$6, {
          class: normalizeClass(`${unref(prefixCls2)}-item`),
          icon: "ion:arrow-down-outline"
        }, null, 8, ["class"]),
        createBaseVNode("span", null, toDisplayString(unref(t)("component.app.toNavigate")), 1),
        createVNode(_sfc_main$6, {
          class: normalizeClass(`${unref(prefixCls2)}-item`),
          icon: "mdi:keyboard-esc"
        }, null, 8, ["class"]),
        createBaseVNode("span", null, toDisplayString(unref(t)("common.closeText")), 1)
      ], 2);
    };
  }
});
var AppSearchFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6ec2a118"]]);
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (!isServer$1) {
  on(document, "mousedown", (e) => startClick = e);
  on(document, "mouseup", (e) => {
    for (const { documentHandler } of nodeList.values()) {
      documentHandler(e, startClick);
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value();
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
function useRefs() {
  const refs = ref([]);
  onBeforeUpdate(() => {
    refs.value = [];
  });
  const setRefs = (index2) => (el) => {
    refs.value[index2] = el;
  };
  return [refs, setRefs];
}
const modules = {};
const menuModules = [];
Object.keys(modules).forEach((key2) => {
  const mod = modules[key2].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  menuModules.push(...modList);
});
const getPermissionMode = () => {
  const appStore = useAppStoreWithOut();
  return appStore.getProjectConfig.permissionMode;
};
const isBackMode = () => {
  return getPermissionMode() === PermissionModeEnum.BACK;
};
const isRouteMappingMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROUTE_MAPPING;
};
const isRoleMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROLE;
};
const staticMenus = [];
(() => {
  menuModules.sort((a, b) => {
    return (a.orderNo || 0) - (b.orderNo || 0);
  });
  for (const menu of menuModules) {
    staticMenus.push(transformMenuModule(menu));
  }
})();
async function getAsyncMenus() {
  const permissionStore = usePermissionStore();
  if (isBackMode()) {
    return permissionStore.getBackMenuList.filter((item) => {
      var _a2;
      return !((_a2 = item.meta) == null ? void 0 : _a2.hideMenu) && !item.hideMenu;
    });
  }
  if (isRouteMappingMode()) {
    return permissionStore.getFrontMenuList.filter((item) => !item.hideMenu);
  }
  return staticMenus;
}
const getMenus = async () => {
  const menus = await getAsyncMenus();
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return filter(menus, basicFilter(routes));
  }
  return menus;
};
async function getCurrentParentPath(currentPath) {
  const menus = await getAsyncMenus();
  const allParentPath = await getAllParentPath(menus, currentPath);
  return allParentPath == null ? void 0 : allParentPath[0];
}
async function getShallowMenus() {
  const menus = await getAsyncMenus();
  const shallowMenuList = menus.map((item) => __spreadProps(__spreadValues({}, item), { children: void 0 }));
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return shallowMenuList.filter(basicFilter(routes));
  }
  return shallowMenuList;
}
async function getChildrenMenus(parentPath) {
  var _a2;
  const menus = await getMenus();
  const parent = menus.find((item) => item.path === parentPath);
  if (!parent || !parent.children || !!((_a2 = parent == null ? void 0 : parent.meta) == null ? void 0 : _a2.hideChildrenInMenu)) {
    return [];
  }
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return filter(parent.children, basicFilter(routes));
  }
  return parent.children;
}
function basicFilter(routes) {
  return (menu) => {
    const matchRoute = routes.find((route) => {
      var _a2, _b;
      if (isUrl(menu.path))
        return true;
      if ((_a2 = route.meta) == null ? void 0 : _a2.carryParam) {
        return pathToRegexp(route.path).test(menu.path);
      }
      const isSame = route.path === menu.path;
      if (!isSame)
        return false;
      if ((_b = route.meta) == null ? void 0 : _b.ignoreAuth)
        return true;
      return isSame || pathToRegexp(route.path).test(menu.path);
    });
    if (!matchRoute)
      return false;
    menu.icon = menu.icon || matchRoute.meta.icon;
    menu.meta = matchRoute.meta;
    return true;
  };
}
function transform(c) {
  const code = ["$", "(", ")", "*", "+", ".", "[", "]", "?", "\\", "^", "{", "}", "|"];
  return code.includes(c) ? `\\${c}` : c;
}
function createSearchReg(key2) {
  const keys = [...key2].map((item) => transform(item));
  const str = ["", ...keys, ""].join(".*");
  return new RegExp(str);
}
function useMenuSearch(refs, scrollWrap, emit) {
  const searchResult = ref([]);
  const keyword = ref("");
  const activeIndex = ref(-1);
  let menuList = [];
  const { t } = useI18n();
  const go = useGo();
  const handleSearch = useDebounceFn(search, 200);
  onBeforeMount(async () => {
    const list = await getMenus();
    menuList = cloneDeep(list);
    forEach(menuList, (item) => {
      item.name = t(item.name);
    });
  });
  function search(e) {
    e == null ? void 0 : e.stopPropagation();
    const key2 = e.target.value;
    keyword.value = key2.trim();
    if (!key2) {
      searchResult.value = [];
      return;
    }
    const reg = createSearchReg(unref(keyword));
    const filterMenu = filter(menuList, (item) => {
      return reg.test(item.name) && !item.hideMenu;
    });
    searchResult.value = handlerSearchResult(filterMenu, reg);
    activeIndex.value = 0;
  }
  function handlerSearchResult(filterMenu, reg, parent) {
    const ret = [];
    filterMenu.forEach((item) => {
      const { name, path, icon, children, hideMenu, meta } = item;
      if (!hideMenu && reg.test(name) && (!(children == null ? void 0 : children.length) || (meta == null ? void 0 : meta.hideChildrenInMenu))) {
        ret.push({
          name: (parent == null ? void 0 : parent.name) ? `${parent.name} > ${name}` : name,
          path,
          icon
        });
      }
      if (!(meta == null ? void 0 : meta.hideChildrenInMenu) && Array.isArray(children) && children.length) {
        ret.push(...handlerSearchResult(children, reg, item));
      }
    });
    return ret;
  }
  function handleMouseenter(e) {
    const index2 = e.target.dataset.index;
    activeIndex.value = Number(index2);
  }
  function handleUp() {
    if (!searchResult.value.length)
      return;
    activeIndex.value--;
    if (activeIndex.value < 0) {
      activeIndex.value = searchResult.value.length - 1;
    }
    handleScroll();
  }
  function handleDown() {
    if (!searchResult.value.length)
      return;
    activeIndex.value++;
    if (activeIndex.value > searchResult.value.length - 1) {
      activeIndex.value = 0;
    }
    handleScroll();
  }
  function handleScroll() {
    const refList = unref(refs);
    if (!refList || !Array.isArray(refList) || refList.length === 0 || !unref(scrollWrap)) {
      return;
    }
    const index2 = unref(activeIndex);
    const currentRef = refList[index2];
    if (!currentRef) {
      return;
    }
    const wrapEl = unref(scrollWrap);
    if (!wrapEl) {
      return;
    }
    const scrollHeight = currentRef.offsetTop + currentRef.offsetHeight;
    const wrapHeight = wrapEl.offsetHeight;
    const { start } = useScrollTo({
      el: wrapEl,
      duration: 100,
      to: scrollHeight - wrapHeight
    });
    start();
  }
  async function handleEnter() {
    if (!searchResult.value.length) {
      return;
    }
    const result = unref(searchResult);
    const index2 = unref(activeIndex);
    if (result.length === 0 || index2 < 0) {
      return;
    }
    const to = result[index2];
    handleClose();
    await nextTick();
    go(to.path);
  }
  function handleClose() {
    searchResult.value = [];
    emit("close");
  }
  onKeyStroke("Enter", handleEnter);
  onKeyStroke("ArrowUp", handleUp);
  onKeyStroke("ArrowDown", handleDown);
  onKeyStroke("Escape", handleClose);
  return { handleSearch, searchResult, keyword, activeIndex, handleMouseenter, handleEnter };
}
function useAppInject() {
  const values = useAppProviderContext();
  return {
    getIsMobile: computed(() => unref(values.isMobile))
  };
}
var AppSearchModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = ["data-index"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props2 = __props;
    const scrollWrap = ref(null);
    const inputRef = ref(null);
    const { t } = useI18n();
    const { prefixCls: prefixCls2 } = useDesign("app-search-modal");
    const [refs, setRefs] = useRefs();
    const { getIsMobile } = useAppInject();
    const { handleSearch, searchResult, keyword, activeIndex, handleEnter, handleMouseenter } = useMenuSearch(refs, scrollWrap, emit);
    const getIsNotData = computed(() => !keyword || unref(searchResult).length === 0);
    const getClass = computed(() => {
      return [
        prefixCls2,
        {
          [`${prefixCls2}--mobile`]: unref(getIsMobile)
        }
      ];
    });
    watch(() => props2.visible, (visible) => {
      visible && nextTick(() => {
        var _a2;
        (_a2 = unref(inputRef)) == null ? void 0 : _a2.focus();
      });
    });
    function handleClose() {
      searchResult.value = [];
      emit("close");
    }
    return (_ctx, _cache) => {
      const _component_a_input = resolveComponent("a-input");
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          name: "zoom-fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            __props.visible ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(getClass)),
              onClick: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            }, [
              withDirectives((openBlock(), createElementBlock("div", {
                class: normalizeClass(`${unref(prefixCls2)}-content`)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(`${unref(prefixCls2)}-input__wrapper`)
                }, [
                  createVNode(_component_a_input, {
                    class: normalizeClass(`${unref(prefixCls2)}-input`),
                    placeholder: unref(t)("common.searchText"),
                    ref_key: "inputRef",
                    ref: inputRef,
                    "allow-clear": "",
                    onChange: unref(handleSearch)
                  }, {
                    prefix: withCtx(() => [
                      createVNode(unref(SearchOutlined))
                    ]),
                    _: 1
                  }, 8, ["class", "placeholder", "onChange"]),
                  createBaseVNode("span", {
                    class: normalizeClass(`${unref(prefixCls2)}-cancel`),
                    onClick: handleClose
                  }, toDisplayString(unref(t)("common.cancelText")), 3)
                ], 2),
                withDirectives(createBaseVNode("div", {
                  class: normalizeClass(`${unref(prefixCls2)}-not-data`)
                }, toDisplayString(unref(t)("component.app.searchNotData")), 3), [
                  [vShow, unref(getIsNotData)]
                ]),
                withDirectives(createBaseVNode("ul", {
                  class: normalizeClass(`${unref(prefixCls2)}-list`),
                  ref_key: "scrollWrap",
                  ref: scrollWrap
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(searchResult), (item, index2) => {
                    return openBlock(), createElementBlock("li", {
                      ref_for: true,
                      ref: unref(setRefs)(index2),
                      key: item.path,
                      "data-index": index2,
                      onMouseenter: _cache[0] || (_cache[0] = (...args) => unref(handleMouseenter) && unref(handleMouseenter)(...args)),
                      onClick: _cache[1] || (_cache[1] = (...args) => unref(handleEnter) && unref(handleEnter)(...args)),
                      class: normalizeClass([
                        `${unref(prefixCls2)}-list__item`,
                        {
                          [`${unref(prefixCls2)}-list__item--active`]: unref(activeIndex) === index2
                        }
                      ])
                    }, [
                      createBaseVNode("div", {
                        class: normalizeClass(`${unref(prefixCls2)}-list__item-icon`)
                      }, [
                        createVNode(unref(Icon), {
                          icon: item.icon || "mdi:form-select",
                          size: 20
                        }, null, 8, ["icon"])
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(`${unref(prefixCls2)}-list__item-text`)
                      }, toDisplayString(item.name), 3),
                      createBaseVNode("div", {
                        class: normalizeClass(`${unref(prefixCls2)}-list__item-enter`)
                      }, [
                        createVNode(unref(Icon), {
                          icon: "ant-design:enter-outlined",
                          size: 20
                        })
                      ], 2)
                    ], 42, _hoisted_1$2);
                  }), 128))
                ], 2), [
                  [vShow, !unref(getIsNotData)]
                ]),
                createVNode(AppSearchFooter)
              ], 2)), [
                [unref(ClickOutside), handleClose]
              ])
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var AppSearchModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2336da2c"]]);
var _sfc_main$3 = defineComponent({
  name: "AppSearch",
  setup() {
    const showModal = ref(false);
    const {
      t
    } = useI18n();
    function changeModal(show) {
      showModal.value = show;
    }
    return () => {
      return createVNode("div", {
        "class": "p-1",
        "onClick": changeModal.bind(null, true)
      }, [createVNode(Tooltip, null, {
        title: () => t("common.searchText"),
        default: () => createVNode(SearchOutlined, null, null)
      }), createVNode(AppSearchModal, {
        "onClose": changeModal.bind(null, false),
        "visible": unref(showModal)
      }, null)]);
    };
  }
});
const _hoisted_1$1 = { class: "ml-1" };
const _hoisted_2$1 = { class: "ml-1" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    popconfirm: Boolean,
    trigger: {
      type: [Array],
      default: () => {
        return ["contextmenu"];
      }
    },
    dropMenuList: {
      type: Array,
      default: () => []
    },
    selectedKeys: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menuEvent"],
  setup(__props, { emit }) {
    const props2 = __props;
    const ADropdown = Dropdown$1;
    const AMenu = Menu;
    const AMenuItem = Menu.Item;
    const AMenuDivider = Menu.Divider;
    const APopconfirm = Popconfirm;
    function handleClickMenu(item) {
      var _a2;
      const { event } = item;
      const menu = props2.dropMenuList.find((item2) => `${item2.event}` === `${event}`);
      emit("menuEvent", menu);
      (_a2 = item.onClick) == null ? void 0 : _a2.call(item);
    }
    const getPopConfirmAttrs = computed(() => {
      return (attrs) => {
        const originAttrs = omit(attrs, ["confirm", "cancel", "icon"]);
        if (!attrs.onConfirm && attrs.confirm && isFunction(attrs.confirm))
          originAttrs["onConfirm"] = attrs.confirm;
        if (!attrs.onCancel && attrs.cancel && isFunction(attrs.cancel))
          originAttrs["onCancel"] = attrs.cancel;
        return originAttrs;
      };
    });
    const getAttr = (key2) => ({ key: key2 });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ADropdown), mergeProps({ trigger: __props.trigger }, _ctx.$attrs), {
        overlay: withCtx(() => [
          createVNode(unref(AMenu), { selectedKeys: __props.selectedKeys }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dropMenuList, (item) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: `${item.event}`
                }, [
                  createVNode(unref(AMenuItem), mergeProps(getAttr(item.event), {
                    onClick: ($event) => handleClickMenu(item),
                    disabled: item.disabled
                  }), {
                    default: withCtx(() => [
                      __props.popconfirm && item.popConfirm ? (openBlock(), createBlock(unref(APopconfirm), normalizeProps(mergeProps({ key: 0 }, unref(getPopConfirmAttrs)(item.popConfirm))), createSlots({
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            item.icon ? (openBlock(), createBlock(unref(Icon), {
                              key: 0,
                              icon: item.icon
                            }, null, 8, ["icon"])) : createCommentVNode("", true),
                            createBaseVNode("span", _hoisted_1$1, toDisplayString(item.text), 1)
                          ])
                        ]),
                        _: 2
                      }, [
                        item.popConfirm.icon ? {
                          name: "icon",
                          fn: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: item.popConfirm.icon
                            }, null, 8, ["icon"])
                          ])
                        } : void 0
                      ]), 1040)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        item.icon ? (openBlock(), createBlock(unref(Icon), {
                          key: 0,
                          icon: item.icon
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createBaseVNode("span", _hoisted_2$1, toDisplayString(item.text), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1040, ["onClick", "disabled"]),
                  item.divider ? (openBlock(), createBlock(unref(AMenuDivider), {
                    key: `d-${item.event}`
                  })) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ]),
            _: 1
          }, 8, ["selectedKeys"])
        ]),
        default: withCtx(() => [
          createBaseVNode("span", null, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        _: 3
      }, 16, ["trigger"]);
    };
  }
});
const Dropdown = withInstall(_sfc_main$2);
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "./lang/en.ts":
      return __vitePreload(() => import("./en.c701a948.js"), true ? ["assets/en.c701a948.js","assets/index.91073af9.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css"] : void 0);
    case "./lang/zh_CN.ts":
      return __vitePreload(() => import("./zh_CN.4b5dd652.js"), true ? ["assets/zh_CN.4b5dd652.js","assets/index.91073af9.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css"] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
function setI18nLanguage(locale) {
  const localeStore = useLocaleStoreWithOut();
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  localeStore.setLocaleInfo({ locale });
  setHtmlPageLang(locale);
}
function useLocale() {
  const localeStore = useLocaleStoreWithOut();
  const getLocale = computed(() => localeStore.getLocale);
  const getShowLocalePicker = computed(() => localeStore.getShowPicker);
  const getAntdLocale = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = i18n.global.getLocaleMessage(unref(getLocale))) == null ? void 0 : _a2.antdLocale) != null ? _b : {};
  });
  async function changeLocale(locale) {
    const globalI18n = i18n.global;
    const currentLocale = unref(globalI18n.locale);
    if (currentLocale === locale) {
      return locale;
    }
    if (loadLocalePool.includes(locale)) {
      setI18nLanguage(locale);
      return locale;
    }
    const langModule = (await __variableDynamicImportRuntime0__(`./lang/${locale}.ts`)).default;
    if (!langModule)
      return;
    const { message } = langModule;
    globalI18n.setLocaleMessage(locale, message);
    loadLocalePool.push(locale);
    setI18nLanguage(locale);
    return locale;
  }
  return {
    getLocale,
    getShowLocalePicker,
    changeLocale,
    getAntdLocale
  };
}
var AppLocalePicker_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "cursor-pointer flex items-center" };
const _hoisted_2 = {
  key: 0,
  class: "ml-1"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    showText: { type: Boolean, default: true },
    reload: { type: Boolean }
  },
  setup(__props) {
    const props2 = __props;
    const selectedKeys = ref([]);
    const { changeLocale, getLocale } = useLocale();
    const getLocaleText = computed(() => {
      var _a2;
      const key2 = selectedKeys.value[0];
      if (!key2) {
        return "";
      }
      return (_a2 = localeList.find((item) => item.event === key2)) == null ? void 0 : _a2.text;
    });
    watchEffect(() => {
      selectedKeys.value = [unref(getLocale)];
    });
    async function toggleLocale(lang) {
      await changeLocale(lang);
      selectedKeys.value = [lang];
      props2.reload && location.reload();
    }
    function handleMenuEvent(menu) {
      if (unref(getLocale) === menu.event) {
        return;
      }
      toggleLocale(menu.event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        placement: "bottomCenter",
        trigger: ["click"],
        dropMenuList: unref(localeList),
        selectedKeys: selectedKeys.value,
        onMenuEvent: handleMenuEvent,
        overlayClassName: "app-locale-picker-overlay"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1, [
            createVNode(unref(Icon), { icon: "ion:language" }),
            __props.showText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(getLocaleText)), 1)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["dropMenuList", "selectedKeys"]);
    };
  }
});
function isHexColor(color) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}
function hexToRGB(hex) {
  let sHex = hex.toLowerCase();
  if (isHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
      }
      sHex = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sHex.slice(i, i + 2)));
    }
    return "RGB(" + sColorChange.join(",") + ")";
  }
  return sHex;
}
function colorIsDark(color) {
  if (!isHexColor(color))
    return;
  const [r, g, b] = hexToRGB(color).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((item) => Number(item));
  return r * 0.299 + g * 0.578 + b * 0.114 < 192;
}
function darken(color, amount) {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc(255 * amount / 100);
  return `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`;
}
function lighten(color, amount) {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc(255 * amount / 100);
  return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`;
}
function addLight(color, amount) {
  const cc = parseInt(color, 16) + amount;
  const c = cc > 255 ? 255 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}
function subtractLight(color, amount) {
  const cc = parseInt(color, 16) - amount;
  const c = cc < 0 ? 0 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}
const docEle = document.documentElement;
function toggleClass(flag, clsName, target) {
  const targetEl = target || document.body;
  let { className } = targetEl;
  className = className.replace(clsName, "");
  targetEl.className = flag ? `${className} ${clsName} ` : className;
}
function setCssVar(prop, val, dom = docEle) {
  dom.style.setProperty(prop, val);
}
const HEADER_BG_COLOR_VAR = "--header-bg-color";
const HEADER_BG_HOVER_COLOR_VAR = "--header-bg-hover-color";
const HEADER_MENU_ACTIVE_BG_COLOR_VAR = "--header-active-menu-bg-color";
const SIDER_DARK_BG_COLOR = "--sider-dark-bg-color";
const SIDER_DARK_DARKEN_BG_COLOR = "--sider-dark-darken-bg-color";
const SIDER_LIGHTEN_BG_COLOR = "--sider-dark-lighten-bg-color";
function updateHeaderBgColor(color) {
  const appStore = useAppStore();
  const darkMode = appStore.getDarkMode === ThemeEnum.DARK;
  if (!color) {
    if (darkMode) {
      color = "#151515";
    } else {
      color = appStore.getHeaderSetting.bgColor;
    }
  }
  setCssVar(HEADER_BG_COLOR_VAR, color);
  const hoverColor = lighten(color, 6);
  setCssVar(HEADER_BG_HOVER_COLOR_VAR, hoverColor);
  setCssVar(HEADER_MENU_ACTIVE_BG_COLOR_VAR, hoverColor);
  const isDark = colorIsDark(color);
  appStore.setProjectConfig({
    headerSetting: {
      theme: isDark || darkMode ? ThemeEnum.DARK : ThemeEnum.LIGHT
    }
  });
}
function updateSidebarBgColor(color) {
  const appStore = useAppStore();
  const darkMode = appStore.getDarkMode === ThemeEnum.DARK;
  if (!color) {
    if (darkMode) {
      color = "#212121";
    } else {
      color = appStore.getMenuSetting.bgColor;
    }
  }
  setCssVar(SIDER_DARK_BG_COLOR, color);
  setCssVar(SIDER_DARK_DARKEN_BG_COLOR, darken(color, 6));
  setCssVar(SIDER_LIGHTEN_BG_COLOR, lighten(color, 5));
  const isLight = ["#fff", "#ffffff"].includes(color.toLowerCase());
  appStore.setProjectConfig({
    menuSetting: {
      theme: isLight && !darkMode ? ThemeEnum.LIGHT : ThemeEnum.DARK
    }
  });
}
async function updateDarkTheme(mode = "light") {
  const htmlRoot = document.getElementById("htmlRoot");
  if (!htmlRoot) {
    return;
  }
  const hasDarkClass = hasClass(htmlRoot, "dark");
  if (mode === "dark") {
    if (!darkCssIsReady) {
      await loadDarkThemeCss();
    }
    htmlRoot.setAttribute("data-theme", "dark");
    if (!hasDarkClass) {
      addClass(htmlRoot, "dark");
    }
  } else {
    htmlRoot.setAttribute("data-theme", "light");
    if (hasDarkClass) {
      removeClass(htmlRoot, "dark");
    }
  }
}
var AppDarkModeToggle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { prefixCls: prefixCls2 } = useDesign("dark-switch");
    const { getDarkMode, setDarkMode, getShowDarkModeToggle } = useRootSetting();
    const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);
    const getClass = computed(() => [
      prefixCls2,
      {
        [`${prefixCls2}--dark`]: unref(isDark)
      }
    ]);
    function toggleDarkMode() {
      const darkMode = getDarkMode.value === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
      setDarkMode(darkMode);
      updateDarkTheme(darkMode);
      updateHeaderBgColor();
      updateSidebarBgColor();
    }
    return (_ctx, _cache) => {
      return unref(getShowDarkModeToggle) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(getClass)),
        onClick: toggleDarkMode
      }, [
        createBaseVNode("div", {
          class: normalizeClass(`${unref(prefixCls2)}-inner`)
        }, null, 2),
        createVNode(unref(SvgIcon), {
          size: "14",
          name: "sun"
        }),
        createVNode(unref(SvgIcon), {
          size: "14",
          name: "moon"
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var appDarkModeToggle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a49142b"]]);
const AppLogo = withInstall(appLogo);
const AppProvider = withInstall(_sfc_main$j);
const AppSearch = withInstall(_sfc_main$3);
const AppLocalePicker = withInstall(_sfc_main$1);
const AppDarkModeToggle = withInstall(appDarkModeToggle);
export { hackCss as $, AppProvider as A, BasicTitle as B, CollapseTransition as C, Dropdown as D, _sfc_main$7 as E, BasicHelp as F, BasicArrow as G, CollapseContainer as H, Icon as I, useCopyToClipboard as J, LogoImg as K, LazyContainer as L, FadeTransition as M, ScaleTransition as N, SlideYTransition as O, ScrollYTransition as P, SlideYReverseTransition as Q, ScrollYReverseTransition as R, ScrollContainer as S, SlideXTransition as T, ScrollXTransition as U, SlideXReverseTransition as V, ScrollXReverseTransition as W, ScaleRotateTransition as X, ExpandXTransition as Y, ExpandTransition as Z, _sfc_main$e as _, updateDarkTheme as a, SvgIcon as a0, removeResizeListener as a1, addResizeListener as a2, useRafThrottle as a3, updateHeaderBgColor as b, updateSidebarBgColor as c, useDesign as d, extendSlots as e, AppLocalePicker as f, AppDarkModeToggle as g, AppLogo as h, useMenuSetting as i, getCurrentParentPath as j, createContext as k, useContext as l, useAppInject as m, getMenus as n, getShallowMenus as o, propTypes as p, getChildrenMenus as q, useFullContent as r, AppSearch as s, toggleClass as t, useLocale as u, ClickOutside as v, triggerWindowResize as w, getViewportOffset as x, getSlot as y, componentSetting as z };
