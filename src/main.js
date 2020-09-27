import Vue from 'vue';
import App from './app/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts';


Vue.use(ElementUI);
Vue.use(VCharts)

new Vue({
  render: h => h(App)
}).$mount('#app');
