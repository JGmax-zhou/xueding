<template>
    <div class="pay-container" >
        <!-- 标题 -->
        <van-nav-bar title="支付订单" fixed placeholder z-index="10" left-arrow @click-left="orderpayOnClickLeft" />
        <!-- 支付剩余时间 -->
        <section class="surplus-box">
            <span class="surplus">支付剩余时间 15：00</span>
            <span class="price">￥{{ total }}</span>
            <span class="order">高一升高二物理秋季班（周日：9：30）... <i>订单详情 ></i></span>
        </section>
        <!-- 支付方式 -->
        <van-cell-group>
            <van-radio-group v-model="radio[0]">
            <van-cell>
                <span><van-image width="20" :src="icon_38" />
                <i>微信支付</i>
                </span>
                <van-radio name="0"></van-radio>
            </van-cell>
            <van-cell>
                <span><van-image width="20" :src="icon_39" />
                <i>支付宝支付</i>
                </span>
                <van-radio name="1"></van-radio>
            </van-cell>
            <van-cell>
                <span><van-image width="20" :src="icon_40" />
                <i>银行卡支付</i>
                </span>
                <van-radio name="2"></van-radio>
            </van-cell>
            </van-radio-group>
        </van-cell-group>
        <van-button round type="info" @click="orderpayPay">确认支付</van-button>
    </div>
</template>

<script>
import icon_38 from '../../public/icon/icon_38.png'
import icon_39 from '../../public/icon/icon_39.png'
import icon_40 from '../../public/icon/icon_40.png'
import { mapState,mapGetters } from "vuex";
export default {
    data() {
        return {
            icon_38,
            icon_39,
            icon_40
        };
    },

    components: {},

    computed: {
        ...mapState({
            total(){
                return this.$store.state.orderpay.total;
            },
            radio(){
                return this.$store.state.orderpay.radio;
            }
        })
    },

    mounted() {},

    methods: {
        orderpayOnClickLeft(){
            this.$store.commit('orderpay/orderpayOnClickLeft',this.$router);
        },
        orderpayPay(){
            console.log(this.radio);
            localStorage.setItem('orderpay/paymethods',this.radio)
            this.$store.commit('orderpay/orderpayPay',this.$router);
        }
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        if(localStorage.getItem('token')){
            next();
        }else{
            next('login');
        }        
    }
};
</script>
<style lang='scss'>
.pay-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 头部透明
    .van-nav-bar {
        background: transparent;
    }
    // 剩余时间
    .surplus-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin: 20px 0 50px;
        .surplus,.order{
            font-size: 10px;
            color: #6e6e6e;
            i{
                color: #969696;
            }
        }
        .price{
            font-size: 20px;
            color: #f86400;
            font-weight: bold;
        }
    }
    // 支付方式
    .van-cell-group{
        width: 355px;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        background: #fff;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
        padding: 15px 0;
        .van-cell{
            background: transparent;
        }
        .van-cell__value{
            display: flex;
            justify-content: space-between;
            align-content: center;
            line-height: 35px;
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
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
}
</style>
