<template>
  <div>
    <div>index页面</div>
    <head-nav-bar>
      <!-- <base-user-img slot="nav-bar-left" url="/public/logo.png"></base-user-img> -->
    </head-nav-bar>
    <tabbar>
      <tabbar-item>
        <svg-icon slot="setimg" iconname="xiaoxi"></svg-icon>
        <div slot="text">消息</div>
      </tabbar-item>
      <tabbar-item>
        <svg-icon slot="setimg" iconname="lianxiren"></svg-icon>
        <div slot="text">联系人</div>
      </tabbar-item>
      <tabbar-item>
        <svg-icon slot="setimg" iconname="icon_wode-"></svg-icon>
        <div slot="text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" >
@import "../../assets/scss/base.scss";
</style>