<template>
  <div class="recent">
    <div class="back" @click="back">
      <img src="./../../assets/common/back.svg" alt="back">
    </div>
    <ul class="sign">
      <li class="line"></li>
      <li class="sRound"></li>
      <li>动态</li>
    </ul>
    <ul class="lists">
      <li>
        <ul class="sign">
          <li class="sRound"></li>
          <li>{{date}}</li>
        </ul>
        <div class="detail">
          <img class="lazyItem" :data-src="$store.state.Comp_Home.user.friends[2].picUrl"  alt="head">
          <p class="name">TA的好友</p>
          <p class="getNumber">收取{{getNumber}}g</p>
          <p class="time">22:41</p>
        </div>
        <div class="detail">
          <img class="lazyItem" :data-src="$store.state.Comp_Home.user.friends[4].picUrl"  alt="head">
          <p class="name">欧圆圆</p>
          <p class="getNumber">收取109g</p>
          <p class="time">08:13</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "recent",
  data(){
    return {
      date : "",
      getNumber : 10,
    }
  },
  methods:{
    normalizeDate(){
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth()
      day = day < 10 ? "0" + day : day
      month = month < 9 ? "0" + (month + 1) : month + 1
      this.date = date.getFullYear() + "-" + month + "-" + day
    },
    back(){
      this.$store.commit("controlComponentsShow",["showFriend",false])
    }
  },
  created(){
    this.normalizeDate()
  },
  mounted(){
    // 还需要完善大量HTML和逻辑
    this.$lazyLoading(Array.from(document.getElementsByClassName("lazyItem")))
  }
}
</script>

<style scoped>
.recent{
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
.sign > .line{
  height: 1px;
  width: 1rem;
  background-color: #7DABC9;
}
.sRound{
  height: 0.4rem;
  width: 0.4rem;
  background-color: #2DBB54;
  border-radius: 50%;
}
.sign > li:nth-child(3){
  text-align: center;
  color: #707070;
  font-size: 14px;
  font-weight: 700;
}
.lists{
  width: 90%;
  margin:0 auto;
  color: #707070;  
}
.detail{
  height: 1.5rem;
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.detail img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.detail .name{
  color: black;
  margin-right: 0.5rem;
}
.detail .getNumber{
  margin-right: auto;
}
.back{
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.back img{
  width: 100%;
  height: 100%;
}
</style>