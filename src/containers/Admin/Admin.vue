<template>
  <section class="admin">
    <!--NavMenu-->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
             :collapse="true">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
    <!--Right-->
    <section class="right">
      <add-edit-article></add-edit-article>
    </section>
  </section>
</template>

<script>
  import AddEditArticle from './Article/AddEditArticle.vue';

  export default {
    name: 'Admin',
    components: {
      AddEditArticle,
    },
    data() {
      return {
        form: {
          title: '',
          content: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log('handleSelect', key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .admin {
    padding: 40px;
    display: flex;

    .right {
      width: 100%;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
