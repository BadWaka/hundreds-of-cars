<template>
  <section class="search">
    <div class="row1">
      购车查询
    </div>
    <div class="row2">
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
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
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

    .row1 {
      width: 340px;
      height: 50px;
      line-height: 50px;
      background: $primaryColor;
    }

    .row2 {
      display: flex;
      flex-wrap: wrap;
      padding: 15px ;
      background: $primaryColor;

      .search-item, .start-search {
        position: relative;
        width: 33.3%;
        height: 50px;
        line-height: 50px;
        border: 1px solid $secondColor;
        box-sizing: border-box;
        background: #fff;
        color: #000;
        transition: $transitionTime;
        cursor: pointer;

        &:hover {
          color: #fff;
          background: $greenColor;
          border-color: $greenColor;
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
    }
  }
</style>
