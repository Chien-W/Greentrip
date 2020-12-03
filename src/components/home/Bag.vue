<template>
  <div class="beg" :class="{show:$store.state.componentsShow.showBeg}">
    <div class="wrapper">
      <div class="quit" @click="quit">
        <img src="./../../assets/common/quit.svg" alt="quit">
      </div>
      <div class="content">
        <p class="title">背包</p>
        <div class="cards">
          <div class="items item1">
            <div class="img">
              <img src="./../../assets/home/celerate.svg" alt="celerate">    
              <p>加速器×3</p>
            </div>
            <p class="use">使用</p>
          </div>
          <div class="items item2">
            <div class="img">
              <img src="./../../assets/home/protection.svg" alt="protection">
              <p>保护罩×1</p>
            </div>
            <p class="use">使用</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "beg",
  data(){
    return {

    }
  },
  methods:{
    quit(){
      this.$store.commit("controlComponentsShow",["showBeg",false])
    }
  }
}
</script>

<style scoped>
.beg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  visibility: hidden;
}
.beg.show{
  visibility: visible;
}
.beg::after{
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
  height: 230px;
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
  height: 215px;
  border-radius: 20px;
  background-color: #fff;
}
.content > .title{
  text-align: center;
  color: #707070;
  font-size: 20px;
}
.cards{
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cards .items{
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cards .items .img{
  width: 120px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 0 4px 2px #D9D9D9;
}
.cards .items p.use{
  width: 110px;
  height: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0px #D9D9D9;
  text-align: center;
  line-height: 25px;
  color: #329F4F;
  font-weight: bold;
}
.img{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img > img{
  width: 50%;
  height: 50%;
}
.img > p{
  margin-top: 5px;
  color: #95E14B;
  font-weight: bold;
}

</style>