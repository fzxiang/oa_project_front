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
import { d as defineComponent, cV as Breadcrumb$1, Q as ref, u as useRouter, aq as watchEffect, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, c as createBlock, ai as createCommentVNode, W as toDisplayString, aj as createTextVNode, X as normalizeClass } from "./vendor.faf2de98.js";
/* empty css                  */import { I as Icon, p as propTypes, d as useDesign, n as getMenus } from "./index.a3d18deb.js";
import { a as useRootSetting } from "./useRootSetting.aff873bd.js";
import { _ as _export_sfc, t as useGo, a as useI18n, R as REDIRECT_NAME, O as getAllParentPath, N as filter, x as isString } from "./index.6c404263.js";
var Breadcrumb_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutBreadcrumb",
  components: { Icon, [Breadcrumb$1.name]: Breadcrumb$1 },
  props: {
    theme: propTypes.oneOf(["dark", "light"])
  },
  setup() {
    const routes = ref([]);
    const { currentRoute } = useRouter();
    const { prefixCls } = useDesign("layout-breadcrumb");
    const { getShowBreadCrumbIcon } = useRootSetting();
    const go = useGo();
    const { t } = useI18n();
    watchEffect(async () => {
      var _a, _b, _c;
      if (currentRoute.value.name === REDIRECT_NAME)
        return;
      const menus = await getMenus();
      const routeMatched = currentRoute.value.matched;
      const cur = routeMatched == null ? void 0 : routeMatched[routeMatched.length - 1];
      let path = currentRoute.value.path;
      if (cur && ((_a = cur == null ? void 0 : cur.meta) == null ? void 0 : _a.currentActiveMenu)) {
        path = cur.meta.currentActiveMenu;
      }
      const parent = getAllParentPath(menus, path);
      const filterMenus = menus.filter((item) => item.path === parent[0]);
      const matched = getMatched(filterMenus, parent);
      if (!matched || matched.length === 0)
        return;
      const breadcrumbList = filterItem(matched);
      if ((_b = currentRoute.value.meta) == null ? void 0 : _b.currentActiveMenu) {
        breadcrumbList.push(__spreadProps(__spreadValues({}, currentRoute.value), {
          name: ((_c = currentRoute.value.meta) == null ? void 0 : _c.title) || currentRoute.value.name
        }));
      }
      routes.value = breadcrumbList;
    });
    function getMatched(menus, parent) {
      const metched = [];
      menus.forEach((item) => {
        var _a, _b;
        if (parent.includes(item.path)) {
          metched.push(__spreadProps(__spreadValues({}, item), {
            name: ((_a = item.meta) == null ? void 0 : _a.title) || item.name
          }));
        }
        if ((_b = item.children) == null ? void 0 : _b.length) {
          metched.push(...getMatched(item.children, parent));
        }
      });
      return metched;
    }
    function filterItem(list) {
      return filter(list, (item) => {
        const { meta, name } = item;
        if (!meta) {
          return !!name;
        }
        const { title, hideBreadcrumb, hideMenu } = meta;
        if (!title || hideBreadcrumb || hideMenu) {
          return false;
        }
        return true;
      }).filter((item) => {
        var _a;
        return !((_a = item.meta) == null ? void 0 : _a.hideBreadcrumb);
      });
    }
    function handleClick(route, paths, e) {
      e == null ? void 0 : e.preventDefault();
      const { children, redirect, meta } = route;
      if ((children == null ? void 0 : children.length) && !redirect) {
        e == null ? void 0 : e.stopPropagation();
        return;
      }
      if (meta == null ? void 0 : meta.carryParam) {
        return;
      }
      if (redirect && isString(redirect)) {
        go(redirect);
      } else {
        let goPath = "";
        if (paths.length === 1) {
          goPath = paths[0];
        } else {
          const ps = paths.slice(1);
          const lastPath = ps.pop() || "";
          goPath = `${lastPath}`;
        }
        goPath = /^\//.test(goPath) ? goPath : `/${goPath}`;
        go(goPath);
      }
    }
    function hasRedirect(routes2, route) {
      return routes2.indexOf(route) !== routes2.length - 1;
    }
    function getIcon(route) {
      var _a;
      return route.icon || ((_a = route.meta) == null ? void 0 : _a.icon);
    }
    return { routes, t, prefixCls, getIcon, getShowBreadCrumbIcon, handleClick, hasRedirect };
  }
});
const _hoisted_1 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_router_link = resolveComponent("router-link");
  const _component_a_breadcrumb = resolveComponent("a-breadcrumb");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.prefixCls, `${_ctx.prefixCls}--${_ctx.theme}`])
  }, [
    createVNode(_component_a_breadcrumb, { routes: _ctx.routes }, {
      itemRender: withCtx(({ route, routes: routesMatched, paths }) => [
        _ctx.getShowBreadCrumbIcon && _ctx.getIcon(route) ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: _ctx.getIcon(route)
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        !_ctx.hasRedirect(routesMatched, route) ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.t(route.name || route.meta.title)), 1)) : (openBlock(), createBlock(_component_router_link, {
          key: 2,
          to: "",
          onClick: ($event) => _ctx.handleClick(route, paths, $event)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.t(route.name || route.meta.title)), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]))
      ]),
      _: 1
    }, 8, ["routes"])
  ], 2);
}
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Breadcrumb as default };
