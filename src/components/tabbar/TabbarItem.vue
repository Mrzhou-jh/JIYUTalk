<template>
  <div class="tabbar-item">
    <slot name="img"></slot>
    <slot name="text">文字图片</slot>
  </div>
</template>
<script>
export default {
  name: "TabbarItem"
};
</script>
<style lang="scss" scoped>
.tabbar-item {
  flex: 1;
}
</style>