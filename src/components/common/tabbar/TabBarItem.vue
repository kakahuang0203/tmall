<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activestyle"><slot name="item-text"></slot></div>

   </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'red'
      // 设置一个传值类型，String，默认红色
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
      // 判断当前slot是否是选中的
    },
    activestyle () {
      return this.isActive ? {color: this.activecolor} : { }
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
 .tab-bar-item {
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
 }
.tab-bar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   vertical-align: middle;
 }

 </style>
