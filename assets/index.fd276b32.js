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
import { y as isFunction, B as withInstall } from "./index.20a8e034.js";
import { d as defineComponent, Q as ref, O as computed, b as unref, f as createVNode, c8 as Descriptions, bS as isVNode, aa as mergeProps, bA as get } from "./vendor.faf2de98.js";
/* empty css                  */import { d as useDesign, y as getSlot, H as CollapseContainer } from "./index.a2736d3e.js";
import { u as useAttrs } from "./useAttrs.d4bdb35c.js";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const props = {
  useCollapse: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    validator: (v) => ["small", "default", "middle", void 0].includes(v),
    default: "small"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  column: {
    type: [Number, Object],
    default: () => {
      return {
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1
      };
    }
  },
  collapseOptions: {
    type: Object,
    default: null
  },
  schema: {
    type: Array,
    default: () => []
  },
  data: {
    type: Object
  }
};
var _sfc_main = defineComponent({
  name: "Description",
  props,
  emits: ["register"],
  setup(props2, {
    slots,
    emit
  }) {
    const propsRef = ref(null);
    const {
      prefixCls
    } = useDesign("description");
    const attrs = useAttrs();
    const getMergeProps = computed(() => {
      return __spreadValues(__spreadValues({}, props2), unref(propsRef));
    });
    const getProps = computed(() => {
      const opt = __spreadProps(__spreadValues({}, unref(getMergeProps)), {
        title: void 0
      });
      return opt;
    });
    const useWrapper = computed(() => !!unref(getMergeProps).title);
    const getCollapseOptions = computed(() => {
      return __spreadValues({
        canExpand: false
      }, unref(getProps).collapseOptions);
    });
    const getDescriptionsProps = computed(() => {
      return __spreadValues(__spreadValues({}, unref(attrs)), unref(getProps));
    });
    function setDescProps(descProps) {
      propsRef.value = __spreadValues(__spreadValues({}, unref(propsRef)), descProps);
    }
    function renderLabel({
      label,
      labelMinWidth,
      labelStyle
    }) {
      if (!labelStyle && !labelMinWidth) {
        return label;
      }
      const labelStyles = __spreadProps(__spreadValues({}, labelStyle), {
        minWidth: `${labelMinWidth}px `
      });
      return createVNode("div", {
        "style": labelStyles
      }, [label]);
    }
    function renderItem() {
      const {
        schema,
        data
      } = unref(getProps);
      return unref(schema).map((item) => {
        const {
          render,
          field,
          span,
          show,
          contentMinWidth
        } = item;
        if (show && isFunction(show) && !show(data)) {
          return null;
        }
        const getContent = () => {
          var _a;
          const _data = (_a = unref(getProps)) == null ? void 0 : _a.data;
          if (!_data) {
            return null;
          }
          const getField = get(_data, field);
          return isFunction(render) ? render(getField, _data) : getField != null ? getField : "";
        };
        const width = contentMinWidth;
        return createVNode(Descriptions.Item, {
          "label": renderLabel(item),
          "key": field,
          "span": span
        }, {
          default: () => {
            if (!contentMinWidth) {
              return getContent();
            }
            const style = {
              minWidth: `${width}px`
            };
            return createVNode("div", {
              "style": style
            }, [getContent()]);
          }
        });
      }).filter((item) => !!item);
    }
    const renderDesc = () => {
      let _slot;
      return createVNode(Descriptions, mergeProps({
        "class": `${prefixCls}`
      }, unref(getDescriptionsProps)), _isSlot(_slot = renderItem()) ? _slot : {
        default: () => [_slot]
      });
    };
    const renderContainer = () => {
      const content = props2.useCollapse ? renderDesc() : createVNode("div", null, [renderDesc()]);
      if (!props2.useCollapse) {
        return content;
      }
      const {
        canExpand,
        helpMessage
      } = unref(getCollapseOptions);
      const {
        title
      } = unref(getMergeProps);
      return createVNode(CollapseContainer, {
        "title": title,
        "canExpan": canExpand,
        "helpMessage": helpMessage
      }, {
        default: () => content,
        action: () => getSlot(slots, "action")
      });
    };
    const methods = {
      setDescProps
    };
    emit("register", methods);
    return () => unref(useWrapper) ? renderContainer() : renderDesc();
  }
});
const Description = withInstall(_sfc_main);
export { Description as D };
