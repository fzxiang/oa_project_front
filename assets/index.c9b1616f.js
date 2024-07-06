import { d as defineComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, b as unref, W as toDisplayString, f as createVNode, aj as createTextVNode, N as h, bo as Tag } from "./vendor.faf2de98.js";
/* empty css                 */import { a as PageWrapper } from "./index.089391a0.js";
import { D as Description } from "./index.f4c74125.js";
import { G as GITHUB_URL, D as DOC_URL, S as SITE_URL } from "./siteSetting.c485f07c.js";
import { u as useDescription } from "./useDescription.259b0826.js";
import "./index.7a39a7ac.js";
import "./index.55d49599.js";
import "./useRootSetting.3e9429c5.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
/* empty css                  */import "./useAttrs.d4bdb35c.js";
const _hoisted_1 = { class: "flex justify-between items-center" };
const _hoisted_2 = { class: "flex-1" };
const _hoisted_3 = ["href"];
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u662F\u4E00\u4E2A\u57FA\u4E8EVue3.0\u3001Vite\u3001 Ant-Design-Vue \u3001TypeScript \u7684\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u76EE\u6807\u662F\u4E3A\u4E2D\u5927\u578B\u9879\u76EE\u5F00\u53D1,\u63D0\u4F9B\u73B0\u6210\u7684\u5F00\u7BB1\u89E3\u51B3\u65B9\u6848\u53CA\u4E30\u5BCC\u7684\u793A\u4F8B,\u539F\u5219\u4E0A\u4E0D\u4F1A\u9650\u5236\u4EFB\u4F55\u4EE3\u7801\u7528\u4E8E\u5546\u7528\u3002 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { pkg, lastBuildTime } = { "pkg": { "dependencies": { "@ant-design/colors": "^6.0.0", "@ant-design/icons-vue": "^6.0.1", "@iconify/iconify": "^2.1.1", "@logicflow/core": "^1.0.7", "@logicflow/extension": "^1.0.7", "@vue/runtime-core": "^3.2.29", "@vue/shared": "^3.2.29", "@vueuse/core": "^7.5.4", "@vueuse/shared": "^7.5.4", "@zxcvbn-ts/core": "^1.2.0", "ant-design-vue": "3.0.0-beta.8", "axios": "^0.25.0", "codemirror": "^5.65.1", "cropperjs": "^1.5.12", "crypto-js": "^4.1.1", "dayjs": "^1.10.7", "echarts": "^5.2.2", "intro.js": "^4.3.0", "lodash-es": "^4.17.21", "mockjs": "^1.1.0", "nprogress": "^0.2.0", "path-to-regexp": "^6.2.0", "pinia": "2.0.9", "print-js": "^1.6.0", "qrcode": "^1.5.0", "qs": "^6.10.3", "resize-observer-polyfill": "^1.5.1", "showdown": "^1.9.1", "sortablejs": "^1.14.0", "tinymce": "^5.10.2", "vant": "^3.4.5", "vditor": "^3.8.11", "vue": "^3.2.29", "vue-i18n": "^9.1.9", "vue-json-pretty": "^1.8.2", "vue-router": "^4.0.12", "vue-types": "^4.1.1", "xlsx": "^0.17.5" }, "devDependencies": { "@commitlint/cli": "^16.1.0", "@commitlint/config-conventional": "^16.0.0", "@iconify/json": "^2.0.28", "@purge-icons/generated": "^0.7.0", "@types/codemirror": "^5.60.5", "@types/crypto-js": "^4.1.0", "@types/fs-extra": "^9.0.13", "@types/inquirer": "^8.1.3", "@types/intro.js": "^3.0.2", "@types/jest": "^27.4.0", "@types/lodash-es": "^4.17.5", "@types/mockjs": "^1.0.6", "@types/node": "^17.0.10", "@types/nprogress": "^0.2.0", "@types/qrcode": "^1.4.2", "@types/qs": "^6.9.7", "@types/showdown": "^1.9.4", "@types/sortablejs": "^1.10.7", "@typescript-eslint/eslint-plugin": "^5.10.0", "@typescript-eslint/parser": "^5.10.0", "@vitejs/plugin-legacy": "^1.6.4", "@vitejs/plugin-vue": "^2.1.0", "@vitejs/plugin-vue-jsx": "^1.3.3", "@vue/compiler-sfc": "3.2.29", "@vue/test-utils": "^2.0.0-rc.18", "autoprefixer": "^10.4.2", "commitizen": "^4.2.4", "conventional-changelog-cli": "^2.2.2", "cross-env": "^7.0.3", "dotenv": "^14.2.0", "eslint": "^8.7.0", "eslint-config-prettier": "^8.3.0", "eslint-define-config": "^1.2.3", "eslint-plugin-jest": "^25.7.0", "eslint-plugin-prettier": "^4.0.0", "eslint-plugin-vue": "^8.3.0", "esno": "^0.14.0", "fs-extra": "^10.0.0", "husky": "^7.0.4", "inquirer": "^8.2.0", "jest": "^27.4.7", "less": "^4.1.2", "lint-staged": "12.3.1", "npm-run-all": "^4.1.5", "postcss": "^8.4.5", "postcss-html": "^1.3.0", "postcss-less": "^6.0.0", "prettier": "^2.5.1", "rimraf": "^3.0.2", "rollup": "^2.68.0", "rollup-plugin-visualizer": "^5.5.4", "stylelint": "^14.3.0", "stylelint-config-html": "^1.0.0", "stylelint-config-prettier": "^9.0.3", "stylelint-config-recommended": "^6.0.0", "stylelint-config-standard": "^24.0.0", "stylelint-order": "^5.0.0", "ts-jest": "^27.1.3", "ts-node": "^10.4.0", "typescript": "^4.5.5", "vite": "^2.8.0-beta.3", "vite-plugin-compression": "^0.4.0", "vite-plugin-html": "^2.1.2", "vite-plugin-imagemin": "^0.5.2", "vite-plugin-mkcert": "^1.5.2", "vite-plugin-mock": "^2.9.6", "vite-plugin-purge-icons": "^0.7.0", "vite-plugin-pwa": "^0.11.13", "vite-plugin-style-import": "^1.4.1", "vite-plugin-svg-icons": "^1.1.0", "vite-plugin-theme": "^0.8.1", "vite-plugin-vue-setup-extend": "^0.3.0", "vite-plugin-windicss": "^1.6.3", "vue-eslint-parser": "^8.2.0", "vue-tsc": "^0.31.1" }, "name": "vben-admin", "version": "2.8.0" }, "lastBuildTime": "2024-07-06 10:18:16" };
    const { dependencies, devDependencies, name, version } = pkg;
    const schema = [];
    const devSchema = [];
    const commonTagRender = (color) => (curVal) => h(Tag, { color }, () => curVal);
    const commonLinkRender = (text) => (href) => h("a", { href, target: "_blank" }, text);
    const infoSchema = [
      {
        label: "\u7248\u672C",
        field: "version",
        render: commonTagRender("blue")
      },
      {
        label: "\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",
        field: "lastBuildTime",
        render: commonTagRender("blue")
      },
      {
        label: "\u6587\u6863\u5730\u5740",
        field: "doc",
        render: commonLinkRender("\u6587\u6863\u5730\u5740")
      },
      {
        label: "\u9884\u89C8\u5730\u5740",
        field: "preview",
        render: commonLinkRender("\u9884\u89C8\u5730\u5740")
      },
      {
        label: "Github",
        field: "github",
        render: commonLinkRender("Github")
      }
    ];
    const infoData = {
      version,
      lastBuildTime,
      doc: DOC_URL,
      preview: SITE_URL,
      github: GITHUB_URL
    };
    Object.keys(dependencies).forEach((key) => {
      schema.push({ field: key, label: key });
    });
    Object.keys(devDependencies).forEach((key) => {
      devSchema.push({ field: key, label: key });
    });
    const [register] = useDescription({
      title: "\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",
      data: dependencies,
      schema,
      column: 3
    });
    const [registerDev] = useDescription({
      title: "\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",
      data: devDependencies,
      schema: devSchema,
      column: 3
    });
    const [infoRegister] = useDescription({
      title: "\u9879\u76EE\u4FE1\u606F",
      data: infoData,
      schema: infoSchema,
      column: 2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PageWrapper), { title: "\u5173\u4E8E" }, {
        headerContent: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("span", _hoisted_2, [
              createBaseVNode("a", {
                href: unref(GITHUB_URL),
                target: "_blank"
              }, toDisplayString(unref(name)), 9, _hoisted_3),
              _hoisted_4
            ])
          ])
        ]),
        default: withCtx(() => [
          createVNode(unref(Description), {
            onRegister: unref(infoRegister),
            class: "enter-y"
          }, null, 8, ["onRegister"]),
          createVNode(unref(Description), {
            onRegister: unref(register),
            class: "my-4 enter-y"
          }, null, 8, ["onRegister"]),
          createVNode(unref(Description), {
            onRegister: unref(registerDev),
            class: "enter-y"
          }, null, 8, ["onRegister"])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
