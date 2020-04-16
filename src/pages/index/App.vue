<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item>
        <svg-icon slot="setimg" iconname="xiaoxi"></svg-icon>
        <div slot="text">消息</div>
      </tabbar-item>
      <tabbar-item>
        <svg-icon slot="setimg" iconname="lianxiren"></svg-icon>
        <div slot="text">联系人</div>
      </tabbar-item>
      <tabbar-item @click="cc">
        <svg-icon slot="setimg" iconname="icon_wode-"></svg-icon>
        <div slot="text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
export default {
  methods:{
    cc(){
      this.$router.push('/profile')
    }
  }
};
</script>
<style lang="scss" >
@import "../../assets/scss/base.scss";
</style>