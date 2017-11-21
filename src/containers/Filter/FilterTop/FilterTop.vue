<template>
  <section class="filter-top">
    <div
      class="item"
      v-for="(item, index) in list">
      {{item.text}}
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
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #000;
      background: #fff;
      border-bottom: 1px solid $primaryColor;
      border-right: 1px solid $primaryColor;
      box-sizing: border-box;
    }
  }
</style>
