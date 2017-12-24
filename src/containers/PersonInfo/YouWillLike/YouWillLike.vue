<template>
  <section class="recently-viewed c-gap-top-20">
    <div class="c-font-20">您可能还喜欢</div>
    <section class="c-gap-top-20">
      <el-carousel
        :interval="40000"
        type="card"
        height="200px"
        arrow="hover">
        <el-carousel-item v-for="item in 6" :key="item">
          <car-item-view-btn></car-item-view-btn>
        </el-carousel-item>
      </el-carousel>
    </section>
  </section>
</template>

<script>
  import CarItemViewBtn from '../../../components/CarItem/CarItemViewBtn/CarItemViewBtn';

  export default {
    name: 'RecentlyViewed',
    data() {
      return {}
    },
    components: {
      CarItemViewBtn
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../assets/app";

  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-carousel__mask {
    // opacity: 0;
  }

  .el-carousel__item.el-carousel__item--card {
    // z-index: -1;
  }

  .el-carousel__item--card.is-in-stage {
    // z-index: 1;
  }

  .el-carousel__item.el-carousel__item--card .is-in-stage {
  }

</style>
