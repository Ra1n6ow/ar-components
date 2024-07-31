import { App } from "vue";
import ArChooseIcon from "./src/index.vue";

export default {
  install(app: App) {
    app.component("ar-choose-icon", ArChooseIcon);
  },
};
