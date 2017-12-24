<template>
  <section class="publish-car-info c-gap-inner-header c-container">
    <div
      class="c-font-20 c-gap-top-20">
      新建卖车模板
    </div>
    <!--表单-->
    <el-form
      class="c-gap-top-20"
      ref="form"
      :model="form">
      <!--标题-->
      <el-form-item
        label="标题">
        <el-input
          v-model="form.title"
          placeholder="请输入标题">
        </el-input>
      </el-form-item>
      <!--筛选项-->
      <el-form-item>
        <div
          class="filter-item"
          v-for="(item, index) in form.filters"
          :key="index">
          <!--select 选择器-->
          <el-select
            v-if="item.type === 'select'"
            v-model="item.value"
            :placeholder="item.placeholder">
            <el-option
              v-for="(item2, index2) in item.options"
              :key="index2"
              :label="item2.value"
              :value="item2.value">
            </el-option>
          </el-select>
          <!--年份选择器-->
          <el-date-picker
            v-if="item.type === 'datePicker'"
            v-model="item.value"
            align="right"
            :type="item.datePickerType"
            :placeholder="item.placeholder">
          </el-date-picker>
        </div>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    name: 'PublishCarInfo',
    data() {
      return {
        form: {
          title: '',
          filters: [
            {
              name: '品牌',
              placeholder: '品牌',
              type: 'select',
              value: '',
              options: [
                {
                  value: '奥迪',
                },
                {
                  value: '奔驰',
                }
              ]
            },
            {
              name: '车型',
              placeholder: '车型',
              type: 'select',
              value: '',
              options: [
                {
                  value: '微型车',
                },
                {
                  value: '小型车',
                }
              ]
            },
            {
              name: '年份',
              placeholder: '年份',
              type: 'datePicker',
              datePickerType: 'year',
              value: '',
              options: [
                {
                  value: '2000',
                },
                {
                  value: '2010',
                }
              ]
            },
            {
              name: '公里数',
              placeholder: '公里数',
              type: 'select',
              value: '',
              options: [
                {
                  value: '1000公里',
                },
                {
                  value: '2000公里',
                }
              ]
            },
            {
              name: '有无事故历史',
              placeholder: '有无事故历史',
              type: 'select',
              value: '',
              options: [
                {
                  value: '有',
                },
                {
                  value: '没有',
                }
              ]
            },
          ]
        }
      }
    },
    components: {},
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";

  .filter-item {
    display: inline-block;
  }

</style>
