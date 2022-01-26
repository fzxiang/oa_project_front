<template>
  <BasicModal
    width="80%"
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <Form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="dynamicValidateForm"
      layout="inline"
      @finish="onFinish"
    >
      <FormItem name="area" label="Area" :rules="[{ required: true, message: 'Missing area' }]">
        <Select v-model:value="dynamicValidateForm.area" :options="areas" />
      </FormItem>
      <Space
        v-for="(sight, index) in dynamicValidateForm.sights"
        :key="sight.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <FormItem
          :name="['sights', index, 'value']"
          label="Sight"
          :rules="{
            required: true,
            message: 'Missing sight',
          }"
        >
          <Select
            v-model:value="sight.value"
            :disabled="!dynamicValidateForm.area"
            :options="(sights[dynamicValidateForm.area] || []).map((a) => ({ value: a }))"
            style="width: 130px"
          />
        </FormItem>
        <FormItem
          label="Price"
          :name="['sights', index, 'price']"
          :rules="{
            required: true,
            message: 'Missing price',
          }"
        >
          <a-input v-model:value="sight.price" />
        </FormItem>
        <MinusCircleOutlined @click="removeSight(sight)" />
      </Space>
      <FormItem>
        <Button type="dashed" block @click="addSight">
          <PlusOutlined />
          Add sights
        </Button>
      </FormItem>
      <FormItem>
        <Button type="primary" html-type="submit">Submit</Button>
      </FormItem>
    </Form>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref, watch, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Select, Form, Button, Space } from 'ant-design-vue';
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import type { FormInstance } from 'ant-design-vue';
  interface Sights {
    value: string;
    price: string;
    id: number;
  }
  export default defineComponent({
    name: 'MyOrderModal',
    components: {
      BasicModal,
      Select,
      Form,
      Button,
      Space,
      MinusCircleOutlined,
      PlusOutlined,
      FormItem: Form.Item,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setModalProps({});
        }
      });

      // 表单

      const areas = [
        { label: 'Beijing', value: 'Beijing' },
        { label: 'Shanghai', value: 'Shanghai' },
      ];

      const sights = {
        Beijing: ['Tiananmen', 'Great Wall'],
        Shanghai: ['Oriental Pearl', 'The Bund'],
      };

      const formRef = ref<FormInstance>();
      const dynamicValidateForm = reactive<{ sights: Sights[]; area: string | undefined }>({
        sights: [],
        area: undefined,
      });
      watch(
        () => dynamicValidateForm.area,
        () => {
          dynamicValidateForm.sights = [];
        },
      );

      const removeSight = (item: Sights) => {
        let index = dynamicValidateForm.sights.indexOf(item);
        if (index !== -1) {
          dynamicValidateForm.sights.splice(index, 1);
        }
      };

      const addSight = () => {
        dynamicValidateForm.sights.push({
          value: '',
          price: '',
          id: Date.now(),
        });
      };
      const getTitle = computed(() => (!unref(isUpdate) ? '新增订单' : '编辑订单'));

      const onFinish = (values) => {
        console.log('Received values of form:', values);
        console.log('dynamicValidateForm:', dynamicValidateForm);
      };
      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          // TODO custom api
          closeModal();
          emit('success', { isUpdate: unref(isUpdate) });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      return {
        registerModal,
        getTitle,
        handleSubmit,
        removeSight,
        addSight,
        onFinish,
        dynamicValidateForm,
        areas,
        formRef,
        sights,
      };
    },
  });
</script>
