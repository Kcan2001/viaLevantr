import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Content from "@/components/Content"

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));
Vue.use(Router);

const routes = [{ path: "/", name: "Content" , component: App, children: [
  {
    // UserProfile will be rendered inside User's <router-view>
    // when /user/:id/profile is matched
    path: '/map',
    component: Content
  }
]}];

const router = new Router({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
