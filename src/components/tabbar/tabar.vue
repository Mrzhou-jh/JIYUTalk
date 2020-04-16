<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  left: 0;
  right: 0;
}
</style>