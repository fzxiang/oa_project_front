import { B as BasicTable } from "./TableImg.bc6c0750.js";
import "./BasicForm.eb2543c0.js";
import { u as useTable } from "./useTable.0b1bc63b.js";
import { getBasicColumns, getFormConfig } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.b1bccd81.js";
import { _ as _export_sfc } from "./index.4f9aa98a.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.b6913949.js";
import "./index.bd49f656.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.6ae6f6a6.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.87958aba.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.7e8d3870.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.84089b0f.js";
import "./base64Conver.08b9f4ec.js";
import "./index.629676d8.js";
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
