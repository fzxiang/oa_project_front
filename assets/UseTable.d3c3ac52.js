import { B as BasicTable } from "./TableImg.7bc53a91.js";
import "./BasicForm.bba6a6c9.js";
import { u as useTable } from "./useTable.5b293240.js";
import { getBasicColumns, getBasicShortColumns } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc, F as useMessage } from "./index.4dc0081b.js";
import { d as demoListApi } from "./table.19ca2dc9.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.89bb8bd3.js";
import "./index.5130582f.js";
import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.3baa48d8.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6cf7b264.js";
import "./useTabs.6f065f0a.js";
import "./uuid.2b29000c.js";
import "./index.70d953ef.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.ab6708c9.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.a55d30ed.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9f696d.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const { createMessage } = useMessage();
    function onChange() {
      console.log("onChange", arguments);
    }
    const [
      registerTable,
      {
        setLoading,
        setColumns,
        getColumns,
        getDataSource,
        getRawDataSource,
        reload,
        getPaginationRef,
        setPagination,
        getSelectRows,
        getSelectRowKeys,
        setSelectedRowKeys,
        clearSelectedRowKeys
      }
    ] = useTable({
      canResize: true,
      title: "useTable\u793A\u4F8B",
      titleHelpMessage: "\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",
      api: demoListApi,
      columns: getBasicColumns(),
      defSort: {
        field: "name",
        order: "ascend"
      },
      rowKey: "id",
      showTableSetting: true,
      onChange,
      rowSelection: {
        type: "checkbox"
      },
      onColumnsChange: (data) => {
        console.log("ColumnsChanged", data);
      }
    });
    function changeLoading() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1e3);
    }
    function changeColumns() {
      setColumns(getBasicShortColumns());
    }
    function reloadTable() {
      setColumns(getBasicColumns());
      reload({
        page: 1
      });
    }
    function getColumn() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getColumns());
    }
    function getTableData() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getDataSource());
    }
    function getTableRawData() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getRawDataSource());
    }
    function getPagination() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getPaginationRef());
    }
    function setPaginationInfo() {
      setPagination({
        current: 2
      });
      reload();
    }
    function getSelectRowList() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getSelectRows());
    }
    function getSelectRowKeyList() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getSelectRowKeys());
    }
    function setSelectedRowKeyList() {
      setSelectedRowKeys(["0", "1", "2"]);
    }
    function clearSelect() {
      clearSelectedRowKeys();
    }
    return {
      registerTable,
      changeLoading,
      changeColumns,
      reloadTable,
      getColumn,
      getTableData,
      getTableRawData,
      getPagination,
      setPaginationInfo,
      getSelectRowList,
      getSelectRowKeyList,
      setSelectedRowKeyList,
      clearSelect,
      onChange
    };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = { class: "mb-4" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5F00\u542Floading ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u66F4\u6539Columns ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6Columns ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u8868\u683C\u6570\u636E ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ");
const _hoisted_10 = { class: "mb-4" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u9009\u4E2D\u884C ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u9009\u4E2D\u884CKey ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u9009\u4E2D\u884C ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u6E05\u7A7A\u9009\u4E2D\u884C ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.reloadTable
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.changeLoading
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.changeColumns
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getColumn
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getTableData
      }, {
        default: withCtx(() => [
          _hoisted_7
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getTableRawData
      }, {
        default: withCtx(() => [
          _hoisted_8
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.setPaginationInfo
      }, {
        default: withCtx(() => [
          _hoisted_9
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    createBaseVNode("div", _hoisted_10, [
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getSelectRowList
      }, {
        default: withCtx(() => [
          _hoisted_11
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getSelectRowKeyList
      }, {
        default: withCtx(() => [
          _hoisted_12
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.setSelectedRowKeyList
      }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.clearSelect
      }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getPagination
      }, {
        default: withCtx(() => [
          _hoisted_15
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, null, 8, ["onRegister"])
  ]);
}
var UseTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { UseTable as default };
