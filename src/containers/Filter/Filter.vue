<template>
  <section class="filter c-gap-inner-header">
    <!--轮播-->
    <el-carousel height="600px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img"
             :style="{'background-image':'url('+item.imgSrc+')'}"></div>
      </el-carousel-item>
    </el-carousel>
    <!--版心-->
    <section class="c-container">
      <!--下方-->
      <section class="bottom">
        <!--左侧-->
        <filter-left></filter-left>
        <!--右侧-->
        <section class="right">
          <!--顶部-->
          <filter-top></filter-top>
          <!--下部内容-->
          <section class="content c-gap-top-20">
            <car-card
              class="c-gap-top-20"
              v-for="(item, index) in 6"
              :key="index">
            </car-card>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import FilterTop from './FilterTop/FilterTop.vue';
  import FilterLeft from './FilterLeft/FilterLeft.vue';
  import CarCard from '../../components/CarCard/CarCard.vue';

  export default {
    name: 'Filter',
    data() {
      return {
        banners: [
          {
            imgSrc: 'http://desk.fd.zol-img.com.cn/t_s1600x900c5/g5/M00/0F/09/ChMkJlauza6IOuzjAAQRQ6b4SjAAAH9HQJb4NcABBFb471.jpg'
          },
          {
            imgSrc: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0F/09/ChMkJ1auza6ICkGRAAJCuW6kUvcAAH9HQJp9QgAAkLR000.jpg'
          },
          {
            imgSrc: 'http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/0F/09/ChMkJlauza6IQed-ABe8YwuAco8AAH9HQLHsPAAF7x7859.jpg'
          }
        ],
      }
    },
    components: {
      FilterTop,
      FilterLeft,
      CarCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .card-item:nth-child(2n) {
    background: $grey100;
  }

  .el-carousel__container {
  }

  .el-carousel__item .img {
    width: 100%;
    height: 100%;
    background: center no-repeat;
    background-size: cover;
  }

  .filter {

    .bottom {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      .right {

        .content {

        }
      }
    }
  }
</style>
