import { B as BasicTable } from "./TableImg.d9009f44.js";
import { T as TableAction } from "./BasicForm.c8f30ddc.js";
import { u as useTable } from "./useTable.765ceee1.js";
import { a as getAllRoleApi, c as deleteRoleApi } from "./system.d5ef6f57.js";
import { u as useDrawer } from "./index.b67c04b9.js";
import { R as RoleDrawer, c as columns, s as searchFormSchema } from "./RoleDrawer.8e7fbbfc.js";
import { _ as _export_sfc } from "./index.d5751037.js";
import { B as defineComponent, r as ref, Q as reactive, j as computed, $ as onMounted, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.29a2ef95.js";
import "./index.d1dd7909.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.66c00070.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.e350f83b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.9d22f67b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.cca74ae9.js";
import "./base64Conver.08b9f4ec.js";
import "./index.ffce29af.js";
/* empty css                 */import "./index.6f61d9c1.js";
import "./useContextMenu.85c3f043.js";
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
