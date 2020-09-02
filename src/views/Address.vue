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
    .van-address-item {
        padding: 0.32rem;
        background-color: #fff;
        border-radius: 0;
    }
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
    .van-address-list__bottom {
        position: relative;
        top: 8px;
        height: 45px;
    }

}
</style>
