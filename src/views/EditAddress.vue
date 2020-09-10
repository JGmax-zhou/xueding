<template>
    <div class="editaddress-container">
        <!-- 标题 -->
        <van-nav-bar title="修改收货地址" fixed placeholder z-index="10" left-arrow @click-left="editaddressOnClickLeft" />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @delete="editaddressOnDelete"
        @change-detail="editaddressOnChangeDetail"
        
        

        />
        <!-- <p>{{ $route.params.id }}</p> -->
        

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
            areaList(){
                return this.$store.state.editaddress.areaList
            },
            searchResult(){
                return this.$store.state.editaddress.searchResult
            },
        })
    },

    mounted() {},

    methods: {
        // 返回上一页
        editaddressOnClickLeft() {
            this.$store.commit('editaddressOnClickLeft',this.$router);
        },
        // 保存
        editaddressOnSave(content) {
            console.log(content);
            this.$store.commit('editaddressOnSave',content);
        },
        // 删除
        editaddressOnDelete() {
            this.$store.commit('editaddressOnDelete',this.$router);
        },
        // 改变地址后弹出的匹配地址
        editaddressOnChangeDetail(val) {
            this.$store.commit('editaddressOnChangeDetail',val);
        },
    }
};
</script>
<style lang='scss'>
.van-button--danger{
    background-color: #4a66f5;
    border: 0.02667rem solid #4a66f5;
}
</style>
