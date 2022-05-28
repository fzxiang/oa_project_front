import { B as BasicTable } from "./TableImg.b3bfb55f.js";
import { T as TableAction } from "./BasicForm.729218be.js";
import { u as useTable } from "./useTable.c7d6498f.js";
import { d as deleteUserApi, g as getAllUserApi, r as resetPasswordApi } from "./system.d6046d4d.js";
import { a as PageWrapper } from "./index.7b4aaf5b.js";
import { b as useModal } from "./index.19462b5e.js";
import { u as useDrawer } from "./index.f0749915.js";
import { A as AccountModal, c as columns, s as searchFormSchema } from "./AccountModal.0f9f20ca.js";
import { _ as _export_sfc, t as useGo } from "./index.6c404263.js";
import AccountDrawer from "./AccountDrawer.288546d7.js";
import { d as defineComponent, Q as ref, $ as reactive, O as computed, a6 as onMounted, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.58aadad1.js";
import "./index.a3d18deb.js";
import "./useRootSetting.aff873bd.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.a730a0f8.js";
import "./useTabs.c67c8382.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.705b4bcb.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.616f0251.js";
import "./download.64bdccba.js";
import "./base64Conver.08b9f4ec.js";
import "./index.a5f32e74.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.f0d311eb.js";
/* empty css                 */import "./index.416e9c12.js";
import "./useContextMenu.5a2f652f.js";
import "./shop.de4dcbf1.js";
const _sfc_main = defineComponent({
  name: "AccountManagement",
  components: { BasicTable, PageWrapper, AccountModal, TableAction, AccountDrawer },
  setup() {
    const go = useGo();
    const [registerModal, { openModal }] = useModal();
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
      title: "\u8D26\u53F7\u5217\u8868",
      dataSource: computed(() => dataSource.data),
      loading,
      rowKey: "user_id",
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      handleSearchInfoFn,
      actionColumn: {
        width: 180,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    function handleCreate() {
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
      const params = {
        uId: record.user_id
      };
      await deleteUserApi(params);
      handleGetList().then(() => {
      });
    }
    async function handleGetList() {
      loading.value = true;
      const res = await getAllUserApi();
      dataSource.data = res;
      dataSource.origin = res;
      loading.value = false;
    }
    function handleSearchInfoFn(params) {
      if (params.nickname) {
        const filter = dataSource.origin.filter((item) => {
          return item.nickname === params.nickname;
        });
        dataSource.data = [...filter];
      } else {
        handleGetList().then(() => {
        });
      }
      return params;
    }
    function handleSuccess({}) {
      handleGetList().then(() => {
      });
    }
    function handlePermission(record) {
      openDrawer(true, record);
    }
    async function handleRestAccount(record) {
      loading.value = true;
      const params = { uId: record.user_id };
      await resetPasswordApi(params);
      loading.value = false;
    }
    onMounted(() => {
      handleGetList().then(() => {
      });
    });
    function handleView(record) {
      go("/system/account_detail/" + record.id);
    }
    return {
      registerDrawer,
      handleRestAccount,
      registerTable,
      registerModal,
      handlePermission,
      handleSearchInfoFn,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      handleView
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u65B0\u589E\u8D26\u53F7");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_AccountModal = resolveComponent("AccountModal");
  const _component_AccountDrawer = resolveComponent("AccountDrawer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    dense: "",
    contentFullHeight: "",
    fixedHeight: "",
    contentClass: "flex"
  }, {
    default: withCtx(() => [
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
                icon: "ant-design:safety-certificate-outline",
                tooltip: "\u6743\u9650",
                color: "success",
                onClick: _ctx.handlePermission.bind(null, record)
              },
              {
                icon: "ant-design:key-outlined",
                tooltip: "\u91CD\u7F6E\u5BC6\u7801",
                color: "warning",
                popConfirm: {
                  title: "\u662F\u5426\u91CD\u7F6E\u8BE5\u8D26\u6237\u5BC6\u7801\uFF1F",
                  confirm: _ctx.handleRestAccount.bind(null, record)
                }
              },
              {
                icon: "ant-design:delete-outlined",
                color: "error",
                tooltip: "\u5220\u9664\u6B64\u8D26\u53F7",
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
      createVNode(_component_AccountModal, {
        onRegister: _ctx.registerModal,
        onSuccess: _ctx.handleSuccess
      }, null, 8, ["onRegister", "onSuccess"]),
      createVNode(_component_AccountDrawer, {
        onRegister: _ctx.registerDrawer,
        onSuccess: _ctx.handleSuccess
      }, null, 8, ["onRegister", "onSuccess"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
