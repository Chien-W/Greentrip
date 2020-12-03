<template>
    <div>消费卷</div>
</template>

<script>
import card3 from "./card3"
import card from "./card1";
import card2 from "./card2";
  export default {
    // 消费卷
    name: "property",
      data() {
          return {
              desc_list1 : [
                  {id : 1,content:'地铁卡'},
                  {id : 2,content:'八折起'},
              ] 
          }
      },
      components:{
          card3
      }
  }
</script>

<style scoped>

</style>
