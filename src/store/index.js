import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        animated: true, //首页导航栏动画效果控制
        hotSeek: ['考研', '雅思', '托福', '中考', '三年级', '四级', '口语'], //搜索页面热门搜索列表内容
        indexTab: ["精选", "数学", "语文", "英语", "化学", "物理", "生物"], //首页导航栏
        navIndex: 0, ////首页菜单跳转双向绑定
        DQgrade: '', //首页当前显示年级
        XLXL: [ //学历下拉
            {
                tit: '学前',
                grade: ['托班', '小班', '中班', '大班']
            },
            {
                tit: '小学',
                grade: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
            },
            {
                tit: '初中',
                grade: ['初一', '初二', '初三']
            },
            {
                tit: '高中',
                grade: ['高一', '高二', '高三']
            },
            {
                tit: '大学',
                grade: ['大一', '大二', '大三', '大四', '大五', '研一', '研二', '研三', '研究生以上']
            },
        ],
    },
    mutations: {
        cancelAnimated(state) { //首页导航栏动画效果控制
            state.animated = false
        },
        getAnimated(state) { //首页导航栏动画效果控制
            state.animated = true
        },
        changeIndex(state, payload) { //首页菜单跳转双向绑定
            state.navIndex = payload
        },
        DQgradeXGS(state, payload) { //显示当前年级
            state.DQgrade = payload
        }
    },
    actions: {
        changeit({ commit }, payload) { //首页菜单跳转双向绑定
            commit('changeIndex', payload)
        }
    },
    modules: {}
})