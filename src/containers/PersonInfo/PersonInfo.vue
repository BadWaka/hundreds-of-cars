<template>
  <section class="person-info c-gap-inner-header c-container">
    <collection></collection>
    <recently-viewed></recently-viewed>
    <you-will-like></you-will-like>
  </section>
</template>

<script>
  import Collection from './Collection/Collection';
  import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
  import YouWillLike from './YouWillLike/YouWillLike';

  export default {
    name: 'PersonInfo',
    data() {
      return {}
    },
    components: {
      Collection,
      RecentlyViewed,
      YouWillLike
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";


</style>
