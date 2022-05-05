import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/scss/index.scss";
import "leaflet/dist/leaflet.css";
import mapbox from "vue-mapbox-ts";

const app = createApp(App);

app.use(router);
app.use(mapbox);

app.mount("#app");
