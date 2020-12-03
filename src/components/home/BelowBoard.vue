<template>
  <div class="belowboard">
    <ul class="sign">
      <li></li>
      <li></li>
      <li>排行榜</li>
    </ul>
    <ul class="sign2">
      <li></li>
      <li>按周查看</li>
    </ul>
    <div class="listWrapper">
      <div class="list" v-for="(friend,i) in $store.state.Comp_Home.user.friends" :key="i" @click="setFriend(friend)">
        <div class="ranking" :class="friend.medal">
          {{friend.medal ? "" : i + 1}}
        </div>
        <div class="avatar">
          <img :data-src="friend.picUrl" alt="avatar" ref="lazyItem">
        </div>
        <div class="nameandgain">
          <p>{{friend.id}}</p>
          <div class="gain">获得了{{friend.recentGain}}个绿色出行徽章</div>
        </div>
        <div class="points">{{friend.recentPoints|weight}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "rank",
  data(){
    return {
    }
  },
  methods:{
    setFriend(friend){
      this.$store.state.Comp_Home.friend = friend
      this.$store.commit("controlComponentsShow",["showFriend",true])
    },
  },
  mounted(){
    this.$lazyLoading(this.$refs["lazyItem"])
  },
  filters:{
    weight(num){
      if(num < 0){
        return
      }else if(num > 0 && num < 999){
        return num + "g"
      }else{
        return parseFloat(parseInt(num).toString().replace(/(\d)(?=(\d{3})+$)/g,"$1.")) + "kg"
      }
    }
  },
}
</script>

<style scoped>
.belowboard{
  margin: 10px auto 0px auto;
  width: 95%;
  box-shadow: 0 2px 10px 1px #D9D9D9;
  border-radius: 0.5rem;
}
.sign{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sign > li{
  margin: 5px;
}
.sign > li:nth-child(1){
  height: 1px;
  width: 1rem;
  background-color: #7DABC9;
}
.sign > li:nth-child(2){
  height: 0.4rem;
  width: 0.4rem;
  background-color: #2DBB54;
  border-radius: 50%;
}
.sign > li:nth-child(3){
  text-align: center;
  color: #707070;
  font-weight: 700;
}
.sign2{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6E6E6E;
}
.sign2 > li{
  margin : 0 20px;
  font-weight: bold;
  color: #329F4F;
}
.sign2 > li:last-child{
  width: 4rem;
  min-width: 80px;
  height: 1rem;
  min-height: 20px;
  text-align: center;
  line-height: 1rem;
  background: linear-gradient(to right,#42EB85,#39F8D0);
  border-radius: 0.4rem;
}
.list{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  min-width: 300px;
}
.list img{
  width: 100%;
  height: 100%;
}
.list > .ranking > img{
  width: 80%;
  height: 80%;
}
.list > .ranking{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  background-size: 80% 80%;
  background-position: 50%;
  background-repeat: no-repeat;
  font-size : 16px;
}
.list > .ranking.gold{
  background-image: url("./../../assets/home/gold.svg"); 
}
.list > .ranking.silver{
  background-image: url("./../../assets/home/silver.svg"); 
}
.list > .ranking.bronze{
  background-image: url("./../../assets/home/bronze.svg"); 

}
.list > .avatar{
  flex: 0 1 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  overflow: hidden;
}
.list > .nameandgain{
  flex: 0 1 8rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: auto;
}
.list > .nameandgain > p{
  font-weight: bold;
}
.list > .nameandgain > .gain{
  color: #BBB;
  font-size: 12px;
}
.list > .points{
  flex: 0 1 3rem;
  text-align: center;
  font-size: 14px;
}
.listWrapper{
  width: 100%;
  margin-bottom: 3.5rem;
}
</style>