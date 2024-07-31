<template>
  <ar-choose-icon :title="title" v-model:visible="visible">
    选择图标
  </ar-choose-icon>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref<string>("选择图标");
const visible = ref<boolean>(false);
</script>

<style lang="less" scoped></style>
