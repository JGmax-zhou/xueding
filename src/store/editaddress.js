import { getCarList, deleteCarList, getAddressList, addAddressList, editAddressList, deleteAddressList } from "@/utils/api";
const editaddress = {
    namespaced: true, //添加命名空间
    state: () => ({
        areaList: {
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
        addressinfo: {
            name: 'zhangsan',
            tel: '123456789',
            province: '北京市',
            city: '北京市',
            county: '东城区',
            addressDetail: '123',
            postalCode: '312500',
            isDefault: true
        },
    }),
    mutations: {
        // 点击返回上一页
        editaddressOnClickLeft(state, $router) {
            $router.go(-1);
        },
        // 保存
        editaddressOnSave(state, content) {
            console.log('save');
            console.log(localStorage.getItem('token'));
            console.log(content.name);
            console.log(content.province + content.city + content.county + content.addressDetail);
            console.log(content.isDefault);
        },
        // 删除
        editaddressOnDelete(state) {
            console.log('delete');
        },
        // 改变地址后弹出的匹配地址
        editaddressOnChangeDetail(state, val) {
            if (val) {
                state.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区',
                }, ];
            } else {
                state.searchResult = [];
            }
        },
        // 获取地址列表信息
        changeAddressListOne(state, payload) {
            console.log(payload);
            payload.list.result.forEach(function(item, index, arr) {
                if (payload.chooseId == item.id) {
                    state.addressinfo.id = item.id;
                    state.addressinfo.name = item.name;
                    state.addressinfo.tel = item.phone;
                    state.addressinfo.address = item.details;
                    if (item.id == localStorage.getItem("chosenAddressId")) {
                        console.log(11111);
                        state.addressinfo.isDefault = true;
                    } else {
                        state.addressinfo.isDefault = false;
                        console.log(22222);
                    }
                    console.log(state.addressinfo);
                }
            })
        },
    },
    actions: {
        //获得地址列表
        async getAddressOne({ commit }, payload) {
            const data = await getAddressList(payload);
            console.log(data);
            commit('changeAddressListOne', {
                list: data,
                chooseId: payload.chooseId
            });
        },
        // 修改地址列表
        async editAddress({ commit }, payload) {
            console.log(payload);
            const data = await editAddressList(payload);
            console.log(data);
        },
        //删除
        async deleteAddressOne({ commit }, payload) {
            console.log(payload);
            const data = await deleteAddressList(payload);
            console.log(data);
        },
    },
    getters: {}
}

export default editaddress