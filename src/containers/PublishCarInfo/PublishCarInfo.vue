<template>
  <section class="publish-car-info c-gap-inner-header c-container">
    <div
      class="c-font-20 c-gap-top-20">
      新建卖车模板
    </div>
    <section
      v-for="(formItem, formIndex) in forms"
      :key="formIndex">
      <!--表单-->
      <el-form
        class="c-gap-top-20"
        :model="formItem">
        <!--标题-->
        <el-form-item>
          <div>标题</div>
          <el-input
            class="c-gap-top"
            v-model="formItem.title"
            placeholder="请输入标题">
          </el-input>
        </el-form-item>
        <!--筛选项-->
        <el-form-item>
          <div
            class="filter-item"
            v-for="(item, index) in formItem.filters"
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
      <!--图片-->
      <div>上传图片（每张图片大小不超过2MB）</div>
      <section class="c-gap-top-20">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </section>
      <!--文本域-->
      <section
        class="c-gap-top-20">
        <el-input
          type="textarea"
          :rows="4"
          :placeholder="formItem.extraInfo.placeholder"
          v-model="formItem.extraInfo.value">
        </el-input>
      </section>
      <section class="btn-layout c-gap-top-20">
        <el-button>默认按钮</el-button>
        <el-button
          class="btn-right"
          type="success">
          成功按钮
        </el-button>
      </section>
      <section class="divider c-gap-top-20"></section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'PublishCarInfo',
    data() {
      return {
        forms: [
          {
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
            ],
            extraInfo: {
              placeholder: '其他补充信息',
              value: ''
            }
          },
          {
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
            ],
            extraInfo: {
              placeholder: '其他补充信息',
              value: ''
            }
          },
        ]
      }
    },
    components: {},
    methods: {
      handlePictureCardPreview() {
        console.log('handlePictureCardPreview');
      },
      handleRemove() {
        console.log('handleRemove');
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/app";

  .publish-car-info {

    .filter-item {
      display: inline-block;
    }

    .divider {
      margin-bottom: 20px;
      height: 1px;
      background: $grey200;
    }

    .btn-layout {
      display: flex;
      justify-content: center;

      .btn-right {
        margin-left: 100px;
      }
    }
  }

</style>
