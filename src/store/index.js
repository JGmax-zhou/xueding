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
        },
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
        changeit({ commit }, payload) { //首页菜单跳转双向绑定
            commit('changeIndex', payload)
        }
    },
    modules: {}
})