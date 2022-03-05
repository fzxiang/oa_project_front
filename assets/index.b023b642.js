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
import { a as useI18n, B as withInstall } from "./index.ea7eac1d.js";
import { d as defineComponent, O as computed, b as unref, o as openBlock, c as createBlock, e as withCtx, aa as mergeProps, aP as Button$1, ai as createCommentVNode, ac as renderSlot, aG as normalizeProps, aQ as guardReactiveProps, k as omit, N as h, aI as Popconfirm } from "./vendor.faf2de98.js";
import { I as Icon, e as extendSlots } from "./index.54e5dd4b.js";
import { u as useAttrs } from "./useAttrs.d4bdb35c.js";
const buttonProps = {
  color: { type: String, validator: (v) => ["error", "warning", "success", ""].includes(v) },
  loading: { type: Boolean },
  disabled: { type: Boolean },
  preIcon: { type: String },
  postIcon: { type: String },
  iconSize: { type: Number, default: 14 },
  onClick: { type: Function, default: null }
};
const __default__ = defineComponent({
  name: "AButton",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: buttonProps,
  setup(__props) {
    const props2 = __props;
    const attrs = useAttrs({ excludeDefaultKeys: false });
    const getButtonClass = computed(() => {
      const { color, disabled } = props2;
      return [
        {
          [`ant-btn-${color}`]: !!color,
          [`is-disabled`]: disabled
        }
      ];
    });
    const getBindValue = computed(() => __spreadValues(__spreadValues({}, unref(attrs)), props2));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button$1), mergeProps(unref(getBindValue), {
        class: unref(getButtonClass),
        onClick: _ctx.onClick
      }), {
        default: withCtx((data) => [
          _ctx.preIcon ? (openBlock(), createBlock(Icon, {
            key: 0,
            icon: _ctx.preIcon,
            size: _ctx.iconSize
          }, null, 8, ["icon", "size"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(data || {}))),
          _ctx.postIcon ? (openBlock(), createBlock(Icon, {
            key: 1,
            icon: _ctx.postIcon,
            size: _ctx.iconSize
          }, null, 8, ["icon", "size"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class", "onClick"]);
    };
  }
}));
const props = {
  enable: {
    type: Boolean,
    default: true
  }
};
const _sfc_main = defineComponent({
  name: "PopButton",
  inheritAttrs: false,
  props,
  setup(props2, { slots }) {
    const { t } = useI18n();
    const attrs = useAttrs();
    const getBindValues = computed(() => {
      return Object.assign({
        okText: t("common.okText"),
        cancelText: t("common.cancelText")
      }, __spreadValues(__spreadValues({}, props2), unref(attrs)));
    });
    return () => {
      const bindValues = omit(unref(getBindValues), "icon");
      const btnBind = omit(bindValues, "title");
      if (btnBind.disabled)
        btnBind.color = "";
      const Button2 = h(_sfc_main$1, btnBind, extendSlots(slots));
      if (!props2.enable) {
        return Button2;
      }
      return h(Popconfirm, bindValues, { default: () => Button2 });
    };
  }
});
const Button = withInstall(_sfc_main$1);
const PopConfirmButton = withInstall(_sfc_main);
export { Button as B, PopConfirmButton as P };
