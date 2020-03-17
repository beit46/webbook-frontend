import Vue from 'vue';
import Buefy from 'buefy';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from './store';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
