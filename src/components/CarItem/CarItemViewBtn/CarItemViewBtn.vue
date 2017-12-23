<!--有查看按钮的汽车项-->
<template>
  <section
    class="car-item-view-btn"
    :style="{
      'background-image':'url(' + data.imgSrc + ')'
    }"
    @click.stop="handleClick">

  </section>
</template>

<script>
  export default {
    name: 'CarItemViewBtn',
    data() {
      return {
        data: {
          imgSrc: 'http://img.hb.aicdn.com/d545c2b23991c40c63503f4031ec9da7c0c5f5c724266-i8VQCi_fw658'
        }
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .car-item-view-btn {
    width: 400px;
    height: 0;
    padding-bottom: 30%;
    background: no-repeat center;
    background-size: cover;
  }

</style>
