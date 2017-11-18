<template>
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
        :key="index">
        {{item.text}}
      </div>
      <!--登录注册-->
      <div class="login">
        <i class="iconfont icon-round-user-new"></i>
        <div class="text c-gap-top">
          登录/注册
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        navList: [
          {
            text: '地区选择',
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
            text: '卖车',
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
            text: '金融',
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
            text: '物流',
            children: [
              {
                text: '自动定位'
              },
              {
                text: '手动输入'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

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
      background: $primaryColor;
      color: #fff;
      text-align: center;
      font-size: 14px;

      .nav-item {
        position: relative;
        width: 120px;
        height: 60px;
        line-height: 60px;
        border-right: 1px solid $secondColor;
      }

      .nav-item:last-child {
        border-right: none;
      }

      .login {
        width: 120px;

        .iconfont {
          font-size: 22px;
        }

        .text {
          font-size: 12px;
        }
      }
    }
  }
</style>
