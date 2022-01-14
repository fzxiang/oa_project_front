<template>
  <a-select
    v-model:value="value"
    show-search
    placeholder="请选择平台"
    style="width: 200px"
    :options="options"
    :filter-option="filterOption"
    @change="handleChange"
  />
</template>
<script lang="ts">
  import { Select } from 'ant-design-vue';
  import type { SelectProps } from 'ant-design-vue';
  import { defineComponent, ref, computed } from 'vue';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      [Select.name]: Select,
    },
    setup() {
      const userStore = useUserStore();
      const selectedShop = computed(() => {
        const { selectedShop } = userStore.getUserInfo;
        return selectedShop || '';
      });

      const { permission } = userStore.getUserInfo;
      console.log(permission, selectedShop);
      const options = computed(() => {
        return permission.map((item) => {
          return {
            value: item.shop,
            label: item.shopName,
          };
        });
      });
      // const options = ref<SelectProps['options']>([
      //   { value: 'jack', label: 'Jack' },
      //   { value: 'lucy', label: 'Lucy' },
      //   { value: 'tom', label: 'Tom' },
      // ]);

      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      const filterOption = (input: string, option: any) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };
      return {
        selectedShop,
        value: ref<string | undefined>(undefined),
        filterOption,
        handleChange,
        options,
      };
    },
  });
</script>
