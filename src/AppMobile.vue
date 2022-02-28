<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="['MobileHome']">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="/mobile/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="/mobile/income" icon="after-sale">收入</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { Tabbar, TabbarItem } from 'vant';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    setup() {
      const active = ref(location.hash.slice(1) || '/mobile/home');
      const go = useGo();

      function onChange(value) {
        console.log(value);
        go(value);
        // router.push({ name: value });
      }

      return {
        onChange,
        active,
      };
    },
  });
</script>
