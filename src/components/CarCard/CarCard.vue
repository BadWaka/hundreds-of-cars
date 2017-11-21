<template>
  <section class="car-card">
    <!--左边的图-->
    <div
      class="left-img"
      :style="{'background-image':'url('+imgSrc+')'}">
    </div>
    <!--中间-->
    <section class="middle">
      <h2 class="row1">
        {{title}}
      </h2>
      <div class="row2">
        <span>{{price}}</span>
        <span class="c-gap-left">官方零售价：{{officePrice}}</span>
      </div>
      <div class="row3">
        距离：{{distance}}
      </div>
      <div class="row4">
        里程数：{{mileage}}
      </div>
      <div class="row5">
        <span>车身颜色：{{carColor}}</span>
        <span>内饰颜色：{{insideColor}}</span>
      </div>
      <div class="row6">
        <span>油耗：{{fuelConsumption}}</span>
        <span>车体：{{carBody}}</span>
      </div>
    </section>
    <!--右侧-->
    <section class="right">

    </section>
  </section>
</template>

<script>
  export default {
    name: 'CarCard',
    data() {
      return {
        imgSrc: 'http://img.hb.aicdn.com/aaab09042b57e0a1def2b0db78b0d0a724a0e38d15c47a-WdWpa0_fw658',
        title: '新款 2016一汽-大众 CC 1.8T',
        price: '17.70万起',
        officePrice: '18.9万起',
        distance: '5公里',
        mileage: '3000公里',
        carColor: '白色',
        insideColor: '沙色/黑色',
        // 油耗
        fuelConsumption: '7.5L',
        carBody: '三厢',
        isStar: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .car-card {
    display: flex;
    padding: 20px 40px;
    border: 1px solid $secondColor;

    .left-img {
      background: center no-repeat;
      background-size: cover;
      width: 280px;
      height: 160px;
    }

    .middle {
      width: 350px;
    }
  }
</style>
