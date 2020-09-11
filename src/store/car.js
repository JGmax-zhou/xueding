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
            state.checked = JSON.parse(JSON.stringify(state.checked))
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
            if (state.checked) {
                for (let i = 0; i < state.carList.length; i++) {
                    state.checked.push(false);
                }
            }
            console.log(state.checked);
        },
        SET_NUM: (state, num) => {
            state.num = num;
        },
        SET_TOTAL: (state, total) => {
            state.total = total;
        }
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
        // 删除购物车列表
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

export default car;