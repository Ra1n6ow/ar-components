<template>
  <a-layout class="layout">
    <a-layout-sider :collapsed="collapse">
      <navi-side />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <navi-header v-model="collapse" />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import NaviSide from "./NavSide/index.vue";
import NaviHeader from "./NavHeader/index.vue";

import { ref } from "vue";
const collapse = ref(false);
</script>

<style lang="less" scoped>
.arco-layout-header {
  border-bottom: 1px solid #eee;
}

.arco-layout-content {
  padding: 20px;
}
</style>
