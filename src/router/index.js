import Vue from 'vue';
import Router from 'vue-router';
import Index from '../containers/Index/Index.vue';
import Filter from '../containers/Filter/Filter.vue';
import LoanApplication from '../containers/LoanApplication/LoanApplication.vue';
import CarDetail from '../containers/CarDetail/CarDetail.vue';
import PersonInfo from '../containers/PersonInfo/PersonInfo.vue';
import PublishCarInfo from '../containers/PublishCarInfo/PublishCarInfo.vue';
import LogisticsOrder from '../containers/LogisticsOrder/LogisticsOrder.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/loanapplication',
      name: 'LoanApplication',
      component: LoanApplication
    },
    {
      path: '/cardetail',
      name: 'CarDetail',
      component: CarDetail
    },
    {
      path: '/personinfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/publishcarinfo',
      name: 'PublishCarInfo',
      component: PublishCarInfo
    },
    {
      path: '/logisticsorder',
      name: 'LogisticsOrder',
      component: LogisticsOrder
    }
  ],
  // 自定义路由切换时页面如何滚动
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 对于所有路由导航，简单地让页面滚动到顶部
    return {x: 0, y: 0};
  }
})
