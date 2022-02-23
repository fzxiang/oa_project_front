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
import { X as toRefs, Q as reactive, bl as tryOnMounted, ah as tryOnUnmounted, B as defineComponent, ap as Input, r as ref, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, G as withDirectives, H as vShow, J as createBaseVNode, w as createVNode, u as unref, ch as LockOutlined, K as toDisplayString, L as normalizeClass, a7 as withCtx, ae as createCommentVNode, af as createTextVNode, a3 as Transition } from "./vendor.7c0ada15.js";
import { ay as dateUtil, _ as _export_sfc, a as useDesign, f as useUserStore, b as useI18n } from "./index.d5751037.js";
import { u as useLockStore } from "./lock.b5151bc4.js";
import { h as headerImg } from "./header.d801b988.js";
function useNow(immediate = true) {
  let timer;
  const state = reactive({
    year: 0,
    month: 0,
    week: "",
    day: 0,
    hour: "",
    minute: "",
    second: 0,
    meridiem: ""
  });
  const update = () => {
    const now = dateUtil();
    const h = now.format("HH");
    const m = now.format("mm");
    const s = now.get("s");
    state.year = now.get("y");
    state.month = now.get("M") + 1;
    state.week = "\u661F\u671F" + ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][now.day()];
    state.day = now.get("date");
    state.hour = h;
    state.minute = m;
    state.second = s;
    state.meridiem = now.format("A");
  };
  function start() {
    update();
    clearInterval(timer);
    timer = setInterval(() => update(), 1e3);
  }
  function stop() {
    clearInterval(timer);
  }
  tryOnMounted(() => {
    immediate && start();
  });
  tryOnUnmounted(() => {
    stop();
  });
  return __spreadProps(__spreadValues({}, toRefs(state)), {
    start,
    stop
  });
}
var LockPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "flex w-screen h-screen justify-center items-center" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "absolute bottom-5 w-full text-gray-300 xl:text-xl 2xl:text-3xl text-center enter-y" };
const _hoisted_4 = { class: "text-5xl mb-4 enter-x" };
const _hoisted_5 = { class: "text-3xl" };
const _hoisted_6 = { class: "text-2xl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const InputPassword = Input.Password;
    const password = ref("");
    const loading = ref(false);
    const errMsg = ref(false);
    const showDate = ref(true);
    const { prefixCls } = useDesign("lock-page");
    const lockStore = useLockStore();
    const userStore = useUserStore();
    const { hour, month, minute, meridiem, year, day, week } = useNow(true);
    const { t } = useI18n();
    const userinfo = computed(() => {
      return userStore.getUserInfo || {};
    });
    async function unLock() {
      if (!password.value) {
        return;
      }
      let pwd = password.value;
      try {
        loading.value = true;
        const res = await lockStore.unLock(pwd);
        errMsg.value = !res;
      } finally {
        loading.value = false;
      }
    }
    function goLogin() {
      userStore.logout(true);
      lockStore.resetLockInfo();
    }
    function handleShowForm(show = false) {
      showDate.value = show;
    }
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(prefixCls), "fixed inset-0 flex h-screen w-screen bg-black items-center justify-center"])
      }, [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([`${unref(prefixCls)}__unlock`, "absolute top-0 left-1/2 flex pt-5 h-16 items-center justify-center sm:text-md xl:text-xl text-white flex-col cursor-pointer transform translate-x-1/2"]),
          onClick: _cache[0] || (_cache[0] = ($event) => handleShowForm(false))
        }, [
          createVNode(unref(LockOutlined)),
          createBaseVNode("span", null, toDisplayString(unref(t)("sys.lock.unlock")), 1)
        ], 2), [
          [vShow, showDate.value]
        ]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: normalizeClass([`${unref(prefixCls)}__hour`, "relative mr-5 md:mr-20 w-2/5 h-2/5 md:h-4/5"])
          }, [
            createBaseVNode("span", null, toDisplayString(unref(hour)), 1),
            withDirectives(createBaseVNode("span", { class: "meridiem absolute left-5 top-5 text-md xl:text-xl" }, toDisplayString(unref(meridiem)), 513), [
              [vShow, showDate.value]
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(`${unref(prefixCls)}__minute w-2/5 h-2/5 md:h-4/5 `)
          }, [
            createBaseVNode("span", null, toDisplayString(unref(minute)), 1)
          ], 2)
        ]),
        createVNode(Transition, { name: "fade-slide" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass(`${unref(prefixCls)}-entry`)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(`${unref(prefixCls)}-entry-content`)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(`${unref(prefixCls)}-entry__header enter-x`)
                }, [
                  createBaseVNode("img", {
                    src: unref(userinfo).avatar || unref(headerImg),
                    class: normalizeClass(`${unref(prefixCls)}-entry__header-img`)
                  }, null, 10, _hoisted_2),
                  createBaseVNode("p", {
                    class: normalizeClass(`${unref(prefixCls)}-entry__header-name`)
                  }, toDisplayString(unref(userinfo).realName), 3)
                ], 2),
                createVNode(unref(InputPassword), {
                  placeholder: unref(t)("sys.lock.placeholder"),
                  class: "enter-x",
                  value: password.value,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => password.value = $event)
                }, null, 8, ["placeholder", "value"]),
                errMsg.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(`${unref(prefixCls)}-entry__err-msg enter-x`)
                }, toDisplayString(unref(t)("sys.lock.alert")), 3)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(`${unref(prefixCls)}-entry__footer enter-x`)
                }, [
                  createVNode(_component_a_button, {
                    type: "link",
                    size: "small",
                    class: "mt-2 mr-2 enter-x",
                    disabled: loading.value,
                    onClick: _cache[2] || (_cache[2] = ($event) => handleShowForm(true))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("common.back")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_a_button, {
                    type: "link",
                    size: "small",
                    class: "mt-2 mr-2 enter-x",
                    disabled: loading.value,
                    onClick: goLogin
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("sys.lock.backToLogin")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_a_button, {
                    class: "mt-2",
                    type: "link",
                    size: "small",
                    onClick: _cache[3] || (_cache[3] = ($event) => unLock()),
                    loading: loading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("sys.lock.entry")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ], 2)
              ], 2)
            ], 2), [
              [vShow, !showDate.value]
            ])
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_3, [
          withDirectives(createBaseVNode("div", _hoisted_4, [
            createTextVNode(toDisplayString(unref(hour)) + ":" + toDisplayString(unref(minute)) + " ", 1),
            createBaseVNode("span", _hoisted_5, toDisplayString(unref(meridiem)), 1)
          ], 512), [
            [vShow, !showDate.value]
          ]),
          createBaseVNode("div", _hoisted_6, toDisplayString(unref(year)) + "/" + toDisplayString(unref(month)) + "/" + toDisplayString(unref(day)) + " " + toDisplayString(unref(week)), 1)
        ])
      ], 2);
    };
  }
});
var LockPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-522fe65f"]]);
export { LockPage as default };
