<template>
  <div class="products">
    <h3>Products</h3>
    <button @click="addNew()" class="btn btn-primary float-right">Add Product</button>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in products" v-bind:key="index">
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>
              <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
              <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <select v-model="selectedCategory" class="form-control">
                    <option disabled value="">Please select one</option>
                    <option
                      v-for="(category,index) in allCategories"
                      v-bind:key="index"
                    >{{category.name}}</option>
                  </select>

                  <button @click="addCategory()" type="button" class="btn btn-primary">Add</button>
                  <div class="d-flex">
                    <p v-for="(category,index) in product.categories" v-bind:key="index">
                      <span class="p-1">{{category}}</span>
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />
                <div class="form-group">
                  Show on Homepage :
                  <input type="checkbox" id="checkbox" v-model="product.showOnHomepage" />
                  <input
                    type="text"
                    placeholder="Homepage Line No"
                    v-model="product.homepageLineNo"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  Recommended Item :
                  <input type="checkbox" id="checkbox" v-model="product.recommendedItem" />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Old product price"
                    v-model="product.oldPrice"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                  />

                  <div class="d-flex">
                    <p v-for="(tag,index) in product.tags" v-bind:key="index">
                      <span class="p-1">{{tag}}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage" class="form-control" />
                </div>

                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in product.images" v-bind:key="index">
                    <div class="img-wrapp">
                      <img :src="image" alt width="80px" />
                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              @click="addProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'new'"
            >Save changes</button>
            <button
              @click="updateProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'edit'"
            >Apply changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";
import { firestore } from "firebase";
export default {
  name: "Products",
  props: {
    msg: String
  },
  components: {
    VueEditor
  },
  data() {
    return {
      products: [],
      allCategories: [],
      product: {
        name: null,
        description: null,
        price: null,
        oldPrice: null,
        tags: [],
        images: [],
        showOnHomepage: null,
        homepageLineNo: null,
        categories: [],
        recommendedItem: null
      },
      activeItem: null,
      modal: null,
      tag: null,
      selectedCategory: null
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
      allCategories: db.collection("categories")
    };
  },
  methods: {
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function() {
          console.log("image deleted");
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        console.log(e.target.files[0]);
        var storageRef = fb
          .storage()
          .ref(
            "products/" +
              Math.floor(Math.random() * 1000000) +
              1 +
              "_" +
              file.name
          );
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },
    addTag() {
      console.log(this.tag);
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    addCategory() {
      console.log(this.selectedCategory);
      console.log(this.product.categories);
      console.log(this.product.tags);
      if(this.product.categories == undefined)
        this.product.categories = [];
        console.log(this.product.categories);
      this.product.categories.push(this.selectedCategory);
      this.selectedCategory="";
        console.log(this.product.categories);

    },

    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      };
    },
    addNew() {
      this.modal = "new";
      this.reset();
      $("#product").modal("show");
    },

    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      $("#product").modal("hide");

      Toast.fire({
        type: "success",
        title: "Your product updated successfully."
      });
    },
    editProduct(product) {
      this.product = product;
      this.modal = "edit";

      $("#product").modal("show");
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          console.log(doc.id);
          this.$firestore.products.doc(doc.id).delete();
          /*Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )*/

          Toast.fire({
            type: "success",
            title: "Your product has been deleted."
          });
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);
      $("#product").modal("hide");
      $("#product").modal("hide");

      Toast.fire({
        type: "success",
        title: "Your product added successfully."
      });
    },

    created() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>
