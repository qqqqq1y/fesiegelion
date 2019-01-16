import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import '@/assets/iconfont/iconfont.css';

import Vue from 'vue';
import ElementUI from 'element-ui';

import store from '@/store';
import * as components from './components/index';
import * as filters from './filter/filter';

import App from './App';
import router from './router/router';
// import copy from 'fast-copy';

Vue.use(ElementUI);

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
