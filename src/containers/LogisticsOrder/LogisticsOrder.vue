<template>
  <section class="logistics-order c-gap-inner-header c-container">
    <!--物流订单模板-->
    <div class="c-gap-top-20 c-font-20">物流订单模板</div>
    <section class="c-gap-top-20">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
    </section>
    <!--第二行-->
    <section class="c-gap-top-20 c-flex row2">
      <!--已保存模板-->
      <section class="row-item">
        <div class="c-font-20">已保存模板</div>
      </section>
      <!--已接收报价-->
      <section class="row-item">
        <div class="c-font-20">已接收报价</div>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'LogisticsOrder',
    data() {
      return {}
    },
    components: {},
    methods: {
      handlePictureCardPreview() {
        console.log('handlePictureCardPreview');
      },
      handleRemove() {
        console.log('handleRemove');
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";

  .logistics-order {

    .row2 {

      .row-item {
        flex: 1;
      }
    }

  }

</style>
