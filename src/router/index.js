import Vue from 'vue';
import Router from 'vue-router';
import Index from '../containers/Index/Index.vue';
import Filter from '../containers/Filter/Filter.vue';
import LoanApplication from '../containers/LoanApplication/LoanApplication.vue';
import CarDetail from '../containers/CarDetail/CarDetail.vue';
import PersonInfo from '../containers/PersonInfo/PersonInfo.vue';

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
    }
  ]
})
