const addaddress = {
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
    }),
    mutations: {
        // 点击返回上一页
        addaddressOnClickLeft(state, $router) {
            $router.go(-1);
        },
        // 删除
        addaddressOnDelete(state) {
            console.log('delete');
        },
        // 改变地址后弹出的匹配地址
        addaddressOnChangeDetail(state, val) {
            if (val) {
                state.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区',
                }, ];
            } else {
                state.searchResult = [];
            }
        }
    },
    actions: {
        // // 添加地址列表
        async addAddress({ commit }, payload) {
            console.log(payload);
            const data = await addAddressList(payload);
            if (payload.level == '0') {
                localStorage.setItem('chosenAddressId', data.result[0]);
            }
            console.log(data);
        },
    },
    getters: {}
}

export default addaddress;