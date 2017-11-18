<template>
  <section class="img2-card">
    <div v-for="(item, index) in list" :key="index" class="item">
      <div class="img" :style="{'background-image':'url('+item.imgSrc+')'}"></div>
      <section class="text">
        <div class="title">{{item.title}}</div>
        <div class="sub-title">{{item.subTitle}}</div>
        <div class="bottom">{{item.bottom}}</div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Img2Card',
    props: [
      'list'
    ],
    data() {
      return {
        type: 'img2',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app.scss";

  .img2-card {
    width: $contentWidth;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 80px 0;
    color: $primaryColor;
    text-align: center;

    .item {
      flex-shrink: 1;
      height: 500px;
      width: 490px;
      margin-top: 20px;
      border: 1px solid #555;
      box-sizing: border-box;

      &:nth-child(2n) {
        margin-left: 20px;
      }

      .img {
        height: 300px;
        background: center no-repeat;
        background-size: cover;
      }

      .text {
        padding: 40px;

        .title {
          font-size: 30px;
        }

        .sub-title {
          margin-top: 20px;
        }

        .bottom {
          margin-top: 20px;
        }
      }
    }

  }
</style>
