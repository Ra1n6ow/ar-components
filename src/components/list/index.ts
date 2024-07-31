import { App } from "vue";
import ArList from "./src/index.vue";

export default {
  install(app: App) {
    app.component("ar-list", ArList);
  },
};
