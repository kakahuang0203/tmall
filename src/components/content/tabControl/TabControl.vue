<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" 
      class="tab-control-item" 
      :class="{active:index === currentindex}">
      <span  @click="tabclick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
   name: "TabControl" ,
   props: {
     titles: {
       type: Array,
       default () {
           return []
       }  
     }
   },
   data () {
     return {
       currentindex: 0
     }
   },
   methods: {
     tabclick (index) {
       this.currentindex = index
     }
   }
}
</script>
<!-- 
 设置白色背景压住文字内容
 padding 5 是线变长更好看
-->
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{ 
  flex: 1;
}

.tab-control-item span{ 
  padding: 5px;
}

.active {
  color: red;
}
.active span {
  border-bottom: 3px solid red;
}
</style>