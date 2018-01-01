<template>
  <section class="select">
    MSelect
    <i class="el-icon-arrow-down"></i>
  </section>
</template>

<script>
  export default {
    name: 'MSelect',
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .select {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $primaryColor;
    height: 50px;

    .el-icon-arrow-down {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 20px;
    }
  }

</style>
