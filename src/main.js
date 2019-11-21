import Vue from 'vue';
import App from './App.vue';


// import 'hooper/dist/hooper.css';
import 'swiper/dist/css/swiper.css';
import Style from './scss/style.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
