<template>
  <section class="img-content-card">
    <div class="wrapper">
      <div class="img-left" :style="{'background-image':'url('+imgSrc+')','background-size':imgBackgroundSize}"></div>
      <div class="right">
        <h2 class="title">{{title}}</h2>
        <p class="content">{{content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ImgContentCard',
    props: [
      'title',
      'content',
      'imgSrc',
      'imgBackgroundSize'
    ],
    data() {
      return {
        type: 'img-content',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app.scss";

  // img-content-card
  .img-content-card {
    width: $contentWidth;
    margin: 0 auto;
    padding: 80px 0;
    color: $primaryColor;
    text-align: center;

    .wrapper {
      display: flex;
      background: #F0F0EE;

      .img-left {
        flex-shrink: 0;
        width: 300px;
        height: 500px;
        background: center no-repeat;
        background-size: cover;
      }

      .right {
        margin-left: 50px;
        text-align: left;

        .title {
          margin-top: 150px;
          font-size: 30px;
          line-height: 1.5;
        }

        .content {
          padding-right: 40px;
          margin-top: 40px;
          line-height: 1.5;
        }
      }
    }
  }
</style>
