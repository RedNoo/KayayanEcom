import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import AdminProducts from "./views/AdminProducts.vue";
import AdminCategories from "./views/AdminCategories.vue";
import ProductDetail from "./views/ProductDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "products",
          name: "products",
          component: AdminProducts
        },
        {
          path: "categories",
          name: "categories",
          component: AdminCategories
        }
      ]
    },
    {
      path: "/products/:id",
      name: "product-detail",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ProductDetail.vue")
      //component: ProductDetail
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Checkout.vue")
    }
  ]
});
