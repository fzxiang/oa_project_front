import { B as BasicTable } from "./TableImg.e2efe8d6.js";
import "./BasicForm.f937f757.js";
import "./index.351f6ca5.js";
import { c as columns, d as data, a as aoaToSheetXlsx, b as arrData, e as arrHeader } from "./data.e493ef01.js";
import { a as PageWrapper } from "./index.c0604aaf.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.18827a13.js";
import "./index.e23996e1.js";
import "./useRootSetting.af8c12e8.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.47834b00.js";
import "./useTabs.bdcab0ff.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./index.655f0e3f.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.de30982b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.7cdd2294.js";
import "./download.53a6461c.js";
import "./base64Conver.08b9f4ec.js";
import "./index.c6a83fc1.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.e1900874.js";
const _sfc_main = defineComponent({
  components: { BasicTable, PageWrapper },
  setup() {
    function aoaToExcel() {
      aoaToSheetXlsx({
        data: arrData,
        header: arrHeader,
        filename: "\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx"
      });
    }
    return {
      aoaToExcel,
      columns,
      data
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5BFC\u51FA ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5BFC\u51FA\u793A\u4F8B",
    content: "\u6839\u636E\u6570\u7EC4\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, {
        title: "\u57FA\u7840\u8868\u683C",
        columns: _ctx.columns,
        dataSource: _ctx.data
      }, {
        toolbar: withCtx(() => [
          createVNode(_component_a_button, { onClick: _ctx.aoaToExcel }, {
            default: withCtx(() => [
              _hoisted_1
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
var ArrayExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ArrayExport as default };
