<template>
  <section class="normal-card">
    <h2 class="title">{{title}}</h2>
    <h3 class="sub-title">{{subTitle}}</h3>
    <div class="img" :style="{'background-image':'url('+imgSrc+')'}"></div>
    <div class="bottom">
      <span>{{bottomInfo}}</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NormalCard',
    props: [
      'title',
      'subTitle',
      'imgSrc',
      'bottomInfo'
    ],
    data() {
      return {
        type: 'normal',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app.scss";

  // normal-card
  .normal-card {
    width: $contentWidth;
    margin: 0 auto;
    padding: 80px 0;
    color: $primaryColor;
    text-align: center;

    .title {
      font-size: 30px;
    }

    .sub-title {
      margin-top: 20px;
      font-size: 20px;
    }

    .img {
      margin-top: 20px;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      background: center no-repeat;
      background-size: cover;
    }

    .bottom {
      margin-top: 20px;
      font-size: 14px;
      text-align: right;
    }
  }
</style>
