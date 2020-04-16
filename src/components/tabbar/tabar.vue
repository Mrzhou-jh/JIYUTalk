<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar"
};
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: rgba(180, 170, 170, 0.1);
}
</style>