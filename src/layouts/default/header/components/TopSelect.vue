<template>
  <div>
    <div class="ant-form-item-label" style="width: 120px">
      <label class="ant-form-item-no-colon">选择店铺: </label>
    </div>
    <a-select
      v-model:value="value"
      show-search
      placeholder="请选择店铺"
      style="width: 200px"
      :options="options"
      :filter-option="filterOption"
      @change="handleChange"
    />
  </div>
</template>
<script lang="ts">
  import { Select } from 'ant-design-vue';
  // import type { SelectProps } from 'ant-design-vue';
  import { defineComponent, ref, computed } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { selectShop } from '/@/api/sys/user';

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
      // console.log(permission, selectedShop);
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

      const handleChange = async (value: string) => {
        await selectShop({ shop_id: value });
        location.reload();
      };
      const filterOption = (input: string, option: any) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };
      return {
        selectedShop,
        value: ref<string>(selectedShop.value),
        filterOption,
        handleChange,
        options,
      };
    },
  });
</script>
