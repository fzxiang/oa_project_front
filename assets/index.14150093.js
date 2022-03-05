import { d as defineComponent, Q as ref, w as watch, a7 as nextTick, A as cloneDeep, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, S as withDirectives, T as vShow, f as createVNode, b as unref, e as withCtx, aj as createTextVNode, W as toDisplayString } from "./vendor.faf2de98.js";
import _sfc_main$1 from "./DetailModal.a63293ee.js";
import { B as BasicTable } from "./TableImg.4fe8ab4a.js";
import { T as TableAction } from "./BasicForm.5721ba67.js";
import { u as useTable } from "./useTable.d5f00e4c.js";
import { b as useModal } from "./index.54165f05.js";
import { av as defHttp, a as useI18n, aB as useErrorLogStore } from "./index.ea7eac1d.js";
import { getColumns } from "./data.aefd6cb3.js";
import "./index.e74e75f2.js";
/* empty css                  */import "./index.54e5dd4b.js";
import "./useRootSetting.c14ffa63.js";
import "./useAttrs.d4bdb35c.js";
import "./useDescription.28ed4304.js";
/* empty css                  *//* empty css                 */import "./useForm.0209ee0f.js";
import "./index.b9e9b22c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.fd09079c.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.357026dd.js";
import "./useTabs.933caa4a.js";
import "./uuid.2b29000c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.fcfce53a.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.b023b642.js";
import "./download.3d627ea1.js";
import "./base64Conver.08b9f4ec.js";
import "./index.a71380d8.js";
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
