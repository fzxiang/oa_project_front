import { B as defineComponent, b3 as Divider, bn as Space, r as ref, u as unref, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, a5 as mergeProps, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                 */import { B as BasicModal, a as useModalInner } from "./index.87958aba.js";
import { B as BasicForm } from "./BasicForm.eb2543c0.js";
import { u as useForm } from "./useForm.b6913949.js";
import { orderInfoForm, writerInfoForm } from "./tableData.dea49ada.js";
import { aF as defHttp, f as useUserStore, _ as _export_sfc, h as useMessage } from "./index.4f9aa98a.js";
import { d as downloadByUrl } from "./download.84089b0f.js";
const addOrderApi = (params) => defHttp.post({ url: "/addOrder", params }, { successMessageMode: "notification" });
const updateOrderApi = (params) => defHttp.post({ url: "/updateOrder", params }, { successMessageMode: "notification" });
const checkOrderApi = (params) => defHttp.post({ url: "/checkOrder", params }, { successMessageMode: "notification" });
const uploadOrderFileApi = (params) => defHttp.post({ url: "/uploadOrderFile", params, timeout: 600 * 1e3 }, { successMessageMode: "notification" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportOrder?obj=" + encodeURIComponent(JSON.stringify(params));
  console.log(url);
  downloadByUrl({ url });
};
const searchOrderApi = (params) => defHttp.get({ url: "/searchOrder", params });
const checkWriterApi = (params) => defHttp.get({ url: "/checkWriter", params }, { successMessageMode: "notification" });
const searchChildApi = (params) => defHttp.post({ url: "/getWritersOfOrder", params });
const { notification } = useMessage();
const _sfc_main = defineComponent({
  name: "MyOrderModal",
  components: { BasicModal, BasicForm, Divider, Space },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const disabled = ref(false);
    const [
      registerFormOrder,
      {
        updateSchema: updateSchemaOrder,
        resetFields: resetFieldsOrder,
        validate: validateOrder,
        setFieldsValue: setFieldsValueOrder
      }
    ] = useForm({
      schemas: orderInfoForm,
      labelWidth: 150,
      baseColProps: {
        span: 12
      },
      showActionButtonGroup: false
    });
    const writerIndex = ref(0);
    const [
      registerFormWriter,
      {
        setFieldsValue: setFieldsValueWriter,
        resetFields: resetFieldsWriter,
        appendSchemaByField: appendSchemaByFieldWriter,
        validate: validateWriter,
        getFieldsValue,
        updateSchema: updateSchemaWriter,
        resetSchema: resetSchemaWriter,
        removeSchemaByFiled: removeSchemaByFiledWriter
      }
    ] = useForm({
      schemas: [],
      labelWidth: 150,
      baseColProps: {
        span: 12
      },
      showActionButtonGroup: false
    });
    async function handleAdd(disabled2 = true) {
      const field = writerInfoForm(writerIndex.value, disabled2);
      writerIndex.value++;
      for (let i in field) {
        await appendSchemaByFieldWriter(field[i], "");
      }
    }
    async function handleCheck(index) {
      const params = await getFieldsValue();
      const writerNum = params[`writerNum_${index}`];
      const res = await checkWriterApi({ writerNum });
      if (res.lenght !== 0) {
        await updateSchemaWriter([
          { field: `name_${index}`, componentProps: { disabled: false } },
          { field: `writerPrice_${index}`, componentProps: { disabled: false } },
          { field: `alipayAccount_${index}`, componentProps: { disabled: false } },
          { field: `qqAccount_${index}`, componentProps: { disabled: false } },
          { field: `wechatAccount_${index}`, componentProps: { disabled: false } },
          { field: `writerSituation_${index}`, componentProps: { disabled: false } },
          { field: `writerQuality_${index}`, componentProps: { disabled: false } }
        ]);
        let resWithIndex = {};
        Object.keys(res).forEach((key) => {
          resWithIndex[`${key}_${index}`] = res[key];
        });
        await setFieldsValueWriter(resWithIndex);
      }
    }
    function handleDelete(index) {
      removeSchemaByFiledWriter([
        `writerNum_${index}`,
        `name_${index}`,
        `writerPrice_${index}`,
        `alipayAccount_${index}`,
        `qqAccount_${index}`,
        `wechatAccount_${index}`,
        `writerSituation_${index}`,
        `writerQuality_${index}`,
        `${index}`,
        `divider_${index}`
      ]);
    }
    const [
      registerFormOther,
      {
        setFieldsValue: setFieldsValueOther,
        resetFields: resetFieldsOther,
        validate: validateOther
      }
    ] = useForm({
      schemas: [
        {
          field: "remarks",
          label: "\u5907\u6CE8\uFF08\u6700\u59273000\uFF09",
          component: "InputTextArea"
        }
      ],
      labelWidth: 150,
      baseColProps: {
        span: 24
      },
      showActionButtonGroup: false
    });
    const [registerModal, { setModalProps, closeModal, changeLoading }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: true });
      changeLoading(true);
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      writerIndex.value = 0;
      await updateSchemaOrder([
        { field: "invoice", componentProps: { disabled: !isUpdate.value } },
        { field: "taobaoPrice", componentProps: { disabled: !isUpdate.value } },
        { field: "customrContact", componentProps: { disabled: !isUpdate.value } },
        { field: "orderOutline", componentProps: { disabled: !isUpdate.value } },
        { field: "memberName", componentProps: { disabled: !isUpdate.value } },
        {
          field: "aliOrder",
          componentProps: {
            enterButton: "\u6821\u9A8C\u8BA2\u5355",
            placeholder: "\u8BF7\u5148\u8F93\u5165\u8BA2\u5355\u8FDB\u884C\u6821\u9A8C",
            onSearch: async (value) => {
              const res = await checkOrderApi({ aliOrder: value });
              if ((res == null ? void 0 : res.length) > 0) {
                notification.error({ message: "\u63D0\u793A", description: "\u5DF2\u5B58\u5728\u6539\u8BA2\u5355\uFF01" });
                disabled.value = true;
              } else {
                await updateSchemaOrder([
                  { field: "invoice", componentProps: { disabled: false } },
                  { field: "taobaoPrice", componentProps: { disabled: false } },
                  { field: "customrContact", componentProps: { disabled: false } },
                  { field: "orderOutline", componentProps: { disabled: false } },
                  { field: "memberName", componentProps: { disabled: false } }
                ]);
                disabled.value = false;
              }
            },
            disabled: false
          }
        }
      ]);
      await resetSchemaWriter([]);
      await resetFieldsOrder();
      await resetFieldsWriter();
      await resetFieldsOther();
      if (unref(isUpdate)) {
        disabled.value = false;
        await setFieldsValueOrder(data == null ? void 0 : data.record);
        await setFieldsValueOther(data == null ? void 0 : data.record);
        const writerData = await searchChildApi({ id: data == null ? void 0 : data.record.id });
        const params = {};
        for (let i in writerData) {
          await handleAdd(false);
          params["id_" + i] = writerData[i].id;
          params["writerNum_" + i] = writerData[i].writerNum;
          params["name_" + i] = writerData[i].name;
          params["writerPrice_" + i] = writerData[i].writerPrice;
          params["alipayAccount_" + i] = writerData[i].alipayAccount;
          params["qqAccount_" + i] = writerData[i].qqAccount;
          params["wechatAccount_" + i] = writerData[i].wechatAccount;
          params["writerSituation_" + i] = writerData[i].writerSituation;
          params["writerQuality_" + i] = writerData[i].writerQuality;
          await updateSchemaWriter({
            field: "writerNum_" + i,
            componentProps: { disabled: true }
          });
        }
        await setFieldsValueWriter(params);
      } else {
        disabled.value = true;
      }
      changeLoading(false);
      setModalProps({ confirmLoading: false });
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u8BA2\u5355" : "\u7F16\u8F91\u8BA2\u5355");
    async function handleSubmit() {
      try {
        setModalProps({ confirmLoading: true });
        const order = await validateOrder();
        const allWriter = await validateWriter();
        const other = await validateOther();
        const writer = [];
        for (let i = 0; i < writerIndex.value; i++) {
          writer.push({
            id: allWriter[`id_${i}`],
            writerNum: allWriter[`writerNum_${i}`],
            name: allWriter[`name_${i}`],
            writerPrice: allWriter[`writerPrice_${i}`],
            alipayAccount: allWriter[`alipayAccount_${i}`],
            qqAccount: allWriter[`qqAccount_${i}`],
            wechatAccount: allWriter[`wechatAccount_${i}`],
            writerSituation: allWriter[`writerSituation_${i}`],
            writerQuality: allWriter[`writerQuality_${i}`]
          });
        }
        writer.forEach((item, index) => {
          if (!item.writerNum) {
            writer.splice(index, 1);
          }
        });
        console.log(writer);
        if (isUpdate.value) {
          await updateOrderApi({
            orderInfo: {
              order,
              writer,
              other
            }
          });
        } else {
          await addOrderApi({
            orderInfo: {
              order,
              writer,
              other
            }
          });
        }
        closeModal();
        emit("success", {
          isUpdate: unref(isUpdate)
        });
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }
    return {
      disabled,
      registerModal,
      registerFormOrder,
      registerFormWriter,
      registerFormOther,
      getTitle,
      handleSubmit,
      handleAdd,
      handleDelete,
      handleCheck
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5199\u624B\u4FE1\u606F ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u5199\u624B");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5199\u624B\u4FE1\u606F ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u68C0\u9A8C\u5199\u624B");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5220\u9664\u5199\u624B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5176\u4ED6");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Divider = resolveComponent("Divider");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_a_button = resolveComponent("a-button");
  const _component_Space = resolveComponent("Space");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps({ width: "80%" }, _ctx.$attrs, {
    onRegister: _ctx.registerModal,
    title: _ctx.getTitle,
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_Divider, { orientation: "left" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_BasicForm, { onRegister: _ctx.registerFormOrder }, null, 8, ["onRegister"]),
      createVNode(_component_a_button, {
        type: "dashed",
        block: "",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAdd(true)),
        disabled: _ctx.disabled
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }, 8, ["disabled"]),
      createVNode(_component_Divider, { orientation: "left" }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }),
      createVNode(_component_BasicForm, { onRegister: _ctx.registerFormWriter }, {
        add: withCtx(({ field }) => [
          createVNode(_component_Space, null, {
            default: withCtx(() => [
              createVNode(_component_a_button, {
                onClick: ($event) => _ctx.handleCheck(field)
              }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(_component_a_button, {
                color: "error",
                onClick: ($event) => _ctx.handleDelete(field)
              }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["onRegister"]),
      createVNode(_component_Divider, { orientation: "left" }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }),
      createVNode(_component_BasicForm, { onRegister: _ctx.registerFormOther }, null, 8, ["onRegister"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
var MyOrderModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var MyOrderModal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": MyOrderModal
});
export { MyOrderModal as M, searchChildApi as a, MyOrderModal$1 as b, exportApi as e, searchOrderApi as s, uploadOrderFileApi as u };
