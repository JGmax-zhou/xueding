import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
    // 引入api请求数据
import { getClassFreeData, getClassBeginData, getClassBackData } from '../utils/api'

const classroom = {
    state: {
        classFreeData: {},
        classBeginData: {},
        classBackData: {},
    },
    mutations: {
        //免费直播课
        changeClassFreeData(state, payload) {
            state.classFreeData = payload.data.result
        },
        //即将开始
        changeClassBeginData(state, payplad) {
            state.classBeginData = payplad.data.result
        },

        //精彩回放
        changeClassBackData(state, payplad) {
            state.classBackData = payplad.data.result
        }
    },
    actions: {
        //免费直播课
        async getClassFreeData({ commit }) {
            const result = await getClassFreeData()
            commit('changeClassFreeData', {
                data: result
            })
        },

        //即将开始
        async getClassBeginData({ commit }, payload) {
            const result = await getClassBeginData(payload)

            commit('changeClassBeginData', {
                data: result
            })
        },

        //精彩回放
        async getClassBackData({ commit }, payload) {
            const result = await getClassBackData(payload)

            commit('changeClassBackData', {
                data: result
            })
        },
    }
}
export default classroom