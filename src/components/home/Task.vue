<template>
  <div class="task" :class="{show:$store.state.componentsShow.showTask}">
    <div class="wrapper">
      <div class="quit" @click="quit">
        <img src="./../../assets/common/quit.svg" alt="quit">
      </div>
      <div class="content">
        <p class="title">任务</p>
        <ul class="cards">
          <li v-for="(list,i) in $store.state.Comp_Home.taskList" :key="i">
            <div class="outerWrapper">
              <div v-for="(item,i) in list.imgSrc" :key="i" class="imgWrapper">
                <img :src="item.src" alt="props">
                <p>{{item.title}}×1</p>
              </div>
            </div>
            <div class="detail">
              <p class="title">{{list.title}}</p>
              <progress :max="list.max" :value="list.current"></progress>
              <p class="percent">{{list.current}}/{{list.max}}</p>
              <div class="task_btn" v-if="list.btn">
                {{list.btn}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Task",
  data(){
    return {

    }
  },
  methods:{
    quit(){
      this.$store.commit("controlComponentsShow",["showTask",false])
    }
  }
}
</script>

<style scoped>
.task{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  visibility: hidden;
}
.task.show{
  visibility: visible;
}
.task::after{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(80, 80, 80, 0.6);
}
.wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 7;
  width: 350px;
  height: 430px;
}
.quit{
  position: absolute;
  z-index: 1;
  left: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quit > img{
  width: 60%;
  height: 60%;
}
.content{
  position: absolute;
  right: 18px;
  bottom: 0;
  width: 314px;
  height: 415px;
  border-radius: 20px;
  background-color: #fff;
}
.content > .title{
  text-align: center;
  color: #707070;
  font-size: 20px;
}
.cards{
  height: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cards > li{
  width: 290px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0px #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards > li > img{
  width: 60px;
  height: 60px;
}
.cards .detail{
  width: 160px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.detail .title{
  color: #4CAB65;
  font-weight: bold;
  align-self: flex-start;
}
progress{
  width: 100%;
  height: 12px;
  border: 1px solid yellowgreen;
  border-radius: 6px;
}
::-webkit-progress-value{
  border-radius: 5px;
  background-color: #3ED400;
}
::-webkit-progress-bar{
  background-color: #fff;
  border-radius: 6px;
}
.detail .task_btn{
  color: #4CAB65;
  width: 100px;
  height: 23px;
  border-radius: 15px;
  box-shadow: 0 2px 7px 0px #D9D9D9;
  text-align: center;
  line-height: 23px; 
  margin-top: auto;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
}
.percent{
  align-self: flex-end;
  color: #3ED400;
  font-size: 12px;
}
.imgWrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #3ED400;
  width: 52px;
}
.imgWrapper > img{
  width: 60%;
  height: 60%;
}
.imgWrapper > p{
  padding-top: 5px;
  font-size: 12px;
}
.outerWrapper{
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>