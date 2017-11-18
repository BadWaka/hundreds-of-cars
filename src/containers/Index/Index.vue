<template>
  <section class="index">
    <!--轮播-->
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img"
             :style="{'background-image':'url('+item.imgSrc+')'}"></div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        banners: [
          {
            imgSrc: 'http://img.hb.aicdn.com/44d7e4a4a4f65e93421a0eb8292b0c17bd63d2e7544b3-xqXKft_fw658'
          },
          {
            imgSrc: 'http://img.hb.aicdn.com/e5994de8e9551d92236e2a7ab850c283e0d215768bdd5-3mQQF5_fw658'
          },
          {
            imgSrc: 'http://img.hb.aicdn.com/c26d7dcdce9a219ad98cbfec2c51be9e03915f1269d22-NmO1F0_fw658'
          }
        ],
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .card-item:nth-child(2n) {
    background: $grey100;
  }

  .el-carousel__item .img {
    height: 500px;
    background: center no-repeat;
    background-size: cover;
  }
</style>
