import { B as BasicTable, T as TableImg } from "./TableImg.2c231b5c.js";
import "./BasicForm.46555c9a.js";
import { u as useTable } from "./useTable.21a73546.js";
import { B as defineComponent, bm as Tag, ce as Avatar, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, af as createTextVNode, K as toDisplayString } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                  */import { d as demoListApi } from "./table.311c1612.js";
import { _ as _export_sfc } from "./index.f009a4b5.js";
/* empty css                  *//* empty css                 */import "./useForm.cd73db2a.js";
import "./index.4cdf6aa4.js";
/* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5a701648.js";
/* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./index.05bba50f.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.5cb3be60.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.a6ef3701.js";
import "./base64Conver.08b9f4ec.js";
import "./index.097f30e7.js";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    slots: { customRender: "id" }
  },
  {
    title: "\u5934\u50CF",
    dataIndex: "avatar",
    width: 100,
    slots: { customRender: "avatar" }
  },
  {
    title: "\u5206\u7C7B",
    dataIndex: "category",
    width: 80,
    align: "center",
    defaultHidden: true,
    slots: { customRender: "category" }
  },
  {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 120
  },
  {
    title: "\u56FE\u7247\u5217\u88681",
    dataIndex: "imgArr",
    helpMessage: ["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868", "\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D", "\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],
    width: 140,
    slots: { customRender: "img" }
  },
  {
    title: "\u7167\u7247\u5217\u88682",
    dataIndex: "imgs",
    width: 160,
    slots: { customRender: "imgs" }
  },
  {
    title: "\u5730\u5740",
    dataIndex: "address"
  },
  {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    slots: { customRender: "no" }
  },
  {
    title: "\u5F00\u59CB\u65F6\u95F4",
    dataIndex: "beginTime"
  },
  {
    title: "\u7ED3\u675F\u65F6\u95F4",
    dataIndex: "endTime"
  }
];
const _sfc_main = defineComponent({
  components: { BasicTable, TableImg, Tag, Avatar },
  setup() {
    const [registerTable] = useTable({
      title: "\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",
      titleHelpMessage: "\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",
      api: demoListApi,
      columns,
      bordered: true,
      showTableSetting: true
    });
    return {
      registerTable
    };
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_Avatar = resolveComponent("Avatar");
  const _component_TableImg = resolveComponent("TableImg");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      id: withCtx(({ record }) => [
        createTextVNode(" ID: " + toDisplayString(record.id), 1)
      ]),
      no: withCtx(({ record }) => [
        createVNode(_component_Tag, { color: "green" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(record.no), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      avatar: withCtx(({ record }) => [
        createVNode(_component_Avatar, {
          size: 60,
          src: record.avatar
        }, null, 8, ["src"])
      ]),
      img: withCtx(({ text }) => [
        createVNode(_component_TableImg, {
          size: 60,
          simpleShow: true,
          imgList: text
        }, null, 8, ["imgList"])
      ]),
      imgs: withCtx(({ text }) => [
        createVNode(_component_TableImg, {
          size: 60,
          imgList: text
        }, null, 8, ["imgList"])
      ]),
      category: withCtx(({ record }) => [
        createVNode(_component_Tag, { color: "green" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(record.no), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var CustomerCell = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CustomerCell as default };