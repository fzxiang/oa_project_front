import { _ as _sfc_main$1 } from "./index.88aef629.js";
import { f as getDeptList } from "./system.2f89ff42.js";
import { _ as _export_sfc } from "./index.4f9aa98a.js";
import { B as defineComponent, r as ref, $ as onMounted, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode } from "./vendor.7c0ada15.js";
import "./useContextMenu.68fd912c.js";
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
