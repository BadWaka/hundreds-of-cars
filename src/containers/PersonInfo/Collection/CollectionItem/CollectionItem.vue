<template>
  <section class="collection-item">
    <el-checkbox>对比</el-checkbox>
    <div
      class="img"
      :style="{
        'background-image': 'url(' + data.imgSrc + ')'
      }">
    </div>
    <div></div>
  </section>
</template>

<script>
  export default {
    name: 'CollectionItem',
    data() {
      return {
        data: {
          imgSrc: 'http://img.hb.aicdn.com/0435793935078f948ad3edc0e24b6c05a8c1b260320b1-TE5bwL_fw658',
        }
      }
    },
    components: {},
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../../assets/app";

  .collection-item {

    .img {
      width: 400px;
      height: 240px;
      background: no-repeat center;
      background-size: cover;
    }
  }

</style>
