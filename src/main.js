import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import {fb} from './firebase';
import VueFirestore from 'vue-firestore';

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
});

import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;



import store from "./store.js";

Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('add-to-cart',require('./components/AddToCart.vue').default);
Vue.component('mini-cart',require('./components/MiniCart.vue').default);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(){
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

});
