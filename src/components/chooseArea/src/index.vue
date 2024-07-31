<template>
  <a-select
    :style="{ width: '150px', marginRight: '15px' }"
    placeholder="请选择省份"
    v-model="province"
    size="large"
    allow-clear
  >
    <a-option
      v-for="item of allData"
      :key="item.code"
      :value="item.code"
      :label="item.name"
    />
  </a-select>
  <a-select
    :style="{ width: '150px', marginRight: '15px' }"
    placeholder="请选择城市"
    v-model="city"
    size="large"
    :disabled="!province"
    allow-clear
  >
    <a-option
      v-for="item of cities"
      :key="item.code"
      :value="item.code"
      :label="item.name"
    />
  </a-select>
  <a-select
    :style="{ width: '150px' }"
    placeholder="请选择区县"
    v-model="area"
    size="large"
    :disabled="!city"
    allow-clear
  >
    <a-option
      v-for="item of areas"
      :key="item.code"
      :value="item.code"
      :label="item.name"
    />
  </a-select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import allAreaData from "../lib/pca-code.json";

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}

export interface Data {
  name: string;
  code: string;
}

// 待选择的省市区列表
const allData = ref(allAreaData);
const cities = ref<AreaItem[]>([]);
const areas = ref<AreaItem[]>([]);

// 所选择的省市区
const province = ref("");
const city = ref("");
const area = ref("");

// 分发事件给父组件
let emit = defineEmits(["change"]);

watch(province, (val) => {
  if (val) {
    cities.value = allData.value.find((item) => item.code === val)!.children;
  }
  city.value = "";
  area.value = "";
});

watch(city, (val) => {
  if (val) {
    areas.value = cities.value.find((item) => item.code === val)!.children!;
  }
  area.value = "";
});

// 只有当选择了区县，代表所有信息都选择完毕，才会对外发送事件
watch(area, (val) => {
  if (val) {
    const provinceData: Data = {
      name: allData.value.find((item) => item.code === province.value)!.name,
      code: province.value,
    };
    const cityData: Data = {
      name: cities.value.find((item) => item.code === city.value)!.name,
      code: city.value,
    };
    const areaData: Data = {
      name: areas.value.find((item) => item.code === val)!.name,
      code: val,
    };
    emit("change", {
      province: provinceData,
      city: cityData,
      area: areaData,
    });
  }
});
</script>

<style lang="less" scoped></style>
