var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { I as Icon } from "./index.a3d18deb.js";
import { d as defineComponent, Q as ref, O as computed, a6 as onMounted, a7 as nextTick, an as onUnmounted, b as unref, f as createVNode, aE as Menu, ag as Fragment, b6 as Divider, bS as isVNode, aT as render, am as getCurrentInstance } from "./vendor.faf2de98.js";
/* empty css                 */import { az as isClient } from "./index.6c404263.js";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const prefixCls = "context-menu";
const props = {
  width: {
    type: Number,
    default: 156
  },
  customEvent: {
    type: Object,
    default: null
  },
  styles: {
    type: Object
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  axis: {
    type: Object,
    default() {
      return {
        x: 0,
        y: 0
      };
    }
  },
  items: {
    type: Array,
    default() {
      return [];
    }
  }
};
const ItemContent = (props2) => {
  const {
    item
  } = props2;
  return createVNode("span", {
    "style": "display: inline-block; width: 100%; ",
    "class": "px-4",
    "onClick": props2.handler.bind(null, item)
  }, [props2.showIcon && item.icon && createVNode(Icon, {
    "class": "mr-2",
    "icon": item.icon
  }, null), createVNode("span", null, [item.label])]);
};
var _sfc_main = defineComponent({
  name: "ContextMenu",
  props,
  setup(props2) {
    const wrapRef = ref(null);
    const showRef = ref(false);
    const getStyle = computed(() => {
      const {
        axis,
        items,
        styles,
        width
      } = props2;
      const {
        x,
        y
      } = axis || {
        x: 0,
        y: 0
      };
      const menuHeight = (items || []).length * 40;
      const menuWidth = width;
      const body = document.body;
      const left = body.clientWidth < x + menuWidth ? x - menuWidth : x;
      const top = body.clientHeight < y + menuHeight ? y - menuHeight : y;
      return __spreadProps(__spreadValues({}, styles), {
        position: "absolute",
        width: `${width}px`,
        left: `${left + 1}px`,
        top: `${top + 1}px`
      });
    });
    onMounted(() => {
      nextTick(() => showRef.value = true);
    });
    onUnmounted(() => {
      const el = unref(wrapRef);
      el && document.body.removeChild(el);
    });
    function handleAction(item, e) {
      const {
        handler,
        disabled
      } = item;
      if (disabled) {
        return;
      }
      showRef.value = false;
      e == null ? void 0 : e.stopPropagation();
      e == null ? void 0 : e.preventDefault();
      handler == null ? void 0 : handler();
    }
    function renderMenuItem(items) {
      return items.map((item) => {
        const {
          disabled,
          label,
          children,
          divider = false
        } = item;
        const contentProps = {
          item,
          handler: handleAction,
          showIcon: props2.showIcon
        };
        if (!children || children.length === 0) {
          return createVNode(Fragment, null, [createVNode(Menu.Item, {
            "disabled": disabled,
            "class": `${prefixCls}__item`,
            "key": label
          }, {
            default: () => [createVNode(ItemContent, contentProps, null)]
          }), divider ? createVNode(Divider, {
            "key": `d-${label}`
          }, null) : null]);
        }
        if (!unref(showRef))
          return null;
        return createVNode(Menu.SubMenu, {
          "key": label,
          "disabled": disabled,
          "popupClassName": `${prefixCls}__popup`
        }, {
          title: () => createVNode(ItemContent, contentProps, null),
          default: () => renderMenuItem(children)
        });
      });
    }
    return () => {
      let _slot;
      if (!unref(showRef)) {
        return null;
      }
      const {
        items
      } = props2;
      return createVNode("div", {
        "class": prefixCls
      }, [createVNode(Menu, {
        "inlineIndent": 12,
        "mode": "vertical",
        "ref": wrapRef,
        "style": unref(getStyle)
      }, _isSlot(_slot = renderMenuItem(items)) ? _slot : {
        default: () => [_slot]
      })]);
    };
  }
});
var ContextMenu_vue_vue_type_style_index_0_lang = "";
const menuManager = {
  domList: [],
  resolve: () => {
  }
};
const createContextMenu = function(options) {
  const { event } = options || {};
  event && (event == null ? void 0 : event.preventDefault());
  if (!isClient) {
    return;
  }
  return new Promise((resolve) => {
    const body = document.body;
    const container = document.createElement("div");
    const propsData = {};
    if (options.styles) {
      propsData.styles = options.styles;
    }
    if (options.items) {
      propsData.items = options.items;
    }
    if (options.event) {
      propsData.customEvent = event;
      propsData.axis = { x: event.clientX, y: event.clientY };
    }
    const vm = createVNode(_sfc_main, propsData);
    render(vm, container);
    const handleClick = function() {
      menuManager.resolve("");
    };
    menuManager.domList.push(container);
    const remove = function() {
      menuManager.domList.forEach((dom) => {
        try {
          dom && body.removeChild(dom);
        } catch (error) {
        }
      });
      body.removeEventListener("click", handleClick);
      body.removeEventListener("scroll", handleClick);
    };
    menuManager.resolve = function(arg) {
      remove();
      resolve(arg);
    };
    remove();
    body.appendChild(container);
    body.addEventListener("click", handleClick);
    body.addEventListener("scroll", handleClick);
  });
};
const destroyContextMenu = function() {
  if (menuManager) {
    menuManager.resolve("");
    menuManager.domList = [];
  }
};
function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  return [createContextMenu, destroyContextMenu];
}
export { useContextMenu as u };
