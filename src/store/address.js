import { getCarList, deleteCarList, getAddressList, addAddressList, editAddressList, deleteAddressList } from "@/utils/api";
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
}

export default address;