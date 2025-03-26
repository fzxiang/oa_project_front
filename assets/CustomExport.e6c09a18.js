import { B as BasicTable } from "./TableImg.7b6cade1.js";
import "./BasicForm.51a12356.js";
import { E as ExpExcelModal } from "./index.e9b3cfbd.js";
import { c as columns, d as data, j as jsonToSheetXlsx } from "./data.e040e77b.js";
import { b as useModal } from "./index.0fe36650.js";
import { a as PageWrapper } from "./index.9cd07a12.js";
import { _ as _export_sfc } from "./index.c01f1eb2.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.2a3ca82d.js";
import "./index.7fb5b23a.js";
import "./useRootSetting.f9f62c0d.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.cc517659.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.8094aee1.js";
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
