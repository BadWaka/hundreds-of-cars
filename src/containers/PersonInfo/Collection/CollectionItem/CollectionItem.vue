<template>
  <section class="collection-item">
    <div class="row1">
      <el-checkbox>对比</el-checkbox>
    </div>
    <div
      class="img c-gap-top"
      :style="{
        'background-image': 'url(' + data.imgSrc + ')'
      }">
    </div>
    <div class="c-gap-top-20">{{data.title}}</div>
    <div class="c-font-20">{{data.price}}</div>

    <section class="bottom">
      <section class="left">
        <div>
          <span class="c-color-grey">里程数：</span>{{data.mileage}}
        </div>
        <div>
          <span class="c-color-grey">车身颜色：</span>{{data.carColor}}
        </div>
        <div>
          <span class="c-color-grey">油耗：</span>{{data.fuelConsumption}}
        </div>
      </section>
      <section class="right">
        <div>
          <span class="c-color-grey">内饰颜色：</span>{{data.insideColor}}
        </div>
        <div>
          <span class="c-color-grey">车体：</span>{{data.carBody}}
        </div>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'CollectionItem',
    props: ['data'],
    data() {
      return {
        // data: {
        //   imgSrc: 'http://img.hb.aicdn.com/0435793935078f948ad3edc0e24b6c05a8c1b260320b1-TE5bwL_fw658',
        //   title: '新款 2016 一汽-大众 CC 1.8T',
        //   price: '17.70万起',
        //   mileage: '3000公里',  // 里程
        //   carColor: '白色', // 车身颜色
        //   insideColor: '沙色/黑色', // 内饰颜色
        //   fuelConsumption: '7.5L', // 油耗
        //   carBody: '三厢',  // 车体
        // }
      }
    },
    components: {},
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../../assets/app";

  .collection-item {
    width: 400px;

    .row1 {
      text-align: right;
    }

    .img {
      width: 400px;
      height: 240px;
      background: no-repeat center;
      background-size: cover;
    }

    .bottom {
      display: flex;
      margin-top: 40px;

      .right {
        margin-left: 60px;
      }
    }
  }

</style>
