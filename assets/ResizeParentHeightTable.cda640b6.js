import { B as BasicTable } from "./TableImg.45be1fba.js";
import "./BasicForm.9f05b372.js";
import { u as useTable } from "./useTable.a1c9f9f7.js";
import { getBasicColumns, getFormConfig } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.d35b0e2f.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.9ebef8bf.js";
import "./index.2436ac25.js";
import "./index.a2736d3e.js";
import "./useRootSetting.bd6c6dd4.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4cc144f6.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.9804cee4.js";
import "./useTabs.6eccdc33.js";
import "./uuid.2b29000c.js";
import "./index.ebdec3e2.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.22606648.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.57a89e8a.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
import "./index.74e6c783.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup(_) {
    const [registerTable] = useTable({
      api: demoListApi,
      columns: getBasicColumns(),
      useSearchForm: false,
      formConfig: getFormConfig(),
      showTableSetting: false,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      isCanResizeParent: true,
      rowKey: "id"
    });
    const [registerTable1] = useTable({
      api: demoListApi,
      columns: getBasicColumns(),
      formConfig: getFormConfig(),
      showTableSetting: false,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      isCanResizeParent: true,
      useSearchForm: false,
      rowKey: "id"
    });
    const [registerTable2] = useTable({
      api: demoListApi,
      columns: getBasicColumns(),
      formConfig: getFormConfig(),
      showTableSetting: false,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      isCanResizeParent: true,
      useSearchForm: false,
      pagination: false,
      rowKey: "id"
    });
    return {
      registerTable,
      registerTable1,
      registerTable2
    };
  }
});
const _hoisted_1 = { class: "h-full flex p-4" };
const _hoisted_2 = { class: "flex flex-col pr-4 w-1/2" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "h-4" }, null, -1);
const _hoisted_5 = { class: "flex-1" };
const _hoisted_6 = { class: "flex-1 flex flex-col w-1/2 h-full" };
const _hoisted_7 = { class: "h-1/3 mb-4" };
const _hoisted_8 = { class: "h-1/3 mb-4" };
const _hoisted_9 = { class: "h-1/3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, null, 8, ["onRegister"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, null, 8, ["onRegister"])
      ])
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("div", _hoisted_7, [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, null, 8, ["onRegister"])
      ]),
      createBaseVNode("div", _hoisted_8, [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTable2 }, null, 8, ["onRegister"])
      ]),
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTable1 }, null, 8, ["onRegister"])
      ])
    ])
  ]);
}
var ResizeParentHeightTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ResizeParentHeightTable as default };
