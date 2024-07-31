<template>
  <a-popover position="bottom">
    <a-badge
      :count="count"
      :dot="dot"
      :max-count="maxCount"
      style="cursor: pointer"
    >
      <component :is="icon" size="30" />
    </a-badge>
    <template #content>
      <slot></slot>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: "icon-notification",
  },

  // 显示的数字
  count: {
    type: Number,
    default: 0,
  },

  // 当count超过maxCount时，显示为maxCount+
  maxCount: {
    type: Number,
    default: 0,
  },

  // 是否显示小圆点, 只有在count存在时才生效
  dot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped></style>
