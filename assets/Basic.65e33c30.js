import { B as BasicTable } from "./TableImg.1af87d3c.js";
import "./BasicForm.b32b4a29.js";
import { getBasicColumns, getBasicData } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc } from "./index.59040ad2.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.6a32fff8.js";
import "./index.15a1f963.js";
import "./index.32a28c82.js";
import "./useRootSetting.fdc681cf.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.537cfdd7.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.5e04722b.js";
import "./useTabs.a7fba09a.js";
import "./uuid.2b29000c.js";
import "./index.14305a79.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.cc11ba34.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.22e9b79c.js";
import "./download.b28cb32a.js";
import "./base64Conver.08b9f4ec.js";
import "./index.e8738bd1.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const canResize = ref(false);
    const loading = ref(false);
    const striped = ref(true);
    const border = ref(true);
    const pagination = ref(false);
    function toggleCanResize() {
      canResize.value = !canResize.value;
    }
    function toggleStriped() {
      striped.value = !striped.value;
    }
    function toggleLoading() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        pagination.value = { pageSize: 20 };
      }, 3e3);
    }
    function toggleBorder() {
      border.value = !border.value;
    }
    function handleColumnChange(data) {
      console.log("ColumnChanged", data);
    }
    return {
      columns: getBasicColumns(),
      data: getBasicData(),
      canResize,
      loading,
      striped,
      border,
      toggleStriped,
      toggleCanResize,
      toggleLoading,
      toggleBorder,
      pagination,
      handleColumnChange
    };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5F00\u542Floading ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, {
      title: "\u57FA\u7840\u793A\u4F8B",
      titleHelpMessage: "\u6E29\u99A8\u63D0\u9192",
      columns: _ctx.columns,
      dataSource: _ctx.data,
      canResize: _ctx.canResize,
      loading: _ctx.loading,
      striped: _ctx.striped,
      bordered: _ctx.border,
      showTableSetting: "",
      pagination: _ctx.pagination,
      onColumnsChange: _ctx.handleColumnChange
    }, {
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.toggleCanResize
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(!_ctx.canResize ? "\u81EA\u9002\u5E94\u9AD8\u5EA6" : "\u53D6\u6D88\u81EA\u9002\u5E94"), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.toggleBorder
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(!_ctx.border ? "\u663E\u793A\u8FB9\u6846" : "\u9690\u85CF\u8FB9\u6846"), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.toggleLoading
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.toggleStriped
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(!_ctx.striped ? "\u663E\u793A\u6591\u9A6C\u7EB9" : "\u9690\u85CF\u6591\u9A6C\u7EB9"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }, 8, ["columns", "dataSource", "canResize", "loading", "striped", "bordered", "pagination", "onColumnsChange"])
  ]);
}
var Basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Basic as default };
