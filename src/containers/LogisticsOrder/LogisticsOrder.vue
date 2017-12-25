<template>
  <section class="logistics-order c-gap-inner-header c-container">
    <!--物流订单模板-->
    <div class="c-gap-top-20 c-font-20 c-bold">物流订单模板</div>
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
        <div class="c-font-20 c-bold">已保存模板</div>
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
        <div class="c-font-20 c-bold">已接收报价</div>
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
        <div class="c-font-20 c-bold">已忽略报价</div>
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
        <div class="c-font-20 c-bold">正在执行订单</div>
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
      <div class="c-font-20 c-bold">车辆信息</div>
      <div class="c-gap-top-20 c-flex">
        <div class="c-gap-right-20">品牌：{{data.carInfo.brand}}</div>
        <div class="c-gap-right-20">年份：{{data.carInfo.year}}</div>
        <div class="c-gap-right-20">车款：{{data.carInfo.price}}</div>
        <div class="c-gap-right-20">车体：{{data.carInfo.body}}</div>
        <div class="c-gap-right-20">颜色：{{data.carInfo.color}}</div>
      </div>
      <div class="c-gap-top c-flex">
        <div class="c-gap-right-20">车架号：</div>
        <div class="c-gap-right-20">投保金额：</div>
      </div>
      <div class="c-gap-top">第一联系人：____ 先生 / 女士</div>
      <div class="c-gap-top">联系号码：____</div>
    </section>
    <!--联系人：（第一联系人）-->
    <section class="contact">
      <div class="c-font-20 c-bold">联系人（第一联系人）</div>
      <div class="c-gap-top-20 c-flex">
        <div class="c-gap-right-20">____ 先生 / 女士</div>
        <div class="c-gap-right-20">联系号码：_______________</div>
      </div>
    </section>
    <!--车辆所在地址-->
    <section class="carAddress c-gap-top-40">
      <div class="c-font-20 c-bold">车辆所在地址</div>
      <div class="c-gap-top-20 c-flex">
        <el-cascader
          class="c-gap-right-20"
          :options="data.carAddress.options"
          v-model="data.carAddress.value"
          :placeholder="data.carAddress.placeholder">
        </el-cascader>
        <div class="c-gap-right-20">邮编：_______________</div>
      </div>
    </section>
    <!--目的地地址-->
    <section class="destination c-gap-top-40">
      <div class="c-font-20 c-bold">目的地地址</div>
      <div class="c-gap-top-20 c-flex">
        <el-cascader
          class="c-gap-right-20"
          :options="data.destination.options"
          v-model="data.destination.value"
          :placeholder="data.destination.placeholder">
        </el-cascader>
        <div class="c-gap-right-20">邮编：_______________</div>
      </div>
    </section>
    <!--按钮-->
    <section class="c-flex c-gap-top-40 btn-layout">
      <el-button type="success">保存</el-button>
    </section>
  </section>
</template>

<script>
  import options from '../../components/Cascader/cascader-address-options';

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
          },
          // 目的地地址
          destination: {
            options: options,
            value: [],
            placeholder: '详细地址'
          },
          // 车辆所在地址
          carAddress: {
            options: options,
            value: [],
            placeholder: '详细地址'
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

    .contact {
      margin-top: 40px;
    }

    .btn-layout {
      justify-content: center;
    }
  }

</style>
