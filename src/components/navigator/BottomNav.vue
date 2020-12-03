<template>
  <div class="bottom_nav" :class="{hide}">
    <ul class="bottom_nav_ul">
      <li  :class="{active:activePath.substr(0,4) == 'home'}" @click="moveTo('home')">
        <svg xmlns="http://www.w3.org/2000/svg" width="32.274" height="29.586" viewBox="0 0 32.274 29.586">
          <path class="cls cls-1" d="M243.721,132.6l-15.066-12.555a1.08,1.08,0,0,0-1.363,0L212.225,132.6a1.08,1.08,0,0,0-.143,1.507,1.112,1.112,0,0,0,1.507.143l2.906-2.4v13.2a4.544,4.544,0,0,0,4.735,4.341h13.452a4.544,4.544,0,0,0,4.735-4.341v-13.2l2.906,2.4a1.006,1.006,0,0,0,.682.251,1.073,1.073,0,0,0,.825-.395A1.016,1.016,0,0,0,243.721,132.6Zm-18.259,14.564v-7.533a1.057,1.057,0,0,1,1.076-1.076h2.87a1.057,1.057,0,0,1,1.076,1.076v7.533Z" transform="translate(-211.84 -119.807)"/>
        </svg>
        <p>首页</p>
      </li>
      <li  :class="{active:activePath.substr(0,8) == 'activity'}" @click="moveTo('activity')">
        <svg xmlns="http://www.w3.org/2000/svg" width="28.117" height="31.278" viewBox="0 0 28.117 31.278">
          <g transform="translate(-98.977 -34.979)">
            <path class="cls cls-2" d="M99.477,110.594v26.378a.806.806,0,0,0,1.612,0V110.594A.806.806,0,0,0,99.477,110.594Z" transform="translate(0 -71.995)"/>
            <path class="cls cls-2" d="M113.6,54.52a12.048,12.048,0,0,1,6.11-2.188,13.312,13.312,0,0,1,6.324,1.621,22.251,22.251,0,0,0,3.078,1.413,10.145,10.145,0,0,0,3.211.411,13.173,13.173,0,0,0,4.918-1.163c.568-.243,1.822-.662,1.822-1.438V37.948a.812.812,0,0,0-1.213-.7,11.278,11.278,0,0,1-3.106,1.308,9.59,9.59,0,0,1-7.362-.962,16.037,16.037,0,0,0-7.432-2.12,13.154,13.154,0,0,0-7.163,2.413c-.865.567-.059,1.963.813,1.392a11.677,11.677,0,0,1,7.071-2.173c2.847.142,5.126,1.682,7.667,2.749a11.726,11.726,0,0,0,10.326-1.215l-1.213-.7V53.185l.4-.7a11.278,11.278,0,0,1-3.106,1.308,9.59,9.59,0,0,1-7.362-.962,16.039,16.039,0,0,0-7.431-2.119,13.155,13.155,0,0,0-7.163,2.412c-.865.567-.059,1.963.813,1.391Z" transform="translate(-12.534)"/>
          </g>
        </svg>
        <p>活动</p>
      </li>
      <li :class="{active:activePath.substr(0,5) == 'found'}" @click="moveTo('found')"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="30.73" height="30.73" viewBox="0 0 30.73 30.73">
          <g transform="translate(-941 -833)">
            <path class="cls a" d="M181.214,207.73h-5.772a3.481,3.481,0,0,1-3.343-3.6v-6.216a3.481,3.481,0,0,1,3.343-3.6h5.772a3.481,3.481,0,0,1,3.343,3.6v6.216A3.481,3.481,0,0,1,181.214,207.73Zm-5.772-11.016a1.16,1.16,0,0,0-1.114,1.2v6.216a1.16,1.16,0,0,0,1.114,1.2h5.772a1.16,1.16,0,0,0,1.114-1.2v-6.216a1.16,1.16,0,0,0-1.114-1.2h-5.772Zm5.772-6.3h-5.772a3.481,3.481,0,0,1-3.343-3.6V180.6a3.481,3.481,0,0,1,3.343-3.6h5.772a3.481,3.481,0,0,1,3.343,3.6v6.216A3.48,3.48,0,0,1,181.214,190.411ZM175.442,179.4a1.16,1.16,0,0,0-1.114,1.2v6.216a1.16,1.16,0,0,0,1.114,1.2h5.772a1.16,1.16,0,0,0,1.114-1.2V180.6a1.16,1.16,0,0,0-1.114-1.2Zm22.165,28.33H191.84a3.481,3.481,0,0,1-3.343-3.6v-6.216a3.481,3.481,0,0,1,3.343-3.6h5.772a3.481,3.481,0,0,1,3.343,3.6v6.216A3.487,3.487,0,0,1,197.607,207.73Zm-5.767-11.016a1.16,1.16,0,0,0-1.114,1.2v6.216a1.16,1.16,0,0,0,1.114,1.2h5.772a1.16,1.16,0,0,0,1.114-1.2v-6.216a1.16,1.16,0,0,0-1.114-1.2H191.84Zm9.926-8.768a1.015,1.015,0,0,1-.777-.363l-5.725-6.574a.423.423,0,0,0-.649,0l-5.784,6.579a1.013,1.013,0,0,1-1.507.046,1.211,1.211,0,0,1-.043-1.623l5.78-6.579a2.513,2.513,0,0,1,1.874-.869h0a2.509,2.509,0,0,1,1.878.878l5.725,6.574a1.216,1.216,0,0,1-.047,1.623A1.032,1.032,0,0,1,201.765,187.947Z" transform="translate(768.9 656)"/>
          </g>
        </svg>
        <p>发现</p>
      </li>
      <li  :class="{active:activePath.substr(0,4) == 'shop'}" @click="moveTo('shop')">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.735" height="31.735" viewBox="0 0 31.735 31.735">
          <g transform="translate(-76.3 -63.5)">
            <path class="cls cls-3" d="M309.492,251.516a7.421,7.421,0,0,1-7.412-7.412.9.9,0,1,1,1.808,0,5.6,5.6,0,0,0,11.209,0,.9.9,0,1,1,1.808,0A7.421,7.421,0,0,1,309.492,251.516Z" transform="translate(-217.325 -172.872)"/>
            <path class="cls cls-3" d="M99.4,94.735H84.936A8.145,8.145,0,0,1,76.8,86.6V72.136A8.146,8.146,0,0,1,84.936,64H99.4a8.145,8.145,0,0,1,8.136,8.136V86.6A8.144,8.144,0,0,1,99.4,94.735ZM84.936,65.808a6.335,6.335,0,0,0-6.328,6.328V86.6a6.335,6.335,0,0,0,6.328,6.328H99.4a6.336,6.336,0,0,0,6.328-6.328V72.136A6.335,6.335,0,0,0,99.4,65.808Z" transform="translate(0 0)"/>
          </g>
        </svg>
        <p>商城</p>
      </li>
      <li  :class="{active:activePath.substr(0,4) == 'mine'}" @click="moveTo('mine')">
        <svg xmlns="http://www.w3.org/2000/svg" width="23.523" height="32.774" viewBox="0 0 23.523 32.774">
          <g transform="translate(-680.313 -122.582)">
            <circle class="cls cls-4" cx="6.081" cy="6.081" r="6.081" transform="translate(685.994 124.082)"/>
            <rect class="cls cls-4" width="20.523" height="12.862" rx="6.431" transform="translate(681.813 140.994)"/>
          </g>
        </svg> 
        <p>我的</p>       
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:"bottom_nav",
  data(){
    return {
      activePath:'',
    }
  },
  methods:{
    moveTo(path){
      if(this.$route.path.substr(1) == path) return 
      this.activePath = path
      this.$router.push(`/${path}`)
    },
    //刷新时路由正确定位
    initActivePath(){
      this.activePath = this.$route.path.substr(1)
    }
  },
  watch:{
    $route(to,from){
      if(from.path === '/home'){
        console.log(1)
        this.$store.commit('controlComponentsShow',['showFriend',false])
        this.$store.commit('controlComponentsShow',['showReductionDetail',false])
      }
      this.activePath = to.path.substr(1)
    },
  },
  computed:{
    ...mapState({
      hide : ({componentsShow}) =>{
        return componentsShow.showReductionDetail || componentsShow.showFriend
      }
    })
  },
  beforeMount(){
    this.initActivePath()
  }
}
</script>

