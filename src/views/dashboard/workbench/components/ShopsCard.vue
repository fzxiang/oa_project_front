<template>
  <Card title="游戏线路" v-bind="$attrs">
    <template #extra>
      <a-input-search v-model:value="value" placeholder="请输入搜索" enter-button />
    </template>

    <CardGrid v-for="item in items" :key="item" class="!lg:w-1/6 !md:w-1/3 !w-full">
      <span class="flex justify-between">
        <!-- <Icon :icon="item.icon" :color="item.color" size="30" /> -->
        <span class="text-lg">{{ item.title }}</span>
        <a-button type="link" size="small">进入</a-button>
      </span>
      <!-- <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div> -->
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </CardGrid>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Card } from 'ant-design-vue';
  // import { Icon } from '/@/components/Icon';
  import { groupItems } from './data';

  export default defineComponent({
    components: { Card, CardGrid: Card.Grid /* , Icon */ },
    setup() {
      const value = ref('');
      return {
        items: groupItems,
        value,
      };
    },
  });
</script>
