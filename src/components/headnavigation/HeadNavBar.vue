<template>
  <div class="head-nav-bar">
    <div class="bar-left" @click="$emit('click')">
      <slot name="nav-bar-left"></slot>
    </div>
    <div class="bar-center">
      <slot name="nav-bar-center"></slot>
    </div>
    <div class="bar-right">
      <slot name="nav-bar-right"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.head-nav-bar {
  box-sizing: border-box;
  height: 44px;
  min-width: 320px;
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  .bar-left {
    height: 34px;
    width: 34px;
    margin-left: 16px;
  }
  .bar-center {
    flex: 1;
    text-align: center;
    line-height: 44px;
  }
  .bar-right {
    height: 34px;
    width: 34px;
    line-height: 34px;
    margin-right: 16px;
  }
}
</style>