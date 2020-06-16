<template>
  <div class="product-page">
    <div class="product-info">
      <div class="product-info-left">
        <img :src="product.productImageUrl" alt="">
      </div>
      <div class="product-info-right">
        <p class="p-name">{{product.productName}}</p>
        <p class="p-price">&yen;{{product.price}}</p>
        <p class="p-number">
          <span class="sub" @click="subNumber()">-</span>
          <!--<input type="text" :value="count" @change="changeCount()" />-->
          <input type="text" v-model="count">  <!-- 使用两种方式-->
          <span class="pls" @click="plsNumber()">+</span>
        </p>
        <p class="p-button">
          <button @click="addCarts()">加入购物车</button>
        </p>
      </div>
    </div>
    <hr style="margin-bottom:20px">
    <div class="product-detail">
      <img src="/static/productImg/productDetail.jpg" alt="">
    </div>

  </div>
</template>

<script>
export default {
  data() {
  return {
      count:1,
      product:{}

    };
  },
  mounted() {
    var pid = this.$route.query.pid;
    this.getProductById(pid);
  },
  methods: {
    getProductById(pid){
      var thisvue=this;
     // this.$http.get("http://localhost:5765/api/Product/GetProduct?ID="+pid).then(function(res){
      this.$http.get("http://localhost:5676/api/Product/"+pid).then(function(res){
        console.log(res.data);
        thisvue.product = res.data;
      });
    },
    plsNumber() {
      this.count++;
    },
    subNumber() {
      if (this.count > 1) {
        this.count--;
      }
    },
    changeCount(){
      var newCount=event.target.value;
      if(!isNaN(newCount)&&newCount>0)
      {
        this.count=newCount;
      }
      else
      {
        event.target.value=this.count;
      }

    },
    addCarts(){
      var thisvue=this;
      //http://localhost:5764/api/Product/AddCart?pruductId=2&count=23
     // this.$http.get("http://localhost:5676/api/Product/AddCart?pruductId="+this.product.id+"&count="+this.count).then(function(res){
      //调用restful接口
      this.$http.get("http://localhost:5676/api/Product/"+this.product.id+","+this.count).then(function(res){
         if(res.data>0)
         {
           thisvue.$router.push("/AddSuccess");
         }
      });
    }
  },
  watch:{ //此处使用的是监听
    count:function(nVal,oVal)
    {
      if(isNaN(nVal)||nVal<1)
      {
        this.count=oVal;
      }

    }

  }
};
</script>

<style>
.product-info-left
{
   float: left;
}
.product-info-right
{
  float: left;
}
.product-info-right p
{
 margin-bottom: 60px;
 text-align: left;
}
.product-info-right .p-name
{
  font-size: 18px;
  font-weight: bold;
  color:red;
}

.product-info-right .p-button button
{
  width: 210px;
  height: 50px;
  background-color: rgb(18, 135, 238);
  border:0 none;
  border-radius:3px;
  color:#fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.p-number span
{
 display: inline-block;
 width: 36px;
 height: 36px;
 border:1px solid #ccc;
 text-align: center;
 cursor:pointer;
 line-height: 36px;
  float: left;

}
.sub
{
  border-radius: 3px 0 0 3px;
}
.pls
{
  border-radius: 0 3px 3px 0;
}
.p-number input{
 height: 36px;
 border: 1px solid #ccc;
 outline: none;
 width: 66px;
 text-align:center;
  float: left;
  border-left: 0 none;
  border-right: 0 none;
}
.p-number
{
   height: 36px;
   width: 300px;

}
.product-page
{
  width: 1200px;
  margin: 0 auto;

}
.product-info
{
  height: 460px;
}
</style>
