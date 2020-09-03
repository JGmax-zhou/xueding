<template>
    <div class="success-container" >
        <!-- 标题 -->
        <van-nav-bar title="支付订单" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- 支付剩余时间 -->
        <section class="surplus-box">
            <span class="surplus">支付剩余时间 15：00</span>
            <span class="price">￥4098.00</span>
            <span class="order">高一升高二物理秋季班（周日：9：30）... <i>订单详情 ></i></span>
        </section>
        <!-- 支付方式 -->
        <van-cell-group>
            <van-cell>
                <span><van-image width="20" height="20" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <i>微信支付</i>
                </span>
                <van-radio name="1"></van-radio>
            </van-cell>
            <van-cell>
                <span><van-image width="20" height="20" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <i>支付宝支付</i>
                </span>
                <van-radio name="2"></van-radio>
            </van-cell>
            <van-cell>
                <span><van-image width="20" height="20" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <i>银行卡支付</i>
                </span>
                <van-radio name="3"></van-radio>
            </van-cell>
        </van-cell-group>
        <van-button round type="info" @click="pay">确认支付</van-button>
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
        onClickLeft(){
            this.$router.go(-1);
        },
        pay(){
            this.$router.push('/OrderSuccess');
        }
    }
};
</script>
<style lang='scss' scoped>
.success-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 剩余时间
    .surplus-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 55px;
        margin: 20px 0 50px;
        .surplus,.order{
            font-size: 10px;
            color: #6e6e6e;
            i{
                color: #969696;
            }
        }
        .price{
            font-size: 16px;
            color: #f86400;
        }
    }
    // 支付方式
    .van-cell-group{
        width: 355px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        .van-cell__value{
            display: flex;
            justify-content: space-between;
            align-content: center;
            line-height: 60px;
            span{
                display: flex;
                align-items: center;
                i{
                    margin-left: 10px;
                }
            }
        }
    }
    .van-button{
        width: 355px;
        height: 36px;
        position: absolute;
        bottom: 10px;
    }
}
</style>
