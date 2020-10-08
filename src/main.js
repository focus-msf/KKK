import Vue from 'vue';
import App from './app/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts';
import store from './app/store/index';

Vue.use(ElementUI);
Vue.use(VCharts)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
