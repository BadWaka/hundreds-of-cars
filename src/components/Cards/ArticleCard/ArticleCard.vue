<template>
  <section class="article-card">
    <section class="wrapper">
      <!--文本区域-->
      <section class="text">
        <div class="row1">
          <div class="left">
            <div class="avatar" :style="{'background-image':'url('+authorAvatarSrc+')'}"></div>
            <div class="author-name">{{authorName}}</div>
          </div>
          <div class="time">{{time}}</div>
        </div>
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
      </section>
      <!--图片-->
      <img class="img" :src="imgSrc"/>
      <div class="row-bottom">
        <div class="left">
          <div class="view">
            {{viewCount}} view
            <i class="el-icon-view"></i>
          </div>
          <div class="favor">
            {{favorCount}} favor
            <i class="el-icon-star-off"></i>
          </div>
        </div>
        <div class="like">
          {{likeCount}} likes
          <i class="iconfont icon-xin"></i>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'ArticleCard',
    props: [
      'authorAvatarSrc',
      'authorName',
      'time',
      'title',
      'content',
      'imgSrc',
      'likeCount',
      'viewCount',
      'favorCount'
    ],
    data() {
      return {
        type: 'article',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app.scss";

  // img-content-card
  .article-card {
    width: $contentWidth;
    margin: 0 auto;
    padding: 80px 10%;
    color: $primaryColor;
    text-align: left;

    .wrapper {
      border: 1px solid $primaryColor;
      box-sizing: border-box;
    }

    .text {
      padding: 20px 40px;

      .row1 {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          align-items: center;

          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: center no-repeat;
            background-size: cover;
          }

          .author-name {
            margin-left: 20px;
          }
        }
      }

      .title {
        margin-top: 20px;
        font-size: 30px;
      }

      .content {
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.5;
      }
    }

    .img {
      width: 100%;
    }

    .row-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 40px 40px 40px;

      .left {
        display: flex;
        align-items: center;

        .favor {
          margin-left: 60px;
        }

        .like {
          .icon-xin {
            color: $red500;
          }
        }
      }
    }
  }
</style>
