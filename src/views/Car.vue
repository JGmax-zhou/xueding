<template>
    <div class="car-container">
        <!-- 标题 -->
        <van-nav-bar title="选课单" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- 列表页 -->
        <main>
            <div class="car-list-title">
                <van-checkbox ></van-checkbox>
                <h3>秋季课</h3>
            </div>

            <div class="car-list-item" v-for="(item,index) in carList" :key="index">
                <van-checkbox v-model="checked[index]" @click="allChange"></van-checkbox>
                <section>
                    <h3>商品ID：{{ item.cartId }}</h3>
                    <h4>商品名称：{{ item.productName }}</h4>
                    <p>9月10日-11月10日 10：30-12：00</p>
                    <p>
                        <img :src="item.productImg" alt="" width="50px" height="50px">
                        <img :src="item.productImg" alt="" width="50px" height="50px">
                    </p>
                    <p><span>￥{{ item.productPrice }}</span>/十课时</p>
                    <p><i>限时购</i>商品标签：{{ item.standard }}</p>
                </section>
            </div>

        </main>
        <!-- 订单栏 -->
        <van-submit-bar :price="total" :button-text="'结算('+num+')'" button-color="#4a66f5">
            <van-checkbox v-model="allChecked" @click="change">全选</van-checkbox>
            <!-- <template #tip>
                你的收货地址不支持同城送, <span >修改地址</span>
            </template> -->
        </van-submit-bar>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            allChecked:false,
            checked: [false,false],
            carList:[{
                cartId:'123',
                productName:'高中升高二物理秋季班（周日9：30）',
                productImg:'http://pop.nosdn.127.net/d7dba3b2-023e-4f68-8002-d754c0365bad?imageView&thumbnail=800x0&quality=85',
                productPrice:'123',
                standard:'1'
            },{
                cartId:'123',
                productName:'高中升高二物理秋季班（周日9：30）',
                productImg:'http://pop.nosdn.127.net/d7dba3b2-023e-4f68-8002-d754c0365bad?imageView&thumbnail=800x0&quality=85',
                productPrice:'123',
                standard:'1'
            }],
            resultList:[{
                cartId:'123',
                productName:'高中升高二物理秋季班（周日9：30）',
                productImg:'http://pop.nosdn.127.net/d7dba3b2-023e-4f68-8002-d754c0365bad?imageView&thumbnail=800x0&quality=85',
                productPrice:'123',
                standard:'1'
            }]
        };
    },

    components: {},

    computed: {
        total(){
            var sum=0;
            for(var i=0;i<this.carList.length;i++){
                if(this.checked[i]==true)
                sum+=parseInt(this.carList[i].productPrice);
            }
            return sum*100;
        },
        num(){
            let sum=0;
            this.checked.forEach(function(item, index) {
                sum+=item;
            });
            return sum;
        },
        // allChange(){
        //     if(this.num==this.carList.length){
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        // },
    },

    mounted() {
    },

    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        allChange(){
            if(this.num==this.carList.length){
                this.allChecked=true;
            }
            else{
                this.allChecked=false;
            }  
        },

        // },
        // allSelected(){
        //     this.checked.forEach(function(item, index) {
        //         item=true;
        //     });
        // },
        change(){
            if(this.allChecked==true){
                // this.allChecked=true;
                console.log(this.checked);
                for(let i=0;i<this.checked.length;i++){
                    this.checked[i]=true;
                }
                // this.checked.forEach(function(item, index) {
                //     item=true;
                // });
                console.log(this.checked);
            }else{
                console.log(this.checked);
                for(let i=0;i<this.checked.length;i++){
                    this.checked[i]=false;
                }
                console.log(this.checked);
            }
        }
    }
};
</script>
<style lang='scss' scoped>
.car-container{
    width:100%;
    height:100%;
    
    main{
        width: 100%;
        background: #fff;
        padding: 0 15px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    // 分类标题
    .car-list-title{
        width:100%;
        line-height: 40px;
        display: flex;
        h3{
            text-indent:20px;
            font-size: 16px;
        }
    } 
    // 商品
    .car-list-item{
        width:100%;
        display:flex;
        height: 165px;
        margin: 15px 0;
        border-bottom:1px solid #f9f9f9;
        .van-checkbox{
            height:20px;
        }
        section{
            text-indent:20px;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            height: 150px;
        }
        p {
            font-size:10px;
            margin:0;
            color: #bbbbbb;
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
        }
        h3{
            font-size:16px;
            margin:0;
            font-weight:500;
        }
        h4{
            font-size:14px;
            margin:0;
            font-weight:500;
        }
        img{
            border-radius:50%;
        }
    }
    // 结算
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
