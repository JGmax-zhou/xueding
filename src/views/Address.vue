<template>
    <div class="address-container">
        <!-- 标题 -->
        <van-nav-bar title="我的收货地址" fixed placeholder z-index="10" left-arrow @click-left="addressOnClickLeft" />
        <van-address-list
        v-model="chosenAddressId[0]"
        :list="list"
        default-tag-text="默认"
        @add="addressOnAdd"
        @edit="addressOnEdit"
        />
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
            chosenAddressId(){
                return this.$store.state.address.chosenAddressId
            },
            list(){
                return this.$store.state.address.list
            },
        })
    },

    mounted() {},

    methods: {
        // 新增地址
        addressOnAdd() {
            this.$store.commit('addressOnAdd',this.$router);
        },
        // 编辑地址
        addressOnEdit(item, index) {
            console.log('编辑地址:' + index);
            // this.$router.push('/editaddress/' + index);
            console.log(this.$router);
            this.$store.commit('addressOnEdit',{
                $router:this.$router,
                index:index}
            );
        },
        // 返回上一页
        addressOnClickLeft() {
            this.$store.commit('addressOnClickLeft',this.$router);
        },
    }
};
</script>
<style lang='scss'>
.address-container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 头部透明
    .van-nav-bar {
        background: transparent;
    }
    // 地址项目
    .van-address-edit__fields{
        border-radius: 4px;
        background-color: #fff;
    }

    // 地址项目内容
    .van-address-item {
        padding: 0.32rem;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }
    // 按钮
    .van-address-item .van-radio__icon--checked .van-icon {
        background-color: #4a66f5;
        border-color: #4a66f5;
    }
    .van-tag--danger {
        background-color: #4a66f5;
    }
    .van-button--danger{
        color: #4a66f5;
        background-color: transparent;
        border: 0;
        .van-button__content{
            display: block;
            height: 45px;
            line-height: 45px;
        }
    }
    // 姓名颜色
    .van-address-item__name{
        color: #999;
    }
    // 地址颜色
    .van-address-item__address{
        color: #999;
    }
    // 默认标签
    .van-tag{
        padding: 3px 6px;
        font-size: 10px;
    }
    .van-address-list__bottom {
        position: relative;
        top: 8px;
        height: 45px;
        border-radius: 4px;
        box-shadow: 5pt 3pt 10pt -1pt #EDEDED;
    }

}
</style>
