import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import mapbox from "vue-mapbox-ts";
import { FocusTrap } from "focus-trap-vue";
import "./assets/scss/index.scss";

const app = createApp(App);

app.use(router);
app.use(mapbox);

app.component("FocusTrap", FocusTrap);

app.mount("#app");
