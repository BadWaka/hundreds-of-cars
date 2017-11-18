<template>
  <ul class="tabs">
    <li v-for="(item, index) in tabs" :key="item.id"
        :class="tabSelected === index ? 'tab-item-selected':'tab-item'" @click="onTabClick(index)">
      {{item.text}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Tab',
    props: ['tabList', 'tabSelected'],
    data() {
      return {
        tabs: this.tabList,
      }
    },
    methods: {
      onTabClick(index) {
        this.$emit('change', index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app.scss";
  // tab
  .tabs {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-top: 1px solid $primaryColor;
    border-bottom: 1px solid $primaryColor;

    .tab-item, .tab-item-selected {
      height: 40px;
      line-height: 41px;
      width: 140px;
      font-size: 18px;
      color: $primaryColor;
      text-align: center;
      cursor: pointer;
      transition: .5s;
      border-left: 1px solid $primaryColor;
      box-sizing: border-box;

      &:hover {
        background: $primaryColor;
        color: #fff;
      }

      &:last-child {
        border-right: 1px solid $primaryColor;
      }
    }

    .tab-item-selected {
      background: $primaryColor;
      color: #fff;
    }
  }
</style>
