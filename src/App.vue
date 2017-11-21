<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from './components/MHeader/MHeader.vue';
  import MFooter from './components/MFooter/MFooter.vue';

  export default {
    name: 'app',
    components: {
      MHeader,
      MFooter
    },
    data() {
      return {
        tabSelected: 0,
        tabList: [
          {
            text: 'Index',
            router: '/index'
          }
        ],
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import "assets/reset.scss";
  @import "assets/app.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $backgroundColor;
  }
</style>
