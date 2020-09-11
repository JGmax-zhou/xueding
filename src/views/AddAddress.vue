<template>
    <div class="addaddress-container" >
        <!-- 标题 -->
        <van-nav-bar title="新增收货地址" fixed placeholder z-index="10" left-arrow @click-left="addaddressOnClickLeft"  />
        <!-- <van-nav-bar title="新增收货地址" fixed placeholder z-index="10" left-arrow right-text="保存" @click-left="addaddressOnClickLeft" @click-right="addaddressOnSave" /> -->
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @delete="addaddressOnDelete"
        @change-detail="addaddressOnChangeDetail"
        @save="addaddressOnSave"
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
        // ...mapState(['addaddressList']),
        ...mapState({
            areaList(){
                return this.$store.state.addaddress.areaList
            },
            searchResult(){
                return this.$store.state.addaddress.searchResult
            },
        })
    },

    mounted() {},

    methods: {
        // 返回上一页
        addaddressOnClickLeft() {
            this.$store.commit('addaddress/addaddressOnClickLeft',this.$router);
        },
        // 保存
        addaddressOnSave(content) {
            this.$store.dispatch('addaddress/addAddress', {
                token: localStorage.getItem('token'),
                name: content.name,
                phone: content.tel,
                details: content.province +
                    content.city +
                    content.county +
                    content.addressDetail,
                level: content.isDefault? 0 : 1
            });
            this.$store.commit('addaddress/addaddressOnClickLeft',this.$router);
        
            // console.log('content'+content);
            // this.$store.commit('addaddressOnSave',content);
        },
        // 删除
        addaddressOnDelete() {
            this.$store.commit('addaddress/addaddressOnDelete',this.$router);
        },
        // 改变地址后弹出的匹配地址
        addaddressOnChangeDetail(val) {
            this.$store.commit('addaddress/addaddressOnChangeDetail',val);
        },
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
.addaddress-container{
    .van-button{
        background-color: #4a66f5;
        border-color: #4a66f5;
    }
}
</style>
