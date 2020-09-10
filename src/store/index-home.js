import {
    getIndex, //首页导航栏数据请求
    getFame, //首页名师人气榜数据请求
    getIndexList, //首页暑假班和秋季班列表数据请求
    getIndexNavList, //首页导航栏列表数据
} from "../utils/api"
export default {
    namespaced: true,
    state: () => ({
        animated: true, //首页导航栏动画效果控制
        indexTab: '', //首页导航栏
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
        popularityTeacher: '', ////首页名师人气榜
        indexList: [], //首页暑假班和秋季班列表数据
        IndexNavList: [], //首页导航栏列表数据
    }),
    mutations: {
        cancelAnimated(state) { //首页导航栏动画效果控制
            state.animated = false
        },
        getAnimated(state) { //首页导航栏动画效果控制
            state.animated = true
        },
        changeIndex(state, payload) { //首页菜单跳转双向绑定
            state.navIndex = payload
                // console.log(state.navIndex);
        },
        DQgradeXGS(state, payload) { //显示当前年级
            state.DQgrade = payload
        },
        setindexTab(state, payload) { //首页数据请求
            state.indexTab = payload.result
                // console.log(payload.result)
        },
        setPopularityTeacher(state, payload) { //首页名师人气榜
            state.popularityTeacher = payload.result
                // console.log(state.popularityTeacher)
        },
        setIndexList(state, payload) { //首页暑假班和秋季班列表数据请求
            state.indexList = payload.result
                // console.log(payload.result)
        },
        setIndexNavList(state, payload) { //首页导航栏列表数据
            state.IndexNavList = payload.result
                // console.log(payload.result)
        },
    },
    actions: {
        changeit({ commit }, payload) { //首页菜单跳转双向绑定
            commit('changeIndex', payload)
                // console.log(2);
        },
        async getIndexNav({ commit }) { //首页导航栏数据请求
            const result = await getIndex()
                // console.log(result)
            commit('setindexTab', result)
        },
        async getPopularityTeacher({ commit }) { //首页名师人气榜数据请求
            const result = await getFame()
            commit('setPopularityTeacher', result)
        },
        async getIndexList({ commit }) { //首页暑假班和秋季班列表数据请求
            const result = await getIndexList()
            commit('setIndexList', result)
        },
        async getIndexNavList({ commit }, payload) { //首页导航栏列表数据
            const result = await getIndexNavList(payload)
            commit('setIndexNavList', result)
        },
    }
}