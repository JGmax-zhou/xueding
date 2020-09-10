import Vue from 'vue'
import Vuex from 'vuex'
import indexHome from './index-home' //首页模块
import indexSeleCourse from './index-SeleCourse' //金刚区导航模块
import detailsTeacher from './details-teacher' //教师详情页

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        hotSeek: ['考研', '雅思', '托福', '中考', '三年级', '四级', '口语'], //搜索页面热门搜索列表内容
    },
    actions: {

    },
    modules: {
        indexHome, //首页模块
        indexSeleCourse, //金刚区选课模块
        detailsTeacher, //教师详情页
    }
})