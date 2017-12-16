<template>
  <section class="person-info c-gap-inner-header c-container">
    <collection></collection>
  </section>
</template>

<script>
  import Collection from './Collection/Collection';

  export default {
    name: 'PersonInfo',
    data() {
      return {}
    },
    components: {
      Collection
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";


</style>
