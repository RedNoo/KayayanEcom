<template>
  <div class="checkout">
    <Navbar></Navbar>
<section class="checkout bg">


<div class="container pt-5 ">
    <div class="card">
      <table class="table table-hover shopping-cart-wrap">
        <thead class="text-muted">
          <tr>
            <th scope="col">Product</th>
            <th scope="col" width="120">Quantity</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" width="200" class="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item,index) in this.$store.state.cart" v-bind:key="index">
            <td>
              <figure class="media">
                <div class="img-wrap">
                  <img :src="item.productImage" class="img-thumbnail img-sm" />
                </div>
                <figcaption class="media-body">
                  <h6 class="title text-truncate">{{item.productName}}</h6>
                  <dl class="dlist-inline small">
                    <dt>Size:</dt>
                    <dd>XXL</dd>
                  </dl>
                  <dl class="dlist-inline small">
                    <dt>Color:</dt>
                    <dd>Orange color</dd>
                  </dl>
                </figcaption>
              </figure>
            </td>
            <td>
              <strong>{{item.productQuantity}}</strong>
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
    </section>
  </div>
</template>