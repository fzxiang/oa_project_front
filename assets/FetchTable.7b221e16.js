import { B as BasicTable } from "./TableImg.24c448cb.js";
import "./BasicForm.9a4a9312.js";
import { u as useTable } from "./useTable.acbbbf48.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { a as PageWrapper } from "./index.28f5128b.js";
import { d as demoListApi } from "./table.162e4117.js";
import { _ as _export_sfc } from "./index.deb64523.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.70b03046.js";
import "./index.96780b6a.js";
import "./useRootSetting.2926bd9b.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.4e45ee86.js";
import "./useTabs.da79212b.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./index.b2b953b0.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.3fbd530e.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.69296395.js";
import "./download.6fde1c28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fc4b8bf2.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.968fd34e.js";
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
