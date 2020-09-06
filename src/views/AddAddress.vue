<template>
    <div class="addaddress-container" >
        <!-- 标题 -->
        <van-nav-bar title="新增收货地址" fixed placeholder z-index="10" left-arrow right-text="保存" @click-left="addaddressOnClickLeft" @click-right="addaddressOnSave" />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @delete="addaddressOnDelete"
        @change-detail="addaddressOnChangeDetail"
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
            this.$store.commit('addaddressOnClickLeft',this.$router);
        },
        // 保存
        addaddressOnSave(content) {
            console.log(content);
            this.$store.commit('addaddressOnSave',content);
        },
        // 删除
        addaddressOnDelete() {
            this.$store.commit('addaddressOnDelete',this.$router);
        },
        // 改变地址后弹出的匹配地址
        addaddressOnChangeDetail(val) {
            this.$store.commit('addaddressOnChangeDetail',val);
        },
    }
};
</script>
<style lang='scss'>
.addaddress-container{
    .van-button{
        left: -500px;
    }
}
</style>
