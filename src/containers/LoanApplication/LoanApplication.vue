<template>
  <section class="loan-application c-gap-inner-header c-container">
    <div class="title c-font-20">贷款申请</div>
    <el-row
      v-for="(item, index) in inputs"
      :key="index"
      class="c-gap-top-20"
      :gutter="60">
      <el-col
        v-for="(item2, index2) in item.list"
        :key="index2"
        class="c-flex"
        :span="24/item.list.length">
        <span class="row-left">
          {{item2.formText}}
        </span>
        <!--输入框-->
        <el-input
          v-if="item2.formType === 'input'"
          v-model="form[item2.formName]"
          :placeholder="item2.placeholder">
        </el-input>
        <!--日期选择器-->
        <el-date-picker
          v-if="item2.formType === 'date'"
          v-model="form[item2.formName]"
          type="date"
          :placeholder="item2.placeholder">
        </el-date-picker>
        <!--级联选择器-->
        <el-cascader
          v-if="item2.formType === 'cascader'"
          :options="item2.options"
          v-model="form[item2.formName]"
          :placeholder="item2.placeholder">
        </el-cascader>
        <!--单选框-->
        <el-radio-group
          v-if="item2.formType === 'radio'"
          v-model="form[item2.formName]">
          <el-radio
            v-for="(item3, index3) in item2.options"
            :key="index3"
            :label="item3.text">
            {{item3.text}}
          </el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <div class="button-row c-flex c-gap-top-20">
      <el-button
        class="c-gap-top-20"
        type="success"
        @click="handleSubmit">
        提交
      </el-button>
    </div>
  </section>
</template>

<script>
  import options from '../../components/Cascader/cascader-address-options';

  export default {
    name: 'LoanApplication',
    data() {
      return {
        form: {
          lastName: '',
          firstName: '',
          birthday: '',
          identityCardNumber: '',
          phoneNumber: '',
          email: '',
          address: '',  // 常住地址
          city: '',
          province: '',
          postcode: '',
          liveTime: '', // 居住时长
          taxNumber: '', // 税号
          nature: '',  // 性质
          monthlyRent: '',  // 月租
          jobName: '',  // 工作职位
          employer: '', // 受雇单位
          employerNumber: '', // 受雇单位号码
          employerTime: '', // 受雇时长
          jobNumber: '',  // 工作号码
          monthlyIncome: '',  // 月收入
          carFrameNumber: '',  // 汽车车架号
          otherLoans: '',  // 其他贷款
          carDealerNumber: '', // 车行编码
        },
        inputs: [
          {
            list: [
              {
                formName: 'lastName',
                formText: '姓',
                formType: 'input',
                placeholder: '请输入姓'
              },
              {
                formName: 'firstName',
                formText: '名',
                formType: 'input',
                placeholder: '请输入名'
              },
            ]
          },
          {
            list: [
              {
                formName: 'birthday',
                formText: '生日',
                formType: 'date',
                placeholder: '请输入生日'
              },
              {
                formName: 'identityCardNumber',
                formText: '身份证号码',
                formType: 'input',
                placeholder: '请输入身份证号码'
              },
            ]
          },
          {
            list: [
              {
                formName: 'phoneNumber',
                formText: '手机号码',
                formType: 'input',
                placeholder: '请输入手机号码'
              },
              {
                formName: 'email',
                formText: '电子邮箱',
                formType: 'input',
                placeholder: '请输入电子邮箱'
              },
            ]
          },
          {
            list: [
              {
                formName: 'address',
                formText: '常住地址',
                formType: 'input',
                placeholder: '请输入常住地址'
              },
              {
                formName: 'city',
                formText: '城市',
                formType: 'cascader',
                placeholder: '请选择城市',
                options: options
              }
            ]
          },
          {
            list: [
              {
                formName: 'province',
                formText: '省份',
                formType: 'cascader',
                placeholder: '请选择省份',
                options: options
              },
              {
                formName: 'postcode',
                formText: '邮编',
                formType: 'input',
                placeholder: '请输入邮编'
              }
            ]
          },
          {
            list: [
              {
                formName: 'liveTime',
                formText: '居住时长',
                formType: 'input',
                placeholder: '请输入居住时长'
              },
              {
                formName: 'taxNumber',
                formText: '税号',
                formType: 'input',
                placeholder: '请输入税号'
              }
            ]
          },
          {
            list: [
              {
                formName: 'nature',
                formText: '性质',
                formType: 'radio',
                placeholder: '请选择性质',
                options: [
                  {
                    text: '租用'
                  },
                  {
                    text: '拥有'
                  }
                ]
              },
              {
                formName: 'monthlyRent',
                formText: '月租',
                formType: 'input',
                placeholder: '请输入月租'
              }
            ]
          },
          {
            list: [
              {
                formName: 'jobName',
                formText: '工作职位',
                formType: 'input',
                placeholder: '请输入工作职位'
              }
            ]
          },
          {
            list: [
              {
                formName: 'employer',
                formText: '受雇单位',
                formType: 'input',
                placeholder: '请输入受雇单位'
              }
            ]
          },
          {
            list: [
              {
                formName: 'employerNumber',
                formText: '受雇单位号码',
                formType: 'input',
                placeholder: '请输入受雇单位号码'
              }
            ]
          },
          {
            list: [
              {
                formName: 'employerTime',
                formText: '受雇时长',
                formType: 'input',
                placeholder: '请输入受雇时长'
              }
            ]
          },
          {
            list: [
              {
                formName: 'jobNumber',
                formText: '工作号码',
                formType: 'input',
                placeholder: '请输入工作号码'
              }
            ]
          },
          {
            list: [
              {
                formName: 'monthlyIncome',
                formText: '月收入',
                formType: 'input',
                placeholder: '请输入月收入'
              },
              {
                formName: 'carFrameNumber',
                formText: '汽车车架号',
                formType: 'input',
                placeholder: '请输入汽车车架号'
              }
            ]
          },
          {
            list: [
              {
                formName: 'otherLoans',
                formText: '其他贷款',
                formType: 'input',
                placeholder: '请输入其他贷款'
              },
              {
                formName: 'carDealerNumber',
                formText: '车行编码',
                formType: 'input',
                placeholder: '请输入车行编码'
              }
            ]
          }
        ]
      }
    },
    components: {},
    methods: {
      handleSubmit() {
        console.log(this.form);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/app";

  .loan-application {
    padding: $headerHeight+20px 40px 20px 40px;

    .row-left {
      display: inline-block;
      width: 100px;
      flex-shrink: 0;
    }

    .button-row {
      justify-content: center;
    }
  }
</style>
