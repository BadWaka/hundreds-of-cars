<!--联系我们模块-->
<template>
  <section class="contact-us">
    您好
    <el-input
      type="textarea"
      :rows="3"
      placeholder="请输入内容"
      v-model="formData.content">
    </el-input>
    <el-input
      class="c-gap-top-20"
      v-model="formData.name"
      placeholder="姓名">
    </el-input>
    <el-input
      class="c-gap-top-20"
      v-model="formData.email"
      placeholder="电子邮件">
    </el-input>
    <el-input
      class="c-gap-top-20"
      v-model="formData.phone"
      placeholder="手机">
    </el-input>
    <section class="c-gap-top-20">
      联系方式选择
      <div class="bottom c-gap-top c-flex">
        <el-button
          size="medium">邮件
        </el-button>
        <el-button
          size="medium">电话
        </el-button>
        <el-button
          size="medium">短信
        </el-button>
      </div>
    </section>
    <section class="c-gap-top-20 c-flex btn-layout">
      <el-button
        size="medium"
        type="success">
        提交
      </el-button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        formData: {
          content: '',
          name: '',
          email: '',
          phone: ''
        }
      }
    },
    components: {},
    methods: {
      handleSubmit() {
        console.log(this.form);
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .bottom {
    justify-content: space-between;
  }

  .btn-layout {
    justify-content: center;
  }

</style>
