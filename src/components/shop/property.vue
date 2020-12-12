<template>
    <div class="content">
        <card3 :card_desc="desc_list1"/>
        <card4 class="card_style" :card_desc="desc_list2"/>
    </div>
</template>

<script>
    import card3 from "./card3"
    import card4 from "./card4"

    export default {
        // 消费券
        name: "xiaofeiquan",
        data() {
            return {
                desc_list1 : [
                    {id : 1,content:'早餐券'},
                    {id : 2,content:'八折起'},
                ],
                desc_list2 : [
                    {id : 1,content:'午餐券'},
                    {id : 2,content:'八折起'},
                ],
            }
        },
        components:{
            card3,
            card4
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
