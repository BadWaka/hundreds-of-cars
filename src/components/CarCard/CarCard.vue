<template>
  <section class="car-card">
    <!--左边的图-->
    <div
      class="left-img"
      :style="{'background-image':'url('+imgSrc+')'}">
    </div>
    <!--中间-->
    <section class="middle c-gap-inner-left-20 c-gap-inner-right-20">
      <h2 class="row1">
        {{title}}
      </h2>
      <div class="row2">
        <span class="c-font-big">{{price}}</span>
        <span class="c-gap-left c-color-grey">官方零售价：{{officialPrice}}</span>
      </div>
      <div class="row4 c-gap-top-20">
        <span>
          <span class="c-color-grey">距离：</span>
          {{distance}}
        </span>
        <span>
          <span class="c-color-grey">里程数：</span>
          {{mileage}}
        </span>
      </div>
      <div class="row5">
        <span>
          <span class="c-color-grey">车身颜色：</span>
          {{carColor}}
        </span>
        <span>
          <span class="c-color-grey">内饰颜色：</span>
          {{insideColor}}
        </span>
      </div>
      <div class="row6">
        <span>
          <span class="c-color-grey">油耗：</span>
          {{fuelConsumption}}
        </span>
        <span>
          <span class="c-color-grey">车体：</span>
          {{carBody}}
        </span>
      </div>
      <!--收藏-->
      <div
        class="star c-btn"
        @click="handleStarClick">
        <i
          v-if="isStar"
          class="el-icon-star-on">
        </i>
        <i
          v-if="!isStar"
          class="el-icon-star-off">
        </i>
        收藏
      </div>
    </section>
    <!--右侧-->
    <section class="right">
      <div class="c-gap-bottom-20">车行信息</div>
      <div class="c-gap-bottom-20">车行编号</div>
      <div>联系方式</div>
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
        officialPrice: '18.9万起',  // 官方售价
        distance: '5公里',  // 距离
        mileage: '3000公里',  // 里程
        carColor: '白色', // 车身颜色
        insideColor: '沙色/黑色', // 内饰颜色
        fuelConsumption: '7.5L',  // 油耗
        carBody: '三厢',  // 车体
        isStar: false,
      }
    },
    methods: {
      handleStarClick() {
        this.isStar = !this.isStar;
        this.$emit('onStarClick');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .car-card {
    display: flex;
    padding: 20px 0 20px 20px;
    border: 1px solid $secondColor;
    background: #fff;

    .left-img {
      background: center no-repeat;
      background-size: cover;
      width: 280px;
      height: 160px;
    }

    .middle {
      position: relative;
      width: 350px;
      border-right: 1px solid $secondColor;

      .row2, .row5, .row4, .row6 {
        display: flex;
        justify-content: space-between;
      }

      .star {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: -12px;
        right: -12px;
        background: #fff;
        font-size: 12px;

        & i {
          font-size: 18px;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
