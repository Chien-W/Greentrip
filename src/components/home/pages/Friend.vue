<template>
  <div class="friend" v-show="$route.path=='/home'" :class="{show:$store.state.componentsShow.showFriend}">
    <WaterBall></WaterBall>
    <TotalPoints></TotalPoints>
    <Achievement></Achievement>
    <Recent></Recent>
  </div>
</template>

<script>
import WaterBall from "@/components/home/WaterBall.vue"
import TotalPoints from "@/components/friend/TotalPoints.vue"
import Achievement from "@/components/friend/Achievement.vue"
import Recent from "@/components/friend/Recent.vue"

export default {
  name : "friend",
  components:{
    WaterBall,
    TotalPoints,
    Achievement,
    Recent,
  },
  data(){
    return {

    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.friend{
  position: absolute;
  top: 0%;
  left: 100%;
  width: 100%;
  height: 100%;
  background-image: url(./../../../assets/home/ellipse.svg); 
  background-size: 500px;
  background-position:50% -150px;
  background-repeat: no-repeat;
  transition: 0.6s all ease-in-out;
}
.friend.show{
  transform: translateX(-100%);
  transition: 0.6s ease-in-out;
}
</style>