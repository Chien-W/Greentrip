<template>
    <div class="content">
        <card5 :card_desc="desc_list1"/>
        <card6 class="card_style" :card_desc="desc_list2"/>
    </div>
</template>

<script>
    import card5 from "./card5"
    import card6 from "./card6"


    export default {
        // 道具
        name: "道具",
        data() {
            return {
                desc_list1 : [
                    {id : 1,content:'加速器'},
                    {id : 2,content:'提速10%'},
                ],
                desc_list2 : [
                    {id : 1,content:'防护罩'},
                    {id : 2,content:'保护5h'},
                ]

            }
        },
        components:{
            card5,
            card6
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
