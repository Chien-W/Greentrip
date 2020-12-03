<template>  
  <div class="home" :class="{hide}">
    <WaterBall></WaterBall>
    <TotalPoints></TotalPoints>
    <Tools></Tools>
    <BelowBoard></BelowBoard>
  </div>
</template>

<script>
import WaterBall from "@/components/home/WaterBall.vue"
import TotalPoints from "@/components/home/TotalPoints.vue"
import Tools from "@/components/home/Tools.vue"
import BelowBoard from "@/components/home/BelowBoard.vue"

import {mapState} from "vuex"

export default {
  name : 'home',
  components:{
    WaterBall,
    TotalPoints,
    Tools,
    BelowBoard,
  },
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      hide : state => {
        return state.componentsShow.showFriend || state.componentsShow.showReductionDetail
      }
    })
  },
  methods:{

  },
}
</script>

<style scoped>
.home{
  position: relative;
  width: 100%;
  background-image: url(./../assets/home/ellipse.svg); 
  background-size: 500px;
  background-position:50% -150px;
  background-repeat: no-repeat;
  transition: 0.6s ease-in-out;
}
.home.hide{
  height: 100%;
  transform: translateX(-100%);
  transition: 0.6s ease-in-out;
}
</style>