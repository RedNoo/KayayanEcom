<template>
 <!-- Modal -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Shoping Cart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <table class="table table-hover shopping-cart-wrap">
                <thead class="text-muted">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col" width="120">Price</th>
                    <th scope="col" width="200" class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in this.$store.state.cart" v-bind:key="index">
                    <td>
                      <figure class="media">
                        <div class="img-wrap">
                          <img :src="item.productImage" class="img-thumbnail img-sm" />
                        </div>
                        <figcaption class="media-body">
                          <h6 class="title text-truncate">{{item.productName}}</h6>
                          <dl class="dlist-inline small">
                            <dt>Quantity:</dt>
                            <dd>{{item.productQuantity}}</dd>
                          </dl>
                          
                        </figcaption>
                      </figure>
                    </td>
                    
                    <td>
                      <div class="price-wrap">
                        <var class="price">$ {{item.productPrice}}</var>
                        <small class="text-muted">(each)</small>
                      </div>
                      <!-- price-wrap .// -->
                    </td>
                    <td class="text-right">
                      
                      <a href class="btn btn-outline-danger">× Remove</a>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <!-- card.// -->
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
            <button type="button" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "mini-cart",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">

</style>
