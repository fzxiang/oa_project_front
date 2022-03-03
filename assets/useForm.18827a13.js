import { at as isProdMode, au as getDynamicProps, as as error } from "./index.f72786be.js";
import { Q as ref, an as onUnmounted, b as unref, w as watch, a7 as nextTick } from "./vendor.faf2de98.js";
function useForm(props) {
  const formRef = ref(null);
  const loadedRef = ref(false);
  async function getForm() {
    const form = unref(formRef);
    if (!form) {
      error("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!");
    }
    await nextTick();
    return form;
  }
  function register(instance) {
    onUnmounted(() => {
      formRef.value = null;
      loadedRef.value = null;
    });
    if (unref(loadedRef) && isProdMode() && instance === unref(formRef))
      return;
    formRef.value = instance;
    loadedRef.value = true;
    watch(() => props, () => {
      props && instance.setProps(getDynamicProps(props));
    }, {
      immediate: true,
      deep: true
    });
  }
  const methods = {
    scrollToField: async (name, options) => {
      const form = await getForm();
      form.scrollToField(name, options);
    },
    setProps: async (formProps) => {
      const form = await getForm();
      form.setProps(formProps);
    },
    updateSchema: async (data) => {
      const form = await getForm();
      form.updateSchema(data);
    },
    resetSchema: async (data) => {
      const form = await getForm();
      form.resetSchema(data);
    },
    clearValidate: async (name) => {
      const form = await getForm();
      form.clearValidate(name);
    },
    resetFields: async () => {
      getForm().then(async (form) => {
        await form.resetFields();
      });
    },
    removeSchemaByFiled: async (field) => {
      var _a;
      (_a = unref(formRef)) == null ? void 0 : _a.removeSchemaByFiled(field);
    },
    getFieldsValue: () => {
      var _a;
      return (_a = unref(formRef)) == null ? void 0 : _a.getFieldsValue();
    },
    setFieldsValue: async (values) => {
      const form = await getForm();
      form.setFieldsValue(values);
    },
    appendSchemaByField: async (schema, prefixField, first) => {
      const form = await getForm();
      form.appendSchemaByField(schema, prefixField, first);
    },
    submit: async () => {
      const form = await getForm();
      return form.submit();
    },
    validate: async (nameList) => {
      const form = await getForm();
      return form.validate(nameList);
    },
    validateFields: async (nameList) => {
      const form = await getForm();
      return form.validateFields(nameList);
    }
  };
  return [register, methods];
}
export { useForm as u };
