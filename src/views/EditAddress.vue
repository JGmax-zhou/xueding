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
        :area-placeholder="addressinfo.province+addressinfo.city+addressinfo.county"
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="editaddressOnSave"
        @delete="editaddressOnDelete"
        @change-detail="editaddressOnChangeDetail"
        :address-info="addressinfo"
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
            addressinfo(){
                return this.$store.state.editaddress.addressinfo
            },
            addressList(){
                return this.$store.state.editaddress.addressList
            },
        })
    },

    mounted() {
        this.$store.dispatch("editaddress/getAddressOne", { 
            token: localStorage.getItem('token'),
            chooseId:this.$route.params.id
        });
    },

    methods: {
        // 返回上一页
        editaddressOnClickLeft() {
            this.$store.commit('editaddress/editaddressOnClickLeft',this.$router);
        },
        // 保存
        editaddressOnSave(content) {
            console.log(content.isDefault);
            content.isDefault?localStorage.setItem('chosenAddressId',this.$route.params.id):console.log("没有默认地址啦")
            console.log(localStorage.getItem('chosenAddressId'));
            this.$store.dispatch('editaddress/editAddress', {
                token: localStorage.getItem('token'),
                id:this.$route.params.id,
                name: content.name,
                phone: content.tel,
                details: content.province +
                    content.city +
                    content.county +
                    content.addressDetail,
                level: content.isDefault ? 0 : 1
            });
            this.$store.commit('editaddress/editaddressOnClickLeft',this.$router);
        
            // console.log(content);
            // this.$store.commit('editaddressOnSave',content);
        },
        // 删除
        editaddressOnDelete() {
            this.$store.dispatch('editaddress/deleteAddressOne', {
                token: localStorage.getItem('token'),
                id:this.$route.params.id
            });
            this.$store.commit('editaddress/editaddressOnClickLeft',this.$router);
        },
        // 改变地址后弹出的匹配地址
        editaddressOnChangeDetail(val) {
            this.$store.commit('editaddress/editaddressOnChangeDetail',val);
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
