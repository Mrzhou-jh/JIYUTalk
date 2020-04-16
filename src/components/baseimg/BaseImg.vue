<template>
  <img :src="url" />
</template>
<script>
export default {
  name: "BaseImg",
  props: {
    url: {}
  }
};
</script>
<style lang="scss" scoped>
</style>