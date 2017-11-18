<template>
  <section class="exercise">
    <!--轮播-->
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img"
             :style="{'background-image':'url('+item.imgSrc+')'}"></div>
      </el-carousel-item>
    </el-carousel>

    <!--卡片们-->
    <section v-for="(item, index) in cards" :key="index" class="card-item">
      <normal-card
        v-if="item.type==='normal'"
        :title="item.title"
        :subTitle="item.subTitle"
        :imgSrc="item.imgSrc"
        :bottomInfo="item.bottomInfo"
      ></normal-card>
      <imgs-card
        v-if="item.type==='imgs'"
        :title="item.title"
        :imgs="item.imgs"
      ></imgs-card>
      <img2-card
        v-if="item.type==='img2'"
        :list="item.list"
      ></img2-card>
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
  import Img2Card from '../../components/Cards/Img2Card/Img2Card.vue';
  import ImgContentCard from '../../components/Cards/ImgContentCard/ImgContentCard.vue';
  import ArticleCard from '../../components/Cards/ArticleCard/ArticleCard.vue';

  export default {
    name: 'Index',
    data() {
      return {
        banners: [
          {
            imgSrc: 'http://img.hb.aicdn.com/1f9cf961849d1cb81bbdfa7b99b42d43b3303a94b599-b9fk46_fw658'
          },
          {
            imgSrc: 'http://img.hb.aicdn.com/f63c80e5ca10e28f5f9da728e40ce6aa1cb6efd93b18f-mfhaYF_fw658'
          },
          {
            imgSrc: 'http://img.hb.aicdn.com/85d40874ba6639ecd117d0e6634e3e7fba19a87c5bc17-oBsj2j_fw658'
          }
        ],
        cards: [
          {
            type: 'img2',
            list: [
              {
                imgSrc: 'https://static1.gotokeep.com/picture/frame/1501124837448.jpg',
                title: 'title',
                subTitle: 'subTitle',
                bottom: 'bottom'
              },
              {
                imgSrc: 'https://static1.gotokeep.com/picture/frame/1502965180225.jpg',
                title: 'title',
                subTitle: 'subTitle',
                bottom: 'bottom'
              },
              {
                imgSrc: 'https://static1.gotokeep.com/picture/frame/1501041916064.jpg',
                title: 'title',
                subTitle: 'subTitle',
                bottom: 'bottom'
              },
              {
                imgSrc: 'https://static1.gotokeep.com/picture/frame/1500629848507.jpg',
                title: 'title',
                subTitle: 'subTitle',
                bottom: 'bottom'
              },
              {
                imgSrc: 'https://static1.gotokeep.com/picture/frame/1501048490556.jpg',
                title: 'title',
                subTitle: 'subTitle',
                bottom: 'bottom'
              },
            ]
          },
        ]
      }
    },
    components: {
      NormalCard,
      ImgsCard,
      ImgContentCard,
      ArticleCard,
      Img2Card
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
