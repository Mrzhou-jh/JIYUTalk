import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const router=new Router({
    routes:[{path:"/profile",component:()=>import('../views/profile/Profile.vue')}]
})
export default router