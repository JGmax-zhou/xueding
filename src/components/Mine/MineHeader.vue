<template>
<div class="mine-header">
    <header>
        <div class="wrap-portrait">
            <router-link class="head-portrait" to="/personinformation">
                <img :src="himg" alt="">
            </router-link>
            <div class="person-information">
                <span class="studentName">{{username}}</span>
                <span>学号：{{studentNumber}}</span>
            </div>
        </div>
        <router-link class="edit-data" tag="div" to="/modifieddata">编辑资料</router-link>
        <div class="wrap-classparticulars">
            <div v-for="(item,index) in classhouroption" :key="index">
                <p>{{item.number}}</p>
                <p>{{item. optionName}}</p>
            </div>

        </div>
    </header>
</div>
</template>

<script>
import headerimg from '@/assets/images/header.png'
export default {

    data() {
        return {
            himg: headerimg,
            username: "小贝同学",
            studentNumber: 330082581,

            classhouroption: [{
                number: 160,
                optionName: '累计上课(节)'
            }, {
                number: 480,
                optionName: '剩余课时(节)'
            }, {
                number: 56,
                optionName: '积分'
            }]
        }
    }
}
</script>

<style lang="scss">
.mine-header header {
    width: 375px;
    height: 191px;
    background-color: #4966F5;
    position: relative;
    border-radius: 0 0 25px 25px;

    .wrap-portrait {
        position: absolute;
        left: 36.5px;
        top: 34.5px;
        width: 182px;
        height: 60px;

        .head-portrait {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid black;
            float: left;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .person-information {
            height: 57px;
            width: 119px;
            float: left;

            span {
                display: block;
                height: 25px;
                width: 100%;
                font: 600 12px "苹方 常规";
                color: #F5F5F5;
                padding: 5px 0 0 5px;
            }

            .studentName {
                font: 600 16px "苹方-简 常规体";
            }
        }
    }

    .edit-data {
        width: 90px;
        height: 35px;
        background: #8AA6FD;
        border-radius: 21px;
        line-height: 35px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        position: absolute;
        left: 264px;
        top: 29px;
    }

    .wrap-classparticulars {
        width: 320px;
        height: 60px;
        position: absolute;
        top: 115.5px;
        left: 27.5px;

        div {
            width: 106.6px;
            float: left;
            height: 100%;

            p:nth-child(1) {
                width: 100%;
                height: 30px;
                text-align: center;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.85);
                font-size: 24px;
            }

            p:nth-child(2) {
                width: 100%;
                height: 25px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #E5E5E5;
                text-align: center;
                padding-top: 5px;
            }
        }
    }
}
</style>
