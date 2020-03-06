<template>
  <div>
    <tab-bar >
          <tab-bar-item  v-for="(item, index) in arrayUrl" :key="index" :path="item.path"  :activecolor="item.activecolor">
          <img slot="item-icon" :src="item.itemicon">
          <img slot="item-icon-active" :src="item.itemiconactive">
          <div slot="item-text">{{item.itemtext}}</div>
        </tab-bar-item>
    </tab-bar>
    <!--<tab-bar>
      <tab-bar-item path="/home" activecolor="red">
        <img slot="item-icon" src="~assets/img/tabbar/Money management.png">
        <img slot="item-icon-active" src="~assets/img/tabbar/Money management-fill.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/all.png">
        <img slot="item-icon-active" src="~assets/img/tabbar/all-fill.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activecolor="green">
        <img slot="item-icon" src="~assets/img/tabbar/cart- full.png">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart-Empty-fill.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/bussiness-man.png">
        <img slot="item-icon-active" src="~assets/img/tabbar/bussiness-man-fill.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> -->
  </div>
</template>

<script>
import tabBar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'Tabbar',
  data () {
    return {
      arrayUrl: [{
        path: '/home',
        activecolor: 'red',
        itemicon: require('assets/img/tabbar/Money management.png'),
        itemiconactive: require('assets/img/tabbar/Money management-fill.png'),
        itemtext: '首页'
      },
      {
        path: '/category',
        activecolor: 'red',
        itemicon: require('assets/img/tabbar/all.png'),
        itemiconactive: require('assets/img/tabbar/all-fill.png'),
        itemtext: '分类'
      },
      {
        path: '/cart',
        activecolor: 'red',
        itemicon: require('assets/img/tabbar/cart- full.png'),
        itemiconactive: require('assets/img/tabbar/cart-Empty-fill.png'),
        itemtext: '购物车'
      },
      {
        path: '/profile',
        activecolor: 'red',
        itemicon: require('assets/img/tabbar/bussiness-man.png'),
        itemiconactive: require('assets/img/tabbar/bussiness-man-fill.png'),
        itemtext: '我的'
      }]
    }
  },
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>
  
</style>
