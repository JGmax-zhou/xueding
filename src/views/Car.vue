<template>
    <div class="car-container">
        <!-- 标题 -->
        <van-nav-bar title="选课单" fixed placeholder z-index="10" left-arrow @click-left="carOnClickLeft" />
        <!-- 列表页 -->
        <main>
            <div class="car-list-title">
                <span class="listnum" ref="listnum" v-if="num===0">{{ num }}</span>
                <span class="listnum" ref="listnum" style="background:#1989fa;" v-else>{{ num }}</span>
                <h3>秋季课</h3>
            </div>
            <!-- {{ flag }} -->

            <div class="car-list-item" v-for="(item,index) in carList" :key="index">
                <!-- {{ checked[index] }} -->
                <van-checkbox v-model="checked[index]" @change="carAllChange()"></van-checkbox>
                <section>
                    <h3>{{ item.productName }}</h3>
                    <h4>教材本地化，同步校内，备战考试</h4>
                    <p>
                        <van-image width="12" :src="icon_04" />
                        9月10日-11月10日 10：30-12：00</p>
                    <p>
                        <img :src="item.productImg" alt="" width="50px" height="50px">
                    </p>
                    <p><span>￥{{ item.productPrice }} </span><em>/十课时</em></p>
                    <p><i>限时购</i>秋季班单科报名最低99元十课时</p>
                </section>
            </div>

        </main>
        <!-- 订单栏 -->
        <van-submit-bar :price="total" :button-text="'结算('+num+')'" button-color="#4a66f5" @submit="carOnSubmit">
            <van-checkbox v-model="allChecked[0]" @change="carChange"><span>全选</span></van-checkbox>
            <!-- <template #tip>
                你的收货地址不支持同城送, <span >修改地址</span>
            </template> -->
        </van-submit-bar>
        
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    data() {
        return {
        };
    },

    components: {},

    computed: {
        ...mapState({
            allChecked(){
                return this.$store.state.car.allChecked
            },
            checked(){
                return this.$store.state.car.checked
            },
            flag(){
                return this.$store.state.car.flag
            },
            carList(){
                return this.$store.state.car.carList
            },
            icon_04(){
                return this.$store.state.car.icon_04
            }
        }),
        ...mapGetters({
            total:'total',
            num:'num'
        }),
        
    },

    mounted() {
        // this.getCar();
    },

    methods: {
        // async getCar(){
        // const result=await getCarInfo({
        //     token:'abcd'
        // })
        // this.carList=result.detailCar;
        // console.log(this.carList)
        // },
        // 点击返回上一页
        carOnClickLeft() {
            this.$store.commit('carOnClickLeft',this.$router);
        },
        // 列表中的每一个checkbox触发的
        // 全true，则全选按钮亮；反之，则灭
        carAllChange(){
            console.log(this.num);
            this.$store.commit('carAllChange',this.num);
        },

        // 点击全选按钮，点亮，列表每一个checked为true；反之，false
        carChange(checked){
            this.$store.commit('carChange',checked);
        },
        // 订单提交跳转支付页
        carOnSubmit(){
            this.$store.commit('carOnSubmit',{
                $router:this.$router,
                total:this.total
            });
        }
    }
};
</script>
<style lang='scss' scoped>
.car-container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    main{
        width: 100%;
        background: #fff;
        padding: 0 15px;
        display:flex;
        flex-direction:column;
        align-items:center;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
    // 分类标题
    .car-list-title{
        width:100%;
        margin-top: 20px;
        line-height: 40px;
        display: flex;
        border-bottom:1px solid #f9f9f9;
        h3{
            font-weight: normal;
            color:#333333;
            text-indent:20px;
            font-size: 16px;
        }
    } 
    // 秋季班总数
    .listnum{
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid rgb(200, 201, 204);
        border-radius: 50%;
        margin-top: 10px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        background-color: #fff;
        // border-color: #1989fa;
    }
    // 商品
    .car-list-item{
        width:100%;
        display:flex;
        .van-checkbox{
            margin-top: 15px;
            height:20px;
            margin-right: 20px;
        }
        section{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 15px 0;
            height: 190px;
            border-bottom:1px solid #f9f9f9;
        }
        // 内容
        p {
            font-size:8px;
            margin:0;
            color: #999999;
            span{
                color: #f96400;
                font-size:14px;
                font-weight: 500;
            }
            i{
                color: #f96400;
                display: inline-block;
                padding: 2px 4px;
                text-indent: 0;
                border: 1px solid #f96400;
                border-radius: 6px;
                margin-right: 10px;
            }
            em{
                color: #EDEDED;
            }
        }
        // 课程标题
        h3{
            color: #333333;
            font-size:16px;
            line-height: 18px;
            margin:0;
            font-weight:normal;
        }
        // 课程详情
        h4{
            color: #666666;
            font-size:12px;
            margin:0;
            font-weight:normal;
        }
        img{
            border-radius:50%;
        }
    }
    // 结算
    .van-submit-bar{
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
    .van-button{
        text-align: center;
    }
    // 结算价格
    .van-submit-bar__price{
        color: #f96400;
    }
    i.van-icon-success{
        width: 10px;
        height: 10px;
    }
}
</style>
