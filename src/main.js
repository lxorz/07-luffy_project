// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element ui inport
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '../static/global/global.css';

Vue.use(ElementUI);

import * as api from './resful/api';
Vue.prototype.$http = api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
