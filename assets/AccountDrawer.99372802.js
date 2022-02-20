import { B as BasicDrawer, a as useDrawerInner } from "./index.d4acf66f.js";
import { _ as _sfc_main$1 } from "./index.65288976.js";
import { _ as _export_sfc, aH as routeModuleList } from "./index.400d2de0.js";
import { b as getUserPowerApi, u as updateUserPowerApi } from "./system.ae87e03d.js";
import { s as shopListApi } from "./shop.eab2d2a7.js";
import { B as defineComponent, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, a5 as mergeProps } from "./vendor.7c0ada15.js";
/* empty css                 */import "./useContextMenu.e37b1fbd.js";
/* empty css                 */const _sfc_main = defineComponent({
  name: "AccountDrawer",
  components: { BasicDrawer, BasicTree: _sfc_main$1 },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const treeData = ref([]);
    const treeValue = ref([]);
    const title = ref("\u6743\u9650\u5206\u914D");
    let collect = [];
    const record = ref({});
    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      setDrawerProps({ confirmLoading: false });
      title.value = "\u6743\u9650\u5206\u914D: " + data.nickname;
      collect = [];
      const shopData = await shopListApi();
      treeData.value = shopData.map((item) => {
        collect.push({
          shop_id: `${item.shop_id}`,
          power: []
        });
        return {
          id: `${item.shop_id}`,
          title: item.shop_name,
          children: getMenuHandle(routeModuleList, `${item.shop_id}`)
        };
      });
      treeValue.value = await getUserPower(data.user_id);
      record.value = data;
    });
    function getMenuHandle(data, pid) {
      return data.map((item) => {
        return {
          id: pid + "~" + item.meta.menu,
          title: item.meta.title,
          children: item.children ? getMenuHandle(item.children, pid) : []
        };
      });
    }
    async function getUserPower(user_id) {
      const res = await getUserPowerApi({ user_id });
      const arr = [];
      res.forEach((item) => {
        item.menu.forEach((key) => {
          arr.push(`${item.shop}~${key}`);
        });
      });
      return arr;
    }
    async function handleSubmit() {
      var _a;
      try {
        setDrawerProps({ confirmLoading: true });
        treeValue.value.forEach((item) => {
          const match = item.match(/(\S+)~(\S+)/i);
          if (match) {
            const { power } = collect.find((item2) => {
              return item2.shop_id === match[1];
            });
            power.push(match[2]);
          }
        });
        const params = {
          uId: (_a = record.value) == null ? void 0 : _a.user_id,
          powerJson: collect
        };
        await updateUserPowerApi(params);
        closeDrawer();
        emit("success", { values: {} });
      } finally {
        setDrawerProps({ confirmLoading: false });
      }
    }
    return {
      title,
      treeValue,
      registerDrawer,
      handleSubmit,
      treeData,
      collect
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTree = resolveComponent("BasicTree");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.registerDrawer,
    showFooter: "",
    title: _ctx.title,
    width: "508px",
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicTree, {
        value: _ctx.treeValue,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.treeValue = $event),
        treeData: _ctx.treeData,
        fieldNames: { title: "title", key: "id" },
        checkable: "",
        toolbars: ""
      }, null, 8, ["value", "treeData"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
var AccountDrawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AccountDrawer as default };
