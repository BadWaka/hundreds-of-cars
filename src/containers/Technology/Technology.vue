<template>
  <section class="technology">
    <!--卡片们-->
    <section v-for="(item, index) in cards" :key="index" class="card-item">
      <normal-card v-if="item.type==='normal'"></normal-card>
      <imgs-card v-if="item.type==='imgs'"></imgs-card>
      <img-content-card v-if="item.type==='img-content'"></img-content-card>
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
    name: 'Technology',
    data() {
      return {
        cards: [
          {
            type: 'article',
            authorAvatarSrc: 'http://upload-images.jianshu.io/upload_images/1828354-8b9f339cd1b05194.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            authorName: 'Maxine',
            time: '2 hours ago',
            title: 'PaddlePaddle KindleKindle HandleHandle LittleLittle',
            content: 'Let us begin the tutorial with a classical problem called Linear Regression [1]. In this chapter, we will train a model from a realistic dataset to predict home prices. Some important concepts in Machine Learning will be covered through this example.',
            imgSrc: 'http://www.paddlepaddle.org/images/service-1.png',
            likeCount: 123,
            viewCount: 4215,
            favorCount: 31,
          },
          {
            type: 'article',
            authorAvatarSrc: 'http://upload-images.jianshu.io/upload_images/1828354-8b9f339cd1b05194.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            authorName: 'Maxine',
            time: '2017-11-04',
            title: 'Get start with Hadoop',
            content: 'The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures.',
            imgSrc: 'http://img5.imgtn.bdimg.com/it/u=3929331644,681449179&fm=27&gp=0.jpg',
            likeCount: 12,
            viewCount: 123,
            favorCount: 1,
          },
          {
            type: 'article',
            authorAvatarSrc: 'http://upload-images.jianshu.io/upload_images/1828354-8b9f339cd1b05194.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            authorName: 'Maxine',
            time: '2017-11-03',
            title: 'Spring Source Code Reader Response',
            content: 'Spring Boot is designed to get you up and running as quickly as possible, with minimal upfront configuration of Spring. Spring Boot takes an opinionated view of building production ready applications.\nBuilt directly on Spring Boot\'s innovative approach to enterprise Java, Spring Cloud simplifies distributed, microservice-style architecture by implementing proven patterns to bring resilience, reliability, and coordination to your microservices.',
            imgSrc: 'http://spring.io/img/homepage/diagram-boot-reactor.svg',
            likeCount: 3128,
            viewCount: 29839,
            favorCount: 123,
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
