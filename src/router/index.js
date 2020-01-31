import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import AddSuccess from '@/components/AddSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/AddSuccess',
      name: 'AddSuccess',
      component: AddSuccess
    }
  ]
})
