<template>
    <div class="content">
        <card :card_desc="desc_list1"/>
        <card2 class="card_style" :card_desc="desc_list2"/>

    </div>
</template>

<script>
import card from "./card1"
import card2 from "./card2"

export default {
  // 交通卡
  name: "jiaotongka",
  data() {
    return {
      desc_list1 : [
        {id : 1,content:'地铁卡'},
        {id : 2,content:'八折起'},
      ],
      desc_list2 :[
        {id : 1,content: '公交卡'},
        {id : 2,content: '九折起'},
      ]
    }
  },
  components:{
    card,
    card2
  }
}
</script>

<style scoped lang="less">
    @basefont : 20px;
    .content{
        margin: 0 auto;
        width: 352rem / @basefont;
        height: 540rem / @basefont;
        background-color: white;
        box-shadow: 0px 2rem / @basefont 10rem / @basefont rgba(0,0,0,.13);
        border-radius: 12rem / @basefont;
        .card_style{
            margin-top: 20rem / @basefont;
        }
    }
</style>
