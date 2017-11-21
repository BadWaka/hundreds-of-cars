<template>
  <section class="index c-gap-inner-header">
    <!--轮播-->
    <el-carousel height="600px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img"
             :style="{'background-image':'url('+item.imgSrc+')'}"></div>
      </el-carousel-item>
    </el-carousel>
    <!--版心-->
    <section class="c-container">
      <!--搜索-->
      <search class="search"></search>
    </section>
  </section>
</template>

<script>
  import MFooter from '../../components/MFooter/MFooter.vue';
  import Search from '../../components/Search/Search.vue';

  export default {
    name: 'Index',
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
      Search,
      MFooter
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

  .index {

    .search {
      margin: 0 auto;
      width: $contentWidth;
    }
  }
</style>
