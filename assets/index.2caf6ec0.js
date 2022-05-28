import { d as defineComponent, L as Layout, cJ as GithubFilled, u as useRouter, Q as ref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, W as toDisplayString, f as createVNode, X as normalizeClass, ai as createCommentVNode, b as unref, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
import { D as DOC_URL, G as GITHUB_URL, S as SITE_URL } from "./siteSetting.c485f07c.js";
import { _ as _export_sfc, a5 as openWindow, a as useI18n } from "./index.e7b2878b.js";
import { a as useRootSetting } from "./useRootSetting.63072823.js";
import { d as useDesign } from "./index.69692b74.js";
import { a as useLayoutHeight } from "./useContentViewHeight.b40837c1.js";
import "./useWindowSizeFn.7703d3fa.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFooter",
  components: { Footer: Layout.Footer, GithubFilled },
  setup() {
    const { t } = useI18n();
    const { getShowFooter } = useRootSetting();
    const { currentRoute } = useRouter();
    const { prefixCls } = useDesign("layout-footer");
    const footerRef = ref(null);
    const { setFooterHeight } = useLayoutHeight();
    const getShowLayoutFooter = computed(() => {
      var _a, _b;
      if (unref(getShowFooter)) {
        const footerEl = (_a = unref(footerRef)) == null ? void 0 : _a.$el;
        setFooterHeight((footerEl == null ? void 0 : footerEl.offsetHeight) || 0);
      } else {
        setFooterHeight(0);
      }
      return unref(getShowFooter) && !((_b = unref(currentRoute).meta) == null ? void 0 : _b.hiddenFooter);
    });
    return {
      getShowLayoutFooter,
      prefixCls,
      t,
      DOC_URL,
      GITHUB_URL,
      SITE_URL,
      openWindow,
      footerRef
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-71d99200"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "Copyright \xA92020 OA\u529E\u516C\u7CFB\u7EDF", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GithubFilled = resolveComponent("GithubFilled");
  const _component_Footer = resolveComponent("Footer");
  return _ctx.getShowLayoutFooter ? (openBlock(), createBlock(_component_Footer, {
    key: 0,
    class: normalizeClass(_ctx.prefixCls),
    ref: "footerRef"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__links`)
      }, [
        createBaseVNode("a", {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openWindow(_ctx.SITE_URL))
        }, toDisplayString(_ctx.t("layout.footer.onlinePreview")), 1),
        createVNode(_component_GithubFilled, {
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.openWindow(_ctx.GITHUB_URL)),
          class: normalizeClass(`${_ctx.prefixCls}__github`)
        }, null, 8, ["class"]),
        createBaseVNode("a", {
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.openWindow(_ctx.DOC_URL))
        }, toDisplayString(_ctx.t("layout.footer.onlineDocument")), 1)
      ], 2),
      _hoisted_1
    ]),
    _: 1
  }, 8, ["class"])) : createCommentVNode("", true);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-71d99200"]]);
export { index as default };
