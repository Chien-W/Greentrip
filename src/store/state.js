export default {
  //第三方库需要的数据
  lib: {
    //countUp对象
    CUInstance: null,
  },
  //控制组件展示与否
  componentsShow: {
    showFriend: false,
    showBeg: false,
    showDonate: false,
    showTask: false,
    showReductionDetail: false,
  },
  //home组件所需数据
  Comp_Home: {
    //捐赠界面数据
    donateList: [
      {
        imgSrc: require("./../assets/home/bus1.svg"),
        title: "公交捐赠计划",
        current: 21
      },
      {
        imgSrc: require("./../assets/home/bus2.svg"),
        title: "地铁环境改善计划",
        current: 67
      },
      {
        imgSrc: require("./../assets/home/bus3.svg"),
        title: "公交环境改善计划",
        current: 82
      },
    ],
    //任务界面数据
    taskList: [
      {
        imgSrc: [{
          src: require("./../assets/home/celerate.svg"),
          title: "加速器",
        }],
        title: "连续收集积分7天",
        current: 2,
        max: 7,
        btn: null
      },
      {
        imgSrc: [{
          src: require("./../assets/home/celerate.svg"),
          title: "加速器"
        }, {
          src: require("./../assets/home/gift.svg"),
          title: "抽奖"
        }],
        title: "连续签到15日",
        current: 2,
        max: 15,
        btn: "去签到"
      },
      {
        imgSrc: [{
          src: require("./../assets/home/protection.svg"),
          title: "保护罩"
        }, {
          src: require("./../assets/home/celerate.svg"),
          title: "加速器"
        }],
        title: "帮十个好友收集碳积分",
        current: 4,
        max: 10,
        btn: "去收集"
      },
    ],
    friend: {
      //好友界面的数据
    },
    //首页和榜单所需数据
    user: {
      picUrl: require("./../assets/user/cp.png"),
      totalPoints: 25000,
      name: "仇攀",
      level: 5,
      friends: [
        {
          id: "仇攀",
          picUrl: require("./../assets/user/cp.png"),
          recentGain: 5,
          recentPoints: 25000,
          medal: "gold",
        },
        {
          id: "李紫妍",
          picUrl: require("./../assets/user/lzy.png"),
          recentGain: 3,
          recentPoints: 18500,
          medal: "silver",
        },
        {
          id: "吴佳伟",
          picUrl: require("./../assets/user/wjw.png"),
          recentGain: 2,
          recentPoints: 8500,
          medal: "bronze",
        },
        {
          id: "肖小亮",
          picUrl: require("./../assets/user/xxl.png"),
          recentGain: 1,
          recentPoints: 6600,
        },
        {
          id: "郑淼",
          picUrl: require("./../assets/user/zm.png"),
          recentGain: 0,
          recentPoints: 3000,
        }
      ]
    },
  }, 
}