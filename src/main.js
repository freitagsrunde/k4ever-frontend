import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
  Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
}

window.App = new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

