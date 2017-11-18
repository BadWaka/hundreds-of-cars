<template>
  <div id="app">
    <m-header></m-header>
    <!--<tab :tabSelected="tabSelected" :tabList="tabList" @change="onTabChange"></tab>-->
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from './components/MHeader/MHeader.vue';
  import Tab from './components/Tab/Tab.vue';
  import MFooter from './components/MFooter/MFooter.vue';

  export default {
    name: 'app',
    components: {
      MHeader,
      Tab,
      MFooter
    },
    data() {
      return {
        tabSelected: 0,
        tabList: [
          {
            text: 'Index',
            router: '/index'
          }, {
            text: 'Technology',
            router: '/technology'
          }, {
            text: 'Study',
            router: '/study'
          }, {
            text: 'Exercise',
            router: '/exercise'
          }, {
            text: 'Music',
            router: '/music'
          }, {
            text: 'Video',
            router: '/video'
          }, {
            text: 'Admin',
            router: '/admin'
          },
        ],
      }
    },
    methods: {
      onTabChange(index) {
        console.log('onTabChange', index);
        this.tabSelected = index;
        this.$router.push(this.tabList[index].router);
      }
    }
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
