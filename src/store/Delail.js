import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
// // 引入api请求数据
import { getDelail } from '../utils/api'

const Delail = {
    // namespaced: true,
    state: {
        getDetailDate: []
    },
    mutations: {

        getDelailList(state, payload) {
            state.getDetailDate = payload.result
        },

    },
    actions: {//异步方法
        async getData({ commit }) {
            //使用api请求数据方法获取数据，赋值给result
            const result = await getDelail()

            console.log(result);
            //使用同步方法把数据传到mutations里
            commit('getDelailList', {
                data: result
            })
        },



    }
}
export default Delail





// const a = {
//     state: {
//         detadatil: []
//     },
//     actions: {
//         getdeta({ commit }, payload) {
//             // commit({
//             //     type: "GETDETA",
//             //     payload
//             // })
//             this.deta = payload
//             console.log(this.deta)
//         }
//     },
//     mutations: {
//         async getdeta({ commit }, params) {
//             let res = await getDelail(params);
//             commit('getdeta', {
//                 data: result.list
//             })
//         }
//     }
// }

// export default a;