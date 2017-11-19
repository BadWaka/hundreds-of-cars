<template>
  <section class="header-wrapper">
    <header class="header">
      <!--左侧-->
      <div class="left c-gap-left-large">
        <div class="logo">
          logo
        </div>
        <div class="left-right c-gap-left">
          <div class="row1">百家车</div>
          <div class="row2 c-gap-top-small">slogan</div>
        </div>
      </div>
      <!--右侧-->
      <nav class="nav">
        <!--导航按钮-->
        <div
          class="nav-item"
          v-for="(item, index) in navList"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)">
          {{item.text}}
          <transition name="fade">
            <div
              class="mask"
              v-show="item.isShowMask">
              <div
                v-for="(item2, index2) in item.children"
                :key="index2"
                class="mask-item c-gap-inner-left-large transition-animate">
                {{item2.text}}
              </div>
            </div>
          </transition>
        </div>
        <!--登录注册-->
        <div class="login">
          <i class="iconfont icon-round-user-new"></i>
          <div class="text c-gap-top">
          <span
            class="sign-in transition-animate c-btn"
            @click="handleSignInClick">
            登录
          </span>/<span
            class="sign-up transition-animate c-btn"
            @click="handleSignUpClick">
            注册
          </span>
          </div>
        </div>
      </nav>
      <!--模态框-->
      <modal
        v-if="isShowModal">
      </modal>
    </header>
  </section>
</template>

<script>
  import Modal from '../Modal/Modal.vue';

  export default {
    name: 'Header',
    data() {
      return {
        isShowModal: false,
        navList: [
          {
            text: '地区选择',
            isShowMask: false,
            children: [
              {
                text: '自动定位'
              },
              {
                text: '手动输入'
              }
            ]
          },
          {
            text: '买车',
            isShowMask: false,
            children: [
              {
                text: '按品牌'
              },
              {
                text: '按车型'
              }
            ]
          },
          {
            text: '卖车',
            isShowMask: false,
            children: [
              {
                text: '私人卖家'
              },
              {
                text: '经销商'
              }
            ]
          },
          {
            text: '金融',
            isShowMask: false,
            children: [
              {
                text: '金融计算器'
              },
              {
                text: '贷款申请'
              },
              {
                text: '经销商'
              }
            ]
          },
          {
            text: '物流',
            isShowMask: false,
            children: [
              {
                text: '拖车服务'
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleMouseEnter(index) {
        this.navList[index].isShowMask = true;
      },
      handleMouseLeave(index) {
        this.navList[index].isShowMask = false;
      },
      handleSignInClick() {
        console.log('点击登录');
      },
      handleSignUpClick() {
        console.log('点击注册');
      }
    },
    components: {
      Modal
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .header-wrapper {
    position: fixed;
    width: 100%;
    box-shadow: 0 1px 5px 1px $primaryColor;
    background: #fff;
    z-index: 8;
  }

  .header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $contentWidth;
    height: $headerHeight;

    .left {
      display: flex;
      align-items: center;

      .logo {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        background: $primaryColor;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }

      .left-right {

        .row1 {
          font-size: 14px;
        }

        .row2 {
          font-size: 12px;
        }
      }
    }

    .nav {
      display: flex;
      align-items: center;
      height: 100%;
      color: #fff;
      text-align: center;
      font-size: 14px;

      .nav-item {
        transition: $transitionTime;
        position: relative;
        width: 120px;
        height: 100%;
        line-height: $headerHeight;
        background: $primaryColor;
        cursor: pointer;

        &:after {
          content: '';
          position: absolute;
          width: 2px;
          height: 60px;
          top: 10px;
          right: 0;
          background: $secondColor;
        }

        .mask {
          position: absolute;
          width: 120px;
          top: $headerHeight;
          box-sizing: border-box;
          border-left: 1px solid $secondColor;
          z-index: 9;
          background: #fff;
          color: #000;

          .mask-item {
            height: 40px;
            line-height: 40px;
            text-align: left;

            &:hover {
              background: $secondColor;
              color: #fff;
            }
          }
        }
      }

      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 120px;
        height: 100%;
        background: $primaryColor;

        .iconfont {
          font-size: 22px;
        }

        .text {
          font-size: 12px;

          span:hover {
            opacity: .7;
          }
        }
      }
    }
  }
</style>
