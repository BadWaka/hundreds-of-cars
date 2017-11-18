<template>
  <section>
    <div class="row1">
      <div
        class="item"
        v-for="(item, index) in 3"
        :key="index">
        服务宗旨
      </div>
    </div>
    <footer class="footer">
      <div class="title">{{title}}</div>
      <div v-for="(item, index) in infos" :key="index" class="info-item">{{item}}</div>
    </footer>
  </section>
</template>

<script>
  export default {
    name: 'MFooter',
    data() {
      return {
        title: 'Bai Jia Che',
        infos: [
          'Beijing',
          'Phone number :  +86 666 6666',
          'Corporate registration number : 666-66-6666',
          'Address : Beijing Beijing Beijing',
          'COPYRIGHT (c) 2016 KISS THE TIRAMISU. ALL RIGHTS RESERVED'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app.scss";

  .row1 {
    height: 100px;
    display: flex;
    align-items: center;
    background: #fff;
    color: #000;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    .item {
      height: 60px;
      line-height: 60px;
      width: 33.3%;
      box-sizing: border-box;
      border-right: 2px solid $secondColor;

      &:last-child {
        border-right: none;
      }
    }
  }

  .footer {
    padding: 100px 200px;
    background: $primaryColor;
    color: #fff;

    .title {
      margin-bottom: 50px;
      font-size: 30px;
    }

    .info-item {
      margin-top: 5px;
      font-size: 13px;
    }
  }
</style>
