<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
  import MHeader from './components/MHeader/MHeader.vue';

  export default {
    name: 'app',
    components: {
      MHeader
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

<style>
  @import "assets/reset.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
