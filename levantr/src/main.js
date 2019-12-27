import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Map from "@/components/Map";
import Dashboard from "@/components/Dashboard";

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));
Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "App",
    component: App,
    children: [
      {
        path: "/dashboard",
        component: Dashboard
      },
      {
        path: "/map",
        component: Map
      }
    ]
  }
];

const router = new Router({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
