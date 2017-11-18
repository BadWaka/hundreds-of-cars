<template>
  <section class="index">
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
        cards: [
          {
            type: 'normal',
            title: '"Your smiling at me is my daily dose of magic."',
            subTitle: '"At the touch of love, everyone becomes a poet."',
            imgSrc: 'http://img.hb.aicdn.com/c3eaaebd8abf3378abe814fc67317a89a527b35e785ea-YcUNHD_fw658',
            bottomInfo: '"meow ~ "',
          },
          {
            type: 'imgs',
            title: '"A year from now you will wish you had started today."',
            imgs: [
              {
                imgSrc: 'http://img.hb.aicdn.com/f6844c84f52021f2486e795d596f5e6026dc12022318b-Yh6QFj_fw658',
                url: '',
                texts: [
                  '"Humility"'
                ]
              },
              {
                imgSrc: 'http://img.hb.aicdn.com/5da54447bb7b7044597542f229af779a9487726d1efa6-bkN7K3_fw658',
                url: '',
                texts: [
                  '"Integrity"',
                  '"Compassion"'
                ]
              },
              {
                imgSrc: 'http://img.hb.aicdn.com/878869ab0b834521a9793516115c3d8b2dc019cc21b53-1ayVgV_fw658',
                url: '',
                texts: [
                  '"Courage"',
                  '"Justice',
                  '"Sacrifice"',
                  '"Honor"'
                ]
              },
            ]
          },
          {
            type: 'img-content',
            title: '"My life didn’t please me, so I created my life."',
            content: 'Coco Chanel, Fashion Designer',
            imgSrc: 'http://img.hb.aicdn.com/3be040f4bcc088e6ca90de1c02fa3a86f4bc00ad812f8-5gVpRb_fw658',
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
