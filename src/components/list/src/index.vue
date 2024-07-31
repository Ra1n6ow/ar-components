<template>
  <div class="ar-arco-tabs-nav-tab-list">
    <a-tabs>
      <a-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
      >
        <a-scrollbar style="height: 300px; overflow: auto">
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
          >
            <div class="avatar" v-if="item1.avatar">
              <a-avatar :size="46" :imageUrl="item1.avatar" />
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>
                  {{ item1.title }}
                </div>
                <a-tag v-if="item1.tag" :color="item1.tagColor" size="small">
                  {{ item1.tag }}
                </a-tag>
              </div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <!-- border 控制最后一个元素的右边框 -->
            <div
              class="a-item"
              :class="{ border: index !== actions.length - 1 }"
              v-for="(action, index) in actions"
              :key="index"
            >
              <div class="a-icon" v-if="action.icon">
                <component :is="action.icon"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </a-scrollbar>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ListOptions, ActionOptions } from "./types";

const props = defineProps({
  // 列表
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },

  // 操作选项
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
console.log(props.list);
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6f6ff;
  }

  .avatar {
    flex: 1;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  margin-top: 20px;

  .a-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    .a-icon {
      margin-right: 4px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
