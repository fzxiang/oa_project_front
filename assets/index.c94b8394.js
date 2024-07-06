import { B as BasicTable } from "./TableImg.b7ec07e4.js";
import { T as TableAction } from "./BasicForm.da1c9705.js";
import { u as useTable } from "./useTable.cb94a7b3.js";
import { a as getAllRoleApi, c as deleteRoleApi } from "./system.3fafde53.js";
import { u as useDrawer } from "./index.c566770d.js";
import { R as RoleDrawer, c as columns, s as searchFormSchema } from "./RoleDrawer.8308d970.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
import { d as defineComponent, Q as ref, $ as reactive, O as computed, a6 as onMounted, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.47d181cc.js";
import "./index.089391a0.js";
import "./index.55d49599.js";
import "./useRootSetting.3e9429c5.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
import "./uuid.2b29000c.js";
import "./index.6184b776.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.94a33a2b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.cff27d3a.js";
import "./download.4c317275.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fba49a50.js";
/* empty css                 */import "./index.5d7e6058.js";
import "./useContextMenu.79cbbf3c.js";
const _sfc_main = defineComponent({
  name: "RoleManagement",
  components: { BasicTable, RoleDrawer, TableAction },
  setup() {
    const [registerDrawer, { openDrawer }] = useDrawer();
    const loading = ref(false);
    const dataSource = reactive({
      data: [],
      origin: []
    });
    const [
      registerTable,
      {}
    ] = useTable({
      title: "\u89D2\u8272\u5217\u8868",
      loading,
      dataSource: computed(() => dataSource.data),
      handleSearchInfoFn,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 120,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: "right"
      }
    });
    function handleCreate() {
      openDrawer(true, {
        isUpdate: false
      });
    }
    function handleEdit(record) {
      openDrawer(true, {
        record,
        isUpdate: true
      });
    }
    function handleSearchInfoFn(params) {
      console.log("handleSearchInfoFn", params);
      if (params.shop_id) {
        const filter = dataSource.origin.filter((item) => {
          return item.role_name === params.role_name;
        });
        dataSource.data = [...filter];
      } else {
        handleGetList().then(() => {
        });
      }
      return params;
    }
    async function handleDelete(record) {
      const params = {
        id: record.id
      };
      await deleteRoleApi(params);
      handleGetList().then(() => {
      });
    }
    async function handleGetList() {
      loading.value = true;
      const res = await getAllRoleApi();
      dataSource.data = res;
      dataSource.origin = res;
      loading.value = false;
    }
    function handleSuccess({}) {
      handleGetList().then(() => {
      });
    }
    onMounted(() => {
      handleGetList().then(() => {
      });
    });
    return {
      registerTable,
      registerDrawer,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u89D2\u8272 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_RoleDrawer = resolveComponent("RoleDrawer");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.handleCreate
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              icon: "clarity:note-edit-line",
              onClick: _ctx.handleEdit.bind(null, record)
            },
            {
              icon: "ant-design:delete-outlined",
              color: "error",
              popConfirm: {
                title: "\u662F\u5426\u786E\u8BA4\u5220\u9664",
                confirm: _ctx.handleDelete.bind(null, record)
              }
            }
          ]
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister"]),
    createVNode(_component_RoleDrawer, {
      onRegister: _ctx.registerDrawer,
      onSuccess: _ctx.handleSuccess
    }, null, 8, ["onRegister", "onSuccess"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
