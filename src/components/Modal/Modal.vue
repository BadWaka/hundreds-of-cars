<template>
  <section class="modal-wrapper">
    <section class="modal">
      <slot></slot>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app.scss";

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background: $primaryColor50;

    .modal {
      padding: 80px;
      background: #fff;
    }
  }

</style>
