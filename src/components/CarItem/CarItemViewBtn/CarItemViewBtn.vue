<!--有查看按钮的汽车项-->
<template>
  <section
    class="car-item-view-btn"
    :style="{
      'background-image':'url(' + data.imgSrc + ')'
    }"
    @click="handleClick">
    <el-button
      class="view-btn"
      type="success"
      size="mini"
      @click="handleViewBtnClick">
      查看
    </el-button>
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
      },
      handleViewBtnClick() {
        this.$emit('clickViewBtn');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .car-item-view-btn {
    position: relative;
    width: 300px;
    height: 200px;
    background: no-repeat center;
    background-size: cover;

    .view-btn {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }

</style>
