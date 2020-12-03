<template>
    <div class="card">
        <div class="bg_img" :style="backgroundDiv">
        </div>
        <div class="title">{{activity_title}}</div>
        <a href="#" @click="handleClick">查看</a>
    </div>
</template>

<script>
  export default {
    name: "activity_card",
    props: {
      img_url: String,
      activity_title: String
    },
    data() {
      return {
        //活动地址
        activity_id: '1',
        backgroundDiv: {
          backgroundImage: 'url(' + this.img_url +')'
        }
      }
    }, methods: {
      handleClick() {
        console.log('sss')
      }
    },
  }
</script>

<style scoped lang="less">
    @basefont: 20px;
    @font-face {
        font-family: SimHei;
        src: url("../../assets/font/simhei.ttf");
    }

    .card {
        position: relative;
        margin: 0 auto;
        width: 359rem / @basefont;
        height: 175rem / @basefont;
        background-color: white;
        box-shadow: 0 5rem / @basefont 15rem / @basefont rgba(48, 48, 48, .2);
        border-radius: 12rem / @basefont;

        margin-bottom: 0.4rem;
        .bg_img {
            width: 359rem / @basefont;
            height: 135rem / @basefont;
            border-radius: 12rem / @basefont 12rem / @basefont 3rem / @basefont 3rem / @basefont;
            
            background-repeat: no-repeat;
            background-size: 100%;
        }

        .title {
            font-family: SimHei;
            font-size: 12rem / @basefont;
            position: relative;
            left: 26rem / @basefont;
            top: 11rem / @basefont;
        }

        a {
            position: relative;
            left: 277rem / @basefont;
            text-align: center;
            top: -9rem / @basefont;
            width: 66rem / @basefont;
            font-family: SimHei;
            font-size: 10rem / @basefont;
            border-radius: 7rem / @basefont;
            height: 19rem / @basefont;
            background-image: linear-gradient(to right, rgb(67, 233, 123), rgb(56, 249, 215));
            display: block;
            color: #329F4F;
            text-decoration: none;

            &:visited {
                color: #329F4F;
            }
        }
    }
</style>
