import { createApp } from "vue";
import App from "./App.vue";
import { Frontegg  } from "@frontegg/vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    { name: "HomePage", path: "/", component: App },
  ],
});

const app = createApp(App).use(router);

app.use(Frontegg, {
  contextOptions: {
    baseUrl: "baseUrl",
    clientId: 'clientId'
  },
   authOptions: {
	keepSessionAlive: true // Uncomment this in order to maintain the session alive
  },
  hostedLoginBox: false,
  router,
});

app.mount("#app");