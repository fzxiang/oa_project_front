import { B as BasicTable } from "./TableImg.3829b758.js";
import "./BasicForm.b9e70f2c.js";
import "./index.6a9f3808.js";
import { c as columns, d as data, j as jsonToSheetXlsx } from "./data.f6ae9c46.js";
import { a as PageWrapper } from "./index.3f999429.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.ef3314e3.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./index.a1fdeced.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.a0bf2552.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.06bbe6a9.js";
const _sfc_main = defineComponent({
  components: { BasicTable, PageWrapper },
  setup() {
    function defaultHeader() {
      jsonToSheetXlsx({
        data,
        filename: "\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx"
      });
    }
    function customHeader() {
      jsonToSheetXlsx({
        data,
        header: {
          id: "ID",
          name: "\u59D3\u540D",
          age: "\u5E74\u9F84",
          no: "\u7F16\u53F7",
          address: "\u5730\u5740",
          beginTime: "\u5F00\u59CB\u65F6\u95F4",
          endTime: "\u7ED3\u675F\u65F6\u95F4"
        },
        filename: "\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx",
        json2sheetOpts: {
          header: ["name", "id"]
        }
      });
    }
    return {
      defaultHeader,
      customHeader,
      columns,
      data
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5BFC\u51FA\uFF1A\u9ED8\u8BA4\u5934\u90E8 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5BFC\u51FA\uFF1A\u81EA\u5B9A\u4E49\u5934\u90E8 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5BFC\u51FA\u793A\u4F8B",
    content: "\u6839\u636EJSON\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, {
        title: "\u57FA\u7840\u8868\u683C",
        columns: _ctx.columns,
        dataSource: _ctx.data
      }, {
        toolbar: withCtx(() => [
          createVNode(_component_a_button, { onClick: _ctx.defaultHeader }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, { onClick: _ctx.customHeader }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["columns", "dataSource"])
    ]),
    _: 1
  });
}
var JsonExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { JsonExport as default };
