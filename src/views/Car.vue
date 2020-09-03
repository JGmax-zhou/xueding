<template>
    <div class="car-container">
        <!-- 标题 -->
        <van-nav-bar title="选课单" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- 列表页 -->
        <main>
            <div class="car-list-title">
                <span class="listnum" ref="listnum">{{ num }}</span>
                <h3>秋季课</h3>
            </div>
            <!-- {{ flag }} -->

            <div class="car-list-item" v-for="(item,index) in carList" :key="index">
                <!-- {{ checked[index] }} -->
                <van-checkbox v-model="checked[index]" @change="allChange(index)"></van-checkbox>
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
        <van-submit-bar :price="total" :button-text="'结算('+num+')'" button-color="#4a66f5" @submit="onSubmit">
            <van-checkbox v-model="allChecked" @change="change"><span>全选</span></van-checkbox>
            <!-- <template #tip>
                你的收货地址不支持同城送, <span >修改地址</span>
            </template> -->
        </van-submit-bar>
        
    </div>
</template>

<script>
import icon_04 from '../../public/icon/icon_04.png'
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
            }],
            icon_04
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
            // this.checked.forEach((item, index)=> {
            //     this.checked.push(false);
            // });
            // console.log(this.checked);
            let sum=0;
            this.checked.forEach(function(item, index) {
                sum+=item;
            });
            if(sum!==0){
                console.log(this.$refs.listnum);
                if(this.$refs.listnum){
                    this.$refs.listnum.style.backgroundColor='#1989fa';
                }
            }else{
                if(this.$refs.listnum){
                    this.$refs.listnum.style.backgroundColor='#fff';
                }
            }
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
            if(this.total){
                localStorage.setItem('total',this.total)
                this.$router.push('/order');
            }else{
                console.log('购物车为空');
            }
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
