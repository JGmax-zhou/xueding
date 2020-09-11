import { getCarList, deleteCarList, getAddressList, addAddressList, editAddressList, deleteAddressList } from "@/utils/api";
const order = {
    namespaced: true, //添加命名空间
    state: () => ({
        orderList: [],
        chosenAddressIdValue: localStorage.getItem('chosenAddressIdValue'),
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
        changeAddressValue(state, payload) {
            payload.list.result.forEach((item, index, arr) => {
                if (item.id == localStorage.getItem('chosenAddressId')) {
                    console.log(item.details);
                    localStorage.setItem('chosenAddressIdValue', item.details);
                    state.chosenAddressIdValue = item.details;
                }
            })
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
        //获得默认地址列表
        async getAddressValue({ commit }, payload) {
            const data = await getAddressList(payload);
            console.log(data);
            commit('changeAddressValue', {
                list: data
            });
        },
    },
    getters: {}
}

export default order;