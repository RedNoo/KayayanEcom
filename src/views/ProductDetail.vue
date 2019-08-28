<template>
  <div >
    <Navbar></Navbar>
  <div v-for="(product, index) in products" v-bind:key="index">
   
    <!-- ========================= SECTION TOPBAR ========================= -->
    <section class="section-topbar border-top padding-y-sm">
      <div class="container">
        <span>Supplier: Manufacturer of China Co., Ltd.</span> &nbsp;
        <span class="text-warning">2 years</span>
      
      </div>
      <!-- container.// -->
    </section>
    <!-- ========================= SECTION TOPBAR .// ========================= -->

    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content bg padding-y-sm">
      <div class="container">
        <nav class="mb-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Category name</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Sub category</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Items</li>
          </ol>
        </nav>

        <div class="row">
          <div class="col-xl-10 col-md-9 col-sm-12">
            <main class="card">
              <div class="row no-gutters">
                <aside class="col-sm-6 border-right">
                  <article class="gallery-wrap">
                    <div class="img-big-wrap">
                      <div>
                        <a href="getImage(product.images)" data-fancybox>
                          <img :src="getImage(product.images)" />
                        </a>
                      </div>
                    </div>
                    <!-- slider-product.// -->
                    <div class="img-small-wrap">
                      <div class="item-gallery" v-for="(images,index) in product.images" v-bind:key="index">
                        <img :src="getImage(product.images)"  />
                      </div>

                    </div>
                    <!-- slider-nav.// -->
                  </article>
                  <!-- gallery-wrap .end// -->
                </aside>
                <aside class="col-sm-6">
                  <article class="card-body">
                    <!-- short-info-wrap -->
                    <h3 class="title mb-3">{{product.name}}</h3>

                    <div class="mb-3">
                      <var class="price h3 text-warning">
                        <span class="currency">$</span>
                        <span class="num">{{product.price}}</span>
                      </var>
                    </div>
                    <!-- price-detail-wrap .// -->
                    <dl>
                      <dt>Description</dt>
                      <dd>
                        <div>
							{{product.shortDescription}}
						</div>
                      </dd>
                    </dl>
                    <dl class="row">
                      <dt class="col-sm-3">SKU</dt>
                      <dd class="col-sm-9">{{product.sku}}</dd>

                    </dl>
                    <div class="rating-wrap">
                      <ul class="rating-stars">
                        <li :style="getStyle(product.rateRatio)" class="stars-active">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <div class="label-rating">{{product.rateCount}} reviews</div>
                      <div class="label-rating">{{product.orderCount}} order(s)</div>
                    </div>
                    <!-- rating-wrap.// -->
                    <hr />
                    <div class="row">
                      <div class="col-sm-5">
                        <dl class="dlist-inline">
                          <dt>Quantity :   </dt>
                          <dd>
                            <select class="form-control form-control-sm" style="width:70px;">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
							  <option>5</option>
                              <option>6</option>
                              <option>7</option>
                            </select>
                          </dd>
                        </dl>
                        <!-- item-property .// -->
                      </div>
                    </div>
                    <div class="row">
                      <!-- col.// -->
                      <div class="col-sm-6">
                        <dl class="dlist-inline">
                          <dt>Size   :   </dt>
                          <dd>
                            <label class="form-check form-check-inline" v-for="(variant,index) in product.variants" v-bind:key="index">
                              <input
                                class="form-check-input"
                                name="inlineRadioOptions"
                                :id="variant.id"
                                :value="variant.size"
                                type="radio"
                                v-model="size"
                              />
                              <span class="form-check-label">{{variant.size}}</span>
                            </label>
                          </dd>
                        </dl>
                        <!-- item-property .// -->
                      </div>
                      <!-- col.// -->
                       <!-- col.// -->
                      <div class="col-sm-6">
                        <dl class="dlist-inline">
                          <dt>Color   :   </dt>
                          <dd>
                            <label class="form-check form-check-inline" v-for="(variant,index) in product.variants" v-bind:key="index">
                              <input
                                class="form-check-input"
                                name="inlineRadioOptions"
                                :id="variant.id"
                                :value="variant.color"
                                type="radio"
                                v-model="color"
                              />
                              <span class="form-check-label">{{variant.color}}</span>
                            </label>
                          </dd>
                        </dl>
                        <!-- item-property .// -->
                      </div>
                      <!-- col.// -->
                    </div>
                    <!-- row.// -->
                    <hr />
                    <add-to-cart
                      :image="getImage(product.images)"
                      :pId="product.id"
                      :price="product.price"
                      :name="product.name"
                    ></add-to-cart>
                   
                    <!-- short-info-wrap .// -->
                  </article>
                  <!-- card-body.// -->
                </aside>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </main>
            <!-- card.// -->

            <!-- PRODUCT DETAIL -->
            <article class="card mt-3">
              <div class="card-body">
                <h4>Detail overview</h4>
					<div v-html="product.description"></div>
              </div>
              <!-- card-body.// -->
            </article>
            <!-- card.// -->

            <!-- PRODUCT DETAIL .// -->
          </div>
          <!-- col // -->
          <aside class="col-xl-2 col-md-3 col-sm-12">
            <div class="card">
              <div class="card-header">Warranty & Conditions</div>
              <div class="card-body small">
                <span>Lorem Ipsum</span>
                <hr /> Free shipment for 
                <br />5+ order
                <hr />4 year warranty
                <br />
                <hr />
                <a href>More Info</a>
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card.// -->
            <div class="card mt-3">
              <div class="card-header">You may like</div>
              <div class="card-body row">
                <div class="col-md-12 col-sm-3"  v-for="(relatedProduct,index) in product.relatedProducts" v-bind:key="index">
                  <figure class="item border-bottom mb-3">
                    <router-link :to="{ name: 'product-detail', params: { id: relatedProduct.slug }}" class="img-wrap">
                      <img :src="relatedProduct.image" class="img-md" />
                    </router-link>
                    <figcaption class="info-wrap">
                     <router-link :to="{ name: 'product-detail', params: { id: relatedProduct.slug }}" class="title">{{relatedProduct.name}}</router-link>
                      <!--<div class="price-wrap mb-3">
                        <span class="price-new">$280</span>
                        <del class="price-old">$280</del>
                      </div>-->
                      <!-- price-wrap.// -->
                    </figcaption>
                  </figure>
                  <!-- card-product // -->
                </div>
                <!-- col.// -->
               
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card.// -->
          </aside>
          <!-- col // -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container // -->
    </section>
    <!-- ========================= SECTION CONTENT .END// ========================= -->
	</div>
  </div>
</template>

<script>
import {  db } from "../firebase";


export default {
  name: "ProductDetail",
  
  data(){
	  return {
      products: [],
      color:null,
      size:null
		  
		  

	  }
  },
  methods: {
	  getImage(images){
      return images[0];
	},
	getStyle(ratio){
		return 	"width:" + ratio +"%";
	}
  },
  firestore() {
    return {
	  products: db.collection("products").where("slug","==",this.$route.params.id).limit(1),
	  
    };
  }
};

</script>


