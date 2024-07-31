<template>
  <a-button type="primary" @click="handleClick">
    <slot />
  </a-button>
  <a-modal
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :footer="false"
    :title-align="'start'"
    width="1000px"
    top="50px"
    :align-center="false"
  >
    <template #title> {{ props.title }} </template>
    <a-scrollbar style="height: 800px; overflow: auto">
      <div class="container">
        <div
          class="icon-item"
          v-for="(item, index) in Object.keys(ArcoVueIcon)"
          :key="index"
          @click="handleCopy(item)"
        >
          <div>
            <component :is="`${convertToKebabCase(item)}`" />
          </div>
          <div>
            <!-- 最后一项是一个 install 字符串，需要排除 -->
            {{ item !== "install" ? item : "" }}
          </div>
        </div>
      </div>
    </a-scrollbar>
  </a-modal>
</template>

<script setup lang="ts">
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import { convertToKebabCase } from "@/utils";
import { useCopy } from "@/hooks/useCopy";

const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const handleCopy = (item: string) => {
  const text = `<${convertToKebabCase(item)} />`;
  useCopy(text);
  visible.value = false;
};

const visible = defineModel<boolean>("visible");

const props = defineProps({
  title: {
    type: String,
    default: "图标",
  },
});

const handleClick = () => {
  visible.value = !visible.value;
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.icon-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
}

svg {
  width: 2em;
  height: 2em;
}
</style>
