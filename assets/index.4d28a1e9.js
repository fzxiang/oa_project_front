import { d as defineComponent, Q as ref, w as watch, a7 as nextTick, A as cloneDeep, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, S as withDirectives, T as vShow, f as createVNode, b as unref, e as withCtx, aj as createTextVNode, W as toDisplayString } from "./vendor.faf2de98.js";
import _sfc_main$1 from "./DetailModal.0a9f6137.js";
import { B as BasicTable } from "./TableImg.7bc53a91.js";
import { T as TableAction } from "./BasicForm.bba6a6c9.js";
import { u as useTable } from "./useTable.5b293240.js";
import { b as useModal } from "./index.70d953ef.js";
import { av as defHttp, a as useI18n, aB as useErrorLogStore } from "./index.4dc0081b.js";
import { getColumns } from "./data.8bc7ccd4.js";
import "./index.7f880867.js";
/* empty css                  */import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
import "./useAttrs.d4bdb35c.js";
import "./useDescription.898d9aa7.js";
/* empty css                  *//* empty css                 */import "./useForm.89bb8bd3.js";
import "./index.5130582f.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.3baa48d8.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6cf7b264.js";
import "./useTabs.6f065f0a.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.ab6708c9.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.a55d30ed.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9f696d.js";
const fireErrorApi = () => defHttp.get({ url: "/error" });
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const rowInfo = ref();
    const imgList = ref([]);
    const { t } = useI18n();
    const errorLogStore = useErrorLogStore();
    const [register, { setTableData }] = useTable({
      title: t("sys.errorLog.tableTitle"),
      columns: getColumns(),
      actionColumn: {
        width: 80,
        title: "Action",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    const [registerModal, { openModal }] = useModal();
    watch(() => errorLogStore.getErrorLogInfoList, (list) => {
      nextTick(() => {
        setTableData(cloneDeep(list));
      });
    }, {
      immediate: true
    });
    function handleDetail(row) {
      rowInfo.value = row;
      openModal(true);
    }
    function fireVueError() {
      throw new Error("fire vue error!");
    }
    function fireResourceError() {
      imgList.value.push(`${new Date().getTime()}.png`);
    }
    async function fireAjaxError() {
      await fireErrorApi();
    }
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(imgList.value, (src) => {
          return withDirectives((openBlock(), createElementBlock("img", {
            key: src,
            src
          }, null, 8, _hoisted_2)), [
            [vShow, false]
          ]);
        }), 128)),
        createVNode(_sfc_main$1, {
          info: rowInfo.value,
          onRegister: unref(registerModal)
        }, null, 8, ["info", "onRegister"]),
        createVNode(unref(BasicTable), {
          onRegister: unref(register),
          class: "error-handle-table"
        }, {
          toolbar: withCtx(() => [
            createVNode(_component_a_button, {
              onClick: fireVueError,
              type: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("sys.errorLog.fireVueError")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              onClick: fireResourceError,
              type: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("sys.errorLog.fireResourceError")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              onClick: fireAjaxError,
              type: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("sys.errorLog.fireAjaxError")), 1)
              ]),
              _: 1
            })
          ]),
          action: withCtx(({ record }) => [
            createVNode(unref(TableAction), {
              actions: [
                { label: unref(t)("sys.errorLog.tableActionDesc"), onClick: handleDetail.bind(null, record) }
              ]
            }, null, 8, ["actions"])
          ]),
          _: 1
        }, 8, ["onRegister"])
      ]);
    };
  }
});
export { _sfc_main as default };
