import Vue from 'vue'
import App from './App.vue'
import router from './router/mainRouter'
import Axios from 'axios'
import Toasted from 'vue-toasted'
import store from './store'
import VueSelect from 'vue-select'
import vuetify from '@/plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.use(Toasted, {
  theme: "toasted-primary",
  position: "bottom-center",
  duration: 3000
});

Vue.component('v-select', VueSelect);


new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app');

