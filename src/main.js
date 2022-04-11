import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import "./index.css";
import "default-passive-events";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_MAP_KEY,
  },
});

app.mount("#app");
