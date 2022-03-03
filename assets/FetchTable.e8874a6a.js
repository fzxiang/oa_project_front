import { B as BasicTable } from "./TableImg.e2efe8d6.js";
import "./BasicForm.f937f757.js";
import { u as useTable } from "./useTable.9f3afcc2.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { a as PageWrapper } from "./index.c0604aaf.js";
import { d as demoListApi } from "./table.707f4f52.js";
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
    const [registerTable, { reload }] = useTable({
      title: "\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",
      api: demoListApi,
      columns: getBasicColumns(),
      pagination: { pageSize: 10 }
    });
    function handleReloadCurrent() {
      reload();
    }
    function handleReload() {
      reload({
        page: 1
      });
    }
    return {
      registerTable,
      handleReloadCurrent,
      handleReload
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5237\u65B0\u5F53\u524D\u9875 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    contentBackground: "",
    contentClass: "flex",
    dense: "",
    contentFullHeight: "",
    fixedHeight: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
        toolbar: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            onClick: _ctx.handleReloadCurrent
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            type: "primary",
            onClick: _ctx.handleReload
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var FetchTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FetchTable as default };
