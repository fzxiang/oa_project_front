import { _ as _export_sfc, a as useI18n, y as isFunction, B as withInstall } from "./index.deb64523.js";
import { $ as reactive, a0 as readonly, aq as watchEffect, O as computed, b7 as isEqual, a7 as nextTick, t as toRaw, b as unref, am as getCurrentInstance, Q as ref, aV as tryOnUnmounted, d as defineComponent, aP as Button, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, aj as createTextVNode, W as toDisplayString, aa as mergeProps, aH as createSlots, as as renderList, ac as renderSlot, aG as normalizeProps, aQ as guardReactiveProps, f as createVNode } from "./vendor.faf2de98.js";
import { d as useDesign } from "./index.96780b6a.js";
function useRuleFormItem(props2, key = "value", changeEvent = "change", emitData) {
  const instance = getCurrentInstance();
  const emit = instance == null ? void 0 : instance.emit;
  const innerState = reactive({
    value: props2[key]
  });
  const defaultState = readonly(innerState);
  const setState = (val) => {
    innerState.value = val;
  };
  watchEffect(() => {
    innerState.value = props2[key];
  });
  const state = computed({
    get() {
      return innerState.value;
    },
    set(value) {
      if (isEqual(value, defaultState.value))
        return;
      innerState.value = value;
      nextTick(() => {
        emit == null ? void 0 : emit(changeEvent, value, ...toRaw(unref(emitData)) || []);
      });
    }
  });
  return [state, setState, defaultState];
}
function useCountdown(count) {
  const currentCount = ref(count);
  const isStart = ref(false);
  let timerId;
  function clear() {
    timerId && window.clearInterval(timerId);
  }
  function stop() {
    isStart.value = false;
    clear();
    timerId = null;
  }
  function start() {
    if (unref(isStart) || !!timerId) {
      return;
    }
    isStart.value = true;
    timerId = setInterval(() => {
      if (unref(currentCount) === 1) {
        stop();
        currentCount.value = count;
      } else {
        currentCount.value -= 1;
      }
    }, 1e3);
  }
  function reset() {
    currentCount.value = count;
    stop();
  }
  function restart() {
    reset();
    start();
  }
  tryOnUnmounted(() => {
    reset();
  });
  return { start, reset, restart, clear, stop, currentCount, isStart };
}
const props$1 = {
  value: { type: [Object, Number, String, Array] },
  count: { type: Number, default: 60 },
  beforeStartFunc: {
    type: Function,
    default: null
  }
};
const _sfc_main$1 = defineComponent({
  name: "CountButton",
  components: { Button },
  props: props$1,
  setup(props2) {
    const loading = ref(false);
    const { currentCount, isStart, start, reset } = useCountdown(props2.count);
    const { t } = useI18n();
    const getButtonText = computed(() => {
      return !unref(isStart) ? t("component.countdown.normalText") : t("component.countdown.sendText", [unref(currentCount)]);
    });
    watchEffect(() => {
      props2.value === void 0 && reset();
    });
    async function handleStart() {
      const { beforeStartFunc } = props2;
      if (beforeStartFunc && isFunction(beforeStartFunc)) {
        loading.value = true;
        try {
          const canStart = await beforeStartFunc();
          canStart && start();
        } finally {
          loading.value = false;
        }
      } else {
        start();
      }
    }
    return { handleStart, currentCount, loading, getButtonText, isStart };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  return openBlock(), createBlock(_component_Button, mergeProps(_ctx.$attrs, {
    disabled: _ctx.isStart,
    onClick: _ctx.handleStart,
    loading: _ctx.loading
  }), {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.getButtonText), 1)
    ]),
    _: 1
  }, 16, ["disabled", "onClick", "loading"]);
}
var countButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var CountdownInput_vue_vue_type_style_index_0_lang = "";
const props = {
  value: { type: String },
  size: { type: String, validator: (v) => ["default", "large", "small"].includes(v) },
  count: { type: Number, default: 60 },
  sendCodeApi: {
    type: Function,
    default: null
  }
};
const _sfc_main = defineComponent({
  name: "CountDownInput",
  components: { CountButton: countButton },
  inheritAttrs: false,
  props,
  setup(props2) {
    const { prefixCls } = useDesign("countdown-input");
    const [state] = useRuleFormItem(props2);
    return { prefixCls, state };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CountButton = resolveComponent("CountButton");
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, mergeProps(_ctx.$attrs, {
    class: _ctx.prefixCls,
    size: _ctx.size,
    value: _ctx.state
  }), createSlots({
    addonAfter: withCtx(() => [
      createVNode(_component_CountButton, {
        size: _ctx.size,
        count: _ctx.count,
        value: _ctx.state,
        beforeStartFunc: _ctx.sendCodeApi
      }, null, 8, ["size", "count", "value", "beforeStartFunc"])
    ]),
    _: 2
  }, [
    renderList(Object.keys(_ctx.$slots).filter((k) => k !== "addonAfter"), (item) => {
      return {
        name: item,
        fn: withCtx((data) => [
          renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
        ])
      };
    })
  ]), 1040, ["class", "size", "value"]);
}
var countdownInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const CountdownInput = withInstall(countdownInput);
withInstall(countButton);
export { CountdownInput as C, useRuleFormItem as u };
