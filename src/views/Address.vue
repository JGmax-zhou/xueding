<template>
    <div class="address-container">
        <!-- 标题 -->
        <van-nav-bar title="我的收货地址" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chosenAddressId: '1',
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                isDefault: true,
                },
                {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ]
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onAdd() {
            console.log('新增地址');
            this.$router.push('/addaddress');
        },
        onEdit(item, index) {
            console.log('编辑地址:' + index);
            this.$router.push('/editaddress/'+index);
        },
        onClickLeft() {
            this.$router.go(-1);
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
