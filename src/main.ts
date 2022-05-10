import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import mapbox from "vue-mapbox-ts";
import "./assets/scss/index.scss";

const app = createApp(App);

app.use(router);
app.use(mapbox);

app.mount("#app");
