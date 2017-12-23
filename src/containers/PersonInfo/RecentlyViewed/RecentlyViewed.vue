<template>
  <section class="recently-viewed c-gap-top-20">
    <div class="c-font-20">最近浏览</div>
    <section class="c-gap-top-20">
      <car-item-view-btn></car-item-view-btn>
    </section>
  </section>
</template>

<script>
  import CarItemViewBtn from '../../../components/CarItem/CarItemViewBtn/CarItemViewBtn';

  export default {
    name: 'RecentlyViewed',
    data() {
      return {}
    },
    components: {
      CarItemViewBtn
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../assets/app";

</style>
