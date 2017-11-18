<template>
  <header class="header">
    header
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .header {
    display: flex;
    align-items: center;
    height: 80px;
    background: $primaryColor;
    color: $white;
  }
</style>
