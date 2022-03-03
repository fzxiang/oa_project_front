import { d as defineComponent, O as computed, o as openBlock, R as createElementBlock, f as createVNode, b as unref, cv as Avatar, V as createBaseVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                  */import { q as useUserStore } from "./index.f72786be.js";
import { h as headerImg } from "./header.d801b988.js";
const _hoisted_1 = { class: "lg:flex" };
const _hoisted_2 = { class: "md:ml-6 flex flex-col justify-center md:mt-0 mt-2" };
const _hoisted_3 = { class: "md:text-lg text-md" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "text-secondary" }, " \u4ECA\u65E5\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-1 justify-end md:mt-0 mt-4" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserStore();
    const userinfo = computed(() => userStore.getUserInfo);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Avatar), {
          src: unref(userinfo).avatar || unref(headerImg),
          size: 72,
          class: "!mx-auto !block"
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, "\u65E9\u5B89, " + toDisplayString(unref(userinfo).realName) + ", \u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01", 1),
          _hoisted_4
        ]),
        _hoisted_5
      ]);
    };
  }
});
export { _sfc_main as default };
