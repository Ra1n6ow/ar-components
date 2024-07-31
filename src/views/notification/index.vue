<template>
  <!-- <ar-notification :count="38" />
  <br />
  <br />
  <ar-notification :count="38" :max-count="30" />
  <br />
  <br />
  <ar-notification :count="38" dot />
  <br />
  <br />
  <ar-notification icon="icon-wechat" :count="38" /> -->
  <ar-notification :count="38">
    <!-- 传递默认插槽 -->
    <ar-list :list="list" :actions="actions"></ar-list>
  </ar-notification>
</template>

<script setup lang="ts">
import { list, actions } from "./data";
</script>

<style lang="less" scoped></style>
