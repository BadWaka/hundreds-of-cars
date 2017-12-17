<template>
  <section class="person-info c-gap-inner-header c-container">
    <collection></collection>
    <recently-viewed></recently-viewed>
  </section>
</template>

<script>
  import Collection from './Collection/Collection';
  import RecentlyViewed from './RecentlyViewed/RecentlyViewed';

  export default {
    name: 'PersonInfo',
    data() {
      return {}
    },
    components: {
      Collection,
      RecentlyViewed
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";


</style>
