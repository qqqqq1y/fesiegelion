import Vue from 'vue';
import ElementUI from 'element-ui';

import store from '@/store';
import '@/styles/element-theme/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router/router';
import copy from "fast-copy";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

