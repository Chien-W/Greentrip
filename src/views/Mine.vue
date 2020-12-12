<template>  
  <div class="mine">
    <div class="toptwoicon">
      <div :class="{new:hasNewnotification}" @click="hasNewnotification = false">
        <img src="../assets/mine/icon_bell.svg" alt="bell">
      </div>
      <img src="../assets/mine/icon_saoyisao.svg" alt="saoyisao">
    </div>
    <div class="user_info">
      <div class="avatar">
        <img :src="user.picUrl" alt="avatar">
      </div>
      <div class="name_level">
        <p class="name">{{user.name}}</p>
        <p class="level">LV.{{user.level}}</p>
      </div>
      <div class="qrcode">
        <img src="../assets/mine/icon_qrcode.svg" alt="icon_qrcode">
      </div>
    </div>
    <div class="user_progress">
      <p class="level">LV.{{user.level}}</p>
      <div class="progress_wrapper" data-progress="520/1000">
        <progress max="1000" value="520" ></progress>
      </div>
      <p class="level">LV.{{user.level+1}}</p>
    </div>
    <ul class="user_total">
      <li>
        <img src="../assets/mine/duration_days.svg" alt="duration_days">
        <p class="val">绿色出行 135 天</p>
      </li>
      <li class="vert_line"></li>
      <li>
        <img src="../assets/mine/badge.svg" alt="badge">
        <p class="val">徽章 5 个</p>
      </li>
    </ul>
    <div class="divider"></div>
    <div class="game">
      <div class="head">
        <p>我的兑换</p>
      </div>
      <div class="content">
        <card5 :card_desc="desc_list1"/>
        <card5 class="card_style" :card_desc="desc_list1"/>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import card5 from "../components/shop/card5";
export default {
  name : 'mine',
  data(){
    return {
      desc_list1 : [
        {id : 1,content:'加速器'},
        {id : 2,content:'提速10%'},
      ],
      hasNewnotification : true,
    }
  },
  computed:{
    ...mapState({
      user : state => state.Comp_Home.user
    })
  },
  methods:{

  },
  components:{
    card5
  }
}
</script>

<style scoped lang="less">
  @basefont : 20px;
  .content{
    margin: 0 auto;
    width: 352rem / @basefont;
    height: 540rem / @basefont;
    background-color: white;
    box-shadow: 0px 2rem / @basefont 10rem / @basefont rgba(0,0,0,.13);
    border-radius: 12rem / @basefont;
  .card_style{
    margin-top: 20rem / @basefont;
  }
  }

.mine{
  width: 100%;
  background-image: url(../assets/mine/background.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 0px;
  margin-bottom: 3.4rem;
}
.toptwoicon{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 2rem;
}
.toptwoicon > :last-child{
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.8rem;
}
.toptwoicon div{
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.8rem;
}
.toptwoicon div.new::after{
  content: url(../assets/mine/icon_bell_new.svg);
  position: absolute;
  right: 0rem;
  top: -0.4rem;
  width: 0.45rem;
  height: 0.45rem;
}
.user_info{
  display: flex;
  margin-top: 1.5rem;
  height: 5rem;
}
.user_info .avatar{
  align-self: flex-end;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: linear-gradient(#F99878 30%,#FACE4B 100%);
  margin-left: 0.6rem;
}
.user_info .avatar img{
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  margin: 0.2rem 0 0.2rem 0.4rem;
}
.user_info .name_level{
  align-self: flex-end;
  width: 5rem;
  margin-left: 1.2rem;
}
.user_info .name_level .name{
  display: inline-block;
  font-size: 1.2rem;
}
.level{
  display: inline-block;
  width: 1.4rem;
  height: 12px;
  border-radius: 0.25rem;
  border: 2px solid black;
  text-align: center;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
}
.user_info .qrcode{
  align-self: flex-end;
  margin-left: 0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: 0.25rem;
}
.user_info .qrcode img{
  width: 100%;
  height: 100%;
}
.user_progress{
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user_progress .level{
  align-self: flex-start;
  margin: 0 1rem;
}
.user_progress .progress_wrapper{
  width: 60%;
  line-height: 12px;
}
.user_progress progress{
  width: 100%;
  height: 12px;
  background: linear-gradient(to right,#F83901,#F9CD22);
  border: 1px solid #333;
  border-radius: 6px;
}
.user_progress progress::-ms-fill{
  background: linear-gradient(to right,#F83901,#F9CD22);
}
.user_progress progress::-moz-progress-bar{
  background: linear-gradient(to right,#F83901,#F9CD22);
}
.user_progress progress::-webkit-progress-value{
  border-radius: 5px;
  background: linear-gradient(to right,#F83901,#F9CD22);
}
.user_progress progress::-webkit-progress-bar{
  background: #fff;
  border-radius: 6px;
}
.user_progress .progress_wrapper::after{
  content: attr(data-progress);
  width: 8rem;
  font-size: 12px;
  margin-left: 80%;
}
.user_total{
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.user_total li.vert_line{
  width: 1px;
  height: 1.3rem;
  background-color: #555;
}
.user_total li:not(.vert_line){
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-around;
}
.user_total img{
  height: 1.3rem;
  width: 1.3rem;
}
.user_total .val{
  font-size: 0.8rem;
}
.divider{
  width: 90%;
  height: 1px;
  background-color: #333;
  margin: 0.5rem auto 0 auto; 
}
.game{
  width: 92%;
  margin: 0.5rem auto 0 auto;
  box-shadow: 0 1px 8px 0 #ccc;
  border-radius: 0.5rem;
}
.game .head{
  height: 1.5rem;
  border-bottom: 2px solid #aaa;
}
.game .head p{
  font-size: 0.8rem;
  border-bottom: 3px solid #3EF1A8;
  border-radius: 1px;
  width: 3.4rem;
  line-height: 1.4rem;
  height: 1.4rem;
  text-align: center;
  margin-left: 0.5rem;
}
ul.body{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul.body li{
  height: 3rem;
  width: 90%;
  margin: 0.6rem auto 0 auto;
}
ul.body li:last-child{
  margin-bottom: 0.6rem;
}
</style>