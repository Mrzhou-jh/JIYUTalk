<template>
  <div class="tabbar-item" @click="$emit('click')">
    <div class="setimg">
        <slot name="setimg">图片</slot>
    </div>
    <slot name="text">文字</slot>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size:12px;
}
</style>