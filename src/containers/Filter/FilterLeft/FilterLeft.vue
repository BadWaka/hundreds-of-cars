<template>
  <section class="filter-left c-gap-top-20">
    <div class="top"></div>
    <div
      class="item c-btn"
      v-for="(item, index) in list"
      :key="index"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave(index)">
      {{item.text}}
      <!--二级菜单-->
      <section
        v-show="item.isShowTowLevel"
        class="two-level-wrapper">
        <div class="two-level">
          <div class="title">{{item.text}}</div>
          <div class="number">{{item.number}}辆</div>
          <div
            class="button c-btn transition-animate"
            @click="handleClick(index)">
            应用
          </div>
          <el-radio-group
            class="radio-group"
            v-model="item.selected">
            <el-radio
              class="radio-item"
              v-for="(item2, index2) in item.children"
              :label="index2">
              {{item2.text}}
            </el-radio>
          </el-radio-group>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FilterLeft',
    data() {
      return {
        list: [
          {
            text: '搜索范围',
            number: 587,
            selected: '',
            isShowTowLevel: false,
            children: [
              {
                text: '任何距离',
              },
              {
                text: '50公里',
              },
              {
                text: '75公里',
              }
            ]
          },
          {
            text: '新车/二手',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          },
          {
            text: '品牌',
            number: 366,
            isShowTowLevel: false,
            children: [
              {
                text: '新车',
              },
              {
                text: '二手车',
              },
              {
                text: '认证二手车',
              }
            ]
          }
        ]
      }
    },
    components: {},
    methods: {
      handleMouseEnter(index) {
        console.log('handleMouseEnter', index);
        this.list[index].isShowTowLevel = true;
      },
      handleMouseLeave(index) {
        console.log('handleMouseLeave', index);
        this.list[index].isShowTowLevel = false;
      },
      handleClick(index) {
        console.log('click', index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/app";

  .filter-left {
    box-sizing: border-box;

    .top {
      height: 20px;
      background: $primaryColor;
    }

    .item {
      position: relative;
      width: 150px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-left: 1px solid $secondColor;
      border-right: 1px solid $secondColor;
      border-bottom: 1px solid $secondColor;
      box-sizing: border-box;
      background: #fff;

      .two-level-wrapper {
        position: absolute;
        top: 0;
        left: 140px;
        // background: red;
        padding-left: 30px;
        z-index: 1;

        .two-level {
          position: relative;
          padding: 15px 20px 20px 20px;
          background: #fff;
          border: 1px solid $secondColor;
          box-sizing: border-box;
          text-align: left;
          width: 200px;
          height: auto;
          line-height: 24px;
        }

        .title {
          font-weight: bold;
        }

        .button {
          position: absolute;
          top: 20px;
          right: 20px;
          display: inline-block;
          text-align: center;
          padding: 0 10px;
          color: #fff;
          background: $green;
          border-radius: 3px;
          cursor: pointer;

          &:hover {
            background: $green300;
          }
        }

        .radio-group {
          display: flex;
          flex-direction: column;

          .radio-item {
            padding: 5px 0;
            margin-left: 0;

            &:first-child {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
</style>
