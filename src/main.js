import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import router from "./routes/index";
import "./util/filters"

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));

const configOptions = {
  apiKey: "AIzaSyBFMbdyaUDSYLQBtzEmrSU23Ai1nwDrNWg",
  authDomain: "bookit-ddac6.firebaseapp.com",
  databaseURL: "https://bookit-ddac6.firebaseio.com",
  projectId: "bookit-ddac6",
  storageBucket: "bookit-ddac6.appspot.com",
  messagingSenderId: "984021608008",
  appId: "1:984021608008:web:e29a7b31acae3aa9765a7d",
  measurementId: "G-499GS7N2DK"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
