import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
      cart: cart ? JSON.parse(cart) :[],
    },
    mutations:{
        addToCart(state, item){

            let foundProduct = state.cart.find(product => product.productId == item.productId);

            if(foundProduct){
              foundProduct.productQuantity++;
            }else {
              state.cart.push(item);

            }

            this.commit('sendData');
        },
        sendData(state){
          window.localStorage.setItem("cart",JSON.stringify(state.cart));

        }
    }
  }) 