<template>
  <section>
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

  .footer {
    margin: 0 auto;
    width: $contentWidth;
    padding: 100px 0;
    background: #fff;
    color: $primaryColor;

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
