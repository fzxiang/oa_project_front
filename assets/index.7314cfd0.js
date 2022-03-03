import { D as Description } from "./index.5a20b0ff.js";
import { a as PageWrapper } from "./index.c0604aaf.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import { u as useDescription } from "./useDescription.9ded5509.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  */import "./index.e23996e1.js";
import "./useRootSetting.af8c12e8.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e1900874.js";
const mockData = {
  username: "test",
  nickName: "VB",
  age: "123",
  phone: "15695909xxx",
  email: "190848757@qq.com",
  addr: "\u53A6\u95E8\u5E02\u601D\u660E\u533A",
  sex: "\u7537",
  certy: "3504256199xxxxxxxxx",
  tag: "orange"
};
const schema = [
  {
    field: "username",
    label: "\u7528\u6237\u540D"
  },
  {
    field: "nickName",
    label: "\u6635\u79F0",
    render: (curVal, data) => {
      return `${data.username}-${curVal}`;
    }
  },
  {
    field: "phone",
    label: "\u8054\u7CFB\u7535\u8BDD"
  },
  {
    field: "email",
    label: "\u90AE\u7BB1"
  },
  {
    field: "addr",
    label: "\u5730\u5740"
  }
];
const _sfc_main = defineComponent({
  components: { Description, PageWrapper },
  setup() {
    const [register] = useDescription({
      title: "useDescription",
      data: mockData,
      schema
    });
    const [register1] = useDescription({
      title: "\u65E0\u8FB9\u6846",
      bordered: false,
      data: mockData,
      schema
    });
    return { mockData, schema, register, register1 };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Description, {
        title: "\u57FA\u7840\u793A\u4F8B",
        collapseOptions: { canExpand: true, helpMessage: "help me" },
        column: 3,
        data: _ctx.mockData,
        schema: _ctx.schema
      }, null, 8, ["data", "schema"]),
      createVNode(_component_Description, {
        class: "mt-4",
        title: "\u5782\u76F4\u793A\u4F8B",
        layout: "vertical",
        collapseOptions: { canExpand: true, helpMessage: "help me" },
        column: 2,
        data: _ctx.mockData,
        schema: _ctx.schema
      }, null, 8, ["data", "schema"]),
      createVNode(_component_Description, {
        onRegister: _ctx.register,
        class: "mt-4"
      }, null, 8, ["onRegister"]),
      createVNode(_component_Description, {
        onRegister: _ctx.register1,
        class: "mt-4"
      }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