<style scoped>
.bottom_nav{
  position: fixed;
  bottom: 0;
  z-index: 5;
  left: 0%;
  height: 3rem;
  width: 100%;
  max-width: 500px;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -1px 5px 0px #D9D9D9;
  background-color: white;
  transition: 0.6s ease-in-out;
}
.bottom_nav.hide{
  transform: translateX(-100%);
  transition: 0.6s ease-in-out;
}
@media screen and (min-width: 460px){
  .bottom_nav{
    left: 50%;
    transform: translateX(-50%);
  }
  .bottom_nav.hide{
    transform: translateX(-150%);
    transition: 0.6s ease-in-out;
  }
}
.bottom_nav_ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom_nav_ul > li{
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  height: 2.8rem;
  align-items: center;
  color: #a5c94f;
  user-select: none;
}
.bottom_nav_ul > li .a{
  fill : #a5c94f;
}
.bottom_nav_ul > li  .cls-1 {
  fill : #a5c94f;
}
.bottom_nav_ul > li  .cls-2 {
  fill: #a5c94f;
  stroke: #a5c94f;
}
.bottom_nav_ul > li  .cls-3 {
  fill: #a5c94f;
  stroke: #a5c94f;
}
.bottom_nav_ul > li  .cls-4 {
  fill: none;
  stroke: #a5c94f;
  stroke-miterlimit: 10;
  stroke-width: 3px;
}
.bottom_nav_ul > li > svg{
  width: 1.3rem;
  height: 1.3rem;
}
.bottom_nav_ul > li > p{
  font-size: 12px;
  color: #333;
  font-weight: lighter;
}
.bottom_nav_ul > li.active .cls{
  fill:#329f4f;
  stroke:#329f4f;
}
</style>