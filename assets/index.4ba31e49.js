import { B as BasicTable } from "./TableImg.1af87d3c.js";
import { T as TableAction } from "./BasicForm.b32b4a29.js";
import { u as useTable } from "./useTable.30f826b3.js";
import { k as getAccountList } from "./system.bb06f4f2.js";
import { a as PageWrapper } from "./index.15a1f963.js";
import DeptTree from "./DeptTree.e88eb60f.js";
import { b as useModal } from "./index.14305a79.js";
import { A as AccountModal, c as columns, s as searchFormSchema } from "./AccountModal.65965255.js";
import { _ as _export_sfc, t as useGo } from "./index.59040ad2.js";
import { d as defineComponent, $ as reactive, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.6a32fff8.js";
import "./index.32a28c82.js";
import "./useRootSetting.fdc681cf.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.5e04722b.js";
import "./useTabs.a7fba09a.js";
import "./uuid.2b29000c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.cc11ba34.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.22e9b79c.js";
import "./download.b28cb32a.js";
import "./base64Conver.08b9f4ec.js";
import "./index.e8738bd1.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.537cfdd7.js";
import "./index.50679046.js";
import "./useContextMenu.706fa668.js";
const _sfc_main = defineComponent({
  name: "AccountManagement",
  components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction },
  setup() {
    const go = useGo();
    const [registerModal, { openModal }] = useModal();
    const searchInfo = reactive({});
    const [registerTable, { reload, updateTableDataRecord }] = useTable({
      title: "\u8D26\u53F7\u5217\u8868",
      api: getAccountList,
      rowKey: "id",
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      handleSearchInfoFn(info) {
        console.log("handleSearchInfoFn", info);
        return info;
      },
      actionColumn: {
        width: 120,
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
      console.log(record);
      openModal(true, {
        record,
        isUpdate: true
      });
    }
    function handleDelete(record) {
      console.log(record);
    }
    function handleSuccess({ isUpdate, values }) {
      if (isUpdate) {
        const result = updateTableDataRecord(values.id, values);
        console.log(result);
      } else {
        reload();
      }
    }
    function handleSelect(deptId = "") {
      searchInfo.deptId = deptId;
      reload();
    }
    function handleView(record) {
      go("/system/account_detail/" + record.id);
    }
    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      handleSelect,
      handleView,
      searchInfo
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u65B0\u589E\u8D26\u53F7");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DeptTree = resolveComponent("DeptTree");
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_AccountModal = resolveComponent("AccountModal");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    dense: "",
    contentFullHeight: "",
    fixedHeight: "",
    contentClass: "flex"
  }, {
    default: withCtx(() => [
      createVNode(_component_DeptTree, {
        class: "w-1/4 xl:w-1/5",
        onSelect: _ctx.handleSelect
      }, null, 8, ["onSelect"]),
      createVNode(_component_BasicTable, {
        onRegister: _ctx.registerTable,
        class: "w-3/4 xl:w-4/5",
        searchInfo: _ctx.searchInfo
      }, {
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
                icon: "clarity:info-standard-line",
                tooltip: "\u67E5\u770B\u7528\u6237\u8BE6\u60C5",
                onClick: _ctx.handleView.bind(null, record)
              },
              {
                icon: "clarity:note-edit-line",
                tooltip: "\u7F16\u8F91\u7528\u6237\u8D44\u6599",
                onClick: _ctx.handleEdit.bind(null, record)
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
      }, 8, ["onRegister", "searchInfo"]),
      createVNode(_component_AccountModal, {
        onRegister: _ctx.registerModal,
        onSuccess: _ctx.handleSuccess
      }, null, 8, ["onRegister", "onSuccess"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
