<template>
  <section class="filter-left c-gap-top-20">
    <div class="top"></div>
    <div
      class="item"
      v-for="(item, index) in list">
      {{item.text}}
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FilterLeft',
    data() {
      return {
        list: [
          {
            text: '搜索范围',
            number: 587,
            children: [
              {
                text: '任何距离',
              },
              {
                text: '50公里',
              },
              {
                text: '75公里',
              }
            ]
          },
          {
            text: '新车/二手',
            number: 366,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
        ]
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .filter-left {
    box-sizing: border-box;

    .top {
      height: 20px;
      background: $primaryColor;
    }

    .item {
      width: 150px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-left: 1px solid $secondColor;
      border-right: 1px solid $secondColor;
      border-bottom: 1px solid $secondColor;
      box-sizing: border-box;
    }
  }
</style>
