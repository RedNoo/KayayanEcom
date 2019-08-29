<template>
  <header class="section-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            class="logo"
            src="../assets/images/logos/logo-alibaba.png"
            alt="alibaba style e-commerce html template file"
            title="alibaba e-commerce html css theme"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTop"
          aria-controls="navbarTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTop">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Sourcing</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">Top Suppliers</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Suppliers by Regions</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Online Retailer</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">Trade Assurance</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Arabic</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Logistics Service</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Membership Services</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Community</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">Help Center</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Submit a Dispute</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">For Suppliers</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">Multi Request</a>
            </li>
            <li class="nav-item">
              <a href="http://bootstrap-ecommerce.com/" class="nav-link">Download</a>
            </li>
          </ul>
          <!-- navbar-nav.// -->
        </div>
        <!-- collapse.// -->
      </div>
    </nav>

    <section class="header-main shadow-sm">
      <div class="container">
        <div class="row-sm align-items-center">
          <div class="col-lg-4-24 col-sm-3">
            <div class="category-wrap dropdown py-1">
              <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bars"></i> Categories
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Machinery / Mechanical Parts / Tools</a>
                <a class="dropdown-item" href="#">Consumer Electronics / Home Appliances</a>
                <a class="dropdown-item" href="#">Auto / Transportation</a>
                <a class="dropdown-item" href="#">Apparel / Textiles / Timepieces</a>
                <a class="dropdown-item" href="#">Home & Garden / Construction / Lights</a>
                <a class="dropdown-item" href="#">Beauty & Personal Care / Health</a>
              </div>
            </div>
          </div>
          <div class="col-lg-11-24 col-sm-8">
            <form action="#" class="py-1">
              <div class="input-group w-100">
                <select class="custom-select" name="category_name">
                  <option value>All type</option>
                  <option value>Special</option>
                  <option value>Only best</option>
                  <option value>Latest</option>
                </select>
                <input type="text" class="form-control" style="width:50%;" placeholder="Search" />
                <div class="input-group-append">
                  <button class="btn btn-warning" type="submit">
                    <i class="fa fa-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
            <!-- search-wrap .end// -->
          </div>
          <!-- col.// -->
          <div class="col-lg-9-24 col-sm-12">
            <div class="widgets-wrap float-right row no-gutters py-1">
              <div class="col-auto">
                <div class="widget-header dropdown">
                  <a v-if="!loggedin" href="#" data-toggle="dropdown" data-offset="20,10">
                    <div class="icontext">
                      <div class="icon-wrap">
                        <i class="text-warning icon-sm fa fa-user"></i>
                      </div>
                      <div class="text-wrap text-dark">
                        Sign in
                        <br />My account
                        <i class="fa fa-caret-down"></i>
                      </div>
                    </div>
                  </a>
                  <a href="#" v-if="loggedin">{{email}}</a>
                  <div class="dropdown-menu">
                    <form class="px-4 py-3" v-on:submit.prevent>
                      <div class="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          v-model="email"
                          class="form-control"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          @keyup.enter="login"
                          v-model="password"
                          class="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary" @click="login">Sign in</button>
                    </form>
                    <hr class="dropdown-divider" />
                    <a class="dropdown-item" href="#">Have account? Sign up</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
                  </div>
                  <!--  dropdown-menu .// -->
                </div>
                <!-- widget-header .// -->
              </div>
              <!-- col.// -->
              <div class="col-auto">
                <a href="#" class="widget-header">
                  <div class="icontext">
                    <div class="icon-wrap">
                      <i class="text-warning icon-sm fa fa-shopping-cart"></i>
                    </div>
                    <div class="text-wrap text-dark">
                      <button type="button" data-toggle="modal" data-target="#cartModal">Cart</button>
                    </div>
                  </div>
                </a>
              </div>
              <!-- col.// -->
              <div class="col-auto">
                <a href="#" class="widget-header">
                  <div class="icontext">
                    <div class="icon-wrap">
                      <i class="text-warning icon-sm fa fa-heart"></i>
                    </div>
                    <div class="text-wrap text-dark">
                      <span class="small round badge badge-secondary">0</span>
                      <div>Favorites</div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- col.// -->
            </div>
            <!-- widgets-wrap.// row.// -->
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container.// -->
    </section>
    <!-- header-main .// -->
    <mini-cart></mini-cart>
  </header>
  <!-- section-header.// -->
</template>


<script>
import { fb, db } from "../firebase";

export default {
  name: "Navbar",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      loggedin: false
    };
  },
  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $("#login").modal("hide");

          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });

          //this.$router.replace('admin');
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          alert(errorMessage);
        });
    },
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $(".dropdown-menu ").removeClass("show");
          this.loggedin = true;
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "Wrong password!" //,
              //footer: '<a href>Why do I have this issue?</a>'
            });
          } else {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: errorMessage //,
              //footer: '<a href>Why do I have this issue?</a>'
            });
          }
        });
    }
  },
  created() {
    var user = fb.auth().currentUser;
    if (user) {
      this.email = user.email;
      this.loggedin = true;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
