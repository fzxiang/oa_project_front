import { B as BasicTable } from "./TableImg.3e359dfb.js";
import "./BasicForm.79a1fa4e.js";
import { E as ExpExcelModal } from "./index.b2a43557.js";
import { c as columns, d as data, j as jsonToSheetXlsx } from "./data.28c2b7e5.js";
import { b as useModal } from "./index.2d2e5b53.js";
import { a as PageWrapper } from "./index.fd4d6da0.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.c5eb71b8.js";
import "./index.8e8d3248.js";
import "./useRootSetting.cdafd62c.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.a90974d3.js";
import "./useTabs.90482ef5.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.078ba8da.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.65b7d1eb.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
import "./index.3cb89c42.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.a64b04d8.js";
const _sfc_main = defineComponent({
  components: { BasicTable, ExpExcelModal, PageWrapper },
  setup() {
    function defaultHeader({ filename, bookType }) {
      jsonToSheetXlsx({
        data,
        filename,
        write2excelOpts: {
          bookType
        }
      });
    }
    const [register, { openModal }] = useModal();
    return {
      defaultHeader,
      columns,
      data,
      register,
      openModal
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5BFC\u51FA ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_ExpExcelModal = resolveComponent("ExpExcelModal");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5BFC\u51FA\u793A\u4F8B",
    content: "\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, {
        title: "\u57FA\u7840\u8868\u683C",
        columns: _ctx.columns,
        dataSource: _ctx.data
      }, {
        toolbar: withCtx(() => [
          createVNode(_component_a_button, { onClick: _ctx.openModal }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["columns", "dataSource"]),
      createVNode(_component_ExpExcelModal, {
        onRegister: _ctx.register,
        onSuccess: _ctx.defaultHeader
      }, null, 8, ["onRegister", "onSuccess"])
    ]),
    _: 1
  });
}
var CustomExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CustomExport as default };
