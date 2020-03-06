<template>
   <div id="home">
      <navbar class="home-nav">
         <div slot="left">-</div>
         <div slot="center">购物街</div>
         <div slot="right">+</div>
      </navbar>
      <recommend :recommends="recommends"/>
      <featrue/>
      <tabcontrol class="tab-control" :titles="titles"/>
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
           <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
           <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
           <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import recommend from './childComps/RecommendView'
import featrue from './childComps/Fearture'

import tabcontrol from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: 'Home',
  components: {
    navbar,
    recommend,
    featrue,
    tabcontrol
  },
  data () {
   return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
         'pop': {page: 0, list: []},
         'news': {page: 0, list: []},
         'sell': {page: 0, list: []}
      }
   }
  },
  created() {
    //1.请求多个数据
    //函数getHomeMultidata getHomeMultidata()调用函数
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
  },
  methods: {
     getHomeMultidata() {
       getHomeMultidata().then(res => {
       this.banners = res.data.data.banner.list
       this.recommends = res.data.data.recommend.list
       })
     },
     getHomeGoods(type){
        //获取数据page
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
         })
     }

  }
}
</script>
<!-- 
 头部定位
 position: fixed;
     left: 0;
     right: 0;
     top: 0;
     z-index: 9;

 后面的.tab-control
 position: sticky;  在某处停留
    top: 44px;  停留的位置 2个参数要一起使用
-->
<style scoped>
   #home {
      padding-top: 44px;
   }
  .home-nav {
     background-color: pink;
     color: white;
     position: fixed;
     left: 0;
     right: 0;
     top: 0;
     z-index: 9;
  }
  .tab-control {
    position: sticky; 
    top: 44px; 
  }
</style>