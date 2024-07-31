import { App } from "vue";
import ArChooseArea from "./src/index.vue";

// 注册全局组件
export default {
  install(app: App) {
    app.component("ar-choose-area", ArChooseArea);
  },
};
