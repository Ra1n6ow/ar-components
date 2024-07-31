<template>
  <div class="trend">
    <!-- 判断是否有默认插槽,即父组件传递插槽数据,default表示匿名插槽 -->
    <div class="text" v-if="slots.default" ">
      <slot />
    </div>
    <div class="text" v-else :style="{ color: textColor }">{{ text }}</div>
    <div class="icon">
      <component
        :is="upIcon"
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upIconColor : downIconColor }"
      />
      <component
        :is="downIcon"
        v-else
        :style="{ color: !reverseColor ? downIconColor : upIconColor }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";

const slots = useSlots();

const props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: "up",
  },

  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: "icon-arrow-rise",
  },

  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: "icon-arrow-fall",
  },

  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: "文字",
  },

  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: "rgb(0,0,0)",
  },
  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: "rgb(0,0,0)",
  },

  // 反转颜色，只能基于upIconColor 和 downIconColor 做反转
  reverseColor: {
    type: Boolean,
    default: false,
  },
});

const textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
</script>

<style lang="less" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 20px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 1.2em;
      height: 1.2em;
    }
  }
}
</style>
