var __defProp = Object.defineProperty;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { n as noop, p as propTypes, M as MenuModeEnum, m as MenuTypeEnum, T as ThemeEnum, I as Icon, a as useDesign, _ as _export_sfc, b as useI18n, q as useMenuSetting, r as useTimeoutFn, s as getAllParentPath, t as listenerRouteChange, R as REDIRECT_NAME, i as isFunction, v as getCurrentParentPath, x as createContext, y as useContext, z as mitt, C as CollapseTransition, B as isBoolean, D as isObject, F as __vitePreload, G as isUrl, o as openWindow, H as useAppInject, J as usePermissionStore, K as MenuSplitTyeEnum, L as getMenus, N as getShallowMenus, O as getChildrenMenus, k as useGo, Q as useRootSetting, S as ScrollContainer, e as AppLogo, U as useFullContent, V as useAppStore, f as useUserStore, W as selectShop, X as AppSearch, Y as useLocale, Z as SettingButtonPositionEnum, $ as useMultipleTabStore, a0 as useTransitionSetting, a1 as TriggerEnum, a2 as ClickOutside, u as useGlobSetting, a3 as SIDE_BAR_MINI_WIDTH, a4 as SIDE_BAR_SHOW_TIT_MINI_WIDTH, a5 as useTabs, a6 as Dropdown, a7 as triggerWindowResize, a8 as setting, a9 as isNullAndUnDef } from "./index.d19df3e8.js";
import { b7 as defineAsyncComponent, w as createVNode, aQ as Spin, B as defineComponent, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, a2 as createBlock, L as normalizeClass, ae as createCommentVNode, af as createTextVNode, K as toDisplayString, aB as Menu$1, a7 as withCtx, a5 as mergeProps, aD as normalizeProps, ac as Fragment, aq as renderList, u as unref, t as toRaw, b8 as uniq, r as ref, Q as reactive, X as toRefs, a as useRouter, T as watch, an as watchEffect, S as provide, $ as onMounted, a0 as nextTick, aj as getCurrentInstance, a8 as renderSlot, aa as Tooltip, J as createBaseVNode, az as withModifiers, Y as normalizeStyle, ar as Popover, P as inject, aw as onBeforeMount, G as withDirectives, H as vShow, aU as guardReactiveProps, V as useDebounceFn, W as useThrottleFn, ao as toRef, b9 as MenuUnfoldOutlined, ba as MenuFoldOutlined, bb as Select, bc as FullscreenExitOutlined, bd as FullscreenOutlined, be as useFullscreen, aV as Layout, bf as uniqBy, a3 as Transition, am as resolveDynamicComponent, bg as KeepAlive, bh as resolveDirective, A as h, aE as createSlots, bi as Drawer, bj as RedoOutlined, bk as Tabs, ak as onUnmounted } from "./vendor.7c0ada15.js";
import FramePage from "./index.a3f7158a.js";
import { u as useContentViewHeight, a as useLayoutHeight } from "./useContentViewHeight.814f6021.js";
/* empty css                 *//* empty css                 */import { u as useLockStore } from "./lock.4da61d6f.js";
function createAsyncComponent(loader, options = {}) {
  const {
    size = "small",
    delay = 100,
    timeout = 3e4,
    loading = false,
    retry = true
  } = options;
  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? createVNode(Spin, {
      "spinning": true,
      "size": size
    }, null) : void 0,
    timeout,
    delay,
    onError: !retry ? noop : (error, retry2, fail, attempts) => {
      if (error.message.match(/fetch/) && attempts <= 3) {
        retry2();
      } else {
        fail();
      }
    }
  });
}
const basicProps = {
  items: {
    type: Array,
    default: () => []
  },
  collapsedShowTitle: propTypes.bool,
  inlineIndent: propTypes.number.def(20),
  mode: {
    type: String,
    default: MenuModeEnum.INLINE
  },
  type: {
    type: String,
    default: MenuTypeEnum.MIX
  },
  theme: {
    type: String,
    default: ThemeEnum.DARK
  },
  inlineCollapsed: propTypes.bool,
  mixSider: propTypes.bool,
  isHorizontal: propTypes.bool,
  accordion: propTypes.bool.def(true),
  beforeClickFn: {
    type: Function
  }
};
const itemProps = {
  item: {
    type: Object,
    default: {}
  },
  level: propTypes.number,
  theme: propTypes.oneOf(["dark", "light"]),
  showTitle: propTypes.bool,
  isHorizontal: propTypes.bool
};
const contentProps = {
  item: {
    type: Object,
    default: null
  },
  showTitle: propTypes.bool.def(true),
  level: propTypes.number.def(0),
  isHorizontal: propTypes.bool.def(true)
};
const { t } = useI18n();
const _sfc_main$s = defineComponent({
  name: "MenuItemContent",
  components: {
    Icon
  },
  props: contentProps,
  setup(props) {
    const { prefixCls } = useDesign("basic-menu-item-content");
    const getI18nName = computed(() => {
      var _a;
      return t((_a = props.item) == null ? void 0 : _a.name);
    });
    const getIcon = computed(() => {
      var _a;
      return (_a = props.item) == null ? void 0 : _a.icon;
    });
    return {
      prefixCls,
      getI18nName,
      getIcon
    };
  }
});
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`${_ctx.prefixCls}- flex items-center `)
  }, [
    _ctx.getIcon ? (openBlock(), createBlock(_component_Icon, {
      key: 0,
      icon: _ctx.getIcon,
      size: 18,
      class: normalizeClass(`${_ctx.prefixCls}-wrapper__icon mr-2`)
    }, null, 8, ["icon", "class"])) : createCommentVNode("", true),
    createTextVNode(" " + toDisplayString(_ctx.getI18nName), 1)
  ], 2);
}
var MenuItemContent = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r]]);
const _sfc_main$r = defineComponent({
  name: "BasicMenuItem",
  components: { MenuItem: Menu$1.Item, MenuItemContent },
  props: itemProps,
  setup() {
    return {};
  }
});
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuItemContent = resolveComponent("MenuItemContent");
  const _component_MenuItem = resolveComponent("MenuItem");
  return openBlock(), createBlock(_component_MenuItem, {
    key: _ctx.item.path
  }, {
    default: withCtx(() => [
      createVNode(_component_MenuItemContent, mergeProps(_ctx.$props, { item: _ctx.item }), null, 16, ["item"])
    ]),
    _: 1
  });
}
var BasicMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q]]);
const _sfc_main$q = defineComponent({
  name: "BasicSubMenuItem",
  isSubMenu: true,
  components: {
    BasicMenuItem,
    SubMenu: Menu$1.SubMenu,
    MenuItemContent
  },
  props: itemProps,
  setup(props) {
    const { prefixCls } = useDesign("basic-menu-item");
    const getShowMenu = computed(() => {
      var _a;
      return !((_a = props.item.meta) == null ? void 0 : _a.hideMenu);
    });
    function menuHasChildren(menuTreeItem) {
      var _a;
      return !((_a = menuTreeItem.meta) == null ? void 0 : _a.hideChildrenInMenu) && Reflect.has(menuTreeItem, "children") && !!menuTreeItem.children && menuTreeItem.children.length > 0;
    }
    return {
      prefixCls,
      menuHasChildren,
      getShowMenu
    };
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicMenuItem = resolveComponent("BasicMenuItem");
  const _component_MenuItemContent = resolveComponent("MenuItemContent");
  const _component_BasicSubMenuItem = resolveComponent("BasicSubMenuItem", true);
  const _component_SubMenu = resolveComponent("SubMenu");
  return openBlock(), createElementBlock(Fragment, null, [
    !_ctx.menuHasChildren(_ctx.item) && _ctx.getShowMenu ? (openBlock(), createBlock(_component_BasicMenuItem, normalizeProps(mergeProps({ key: 0 }, _ctx.$props)), null, 16)) : createCommentVNode("", true),
    _ctx.menuHasChildren(_ctx.item) && _ctx.getShowMenu ? (openBlock(), createBlock(_component_SubMenu, {
      class: normalizeClass([_ctx.theme]),
      key: `submenu-${_ctx.item.path}`,
      popupClassName: "app-top-menu-popup"
    }, {
      title: withCtx(() => [
        createVNode(_component_MenuItemContent, mergeProps(_ctx.$props, { item: _ctx.item }), null, 16, ["item"])
      ]),
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.item.children || [], (childrenItem) => {
          return openBlock(), createBlock(_component_BasicSubMenuItem, mergeProps({
            key: childrenItem.path
          }, _ctx.$props, { item: childrenItem }), null, 16, ["item"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true)
  ], 64);
}
var BasicSubMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p]]);
function useOpenKeys$1(menuState, menus, mode, accordion) {
  const { getCollapsed, getIsMixSidebar } = useMenuSetting();
  async function setOpenKeys(path) {
    if (mode.value === MenuModeEnum.HORIZONTAL) {
      return;
    }
    const native = unref(getIsMixSidebar);
    useTimeoutFn(() => {
      const menuList = toRaw(menus.value);
      if ((menuList == null ? void 0 : menuList.length) === 0) {
        menuState.openKeys = [];
        return;
      }
      if (!unref(accordion)) {
        menuState.openKeys = uniq([...menuState.openKeys, ...getAllParentPath(menuList, path)]);
      } else {
        menuState.openKeys = getAllParentPath(menuList, path);
      }
    }, 16, !native);
  }
  const getOpenKeys = computed(() => {
    const collapse = unref(getIsMixSidebar) ? false : unref(getCollapsed);
    return collapse ? menuState.collapsedOpenKeys : menuState.openKeys;
  });
  function resetKeys() {
    menuState.selectedKeys = [];
    menuState.openKeys = [];
  }
  function handleOpenChange(openKeys) {
    if (unref(mode) === MenuModeEnum.HORIZONTAL || !unref(accordion) || unref(getIsMixSidebar)) {
      menuState.openKeys = openKeys;
    } else {
      const rootSubMenuKeys = [];
      for (const { children, path } of unref(menus)) {
        if (children && children.length > 0) {
          rootSubMenuKeys.push(path);
        }
      }
      if (!unref(getCollapsed)) {
        const latestOpenKey = openKeys.find((key2) => menuState.openKeys.indexOf(key2) === -1);
        if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
          menuState.openKeys = openKeys;
        } else {
          menuState.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      } else {
        menuState.collapsedOpenKeys = openKeys;
      }
    }
  }
  return { setOpenKeys, resetKeys, getOpenKeys, handleOpenChange };
}
var BasicMenu_vue_vue_type_style_index_0_lang = "";
const _sfc_main$p = defineComponent({
  name: "BasicMenu",
  components: {
    Menu: Menu$1,
    BasicSubMenuItem
  },
  props: basicProps,
  emits: ["menuClick"],
  setup(props, { emit }) {
    const isClickGo = ref(false);
    const currentActiveMenu = ref("");
    const menuState = reactive({
      defaultSelectedKeys: [],
      openKeys: [],
      selectedKeys: [],
      collapsedOpenKeys: []
    });
    const { prefixCls } = useDesign("basic-menu");
    const { items, mode, accordion } = toRefs(props);
    const { getCollapsed, getTopMenuAlign, getSplit } = useMenuSetting();
    const { currentRoute } = useRouter();
    const { handleOpenChange, setOpenKeys, getOpenKeys } = useOpenKeys$1(menuState, items, mode, accordion);
    const getIsTopMenu = computed(() => {
      const { type, mode: mode2 } = props;
      return type === MenuTypeEnum.TOP_MENU && mode2 === MenuModeEnum.HORIZONTAL || props.isHorizontal && unref(getSplit);
    });
    const getMenuClass = computed(() => {
      const align = props.isHorizontal && unref(getSplit) ? "start" : unref(getTopMenuAlign);
      return [
        prefixCls,
        `justify-${align}`,
        {
          [`${prefixCls}__second`]: !props.isHorizontal && unref(getSplit),
          [`${prefixCls}__sidebar-hor`]: unref(getIsTopMenu)
        }
      ];
    });
    const getInlineCollapseOptions = computed(() => {
      const isInline = props.mode === MenuModeEnum.INLINE;
      const inlineCollapseOptions = {};
      if (isInline) {
        inlineCollapseOptions.inlineCollapsed = props.mixSider ? false : unref(getCollapsed);
      }
      return inlineCollapseOptions;
    });
    listenerRouteChange((route) => {
      var _a;
      if (route.name === REDIRECT_NAME)
        return;
      handleMenuChange(route);
      currentActiveMenu.value = (_a = route.meta) == null ? void 0 : _a.currentActiveMenu;
      if (unref(currentActiveMenu)) {
        menuState.selectedKeys = [unref(currentActiveMenu)];
        setOpenKeys(unref(currentActiveMenu));
      }
    });
    !props.mixSider && watch(() => props.items, () => {
      handleMenuChange();
    });
    async function handleMenuClick({ key: key2 }) {
      const { beforeClickFn } = props;
      if (beforeClickFn && isFunction(beforeClickFn)) {
        const flag = await beforeClickFn(key2);
        if (!flag)
          return;
      }
      emit("menuClick", key2);
      isClickGo.value = true;
      menuState.selectedKeys = [key2];
    }
    async function handleMenuChange(route) {
      var _a;
      if (unref(isClickGo)) {
        isClickGo.value = false;
        return;
      }
      const path = ((_a = (route || unref(currentRoute)).meta) == null ? void 0 : _a.currentActiveMenu) || (route || unref(currentRoute)).path;
      setOpenKeys(path);
      if (unref(currentActiveMenu))
        return;
      if (props.isHorizontal && unref(getSplit)) {
        const parentPath = await getCurrentParentPath(path);
        menuState.selectedKeys = [parentPath];
      } else {
        const parentPaths = await getAllParentPath(props.items, path);
        menuState.selectedKeys = parentPaths;
      }
    }
    return __spreadValues({
      handleMenuClick,
      getInlineCollapseOptions,
      getMenuClass,
      handleOpenChange,
      getOpenKeys
    }, toRefs(menuState));
  }
});
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicSubMenuItem = resolveComponent("BasicSubMenuItem");
  const _component_Menu = resolveComponent("Menu");
  return openBlock(), createBlock(_component_Menu, mergeProps({
    selectedKeys: _ctx.selectedKeys,
    defaultSelectedKeys: _ctx.defaultSelectedKeys,
    mode: _ctx.mode,
    openKeys: _ctx.getOpenKeys,
    inlineIndent: _ctx.inlineIndent,
    theme: _ctx.theme,
    onOpenChange: _ctx.handleOpenChange,
    class: _ctx.getMenuClass,
    onClick: _ctx.handleMenuClick,
    subMenuOpenDelay: 0.2
  }, _ctx.getInlineCollapseOptions), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createBlock(_component_BasicSubMenuItem, {
          key: item.path,
          item,
          theme: _ctx.theme,
          isHorizontal: _ctx.isHorizontal
        }, null, 8, ["item", "theme", "isHorizontal"]);
      }), 128))
    ]),
    _: 1
  }, 16, ["selectedKeys", "defaultSelectedKeys", "mode", "openKeys", "inlineIndent", "theme", "onOpenChange", "class", "onClick", "subMenuOpenDelay"]);
}
var BasicMenu = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o]]);
const key = Symbol();
function createSimpleRootMenuContext(context) {
  return createContext(context, key, { readonly: false, native: true });
}
function useSimpleRootMenuContext() {
  return useContext(key);
}
var Menu_vue_vue_type_style_index_0_lang = "";
const _sfc_main$o = defineComponent({
  name: "Menu",
  props: {
    theme: propTypes.oneOf(["light", "dark"]).def("light"),
    activeName: propTypes.oneOfType([propTypes.string, propTypes.number]),
    openNames: {
      type: Array,
      default: () => []
    },
    accordion: propTypes.bool.def(true),
    width: propTypes.string.def("100%"),
    collapsedWidth: propTypes.string.def("48px"),
    indentSize: propTypes.number.def(16),
    collapse: propTypes.bool.def(true),
    activeSubMenuNames: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select", "open-change"],
  setup(props, { emit }) {
    const rootMenuEmitter = mitt();
    const instance = getCurrentInstance();
    const currentActiveName = ref("");
    const openedNames = ref([]);
    const { prefixCls } = useDesign("menu");
    const isRemoveAllPopup = ref(false);
    createSimpleRootMenuContext({
      rootMenuEmitter,
      activeName: currentActiveName
    });
    const getClass = computed(() => {
      const { theme } = props;
      return [
        prefixCls,
        `${prefixCls}-${theme}`,
        `${prefixCls}-vertical`,
        {
          [`${prefixCls}-collapse`]: props.collapse
        }
      ];
    });
    watchEffect(() => {
      openedNames.value = props.openNames;
    });
    watchEffect(() => {
      if (props.activeName) {
        currentActiveName.value = props.activeName;
      }
    });
    watch(() => props.openNames, () => {
      nextTick(() => {
        updateOpened();
      });
    });
    function updateOpened() {
      rootMenuEmitter.emit("on-update-opened", openedNames.value);
    }
    function addSubMenu(name) {
      if (openedNames.value.includes(name))
        return;
      openedNames.value.push(name);
      updateOpened();
    }
    function removeSubMenu(name) {
      openedNames.value = openedNames.value.filter((item) => item !== name);
      updateOpened();
    }
    function removeAll() {
      openedNames.value = [];
      updateOpened();
    }
    function sliceIndex(index2) {
      if (index2 === -1)
        return;
      openedNames.value = openedNames.value.slice(0, index2 + 1);
      updateOpened();
    }
    provide(`subMenu:${instance == null ? void 0 : instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      getOpenNames: () => openedNames.value,
      removeAll,
      isRemoveAllPopup,
      sliceIndex,
      level: 0,
      props
    });
    onMounted(() => {
      openedNames.value = !props.collapse ? [...props.openNames] : [];
      updateOpened();
      rootMenuEmitter.on("on-menu-item-select", (name) => {
        currentActiveName.value = name;
        nextTick(() => {
          props.collapse && removeAll();
        });
        emit("select", name);
      });
      rootMenuEmitter.on("open-name-change", ({ name, opened }) => {
        if (opened && !openedNames.value.includes(name)) {
          openedNames.value.push(name);
        } else if (!opened) {
          const index2 = openedNames.value.findIndex((item) => item === name);
          index2 !== -1 && openedNames.value.splice(index2, 1);
        }
      });
    });
    return { getClass, openedNames };
  }
});
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.getClass)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n]]);
function useMenuItem(instance) {
  const getParentMenu = computed(() => {
    return findParentMenu(["Menu", "SubMenu"]);
  });
  const getParentRootMenu = computed(() => {
    return findParentMenu(["Menu"]);
  });
  const getParentSubMenu = computed(() => {
    return findParentMenu(["SubMenu"]);
  });
  const getItemStyle = computed(() => {
    var _a, _b, _c;
    let parent = instance == null ? void 0 : instance.parent;
    if (!parent)
      return {};
    const indentSize = (_b = (_a = unref(getParentRootMenu)) == null ? void 0 : _a.props.indentSize) != null ? _b : 20;
    let padding = indentSize;
    if ((_c = unref(getParentRootMenu)) == null ? void 0 : _c.props.collapse) {
      padding = indentSize;
    } else {
      while (parent && parent.type.name !== "Menu") {
        if (parent.type.name === "SubMenu") {
          padding += indentSize;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: padding + "px" };
  });
  function findParentMenu(name) {
    let parent = instance == null ? void 0 : instance.parent;
    if (!parent)
      return null;
    while (parent && name.indexOf(parent.type.name) === -1) {
      parent = parent.parent;
    }
    return parent;
  }
  function getParentList() {
    let parent = instance;
    if (!parent)
      return {
        uidList: [],
        list: []
      };
    const ret = [];
    while (parent && parent.type.name !== "Menu") {
      if (parent.type.name === "SubMenu") {
        ret.push(parent);
      }
      parent = parent.parent;
    }
    return {
      uidList: ret.map((item) => item.uid),
      list: ret
    };
  }
  function getParentInstance(instance2, name = "SubMenu") {
    let parent = instance2.parent;
    while (parent) {
      if (parent.type.name !== name) {
        return parent;
      }
      parent = parent.parent;
    }
    return parent;
  }
  return {
    getParentMenu,
    getParentInstance,
    getParentRootMenu,
    getParentList,
    getParentSubMenu,
    getItemStyle
  };
}
const _sfc_main$n = defineComponent({
  name: "MenuItem",
  components: { Tooltip },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: propTypes.bool
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const active = ref(false);
    const { getItemStyle, getParentList, getParentMenu, getParentRootMenu } = useMenuItem(instance);
    const { prefixCls } = useDesign("menu");
    const { rootMenuEmitter, activeName } = useSimpleRootMenuContext();
    const getClass = computed(() => {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: unref(active),
          [`${prefixCls}-item-selected`]: unref(active),
          [`${prefixCls}-item-disabled`]: !!props.disabled
        }
      ];
    });
    const getCollapse = computed(() => {
      var _a;
      return (_a = unref(getParentRootMenu)) == null ? void 0 : _a.props.collapse;
    });
    const showTooptip = computed(() => {
      var _a;
      return ((_a = unref(getParentMenu)) == null ? void 0 : _a.type.name) === "Menu" && unref(getCollapse) && slots.title;
    });
    function handleClickItem() {
      const { disabled } = props;
      if (disabled) {
        return;
      }
      rootMenuEmitter.emit("on-menu-item-select", props.name);
      if (unref(getCollapse)) {
        return;
      }
      const { uidList } = getParentList();
      rootMenuEmitter.emit("on-update-opened", {
        opend: false,
        parent: instance == null ? void 0 : instance.parent,
        uidList
      });
    }
    watch(() => activeName.value, (name) => {
      if (name === props.name) {
        const { list, uidList } = getParentList();
        active.value = true;
        list.forEach((item) => {
          if (item.proxy) {
            item.proxy.active = true;
          }
        });
        rootMenuEmitter.emit("on-update-active-name:submenu", uidList);
      } else {
        active.value = false;
      }
    }, { immediate: true });
    return { getClass, prefixCls, getItemStyle, getCollapse, handleClickItem, showTooptip };
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.getClass),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClickItem && _ctx.handleClickItem(...args), ["stop"])),
    style: normalizeStyle(_ctx.getCollapse ? {} : _ctx.getItemStyle)
  }, [
    _ctx.showTooptip ? (openBlock(), createBlock(_component_Tooltip, {
      key: 0,
      placement: "right"
    }, {
      title: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}-tooltip`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
const DELAY = 200;
const _sfc_main$m = defineComponent({
  name: "SubMenu",
  components: {
    Icon,
    CollapseTransition,
    Popover
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: propTypes.bool,
    collapsedShowTitle: propTypes.bool
  },
  setup(props) {
    var _a;
    const instance = getCurrentInstance();
    const state = reactive({
      active: false,
      opened: false
    });
    const data = reactive({
      timeout: null,
      mouseInChild: false,
      isChild: false
    });
    const { getParentSubMenu, getItemStyle, getParentMenu, getParentList } = useMenuItem(instance);
    const { prefixCls } = useDesign("menu");
    const subMenuEmitter = mitt();
    const { rootMenuEmitter } = useSimpleRootMenuContext();
    const {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      removeAll: parentRemoveAll,
      getOpenNames: parentGetOpenNames,
      isRemoveAllPopup,
      sliceIndex,
      level,
      props: rootProps,
      handleMouseleave: parentHandleMouseleave
    } = inject(`subMenu:${(_a = getParentMenu.value) == null ? void 0 : _a.uid}`);
    const getClass = computed(() => {
      return [
        `${prefixCls}-submenu`,
        {
          [`${prefixCls}-item-active`]: state.active,
          [`${prefixCls}-opened`]: state.opened,
          [`${prefixCls}-submenu-disabled`]: props.disabled,
          [`${prefixCls}-submenu-has-parent-submenu`]: unref(getParentSubMenu),
          [`${prefixCls}-child-item-active`]: state.active
        }
      ];
    });
    const getAccordion = computed(() => rootProps.accordion);
    const getCollapse = computed(() => rootProps.collapse);
    const getTheme = computed(() => rootProps.theme);
    const getOverlayStyle = computed(() => {
      return {
        minWidth: "200px"
      };
    });
    const getIsOpend = computed(() => {
      const name = props.name;
      if (unref(getCollapse)) {
        return parentGetOpenNames().includes(name);
      }
      return state.opened;
    });
    const getSubClass = computed(() => {
      const isActive = rootProps.activeSubMenuNames.includes(props.name);
      return [
        `${prefixCls}-submenu-title`,
        {
          [`${prefixCls}-submenu-active`]: isActive,
          [`${prefixCls}-submenu-active-border`]: isActive && level === 0,
          [`${prefixCls}-submenu-collapse`]: unref(getCollapse) && level === 0
        }
      ];
    });
    function getEvents(deep) {
      if (!unref(getCollapse)) {
        return {};
      }
      return {
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(deep)
      };
    }
    function handleClick() {
      const { disabled } = props;
      if (disabled || unref(getCollapse))
        return;
      const opened = state.opened;
      if (unref(getAccordion)) {
        const { uidList } = getParentList();
        rootMenuEmitter.emit("on-update-opened", {
          opend: false,
          parent: instance == null ? void 0 : instance.parent,
          uidList
        });
      } else {
        rootMenuEmitter.emit("open-name-change", {
          name: props.name,
          opened: !opened
        });
      }
      state.opened = !opened;
    }
    function handleMouseenter() {
      const disabled = props.disabled;
      if (disabled)
        return;
      subMenuEmitter.emit("submenu:mouse-enter-child");
      const index2 = parentGetOpenNames().findIndex((item) => item === props.name);
      sliceIndex(index2);
      const isRoot = level === 0 && parentGetOpenNames().length === 2;
      if (isRoot) {
        parentRemoveAll();
      }
      data.isChild = parentGetOpenNames().includes(props.name);
      clearTimeout(data.timeout);
      data.timeout = setTimeout(() => {
        parentAddSubmenu(props.name);
      }, DELAY);
    }
    function handleMouseleave(deepDispatch = false) {
      var _a2;
      const parentName = (_a2 = getParentMenu.value) == null ? void 0 : _a2.props.name;
      if (!parentName) {
        isRemoveAllPopup.value = true;
      }
      if (parentGetOpenNames().slice(-1)[0] === props.name) {
        data.isChild = false;
      }
      subMenuEmitter.emit("submenu:mouse-leave-child");
      if (data.timeout) {
        clearTimeout(data.timeout);
        data.timeout = setTimeout(() => {
          if (isRemoveAllPopup.value) {
            parentRemoveAll();
          } else if (!data.mouseInChild) {
            parentRemoveSubmenu(props.name);
          }
        }, DELAY);
      }
      if (deepDispatch) {
        if (getParentSubMenu.value) {
          parentHandleMouseleave == null ? void 0 : parentHandleMouseleave(true);
        }
      }
    }
    onBeforeMount(() => {
      subMenuEmitter.on("submenu:mouse-enter-child", () => {
        data.mouseInChild = true;
        isRemoveAllPopup.value = false;
        clearTimeout(data.timeout);
      });
      subMenuEmitter.on("submenu:mouse-leave-child", () => {
        if (data.isChild)
          return;
        data.mouseInChild = false;
        clearTimeout(data.timeout);
      });
      rootMenuEmitter.on("on-update-opened", (data2) => {
        if (unref(getCollapse))
          return;
        if (isBoolean(data2)) {
          state.opened = data2;
          return;
        }
        if (isObject(data2) && rootProps.accordion) {
          const { opend, parent, uidList } = data2;
          if (parent === (instance == null ? void 0 : instance.parent)) {
            state.opened = opend;
          } else if (!uidList.includes(instance == null ? void 0 : instance.uid)) {
            state.opened = false;
          }
          return;
        }
        if (props.name && Array.isArray(data2)) {
          state.opened = data2.includes(props.name);
        }
      });
      rootMenuEmitter.on("on-update-active-name:submenu", (data2) => {
        if (instance == null ? void 0 : instance.uid) {
          state.active = data2.includes(instance == null ? void 0 : instance.uid);
        }
      });
    });
    function handleVisibleChange(visible) {
      state.opened = visible;
    }
    provide(`subMenu:${instance == null ? void 0 : instance.uid}`, {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      getOpenNames: parentGetOpenNames,
      removeAll: parentRemoveAll,
      isRemoveAllPopup,
      sliceIndex,
      level: level + 1,
      handleMouseleave,
      props: rootProps
    });
    return __spreadValues(__spreadValues({
      getClass,
      prefixCls,
      getCollapse,
      getItemStyle,
      handleClick,
      handleVisibleChange,
      getParentSubMenu,
      getOverlayStyle,
      getTheme,
      getIsOpend,
      getEvents,
      getSubClass
    }, toRefs(state)), toRefs(data));
  }
});
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_CollapseTransition = resolveComponent("CollapseTransition");
  const _component_Popover = resolveComponent("Popover");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.getClass)
  }, [
    !_ctx.getCollapse ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-submenu-title`),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
        style: normalizeStyle(_ctx.getItemStyle)
      }, [
        renderSlot(_ctx.$slots, "title"),
        createVNode(_component_Icon, {
          icon: "eva:arrow-ios-downward-outline",
          size: 14,
          class: normalizeClass(`${_ctx.prefixCls}-submenu-title-icon`)
        }, null, 8, ["class"])
      ], 6),
      createVNode(_component_CollapseTransition, null, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("ul", {
            class: normalizeClass(_ctx.prefixCls)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2), [
            [vShow, _ctx.opened]
          ])
        ]),
        _: 3
      })
    ], 64)) : (openBlock(), createBlock(_component_Popover, {
      key: 1,
      placement: "right",
      overlayClassName: `${_ctx.prefixCls}-menu-popover`,
      visible: _ctx.getIsOpend,
      onVisibleChange: _ctx.handleVisibleChange,
      overlayStyle: _ctx.getOverlayStyle,
      align: { offset: [0, 0] }
    }, {
      content: withCtx(() => [
        createBaseVNode("div", normalizeProps(guardReactiveProps(_ctx.getEvents(true))), [
          createBaseVNode("ul", {
            class: normalizeClass([_ctx.prefixCls, `${_ctx.prefixCls}-${_ctx.getTheme}`, `${_ctx.prefixCls}-popup`])
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 16)
      ]),
      default: withCtx(() => [
        createBaseVNode("div", mergeProps({ class: _ctx.getSubClass }, _ctx.getEvents(false)), [
          createBaseVNode("div", {
            class: normalizeClass([
              {
                [`${_ctx.prefixCls}-submenu-popup`]: !_ctx.getParentSubMenu,
                [`${_ctx.prefixCls}-submenu-collapsed-show-tit`]: _ctx.collapsedShowTitle
              }
            ])
          }, [
            renderSlot(_ctx.$slots, "title")
          ], 2),
          _ctx.getParentSubMenu ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: "eva:arrow-ios-downward-outline",
            size: 14,
            class: normalizeClass(`${_ctx.prefixCls}-submenu-title-icon`)
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 16)
      ]),
      _: 3
    }, 8, ["overlayClassName", "visible", "onVisibleChange", "overlayStyle"]))
  ], 2);
}
var SubMenu = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l]]);
const _sfc_main$l = defineComponent({
  name: "SimpleSubMenu",
  components: {
    SubMenu,
    MenuItem,
    SimpleMenuTag: createAsyncComponent(() => __vitePreload(() => Promise.resolve().then(function() {
      return SimpleMenuTag$1;
    }), true ? void 0 : void 0)),
    Icon
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    parent: propTypes.bool,
    collapsedShowTitle: propTypes.bool,
    collapse: propTypes.bool,
    theme: propTypes.oneOf(["dark", "light"])
  },
  setup(props) {
    const { t: t2 } = useI18n();
    const { prefixCls } = useDesign("simple-menu");
    const getShowMenu = computed(() => {
      var _a, _b;
      return !((_b = (_a = props.item) == null ? void 0 : _a.meta) == null ? void 0 : _b.hideMenu);
    });
    const getIcon = computed(() => {
      var _a;
      return (_a = props.item) == null ? void 0 : _a.icon;
    });
    const getI18nName = computed(() => {
      var _a;
      return t2((_a = props.item) == null ? void 0 : _a.name);
    });
    const getShowSubTitle = computed(() => !props.collapse || !props.parent);
    const getIsCollapseParent = computed(() => !!props.collapse && !!props.parent);
    const getLevelClass = computed(() => {
      return [
        {
          [`${prefixCls}__parent`]: props.parent,
          [`${prefixCls}__children`]: !props.parent
        }
      ];
    });
    function menuHasChildren(menuTreeItem) {
      var _a;
      return !((_a = menuTreeItem.meta) == null ? void 0 : _a.hideChildrenInMenu) && Reflect.has(menuTreeItem, "children") && !!menuTreeItem.children && menuTreeItem.children.length > 0;
    }
    return {
      prefixCls,
      menuHasChildren,
      getShowMenu,
      getIcon,
      getI18nName,
      getShowSubTitle,
      getLevelClass,
      getIsCollapseParent
    };
  }
});
const _hoisted_1$3 = {
  key: 1,
  class: "mt-1 collapse-title"
};
const _hoisted_2 = {
  key: 1,
  class: "mt-2 collapse-title"
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_SimpleMenuTag = resolveComponent("SimpleMenuTag");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_SimpleSubMenu = resolveComponent("SimpleSubMenu", true);
  const _component_SubMenu = resolveComponent("SubMenu");
  return openBlock(), createElementBlock(Fragment, null, [
    !_ctx.menuHasChildren(_ctx.item) && _ctx.getShowMenu ? (openBlock(), createBlock(_component_MenuItem, mergeProps({
      key: 0,
      name: _ctx.item.path
    }, _ctx.$props, { class: _ctx.getLevelClass }), {
      title: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(["ml-2", `${_ctx.prefixCls}-sub-title`])
        }, toDisplayString(_ctx.getI18nName), 3),
        createVNode(_component_SimpleMenuTag, {
          item: _ctx.item,
          collapseParent: _ctx.getIsCollapseParent
        }, null, 8, ["item", "collapseParent"])
      ]),
      default: withCtx(() => [
        _ctx.getIcon ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: _ctx.getIcon,
          size: 16
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        _ctx.collapsedShowTitle && _ctx.getIsCollapseParent ? (openBlock(), createElementBlock("div", _hoisted_1$3, toDisplayString(_ctx.getI18nName), 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["name", "class"])) : createCommentVNode("", true),
    _ctx.menuHasChildren(_ctx.item) && _ctx.getShowMenu ? (openBlock(), createBlock(_component_SubMenu, {
      key: 1,
      name: _ctx.item.path,
      class: normalizeClass([_ctx.getLevelClass, _ctx.theme]),
      collapsedShowTitle: _ctx.collapsedShowTitle
    }, {
      title: withCtx(() => [
        _ctx.getIcon ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: _ctx.getIcon,
          size: 16
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        _ctx.collapsedShowTitle && _ctx.getIsCollapseParent ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.getI18nName), 1)) : createCommentVNode("", true),
        withDirectives(createBaseVNode("span", {
          class: normalizeClass(["ml-2", `${_ctx.prefixCls}-sub-title`])
        }, toDisplayString(_ctx.getI18nName), 3), [
          [vShow, _ctx.getShowSubTitle]
        ]),
        createVNode(_component_SimpleMenuTag, {
          item: _ctx.item,
          collapseParent: !!_ctx.collapse && !!_ctx.parent
        }, null, 8, ["item", "collapseParent"])
      ]),
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.item.children || [], (childrenItem) => {
          return openBlock(), createBlock(_component_SimpleSubMenu, mergeProps({
            key: childrenItem.path
          }, _ctx.$props, {
            item: childrenItem,
            parent: false
          }), null, 16, ["item"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["name", "class", "collapsedShowTitle"])) : createCommentVNode("", true)
  ], 64);
}
var SimpleSubMenu = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k]]);
function useOpenKeys(menuState, menus, accordion, mixSider, collapse) {
  const debounceSetOpenKeys = useDebounceFn(setOpenKeys, 50);
  async function setOpenKeys(path) {
    const native = !mixSider.value;
    const menuList = toRaw(menus.value);
    useTimeoutFn(() => {
      if ((menuList == null ? void 0 : menuList.length) === 0) {
        menuState.activeSubMenuNames = [];
        menuState.openNames = [];
        return;
      }
      const keys = getAllParentPath(menuList, path);
      if (!unref(accordion)) {
        menuState.openNames = uniq([...menuState.openNames, ...keys]);
      } else {
        menuState.openNames = keys;
      }
      menuState.activeSubMenuNames = menuState.openNames;
    }, 30, native);
  }
  const getOpenKeys = computed(() => {
    return unref(collapse) ? [] : menuState.openNames;
  });
  return { setOpenKeys: debounceSetOpenKeys, getOpenKeys };
}
var SimpleMenu_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = defineComponent({
  name: "SimpleMenu",
  components: {
    Menu,
    SimpleSubMenu
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    collapse: propTypes.bool,
    mixSider: propTypes.bool,
    theme: propTypes.string,
    accordion: propTypes.bool.def(true),
    collapsedShowTitle: propTypes.bool,
    beforeClickFn: {
      type: Function
    },
    isSplitMenu: propTypes.bool
  },
  emits: ["menuClick"],
  setup(props, { attrs, emit }) {
    const currentActiveMenu = ref("");
    const isClickGo = ref(false);
    const menuState = reactive({
      activeName: "",
      openNames: [],
      activeSubMenuNames: []
    });
    const { currentRoute } = useRouter();
    const { prefixCls } = useDesign("simple-menu");
    const { items, accordion, mixSider, collapse } = toRefs(props);
    const { setOpenKeys, getOpenKeys } = useOpenKeys(menuState, items, accordion, mixSider, collapse);
    const getBindValues = computed(() => __spreadValues(__spreadValues({}, attrs), props));
    watch(() => props.collapse, (collapse2) => {
      if (collapse2) {
        menuState.openNames = [];
      } else {
        setOpenKeys(currentRoute.value.path);
      }
    }, { immediate: true });
    watch(() => props.items, () => {
      if (!props.isSplitMenu) {
        return;
      }
      setOpenKeys(currentRoute.value.path);
    }, { flush: "post" });
    listenerRouteChange((route) => {
      var _a;
      if (route.name === REDIRECT_NAME)
        return;
      currentActiveMenu.value = (_a = route.meta) == null ? void 0 : _a.currentActiveMenu;
      handleMenuChange(route);
      if (unref(currentActiveMenu)) {
        menuState.activeName = unref(currentActiveMenu);
        setOpenKeys(unref(currentActiveMenu));
      }
    });
    async function handleMenuChange(route) {
      if (unref(isClickGo)) {
        isClickGo.value = false;
        return;
      }
      const path = (route || unref(currentRoute)).path;
      menuState.activeName = path;
      setOpenKeys(path);
    }
    async function handleSelect(key2) {
      if (isUrl(key2)) {
        openWindow(key2);
        return;
      }
      const { beforeClickFn } = props;
      if (beforeClickFn && isFunction(beforeClickFn)) {
        const flag = await beforeClickFn(key2);
        if (!flag)
          return;
      }
      emit("menuClick", key2);
      isClickGo.value = true;
      setOpenKeys(key2);
      menuState.activeName = key2;
    }
    return __spreadValues({
      prefixCls,
      getBindValues,
      handleSelect,
      getOpenKeys
    }, toRefs(menuState));
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SimpleSubMenu = resolveComponent("SimpleSubMenu");
  const _component_Menu = resolveComponent("Menu");
  return openBlock(), createBlock(_component_Menu, mergeProps(_ctx.getBindValues, {
    activeName: _ctx.activeName,
    openNames: _ctx.getOpenKeys,
    class: _ctx.prefixCls,
    activeSubMenuNames: _ctx.activeSubMenuNames,
    onSelect: _ctx.handleSelect
  }), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createBlock(_component_SimpleSubMenu, {
          key: item.path,
          item,
          parent: true,
          collapsedShowTitle: _ctx.collapsedShowTitle,
          collapse: _ctx.collapse
        }, null, 8, ["item", "collapsedShowTitle", "collapse"]);
      }), 128))
    ]),
    _: 1
  }, 16, ["activeName", "openNames", "class", "activeSubMenuNames", "onSelect"]);
}
var SimpleMenu = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j]]);
const _sfc_main$j = defineComponent({
  name: "SimpleMenuTag",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    dot: propTypes.bool,
    collapseParent: propTypes.bool
  },
  setup(props) {
    const { prefixCls } = useDesign("simple-menu");
    const getShowTag = computed(() => {
      const { item } = props;
      if (!item)
        return false;
      const { tag } = item;
      if (!tag)
        return false;
      const { dot, content } = tag;
      if (!dot && !content)
        return false;
      return true;
    });
    const getContent = computed(() => {
      if (!getShowTag.value)
        return "";
      const { item, collapseParent } = props;
      const { tag } = item;
      const { dot, content } = tag;
      return dot || collapseParent ? "" : content;
    });
    const getTagClass = computed(() => {
      const { item, collapseParent } = props;
      const { tag = {} } = item || {};
      const { dot, type = "error" } = tag;
      const tagCls = `${prefixCls}-tag`;
      return [
        tagCls,
        [`${tagCls}--${type}`],
        {
          [`${tagCls}--collapse`]: collapseParent,
          [`${tagCls}--dot`]: dot || props.dot
        }
      ];
    });
    return {
      getTagClass,
      getShowTag,
      getContent
    };
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.getShowTag ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.getTagClass)
  }, toDisplayString(_ctx.getContent), 3)) : createCommentVNode("", true);
}
var SimpleMenuTag = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);
var SimpleMenuTag$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": SimpleMenuTag
});
function useSplitMenu(splitType) {
  const menusRef = ref([]);
  const { currentRoute } = useRouter();
  const { getIsMobile } = useAppInject();
  const permissionStore = usePermissionStore();
  const { setMenuSetting, getIsHorizontal, getSplit } = useMenuSetting();
  const throttleHandleSplitLeftMenu = useThrottleFn(handleSplitLeftMenu, 50);
  const splitNotLeft = computed(() => unref(splitType) !== MenuSplitTyeEnum.LEFT && !unref(getIsHorizontal));
  const getSplitLeft = computed(() => !unref(getSplit) || unref(splitType) !== MenuSplitTyeEnum.LEFT);
  const getSpiltTop = computed(() => unref(splitType) === MenuSplitTyeEnum.TOP);
  const normalType = computed(() => {
    return unref(splitType) === MenuSplitTyeEnum.NONE || !unref(getSplit);
  });
  watch([() => unref(currentRoute).path, () => unref(splitType)], async ([path]) => {
    if (unref(splitNotLeft) || unref(getIsMobile))
      return;
    const { meta } = unref(currentRoute);
    const currentActiveMenu = meta.currentActiveMenu;
    let parentPath = await getCurrentParentPath(path);
    if (!parentPath) {
      parentPath = await getCurrentParentPath(currentActiveMenu);
    }
    parentPath && throttleHandleSplitLeftMenu(parentPath);
  }, {
    immediate: true
  });
  watch([() => permissionStore.getLastBuildMenuTime, () => permissionStore.getBackMenuList], () => {
    genMenus();
  }, {
    immediate: true
  });
  watch(() => getSplit.value, () => {
    if (unref(splitNotLeft))
      return;
    genMenus();
  });
  async function handleSplitLeftMenu(parentPath) {
    if (unref(getSplitLeft) || unref(getIsMobile))
      return;
    const children = await getChildrenMenus(parentPath);
    if (!children || !children.length) {
      setMenuSetting({ hidden: true });
      menusRef.value = [];
      return;
    }
    setMenuSetting({ hidden: false });
    menusRef.value = children;
  }
  async function genMenus() {
    if (unref(normalType) || unref(getIsMobile)) {
      menusRef.value = await getMenus();
      return;
    }
    if (unref(getSpiltTop)) {
      const shallowMenus = await getShallowMenus();
      menusRef.value = shallowMenus;
      return;
    }
  }
  return { menusRef };
}
var _sfc_main$i = defineComponent({
  name: "LayoutMenu",
  props: {
    theme: propTypes.oneOf(["light", "dark"]),
    splitType: {
      type: Number,
      default: MenuSplitTyeEnum.NONE
    },
    isHorizontal: propTypes.bool,
    menuMode: {
      type: [String],
      default: ""
    }
  },
  setup(props) {
    const go = useGo();
    const {
      getMenuMode,
      getMenuType,
      getMenuTheme,
      getCollapsed,
      getCollapsedShowTitle,
      getAccordion,
      getIsHorizontal,
      getIsSidebarType,
      getSplit
    } = useMenuSetting();
    const {
      getShowLogo
    } = useRootSetting();
    const {
      prefixCls
    } = useDesign("layout-menu");
    const {
      menusRef
    } = useSplitMenu(toRef(props, "splitType"));
    const {
      getIsMobile
    } = useAppInject();
    const getComputedMenuMode = computed(() => unref(getIsMobile) ? MenuModeEnum.INLINE : props.menuMode || unref(getMenuMode));
    const getComputedMenuTheme = computed(() => props.theme || unref(getMenuTheme));
    const getIsShowLogo = computed(() => unref(getShowLogo) && unref(getIsSidebarType));
    const getUseScroll = computed(() => {
      return !unref(getIsHorizontal) && (unref(getIsSidebarType) || props.splitType === MenuSplitTyeEnum.LEFT || props.splitType === MenuSplitTyeEnum.NONE);
    });
    const getWrapperStyle = computed(() => {
      return {
        height: `calc(100% - ${unref(getIsShowLogo) ? "48px" : "0px"})`
      };
    });
    const getLogoClass = computed(() => {
      return [`${prefixCls}-logo`, unref(getComputedMenuTheme), {
        [`${prefixCls}--mobile`]: unref(getIsMobile)
      }];
    });
    const getCommonProps = computed(() => {
      const menus = unref(menusRef);
      return {
        menus,
        beforeClickFn: beforeMenuClickFn,
        items: menus,
        theme: unref(getComputedMenuTheme),
        accordion: unref(getAccordion),
        collapse: unref(getCollapsed),
        collapsedShowTitle: unref(getCollapsedShowTitle),
        onMenuClick: handleMenuClick
      };
    });
    function handleMenuClick(path) {
      go(path);
    }
    async function beforeMenuClickFn(path) {
      if (!isUrl(path)) {
        return true;
      }
      openWindow(path);
      return false;
    }
    function renderHeader() {
      if (!unref(getIsShowLogo) && !unref(getIsMobile))
        return null;
      return createVNode(AppLogo, {
        "showTitle": !unref(getCollapsed),
        "class": unref(getLogoClass),
        "theme": unref(getComputedMenuTheme)
      }, null);
    }
    function renderMenu() {
      const _a = unref(getCommonProps), {
        menus
      } = _a, menuProps = __objRest(_a, [
        "menus"
      ]);
      if (!menus || !menus.length)
        return null;
      return !props.isHorizontal ? createVNode(SimpleMenu, mergeProps(menuProps, {
        "isSplitMenu": unref(getSplit),
        "items": menus
      }), null) : createVNode(BasicMenu, mergeProps(menuProps, {
        "isHorizontal": props.isHorizontal,
        "type": unref(getMenuType),
        "showLogo": unref(getIsShowLogo),
        "mode": unref(getComputedMenuMode),
        "items": menus
      }), null);
    }
    return () => {
      return createVNode(Fragment, null, [renderHeader(), unref(getUseScroll) ? createVNode(ScrollContainer, {
        "style": unref(getWrapperStyle)
      }, {
        default: () => renderMenu()
      }) : renderMenu()]);
    };
  }
});
var index_vue_vue_type_style_index_0_lang$5 = "";
const _sfc_main$h = defineComponent({
  name: "HeaderTrigger",
  components: { MenuUnfoldOutlined, MenuFoldOutlined },
  props: {
    theme: propTypes.oneOf(["light", "dark"])
  },
  setup() {
    const { getCollapsed, toggleCollapsed } = useMenuSetting();
    const { prefixCls } = useDesign("layout-header-trigger");
    return { getCollapsed, toggleCollapsed, prefixCls };
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuUnfoldOutlined = resolveComponent("MenuUnfoldOutlined");
  const _component_MenuFoldOutlined = resolveComponent("MenuFoldOutlined");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([_ctx.prefixCls, _ctx.theme]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleCollapsed && _ctx.toggleCollapsed(...args))
  }, [
    _ctx.getCollapsed ? (openBlock(), createBlock(_component_MenuUnfoldOutlined, { key: 0 })) : (openBlock(), createBlock(_component_MenuFoldOutlined, { key: 1 }))
  ], 2);
}
var HeaderTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = defineComponent({
  name: "LayoutTrigger",
  components: {
    SiderTrigger: createAsyncComponent(() => __vitePreload(() => import("./SiderTrigger.59f86359.js"), true ? ["assets/SiderTrigger.59f86359.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css"] : void 0)),
    HeaderTrigger
  },
  props: {
    sider: propTypes.bool.def(true),
    theme: propTypes.oneOf(["light", "dark"])
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SiderTrigger = resolveComponent("SiderTrigger");
  const _component_HeaderTrigger = resolveComponent("HeaderTrigger");
  return _ctx.sider ? (openBlock(), createBlock(_component_SiderTrigger, { key: 0 })) : (openBlock(), createBlock(_component_HeaderTrigger, {
    key: 1,
    theme: _ctx.theme
  }, null, 8, ["theme"]));
}
var LayoutTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
function useHeaderSetting() {
  const { getFullContent } = useFullContent();
  const appStore = useAppStore();
  const getShowFullHeaderRef = computed(() => {
    return !unref(getFullContent) && unref(getShowMixHeaderRef) && unref(getShowHeader) && !unref(getIsTopMenu) && !unref(getIsMixSidebar);
  });
  const getUnFixedAndFull = computed(() => !unref(getFixed) && !unref(getShowFullHeaderRef));
  const getShowInsetHeaderRef = computed(() => {
    const need = !unref(getFullContent) && unref(getShowHeader);
    return need && !unref(getShowMixHeaderRef) || need && unref(getIsTopMenu) || need && unref(getIsMixSidebar);
  });
  const {
    getMenuMode,
    getSplit,
    getShowHeaderTrigger,
    getIsSidebarType,
    getIsMixSidebar,
    getIsTopMenu
  } = useMenuSetting();
  const { getShowBreadCrumb, getShowLogo } = useRootSetting();
  const getShowMixHeaderRef = computed(() => !unref(getIsSidebarType) && unref(getShowHeader));
  const getShowDoc = computed(() => appStore.getHeaderSetting.showDoc);
  const getHeaderTheme = computed(() => appStore.getHeaderSetting.theme);
  const getShowHeader = computed(() => appStore.getHeaderSetting.show);
  const getFixed = computed(() => appStore.getHeaderSetting.fixed);
  const getHeaderBgColor = computed(() => appStore.getHeaderSetting.bgColor);
  const getShowSearch = computed(() => appStore.getHeaderSetting.showSearch);
  const getUseLockPage = computed(() => appStore.getHeaderSetting.useLockPage);
  const getShowFullScreen = computed(() => appStore.getHeaderSetting.showFullScreen);
  const getShowNotice = computed(() => appStore.getHeaderSetting.showNotice);
  const getShowBread = computed(() => {
    return unref(getMenuMode) !== MenuModeEnum.HORIZONTAL && unref(getShowBreadCrumb) && !unref(getSplit);
  });
  const getShowHeaderLogo = computed(() => {
    return unref(getShowLogo) && !unref(getIsSidebarType) && !unref(getIsMixSidebar);
  });
  const getShowContent = computed(() => {
    return unref(getShowBread) || unref(getShowHeaderTrigger);
  });
  function setHeaderSetting(headerSetting) {
    appStore.setProjectConfig({ headerSetting });
  }
  return {
    setHeaderSetting,
    getShowDoc,
    getShowSearch,
    getHeaderTheme,
    getUseLockPage,
    getShowFullScreen,
    getShowNotice,
    getShowBread,
    getShowContent,
    getShowHeaderLogo,
    getShowHeader,
    getFixed,
    getShowMixHeaderRef,
    getShowFullHeaderRef,
    getShowInsetHeaderRef,
    getUnFixedAndFull,
    getHeaderBgColor
  };
}
const _sfc_main$f = defineComponent({
  components: {
    [Select.name]: Select
  },
  setup() {
    const userStore = useUserStore();
    const selectedShop = computed(() => {
      const { selectedShop: selectedShop2 } = userStore.getUserInfo;
      return selectedShop2 || "";
    });
    const { permission } = userStore.getUserInfo;
    const options = computed(() => {
      return permission.map((item) => {
        return {
          value: item.shop,
          label: item.shopName
        };
      });
    });
    const handleChange = async (value) => {
      await selectShop({ shop_id: value });
      location.reload();
    };
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      selectedShop,
      value: ref(selectedShop.value),
      filterOption,
      handleChange,
      options
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select = resolveComponent("a-select");
  return openBlock(), createBlock(_component_a_select, {
    value: _ctx.value,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    "show-search": "",
    placeholder: "\u8BF7\u9009\u62E9\u5E73\u53F0",
    style: { "width": "200px" },
    options: _ctx.options,
    "filter-option": _ctx.filterOption,
    onChange: _ctx.handleChange
  }, null, 8, ["value", "options", "filter-option", "onChange"]);
}
var TopSelect = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = defineComponent({
  name: "FullScreen",
  components: { FullscreenExitOutlined, FullscreenOutlined, Tooltip },
  setup() {
    const { t: t2 } = useI18n();
    const { toggle, isFullscreen } = useFullscreen();
    const getTitle = computed(() => {
      return unref(isFullscreen) ? t2("layout.header.tooltipExitFull") : t2("layout.header.tooltipEntryFull");
    });
    return {
      getTitle,
      isFullscreen,
      toggle
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FullscreenOutlined = resolveComponent("FullscreenOutlined");
  const _component_FullscreenExitOutlined = resolveComponent("FullscreenExitOutlined");
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, {
    title: _ctx.getTitle,
    placement: "bottom",
    mouseEnterDelay: 0.5
  }, {
    default: withCtx(() => [
      createBaseVNode("span", {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggle && _ctx.toggle(...args))
      }, [
        !_ctx.isFullscreen ? (openBlock(), createBlock(_component_FullscreenOutlined, { key: 0 })) : (openBlock(), createBlock(_component_FullscreenExitOutlined, { key: 1 }))
      ])
    ]),
    _: 1
  }, 8, ["title", "mouseEnterDelay"]);
}
var FullScreen = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const UserDropDown = createAsyncComponent(() => __vitePreload(() => import("./index.c7536ec7.js"), true ? ["assets/index.c7536ec7.js","assets/index.4a39cdee.css","assets/index.143500d6.css","assets/index.2bd69081.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/siteSetting.c485f07c.js","assets/index.1f0d40c7.js","assets/index.fa5fb104.css","assets/useWindowSizeFn.07387e97.js","assets/header.d801b988.js","assets/index.a3f7158a.js","assets/index.5df3653a.css","assets/useContentViewHeight.814f6021.js","assets/lock.4da61d6f.js"] : void 0), {
  loading: true
});
const LayoutBreadcrumb = createAsyncComponent(() => __vitePreload(() => import("./Breadcrumb.82644cff.js"), true ? ["assets/Breadcrumb.82644cff.js","assets/Breadcrumb.f04cb654.css","assets/index.2cff71e6.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css"] : void 0));
createAsyncComponent(() => __vitePreload(() => import("./index.e8f86d3b.js"), true ? ["assets/index.e8f86d3b.js","assets/index.9e4205ba.css","assets/index.2bd69081.css","assets/index.20ceb7d3.css","assets/index.0dff3089.css","assets/index.20f4923c.css","assets/index.514ba43f.css","assets/index.c5cfd1c2.css","assets/index.1240619a.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css"] : void 0));
const ErrorAction = createAsyncComponent(() => __vitePreload(() => import("./ErrorAction.cd363c92.js"), true ? ["assets/ErrorAction.cd363c92.js","assets/index.20ceb7d3.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css"] : void 0));
var index_vue_vue_type_style_index_0_lang$4 = "";
const _sfc_main$d = defineComponent({
  name: "LayoutHeader",
  components: {
    Header: Layout.Header,
    AppLogo,
    LayoutTrigger,
    LayoutBreadcrumb,
    LayoutMenu: _sfc_main$i,
    UserDropDown,
    TopSelect,
    FullScreen,
    AppSearch,
    ErrorAction,
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.c0a3d206.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.c0a3d206.js","assets/index.8c4bdb81.css","assets/index.cb7d07ad.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css"] : void 0), {
      loading: true
    })
  },
  props: {
    fixed: propTypes.bool
  },
  setup(props) {
    const { prefixCls } = useDesign("layout-header");
    const {
      getShowTopMenu,
      getShowHeaderTrigger,
      getSplit,
      getIsMixMode,
      getMenuWidth,
      getIsMixSidebar
    } = useMenuSetting();
    const { getUseErrorHandle, getShowSettingButton, getSettingButtonPosition } = useRootSetting();
    const {
      getHeaderTheme,
      getShowFullScreen,
      getShowNotice,
      getShowContent,
      getShowBread,
      getShowHeaderLogo,
      getShowHeader,
      getShowSearch
    } = useHeaderSetting();
    const { getShowLocalePicker } = useLocale();
    const { getIsMobile } = useAppInject();
    const getHeaderClass = computed(() => {
      const theme = unref(getHeaderTheme);
      return [
        prefixCls,
        {
          [`${prefixCls}--fixed`]: props.fixed,
          [`${prefixCls}--mobile`]: unref(getIsMobile),
          [`${prefixCls}--${theme}`]: theme
        }
      ];
    });
    const getShowSetting = computed(() => {
      if (!unref(getShowSettingButton)) {
        return false;
      }
      const settingButtonPosition = unref(getSettingButtonPosition);
      if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
        return unref(getShowHeader);
      }
      return settingButtonPosition === SettingButtonPositionEnum.HEADER;
    });
    const getLogoWidth = computed(() => {
      if (!unref(getIsMixMode) || unref(getIsMobile)) {
        return {};
      }
      const width = unref(getMenuWidth) < 180 ? 180 : unref(getMenuWidth);
      return { width: `${width}px` };
    });
    const getSplitType = computed(() => {
      return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE;
    });
    const getMenuMode = computed(() => {
      return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null;
    });
    return {
      prefixCls,
      getHeaderClass,
      getShowHeaderLogo,
      getHeaderTheme,
      getShowHeaderTrigger,
      getIsMobile,
      getShowBread,
      getShowContent,
      getSplitType,
      getSplit,
      getMenuMode,
      getShowTopMenu,
      getShowLocalePicker,
      getShowFullScreen,
      getShowNotice,
      getUseErrorHandle,
      getLogoWidth,
      getIsMixSidebar,
      getShowSettingButton,
      getShowSetting,
      getShowSearch
    };
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_LayoutTrigger = resolveComponent("LayoutTrigger");
  const _component_LayoutBreadcrumb = resolveComponent("LayoutBreadcrumb");
  const _component_TopSelect = resolveComponent("TopSelect");
  const _component_LayoutMenu = resolveComponent("LayoutMenu");
  const _component_AppSearch = resolveComponent("AppSearch");
  const _component_ErrorAction = resolveComponent("ErrorAction");
  const _component_FullScreen = resolveComponent("FullScreen");
  const _component_UserDropDown = resolveComponent("UserDropDown");
  const _component_SettingDrawer = resolveComponent("SettingDrawer");
  const _component_Header = resolveComponent("Header");
  return openBlock(), createBlock(_component_Header, {
    class: normalizeClass(_ctx.getHeaderClass)
  }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-left`)
      }, [
        _ctx.getShowHeaderLogo || _ctx.getIsMobile ? (openBlock(), createBlock(_component_AppLogo, {
          key: 0,
          class: normalizeClass(`${_ctx.prefixCls}-logo`),
          theme: _ctx.getHeaderTheme,
          style: normalizeStyle(_ctx.getLogoWidth)
        }, null, 8, ["class", "theme", "style"])) : createCommentVNode("", true),
        _ctx.getShowContent && _ctx.getShowHeaderTrigger && !_ctx.getSplit && !_ctx.getIsMixSidebar || _ctx.getIsMobile ? (openBlock(), createBlock(_component_LayoutTrigger, {
          key: 1,
          theme: _ctx.getHeaderTheme,
          sider: false
        }, null, 8, ["theme"])) : createCommentVNode("", true),
        _ctx.getShowContent && _ctx.getShowBread ? (openBlock(), createBlock(_component_LayoutBreadcrumb, {
          key: 2,
          theme: _ctx.getHeaderTheme
        }, null, 8, ["theme"])) : createCommentVNode("", true)
      ], 2),
      createVNode(_component_TopSelect),
      _ctx.getShowTopMenu && !_ctx.getIsMobile ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-menu`)
      }, [
        createVNode(_component_LayoutMenu, {
          isHorizontal: true,
          theme: _ctx.getHeaderTheme,
          splitType: _ctx.getSplitType,
          menuMode: _ctx.getMenuMode
        }, null, 8, ["theme", "splitType", "menuMode"])
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-action`)
      }, [
        _ctx.getShowSearch ? (openBlock(), createBlock(_component_AppSearch, {
          key: 0,
          class: normalizeClass(`${_ctx.prefixCls}-action__item `)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        _ctx.getUseErrorHandle ? (openBlock(), createBlock(_component_ErrorAction, {
          key: 1,
          class: normalizeClass(`${_ctx.prefixCls}-action__item error-action`)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        _ctx.getShowFullScreen ? (openBlock(), createBlock(_component_FullScreen, {
          key: 2,
          class: normalizeClass(`${_ctx.prefixCls}-action__item fullscreen-item`)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        createVNode(_component_UserDropDown, { theme: _ctx.getHeaderTheme }, null, 8, ["theme"]),
        _ctx.getShowSetting ? (openBlock(), createBlock(_component_SettingDrawer, {
          key: 3,
          class: normalizeClass(`${_ctx.prefixCls}-action__item`)
        }, null, 8, ["class"])) : createCommentVNode("", true)
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
var LayoutHeader = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
function useMultipleTabSetting() {
  const appStore = useAppStore();
  const getShowMultipleTab = computed(() => appStore.getMultiTabsSetting.show);
  const getShowQuick = computed(() => appStore.getMultiTabsSetting.showQuick);
  const getShowRedo = computed(() => appStore.getMultiTabsSetting.showRedo);
  const getShowFold = computed(() => appStore.getMultiTabsSetting.showFold);
  function setMultipleTabSetting(multiTabsSetting) {
    appStore.setProjectConfig({ multiTabsSetting });
  }
  return {
    setMultipleTabSetting,
    getShowMultipleTab,
    getShowQuick,
    getShowRedo,
    getShowFold
  };
}
function useFrameKeepAlive() {
  const router = useRouter();
  const { currentRoute } = router;
  const { getShowMultipleTab } = useMultipleTabSetting();
  const tabStore = useMultipleTabStore();
  const getFramePages = computed(() => {
    const ret = getAllFramePages(toRaw(router.getRoutes())) || [];
    return ret;
  });
  const getOpenTabList = computed(() => {
    return tabStore.getTabList.reduce((prev, next) => {
      if (next.meta && Reflect.has(next.meta, "frameSrc")) {
        prev.push(next.name);
      }
      return prev;
    }, []);
  });
  function getAllFramePages(routes) {
    let res = [];
    for (const route of routes) {
      const { meta: { frameSrc } = {}, children } = route;
      if (frameSrc) {
        res.push(route);
      }
      if (children && children.length) {
        res.push(...getAllFramePages(children));
      }
    }
    res = uniqBy(res, "name");
    return res;
  }
  function showIframe(item) {
    return item.name === unref(currentRoute).name;
  }
  function hasRenderFrame(name) {
    if (!unref(getShowMultipleTab)) {
      return router.currentRoute.value.name === name;
    }
    return unref(getOpenTabList).includes(name);
  }
  return { hasRenderFrame, getFramePages, showIframe, getAllFramePages };
}
const _sfc_main$c = defineComponent({
  name: "FrameLayout",
  components: { FramePage },
  setup() {
    const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
    const showFrame = computed(() => unref(getFramePages).length > 0);
    return { getFramePages, hasRenderFrame, showIframe, showFrame };
  }
});
const _hoisted_1$2 = { key: 0 };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FramePage = resolveComponent("FramePage");
  return _ctx.showFrame ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getFramePages, (frame) => {
      return openBlock(), createElementBlock(Fragment, {
        key: frame.path
      }, [
        frame.meta.frameSrc && _ctx.hasRenderFrame(frame.name) ? withDirectives((openBlock(), createBlock(_component_FramePage, {
          key: 0,
          frameSrc: frame.meta.frameSrc
        }, null, 8, ["frameSrc"])), [
          [vShow, _ctx.showIframe(frame)]
        ]) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ])) : createCommentVNode("", true);
}
var FrameLayout = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
function getTransitionName({
  route,
  openCache,
  cacheTabs,
  enableTransition,
  def
}) {
  if (!enableTransition) {
    return void 0;
  }
  const isInCache = cacheTabs.includes(route.name);
  const transitionName = "fade-slide";
  let name = transitionName;
  if (openCache) {
    name = isInCache && route.meta.loaded ? transitionName : void 0;
  }
  return name || route.meta.transitionName || def;
}
const _sfc_main$b = defineComponent({
  name: "PageLayout",
  components: { FrameLayout },
  setup() {
    const { getShowMultipleTab } = useMultipleTabSetting();
    const tabStore = useMultipleTabStore();
    const { getOpenKeepAlive, getCanEmbedIFramePage } = useRootSetting();
    const { getBasicTransition, getEnableTransition } = useTransitionSetting();
    const openCache = computed(() => unref(getOpenKeepAlive) && unref(getShowMultipleTab));
    const getCaches = computed(() => {
      if (!unref(getOpenKeepAlive)) {
        return [];
      }
      return tabStore.getCachedTabList;
    });
    return {
      getTransitionName,
      openCache,
      getEnableTransition,
      getBasicTransition,
      getCaches,
      getCanEmbedIFramePage
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterView = resolveComponent("RouterView");
  const _component_FrameLayout = resolveComponent("FrameLayout");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_RouterView, null, {
      default: withCtx(({ Component, route }) => [
        createVNode(Transition, {
          name: _ctx.getTransitionName({
            route,
            openCache: _ctx.openCache,
            enableTransition: _ctx.getEnableTransition,
            cacheTabs: _ctx.getCaches,
            def: _ctx.getBasicTransition
          }),
          mode: "out-in",
          appear: ""
        }, {
          default: withCtx(() => [
            _ctx.openCache ? (openBlock(), createBlock(KeepAlive, {
              key: 0,
              include: _ctx.getCaches
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(Component), {
                key: route.fullPath
              }))
            ], 1032, ["include"])) : (openBlock(), createBlock(resolveDynamicComponent(Component), {
              key: route.fullPath
            }))
          ]),
          _: 2
        }, 1032, ["name"])
      ]),
      _: 1
    }),
    _ctx.getCanEmbedIFramePage ? (openBlock(), createBlock(_component_FrameLayout, { key: 0 })) : createCommentVNode("", true)
  ], 64);
}
var PageLayout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var index_vue_vue_type_style_index_0_lang$3 = "";
const _sfc_main$a = defineComponent({
  name: "LayoutContent",
  components: { PageLayout },
  setup() {
    const { prefixCls } = useDesign("layout-content");
    const { getOpenPageLoading } = useTransitionSetting();
    const { getLayoutContentMode, getPageLoading } = useRootSetting();
    useContentViewHeight();
    return {
      prefixCls,
      getOpenPageLoading,
      getLayoutContentMode,
      getPageLoading
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageLayout = resolveComponent("PageLayout");
  const _directive_loading = resolveDirective("loading");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.prefixCls, _ctx.getLayoutContentMode])
  }, [
    createVNode(_component_PageLayout)
  ], 2)), [
    [_directive_loading, _ctx.getOpenPageLoading && _ctx.getPageLoading]
  ]);
}
var LayoutContent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
function useSiderEvent() {
  const brokenRef = ref(false);
  const { getMiniWidthNumber } = useMenuSetting();
  const getCollapsedWidth = computed(() => {
    return unref(brokenRef) ? 0 : unref(getMiniWidthNumber);
  });
  function onBreakpointChange(broken) {
    brokenRef.value = broken;
  }
  return { getCollapsedWidth, onBreakpointChange };
}
function useTrigger(getIsMobile) {
  const { getTrigger, getSplit } = useMenuSetting();
  const getShowTrigger = computed(() => {
    const trigger = unref(getTrigger);
    return trigger !== TriggerEnum.NONE && !unref(getIsMobile) && (trigger === TriggerEnum.FOOTER || unref(getSplit));
  });
  const getTriggerAttr = computed(() => {
    if (unref(getShowTrigger)) {
      return {};
    }
    return {
      trigger: null
    };
  });
  return { getTriggerAttr, getShowTrigger };
}
function useDragLine(siderRef, dragBarRef, mix = false) {
  const { getMiniWidthNumber, getCollapsed, setMenuSetting } = useMenuSetting();
  onMounted(() => {
    nextTick(() => {
      const exec = useDebounceFn(changeWrapWidth, 80);
      exec();
    });
  });
  function getEl(elRef) {
    var _a;
    const el = unref(elRef);
    if (!el)
      return null;
    if (Reflect.has(el, "$el")) {
      return (_a = unref(elRef)) == null ? void 0 : _a.$el;
    }
    return unref(elRef);
  }
  function handleMouseMove(ele, wrap, clientX) {
    document.onmousemove = function(innerE) {
      let iT = ele.left + (innerE.clientX - clientX);
      innerE = innerE || window.event;
      const maxT = 800;
      const minT = unref(getMiniWidthNumber);
      iT < 0 && (iT = 0);
      iT > maxT && (iT = maxT);
      iT < minT && (iT = minT);
      ele.style.left = wrap.style.width = iT + "px";
      return false;
    };
  }
  function removeMouseup(ele) {
    const wrap = getEl(siderRef);
    document.onmouseup = function() {
      var _a;
      document.onmousemove = null;
      document.onmouseup = null;
      wrap.style.transition = "width 0.2s";
      const width = parseInt(wrap.style.width);
      if (!mix) {
        const miniWidth = unref(getMiniWidthNumber);
        if (!unref(getCollapsed)) {
          width > miniWidth + 20 ? setMenuSetting({ menuWidth: width }) : setMenuSetting({ collapsed: true });
        } else {
          width > miniWidth && setMenuSetting({ collapsed: false, menuWidth: width });
        }
      } else {
        setMenuSetting({ menuWidth: width });
      }
      (_a = ele.releaseCapture) == null ? void 0 : _a.call(ele);
    };
  }
  function changeWrapWidth() {
    const ele = getEl(dragBarRef);
    if (!ele)
      return;
    const wrap = getEl(siderRef);
    if (!wrap)
      return;
    ele.onmousedown = (e) => {
      var _a;
      wrap.style.transition = "unset";
      const clientX = e == null ? void 0 : e.clientX;
      ele.left = ele.offsetLeft;
      handleMouseMove(ele, wrap, clientX);
      removeMouseup(ele);
      (_a = ele.setCapture) == null ? void 0 : _a.call(ele);
      return false;
    };
  }
  return {};
}
var DragBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = defineComponent({
  name: "DargBar",
  props: {
    mobile: Boolean
  },
  setup(props) {
    const { getMiniWidthNumber, getCollapsed, getCanDrag } = useMenuSetting();
    const { prefixCls } = useDesign("darg-bar");
    const getDragBarStyle = computed(() => {
      if (unref(getCollapsed)) {
        return { left: `${unref(getMiniWidthNumber)}px` };
      }
      return {};
    });
    const getClass = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}--hide`]: !unref(getCanDrag) || props.mobile
        }
      ];
    });
    return {
      prefixCls,
      getDragBarStyle,
      getClass
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.getClass),
    style: normalizeStyle(_ctx.getDragBarStyle)
  }, null, 6);
}
var DragBar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-d1707536"]]);
var LayoutSider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = defineComponent({
  name: "LayoutSideBar",
  components: { Sider: Layout.Sider, LayoutMenu: _sfc_main$i, DragBar, LayoutTrigger },
  setup() {
    const dragBarRef = ref(null);
    const sideRef = ref(null);
    const {
      getCollapsed,
      getMenuWidth,
      getSplit,
      getMenuTheme,
      getRealWidth,
      getMenuHidden,
      getMenuFixed,
      getIsMixMode,
      toggleCollapsed
    } = useMenuSetting();
    const { prefixCls } = useDesign("layout-sideBar");
    const { getIsMobile } = useAppInject();
    const { getTriggerAttr, getShowTrigger } = useTrigger(getIsMobile);
    useDragLine(sideRef, dragBarRef);
    const { getCollapsedWidth, onBreakpointChange } = useSiderEvent();
    const getMode = computed(() => {
      return unref(getSplit) ? MenuModeEnum.INLINE : null;
    });
    const getSplitType = computed(() => {
      return unref(getSplit) ? MenuSplitTyeEnum.LEFT : MenuSplitTyeEnum.NONE;
    });
    const showClassSideBarRef = computed(() => {
      return unref(getSplit) ? !unref(getMenuHidden) : true;
    });
    const getSiderClass = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}--fixed`]: unref(getMenuFixed),
          [`${prefixCls}--mix`]: unref(getIsMixMode) && !unref(getIsMobile)
        }
      ];
    });
    const getHiddenDomStyle = computed(() => {
      const width = `${unref(getRealWidth)}px`;
      return {
        width,
        overflow: "hidden",
        flex: `0 0 ${width}`,
        maxWidth: width,
        minWidth: width,
        transition: "all 0.2s"
      };
    });
    const getTrigger = h(LayoutTrigger);
    return {
      prefixCls,
      sideRef,
      dragBarRef,
      getIsMobile,
      getHiddenDomStyle,
      getSiderClass,
      getTrigger,
      getTriggerAttr,
      getCollapsedWidth,
      getMenuFixed,
      showClassSideBarRef,
      getMenuWidth,
      getCollapsed,
      getMenuTheme,
      onBreakpointChange,
      getMode,
      getSplitType,
      getShowTrigger,
      toggleCollapsed
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutTrigger = resolveComponent("LayoutTrigger");
  const _component_LayoutMenu = resolveComponent("LayoutMenu");
  const _component_DragBar = resolveComponent("DragBar");
  const _component_Sider = resolveComponent("Sider");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.getMenuFixed && !_ctx.getIsMobile ? withDirectives((openBlock(), createElementBlock("div", {
      key: 0,
      style: normalizeStyle(_ctx.getHiddenDomStyle)
    }, null, 4)), [
      [vShow, _ctx.showClassSideBarRef]
    ]) : createCommentVNode("", true),
    withDirectives(createVNode(_component_Sider, mergeProps({
      ref: "sideRef",
      breakpoint: "lg",
      collapsible: "",
      class: _ctx.getSiderClass,
      width: _ctx.getMenuWidth,
      collapsed: _ctx.getCollapsed,
      collapsedWidth: _ctx.getCollapsedWidth,
      theme: _ctx.getMenuTheme,
      onBreakpoint: _ctx.onBreakpointChange,
      trigger: _ctx.getTrigger
    }, _ctx.getTriggerAttr), createSlots({
      default: withCtx(() => [
        createVNode(_component_LayoutMenu, {
          theme: _ctx.getMenuTheme,
          menuMode: _ctx.getMode,
          splitType: _ctx.getSplitType
        }, null, 8, ["theme", "menuMode", "splitType"]),
        createVNode(_component_DragBar, { ref: "dragBarRef" }, null, 512)
      ]),
      _: 2
    }, [
      _ctx.getShowTrigger ? {
        name: "trigger",
        fn: withCtx(() => [
          createVNode(_component_LayoutTrigger)
        ])
      } : void 0
    ]), 1040, ["class", "width", "collapsed", "collapsedWidth", "theme", "onBreakpoint", "trigger"]), [
      [vShow, _ctx.showClassSideBarRef]
    ])
  ], 64);
}
var Sider = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var MixSider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = defineComponent({
  name: "LayoutMixSider",
  components: {
    ScrollContainer,
    AppLogo,
    SimpleMenu,
    Icon,
    LayoutTrigger,
    SimpleMenuTag
  },
  directives: {
    clickOutside: ClickOutside
  },
  setup() {
    let menuModules = ref([]);
    const activePath = ref("");
    const childrenMenus = ref([]);
    const openMenu = ref(false);
    const dragBarRef = ref(null);
    const sideRef = ref(null);
    const currentRoute = ref(null);
    const { prefixCls } = useDesign("layout-mix-sider");
    const go = useGo();
    const { t: t2 } = useI18n();
    const {
      getMenuWidth,
      getCanDrag,
      getCloseMixSidebarOnChange,
      getMenuTheme,
      getMixSideTrigger,
      getRealWidth,
      getMixSideFixed,
      mixSideHasChildren,
      setMenuSetting,
      getIsMixSidebar,
      getCollapsed
    } = useMenuSetting();
    const { title } = useGlobSetting();
    const permissionStore = usePermissionStore();
    useDragLine(sideRef, dragBarRef, true);
    const getMenuStyle = computed(() => {
      return {
        width: unref(openMenu) ? `${unref(getMenuWidth)}px` : 0,
        left: `${unref(getMixSideWidth)}px`
      };
    });
    const getIsFixed = computed(() => {
      mixSideHasChildren.value = unref(childrenMenus).length > 0;
      const isFixed = unref(getMixSideFixed) && unref(mixSideHasChildren);
      if (isFixed) {
        openMenu.value = true;
      }
      return isFixed;
    });
    const getMixSideWidth = computed(() => {
      return unref(getCollapsed) ? SIDE_BAR_MINI_WIDTH : SIDE_BAR_SHOW_TIT_MINI_WIDTH;
    });
    const getDomStyle = computed(() => {
      const fixedWidth = unref(getIsFixed) ? unref(getRealWidth) : 0;
      const width = `${unref(getMixSideWidth) + fixedWidth}px`;
      return getWrapCommonStyle(width);
    });
    const getWrapStyle = computed(() => {
      const width = `${unref(getMixSideWidth)}px`;
      return getWrapCommonStyle(width);
    });
    const getMenuEvents = computed(() => {
      return !unref(getMixSideFixed) ? {
        onMouseleave: () => {
          setActive(true);
          closeMenu();
        }
      } : {};
    });
    const getShowDragBar = computed(() => unref(getCanDrag));
    onMounted(async () => {
      menuModules.value = await getShallowMenus();
    });
    watch([() => permissionStore.getLastBuildMenuTime, () => permissionStore.getBackMenuList], async () => {
      menuModules.value = await getShallowMenus();
    }, {
      immediate: true
    });
    listenerRouteChange((route) => {
      currentRoute.value = route;
      setActive(true);
      if (unref(getCloseMixSidebarOnChange)) {
        closeMenu();
      }
    });
    function getWrapCommonStyle(width) {
      return {
        width,
        maxWidth: width,
        minWidth: width,
        flex: `0 0 ${width}`
      };
    }
    async function handleModuleClick(path, hover = false) {
      const children = await getChildrenMenus(path);
      if (unref(activePath) === path) {
        if (!hover) {
          if (!unref(openMenu)) {
            openMenu.value = true;
          } else {
            closeMenu();
          }
        } else {
          if (!unref(openMenu)) {
            openMenu.value = true;
          }
        }
        if (!unref(openMenu)) {
          setActive();
        }
      } else {
        openMenu.value = true;
        activePath.value = path;
      }
      if (!children || children.length === 0) {
        if (!hover)
          go(path);
        childrenMenus.value = [];
        closeMenu();
        return;
      }
      childrenMenus.value = children;
    }
    async function setActive(setChildren = false) {
      var _a;
      const path = (_a = currentRoute.value) == null ? void 0 : _a.path;
      if (!path)
        return;
      activePath.value = await getCurrentParentPath(path);
      if (unref(getIsMixSidebar)) {
        const activeMenu = unref(menuModules).find((item) => item.path === unref(activePath));
        const p = activeMenu == null ? void 0 : activeMenu.path;
        if (p) {
          const children = await getChildrenMenus(p);
          if (setChildren) {
            childrenMenus.value = children;
            if (unref(getMixSideFixed)) {
              openMenu.value = children.length > 0;
            }
          }
          if (children.length === 0) {
            childrenMenus.value = [];
          }
        }
      }
    }
    function handleMenuClick(path) {
      go(path);
    }
    function handleClickOutside() {
      setActive(true);
      closeMenu();
    }
    function getItemEvents(item) {
      if (unref(getMixSideTrigger) === "hover") {
        return {
          onMouseenter: () => handleModuleClick(item.path, true),
          onClick: async () => {
            const children = await getChildrenMenus(item.path);
            if (item.path && (!children || children.length === 0))
              go(item.path);
          }
        };
      }
      return {
        onClick: () => handleModuleClick(item.path)
      };
    }
    function handleFixedMenu() {
      setMenuSetting({
        mixSideFixed: !unref(getIsFixed)
      });
    }
    function closeMenu() {
      if (!unref(getIsFixed)) {
        openMenu.value = false;
      }
    }
    return {
      t: t2,
      prefixCls,
      menuModules,
      handleModuleClick,
      activePath,
      childrenMenus,
      getShowDragBar,
      handleMenuClick,
      getMenuStyle,
      handleClickOutside,
      sideRef,
      dragBarRef,
      title,
      openMenu,
      getMenuTheme,
      getItemEvents,
      getMenuEvents,
      getDomStyle,
      handleFixedMenu,
      getMixSideFixed,
      getWrapStyle,
      getCollapsed
    };
  }
});
const _hoisted_1$1 = { class: "text" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_LayoutTrigger = resolveComponent("LayoutTrigger");
  const _component_SimpleMenuTag = resolveComponent("SimpleMenuTag");
  const _component_Icon = resolveComponent("Icon");
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _component_SimpleMenu = resolveComponent("SimpleMenu");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-dom`),
      style: normalizeStyle(_ctx.getDomStyle)
    }, null, 6),
    withDirectives((openBlock(), createElementBlock("div", mergeProps({
      style: _ctx.getWrapStyle,
      class: [
        _ctx.prefixCls,
        _ctx.getMenuTheme,
        {
          open: _ctx.openMenu,
          mini: _ctx.getCollapsed
        }
      ]
    }, _ctx.getMenuEvents), [
      createVNode(_component_AppLogo, {
        showTitle: false,
        class: normalizeClass(`${_ctx.prefixCls}-logo`)
      }, null, 8, ["class"]),
      createVNode(_component_LayoutTrigger, {
        class: normalizeClass(`${_ctx.prefixCls}-trigger`)
      }, null, 8, ["class"]),
      createVNode(_component_ScrollContainer, null, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass(`${_ctx.prefixCls}-module`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuModules, (item) => {
              return openBlock(), createElementBlock("li", mergeProps({
                class: [
                  `${_ctx.prefixCls}-module__item `,
                  {
                    [`${_ctx.prefixCls}-module__item--active`]: item.path === _ctx.activePath
                  }
                ]
              }, _ctx.getItemEvents(item), {
                key: item.path
              }), [
                createVNode(_component_SimpleMenuTag, {
                  item,
                  collapseParent: "",
                  dot: ""
                }, null, 8, ["item"]),
                createVNode(_component_Icon, {
                  class: normalizeClass(`${_ctx.prefixCls}-module__icon`),
                  size: _ctx.getCollapsed ? 16 : 20,
                  icon: item.icon || item.meta && item.meta.icon
                }, null, 8, ["class", "size", "icon"]),
                createBaseVNode("p", {
                  class: normalizeClass(`${_ctx.prefixCls}-module__name`)
                }, toDisplayString(_ctx.t(item.name)), 3)
              ], 16);
            }), 128))
          ], 2)
        ]),
        _: 1
      }),
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-menu-list`),
        ref: "sideRef",
        style: normalizeStyle(_ctx.getMenuStyle)
      }, [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([
            `${_ctx.prefixCls}-menu-list__title`,
            {
              show: _ctx.openMenu
            }
          ])
        }, [
          createBaseVNode("span", _hoisted_1$1, toDisplayString(_ctx.title), 1),
          createVNode(_component_Icon, {
            size: 16,
            icon: _ctx.getMixSideFixed ? "ri:pushpin-2-fill" : "ri:pushpin-2-line",
            class: "pushpin",
            onClick: _ctx.handleFixedMenu
          }, null, 8, ["icon", "onClick"])
        ], 2), [
          [vShow, _ctx.openMenu]
        ]),
        createVNode(_component_ScrollContainer, {
          class: normalizeClass(`${_ctx.prefixCls}-menu-list__content`)
        }, {
          default: withCtx(() => [
            createVNode(_component_SimpleMenu, {
              items: _ctx.childrenMenus,
              theme: _ctx.getMenuTheme,
              mixSider: "",
              onMenuClick: _ctx.handleMenuClick
            }, null, 8, ["items", "theme", "onMenuClick"])
          ]),
          _: 1
        }, 8, ["class"]),
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}-drag-bar`),
          ref: "dragBarRef"
        }, null, 2), [
          [vShow, _ctx.getShowDragBar && _ctx.openMenu]
        ])
      ], 6)
    ], 16)), [
      [_directive_click_outside, _ctx.handleClickOutside]
    ])
  ], 64);
}
var MixSider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var index_vue_vue_type_style_index_0_lang$2 = "";
const _sfc_main$6 = defineComponent({
  name: "SiderWrapper",
  components: { Sider, Drawer, MixSider },
  setup() {
    const { prefixCls } = useDesign("layout-sider-wrapper");
    const { getIsMobile } = useAppInject();
    const { setMenuSetting, getCollapsed, getMenuWidth, getIsMixSidebar } = useMenuSetting();
    function handleClose() {
      setMenuSetting({
        collapsed: true
      });
    }
    return { prefixCls, getIsMobile, getCollapsed, handleClose, getMenuWidth, getIsMixSidebar };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sider = resolveComponent("Sider");
  const _component_Drawer = resolveComponent("Drawer");
  const _component_MixSider = resolveComponent("MixSider");
  return _ctx.getIsMobile ? (openBlock(), createBlock(_component_Drawer, {
    key: 0,
    placement: "left",
    class: normalizeClass(_ctx.prefixCls),
    width: _ctx.getMenuWidth,
    getContainer: null,
    visible: !_ctx.getCollapsed,
    onClose: _ctx.handleClose
  }, {
    default: withCtx(() => [
      createVNode(_component_Sider)
    ]),
    _: 1
  }, 8, ["class", "width", "visible", "onClose"])) : _ctx.getIsMixSidebar ? (openBlock(), createBlock(_component_MixSider, { key: 1 })) : (openBlock(), createBlock(_component_Sider, { key: 2 }));
}
var LayoutSideBar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var MenuEventEnum = /* @__PURE__ */ ((MenuEventEnum2) => {
  MenuEventEnum2[MenuEventEnum2["REFRESH_PAGE"] = 0] = "REFRESH_PAGE";
  MenuEventEnum2[MenuEventEnum2["CLOSE_CURRENT"] = 1] = "CLOSE_CURRENT";
  MenuEventEnum2[MenuEventEnum2["CLOSE_LEFT"] = 2] = "CLOSE_LEFT";
  MenuEventEnum2[MenuEventEnum2["CLOSE_RIGHT"] = 3] = "CLOSE_RIGHT";
  MenuEventEnum2[MenuEventEnum2["CLOSE_OTHER"] = 4] = "CLOSE_OTHER";
  MenuEventEnum2[MenuEventEnum2["CLOSE_ALL"] = 5] = "CLOSE_ALL";
  MenuEventEnum2[MenuEventEnum2["SCALE"] = 6] = "SCALE";
  return MenuEventEnum2;
})(MenuEventEnum || {});
function useTabDropdown(tabContentProps, getIsTabs) {
  const state = reactive({
    current: null,
    currentIndex: 0
  });
  const { t: t2 } = useI18n();
  const tabStore = useMultipleTabStore();
  const { currentRoute } = useRouter();
  const { refreshPage, closeAll, close, closeLeft, closeOther, closeRight } = useTabs();
  const getTargetTab = computed(() => {
    return unref(getIsTabs) ? tabContentProps.tabItem : unref(currentRoute);
  });
  const getDropMenuList = computed(() => {
    if (!unref(getTargetTab)) {
      return;
    }
    const { meta } = unref(getTargetTab);
    const { path } = unref(currentRoute);
    const curItem = state.current;
    const isCurItem = curItem ? curItem.path === path : false;
    const index2 = state.currentIndex;
    const refreshDisabled = !isCurItem;
    const closeLeftDisabled = index2 === 0 || !isCurItem;
    const disabled = tabStore.getTabList.length === 1;
    const closeRightDisabled = !isCurItem || index2 === tabStore.getTabList.length - 1 && tabStore.getLastDragEndIndex >= 0;
    const dropMenuList = [
      {
        icon: "ion:reload-sharp",
        event: MenuEventEnum.REFRESH_PAGE,
        text: t2("layout.multipleTab.reload"),
        disabled: refreshDisabled
      },
      {
        icon: "clarity:close-line",
        event: MenuEventEnum.CLOSE_CURRENT,
        text: t2("layout.multipleTab.close"),
        disabled: !!(meta == null ? void 0 : meta.affix) || disabled,
        divider: true
      },
      {
        icon: "line-md:arrow-close-left",
        event: MenuEventEnum.CLOSE_LEFT,
        text: t2("layout.multipleTab.closeLeft"),
        disabled: closeLeftDisabled,
        divider: false
      },
      {
        icon: "line-md:arrow-close-right",
        event: MenuEventEnum.CLOSE_RIGHT,
        text: t2("layout.multipleTab.closeRight"),
        disabled: closeRightDisabled,
        divider: true
      },
      {
        icon: "dashicons:align-center",
        event: MenuEventEnum.CLOSE_OTHER,
        text: t2("layout.multipleTab.closeOther"),
        disabled: disabled || !isCurItem
      },
      {
        icon: "clarity:minus-line",
        event: MenuEventEnum.CLOSE_ALL,
        text: t2("layout.multipleTab.closeAll"),
        disabled
      }
    ];
    return dropMenuList;
  });
  function handleContextMenu(tabItem) {
    return (e) => {
      if (!tabItem) {
        return;
      }
      e == null ? void 0 : e.preventDefault();
      const index2 = tabStore.getTabList.findIndex((tab) => tab.path === tabItem.path);
      state.current = tabItem;
      state.currentIndex = index2;
    };
  }
  function handleMenuEvent(menu) {
    const { event } = menu;
    switch (event) {
      case MenuEventEnum.REFRESH_PAGE:
        refreshPage();
        break;
      case MenuEventEnum.CLOSE_CURRENT:
        close(tabContentProps.tabItem);
        break;
      case MenuEventEnum.CLOSE_LEFT:
        closeLeft();
        break;
      case MenuEventEnum.CLOSE_RIGHT:
        closeRight();
        break;
      case MenuEventEnum.CLOSE_OTHER:
        closeOther();
        break;
      case MenuEventEnum.CLOSE_ALL:
        closeAll();
        break;
    }
  }
  return { getDropMenuList, handleMenuEvent, handleContextMenu };
}
const _sfc_main$5 = defineComponent({
  name: "TabContent",
  components: { Dropdown, Icon },
  props: {
    tabItem: {
      type: Object,
      default: null
    },
    isExtra: Boolean
  },
  setup(props) {
    const { prefixCls } = useDesign("multiple-tabs-content");
    const { t: t2 } = useI18n();
    const getTitle = computed(() => {
      const { tabItem: { meta } = {} } = props;
      return meta && t2(meta.title);
    });
    const getIsTabs = computed(() => !props.isExtra);
    const getTrigger = computed(() => unref(getIsTabs) ? ["contextmenu"] : ["click"]);
    const { getDropMenuList, handleMenuEvent, handleContextMenu } = useTabDropdown(props, getIsTabs);
    function handleContext(e) {
      props.tabItem && handleContextMenu(props.tabItem)(e);
    }
    return {
      prefixCls,
      getDropMenuList,
      handleMenuEvent,
      handleContext,
      getTrigger,
      getIsTabs,
      getTitle
    };
  }
});
const _hoisted_1 = { class: "ml-1" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createBlock(_component_Dropdown, {
    dropMenuList: _ctx.getDropMenuList,
    trigger: _ctx.getTrigger,
    onMenuEvent: _ctx.handleMenuEvent
  }, {
    default: withCtx(() => [
      _ctx.getIsTabs ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}__info`),
        onContextmenu: _cache[0] || (_cache[0] = (...args) => _ctx.handleContext && _ctx.handleContext(...args))
      }, [
        createBaseVNode("span", _hoisted_1, toDisplayString(_ctx.getTitle), 1)
      ], 34)) : (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}__extra-quick`),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleContext && _ctx.handleContext(...args))
      }, [
        createVNode(_component_Icon, { icon: "ion:chevron-down" })
      ], 2))
    ]),
    _: 1
  }, 8, ["dropMenuList", "trigger", "onMenuEvent"]);
}
var TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  name: "FoldButton",
  components: { Icon },
  setup() {
    const { prefixCls } = useDesign("multiple-tabs-content");
    const { getShowMenu, setMenuSetting } = useMenuSetting();
    const { getShowHeader, setHeaderSetting } = useHeaderSetting();
    const getIsUnFold = computed(() => !unref(getShowMenu) && !unref(getShowHeader));
    const getIcon = computed(() => unref(getIsUnFold) ? "codicon:screen-normal" : "codicon:screen-full");
    function handleFold() {
      const isUnFold = unref(getIsUnFold);
      setMenuSetting({
        show: isUnFold,
        hidden: !isUnFold
      });
      setHeaderSetting({ show: isUnFold });
      triggerWindowResize();
    }
    return { prefixCls, getIcon, handleFold };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`${_ctx.prefixCls}__extra-fold`),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleFold && _ctx.handleFold(...args))
  }, [
    createVNode(_component_Icon, { icon: _ctx.getIcon }, null, 8, ["icon"])
  ], 2);
}
var FoldButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  name: "TabRedo",
  components: { RedoOutlined },
  setup() {
    const loading = ref(false);
    const { prefixCls } = useDesign("multiple-tabs-content");
    const { refreshPage } = useTabs();
    async function handleRedo() {
      loading.value = true;
      await refreshPage();
      setTimeout(() => {
        loading.value = false;
      }, 1200);
    }
    return { prefixCls, handleRedo, loading };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RedoOutlined = resolveComponent("RedoOutlined");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`${_ctx.prefixCls}__extra-redo`),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleRedo && _ctx.handleRedo(...args))
  }, [
    createVNode(_component_RedoOutlined, { spin: _ctx.loading }, null, 8, ["spin"])
  ], 2);
}
var TabRedo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function useSortable(el, options) {
  function initSortable() {
    nextTick(async () => {
      if (!el)
        return;
      const Sortable = (await __vitePreload(() => import("./sortable.esm.6bfbf233.js"), true ? [] : void 0)).default;
      Sortable.create(unref(el), __spreadValues({
        animation: 500,
        delay: 400,
        delayOnTouchOnly: true
      }, options));
    });
  }
  return { initSortable };
}
function initAffixTabs() {
  const affixList = ref([]);
  const tabStore = useMultipleTabStore();
  const router = useRouter();
  function filterAffixTabs(routes) {
    const tabs = [];
    routes && routes.forEach((route) => {
      if (route.meta && route.meta.affix) {
        tabs.push(toRaw(route));
      }
    });
    return tabs;
  }
  function addAffixTabs() {
    const affixTabs = filterAffixTabs(router.getRoutes());
    affixList.value = affixTabs;
    for (const tab of affixTabs) {
      tabStore.addTab({
        meta: tab.meta,
        name: tab.name,
        path: tab.path
      });
    }
  }
  let isAddAffix = false;
  if (!isAddAffix) {
    addAffixTabs();
    isAddAffix = true;
  }
  return affixList.value.map((item) => {
    var _a;
    return (_a = item.meta) == null ? void 0 : _a.title;
  }).filter(Boolean);
}
function useTabsDrag(affixTextList) {
  const tabStore = useMultipleTabStore();
  const { multiTabsSetting } = setting;
  const { prefixCls } = useDesign("multiple-tabs");
  nextTick(() => {
    var _a;
    if (!multiTabsSetting.canDrag)
      return;
    const el = (_a = document.querySelectorAll(`.${prefixCls} .ant-tabs-nav-wrap > div`)) == null ? void 0 : _a[0];
    const { initSortable } = useSortable(el, {
      filter: (e) => {
        var _a2;
        const text = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.innerText;
        if (!text)
          return false;
        return affixTextList.includes(text);
      },
      onEnd: (evt) => {
        const { oldIndex, newIndex } = evt;
        if (isNullAndUnDef(oldIndex) || isNullAndUnDef(newIndex) || oldIndex === newIndex) {
          return;
        }
        tabStore.sortTabs(oldIndex, newIndex);
      }
    });
    initSortable();
  });
}
var index_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$2 = defineComponent({
  name: "MultipleTabs",
  components: {
    TabRedo,
    FoldButton,
    Tabs,
    TabPane: Tabs.TabPane,
    TabContent
  },
  setup() {
    const affixTextList = initAffixTabs();
    const activeKeyRef = ref("");
    useTabsDrag(affixTextList);
    const tabStore = useMultipleTabStore();
    const userStore = useUserStore();
    const router = useRouter();
    const { prefixCls } = useDesign("multiple-tabs");
    const go = useGo();
    const { getShowQuick, getShowRedo, getShowFold } = useMultipleTabSetting();
    const getTabsState = computed(() => {
      return tabStore.getTabList.filter((item) => {
        var _a;
        return !((_a = item.meta) == null ? void 0 : _a.hideTab);
      });
    });
    const unClose = computed(() => unref(getTabsState).length === 1);
    const getWrapClass = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}--hide-close`]: unref(unClose)
        }
      ];
    });
    listenerRouteChange((route) => {
      const { name } = route;
      if (name === REDIRECT_NAME || !route || !userStore.getToken) {
        return;
      }
      const { path, fullPath, meta = {} } = route;
      const { currentActiveMenu, hideTab } = meta;
      const isHide = !hideTab ? null : currentActiveMenu;
      const p = isHide || fullPath || path;
      if (activeKeyRef.value !== p) {
        activeKeyRef.value = p;
      }
      if (isHide) {
        const findParentRoute = router.getRoutes().find((item) => item.path === currentActiveMenu);
        findParentRoute && tabStore.addTab(findParentRoute);
      } else {
        tabStore.addTab(unref(route));
      }
    });
    function handleChange(activeKey) {
      activeKeyRef.value = activeKey;
      go(activeKey, false);
    }
    function handleEdit(targetKey) {
      if (unref(unClose)) {
        return;
      }
      tabStore.closeTabByKey(targetKey, router);
    }
    return {
      getWrapClass,
      handleEdit,
      handleChange,
      activeKeyRef,
      getTabsState,
      getShowQuick,
      getShowRedo,
      getShowFold
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TabContent = resolveComponent("TabContent");
  const _component_TabPane = resolveComponent("TabPane");
  const _component_TabRedo = resolveComponent("TabRedo");
  const _component_FoldButton = resolveComponent("FoldButton");
  const _component_Tabs = resolveComponent("Tabs");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.getWrapClass)
  }, [
    createVNode(_component_Tabs, {
      type: "editable-card",
      size: "small",
      animated: false,
      hideAdd: true,
      tabBarGutter: 3,
      activeKey: _ctx.activeKeyRef,
      onChange: _ctx.handleChange,
      onEdit: _ctx.handleEdit
    }, createSlots({
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getTabsState, (item) => {
          return openBlock(), createBlock(_component_TabPane, {
            key: item.query ? item.fullPath : item.path,
            closable: !(item && item.meta && item.meta.affix)
          }, {
            tab: withCtx(() => [
              createVNode(_component_TabContent, { tabItem: item }, null, 8, ["tabItem"])
            ]),
            _: 2
          }, 1032, ["closable"]);
        }), 128))
      ]),
      _: 2
    }, [
      _ctx.getShowRedo || _ctx.getShowQuick ? {
        name: "rightExtra",
        fn: withCtx(() => [
          _ctx.getShowRedo ? (openBlock(), createBlock(_component_TabRedo, { key: 0 })) : createCommentVNode("", true),
          _ctx.getShowQuick ? (openBlock(), createBlock(_component_TabContent, {
            key: 1,
            isExtra: "",
            tabItem: _ctx.$route
          }, null, 8, ["tabItem"])) : createCommentVNode("", true),
          _ctx.getShowFold ? (openBlock(), createBlock(_component_FoldButton, { key: 2 })) : createCommentVNode("", true)
        ])
      } : void 0
    ]), 1032, ["activeKey", "onChange", "onEdit"])
  ], 2);
}
var MultipleTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var MultipleHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const HEADER_HEIGHT = 48;
const TABS_HEIGHT = 32;
const _sfc_main$1 = defineComponent({
  name: "LayoutMultipleHeader",
  components: { LayoutHeader, MultipleTabs },
  setup() {
    const { setHeaderHeight } = useLayoutHeight();
    const { prefixCls } = useDesign("layout-multiple-header");
    const { getCalcContentWidth, getSplit } = useMenuSetting();
    const { getIsMobile } = useAppInject();
    const {
      getFixed,
      getShowInsetHeaderRef,
      getShowFullHeaderRef,
      getHeaderTheme,
      getShowHeader
    } = useHeaderSetting();
    const { getFullContent } = useFullContent();
    const { getShowMultipleTab } = useMultipleTabSetting();
    const getShowTabs = computed(() => {
      return unref(getShowMultipleTab) && !unref(getFullContent);
    });
    const getIsShowPlaceholderDom = computed(() => {
      return unref(getFixed) || unref(getShowFullHeaderRef);
    });
    const getWrapStyle = computed(() => {
      const style = {};
      if (unref(getFixed)) {
        style.width = unref(getIsMobile) ? "100%" : unref(getCalcContentWidth);
      }
      if (unref(getShowFullHeaderRef)) {
        style.top = `${HEADER_HEIGHT}px`;
      }
      return style;
    });
    const getIsFixed = computed(() => {
      return unref(getFixed) || unref(getShowFullHeaderRef);
    });
    const getPlaceholderDomStyle = computed(() => {
      let height = 0;
      if ((unref(getShowFullHeaderRef) || !unref(getSplit)) && unref(getShowHeader) && !unref(getFullContent)) {
        height += HEADER_HEIGHT;
      }
      if (unref(getShowMultipleTab) && !unref(getFullContent)) {
        height += TABS_HEIGHT;
      }
      setHeaderHeight(height);
      return {
        height: `${height}px`
      };
    });
    const getClass = computed(() => {
      return [
        prefixCls,
        `${prefixCls}--${unref(getHeaderTheme)}`,
        { [`${prefixCls}--fixed`]: unref(getIsFixed) }
      ];
    });
    return {
      getClass,
      prefixCls,
      getPlaceholderDomStyle,
      getIsFixed,
      getWrapStyle,
      getIsShowPlaceholderDom,
      getShowTabs,
      getShowInsetHeaderRef
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutHeader = resolveComponent("LayoutHeader");
  const _component_MultipleTabs = resolveComponent("MultipleTabs");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.getIsShowPlaceholderDom ? (openBlock(), createElementBlock("div", {
      key: 0,
      style: normalizeStyle(_ctx.getPlaceholderDomStyle)
    }, null, 4)) : createCommentVNode("", true),
    createBaseVNode("div", {
      style: normalizeStyle(_ctx.getWrapStyle),
      class: normalizeClass(_ctx.getClass)
    }, [
      _ctx.getShowInsetHeaderRef ? (openBlock(), createBlock(_component_LayoutHeader, { key: 0 })) : createCommentVNode("", true),
      _ctx.getShowTabs ? (openBlock(), createBlock(_component_MultipleTabs, { key: 1 })) : createCommentVNode("", true)
    ], 6)
  ], 64);
}
var LayoutMultipleHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-16f90d9d"]]);
function useLockPage() {
  const { getLockTime } = useRootSetting();
  const lockStore = useLockStore();
  const userStore = useUserStore();
  const appStore = useAppStore();
  let timeId;
  function clear() {
    window.clearTimeout(timeId);
  }
  function resetCalcLockTimeout() {
    if (!userStore.getToken) {
      clear();
      return;
    }
    const lockTime = appStore.getProjectConfig.lockTime;
    if (!lockTime || lockTime < 1) {
      clear();
      return;
    }
    clear();
    timeId = setTimeout(() => {
      lockPage();
    }, lockTime * 60 * 1e3);
  }
  function lockPage() {
    lockStore.setLockInfo({
      isLock: true,
      pwd: void 0
    });
  }
  watchEffect((onClean) => {
    if (userStore.getToken) {
      resetCalcLockTimeout();
    } else {
      clear();
    }
    onClean(() => {
      clear();
    });
  });
  onUnmounted(() => {
    clear();
  });
  const keyupFn = useThrottleFn(resetCalcLockTimeout, 2e3);
  return computed(() => {
    if (unref(getLockTime)) {
      return { onKeyup: keyupFn, onMousemove: keyupFn };
    } else {
      clear();
      return {};
    }
  });
}
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "DefaultLayout",
  components: {
    LayoutFeatures: createAsyncComponent(() => __vitePreload(() => import("./index.aa3412a5.js"), true ? ["assets/index.aa3412a5.js","assets/index.88190478.css","assets/index.143500d6.css","assets/index.2bd69081.css","assets/index.b770eec7.css","assets/index.20f4923c.css","assets/index.7850813b.css","assets/index.8c4bdb81.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/SessionTimeoutLogin.306a32e3.js","assets/SessionTimeoutLogin.d8869f2b.css","assets/Login.a4527ede.js","assets/Login.74b7fe45.css","assets/LoginForm.346afdc8.js","assets/LoginFormTitle.8890e337.js","assets/ForgetPasswordForm.47d3c07c.js","assets/index.d009fa9e.js","assets/index.d8b0d0fd.css","assets/RegisterForm.552a09e8.js","assets/index.495b4e80.js","assets/index.5cc747aa.css","assets/MobileForm.8dc5dd79.js","assets/QrCodeForm.3f42f250.js","assets/index.061a8a58.js","assets/download.3d571b80.js","assets/base64Conver.08b9f4ec.js","assets/index.a3f7158a.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.814f6021.js","assets/lock.4da61d6f.js"] : void 0)),
    LayoutFooter: createAsyncComponent(() => __vitePreload(() => import("./index.47fb26bf.js"), true ? ["assets/index.47fb26bf.js","assets/index.ff4ff955.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/siteSetting.c485f07c.js","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/useContentViewHeight.814f6021.js","assets/useWindowSizeFn.07387e97.js"] : void 0)),
    LayoutHeader,
    LayoutContent,
    LayoutSideBar,
    LayoutMultipleHeader,
    Layout
  },
  setup() {
    const { prefixCls } = useDesign("default-layout");
    const { getIsMobile } = useAppInject();
    const { getShowFullHeaderRef } = useHeaderSetting();
    const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();
    const lockEvents = useLockPage();
    const layoutClass = computed(() => {
      let cls = ["ant-layout"];
      if (unref(getIsMixSidebar) || unref(getShowMenu)) {
        cls.push("ant-layout-has-sider");
      }
      return cls;
    });
    return {
      getShowFullHeaderRef,
      getShowSidebar,
      prefixCls,
      getIsMobile,
      getIsMixSidebar,
      layoutClass,
      lockEvents
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutFeatures = resolveComponent("LayoutFeatures");
  const _component_LayoutHeader = resolveComponent("LayoutHeader");
  const _component_LayoutSideBar = resolveComponent("LayoutSideBar");
  const _component_LayoutMultipleHeader = resolveComponent("LayoutMultipleHeader");
  const _component_LayoutContent = resolveComponent("LayoutContent");
  const _component_LayoutFooter = resolveComponent("LayoutFooter");
  const _component_Layout = resolveComponent("Layout");
  return openBlock(), createBlock(_component_Layout, mergeProps({ class: _ctx.prefixCls }, _ctx.lockEvents), {
    default: withCtx(() => [
      createVNode(_component_LayoutFeatures),
      _ctx.getShowFullHeaderRef ? (openBlock(), createBlock(_component_LayoutHeader, {
        key: 0,
        fixed: ""
      })) : createCommentVNode("", true),
      createVNode(_component_Layout, {
        class: normalizeClass([_ctx.layoutClass])
      }, {
        default: withCtx(() => [
          _ctx.getShowSidebar || _ctx.getIsMobile ? (openBlock(), createBlock(_component_LayoutSideBar, { key: 0 })) : createCommentVNode("", true),
          createVNode(_component_Layout, {
            class: normalizeClass(`${_ctx.prefixCls}-main`)
          }, {
            default: withCtx(() => [
              createVNode(_component_LayoutMultipleHeader),
              createVNode(_component_LayoutContent),
              createVNode(_component_LayoutFooter)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 16, ["class"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
export { useMultipleTabSetting as a, createAsyncComponent as c, index$1 as i, useHeaderSetting as u };
