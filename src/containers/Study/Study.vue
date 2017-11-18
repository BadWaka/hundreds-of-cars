<template>
  <section class="study">
    <!--卡片们-->
    <section v-for="(item, index) in cards" :key="index" class="card-item">
      <normal-card v-if="item.type==='normal'"></normal-card>
      <imgs-card v-if="item.type==='imgs'"></imgs-card>
      <img-content-card
        v-if="item.type==='img-content'"
        :title="item.title"
        :content="item.content"
        :imgSrc="item.imgSrc"
      ></img-content-card>
      <article-card
        v-if="item.type==='article'"
        :authorAvatarSrc="item.authorAvatarSrc"
        :authorName="item.authorName"
        :time="item.time"
        :title="item.title"
        :content="item.content"
        :imgSrc="item.imgSrc"
        :likeCount="item.likeCount"
        :viewCount="item.viewCount"
        :favorCount="item.favorCount"
      ></article-card>
    </section>
  </section>
</template>

<script>
  import NormalCard from '../../components/Cards/NormalCard/NormalCard.vue';
  import ImgsCard from '../../components/Cards/ImgsCard/ImgsCard.vue';
  import ImgContentCard from '../../components/Cards/ImgContentCard/ImgContentCard.vue';
  import ArticleCard from '../../components/Cards/ArticleCard/ArticleCard.vue';

  export default {
    name: 'Study',
    data() {
      return {
        cards: [
          {
            type: 'img-content',
            title: '4',
            content: 'Let us begin the tutorial with a classical problem called Linear Regression [1]. In this chapter, we will train a model from a realistic dataset to predict home prices. Some important concepts in Machine Learning will be covered through this example.',
            imgSrc: 'http://upload-images.jianshu.io/upload_images/1828354-d947d61e6cb755fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          },
          {
            type: 'img-content',
            title: '3',
            content: 'Let us begin the tutorial with a classical problem called Linear Regression [1]. In this chapter, we will train a model from a realistic dataset to predict home prices. Some important concepts in Machine Learning will be covered through this example.',
            imgSrc: 'http://upload-images.jianshu.io/upload_images/1828354-a7ea7ba8317c9514.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          },
          {
            type: 'img-content',
            title: '2',
            content: 'Let us begin the tutorial with a classical problem called Linear Regression [1]. In this chapter, we will train a model from a realistic dataset to predict home prices. Some important concepts in Machine Learning will be covered through this example.',
            imgSrc: 'http://upload-images.jianshu.io/upload_images/1828354-a2a7d1faeef8a15c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          },
          {
            type: 'img-content',
            title: '1',
            content: 'http://upload-images.jianshu.io/upload_images/1828354-cc14f7d870a37f7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            imgSrc: 'http://upload-images.jianshu.io/upload_images/1828354-cc14f7d870a37f7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          },
        ]
      }
    },
    components: {
      NormalCard,
      ImgsCard,
      ImgContentCard,
      ArticleCard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
