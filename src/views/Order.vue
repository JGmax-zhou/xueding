<template>
    <div class="order-container" >
        <!-- 标题 -->
        <van-nav-bar title="确认订单信息" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- address -->
        <van-cell-group @click="addAddress">
            <van-cell title="修改、新增收货地址" is-link icon="location-o" />
            <van-cell title="默认地址" value="安徽省黄山区黄山街道..."/>
        </van-cell-group>

        <section>
            <p class="title"><span>限时购</span>秋季班单科报名最低99元十课时</p>
            <van-cell>
                <span>高一升高二物理秋季班（周日9：30）</span>
                <span class="price">￥3999.00</span>
            </van-cell>
            <van-cell >
                <span>高二英语秋季班[人教版]</span>
                <span class="price">￥3999.00</span>
            </van-cell>
        </section>

        <van-submit-bar button-text="提交订单" @submit="onSubmit" button-color="#4a66f5">
            <div class="price-box">
                <p>应付金额：<span class="price">￥4098.00</span></p>
                <p class="tip">限量课程需在30分钟内完成支付</p>
            </div>
        </van-submit-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onClickLeft() {
            this.$router.go(-1);
            // console.log(this.searchResult);
        },
        onSubmit(){
            console.log("提交");
            this.$router.push('/orderpay')
        },
        addAddress(){
            this.$router.push('/address')
        }
    }
};
</script>
<style lang='scss'>
.order-container{
    .van-field__label{
        width: 30px;
    }
    .van-cell{
        line-height: 30px;
    }
    .van-cell-group {
        background-color: #fff;
        border-radius: 20px;
        margin: 15px 10px 40px;
    }
    .van-cell__value{
        display: flex;
        justify-content: space-between;
    }
    section{
        margin: 0 10px;
        .title{
            font-size: 8px;
            color: #999;
            background: #fff;
            line-height: 20px;
            span{
                display: inline-block;
                color: #f96400;
                padding:0 4px;
                border: 1px solid #f96400;
                border-radius: 5px;
                margin: 10px 10px 0 15px;
            }
        }
        span.price{
            display: inline-block;
            width: 80px;
            color: #f96400;
            font-weight: 600;
        }
    }
    .price-box{
        font-size: 8px;
        margin-right: 10px;
        height: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            text-align: right;
        }
        .price{
            color: #f96400;
            font-size: 14px;
            font-weight:600;
        }
    }
    .van-button{
        height: 34px;
    }
    .tip{
        color: #999;
    }
}
</style>
