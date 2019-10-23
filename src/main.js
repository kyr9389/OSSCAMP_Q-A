import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* eslint-disable */
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')