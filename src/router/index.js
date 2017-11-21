import Vue from 'vue';
import Router from 'vue-router';
import Index from '../containers/Index/Index.vue';
import Filter from '../containers/Filter/Filter.vue';

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
  ]
})
