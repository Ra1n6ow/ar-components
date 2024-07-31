<template>
  <ar-choose-area @change="handleChooseArea"></ar-choose-area>
</template>

<script setup lang="ts">
const handleChooseArea = (area: any) => {
  console.log(area);
};
</script>

<style lang="less" scoped></style>
