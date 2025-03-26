import { B as BasicTable } from "./TableImg.7bc53a91.js";
import { T as TableAction } from "./BasicForm.bba6a6c9.js";
import { u as useTable } from "./useTable.5b293240.js";
import { a as PageWrapper } from "./index.5130582f.js";
import { getBasicColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.19ca2dc9.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.89bb8bd3.js";
import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6cf7b264.js";
import "./useTabs.6f065f0a.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./index.70d953ef.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.ab6708c9.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.a55d30ed.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9f696d.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.3baa48d8.js";
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction, PageWrapper },
  setup() {
    const [registerTable] = useTable({
      api: demoListApi,
      title: "\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",
      titleHelpMessage: ["\u5DF2\u542F\u7528expandRowByClick", "\u5DF2\u542F\u7528stopButtonPropagation"],
      columns: getBasicColumns(),
      rowKey: "id",
      canResize: false,
      expandRowByClick: true,
      actionColumn: {
        width: 160,
        title: "Action",
        slots: { customRender: "action" }
      }
    });
    function handleDelete(record) {
      console.log("\u70B9\u51FB\u4E86\u5220\u9664", record);
    }
    function handleOpen(record) {
      console.log("\u70B9\u51FB\u4E86\u542F\u7528", record);
    }
    return {
      registerTable,
      handleDelete,
      handleOpen
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u53EF\u5C55\u5F00\u8868\u683C",
    content: "\u4E0D\u53EF\u4E0Escroll\u5171\u7528\u3002TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
        expandedRowRender: withCtx(({ record }) => [
          createBaseVNode("span", null, "No: " + toDisplayString(record.no), 1)
        ]),
        action: withCtx(({ record }) => [
          createVNode(_component_TableAction, {
            stopButtonPropagation: "",
            actions: [
              {
                label: "\u5220\u9664",
                icon: "ic:outline-delete-outline",
                onClick: _ctx.handleDelete.bind(null, record)
              }
            ],
            dropDownActions: [
              {
                label: "\u542F\u7528",
                popConfirm: {
                  title: "\u662F\u5426\u542F\u7528\uFF1F",
                  confirm: _ctx.handleOpen.bind(null, record)
                }
              }
            ]
          }, null, 8, ["actions", "dropDownActions"])
        ]),
        _: 1
      }, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var ExpandTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ExpandTable as default };
