<template>
<div class="setup">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" :placeholder="placeholdervalue" />
    <div class="navbox1">
        <router-link v-for="(item,index) of navbox1name" :key="index" to="" tag="p">
            <span>{{item}}</span>
            <span>&gt;</span>
        </router-link>
    </div>
    <div class="navbox2">
        <router-link v-for="(item,index) of navbox2name" :key="index" to="" tag="p">
            <span>{{item}}</span>
            <span>&gt;</span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            placeholdervalue: true,
            navbox1name: ['修改手机号', '修改密码', '收货地址', '消息设置'],
            navbox2name: ['清理缓存', '网络诊断', '异常上报', '注册账号']
        }
    },
    methods: {
        onClickLeft() {
            window.history.back();
        }
    }
}
</script>

<style lang="scss">
.van-nav-bar {
    background: #F8F8F8;

    .van-icon::before {
        color: black;
    }
}

.navbox1 {
    width: 355px;
    height: 213px;
    background: #FFFFFF;
    box-shadow: 5px 3px 10px -1px rgba(237, 237, 237, 0.94);
    border-radius: 5px;
    margin-left: 10px;

    p {
        width: 100%;
        height: 53px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        font-size: 16px;
        line-height: 53px;

        span:nth-child(1) {
            display: inline-block;
            margin-left: 10px;
            width: 100px;
        }

        span:nth-child(2) {
            display: inline-block;
            margin-left: 220px;
        }
    }
}

.navbox2 {
    width: 355px;
    height: 213px;
    background: #FFFFFF;
    box-shadow: 5px 3px 10px -1px rgba(237, 237, 237, 0.94);
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 10px;

    p {
        width: 100%;
        height: 53px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        font-size: 16px;
        line-height: 53px;

        span:nth-child(1) {
            display: inline-block;
            margin-left: 10px;
            width: 100px;
        }

        span:nth-child(2) {
            display: inline-block;
            margin-left: 220px;
        }
    }
}
</style>
