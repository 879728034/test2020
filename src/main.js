import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios;
import store from './store/store.js'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




 import './mock/index.js'
//require('./mock/index.js');

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ViewUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
