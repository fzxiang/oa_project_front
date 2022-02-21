import { C as CodeEditor, M as MODE, J as JsonPreview } from "./index.0ee75b92.js";
import { a as PageWrapper } from "./index.3ed09f6c.js";
import { B as defineComponent, bF as Radio, bn as Space, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, u as unref, v as Modal, A as h, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import { _ as _export_sfc } from "./index.9f6c9c50.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.ca4f2553.js";
const jsonData = '{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}';
const jsData = `
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `;
const htmlData = `
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `;
const _sfc_main = defineComponent({
  components: {
    CodeEditor,
    PageWrapper,
    RadioButton: Radio.Button,
    RadioGroup: Radio.Group,
    ASpace: Space
  },
  setup() {
    const modeValue = ref(MODE.JSON);
    const value = ref(jsonData);
    function handleModeChange(e) {
      const mode = e.target.value;
      if (mode === MODE.JSON) {
        value.value = jsonData;
        return;
      }
      if (mode === MODE.HTML) {
        value.value = htmlData;
        return;
      }
      if (mode === MODE.JS) {
        value.value = jsData;
        return;
      }
    }
    function showData() {
      if (unref(modeValue) === "application/json") {
        Modal.info({
          title: "\u7F16\u8F91\u5668\u5F53\u524D\u503C",
          content: h(JsonPreview, { data: JSON.parse(value.value) })
        });
      } else {
        Modal.info({ title: "\u7F16\u8F91\u5668\u5F53\u524D\u503C", content: value.value });
      }
    }
    return { value, modeValue, handleModeChange, showData };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u6570\u636E");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" json\u6570\u636E ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" html\u4EE3\u7801 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" javascript\u4EE3\u7801 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_RadioButton = resolveComponent("RadioButton");
  const _component_RadioGroup = resolveComponent("RadioGroup");
  const _component_a_space = resolveComponent("a-space");
  const _component_CodeEditor = resolveComponent("CodeEditor");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",
    contentFullHeight: "",
    fixedHeight: "",
    contentBackground: ""
  }, {
    extra: withCtx(() => [
      createVNode(_component_a_space, { size: "middle" }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            onClick: _ctx.showData,
            type: "primary"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_RadioGroup, {
            "button-style": "solid",
            value: _ctx.modeValue,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.modeValue = $event),
            onChange: _ctx.handleModeChange
          }, {
            default: withCtx(() => [
              createVNode(_component_RadioButton, { value: "application/json" }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              }),
              createVNode(_component_RadioButton, { value: "htmlmixed" }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }),
              createVNode(_component_RadioButton, { value: "javascript" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createVNode(_component_CodeEditor, {
        value: _ctx.value,
        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.value = $event),
        mode: _ctx.modeValue
      }, null, 8, ["value", "mode"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
