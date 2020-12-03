<template>
  <div class="reduction_detail" v-show="$route.path=='/home'" :class="{show:$store.state.componentsShow.showReductionDetail}">
    <div class="back" @click='$store.commit("controlComponentsShow",["showReductionDetail",false])'></div>
    <div class="total">
      <div class="line_green"></div>
      <div class="title">个人累计减排量</div>
      <div class="numContainer">
        <p class="number">{{number}}</p>
        <p class="unit">{{unit}}</p>
      </div>
    </div>
    <div class="equal">
      <div class="line_green"></div>
      <div class="title">相当于</div>
    </div>
    <ul class="catagory">
      <li class="c">
        <img src="../../../assets/reductiondetail/car.svg" alt="car">
        <p class="text">汽车行驶</p>
      </li>
      <li class="vert_line"></li>
      <li class="c">
        <img src="../../../assets/reductiondetail/lightning.svg" alt="lightning">
        <p class="text">省电</p>
      </li>
      <li class="vert_line"></li>
      <li class="c">
        <img src="../../../assets/reductiondetail/combustion.svg" alt="combustion">
        <p class="text">燃煤</p>
      </li>
    </ul>
    <ul class="conversion">
      <li class="numWrapper">
        <p class="number">{{parseFloat((number/2).toFixed(2))}}</p>
        <p class="unit">小时</p>
      </li>
      <li class="numWrapper">
        <p class="number">{{parseFloat((number/30).toFixed(2))}}</p>
        <p class="unit">度</p>
      </li>
      <li class="numWrapper">
        <p class="number">{{parseFloat((number/10).toFixed(2))}}</p>
        <p class="unit">千克</p>
      </li>
    </ul>
    <div class="chartsWrapper">
      <div class="head">
        <div class="green_ball"></div>
        <p>最近减排量(g)</p>
      </div>
      <div class="span">
        <li class="current">天</li>
        <li>周</li>
        <li>月</li>
      </div>
      <div class="canvasWrapper">
        <canvas id="reductionChart"></canvas>
      </div>
    </div>
    <div class="Data">
      <div class="card">
        <div class="card_head">
          <img src="../../../assets/reductiondetail/subway.svg" alt="subway">
          <p>地铁</p>
        </div>
        <div class="card_number">8.14km</div>
        <div class="today_number">(今日里程3.12km)</div>
      </div>
      <div class="card">
        <div class="card_head">
          <img src="../../../assets/reductiondetail/bus.svg" alt="bus">
          <p>公交</p>
        </div>
        <div class="card_number">6.52km</div>
        <div class="today_number">(今日里程2.18km)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reduction_detail",
  data() {
    return {
      unit: "g",
      ctx: null,
      cIns: null,
      data: {
        labels: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06"],
        datasets: [
          {
            backgroundColor: "#EBF9F7",
            borderColor: "#D7F3EF",
            borderWidth: "6",
            pointBackgroundColor: "#51D2BE",
            pointBorderColor: "#51D2BE",
            pointHitRadius: "1",
            pointRadius: "2",
            lineTension: 0,
            data: [65, 50, 80, 55, 70, 55, 40]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    }
  },
  methods: {
    weight(num) {
      if (num < 0) {
        return
      } else if (num > 0 && num < 999) {
        this.unit = "g"
        return num
      } else {
        this.unit = "kg"
        return parseFloat(parseInt(num).toString().replace(/(\d)(?=(\d{3})+$)/g, "$1."))
      }
    },
    initChart() {
      this.ctx = document.getElementById("reductionChart").getContext("2d")
      this.cIns = new Chart(this.ctx, {
        type: 'line',
        data: this.data,
        options: this.options
      })
    }
  },
  computed: {
    number() {
      return this.weight(this.$store.state.Comp_Home.user.totalPoints)
    }
  },
  mounted() {
    this.initChart()
  }
}
</script>

<style scoped>
.reduction_detail {
  position: absolute;
  left: 100%;
  width: 100%;
  top: 0;
  transition: 0.6s all ease-in-out;
  background-image: url(../../../assets/reductiondetail/background.png);
  background-repeat: no-repeat;
  background-position: -2px -12px;
  background-size: 101%;
  height: 100%;
}

.reduction_detail.show {
  transform: translateX(-100%);
  transition: 0.6s ease-in-out;
}

.back {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: 0.1rem;
  top: 0.5rem;
  background-image: url(./../../../assets/common/back.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50%;
}

.total {
  position: relative;
  top: 2.3rem;
  width: 86%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.line_green {
  height: 0.25rem;
  width: 1.7rem;
  border-radius: 0.125rem;
  background-color: #3ED400;
  margin: 0.2rem 0;
}

.title {
  color: #fff;
  font-size: 0.9rem;
}

.numContainer {
  align-self: center;
  display: flex;
  color: #fff;
  margin-right: -1rem;
}

.numContainer>.number {
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: lighter;
  line-height: 3.5rem;
  letter-spacing: 1rem;
}

.numContainer>.unit {
  align-self: flex-end;
  font-size: 1.5rem;
}

.equal {
  position: relative;
  top: 2.3rem;
  width: 86%;
  margin: 0 auto;
}

.catagory {
  position: relative;
  width: 100%;
  top: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.c {
  min-width: 5rem;
  display: flex;
  color: #fff;
  justify-content: center;
}

.c>img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;
}

.catagory>.c:nth-child(3)>img {
  margin-right: 0.2rem;
}

.text {
  font-size: 0.75rem;
}

.vert_line {
  width: 0.25rem;
  height: 1.5rem;
  border-radius: 0.125rem;
  background-color: #fff;
}

.conversion {
  position: relative;
  top: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.conversion>.numWrapper {
  display: flex;
  color: #fff;
  justify-content: center;
}

.conversion>.numWrapper>.number {
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 1.6rem;
  line-height: 1.6rem;
}

.conversion>.numWrapper>.unit {
  align-self: flex-end;
  font-size: 12px;
}

.chartsWrapper {
  top: 6rem;
  position: relative;
  width: 96%;
  margin: 0 auto;
  height: 11.5rem;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 10px 0 #ddd;
}

.green_ball {
  background-color: #2DBB54;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  margin-left: 0.4rem;
  margin-right: 0.3rem;
}

.head {
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
}

.span {
  display: flex;
  align-items: center;
  height: 1rem;
}

.span>li {
  width: 1.5rem;
  height: 0.7rem;
  border: 1px solid #C3E7DF;
  border-radius: 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 0 0.1rem;
}

.span>li:first-child {
  margin-left: auto;
}

.span>li.current {
  color: #fff;
  background-color: #0FC9A6;
}

.canvasWrapper {
  width: 95%;
  margin: 0 auto;
  margin-top: 0.3rem;
  height: 9rem;
}

.canvasWrapper>canvas {
  width: 100%;
  height: 100%;
}

.Data {
  position: relative;
  top: 7rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
}

.card {
  height: 5.5rem;
  width: 42%;
  box-shadow: 0 1px 10px 0 #ddd;
  background-color: #fff;
  border-radius: 0.3rem;
}

.card_head {
  height: 1.5rem;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
}

.card_head img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.4rem;
}

.card_number {
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  color: #505050;
}

.today_number {
  font-size: 12px;
  text-align: right;
  color: #90F2B8;
  margin-right: 0.1rem;
  margin-top: 0.4rem;
}
</style>