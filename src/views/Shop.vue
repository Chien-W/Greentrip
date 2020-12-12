<template>
  <div class="shop">
    <div class="header">
      <!--       卡通人物-->
      <div class="cartoon"></div>
      <!--      积分商城-->
      <span>积分商城</span>
      <!--      通知   跳转到商城通知-->
      <a href="#" class="card_bag" @click.prevent="handlemethod" @click="has_notification = false">
        <!--        通知红点-->
        <div class="bell" v-if="has_notification"></div>
      </a>
      <!--      消费历史    跳转到消费历史-->
      <a href="#" class="history">消费历史
        <div class="history_icon"></div>
      </a>
      <!--      硬币数量-->
      <div class="coin">{{coinNumber}}</div>
    </div>
    <!--      input不支持before伪元素-->
    <div class="search">
      <input type="text" placeholder="搜索商品">
    </div>

    <div class="tab">
      <ul>
        <li @click="changeTab(1)">消费卷
          <div class="bottom_button_left" :class="{now:1==current_pos}"></div>
        </li>
        <li @click="changeTab(2)">道具
          <div class="bottom_button_middle" :class="{now:2==current_pos}"></div>
        </li>
        <li @click="changeTab(3)">交通卡
          <div class="bottom_button_right" :class="{now:3==current_pos}"></div>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
      // 开启消息红色圆点
      has_notification: true,
      coinNumber: '56,293',
      //当前tab所在位置
      current_pos: 3,
    }
  },
  methods: {
    handlemethod() {
      console.log("Hello")
    },
    //更换tab 页面
    changeTab(index) {
      this.current_pos = index
      if (index == 1) {
        this.$router.push({ name: 'tab_property' })
      } else if (index == 2) {
        this.$router.push({ name: 'tab_tools' })
      } else {
        this.$router.push({ name: 'tab_tianfutong' })
      }
    }
  },
}
</script>

<style scoped lang="less">
  @basefont: 20px;

  a {
    text-decoration: none;
  }

  .header {
    position: relative;
    background: url("../assets/shop/header.png") no-repeat;
    height: 161.54rem / @basefont;
    background-size: 100% 100%;

    .cartoon {
      left: 31rem / @basefont;
      top: 31rem / @basefont;
      position: absolute;
      width: 96rem / @basefont;
      height: 80rem / @basefont;
      background: url("../assets/shop/cartoon.png") no-repeat;
      background-size: 100% 100%;
    }

    span {
      font-size: 30rem / @basefont;

      color: #fff;
      position: absolute;
      left: 135rem / @basefont;
      top: 31rem / @basefont;
    }

    .card_bag {
      position: absolute;
      left: 334rem / @basefont;
      top: 17rem / @basefont;
      width: 25rem / @basefont;
      height: 25rem / @basefont;
      background: url("../assets/shop/card_bag.png") no-repeat;
      background-size: 100%;

      .bell {
        position: absolute;
        right: -1rem / @basefont;
        top: -3rem / @basefont;
        width: 12rem / @basefont;
        height: 12rem / @basefont;
        border-radius: 6rem / @basefont;
        background-color: red;
        -webkit-font-smoothing: antialiased;
      }
    }

    .history {
      font-size: 12rem / @basefont;
      position: absolute;
      top: 101rem / @basefont;
      right: 30rem / @basefont;

      .history_icon {
        position: absolute;
        top: 0;
        right: -22rem / @basefont;
        background: url("../assets/shop/history.png") no-repeat;
        width: 16.8rem / @basefont;
        height: 16.8rem / @basefont;
        background-size: 100% 100%;
      }
    }

    .coin {
      position: absolute;
      top: 124.3rem / @basefont;
      right: 32rem / @basefont;
      font-size: 25rem / @basefont;
      color: #37E39F;
      font-family: Rubik;

      &:before {
        position: absolute;
        content: '';
        left: -40rem / @basefont;
        top: 5rem / @basefont;
        width: 26.2rem / @basefont;
        height: 26.2rem / @basefont;
        background: url("../assets/shop/coin.png");
        background-size: 100% 100%;
      }
    }

    margin-bottom: 12rem / @basefont;

  }


  .shop {
    .content {
      ul {
        li {
          display: block;
          margin: 0 auto;
        }
      }
    }

    .search {
      width: 350rem / @basefont;
      height: 40rem / @basefont;
      background-color: #FBFBFA;
      box-shadow: 0px 2rem / @basefont 10rem / @basefont rgba(0, 0, 0, .13);
      margin: 0 auto;
      display: block;
      border-radius: 12rem / @basefont;
      position: relative;

      input {
        font-family: SimHei;
        top: 7rem / @basefont;
        position: absolute;
        left: 42rem / @basefont;
        font-size: 18rem / @basefont;
        border-radius: 12rem / @basefont;
        background-color: #FBFBFA;
        outline-style: none;
        border: 0;

        &::placeholder {
          color: #BABAB9;
          font-size: 18rem / @basefont;
        }
      }

      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 9rem / @basefont;
        left: 8rem / @basefont;
        width: 24rem / @basefont;
        height: 24rem / @basefont;
        background: url("../assets/shop/search.png") no-repeat;
        background-size: 100%;
      }
    }

    .tab {
      margin: 14rem / @basefont 16rem / @basefont;

      ul {
        display: flex;
        justify-content: space-between;

        li {
          font-size: 18rem / @basefont;
          flex: 1;
          color: #707070;
          font-family: SimHei;

          &:nth-child(2) {
            text-align: center;
          }

          &:nth-child(3) {
            text-align: right;
          }

          .now {
            background-color: #329F4F !important;
          }
        }

        [class^=bottom_button_] {
          width: 54rem / @basefont;
          height: 4rem / @basefont;
          background-color: #A5C94F;
          border-radius: 18rem / @basefont;
        }

        .bottom_button_middle {
          margin: 0 auto;
        }

        .bottom_button_right {
          margin-left: 62rem / @basefont;
        }
      }
    }

  }

  .content {
    margin: 0 auto;
    width: 352rem / @basefont;
    height: 540rem / @basefont;
    background-color: white;
    box-shadow: 0px 2rem / @basefont 10rem / @basefont rgba(0, 0, 0, .13);
    border-radius: 12rem / @basefont;
  }
</style>