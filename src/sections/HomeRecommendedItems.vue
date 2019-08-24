<template>
 
<!-- ========================= SECTION ITEMS ========================= -->
<section class="section-request bg padding-y-sm">
<div class="container">
<header class="section-heading heading-line">
	<h4 class="title-section bg text-uppercase">Recommended items</h4>
</header>

<div class="row-sm">
<div class="col-md-2" v-for="(product,index) in products" v-bind:key="index">
	<figure class="card card-product">
		<div class="img-wrap"> <img :src="getImage(product.images)"></div>
		<figcaption class="info-wrap">
			<h6 class="title "><a href="#">{{product.name}}</a></h6>
			
			<div class="price-wrap">
				<span class="price-new">${{product.price}}</span>
				<del class="price-old" v-if="product.oldPrice != ''"">${{product.oldPrice}}</del>
			</div> <!-- price-wrap.// -->
			
		</figcaption>
	</figure> <!-- card // -->
</div> <!-- col // -->

</div> <!-- row.// -->


</div><!-- container // -->
</section>
<!-- ========================= SECTION ITEMS .END// ========================= -->
</template>

<script>
import {db} from '../firebase';


export default {
  name: "RecommendedItems",
  props: {
    msg: String
  },
  data(){
    return {
        products: [],
    }
  },

  methods:{

    getImage(images){
      return images[0];
    }

  },
  firestore(){
      return {
        products: db.collection('products').where("recommendedItem","==",true),
      }
  },
};
</script>

<style scoped lang="scss">

</style>
