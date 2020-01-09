import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Map from "@/components/Map";
import Calendar from "@/components/Calendar";
import Dashboard from "@/components/Dashboard";

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));
Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/",
    name: "App",
    component: App,
    children: [
      {
        path: "/",
        component: Dashboard
      },
      {
        path: "/calendar",
        component: Calendar
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
