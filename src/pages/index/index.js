import Vue from "vue";
import App from "./App.vue";
import HeadNavBar from "../../components/headnavigation/HeadNavBar";
import Tabbar from "../../components/tabbar/Tabar";
import TabbarItem from "../../components/tabbar/TabbarItem";
import SvgIcon from "../../components/svgicon/SvgIcon.vue";
import "../../assets/font/iconfont";
import '../../assets/css/style.css'
import router from "../../router"
Vue.config.productionTip = false;
Vue.component("head-nav-bar", HeadNavBar);
Vue.component("SvgIcon", SvgIcon);
Vue.component("Tabbar", Tabbar);
Vue.component("TabbarItem", TabbarItem);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
