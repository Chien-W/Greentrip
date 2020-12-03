<template>
  <div class="tools">
    <ul class="sign">
      <li></li>
      <li></li>
      <li>小工具</li>
    </ul>
    <ul class="content">
      <li @click="showComponent('Beg')">
        <div class="tools_item">
          <img src="./../../assets/home/beg.svg" alt="背包">        
        </div>
        <p class="tools_title">
          背包
        </p>
      </li>
      <li>
        <div class="tools_item">
          <img src="./../../assets/home/skill.svg" alt="攻略">
        </div>
        <p class="tools_title">
          攻略
        </p>
      </li>
      <li @click="showComponent('Donate')">
        <div class="tools_item">
          <img src="./../../assets/home/donate.svg" alt="捐赠">
        </div>
        <p class="tools_title">
          捐赠
        </p>
      </li>
      <li @click="showComponent('Task')">
        <div class="tools_item">
          <img src="./../../assets/home/task.svg" alt="任务">
        </div>
        <p class="tools_title">
          任务
        </p>
      </li>
    </ul>
    <Bag></Bag>
    <Donate></Donate>
    <Task></Task>
  </div>
</template>

<script>
import Bag from './Bag'
import Donate from './Donate'
import Task from './Task'

export default {
  name : "tools",
  components : {
    Bag,
    Donate,
    Task
  },
  data(){
    return {

    }
  },
  methods:{
    showComponent(name){
      this.$store.commit("controlComponentsShow",["show" + name, true])
    }
  }
}
</script>

<style scoped>
.tools{
  margin: 0 auto;
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
  font-size: 14px;
  font-weight: 700;
}
.content{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content > li{
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.content > li > .tools_item{
  width: 100%;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content > li > .tools_item > img{
  width: 50%;
  height: 50%;
}
.content > li > .tools_title{
  font-size: 12px;
  font-weight: 700;
  color: #6E6E6E;
  margin: 0.4rem 0;
}
</style>