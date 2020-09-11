<template>
    <div class="order-container" >
        <!-- 标题 -->
        <van-nav-bar title="确认订单信息" fixed placeholder z-index="10" left-arrow @click-left="orderOnClickLeft" />
        <!-- address -->
        <van-cell-group @click="orderAddAddress">
            <van-cell title="修改、新增收货地址" is-link icon="location-o" />
            <van-cell title="默认地址" :value="chosenAddressIdValue"/>
        </van-cell-group>

        <section>
            <p class="title"><span>限时购</span>秋季班单科报名最低99元十课时</p>
            <van-cell v-for="(item,index) in orderList" :key="index">
                <span>{{ item.title }}</span>
                <span class="price">￥{{ item.currentPrice }}.00</span>
            </van-cell>
            <!-- {{ orderList }} -->
            <!-- <van-cell >
                <span>高二英语秋季班[人教版]</span>
                <span class="price">￥3999.00</span>
            </van-cell> -->
        </section>

        <van-submit-bar button-text="提交订单" @submit="orderOnSubmit" button-color="#4a66f5">
            <div class="price-box">
                <p>应付金额：<span class="price">￥{{ total/100 }}</span></p>
                <p class="tip">限量课程需在30分钟内完成支付</p>
            </div>
        </van-submit-bar>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    data() {
        return {
            total:localStorage.getItem('total')
        };
    },

    components: {},

    computed: {
        ...mapState({
            orderList(){
                return this.$store.state.order.orderList;
            },
            getOrder() {
                return this.$store.state.order.orderList;
            },
            chosenAddressIdValue() {
                return this.$store.state.order.chosenAddressIdValue;
            },
        }),
    },

    mounted() {
        this.$store.dispatch("order/getOrder", { token: localStorage.getItem('token') });
        this.$store.dispatch("order/getAddressValue", { token: localStorage.getItem('token') });
    },

    methods: {
        // 返回上一页
        orderOnClickLeft() {
            this.$store.commit('order/orderOnClickLeft',this.$router);
        },
        // 提交
        orderOnSubmit(){
            this.$store.commit('order/orderOnSubmit',this.$router);
        },
        // 添加地址
        orderAddAddress(){
            this.$store.commit('order/orderAddAddress',this.$router);
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
.order-container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    // 头部透明
    .van-nav-bar{
        background: #f5f5f5;
    }
    .van-field__label{
        width: 30px;
    }
    .van-cell{
        line-height: 30px;
        background: transparent;
    }
    .van-cell-group {
        width: 355px;
        margin: 15px 0 40px;
        border-radius: 6px;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
    .van-cell__value{
        display: flex;
        justify-content: space-between;
        span{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    section{
        background-color: #fff;
        width: 355px;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
        border-radius: 6px;
        .title{
            font-size: 8px;
            color: #999;
            line-height: 20px;
            span{
                display: inline-block;
                color: #f96400;
                padding:0 4px;
                border: 1px solid #f96400;
                border-radius: 6px;
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
    // 结算
    .van-submit-bar{
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
    .van-button{
        height: 34px;
    }
    .tip{
        color: #999;
    }
}
</style>
