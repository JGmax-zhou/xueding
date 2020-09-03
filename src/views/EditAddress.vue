<template>
    <div class="editaddress-container">
        <!-- 标题 -->
        <van-nav-bar title="修改收货地址" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        
        

        />
        <!-- <p>{{ $route.params.id }}</p> -->
        

    </div>
</template>

<script>
export default {
    data() {
        return {
            areaList:{
                province_list: {
                    110000: '北京市',
                    120000: '天津市',
                    130000: '浙江省'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县',
                    130100: '杭州市',
                    130200: '宁波市',
                    130300: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                    130101: '余杭区',
                    130102: '三堡区',
                    130103: '五堡区',
                    130104: '七堡区',
                    130105: '九堡区',
                    130201: '镇海区',
                    130202: '余姚区',
                    130203: '五堡区',
                    130204: '七堡区',
                    130205: '九堡区',
                }
            },
            searchResult: [],
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onDelete(){
            console.log('删除');
        },
        onSave(content) {
            console.log('save');
            this.$store.dispatch('addAddress', {
                token:localStorage.getItem('token'),
                getName:content.name,
                getPhone:content.tel,
                address:content.province +
                        content.city +
                        content.county +
                        content.addressDetail,
                status:content.isDefault ? 1 : 2
            });
        },
        onChangeDetail(){
            console.log('onChangeDetail');
        }
    }
};
</script>
<style lang='scss'>
.van-button--danger{
    background-color: #4a66f5;
    border: 0.02667rem solid #4a66f5;
}
</style>
