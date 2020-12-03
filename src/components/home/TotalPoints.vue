<template>
  <div class="totalpoints" @click='$store.commit("controlComponentsShow",["showReductionDetail",true])'>
    <div class="pic">
      <img :src="$store.state.Comp_Home.user.picUrl" alt="Avatar">
    </div>
    <p class="number">
      <ICountUp 
      :delay="delay"
      :endVal="$store.state.Comp_Home.user.totalPoints"
      :options="options"
      @ready="onReady"
      ></ICountUp>
    </p>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name : "totalpoints",
  components : {
    ICountUp
  },
  data(){
    return {
      delay: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: '.',
        decimal: '.',
        suffix: 'kg'
      }
    }
  },
  methods:{
    onReady: function(instance, CountUp) {
      this.$store.state.lib.CUInstance = instance
    }
  },
  filters:{
    //好像暂时用不到
    weight(num){
      if(num < 0){
        return
      }else if(num > 0 && num < 999){
        return num + "g"
      }else{
        return parseInt(num).toString().replace(/(\d)(?=(\d{3})+$)/g,"$1.") + "kg"
      }
    }
  },
}
</script>

<style scoped>
.totalpoints{
  /*
  移动端
  */
  position: absolute;
  right: 0;
  top: 35px;
  width: 35%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px 0 0 25px/25px 0 0 25px;
  background: linear-gradient(to right,#4CDC64 0,#B1E761 100%);
  user-select: none;
}
.totalpoints > .pic{
  margin-left: 4px;
  width: 35px;
  height: 35px;
  border: 1px solid yellow;
  border-radius: 50%;
  overflow: hidden;
}
.totalpoints > .pic img{
  width: 100%;
  height: 100%;
}
.totalpoints > .number{
  margin-right: 10%;
  color: #329F4F;
}
</style>