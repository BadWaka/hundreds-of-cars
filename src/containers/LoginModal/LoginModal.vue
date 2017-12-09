<template>
  <modal @close="handleClose">
    <section class="login-modal">
      <div class="title c-font-20">
        <div
          class="tab-sign-in c-btn selected"
          @click="handleTabChange(0)">
          登录
        </div>
        <div class="divider c-gap-left-small c-gap-right-small">|</div>
        <div
          class="tab-sign-up c-btn"
          @click="handleTabChange(1)">
          注册
        </div>
      </div>

      <section class="bottom sign-in">
        <!--账号-->
        <section>
          <div class="c-font-big">电子邮箱 / 手机号码</div>
          <el-input
            class="c-gap-top"
            v-model="form.username"></el-input>
          <div
            v-if="tabStatus === 'signIn'"
            class="row-right c-gap-top">
            <span class="link c-btn">
              忘记用户名？
            </span>
          </div>
        </section>
        <!--密码-->
        <section class="">
          <div class="c-font-big">密码</div>
          <el-input
            class="c-gap-top"
            v-model="form.password"></el-input>
          <div
            v-if="tabStatus === 'signIn'"
            class="row-right c-gap-top">
            <span class="link c-btn">
              忘记密码？
            </span>
          </div>
        </section>
        <!--按钮-->
        <el-button class="c-gap-top-20 btn-sign-in" type="success">登录</el-button>
      </section>

    </section>
  </modal>
</template>

<script>
  import Modal from '../../components/Modal/Modal.vue';

  export default {
    name: 'FinancialCalculatorModal',
    data() {
      return {
        tabStatus: 'signIn',  // 当前状态；登录还是注册
        form: {
          username: '',
          password: '',
        },
      }
    },
    components: {
      Modal
    },
    methods: {
      handleClose() {
        this.$emit('close');
      },
      handleTabChange(index) {
        console.log(index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .login-modal {
    padding: 0 20px 40px;
    width: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    .title {
      display: flex;
      justify-content: center;

      .tab-sign-in, .tab-sign-up {
        padding: 0 10px;
      }

      .selected {
        background: $primaryColor;
        color: #fff;
      }
    }

    .bottom {
      margin-top: 60px;

      .btn-sign-in {
        width: 100%;
      }

      .row-right {
        text-align: right;

        .link {
          color: $lightBlue500;
        }
      }
    }
  }

</style>
