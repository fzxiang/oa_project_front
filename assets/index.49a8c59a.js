import { B as BasicTable } from "./TableImg.3829b758.js";
import "./BasicForm.b9e70f2c.js";
import { u as useTable } from "./useTable.2ed5024e.js";
import { getBasicColumns, getFormConfig } from "./tableData.6b390178.js";
import { d as defineComponent, bO as Alert, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, V as createBaseVNode, W as toDisplayString, ag as Fragment, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  */import { d as demoListApi } from "./table.820b4149.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
/* empty css                  *//* empty css                 */import "./useForm.ef3314e3.js";
import "./index.3f999429.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
import "./uuid.2b29000c.js";
import "./index.a1fdeced.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.a0bf2552.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
const _sfc_main = defineComponent({
  components: { BasicTable, AAlert: Alert },
  setup() {
    const checkedKeys = ref([]);
    const [registerTable, { getForm }] = useTable({
      title: "\u5F00\u542F\u641C\u7D22\u533A\u57DF",
      api: demoListApi,
      columns: getBasicColumns(),
      useSearchForm: true,
      formConfig: getFormConfig(),
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      rowKey: "id"
    });
    function getFormValues() {
      console.log(getForm().getFieldsValue());
    }
    function onSelectChange(selectedRowKeys) {
      console.log(selectedRowKeys);
      checkedKeys.value = selectedRowKeys;
    }
    return {
      registerTable,
      getFormValues,
      checkedKeys,
      onSelectChange
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" custom-slot ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6E05\u7A7A");
const _hoisted_3 = { key: 1 };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u8868\u5355\u6570\u636E");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_a_alert = resolveComponent("a-alert");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createBlock(_component_BasicTable, {
    onRegister: _ctx.registerTable,
    rowSelection: { type: "checkbox", selectedRowKeys: _ctx.checkedKeys, onChange: _ctx.onSelectChange }
  }, {
    "form-custom": withCtx(() => [
      _hoisted_1
    ]),
    headerTop: withCtx(() => [
      createVNode(_component_a_alert, {
        type: "info",
        "show-icon": ""
      }, {
        message: withCtx(() => [
          _ctx.checkedKeys.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("span", null, "\u5DF2\u9009\u4E2D" + toDisplayString(_ctx.checkedKeys.length) + "\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)", 1),
            createVNode(_component_a_button, {
              type: "link",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.checkedKeys = []),
              size: "small"
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            })
          ], 64)) : (openBlock(), createElementBlock("span", _hoisted_3, "\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))
        ]),
        _: 1
      })
    ]),
    toolbar: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.getFormValues
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  }, 8, ["onRegister", "rowSelection"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
