<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
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
