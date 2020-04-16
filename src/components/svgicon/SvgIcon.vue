<template>
  <svg class="svgicon" :class="{ 'loading-animation': loading }">
    <use :xlink:href="`#i-${iconname}`" />
  </svg>
</template>
<script>
export default {
  name: "svgicon",
  props: {
    iconname: {},
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-animation {
  animation: loading-animation 1s infinite linear;
}
.svgicon {
  height: 2em;
  width: 2em;
  vertical-align: middle;
  margin-right: 0.2em;
  margin-top: 3px;
}
</style>
