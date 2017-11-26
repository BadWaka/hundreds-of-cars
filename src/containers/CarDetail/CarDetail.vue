<template>
  <section class="car-detail c-gap-inner-header c-container">
    <section class="bottom">
      <div class="title c-gap-top-20 c-font-20">
        {{carInfo.title}}
      </div>
      <div class="subtitle">
        <span>{{carInfo.price}}</span>
        <span class="right">官方售价：{{carInfo.officialPrice}}</span>
      </div>
      <!--基本信息-->
      <div class="base-info">
        <div class="row1">汽车基本信息</div>
        <section class="c-flex base-info-box c-gap-top-20">
          <div class="item">
            <span>里程：</span>
            <span>{{carInfo.mileage}}</span>
          </div>
          <div class="item">
            <span>燃油：</span>
            <span>{{carInfo.fuelOil}}</span>
          </div>
          <div class="item">
            <span>车身颜色：</span>
            <span>{{carInfo.carColor}}</span>
          </div>
          <div class="item">
            <span>引擎：</span>
            <span>{{carInfo.engine}}</span>
          </div>
          <div class="item">
            <span>内饰颜色：</span>
            <span>{{carInfo.insideColor}}</span>
          </div>
          <div class="item">
            <span>变速器：</span>
            <span>{{carInfo.transmission}}</span>
          </div>
          <div class="item">
            <span>车架号：</span>
            <span>{{carInfo.carFrameNumber}}</span>
          </div>
          <div class="item">
            <span>驱动方式：</span>
            <span>{{carInfo.driveMode}}</span>
          </div>
          <div class="item">
            <span>库存编号：</span>
            <span>{{carInfo.stockNumber}}</span>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'CarDetail',
    data() {
      return {
        form: {
          lastName: '',
          firstName: '',
          birthday: '',
          identityCardNumber: '',
          phoneNumber: '',
          email: '',
          address: '',  // 常住地址
          city: [], // 城市
          province: [], // 省份
          postcode: '',
          liveTime: '', // 居住时长
          taxNumber: '', // 税号
          nature: '',  // 性质
          monthlyRent: '',  // 月租
          jobName: '',  // 工作职位
          employer: '', // 受雇单位
          employerNumber: '', // 受雇单位号码
          employerTime: '', // 受雇时长
          jobNumber: '',  // 工作号码
          monthlyIncome: '',  // 月收入
          carFrameNumber: '',  // 汽车车架号
          otherLoans: '',  // 其他贷款
          carDealerNumber: '', // 车行编码
        },
        carInfo: {
          title: '二手 2015 一汽大众 CC 1.8T',
          price: '¥100,000',
          officialPrice: '¥170,000',
          mileage: '3000公里',  // 里程
          carColor: '白色', // 车身颜色
          insideColor: '沙色/黑色', // 内饰颜色
          carFrameNumber: '12097786178318037', // 车架号
          stockNumber: '经销商自编',  // 库存编号
          fuelOil: '汽油', // 燃油
          engine: 'V8', //  引擎
          transmission: '8速手自一体',  // 变速器
          driveMode: '四驱', // 驱动方式
          // 亮点配置
          lightSpotConfig: [
            {
              text: '大天窗'
            },
            {
              text: '倒车影像'
            },
            {
              text: '导航'
            },
            {
              text: '真皮座椅'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            }
          ],
          // 标准配置
          standardConfig: [
            {
              text: '四个轮子'
            },
            {
              text: '四个车门'
            },
            {
              text: '四条车轮胎'
            },
            {
              text: '蓝牙'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            },
            {
              text: 'XX'
            }
          ]
        }
      }
    },
    components: {},
    methods: {
      handleSubmit() {
        console.log(this.form);
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .title {
    font-weight: bold;
  }

  .subtitle {

    .right {
      margin-left: 100px;
    }
  }

  .base-info {
    margin-top: 40px;

    .base-info-box {
      flex-wrap: wrap;

      .item {
        display: flex;
        padding-left: 100px;
        width: 50%;
        box-sizing: border-box;

        & > span {
          display: inline-block;
          width: 50%;
        }
      }
    }
  }
</style>
