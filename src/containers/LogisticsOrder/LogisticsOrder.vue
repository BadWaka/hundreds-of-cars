<template>
  <section class="logistics-order c-gap-inner-header c-container">
    <!--物流订单模板-->
    <div class="c-gap-top-20 c-font-20">物流订单模板</div>
    <section class="c-gap-top-20">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
    </section>
    <!--第二行-->
    <section class="c-flex row2">
      <!--已保存模板-->
      <section class="row-item">
        <div class="c-font-20">已保存模板</div>
        <section class="c-gap-top">
          <div
            v-for="(item, index) in data.saveTemplates"
            :key="index">
            {{item.text}}
          </div>
        </section>
      </section>
      <!--已接收报价-->
      <section class="row-item">
        <div class="c-font-20">已接收报价</div>
        <section class="c-gap-top">
          <div
            v-for="(item, index) in data.receivePrices"
            :key="index">
            {{item.text}}
          </div>
        </section>
      </section>
      <!--已忽略报价-->
      <section class="row-item-full-width">
        <div class="c-font-20">已忽略报价</div>
        <section class="c-gap-top">
          <div
            v-for="(item, index) in data.ignorePrices"
            :key="index">
            {{item.text}}
          </div>
        </section>
      </section>
      <!--正在执行订单-->
      <section class="row-item-full-width">
        <div class="c-font-20">正在执行订单</div>
        <section class="c-gap-top">
          <div
            v-for="(item, index) in data.processingOrders"
            :key="index">
            {{item.text}}
          </div>
        </section>
      </section>
    </section>
    <!--分隔线-->
    <section class="divider c-divider"></section>
    <!--车辆信息-->
    <section class="car-info">
      <div class="c-font-20">车辆信息</div>
      <div class="c-gap-top-20 c-flex">
        <div class="c-gap-right-20">品牌：{{data.carInfo.brand}}</div>
        <div class="c-gap-right-20">年份：{{data.carInfo.year}}</div>
        <div class="c-gap-right-20">车款：{{data.carInfo.price}}</div>
        <div class="c-gap-right-20">车体：{{data.carInfo.body}}</div>
        <div class="c-gap-right-20">颜色：{{data.carInfo.color}}</div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'LogisticsOrder',
    data() {
      return {
        data: {
          // 已保存模板
          saveTemplates: [
            {
              text: '2016 奔驰 CLA 车架号'
            },
            {
              text: '2016 宝马 X5 车架号'
            },
          ],
          // 已接收报价
          receivePrices: [
            {
              text: '中单物流 CLA 车架号 ￥3000',
            },
            {
              text: '上单物流 CLA 车架号 ￥3500',
            },
          ],
          // 已忽略报价
          ignorePrices: [
            {
              text: 'Carry 物流 CLA 车架号 ￥5000',
            },
          ],
          // 正在执行订单
          processingOrders: [
            {
              text: '2016 奔驰 CLA 车架号 ￥5000 ---------------- 中单物流',
            },
          ],
          // 车辆信息
          carInfo: {
            brand: '',  // 品牌
            year: '', // 年份
            price: '',  // 车款
            body: '', // 车体
            color: '',  // 颜色
          }
        }
      }
    },
    components: {},
    methods: {
      handlePictureCardPreview() {
        console.log('handlePictureCardPreview');
      },
      handleRemove() {
        console.log('handleRemove');
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";

  .logistics-order {

    .row2 {
      flex-wrap: wrap;
      align-items: start;

      .row-item, .row-item-full-width {
        margin-top: 40px;
      }

      .row-item {
        width: 50%;
      }

      .row-item-full-width {
        width: 100%;
      }
    }

    .divider {
      margin-top: 40px;
      margin-bottom: 40px;
      height: 1px;
    }

  }

</style>
