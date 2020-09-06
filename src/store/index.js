import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import icon_04 from '../../public/icon/icon_04.png'
const car = {
    // namespaced: true, //添加命名空间
    state: () => ({
        allChecked: [false],
        checked: [false, false],
        flag: true,
        carList: [{
            cartId: "5e5912670c4d5e2af8af87b1",
            productImg: "http://haitao.nosdn1.127.net/09f5c35defd7464695dbb40c5f472c981572572175170k2fgvc4z14047.jpg?imageView&thumbnail=800x0&quality=85",
            productName: "秋季课程 初三高数",
            productPrice: 5888,
            standard: "ssfsdcsdcsdffs",
            count: 5
        }, {
            cartId: "5e5912670c4d5e2af8af87b1",
            productImg: "http://haitao.nosdn1.127.net/09f5c35defd7464695dbb40c5f472c981572572175170k2fgvc4z14047.jpg?imageView&thumbnail=800x0&quality=85",
            productName: "秋季课程 初三高数",
            productPrice: 5888,
            standard: "ssfsdcsdcsdffs",
            count: 5
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
            state.checked = JSON.parse(JSON.stringify(state.checked))
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
        },
        // 订单提交跳转支付页
        carOnSubmit(state, { $router, total }) {
            console.log(total);
            if (total) {
                localStorage.setItem('total', total)
                $router.push('/order');
            } else {
                console.log('购物车为空');
            }
        }
    },
    actions: {},
    getters: {
        total(state) {
            var sum = 0;
            for (var i = 0; i < state.carList.length; i++) {
                if (state.checked[i] == true)
                    sum += parseInt(state.carList[i].productPrice);
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
    state: () => ({
        chosenAddressId: ['1'],
        list: [{
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
    },
    actions: {},
    getters: {}
}

const addaddress = {
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
        // 保存
        addaddressOnSave(state, content) {
            console.log('save');
            console.log(localStorage.getItem('token'));
            console.log(content.name);
            console.log(content.province + content.city + content.county + content.addressDetail);
            console.log(content.isDefault);
            // this.$store.dispatch('addAddress', {
            //     token:localStorage.getItem('token'),
            //     getName:content.name,
            //     getPhone:content.tel,
            //     address:content.province +
            //             content.city +
            //             content.county +
            //             content.addressDetail,
            //     status:content.isDefault ? 1 : 2
            // });
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
        },
    },
    actions: {},
    getters: {}
}

const editaddress = {
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
            // this.$store.dispatch('addAddress', {
            //     token:localStorage.getItem('token'),
            //     getName:content.name,
            //     getPhone:content.tel,
            //     address:content.province +
            //             content.city +
            //             content.county +
            //             content.addressDetail,
            //     status:content.isDefault ? 1 : 2
            // });
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
    },
    actions: {},
    getters: {}
}

const order = {
    state: () => ({}),
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
        }
    },
    actions: {},
    getters: {}
}
const orderpay = {
    state: () => ({}),
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