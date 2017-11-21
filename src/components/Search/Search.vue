<template>
  <section class="search">
    <div class="row1 c-gap-inner-left-large">
      <div
        v-for="(item, index) in searchTabs"
        class="item c-btn transition-animate">
        {{item.text}}
      </div>
    </div>
    <div class="row2">
      <section class="search">
        <div
          v-for="(item, index) in searchList"
          class="search-item">
          {{item.text}}
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="start-search">
          开始搜索
          <i class="el-icon-arrow-right"></i>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        searchTabs: [
          {
            text: '品牌搜索',
          },
          {
            text: '车型搜索',
          }
        ],
        searchList: [
          {
            text: '新车&二手车'
          },
          {
            text: '汽车型号'
          },
          {
            text: '预算上限'
          },
          {
            text: '汽车品牌'
          },
          {
            text: '距离'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .search {
    font-size: 14px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;

    .row1 {
      display: flex;
      align-items: center;
      height: 50px;
      line-height: 50px;
      background: $primaryColor;

      .item {
        width: 150px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #fff;
        box-sizing: border-box;

        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }

    .row2 {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px 15px 20px;
      background: $primaryColor;
      box-sizing: border-box;

      .search {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid $secondColor;
        border-top: 1px solid $secondColor;
        box-sizing: border-box;
      }

      .search-item, .start-search {
        position: relative;
        width: 328px;
        height: 50px;
        line-height: 50px;
        border-right: 1px solid $secondColor;
        border-bottom: 1px solid $secondColor;
        box-sizing: border-box;
        background: #fff;
        color: #000;
        transition: $transitionTime;
        cursor: pointer;

        &:hover {
          // color: #fff;
          // background: $greenColor;
          // border-color: $greenColor;
        }

        .el-icon-arrow-down, .el-icon-arrow-right {
          position: absolute;
          top: 11px;
          right: 20px;
          font-size: 24px;
        }

        .el-icon-arrow-right {
          top: 12px;
        }
      }

      .start-search {
        color: #fff;
        background: $greenColor;
        border-color: $greenColor;
      }
    }
  }
</style>
