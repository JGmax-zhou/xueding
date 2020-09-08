import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
    // 引入api请求数据
import { getClassFreeData } from '../utils/api'

const classroom = {
    state: {
        classFreeData: {}
    },
    mutations: {
        //免费直播课
        changeClassFreeData(state, payload) {
            state.classFreeData = payload.data.result
        }
    },
    actions: {
        //免费直播课
        async getClassFreeData({ commit }) {
            const result = await getClassFreeData()
            commit('changeClassFreeData', {
                data: result
            })
        }
    },
    modules: {

    }
}
export default classroom