<template>
  <div class="achievement">
    <ul class="sign">
      <li></li>
      <li></li>
      <li>TA的出行成就</li>
    </ul>
    <ul class="content">
      <li>
        <div class="achievement_item">
          <img src="./../../assets/friend/ach1.svg" alt="ach1">        
        </div>
        <p class="achievement_title">
          出行小白
        </p>
      </li>
      <li>
        <div class="achievement_item">
          <img src="./../../assets/friend/ach2.svg" alt="ach2">
        </div>
        <p class="achievement_title">
          出行新手
        </p>
      </li>
      <li>
        <div class="achievement_item">
          <img src="./../../assets/friend/ach3.svg" alt="ach3">
        </div>
        <p class="achievement_title">
          出行达人
        </p>
      </li>
      <li>
        <div class="achievement_item">
          <img src="./../../assets/friend/ach4.svg" alt="ach4">
        </div>
        <p class="achievement_title">
          绿色卫士
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "achievement",
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.achievement{
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
.content > li > .achievement_item{
  width: 100%;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content > li > .achievement_item > img{
  width: 50%;
  height: 50%;
}
.content > li > .achievement_title{
  font-size: 12px;
  font-weight: 700;
  color: #6E6E6E;
  margin: 0.4rem 0;
}
</style>