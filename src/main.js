import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import mitt from "mitt";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();
const eventBus = mitt();

app.use(router);
app.use(head);
app.config.globalProperties.eventBus = eventBus;
app.provide("eventBus", eventBus);
app.mount("#app");
