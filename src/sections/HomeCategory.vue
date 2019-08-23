<template>
 <!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y-sm bg">
<div class="container">

<header class="section-heading heading-line">
	<h4 class="title-section bg">{{category}}</h4>
</header>

<div class="card">
<div class="row no-gutters">
	<div class="col-md-3">
	
<article href="#" class="card-banner h-100 bg2">
	<div class="card-body zoom-wrap">
		<h5 class="title">Machinery items for manufacturers</h5>
		<p>Consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, c</p>
		<a href="#" class="btn btn-warning">Explore</a>
		<img src="images/items/item-sm.png" height="200" class="img-bg zoom-in">
	</div>
</article>

	</div> <!-- col.// -->
	<div class="col-md-9">
<ul class="row no-gutters border-cols">
	<li class="col-6 col-md-3" v-for="(product,index) in productsLine1" v-bind:key="index"  >
		<a href="#" class="itembox" > 
			<div class="card-body">
				<p class="word-limit">{{product.name}}</p>
				<img class="img-sm" :src="getImage(product.images)">
			</div>
		</a>
	</li>

</ul>
<ul class="row no-gutters border-cols">
	<li class="col-6 col-md-3" v-for="(product,index) in productsLine2" v-bind:key="index"  >
		<a href="#" class="itembox" > 
			<div class="card-body">
				<p class="word-limit">{{product.name}}</p>
				<img class="img-sm" :src="getImage(product.images)">
			</div>
		</a>
	</li>

	

</ul>
	</div> <!-- col.// -->
</div> <!-- row.// -->
	
</div> <!-- card.// -->

</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import {db} from '../firebase';

export default {
  name: "HomeCategory",
  props: {
    category: null,
  },
  data(){
    return {
        productsLine1: [],
        productsLine2: [],
     
    }
  },

  methods:{

    getImage(images){
      return images[0];
    }

  },
  firestore(){
      return {
        productsLine1: db.collection('products').where("showOnHomepage","==",true).where("homepageLineNo","<=","4"),
        productsLine2: db.collection('products').where("showOnHomepage","==",true).where("homepageLineNo",">","4"),
      }
  },
};
</script>

<style scoped lang="scss">

</style>
