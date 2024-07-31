<template>
  <div class="trend-container">
    <!-- slog营业额生效，因为先有slot，所以先渲染 
    <div><ar-trend text="营业额" reverseColor>slot营业额</ar-trend></div>
    <div><ar-trend text="销售额" reverseColor type="down"></ar-trend></div>
    -->
    <div>
      <ar-trend
        text="营业额"
        upTextColor="blue"
        upIcon="icon-caret-up"
      ></ar-trend>
    </div>
    <div>
      <ar-trend
        text="销售额"
        type="down"
        downTextColor="grey"
        downIcon="icon-caret-down"
      ></ar-trend>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.trend-container {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
