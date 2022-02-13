import { B as defineComponent, a as useRouter, u as unref, D as openBlock, F as createElementBlock } from "./vendor.7c0ada15.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    const { path, _redirect_type = "path" } = params;
    Reflect.deleteProperty(params, "_redirect_type");
    Reflect.deleteProperty(params, "path");
    const _path = Array.isArray(path) ? path.join("/") : path;
    if (_redirect_type === "name") {
      replace({
        name: _path,
        query,
        params
      });
    } else {
      replace({
        path: _path.startsWith("/") ? _path : "/" + _path,
        query
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export { _sfc_main as default };
