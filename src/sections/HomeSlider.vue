<template>
<!-- ========================= SECTION MAIN ========================= -->
<section class="section-main bg padding-y-sm">
<div class="container">
<div class="card">
	<div class="card-body">
<div class="row row-sm">
	<aside class="col-md-3">


<div class="box items-bordered-wrap">
	<figure class="itemside">
		<div class="aside"><img src="images/items/4.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
				<del class="price-old text-muted">$1980</del>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
	<figure class="itemside">
		<div class="aside"><img src="images/items/5.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
	<figure class="itemside">
		<div class="aside"><img src="images/items/6.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
</div>

	</aside> <!-- col.// -->
	<div class="col-md-6">

<!-- ================= main slide ================= -->
<carousel :perPage="1" :autoplay="true" :paginationPadding="2">
  <slide >
    <img width="93%" src="images/banners/slide1.jpg">
  </slide>
  <slide>
    <img width="93%" src="images/banners/slide2.jpg">
  </slide>
</carousel>


<!-- ============== main slidesow .end // ============= -->

	</div> <!-- col.// -->
	<aside class="col-md-3">

<div class="box items-bordered-wrap">
	<figure class="itemside">
		<div class="aside"><img src="images/items/4.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
				<del class="price-old text-muted">$1980</del>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
	<figure class="itemside">
		<div class="aside"><img src="images/items/5.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
	<figure class="itemside">
		<div class="aside"><img src="images/items/6.jpg" class="img-sm"></div>
		<figcaption class="text-wrap align-self-center">
			<h6 class="title"><a href="#">Some name of item goes here nice</a></h6>
			<div class="price-wrap">
				<span class="price-new">$1280</span>
			</div> <!-- price-wrap.// -->
		</figcaption>
	</figure> 
</div>

	</aside>
</div> <!-- row.// -->
	</div> <!-- card-body .// -->
</div> <!-- card.// -->

  <figure class="mt-3 banner p-3 bg-secondary">
	<div class="text-lg text-center white">Useful banner can be here</div>
</figure>


</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION MAIN END// ========================= -->
</template>
<script>
export default {
  name: "HomeSlider"
};
</script>

<style scoped lang="scss">

</style>