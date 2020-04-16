<template>
  <div>
    <head-nav-bar>
      <svg-icon slot="nav-bar-left" iconname="arrowLeft"></svg-icon>
      <!-- <base-user-img slot="nav-bar-left" url="/public/logo.png"></base-user-img> -->
      <span slot="nav-bar-right" @click="goRegis">{{regis}}</span>
    </head-nav-bar>
    <LoginRegistered :isRegis="isRegis">
      <img slot="logo" width="80px" src="../../assets/img/43126_g.jpg" />
    </LoginRegistered>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: "LogIn",
  data() {
    return { regis: "注册", isRegis: false };
  },
  methods: {
    goRegis() {
      this.isRegis = !this.isRegis;
      this.regis = this.isRegis ? "登入" : "注册";
    }
  }
};
</script>     
<style lang="scss" >
@import "../../assets/scss/base.scss";
</style>