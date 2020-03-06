import Vue from 'vue'
import router from  'vue-router'
import Home from 'views/home/Home.vue'
import Cart from 'views/cart/Cart.vue'
import Profile from 'views/profile/Profile'
import Category from 'views/category/Category'

Vue.use(router)
const routes = ([
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
  ])

const Vuerouter = new router({
    routes,
    mode: 'history'

})

export default Vuerouter