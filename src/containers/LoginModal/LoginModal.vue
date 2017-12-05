<template>
  <modal @close="handleClose">
    <section class="login-modal">
      <div class="title c-font-20">登录|注册</div>
      <div>电子邮箱/手机号码</div>
      <el-input v-model="form.name"></el-input>
      <div>密码</div>
      <el-input v-model="form.name"></el-input>
    </section>
  </modal>
</template>

<script>
  import Modal from '../../components/Modal/Modal.vue';

  export default {
    name: 'FinancialCalculatorModal',
    data() {
      return {
        monthlyInstallmentPaymentRough: '￥2000.00', // 月供粗算
        form: {
          carPrice: 36, // 汽车价格
          downPayment: 42,  // 首付
          substitution: 56, // 置换
          purchaseTax: 12, // 购置税
          luxuryCarPurchaseTax: 24, // 豪车购置税
          interestRate: 98, // 利率
          loansPeriod: 34, // 贷款周期
        },
        list: [
          {
            label: '汽车价格',
            formName: 'carPrice',
            unit: 'RMB'
          },
          {
            label: '首付',
            formName: 'downPayment',
            unit: '%'
          },
          {
            label: '置换',
            formName: 'substitution',
            unit: '%'
          },
          {
            label: '购置税',
            formName: 'purchaseTax',
            unit: '%'
          },
          {
            label: '豪车购置税',
            formName: 'luxuryCarPurchaseTax',
            unit: '%'
          },
          {
            label: '利率',
            formName: 'interestRate',
            unit: '%'
          },
          {
            label: '贷款周期',
            formName: 'loansPeriod',
            unit: '月'
          }
        ]
      }
    },
    components: {
      Modal
    },
    methods: {
      handleClose() {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .login-modal {
    padding: 0 20px;
    width: $modalWidth;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
  }

</style>
