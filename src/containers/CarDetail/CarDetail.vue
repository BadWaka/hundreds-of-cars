<template>
  <section class="car-detail c-gap-inner-header c-container">
    <section class="bottom">
      <div class="title">{{carInfo.title}}</div>
      <div class="subtitle">
        <span>{{carInfo.price}}</span>
        <span>官方售价：{{carInfo.officialPrice}}</span>
      </div>
      <!--基本信息-->
      <div class="baseInfo">
        <div class="row1">汽车基本信息</div>
        
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
          // 基本信息
          baseInfo: {
            mileage: '3000公里',  // 里程
            carColor: '白色', // 车身颜色
            insideColor: '沙色/黑色', // 内饰颜色
            carFrameNumber: '12097786178318037', // 车架号
            stockNumber: '经销商自编',  // 库存编号
            fuelOil: '汽油', // 燃油
            engine: 'V8', //  引擎
            transmission: '8速手自一体',  // 变速器
            driveMode: '四驱', // 驱动方式
          },
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .loan-application {
    padding: $headerHeight+20px 40px 20px 40px;

    .row-left {
      display: inline-block;
      width: 100px;
      flex-shrink: 0;
    }

    .button-row {
      justify-content: center;
    }
  }
</style>
