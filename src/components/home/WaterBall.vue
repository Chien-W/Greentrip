<template>

  <div class="waterball">
    <div class="waterball_front"></div>
    <div class="waterball_back"></div>
    <div v-for="(point,i) in points" :key="i" class="pointsball" :class="point.class" ref="ball" @click="collect(i)">
      {{point.value}}
    </div>
  </div>
</template>

<script>
export default {
  name : "waterball", 
  data(){
    return {
      points:[],
      time:[],
    }
  },
  methods:{
    initPoints(){
      let number = Math.floor(Math.random()*6)
      let cache = []
      for(let i = 0; i < number; i++){
        let obj = {}
        let ran = Math.floor(Math.random()*5)+1
        if(cache.includes(ran)){
          i--
          return
        }else{
          cache.push(ran)
        }
        obj.class = {}
        obj.value = Math.floor(Math.random()*100) + "g"
        obj.class.full = +obj.value.substring(0,obj.value.length - 1) > 50 ? true : false
        obj.class[`p${ran}`] = true
        this.$set(this.points,i,obj)
      }
    },
    collect(key){
      if(!this.points[key].class.full) return
      if(this.time[key]){
        return
      }else{
        if(!this.points[key]) return
        this.$set(this.points[key].class,"useTransition",true)
        this.$set(this.points[key].class,"collected",true)
        //countUp操作
        let value = parseInt(this.points[key].value)
        this.$store.state.Comp_Home.user.totalPoints += value
        this.time[key] = setTimeout(()=>{
          this.points.splice(key,1,{
            class : {
              empty : true
            },
            value : null
          })
          this.time[key] = null
        },1000)
      }
    }
  },
  beforeMount(){
    this.initPoints()
  }
}
</script>

<style scoped>
.waterball{
  position: relative;
  left: 50%;
  top:81px;
  transform: translateX(-50%);/*水平居中*/
  width: 220px;
  height: 220px;
  border: 8px solid #DDFEE4;
  border-radius: 50%;
  box-shadow:0 0 0 8px #4FC966;
  overflow: hidden;
  margin-bottom: 100px;
}
.waterball > .waterball_front,
.waterball > .waterball_back{
  position: absolute;
  left: 0;
  top: 60px;
  background-repeat: no-repeat;
  width: 200%;
  height: 100%;
  background-size: 100% 100%;
}
.waterball > .waterball_front{
  z-index: 1;
  background-image: url(./../../assets/home/water_ball_front.svg);
  animation:front 4s linear infinite;
}
.waterball > .waterball_back{
  background-image: url(./../../assets/home/water_ball_back.svg);
  animation:back 4s linear infinite;
}
.waterball > .pointsball{
  position: absolute;
  z-index: 5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px #C1FFC1;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
  color: #54AB2B;
  font-size: 14px;
}
.waterball > .pointsball.useTransition{
  transition: 1s all;
}
.waterball > .pointsball.full{
  background: radial-gradient(#9AFF9A 90%,#97FFFF);
}
.waterball > .pointsball.full::after{
  content: "可收取";
  position: absolute;
  line-height: 20px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 12px;
  color: #5CBD6A;
  text-align: center;
  width: 50px;
}
.waterball > .pointsball.empty{
  display: none;
}
.waterball > .pointsball.p1{
  left: 30px;
  top: 30px;
}
.waterball > .pointsball.p2{
  left: 120px;
  top: 30px;
}
.waterball > .pointsball.p3{
  left: 20px;
  top: 100px;
}
.waterball > .pointsball.p4{
  left: 80px;
  top: 120px;
}
.waterball > .pointsball.p5{
  left: 150px;
  top: 100px;
}
.waterball > .pointsball.full.p1{
  animation: drop1 1s ease-in-out infinite alternate;
}
.waterball > .pointsball.full.p2{
  animation: drop2 1s 0.5s linear infinite alternate;
}
.waterball > .pointsball.full.p3{
  animation: drop3 1s 0.3s ease-in-out infinite alternate;
}
.waterball > .pointsball.full.p4{
  animation: drop4 1s 0.1s ease-out infinite alternate;
}
.waterball > .pointsball.full.p5{
  animation: drop5 1s -0.1s ease-in infinite alternate;
}
.waterball > .pointsball.full.collected{
  opacity: 0;
  animation: null;
}
@keyframes drop1{
  from{
    top: 30px;
  }
  to{
    top: 38px;
  }
}
@keyframes drop2{
  from{
    top: 30px;
  }
  to{
    top: 38px;
  }
}
@keyframes drop3{
  from{
    top: 100px;
  }
  to{
    top: 108px;
  }
}
@keyframes drop4{
  from{
    top: 120px;
  }
  to{
    top: 128px;
  }
}
@keyframes drop5{
  from{
    top: 100px;
  }
  to{
    top: 108px;
  }
}
@keyframes front{
  from{
    left: 0%;
  }
  to{
    left: -100%;
  }
}
@keyframes back{
  from{
    left: -100%;
  }
  to{
    left: 0%;
  }
}
</style>