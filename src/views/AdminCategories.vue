<template>
  <div class="categories">
      <h3>Categories</h3>
      <button @click="addNew()" class="btn btn-primary float-right">Add Category</button>
   

      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Line No</th>
            <th>Modify</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(category,index) in categories" v-bind:key="index">
              <td>{{category.name}}</td>
              <td>{{category.lineNo}}</td>
              <td>
                <button class="btn btn-primary" @click="editCategory(category)">Edit</button>
                <button class="btn btn-danger" @click="deleteCategory(category)">Delete</button>
              </td>
              </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="category" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Category</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Category Name" v-model="category.name" class="form-control">
                    </div>

                    
                  </div>
                  
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addCategory()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
              <button @click="updateCategory()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
            </div>
          </div>
        </div>
      </div>

      
  </div>
</template>

<script>
import {fb,db} from '../firebase';
import { firestore } from 'firebase';
export default {
  name: "Categories",
  props: {
    msg: String
  },
  components:{
  },
  data() {
    return {
      categories: [],
      category: {
        name: null,
      },
      activeItem: null,
       modal: null,
       tag: null
      
    }
  },
  firestore(){
    return {
      products: db.collection('products'),
    }
  },
  methods:{
    deleteImage(img,index) {
        let image = fb.storage().refFromURL(img);
            this.product.images.splice(index,1);
            image.delete().then(function() {
              console.log('image deleted');
            }).catch(function(error) {
              // Uh-oh, an error occurred!
              console.log('an error occurred');
            });
    },
    uploadImage(e){
    if(e.target.files[0]){
      let file = e.target.files[0];
      console.log(e.target.files[0]);
      var storageRef = fb.storage().ref('products/'+ Math.floor(Math.random() * 1000000) + 1 + '_'  +  file.name);
      let uploadTask = storageRef.put(file);

       uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          });
        }
    },
    addTag(){
      console.log(this.tag);
      this.product.tags.push(this.tag)
      this.tag="";
    },
    reset(){
        this.product= {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
        }
    },
    addNew(){
      this.modal = 'new';
      this.reset();
      $('#product').modal('show');
    },
    
    updateProduct(){
       this.$firestore.products.doc(this.product.id).update(this.product);
      $('#product').modal('hide');
      
         Toast.fire({
          type: 'success',
          title: 'Your product updated successfully.'
        });
    },
    editProduct(product){
      this.product = product;
      this.modal = 'edit';
     
      $('#product').modal('show');
    },
    deleteProduct(doc){
            Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          console.log(doc.id);
          this.$firestore.products.doc(doc.id).delete()
          /*Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )*/

         Toast.fire({
          type: 'success',
          title: 'Your product has been deleted.'
        });
        }
      });
    },
    readData(){
    
    },
    addProduct(){
      this.$firestore.products.add(this.product);
      $('#product').modal('hide');
       $('#product').modal('hide');
      
         Toast.fire({
          type: 'success',
          title: 'Your product added successfully.'
        });
  },

   created(){
        
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>
