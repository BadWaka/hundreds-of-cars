import Vue from 'vue';
import Router from 'vue-router';
import Index from '../containers/Index/Index.vue';
import Technology from '../containers/Technology/Technology.vue';
import Study from '../containers/Study/Study.vue';
import Exercise from '../containers/Exercise/Exercise.vue';
import Admin from '../containers/Admin/Admin.vue';

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
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
  ]
})
