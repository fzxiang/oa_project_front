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
import { a as PageWrapper } from "./index.55f54600.js";
import { a as useI18n, aE as formatToDateTime, al as formatToDate, aq as dateUtil, _ as _export_sfc, aj as isNumber, x as isString, ac as isObject, B as withInstall } from "./index.26d4b9cf.js";
import { p as propTypes, H as CollapseContainer } from "./index.518f457b.js";
import { d as defineComponent, Q as ref, cE as useIntervalFn, w as watch, o as openBlock, R as createElementBlock, W as toDisplayString, $ as reactive, a2 as toRefs, r as resolveComponent, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.80c2cc86.js";
import "./useRootSetting.5dedaee7.js";
const ONE_SECONDS = 1e3;
const ONE_MINUTES = ONE_SECONDS * 60;
const ONE_HOUR = ONE_MINUTES * 60;
const ONE_DAY = ONE_HOUR * 24;
const _sfc_main$1 = defineComponent({
  name: "Time",
  props: {
    value: propTypes.oneOfType([propTypes.number, propTypes.instanceOf(Date), propTypes.string]).isRequired,
    step: propTypes.number.def(60),
    mode: propTypes.oneOf(["date", "datetime", "relative"]).def("relative")
  },
  setup(props) {
    const date = ref("");
    const { t } = useI18n();
    useIntervalFn(setTime, props.step * ONE_SECONDS);
    watch(() => props.value, () => {
      setTime();
    }, { immediate: true });
    function getTime() {
      const { value } = props;
      let time2 = 0;
      if (isNumber(value)) {
        const timestamp = value.toString().length > 10 ? value : value * 1e3;
        time2 = new Date(timestamp).getTime();
      } else if (isString(value)) {
        time2 = new Date(value).getTime();
      } else if (isObject(value)) {
        time2 = value.getTime();
      }
      return time2;
    }
    function setTime() {
      const { mode, value } = props;
      const time2 = getTime();
      if (mode === "relative") {
        date.value = getRelativeTime(time2);
      } else {
        if (mode === "datetime") {
          date.value = formatToDateTime(value);
        } else if (mode === "date") {
          date.value = formatToDate(value);
        }
      }
    }
    function getRelativeTime(timeStamp) {
      const currentTime = new Date().getTime();
      const isBefore = dateUtil(timeStamp).isBefore(currentTime);
      let diff = currentTime - timeStamp;
      if (!isBefore) {
        diff = -diff;
      }
      let resStr = "";
      let dirStr = isBefore ? t("component.time.before") : t("component.time.after");
      if (diff < ONE_SECONDS) {
        resStr = t("component.time.just");
      } else if (diff < ONE_MINUTES) {
        resStr = parseInt(diff / ONE_SECONDS) + t("component.time.seconds") + dirStr;
      } else if (diff >= ONE_MINUTES && diff < ONE_HOUR) {
        resStr = Math.floor(diff / ONE_MINUTES) + t("component.time.minutes") + dirStr;
      } else if (diff >= ONE_HOUR && diff < ONE_DAY) {
        resStr = Math.floor(diff / ONE_HOUR) + t("component.time.hours") + dirStr;
      } else if (diff >= ONE_DAY && diff < 262386e4) {
        resStr = Math.floor(diff / ONE_DAY) + t("component.time.days") + dirStr;
      } else if (diff >= 262386e4 && diff <= 3156786e4 && isBefore) {
        resStr = dateUtil(timeStamp).format("MM-DD-HH-mm");
      } else {
        resStr = dateUtil(timeStamp).format("YYYY");
      }
      return resStr;
    }
    return { date };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString(_ctx.date), 1);
}
var time = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const Time = withInstall(time);
const _sfc_main = defineComponent({
  components: { PageWrapper, Time, CollapseContainer },
  setup() {
    const now = new Date().getTime();
    const state = reactive({
      time1: now - 60 * 3 * 1e3,
      time2: now - 86400 * 3 * 1e3
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      now
    });
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Time = resolveComponent("Time");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u57FA\u7840\u793A\u4F8B" }, {
        default: withCtx(() => [
          createVNode(_component_Time, { value: _ctx.time1 }, null, 8, ["value"]),
          _hoisted_1,
          createVNode(_component_Time, { value: _ctx.time2 }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "\u5B9A\u65F6\u66F4\u65B0",
        class: "my-4"
      }, {
        default: withCtx(() => [
          createVNode(_component_Time, {
            value: _ctx.now,
            step: 1
          }, null, 8, ["value"]),
          _hoisted_2,
          createVNode(_component_Time, {
            value: _ctx.now,
            step: 5
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, { title: "\u5B9A\u65F6\u66F4\u65B0" }, {
        default: withCtx(() => [
          createVNode(_component_Time, {
            value: _ctx.now,
            mode: "date"
          }, null, 8, ["value"]),
          _hoisted_3,
          createVNode(_component_Time, {
            value: _ctx.now,
            mode: "datetime"
          }, null, 8, ["value"]),
          _hoisted_4,
          createVNode(_component_Time, { value: _ctx.now }, null, 8, ["value"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
