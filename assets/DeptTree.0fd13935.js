import { _ as _sfc_main$1 } from "./index.b750c649.js";
import { f as getDeptList } from "./system.4e2a4c1d.js";
import { _ as _export_sfc } from "./index.deb64523.js";
import { d as defineComponent, Q as ref, a6 as onMounted, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode } from "./vendor.faf2de98.js";
import "./index.96780b6a.js";
import "./useRootSetting.2926bd9b.js";
import "./useContextMenu.16ef2722.js";
/* empty css                 */const _sfc_main = defineComponent({
  name: "DeptTree",
  components: { BasicTree: _sfc_main$1 },
  emits: ["select"],
  setup(_, { emit }) {
    const treeData = ref([]);
    async function fetch() {
      treeData.value = await getDeptList();
    }
    function handleSelect(keys) {
      emit("select", keys[0]);
    }
    onMounted(() => {
      fetch();
    });
    return { treeData, handleSelect };
  }
});
const _hoisted_1 = { class: "m-4 mr-0 overflow-hidden bg-white" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTree = resolveComponent("BasicTree");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTree, {
      title: "\u90E8\u95E8\u5217\u8868",
      toolbar: "",
      search: "",
      clickRowToExpand: false,
      treeData: _ctx.treeData,
      fieldNames: { key: "id", title: "deptName" },
      onSelect: _ctx.handleSelect
    }, null, 8, ["treeData", "onSelect"])
  ]);
}
var DeptTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { DeptTree as default };
