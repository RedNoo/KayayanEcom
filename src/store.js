import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      cart: []
    },
    mutations:{
        addToCart(state, item){

            let foundProduct = state.cart.find(product => product.productId == item.productId);

            if(foundProduct){
              foundProduct.productQuantity++;
            }else {
              state.cart.push(item);

            }
        }
    }
  }) 