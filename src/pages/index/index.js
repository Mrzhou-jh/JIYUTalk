import Vue from "vue";
import App from "./App.vue";
import HeadNavBar from "../../components/headnavigation/HeadNavBar";
import BaseUserImg from "../../components/baseimg/BaseImg";
import LoginRegistered from "../../views/loginRegistered/LoginRegistered.vue";

Vue.config.productionTip = false;
Vue.component("head-nav-bar", HeadNavBar);
Vue.component("BaseUserImg", BaseUserImg);
Vue.component("LoginRegistered", LoginRegistered);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
