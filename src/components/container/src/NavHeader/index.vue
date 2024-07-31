<template>
  <div class="header">
    <a-button shape="round" @click="onCollapse">
      <IconCaretRight v-if="collapse" />
      <IconCaretLeft v-else />
    </a-button>
  </div>
</template>

<script setup lang="ts">
const collapse = defineModel<boolean>();
const onCollapse = () => {
  collapse.value = !collapse.value;
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
