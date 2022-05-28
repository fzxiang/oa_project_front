import { Q as QrCode } from "./index.549469b2.js";
import { H as CollapseContainer, K as LogoImg } from "./index.69692b74.js";
import { a as PageWrapper } from "./index.dfbcda7d.js";
import { _ as _export_sfc } from "./index.e7b2878b.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, b as unref, aj as createTextVNode, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
import "./download.0d4c5faf.js";
import "./base64Conver.08b9f4ec.js";
import "./useRootSetting.63072823.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.b40837c1.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const qrCodeUrl = "https://www.vvbin.cn";
const _sfc_main = defineComponent({
  components: { CollapseContainer, QrCode, PageWrapper },
  setup() {
    const qrRef = ref(null);
    const qrDiyRef = ref(null);
    function download() {
      const qrEl = unref(qrRef);
      if (!qrEl)
        return;
      qrEl.download("\u6587\u4EF6\u540D");
    }
    function downloadDiy() {
      const qrEl = unref(qrDiyRef);
      if (!qrEl)
        return;
      qrEl.download("Qrcode");
    }
    function onQrcodeDone({ ctx }) {
      if (ctx instanceof CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.font = '16px "\u5FAE\u8F6F\u96C5\u9ED1"';
        ctx.textBaseline = "bottom";
        ctx.textAlign = "center";
        ctx.fillText("\u4F60\u5E05\u4F60\u5148\u626B", 100, 195, 200);
      }
    }
    return {
      onQrcodeDone,
      qrCodeUrl,
      LogoImg,
      download,
      downloadDiy,
      qrRef,
      qrDiyRef
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-31db1ad4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex flex-wrap" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u4E0B\u8F7D ");
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "msg" }, "(\u5728\u7EBFlogo\u4F1A\u5BFC\u81F4\u56FE\u7247\u8DE8\u57DF\uFF0C\u9700\u8981\u4E0B\u8F7D\u56FE\u7247\u9700\u8981\u81EA\u884C\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898)", -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u4E0B\u8F7D ");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "msg" }, "\u8981\u8FDB\u884C\u6269\u5C55\u7ED8\u5236\u5219\u4E0D\u80FD\u5C06tag\u8BBE\u4E3Aimg", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QrCode = resolveComponent("QrCode");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u4E8C\u7EF4\u7801\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_CollapseContainer, {
          title: "\u57FA\u7840\u793A\u4F8B",
          canExpan: true,
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, { value: _ctx.qrCodeUrl }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u6E32\u67D3\u6210img\u6807\u7B7E\u793A\u4F8B",
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              tag: "img"
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u914D\u7F6E\u6837\u5F0F\u793A\u4F8B",
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              options: {
                color: { dark: "#55D187" }
              }
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u672C\u5730logo\u793A\u4F8B",
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              logo: _ctx.LogoImg
            }, null, 8, ["value", "logo"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u5728\u7EBFlogo\u793A\u4F8B",
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              logo: "https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",
              options: {
                color: { dark: "#55D187" }
              }
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "logo\u914D\u7F6E\u793A\u4F8B",
          class: "text-center mb-6 qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              logo: {
                src: "https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",
                logoSize: 0.2,
                borderSize: 0.05,
                borderRadius: 50,
                bgColor: "blue"
              }
            }, null, 8, ["value", "logo"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u4E0B\u8F7D\u793A\u4F8B",
          class: "text-center qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              ref: "qrRef",
              logo: _ctx.LogoImg
            }, null, 8, ["value", "logo"]),
            createVNode(_component_a_button, {
              class: "mb-2",
              type: "primary",
              onClick: _ctx.download
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }, 8, ["onClick"]),
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u914D\u7F6E\u5927\u5C0F\u793A\u4F8B",
          class: "text-center qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              width: 300
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_CollapseContainer, {
          title: "\u6269\u5C55\u7ED8\u5236\u793A\u4F8B",
          class: "text-center qrcode-demo-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_QrCode, {
              value: _ctx.qrCodeUrl,
              width: 200,
              options: { margin: 5 },
              ref: "qrDiyRef",
              logo: _ctx.LogoImg,
              onDone: _ctx.onQrcodeDone
            }, null, 8, ["value", "logo", "onDone"]),
            createVNode(_component_a_button, {
              class: "mb-2",
              type: "primary",
              onClick: _ctx.downloadDiy
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }, 8, ["onClick"]),
            _hoisted_5
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31db1ad4"]]);
export { index as default };
