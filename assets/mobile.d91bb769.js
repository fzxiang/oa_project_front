import { t as useGo, _ as _export_sfc, k as setupRouter, l as setupRouterGuard, r as router } from "./index.6c404263.js";
import { d as defineComponent, aX as Tabbar, aY as TabbarItem, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, c as createBlock, ap as resolveDynamicComponent, aZ as KeepAlive, ag as Fragment, aj as createTextVNode, g as createApp } from "./vendor.faf2de98.js";
const _sfc_main = defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const active = ref(location.hash.slice(1) || "/mobile/home");
    const go = useGo();
    function onChange(value) {
      console.log(value);
      go(value);
    }
    return {
      onChange,
      active
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u9996\u9875");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6536\u5165");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_van_tabbar_item = resolveComponent("van-tabbar-item");
  const _component_van_tabbar = resolveComponent("van-tabbar");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_router_view, null, {
      default: withCtx(({ Component, route }) => [
        (openBlock(), createBlock(KeepAlive, { include: ["MobileHome"] }, [
          (openBlock(), createBlock(resolveDynamicComponent(Component), {
            key: route.fullPath
          }))
        ], 1024))
      ]),
      _: 1
    }),
    createVNode(_component_van_tabbar, {
      modelValue: _ctx.active,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.active = $event),
      onChange: _ctx.onChange
    }, {
      default: withCtx(() => [
        createVNode(_component_van_tabbar_item, {
          name: "/mobile/home",
          icon: "home-o"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }),
        createVNode(_component_van_tabbar_item, {
          name: "/mobile/income",
          icon: "after-sale"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onChange"])
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupRouterGuard(router);
  app.mount("#app");
}
bootstrap();
var mobile_html_htmlProxy_index_3 = "";
