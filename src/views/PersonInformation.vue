<template>
<div class="personinformation">
    <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" :placeholder="placeholdervalue" />
    <div class="informationbox">
        <router-link v-for="(item,index) of option" :key="index" to="" tag="p">
            <span>{{item.name}}</span>
            <span>{{item.content}}</span>
        </router-link>
    </div>
    <div class="informationbox2">
        <router-link v-for="(item,index) of option2" :key="index" to="" tag="p">
            <span>{{item.name}}</span>
            <span>{{item.content}}</span>
        </router-link>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            placeholdervalue: true,
            option: [{
                name: '头像',
                content: ''
            }, {
                name: '姓名',
                content: '小贝同学'
            }, {
                name: '生日',
                content: '未完善'
            }, {
                name: '性别',
                content: '女'
            }],
            option2: [{
                name: '城市',
                content: '杭州'
            }, {
                name: '在读年级',
                content: '高一'
            }, {
                name: '在读学校',
                content: '为完善'
            }, {
                name: '联系人手机号',
                content: '13637009389'
            }]

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

.informationbox {
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
        position: relative;

        span:nth-child(1) {
            display: inline-block;
            margin-left: 10px;
            width: 100px;
        }

        span:nth-child(2) {
            display: inline-block;
            position: absolute;
            right: 10px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #888888;
        }
    }
}

.informationbox2 {
    width: 355px;
    height: 160px;
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
        position: relative;

        span:nth-child(1) {
            display: inline-block;
            margin-left: 10px;
            width: 100px;
            font-weight: 500;
        }

        span:nth-child(2) {
            display: inline-block;
            position: absolute;
            right: 10px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #888888;
        }
    }
}
</style>
