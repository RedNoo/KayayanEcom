<template>
  <div>
    <button class="btn btn-outline-warning" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

  data() {
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        productPrice: this.price,
        productId: this.pId,
        productQuantity: 1
      }
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
      $('#cartModal').modal('show')
    }
  }
};
</script>

<style scoped lang="scss">
</style>
