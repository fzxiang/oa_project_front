import { B as BasicTable } from "./TableImg.2be721cb.js";
import { T as TableAction } from "./BasicForm.c855460d.js";
import { u as useTable } from "./useTable.7fa2f369.js";
import { S as ShopModal, c as columns, s as searchFormSchema } from "./ShopModal.d04358f9.js";
import { s as shopListApi, d as deleteShopApi } from "./shop.9db90696.js";
import { b as useModal } from "./index.0630f24d.js";
import { d as defineComponent, $ as reactive, Q as ref, O as computed, a6 as onMounted, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
import { _ as _export_sfc } from "./index.582c447f.js";
/* empty css                  *//* empty css                 */import "./useForm.bee31774.js";
import "./index.45878fb6.js";
import "./index.999485f7.js";
import "./useRootSetting.9c256099.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.37926036.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.8117a5ed.js";
import "./useTabs.b2e3f296.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.010d7b23.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.6f7831bb.js";
import "./download.d7ccd9c3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.59c4b066.js";
const _sfc_main = defineComponent({
  components: { TableAction, ShopModal, BasicTable },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const dataSource = reactive({
      data: [],
      origin: []
    });
    const loading = ref(false);
    const [registerTable, { updateTableDataRecord }] = useTable({
      title: "\u5E97\u94FA\u5217\u8868",
      columns,
      dataSource: computed(() => dataSource.data),
      useSearchForm: true,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      loading,
      showTableSetting: true,
      tableSetting: { fullScreen: true, redo: false },
      showIndexColumn: false,
      rowKey: "shop_id",
      handleSearchInfoFn,
      actionColumn: {
        width: 120,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    function handleSearchInfoFn(params) {
      console.log("handleSearchInfoFn", params);
      if (params.shop_id) {
        const filter = dataSource.origin.filter((item) => {
          return item.shop_id === params.shop_id;
        });
        dataSource.data = [...filter];
      } else {
        handleGetShopList().then(() => {
        });
      }
      return params;
    }
    function handleCreate() {
      console.log("\u65B0\u589E\u5E97\u94FA");
      openModal(true, {
        isUpdate: false
      });
    }
    function handleEdit(record) {
      openModal(true, {
        record,
        isUpdate: true
      });
    }
    async function handleDelete(record) {
      const { shop_id } = record;
      await deleteShopApi({ shop_id });
      await handleGetShopList();
      handleGetShopList().then(() => {
      });
    }
    function handleSuccess({ isUpdate, values }) {
      if (isUpdate) {
        updateTableDataRecord(values.id, values);
      } else {
        handleGetShopList().then(() => {
        });
      }
    }
    async function handleGetShopList() {
      loading.value = true;
      const res = await shopListApi();
      dataSource.data = res;
      dataSource.origin = res;
      loading.value = false;
    }
    onMounted(() => {
      handleGetShopList().then(() => {
      });
    });
    return {
      dataSource,
      registerModal,
      handleCreate,
      handleSuccess,
      registerTable,
      handleEdit,
      handleDelete
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u65B0\u589E\u5E97\u94FA");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_ShopModal = resolveComponent("ShopModal");
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
              tooltip: "\u7F16\u8F91\u7528\u6237\u8D44\u6599",
              onClick: _ctx.handleEdit.bind(null, record)
            },
            {
              icon: "ant-design:delete-outlined",
              color: "error",
              tooltip: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5546\u5E97\u5417\uFF1F\u6E05\u8C28\u614E\u64CD\u4F5C",
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
    createVNode(_component_ShopModal, {
      onRegister: _ctx.registerModal,
      onSuccess: _ctx.handleSuccess
    }, null, 8, ["onRegister", "onSuccess"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
