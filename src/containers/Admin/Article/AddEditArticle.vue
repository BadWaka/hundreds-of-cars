<template>
  <section class="add-edit-article">
    <!--AddEditArticle-->
    <el-form :model="form" :rules="rules" ref="addEditArticle" label-width="100px" class="demo-form">
      <el-form-item label="文章标题" prop="title">
        <el-input
          v-model="form.title"
          placeholder="请输入文章标题">
        </el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <el-input
          type="textarea"
          v-model="form.content"
          :autosize="{ minRows: 10, maxRows: 20}"
          placeholder="请输入文章内容">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addEditArticle')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import axios from 'axios';
  import httpConfig from '../../../configs/httpConfig';

  export default {
    name: 'AddEditArticle',
    data() {
      return {
        form: {
          title: '',
          content: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入文章标题', trigger: 'blur'},
          ],
          content: [
            {required: true, message: '请填写文章内容', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        // 校验
        const form = this.$refs[formName];
        form.validate((valid) => {
          if (!valid) {
            return;
          }
          console.log('valid', valid, form.model);
          axios.post(httpConfig.host + '/api/createArticle', {
            title: form.model.title,
            content: form.model.content
          }).then((res) => {
            console.log('res', res);
          }).catch((error) => {
            console.error(error);
          });
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .admin {
    padding: 40px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
