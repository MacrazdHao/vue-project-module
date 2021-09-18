import Vue from 'vue';
import Router from 'vue-router';

import Index from '../pages/';
import Activity from '../pages/Activity';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'index',
  component: Index,
  children: [{
    path: '/activity',
    name: 'activity',
    component: Activity
  }]
}];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});