<template>
  <section class="filter-top c-gap-top-20">
    <div
      class="item c-btn"
      v-for="(item, index) in list"
      :key="index">
      {{item.text}}
      <i class="el-icon-arrow-down icon"></i>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FilterTop',
    data() {
      return {
        list: [
          {
            text: '价格'
          },
          {
            text: 'A-Z'
          },
          {
            text: '年份'
          },
          {
            text: '距离'
          },
          {
            text: '里程数'
          },
        ]
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .filter-top {
    display: flex;
    width: 850px;
    justify-content: center;
    align-items: center;
    background: $primaryColor;
    height: 60px;

    .item {
      position: relative;
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #000;
      background: #fff;
      border-bottom: 1px solid $primaryColor;
      border-right: 1px solid $primaryColor;
      box-sizing: border-box;

      .icon {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 16px;
      }
    }
  }
</style>
