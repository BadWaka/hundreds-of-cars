<template>
  <section class="collection">
    <div
      class="c-font-20">
      <i class="el-icon-star-on"></i>
      <span class="c-gap-left">收藏的车</span>
    </div>
    <collection-item></collection-item>
  </section>
</template>

<script>
  import CollectionItem from './CollectionItem/CollectionItem';

  export default {
    name: 'Collection',
    data() {
      return {}
    },
    components: {
      CollectionItem
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../assets/app";


</style>
