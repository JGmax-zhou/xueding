import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import * as getters1 from './getters'

import { getCarList, deleteCarList, getAddressList, addAddressList, editAddressList, deleteAddressList } from "@/utils/api";

import icon_04 from '../../public/icon/icon_04.png'
import car from './car'
import address from './address'
import addaddress from './addaddress'
import editaddress from './editaddress'
import order from './order'
import orderpay from './orderpay'
import indexHome from './index-home'
import classroom from './classroom'
const ordersuccess = {
    namespaced: true, //添加命名空间/
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

export default new Vuex.Store({
    state: {
        hotSeek: ['考研', '雅思', '托福', '中考', '三年级', '四级', '口语'], //搜索页面热门搜索列表内容
        XQXL: ['学前', '小学', '初中', '高中', '大学'], //教师详情页学历下拉
        xueduan: { //教师详情页已选择学段
            tit: '选择学段',
            sign: 0,
            tits: '选择年级', //选择年级
            switch: false, //确定开关是否显示
        },
        collectimgNO: '//cdn.xdf.cn/souke/h5-pages/pages/teacher-home-page/images/collect_default_icon.svg', //教师未收藏时
        collectimgOK: '', //教师收藏时
        collectnum: 0, //教师被收藏的总数
    },
    mutations: {
        collectBut(state) {
            if (state.collectimgOK == '') {
                state.collectimgOK = '//cdn.xdf.cn/souke/h5-pages/pages/teacher-home-page/images/collect_selected_icon.svg';
                state.collectnum += 1
            } else {
                state.collectimgOK = '';
                state.collectnum -= 1
            }

        },
        secondary(state, payload) { //教师详情页学历选择二级菜单切换
            if (state.xueduan.sign != 1) {
                state.XQXL = state.XLXL[payload.id].grade;
                state.xueduan.tit = payload.tit;
                state.xueduan.sign = 1
            } else {
                state.xueduan.tits = payload.tit;
                state.xueduan.switch = true;
            }

            // console.log(payload);
        },
        QXSY(state) { //教师详情页取消选择所有年级
            state.xueduan.sign = 0;
            state.xueduan.switch = false;
            state.XQXL = ['学前', '小学', '初中', '高中', '大学'];
            state.xueduan.tit = '选择学段';
            state.xueduan.tits = '选择年级';
        }
    },
    actions: {

    },
    modules: {
        indexHome,
        classroom,
        car: car,
        address: address,
        addaddress: addaddress,
        editaddress: editaddress,
        order: order,
        orderpay: orderpay,
        ordersuccess: ordersuccess
    }
})