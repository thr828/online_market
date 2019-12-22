<template>
    <div>
      <div class="product-search">
          <input type="text" id="txtSearch"/>
          <button>搜索</button>
      </div>
      <hr>
      <div class="product-list">
        <ul>          
             <li>
                    <img src="/static/productImg/product1.jpg" alt="">
                    <p class="p-price">&yen;5899.99</p>    
                    <p>笔记本电脑</p> 
             </li>
             <li>
                    <img src="/static/productImg/product1.jpg" alt="">
                    <p class="p-price">&yen;5899.99</p>    
                    <p>笔记本电脑</p> 
             </li>
             <li>
                    <img src="/static/productImg/product1.jpg" alt="">
                    <p class="p-price">&yen;5899.99</p>    
                    <p>笔记本电脑</p> 
             </li>
             <li>
                    <img src="/static/productImg/product1.jpg" alt="">
                    <p class="p-price">&yen;5899.99</p>    
                    <p>笔记本电脑</p> 
             </li>
        </ul>
       </div>
    </div>
  
</template>
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