<template>
    <!--    card组件-->
    <div class="card_component">
        <div class="card3">
            <!--        card标题-->
            <span class="title">{{card_title}}</span>
            <span class="coin">{{card_coin}}</span>
            <!--        分割线-->
            <div class="divider"></div>
            <img src="../../assets/shop/card_2.png" alt="">
            <!--        简要描述-->
            <div class="desc">
                <ul>
                    <li v-for="item in card_desc" :key="item.id" :class="[{color_1:item.id==1},{color_2:item.id==2},{color_3:item.id==3}]">
                        {{item.content}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="button">
            <a href="#" @click="transaction">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card3",
        data() {
            return {
                colors:['',
                    '',
                    '']
            }
        },
        methods: {
            transaction() {
                console.log("transaction successful")
            }
        },
        props:{
            // 卡片图片url
            card_img_url:{
                type: String,
                default: '',
            },
            //卡片背景颜色
            card_bgcolor:{
                type:String,
                default:'#00BB98'
            },
            //卡片标题
            card_title:{
                type:String,
                default:'公交卡(10元)',
            },
            //卡片简要描述
            card_desc:null,
            //卡片兑换的硬币数
            card_coin:{
                type:String,
                default : '10,000'
            }
        }
    }
</script>

<style scoped lang="less">
    @basefont : 20px;
    *{
        margin: 0;
        padding: 0;
    }
    .card2{
        margin:  0rem / @basefont auto;
        background-color: #00BB98;
        mask-image: url("../../assets/shop/card_bg.svg");
        -webkit-mask-image: url("../../assets/shop/card_bg.svg");
        width: 350rem / @basefont;
        height: 145rem / @basefont;
        position: relative;
        mask-size: 100%;
        .title{
            font-size: 18rem / @basefont;
            font-family: SimHei;
            color: white;
            float: left;
            position: relative;
            left: 26rem / @basefont;
            top: 12rem / @basefont;
        }
        .coin{
            font-size: 18rem / @basefont;
            font-family: Rubik;
            color: white;
            float: right;
            position: relative;
            right: 19rem / @basefont;
            top: 12rem / @basefont;
            &:before{
                content: '';
                position: absolute;
                top: 5rem / @basefont;
                left: -23.6rem / @basefont;
                background: url("../../assets/shop/coin_white.png") no-repeat;
                display: inline-block;
                width: 16rem / @basefont;
                height: 16rem / @basefont;
                background-size: 100%;
            }
        }
        .divider{
            position: absolute;
            background: url("../../assets/shop/line.png") no-repeat;
            background-size: 100%;
            width: 300rem / @basefont;
            height: 2rem / @basefont;
            top: 38rem / @basefont;
            left: 23rem / @basefont;

        }
        img{
            width: 115rem / @basefont;
            height: 75rem / @basefont;
            position: relative;
            top: 45rem / @basefont;
            left: -80rem / @basefont;
        }
        .desc{
            position: absolute;
            top: 44rem / @basefont;
            left: 143rem / @basefont;
            width: 150rem / @basefont;
            height: 20rem / @basefont;
            li{
                width: 58rem / @basefont;
                height: 20rem / @basefont;
                border-radius: 22rem / @basefont;
                line-height: 20rem / @basefont;
                display: inline-block;
                font-size: 12rem / @basefont;
                list-style: none;
                color: white;
                font-family: SimHei;
                margin-right: 6rem / @basefont;
                text-align: center;
            }
        }

    }
    .button{
        position: absolute;
        z-index: 0;
        left: 265.5rem / @basefont;
        top: 107rem / @basefont;
        a{
            display: inline-block;
            width: 51rem / @basefont;
            height: 51rem / @basefont;
            background-color: #3ED400;
            border-radius: 25.5rem / @basefont;
            box-shadow: 0px 0px 11px #3ED400;
            position: relative;
            &:before{
                content: '';
                display: inline-block;
                width: 51rem / @basefont;
                height: 51rem / @basefont;
                position: relative;
                top: 6rem / @basefont;
                left: 8rem / @basefont;

                background: url("../../assets/shop/coin_round.png") no-repeat;
                background-size: 70%;
            }
        }
    }
    .color_1{
        background-image: linear-gradient(120deg, rgba(212,252,121,.4) 0%, rgba(150,230,161,.4) 100%)
    }
    .color_2{
        background-image: linear-gradient(120deg, rgba(79,172,254,.4) 0%, rgba(0,242,254,.4) 100%)
    }
    .color_3{
        background-image: linear-gradient(120deg, rgba(255,86,115,.4) 0%, rgba(255,140,72,.4) 100%);
    }
    .card_component:after{
        display:block;clear:both;content:"";visibility:hidden;height:0
    }
    .card_component{
        position: relative;
    }
</style>
