<template>
  <section class="imgs-card">
    <h2 class="title">{{title}}</h2>
    <ul class="imgs">
      <li v-for="(item, index) in imgs" :key="index" class="img-item">
        <div class="img" :style="{'background-image':'url('+item.imgSrc+')'}"></div>
        <ul class="texts">
          <li v-for="(item2, index2) in item.texts" :key="index2" class="text-item">
            {{item2}}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'ImgsCard',
    props: [
      'title',
      'imgs'
    ],
    data() {
      return {
        type: 'imgs',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app.scss";

  // normal-card
  .imgs-card {
    width: $contentWidth;
    margin: 0 auto;
    padding: 80px 0;
    color: $primaryColor;
    text-align: center;

    .title {
      font-size: 30px;
    }

    .imgs {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      .img-item {
        transition: 0.5s;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          opacity: .5;
        }

        .img {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: center no-repeat;
          background-size: cover;
        }

        .texts {

          .text-item {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
