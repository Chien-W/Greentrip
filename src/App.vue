<template>
  <div id="app" :class="{compa_extraBUG}">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <BottomNav></BottomNav>
    <Friend></Friend>
    <ReductionDetail></ReductionDetail>
  </div>
</template>

<script>
import BottomNav from "@/components/navigator/BottomNav"
import Friend from "@/components/home/pages/Friend"
import ReductionDetail from "@/components/home/pages/ReductionDetail"

import {mapState} from "vuex"

export default {
  components:{
    BottomNav,
    Friend,
    ReductionDetail,
  },
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      compa_extraBUG : (state)=>{
        return state.componentsShow.showFriend || state.componentsShow.showReductionDetail
      }
    })
  },
  mounted(){
    
  }
}
</script>

<style>
#app{
  position: relative;
  width: 100%;
  /* height: 100%; */
  overflow-x: hidden;
}
/*
  兼容某些浏览器地址栏上移导致白色遮拦的bug
 */
#app.compa_extraBUG{
  height: 100%;
}
</style>
