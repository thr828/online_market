<template>
    <div>
      <div class="product-search">
          <input type="text" id="txtSearch"/>
          <button>搜索</button>
      </div>
      <hr>
      <div class="product-list">
        <ul>          
             <li v-for="product in productList" :key="product.id">
               <router-link :to="'/ProductDetail?pid='+product.id">
                    <img :src="product.productImageUrl" >
                    <p class="p-price">&yen;{{product.price}}</p>    
                    <p>{{product.productName}}</p> 
               </router-link>
             </li>
             
           
        </ul>
       </div>
    </div>
  
</template>
<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList: function() {
      var thisVue = this;
      this.$http.get("http://localhost:5764/api/Product/get").then(function(res) {
        thisVue.productList = res.data;
      });
    }
  }
};
</script>
<style scoped>
    *{
    padding: 0;
    margin: 0;  
    }
  .product-search
  {
      width: 704px;
      margin: auto;
      height: 44px;
  }
   #txtSearch
   {
     width:600px;
     height: 32px;
     border: 6px solid red;
     float: left;
     outline: none;
     padding: 0px 6px;

   }
   button
   {
       width: 80px;
       height: 44px;
       border: none;
       background-color: red;
       color: white;
       float: left;
       outline: none;
       
   }
   hr{
       margin-top:60px;
       border: 2px solid red;
   }
   .product-list li {
 width: 260px;
 margin: 60px 0 0 60px;
 list-style: none;
 float: left;
 border: 1px solid #fff;
 padding: 6px;
}
 .product-list li:hover{
   border-color:  #eee;
   box-shadow: 0 0 6px #ccc;
 }

.product-list li img{
 width: 260px;
}

   .product-list li p {
       text-align:left;
   }
   .p-price
   {
       font-size: 18px;
       font-weight: bold;
       color: red;
       margin-bottom: 6px;  
   }
</style>