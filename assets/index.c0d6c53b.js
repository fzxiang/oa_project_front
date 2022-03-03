var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
import { B as BasicDrawer, u as useDrawer } from "./index.350cf742.js";
import { d as defineComponent, O as computed, f as createVNode, b as unref, b6 as Divider, ag as Fragment, aa as mergeProps, r as resolveComponent, o as openBlock, R as createElementBlock } from "./vendor.faf2de98.js";
/* empty css                 */import { X as __vitePreload, a3 as ContentEnum, aG as TopMenuAlignEnum, aH as RouterTransitionEnum, M as MenuModeEnum, m as MenuTypeEnum, aI as MixSidebarTriggerEnum, a as useI18n, n as TriggerEnum, c as useAppStore, ag as useTransitionSetting, aJ as APP_PRESET_COLOR_LIST, aK as HEADER_PRESET_BG_COLOR_LIST, aL as SIDE_BAR_BG_COLOR_LIST, _ as _export_sfc } from "./index.89bba8b1.js";
import { c as createAsyncComponent, u as useHeaderSetting, a as useMultipleTabSetting } from "./index.409f15f2.js";
import { b as updateHeaderBgColor, c as updateSidebarBgColor, a as updateDarkTheme, i as useMenuSetting, g as AppDarkModeToggle, I as Icon } from "./index.035cec88.js";
import { a as useRootSetting } from "./useRootSetting.b4af9267.js";
import { a as updateColorWeak, u as updateGrayMode, c as changeTheme } from "./index.681ac155.js";
const TypePicker = createAsyncComponent(() => __vitePreload(() => import("./TypePicker.1e5fb6ee.js"), true ? ["assets/TypePicker.1e5fb6ee.js","assets/TypePicker.f844acff.css","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/index.89bba8b1.js","assets/useRootSetting.b4af9267.js"] : void 0));
const ThemeColorPicker = createAsyncComponent(() => __vitePreload(() => import("./ThemeColorPicker.eec312b8.js"), true ? ["assets/ThemeColorPicker.eec312b8.js","assets/ThemeColorPicker.f80748f6.css","assets/index.143500d6.css","assets/index.8c4bdb81.css","assets/index.2bd69081.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/index.89bba8b1.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/useRootSetting.b4af9267.js","assets/index.350cf742.js","assets/index.b9cca6a6.css","assets/useAttrs.d4bdb35c.js","assets/index.409f15f2.js","assets/index.9359761b.css","assets/index.b7c5ce55.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.eb16d7c9.js","assets/useTabs.28f16105.js","assets/lock.d6ff7b65.js","assets/index.681ac155.js"] : void 0));
const SettingFooter = createAsyncComponent(() => __vitePreload(() => import("./SettingFooter.75d139cc.js"), true ? ["assets/SettingFooter.75d139cc.js","assets/SettingFooter.9dbac32c.css","assets/index.89bba8b1.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/useRootSetting.b4af9267.js","assets/index.681ac155.js"] : void 0));
const SwitchItem = createAsyncComponent(() => __vitePreload(() => import("./SwitchItem.7dd77fa0.js"), true ? ["assets/SwitchItem.7dd77fa0.js","assets/SwitchItem.4b50f1f2.css","assets/index.1b56d25a.css","assets/index.143500d6.css","assets/index.8c4bdb81.css","assets/index.2bd69081.css","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/index.89bba8b1.js","assets/useRootSetting.b4af9267.js","assets/index.350cf742.js","assets/index.b9cca6a6.css","assets/useAttrs.d4bdb35c.js","assets/index.409f15f2.js","assets/index.9359761b.css","assets/index.b7c5ce55.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.eb16d7c9.js","assets/useTabs.28f16105.js","assets/lock.d6ff7b65.js","assets/index.681ac155.js"] : void 0));
const SelectItem = createAsyncComponent(() => __vitePreload(() => import("./SelectItem.2a76b611.js"), true ? ["assets/SelectItem.2a76b611.js","assets/SelectItem.af16fca5.css","assets/index.143500d6.css","assets/index.8c4bdb81.css","assets/index.2bd69081.css","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/index.89bba8b1.js","assets/useRootSetting.b4af9267.js","assets/index.350cf742.js","assets/index.b9cca6a6.css","assets/useAttrs.d4bdb35c.js","assets/index.409f15f2.js","assets/index.9359761b.css","assets/index.b7c5ce55.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.eb16d7c9.js","assets/useTabs.28f16105.js","assets/lock.d6ff7b65.js","assets/index.681ac155.js"] : void 0));
const InputNumberItem = createAsyncComponent(() => __vitePreload(() => import("./InputNumberItem.83aa8577.js"), true ? ["assets/InputNumberItem.83aa8577.js","assets/InputNumberItem.5cf1773f.css","assets/index.5f0c7a1e.css","assets/index.143500d6.css","assets/index.8c4bdb81.css","assets/index.2bd69081.css","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/index.89bba8b1.js","assets/useRootSetting.b4af9267.js","assets/index.350cf742.js","assets/index.b9cca6a6.css","assets/useAttrs.d4bdb35c.js","assets/index.409f15f2.js","assets/index.9359761b.css","assets/index.b7c5ce55.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.eb16d7c9.js","assets/useTabs.28f16105.js","assets/lock.d6ff7b65.js","assets/index.681ac155.js"] : void 0));
const { t: t$1 } = useI18n();
var HandlerEnum = /* @__PURE__ */ ((HandlerEnum2) => {
  HandlerEnum2[HandlerEnum2["CHANGE_LAYOUT"] = 0] = "CHANGE_LAYOUT";
  HandlerEnum2[HandlerEnum2["CHANGE_THEME_COLOR"] = 1] = "CHANGE_THEME_COLOR";
  HandlerEnum2[HandlerEnum2["CHANGE_THEME"] = 2] = "CHANGE_THEME";
  HandlerEnum2[HandlerEnum2["MENU_HAS_DRAG"] = 3] = "MENU_HAS_DRAG";
  HandlerEnum2[HandlerEnum2["MENU_ACCORDION"] = 4] = "MENU_ACCORDION";
  HandlerEnum2[HandlerEnum2["MENU_TRIGGER"] = 5] = "MENU_TRIGGER";
  HandlerEnum2[HandlerEnum2["MENU_TOP_ALIGN"] = 6] = "MENU_TOP_ALIGN";
  HandlerEnum2[HandlerEnum2["MENU_COLLAPSED"] = 7] = "MENU_COLLAPSED";
  HandlerEnum2[HandlerEnum2["MENU_COLLAPSED_SHOW_TITLE"] = 8] = "MENU_COLLAPSED_SHOW_TITLE";
  HandlerEnum2[HandlerEnum2["MENU_WIDTH"] = 9] = "MENU_WIDTH";
  HandlerEnum2[HandlerEnum2["MENU_SHOW_SIDEBAR"] = 10] = "MENU_SHOW_SIDEBAR";
  HandlerEnum2[HandlerEnum2["MENU_THEME"] = 11] = "MENU_THEME";
  HandlerEnum2[HandlerEnum2["MENU_SPLIT"] = 12] = "MENU_SPLIT";
  HandlerEnum2[HandlerEnum2["MENU_FIXED"] = 13] = "MENU_FIXED";
  HandlerEnum2[HandlerEnum2["MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE"] = 14] = "MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE";
  HandlerEnum2[HandlerEnum2["MENU_TRIGGER_MIX_SIDEBAR"] = 15] = "MENU_TRIGGER_MIX_SIDEBAR";
  HandlerEnum2[HandlerEnum2["MENU_FIXED_MIX_SIDEBAR"] = 16] = "MENU_FIXED_MIX_SIDEBAR";
  HandlerEnum2[HandlerEnum2["HEADER_SHOW"] = 17] = "HEADER_SHOW";
  HandlerEnum2[HandlerEnum2["HEADER_THEME"] = 18] = "HEADER_THEME";
  HandlerEnum2[HandlerEnum2["HEADER_FIXED"] = 19] = "HEADER_FIXED";
  HandlerEnum2[HandlerEnum2["HEADER_SEARCH"] = 20] = "HEADER_SEARCH";
  HandlerEnum2[HandlerEnum2["TABS_SHOW_QUICK"] = 21] = "TABS_SHOW_QUICK";
  HandlerEnum2[HandlerEnum2["TABS_SHOW_REDO"] = 22] = "TABS_SHOW_REDO";
  HandlerEnum2[HandlerEnum2["TABS_SHOW"] = 23] = "TABS_SHOW";
  HandlerEnum2[HandlerEnum2["TABS_SHOW_FOLD"] = 24] = "TABS_SHOW_FOLD";
  HandlerEnum2[HandlerEnum2["LOCK_TIME"] = 25] = "LOCK_TIME";
  HandlerEnum2[HandlerEnum2["FULL_CONTENT"] = 26] = "FULL_CONTENT";
  HandlerEnum2[HandlerEnum2["CONTENT_MODE"] = 27] = "CONTENT_MODE";
  HandlerEnum2[HandlerEnum2["SHOW_BREADCRUMB"] = 28] = "SHOW_BREADCRUMB";
  HandlerEnum2[HandlerEnum2["SHOW_BREADCRUMB_ICON"] = 29] = "SHOW_BREADCRUMB_ICON";
  HandlerEnum2[HandlerEnum2["GRAY_MODE"] = 30] = "GRAY_MODE";
  HandlerEnum2[HandlerEnum2["COLOR_WEAK"] = 31] = "COLOR_WEAK";
  HandlerEnum2[HandlerEnum2["SHOW_LOGO"] = 32] = "SHOW_LOGO";
  HandlerEnum2[HandlerEnum2["SHOW_FOOTER"] = 33] = "SHOW_FOOTER";
  HandlerEnum2[HandlerEnum2["ROUTER_TRANSITION"] = 34] = "ROUTER_TRANSITION";
  HandlerEnum2[HandlerEnum2["OPEN_PROGRESS"] = 35] = "OPEN_PROGRESS";
  HandlerEnum2[HandlerEnum2["OPEN_PAGE_LOADING"] = 36] = "OPEN_PAGE_LOADING";
  HandlerEnum2[HandlerEnum2["OPEN_ROUTE_TRANSITION"] = 37] = "OPEN_ROUTE_TRANSITION";
  return HandlerEnum2;
})(HandlerEnum || {});
const contentModeOptions = [
  {
    value: ContentEnum.FULL,
    label: t$1("layout.setting.contentModeFull")
  },
  {
    value: ContentEnum.FIXED,
    label: t$1("layout.setting.contentModeFixed")
  }
];
const topMenuAlignOptions = [
  {
    value: TopMenuAlignEnum.CENTER,
    label: t$1("layout.setting.topMenuAlignRight")
  },
  {
    value: TopMenuAlignEnum.START,
    label: t$1("layout.setting.topMenuAlignLeft")
  },
  {
    value: TopMenuAlignEnum.END,
    label: t$1("layout.setting.topMenuAlignCenter")
  }
];
const getMenuTriggerOptions = (hideTop) => {
  return [
    {
      value: TriggerEnum.NONE,
      label: t$1("layout.setting.menuTriggerNone")
    },
    {
      value: TriggerEnum.FOOTER,
      label: t$1("layout.setting.menuTriggerBottom")
    },
    ...hideTop ? [] : [
      {
        value: TriggerEnum.HEADER,
        label: t$1("layout.setting.menuTriggerTop")
      }
    ]
  ];
};
const routerTransitionOptions = [
  RouterTransitionEnum.ZOOM_FADE,
  RouterTransitionEnum.FADE,
  RouterTransitionEnum.ZOOM_OUT,
  RouterTransitionEnum.FADE_SIDE,
  RouterTransitionEnum.FADE_BOTTOM,
  RouterTransitionEnum.FADE_SCALE
].map((item) => {
  return {
    label: item,
    value: item
  };
});
const menuTypeList = [
  {
    title: t$1("layout.setting.menuTypeSidebar"),
    mode: MenuModeEnum.INLINE,
    type: MenuTypeEnum.SIDEBAR
  },
  {
    title: t$1("layout.setting.menuTypeMix"),
    mode: MenuModeEnum.INLINE,
    type: MenuTypeEnum.MIX
  },
  {
    title: t$1("layout.setting.menuTypeTopMenu"),
    mode: MenuModeEnum.HORIZONTAL,
    type: MenuTypeEnum.TOP_MENU
  },
  {
    title: t$1("layout.setting.menuTypeMixSidebar"),
    mode: MenuModeEnum.INLINE,
    type: MenuTypeEnum.MIX_SIDEBAR
  }
];
const mixSidebarTriggerOptions = [
  {
    value: MixSidebarTriggerEnum.HOVER,
    label: t$1("layout.setting.triggerHover")
  },
  {
    value: MixSidebarTriggerEnum.CLICK,
    label: t$1("layout.setting.triggerClick")
  }
];
function baseHandler(event, value) {
  const appStore = useAppStore();
  const config = handler(event, value);
  appStore.setProjectConfig(config);
  if (event === HandlerEnum.CHANGE_THEME) {
    updateHeaderBgColor();
    updateSidebarBgColor();
  }
}
function handler(event, value) {
  const appStore = useAppStore();
  const { getThemeColor, getDarkMode } = useRootSetting();
  switch (event) {
    case HandlerEnum.CHANGE_LAYOUT:
      const { mode, type, split } = value;
      const splitOpt = split === void 0 ? { split } : {};
      return {
        menuSetting: __spreadValues({
          mode,
          type,
          collapsed: false,
          show: true,
          hidden: false
        }, splitOpt)
      };
    case HandlerEnum.CHANGE_THEME_COLOR:
      if (getThemeColor.value === value) {
        return {};
      }
      changeTheme(value);
      return { themeColor: value };
    case HandlerEnum.CHANGE_THEME:
      if (getDarkMode.value === value) {
        return {};
      }
      updateDarkTheme(value);
      return {};
    case HandlerEnum.MENU_HAS_DRAG:
      return { menuSetting: { canDrag: value } };
    case HandlerEnum.MENU_ACCORDION:
      return { menuSetting: { accordion: value } };
    case HandlerEnum.MENU_TRIGGER:
      return { menuSetting: { trigger: value } };
    case HandlerEnum.MENU_TOP_ALIGN:
      return { menuSetting: { topMenuAlign: value } };
    case HandlerEnum.MENU_COLLAPSED:
      return { menuSetting: { collapsed: value } };
    case HandlerEnum.MENU_WIDTH:
      return { menuSetting: { menuWidth: value } };
    case HandlerEnum.MENU_SHOW_SIDEBAR:
      return { menuSetting: { show: value } };
    case HandlerEnum.MENU_COLLAPSED_SHOW_TITLE:
      return { menuSetting: { collapsedShowTitle: value } };
    case HandlerEnum.MENU_THEME:
      updateSidebarBgColor(value);
      return { menuSetting: { bgColor: value } };
    case HandlerEnum.MENU_SPLIT:
      return { menuSetting: { split: value } };
    case HandlerEnum.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:
      return { menuSetting: { closeMixSidebarOnChange: value } };
    case HandlerEnum.MENU_FIXED:
      return { menuSetting: { fixed: value } };
    case HandlerEnum.MENU_TRIGGER_MIX_SIDEBAR:
      return { menuSetting: { mixSideTrigger: value } };
    case HandlerEnum.MENU_FIXED_MIX_SIDEBAR:
      return { menuSetting: { mixSideFixed: value } };
    case HandlerEnum.OPEN_PAGE_LOADING:
      appStore.setPageLoading(false);
      return { transitionSetting: { openPageLoading: value } };
    case HandlerEnum.ROUTER_TRANSITION:
      return { transitionSetting: { basicTransition: value } };
    case HandlerEnum.OPEN_ROUTE_TRANSITION:
      return { transitionSetting: { enable: value } };
    case HandlerEnum.OPEN_PROGRESS:
      return { transitionSetting: { openNProgress: value } };
    case HandlerEnum.LOCK_TIME:
      return { lockTime: value };
    case HandlerEnum.FULL_CONTENT:
      return { fullContent: value };
    case HandlerEnum.CONTENT_MODE:
      return { contentMode: value };
    case HandlerEnum.SHOW_BREADCRUMB:
      return { showBreadCrumb: value };
    case HandlerEnum.SHOW_BREADCRUMB_ICON:
      return { showBreadCrumbIcon: value };
    case HandlerEnum.GRAY_MODE:
      updateGrayMode(value);
      return { grayMode: value };
    case HandlerEnum.SHOW_FOOTER:
      return { showFooter: value };
    case HandlerEnum.COLOR_WEAK:
      updateColorWeak(value);
      return { colorWeak: value };
    case HandlerEnum.SHOW_LOGO:
      return { showLogo: value };
    case HandlerEnum.TABS_SHOW_QUICK:
      return { multiTabsSetting: { showQuick: value } };
    case HandlerEnum.TABS_SHOW:
      return { multiTabsSetting: { show: value } };
    case HandlerEnum.TABS_SHOW_REDO:
      return { multiTabsSetting: { showRedo: value } };
    case HandlerEnum.TABS_SHOW_FOLD:
      return { multiTabsSetting: { showFold: value } };
    case HandlerEnum.HEADER_THEME:
      updateHeaderBgColor(value);
      return { headerSetting: { bgColor: value } };
    case HandlerEnum.HEADER_SEARCH:
      return { headerSetting: { showSearch: value } };
    case HandlerEnum.HEADER_FIXED:
      return { headerSetting: { fixed: value } };
    case HandlerEnum.HEADER_SHOW:
      return { headerSetting: { show: value } };
    default:
      return {};
  }
}
const {
  t
} = useI18n();
var SettingDrawer = defineComponent({
  name: "SettingDrawer",
  setup(_, {
    attrs
  }) {
    const {
      getContentMode,
      getShowFooter,
      getShowBreadCrumb,
      getShowBreadCrumbIcon,
      getShowLogo,
      getFullContent,
      getColorWeak,
      getGrayMode,
      getLockTime,
      getShowDarkModeToggle,
      getThemeColor
    } = useRootSetting();
    const {
      getOpenPageLoading,
      getBasicTransition,
      getEnableTransition,
      getOpenNProgress
    } = useTransitionSetting();
    const {
      getIsHorizontal,
      getShowMenu,
      getMenuType,
      getTrigger,
      getCollapsedShowTitle,
      getMenuFixed,
      getCollapsed,
      getCanDrag,
      getTopMenuAlign,
      getAccordion,
      getMenuWidth,
      getMenuBgColor,
      getIsTopMenu,
      getSplit,
      getIsMixSidebar,
      getCloseMixSidebarOnChange,
      getMixSideTrigger,
      getMixSideFixed
    } = useMenuSetting();
    const {
      getShowHeader,
      getFixed: getHeaderFixed,
      getHeaderBgColor,
      getShowSearch
    } = useHeaderSetting();
    const {
      getShowMultipleTab,
      getShowQuick,
      getShowRedo,
      getShowFold
    } = useMultipleTabSetting();
    const getShowMenuRef = computed(() => {
      return unref(getShowMenu) && !unref(getIsHorizontal);
    });
    function renderSidebar() {
      return createVNode(Fragment, null, [createVNode(TypePicker, {
        "menuTypeList": menuTypeList,
        "handler": (item) => {
          baseHandler(HandlerEnum.CHANGE_LAYOUT, {
            mode: item.mode,
            type: item.type,
            split: unref(getIsHorizontal) ? false : void 0
          });
        },
        "def": unref(getMenuType)
      }, null)]);
    }
    function renderHeaderTheme() {
      return createVNode(ThemeColorPicker, {
        "colorList": HEADER_PRESET_BG_COLOR_LIST,
        "def": unref(getHeaderBgColor),
        "event": HandlerEnum.HEADER_THEME
      }, null);
    }
    function renderSiderTheme() {
      return createVNode(ThemeColorPicker, {
        "colorList": SIDE_BAR_BG_COLOR_LIST,
        "def": unref(getMenuBgColor),
        "event": HandlerEnum.MENU_THEME
      }, null);
    }
    function renderMainTheme() {
      return createVNode(ThemeColorPicker, {
        "colorList": APP_PRESET_COLOR_LIST,
        "def": unref(getThemeColor),
        "event": HandlerEnum.CHANGE_THEME_COLOR
      }, null);
    }
    function renderFeatures() {
      let triggerDef = unref(getTrigger);
      const triggerOptions = getMenuTriggerOptions(unref(getSplit));
      const some = triggerOptions.some((item) => item.value === triggerDef);
      if (!some) {
        triggerDef = TriggerEnum.FOOTER;
      }
      return createVNode(Fragment, null, [createVNode(SwitchItem, {
        "title": t("layout.setting.splitMenu"),
        "event": HandlerEnum.MENU_SPLIT,
        "def": unref(getSplit),
        "disabled": !unref(getShowMenuRef) || unref(getMenuType) !== MenuTypeEnum.MIX
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.mixSidebarFixed"),
        "event": HandlerEnum.MENU_FIXED_MIX_SIDEBAR,
        "def": unref(getMixSideFixed),
        "disabled": !unref(getIsMixSidebar)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.closeMixSidebarOnChange"),
        "event": HandlerEnum.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,
        "def": unref(getCloseMixSidebarOnChange),
        "disabled": !unref(getIsMixSidebar)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.menuCollapse"),
        "event": HandlerEnum.MENU_COLLAPSED,
        "def": unref(getCollapsed),
        "disabled": !unref(getShowMenuRef)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.menuDrag"),
        "event": HandlerEnum.MENU_HAS_DRAG,
        "def": unref(getCanDrag),
        "disabled": !unref(getShowMenuRef)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.menuSearch"),
        "event": HandlerEnum.HEADER_SEARCH,
        "def": unref(getShowSearch),
        "disabled": !unref(getShowHeader)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.menuAccordion"),
        "event": HandlerEnum.MENU_ACCORDION,
        "def": unref(getAccordion),
        "disabled": !unref(getShowMenuRef)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.collapseMenuDisplayName"),
        "event": HandlerEnum.MENU_COLLAPSED_SHOW_TITLE,
        "def": unref(getCollapsedShowTitle),
        "disabled": !unref(getShowMenuRef) || !unref(getCollapsed) || unref(getIsMixSidebar)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.fixedHeader"),
        "event": HandlerEnum.HEADER_FIXED,
        "def": unref(getHeaderFixed),
        "disabled": !unref(getShowHeader)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.fixedSideBar"),
        "event": HandlerEnum.MENU_FIXED,
        "def": unref(getMenuFixed),
        "disabled": !unref(getShowMenuRef) || unref(getIsMixSidebar)
      }, null), createVNode(SelectItem, {
        "title": t("layout.setting.mixSidebarTrigger"),
        "event": HandlerEnum.MENU_TRIGGER_MIX_SIDEBAR,
        "def": unref(getMixSideTrigger),
        "options": mixSidebarTriggerOptions,
        "disabled": !unref(getIsMixSidebar)
      }, null), createVNode(SelectItem, {
        "title": t("layout.setting.topMenuLayout"),
        "event": HandlerEnum.MENU_TOP_ALIGN,
        "def": unref(getTopMenuAlign),
        "options": topMenuAlignOptions,
        "disabled": !unref(getShowHeader) || unref(getSplit) || !unref(getIsTopMenu) && !unref(getSplit) || unref(getIsMixSidebar)
      }, null), createVNode(SelectItem, {
        "title": t("layout.setting.menuCollapseButton"),
        "event": HandlerEnum.MENU_TRIGGER,
        "def": triggerDef,
        "options": triggerOptions,
        "disabled": !unref(getShowMenuRef) || unref(getIsMixSidebar)
      }, null), createVNode(SelectItem, {
        "title": t("layout.setting.contentMode"),
        "event": HandlerEnum.CONTENT_MODE,
        "def": unref(getContentMode),
        "options": contentModeOptions
      }, null), createVNode(InputNumberItem, {
        "title": t("layout.setting.autoScreenLock"),
        "min": 0,
        "event": HandlerEnum.LOCK_TIME,
        "defaultValue": unref(getLockTime),
        "formatter": (value) => {
          return parseInt(value) === 0 ? `0(${t("layout.setting.notAutoScreenLock")})` : `${value}${t("layout.setting.minute")}`;
        }
      }, null), createVNode(InputNumberItem, {
        "title": t("layout.setting.expandedMenuWidth"),
        "max": 600,
        "min": 100,
        "step": 10,
        "event": HandlerEnum.MENU_WIDTH,
        "disabled": !unref(getShowMenuRef),
        "defaultValue": unref(getMenuWidth),
        "formatter": (value) => `${parseInt(value)}px`
      }, null)]);
    }
    function renderContent() {
      return createVNode(Fragment, null, [createVNode(SwitchItem, {
        "title": t("layout.setting.breadcrumb"),
        "event": HandlerEnum.SHOW_BREADCRUMB,
        "def": unref(getShowBreadCrumb),
        "disabled": !unref(getShowHeader)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.breadcrumbIcon"),
        "event": HandlerEnum.SHOW_BREADCRUMB_ICON,
        "def": unref(getShowBreadCrumbIcon),
        "disabled": !unref(getShowHeader)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.tabs"),
        "event": HandlerEnum.TABS_SHOW,
        "def": unref(getShowMultipleTab)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.tabsRedoBtn"),
        "event": HandlerEnum.TABS_SHOW_REDO,
        "def": unref(getShowRedo),
        "disabled": !unref(getShowMultipleTab)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.tabsQuickBtn"),
        "event": HandlerEnum.TABS_SHOW_QUICK,
        "def": unref(getShowQuick),
        "disabled": !unref(getShowMultipleTab)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.tabsFoldBtn"),
        "event": HandlerEnum.TABS_SHOW_FOLD,
        "def": unref(getShowFold),
        "disabled": !unref(getShowMultipleTab)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.sidebar"),
        "event": HandlerEnum.MENU_SHOW_SIDEBAR,
        "def": unref(getShowMenu),
        "disabled": unref(getIsHorizontal)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.header"),
        "event": HandlerEnum.HEADER_SHOW,
        "def": unref(getShowHeader)
      }, null), createVNode(SwitchItem, {
        "title": "Logo",
        "event": HandlerEnum.SHOW_LOGO,
        "def": unref(getShowLogo),
        "disabled": unref(getIsMixSidebar)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.footer"),
        "event": HandlerEnum.SHOW_FOOTER,
        "def": unref(getShowFooter)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.fullContent"),
        "event": HandlerEnum.FULL_CONTENT,
        "def": unref(getFullContent)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.grayMode"),
        "event": HandlerEnum.GRAY_MODE,
        "def": unref(getGrayMode)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.colorWeak"),
        "event": HandlerEnum.COLOR_WEAK,
        "def": unref(getColorWeak)
      }, null)]);
    }
    function renderTransition() {
      return createVNode(Fragment, null, [createVNode(SwitchItem, {
        "title": t("layout.setting.progress"),
        "event": HandlerEnum.OPEN_PROGRESS,
        "def": unref(getOpenNProgress)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.switchLoading"),
        "event": HandlerEnum.OPEN_PAGE_LOADING,
        "def": unref(getOpenPageLoading)
      }, null), createVNode(SwitchItem, {
        "title": t("layout.setting.switchAnimation"),
        "event": HandlerEnum.OPEN_ROUTE_TRANSITION,
        "def": unref(getEnableTransition)
      }, null), createVNode(SelectItem, {
        "title": t("layout.setting.animationType"),
        "event": HandlerEnum.ROUTER_TRANSITION,
        "def": unref(getBasicTransition),
        "options": routerTransitionOptions,
        "disabled": !unref(getEnableTransition)
      }, null)]);
    }
    return () => createVNode(BasicDrawer, mergeProps(attrs, {
      "title": t("layout.setting.drawerTitle"),
      "width": 330,
      "class": "setting-drawer"
    }), {
      default: () => [unref(getShowDarkModeToggle) && createVNode(Divider, null, {
        default: () => t("layout.setting.darkMode")
      }), unref(getShowDarkModeToggle) && createVNode(AppDarkModeToggle, {
        "class": "mx-auto"
      }, null), createVNode(Divider, null, {
        default: () => t("layout.setting.navMode")
      }), renderSidebar(), createVNode(Divider, null, {
        default: () => t("layout.setting.sysTheme")
      }), renderMainTheme(), createVNode(Divider, null, {
        default: () => t("layout.setting.headerTheme")
      }), renderHeaderTheme(), createVNode(Divider, null, {
        default: () => t("layout.setting.sidebarTheme")
      }), renderSiderTheme(), createVNode(Divider, null, {
        default: () => t("layout.setting.interfaceFunction")
      }), renderFeatures(), createVNode(Divider, null, {
        default: () => t("layout.setting.interfaceDisplay")
      }), renderContent(), createVNode(Divider, null, {
        default: () => t("layout.setting.animation")
      }), renderTransition(), createVNode(Divider, null, null), createVNode(SettingFooter, null, null)]
    });
  }
});
const _sfc_main = defineComponent({
  name: "SettingButton",
  components: { SettingDrawer, Icon },
  setup() {
    const [register, { openDrawer }] = useDrawer();
    return {
      register,
      openDrawer
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_SettingDrawer = resolveComponent("SettingDrawer");
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openDrawer(true))
  }, [
    createVNode(_component_Icon, { icon: "ion:settings-outline" }),
    createVNode(_component_SettingDrawer, { onRegister: _ctx.register }, null, 8, ["onRegister"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
export { baseHandler as b, index$1 as i };
