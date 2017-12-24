<template>
  <section class="collection">
    <div
      class="c-font-20 c-gap-top-20">
      <i class="el-icon-star-on"></i>
      <span class="c-gap-left">收藏的车</span>
    </div>
    <section class="c-flex collections c-gap-top">
      <collection-item
        v-for="(item, index) in collections"
        :key="index"
        :data="item">
      </collection-item>
    </section>
  </section>
</template>

<script>
  import CollectionItem from './CollectionItem/CollectionItem';

  export default {
    name: 'Collection',
    data() {
      return {
        collections: [
          {
            imgSrc: 'http://img.hb.aicdn.com/0435793935078f948ad3edc0e24b6c05a8c1b260320b1-TE5bwL_fw658',
            title: '新款 2016 一汽-大众 CC 1.8T',
            price: '17.70万起',
            mileage: '3000公里',  // 里程
            carColor: '白色', // 车身颜色
            insideColor: '沙色/黑色', // 内饰颜色
            fuelConsumption: '7.5L', // 油耗
            carBody: '三厢',  // 车体
          },
          {
            imgSrc: 'http://img.hb.aicdn.com/1ed9f3193dcd77b0635f5fff96a656a13ca1670e85615-wztlF2_fw658',
            title: '新款 2016 一汽-大众 CC 2T',
            price: '25.70万起',
            mileage: '1500公里',  // 里程
            carColor: '白色', // 车身颜色
            insideColor: '沙色/黑色', // 内饰颜色
            fuelConsumption: '7.5L', // 油耗
            carBody: '三厢',  // 车体
          }
        ]
      }
    },
    components: {
      CollectionItem
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../assets/app";

  .el-icon-star-on {
    color: #E31594;
  }

  .collections {
    justify-content: space-between;
    padding: 0 10px;
  }

</style>
