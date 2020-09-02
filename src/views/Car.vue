<template>
    <div class="car-container">
        <!-- 标题 -->
        <van-nav-bar title="选课单" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- 列表页 -->
        <main>
            <div class="car-list-title">
                <van-checkbox v-model="allChecked" @change="change"></van-checkbox>
                <h3>秋季课</h3>
            </div>
            <!-- {{ flag }} -->

            <div class="car-list-item" v-for="(item,index) in carList" :key="index">
                <!-- {{checked[index]}} -->
                <van-checkbox v-model="checked[index]" @change="allChange(index)"></van-checkbox>
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
        <van-submit-bar :price="total" :button-text="'结算('+num+')'" button-color="#4a66f5" @submit="onSubmit">
            <van-checkbox v-model="allChecked" @change="change"><span>全选</span></van-checkbox>
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
            flag:true,
            carList:[{
                cartId: "5e5912670c4d5e2af8af87b1",
                productImg: "http://haitao.nosdn1.127.net/09f5c35defd7464695dbb40c5f472c981572572175170k2fgvc4z14047.jpg?imageView&thumbnail=800x0&quality=85",
                productName: "秋季课程 初三高数",
                productPrice: 5888,
                standard: "ssfsdcsdcsdffs",
                count: 5
            },{
                cartId: "5e5912670c4d5e2af8af87b1",
                productImg: "http://haitao.nosdn1.127.net/09f5c35defd7464695dbb40c5f472c981572572175170k2fgvc4z14047.jpg?imageView&thumbnail=800x0&quality=85",
                productName: "秋季课程 初三高数",
                productPrice: 5888,
                standard: "ssfsdcsdcsdffs",
                count: 5
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
    },

    mounted() {
    },

    methods: {
        // 点击返回上一页
        onClickLeft() {
            this.$router.go(-1);
        },
        // 列表中的每一个checkbox触发的
        // 全true，则全选按钮亮；反之，则灭
        allChange(index){
            if(this.num==this.carList.length){
                this.allChecked=true;
                this.flag=true;
            }
            else{
                this.allChecked=false;
                this.flag=false;
            }
            console.log(this.checked);
            this.checked = JSON.parse(JSON.stringify(this.checked))
        },

        // 点击全选按钮，点亮，列表每一个checked为true；反之，false
        change(checked){
            // this.flag=true;
                console.log(checked)
                if(checked==true){
                    console.log(this.checked);
                    // for(let i=0;i<this.checked.length;i++){
                    //     this.checked[i]=true;
                    // }
                    this.checked.forEach((item, index,arr)=> {
                        arr[index]=true;
                    });
                    console.log(this.checked);
                    this.checked = JSON.parse(JSON.stringify(this.checked))
                }else{
                    if(this.flag==true){
                        console.log(this.checked);
                        // for(let i=0;i<this.checked.length;i++){
                        //     this.checked[i]=false;
                        // }
                        this.checked.forEach((item, index,arr)=> {
                            arr[index]=false;
                        });
                        console.log(this.checked);
                        this.checked = JSON.parse(JSON.stringify(this.checked));
                    }
                }
        },
        // 订单提交跳转支付页
        onSubmit(){
            this.$router.push('/order')
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
