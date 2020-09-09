import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getCarList, deleteCarList, getAddressList, addAddressList, editAddressList, deleteAddressList } from "@/utils/api";

import icon_04 from '../../public/icon/icon_04.png'
const car = {
    namespaced: true, //添加命名空间
    state: () => ({
        allChecked: [false],
        checked: [],
        flag: true,
        carList: [{
            currentPrice: 1500,
            id: 1,
            info: "教学本地化，备战高考",
            season: "秋季班",
            teachers: [{
                id: 4,
                images: "https://mybucket-lcx.oss-cn-hangzhou.aliyuncs.com/images/img_07.png",
                info: "清华大学硕士研究生",
                name: "张老师",
                position: "讲师"
            }, {
                id: 5,
                images: "https://mybucket-lcx.oss-cn-hangzhou.aliyuncs.com/images/img_08.png",
                info: "北京大学学士",
                name: "赵老师",
                position: "班主任"
            }],
            time: "9月4日-12月18日 周五晚上19：00-21：00  |  16次课",
            title: "高一数学秋季精品班（周日10：30）"
        }],
        icon_04
    }),
    mutations: {
        // 点击返回上一页
        carOnClickLeft(state, $router) {
            $router.go(-1);
        },
        // 列表中的每一个checkbox触发的
        // 全true，则全选按钮亮；反之，则灭
        carAllChange(state, num) {
            if (num == state.carList.length) {
                state.allChecked[0] = true;
                state.allChecked = JSON.parse(JSON.stringify(state.allChecked));
                state.flag = true;
            } else {
                state.allChecked[0] = false;
                state.allChecked = JSON.parse(JSON.stringify(state.allChecked));
                state.flag = false;
            }
            state.checked = JSON.parse(JSON.stringify(state.checked));
            console.log(state.checked);
        },
        // 点击全选按钮，点亮，列表每一个checked为true；反之，false
        carChange(state, checked) {
            if (checked == true) {
                checked = false;
                // console.log(state.checked);
                state.checked.forEach((item, index, arr) => {
                    arr[index] = true;
                });
                // console.log(state.checked);
                state.checked = JSON.parse(JSON.stringify(state.checked))
            } else {
                if (state.flag == true) {
                    // console.log(state.checked);
                    state.checked.forEach((item, index, arr) => {
                        arr[index] = false;
                    });
                    // console.log(state.checked);
                    state.checked = JSON.parse(JSON.stringify(state.checked));
                }
            }
            console.log(state.checked);
        },
        // 订单提交跳转支付页
        carOnSubmit(state, { $router, total }) {
            console.log(total);
            if (total) {
                localStorage.setItem('checked', state.checked);
                localStorage.setItem('total', total);
                $router.push('/order');
            } else {
                console.log('购物车为空');
            }
        },
        // 获取购物车列表信息
        changeCarList(state, payload) {
            state.carList = payload.list.result;
            console.log(state.carList.length);
            if (state.checked.length == 0) {
                for (let i = 0; i < state.carList.length; i++) {
                    state.checked.push(false);
                }
            }
            console.log(state.checked);
        },
    },
    actions: {
        //获得购物车列表
        async getCar({ commit }, payload) {
            const data = await getCarList(payload);
            console.log(data);
            commit('changeCarList', {
                list: data
            });
        },
        //删除购物车列表
        async deleteCarOne({ commit }, payload) {
            console.log(payload);
            const data = await deleteCarList(payload);
            console.log(data);
        },
    },
    getters: {
        total(state) {
            var sum = 0;
            for (var i = 0; i < state.carList.length; i++) {
                if (state.checked[i] == true)
                    sum += parseInt(state.carList[i].currentPrice);
            }
            return sum * 100;
        },
        num(state) {
            let sum = 0;
            state.checked.forEach(function(item, index) {
                sum += item;
            });
            return sum;
        },
    }
}
const address = {
    namespaced: true, //添加命名空间
    state: () => ({
        chosenAddressId: [],
        addressList: []
    }),
    mutations: {
        // 点击返回上一页
        addressOnClickLeft(state, $router) {
            $router.go(-1);
        },
        // 新增地址
        addressOnAdd(state, $router) {
            console.log('新增地址');
            $router.push('/addaddress');
        },
        // 编辑地址
        addressOnEdit(state, { $router, index }) {
            console.log('编辑地址:' + index);
            console.log('/editaddress/' + index);
            console.log($router);
            $router.push('/editaddress/' + index);
        },
        // 获取地址列表信息
        changeAddressList(state, payload) {
            state.addressList = [];
            payload.list.result.forEach(function(item, index, arr) {
                let addressList = {};
                addressList.id = item.id;
                addressList.name = item.name;
                addressList.tel = item.phone;
                addressList.address = item.details;
                // console.log('id:' + item.id);
                if (localStorage.getItem('chosenAddressId') == item.id) {
                    addressList.isDefault = true;
                    state.chosenAddressId[0] = item.id;
                    state.chosenAddressId = JSON.parse(JSON.stringify(state.chosenAddressId));
                }
                if (!localStorage.getItem('chosenAddressId')) {
                    if (item.level == 0) {
                        addressList.isDefault = true;
                        state.chosenAddressId[0] = item.id;
                        state.chosenAddressId = JSON.parse(JSON.stringify(state.chosenAddressId));
                        console.log(state.chosenAddressId[0]);
                    }
                }
                state.addressList.push(addressList);
                // console.log(state.addressList[index]);
            })

            console.log(state.addressList);
        },
    },
    actions: {
        //获得地址列表
        async getAddress({ commit }, payload) {
            const data = await getAddressList(payload);
            console.log(data);
            commit('changeAddressList', {
                list: data
            });
        },
    },
    getters: {}
}
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
const order = {
    namespaced: true, //添加命名空间
    state: () => ({
        orderList: []
    }),
    mutations: {
        // 点击返回上一页
        orderOnClickLeft(state, $router) {
            $router.go(-1);
        },
        // 提交
        orderOnSubmit(state, $router) {
            console.log("提交");
            $router.push('/orderpay')
        },
        // 添加地址
        orderAddAddress(state, $router) {
            $router.push('/address')
        },
        // 获取购物车列表信息
        changeOrderList(state, payload) {
            // state.orderList = payload.list.result;
            state.orderList = [];
            let checked = localStorage.getItem('checked').split(',');
            checked.forEach((item, index, arr) => {
                console.log(item, index, arr);
                if (item == "true") {
                    state.orderList.push(payload.list.result[index])
                }
            })
            console.log(state.orderList);
        },
    },
    actions: {
        //获得购物车列表
        async getOrder({ commit }, payload) {
            const data = await getCarList(payload);
            console.log(data);
            commit('changeOrderList', {
                list: data
            });
        },
    },
    getters: {}
}
const orderpay = {
    namespaced: true, //添加命名空间/
    state: () => ({
        total: localStorage.getItem('total') / 100,
        radio: ["0"],
    }),
    mutations: {
        orderpayOnClickLeft(state, $router) {
            $router.go(-1);
        },
        orderpayPay(state, $router) {
            $router.push('/OrderSuccess');
        }
    },
    actions: {},
    getters: {}
}
const ordersuccess = {
    namespaced: true, //添加命名空间/
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        car: car,
        address: address,
        addaddress: addaddress,
        editaddress: editaddress,
        order: order,
        orderpay: orderpay,
        ordersuccess: ordersuccess
    }

})