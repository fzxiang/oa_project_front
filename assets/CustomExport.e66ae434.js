import { B as BasicTable } from "./TableImg.05fa72f6.js";
import "./BasicForm.43e0950f.js";
import { E as ExpExcelModal } from "./index.90b37461.js";
import { c as columns, d as data, j as jsonToSheetXlsx } from "./data.3149ce41.js";
import { b as useModal } from "./index.4a1637a4.js";
import { a as PageWrapper } from "./index.3ed09f6c.js";
import { _ as _export_sfc } from "./index.9f6c9c50.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.c3298bf0.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.2d1b1706.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.062a3e68.js";
import "./base64Conver.08b9f4ec.js";
import "./index.f905e655.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.ca4f2553.js";
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
