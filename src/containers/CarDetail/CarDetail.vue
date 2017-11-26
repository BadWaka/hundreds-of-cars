<template>
  <section class="car-detail c-gap-inner-header c-container">
    <section class="bottom">
      <div class="title c-font-20">
        {{carInfo.title}}
      </div>
      <div class="subtitle">
        <span>{{carInfo.price}}</span>
        <span class="right">官方售价：{{carInfo.officialPrice}}</span>
      </div>
      <!--基本信息-->
      <div class="base-info">
        <div class="row1">汽车基本信息</div>
        <section class="c-flex box c-gap-top-20">
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
      <!--亮点配置-->
      <div class="light-spot-config">
        <div class="row1">亮点配置</div>
        <section class="c-flex box c-gap-top-20">
          <div
            v-for="(item, index) in carInfo.lightSpotConfig"
            class="item">
            {{item.text}}
          </div>
        </section>
        <div class="btn-row">
          <el-button size="mini">更多</el-button>
        </div>
      </div>
      <!--标准配置-->
      <div class="standard-config c-gap-top-20">
        <div class="row1">标准配置</div>
        <section class="c-flex box c-gap-top-20">
          <div
            v-for="(item, index) in carInfo.standardConfig"
            class="item">
            {{item.text}}
          </div>
        </section>
        <div class="btn-row">
          <el-button size="mini">更多</el-button>
        </div>
      </div>
      <!--经销商寄语-->
      <div class="dealer-send-word">
        经销商寄语
        <section class="c-gap-top-20 dealer-send-word-box">
          {{carInfo.dealerSendWord}}
        </section>
      </div>
      <!--经销商信息-->
      <div class="dealer-info">
        经销商信息
        <section class="wrapper c-flex c-gap-top-20">
          <!--左边-->
          <div class="left">
            <div class="row1">中单车行</div>
            <!--第二行-->
            <div class="row2 c-flex">
              <!--左边的图-->
              <div class="left-img"></div>
              <!--右边的信息-->
              <div class="right2 c-gap-left-20">
                <div class="row11 c-flex">
                  <!--评分-->
                  <el-rate
                    v-model="carInfo.dealerInfo.rate"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                  <span class="c-gap-left">566评价</span>
                </div>
                <div class="row22">
                  <i class="iconfont icon-edit c-gap-right-small"></i>
                  写车行评价
                </div>
                <div class="row33">
                  地址：
                </div>
                <div class="row44">
                  车行网站：
                </div>
                <div class="row55">
                  今日营业时间：9:00-18:00
                </div>
              </div>
            </div>
          </div>
          <!--右边-->
          <div class="right">
            <section>
              <div class="row1">
                <i class="iconfont icon-yaochi"></i>
                欲想与此经销商购买或卖出请点击这里
              </div>
              <!--第二行-->
              <div class="row2 c-flex">
                <!--左边的图-->
                <div class="left-img"></div>
                <!--右边的信息-->
                <div class="right2 c-gap-left-20">
                  <el-button
                    class="btn-item"
                    type="success"
                    size="mini">
                    查看存货
                  </el-button>
                  <el-button
                    class="btn-item"
                    type="success"
                    size="mini">
                    致电车行
                  </el-button>
                  <el-button
                    class="btn-item"
                    type="success"
                    size="mini">
                    地图
                  </el-button>
                </div>
              </div>
            </section>
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
          ],
          dealerSendWord: '大众CC是一款经济适用车型. 这台2015款二手CC配置了倒车影像, 为新手司机__________________________',
          dealerInfo: {
            rate: 3
          }
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

  .car-detail {
    padding: 120px 80px 40px 80px;
  }

  .title {
    font-weight: bold;
  }

  .subtitle {

    .right {
      margin-left: 100px;
    }
  }

  .base-info, .light-spot-config, .standard-config, .dealer-send-word, .dealer-info {
    position: relative;
    margin-top: 40px;

    .box {
      flex-wrap: wrap;

      .item {
        display: flex;
        width: 50%;
        box-sizing: border-box;

        & > span {
          display: inline-block;
          padding-left: 100px;
          width: 50%;
        }
      }
    }

    .btn-row {
      position: absolute;
      bottom: -30px;
      right: 0;
    }

    .dealer-send-word-box {
      padding-left: 100px;
    }
  }

  .light-spot-config, .standard-config {

    .box {
      flex-wrap: wrap;

      .item {
        display: flex;
        padding-left: 100px;
        width: 25%;
        box-sizing: border-box;
      }
    }
  }

  /* 经销商信息 */
  .dealer-info {

    .wrapper {
      align-items: flex-start;
      justify-content: space-between;

      .left, .right {
        width: 50%;

        .row2 {
          margin-top: 20px;
          align-items: flex-start;

          .left-img {
            flex-shrink: 0;
            width: 220px;
            height: 140px;
            background: red;
          }

          .right2 {

            .row11, .row22, .row33, .row44, .row55 {
              margin-bottom: 5px;
            }

            .btn-item {
              margin-bottom: 20px;
              margin-left: 0;
              display: block;
              width: 100px;

              &:first-child {
                margin-top: 10px;
              }
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .row1 {
        }
      }
    }
  }
</style>
