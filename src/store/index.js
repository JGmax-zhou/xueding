import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入vuex组件
import classroom from './classroom'


export default new Vuex.Store({
    modules: {
        classroom
    }
})