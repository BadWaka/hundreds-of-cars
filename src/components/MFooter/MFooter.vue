<template>
  <footer class="footer">
    <div class="title">{{title}}</div>
    <div v-for="(item, index) in infos" :key="index" class="info-item">{{item}}</div>
  </footer>
</template>

<script>
  export default {
    name: 'MFooter',
    data() {
      return {
        title: 'Maxine in Beijing',
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
  // footer
  .footer {
    padding: 100px 200px;
    background: $primaryColor;
    color: #fff;
    text-align: center;

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
