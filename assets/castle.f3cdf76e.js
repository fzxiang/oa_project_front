import { _ as _export_sfc, q as useUserStore, aC as getTimeState } from "./index.27fe703a.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, V as createBaseVNode, aj as createTextVNode, W as toDisplayString, X as normalizeClass, Y as pushScopeId, Z as popScopeId, c9 as createStaticVNode } from "./vendor.faf2de98.js";
var castle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  setup() {
    var _a;
    const userStore = useUserStore();
    const checked = ref(true);
    const nickName = (_a = userStore == null ? void 0 : userStore.userInfo) == null ? void 0 : _a.realName;
    const { status, text } = getTimeState();
    checked.value = status === "night";
    function handleChange() {
      checked.value = !checked.value;
    }
    return {
      nickName,
      text,
      checked,
      handleChange
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-432d035c"), n = n(), popScopeId(), n);
const _hoisted_1 = { style: { "height": "100%" } };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "sun" }, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "moon" }, null, -1));
const _hoisted_4 = { class: "lefttopText" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", null, [
  /* @__PURE__ */ createTextVNode("A DAY"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("ON THE ISLAND")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "\u6B22\u8FCE\u6765\u5230OA\u529E\u516C\u7BA1\u7406\u7CFB\u7EDF", -1));
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="allstars" data-v-432d035c><div class="star1" data-v-432d035c></div><div class="star2" data-v-432d035c></div><div class="star3" data-v-432d035c></div><div class="star4" data-v-432d035c></div><div class="star5" data-v-432d035c></div><div class="star6" data-v-432d035c></div><div class="star7" data-v-432d035c></div><div class="star8" data-v-432d035c></div><div class="star9" data-v-432d035c></div><div class="star10" data-v-432d035c></div><div class="star11" data-v-432d035c></div><div class="star12" data-v-432d035c></div><div class="star13" data-v-432d035c></div><div class="star14" data-v-432d035c></div><div class="star15" data-v-432d035c></div><div class="star16" data-v-432d035c></div><div class="star17" data-v-432d035c></div><div class="star18" data-v-432d035c></div><div class="star19" data-v-432d035c></div><div class="star20" data-v-432d035c></div><div class="star21" data-v-432d035c></div><div class="star22" data-v-432d035c></div><div class="star23" data-v-432d035c></div><div class="star24" data-v-432d035c></div><div class="star25" data-v-432d035c></div><div class="star26" data-v-432d035c></div><div class="star27" data-v-432d035c></div><div class="star28" data-v-432d035c></div><div class="star29" data-v-432d035c></div><div class="star30" data-v-432d035c></div></div><div class="building" data-v-432d035c><div class="house1" data-v-432d035c><div class="window" data-v-432d035c><div class="circle" data-v-432d035c></div><div class="circle" data-v-432d035c></div><div class="circle" data-v-432d035c></div></div></div><div class="house2" data-v-432d035c><div class="door" data-v-432d035c></div></div><div class="house3" data-v-432d035c><div class="wall" data-v-432d035c><div class="window" data-v-432d035c></div></div><div class="wall" data-v-432d035c><div class="window" data-v-432d035c></div></div><div class="wall" data-v-432d035c><div class="window" data-v-432d035c></div></div><div class="roof" data-v-432d035c><div class="rooftop" data-v-432d035c><div class="cross" data-v-432d035c></div></div></div></div></div>', 2);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.checked ? "scene" : "scene checked"),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
    }, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        createBaseVNode("h1", null, [
          createTextVNode("\u4EB2\u7231\u7684\uFF0C" + toDisplayString(_ctx.nickName), 1),
          _hoisted_6,
          createBaseVNode("span", null, toDisplayString(_ctx.text), 1)
        ]),
        _hoisted_7
      ]),
      _hoisted_8
    ], 2)
  ]);
}
var castle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-432d035c"]]);
export { castle as default };
