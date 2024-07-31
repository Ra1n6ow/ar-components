import { App } from "vue";
import ArNotification from "./src/index.vue";

export default {
  install(app: App) {
    app.component("ar-notification", ArNotification);
  },
};
