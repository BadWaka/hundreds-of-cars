<template>
  <header class="header">
    <!--<div class="img-left" :style="{'background-image':'url('+imgSrc+')'}"></div>-->
    <div class="right">
      <h1 class="title">{{title}}</h1>
      <!--<h2 class="sub-title">{{subTitle}}</h2>-->
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1828354-8b9f339cd1b05194.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        title: 'Maxine',
        subTitle: 'It is beautiful, smart, love study, good figure, smile, reading good, diligence, progresses Maxine.',
        subTitle2: '我就是又好看又聪明又爱笑身材好学习好又爱读书爱学习勤奋上进的 Maxine',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .header {
    display: flex;
    align-items: center;
    height: 80px;
    background: $primaryColor;
    color: $white;

    .img-left {
      margin-left: 100px;
      width: 60px;
      height: 60px;
      background: center no-repeat;
      background-size: cover;
      border-radius: 50%;
    }

    .right {
      margin-left: 40px;

      .title {
        font-size: 28px;
      }

      .sub-title {
        margin-top: 5px;
        font-size: 14px;
        color: #555;
      }
    }
  }
</style>
