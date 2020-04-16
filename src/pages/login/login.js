import Vue from "vue";
import App from "./App.vue";
import HeadNavBar from "../../components/headnavigation/HeadNavBar";
import BaseUserImg from "../../components/baseimg/BaseImg";
import LoginRegistered from "../../views/loginRegistered/LoginRegistered.vue";
import SvgIcon from "../../components/svgicon/SvgIcon.vue";
import "../../assets/font/iconfont";
import '../../assets/css/style.css'
Vue.config.productionTip = false;
Vue.component("head-nav-bar", HeadNavBar);
Vue.component("BaseUserImg", BaseUserImg);
Vue.component("LoginRegistered", LoginRegistered);
Vue.component("SvgIcon", SvgIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
