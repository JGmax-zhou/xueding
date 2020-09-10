import {
    getSchoolList, //校区选择列表数据请求
    getSubjectList, ////下拉菜单学科列表数据请求
} from '../utils/api'

export default {
    namespaced: true,
    state: {
        navlist: [{
                tit: "校区",
                SchoolList: [], //校区数据列表
            },
            {
                tit: "学科",
                SchoolList: [{
                        title: "中学辅导",
                        content: ["物理", "数学", "化学", "语文", "英语"],
                    },
                    {
                        title: "留学考试",
                        content: ["雅思", "托福", "AP", "STA"],
                    },
                ],
            },
            {
                tit: "上课形式",
                SchoolList: ["全部", "走读", "在线"],
            },
        ],
    },
    mutations: {
        setSchoolList(state, ppayloada) { //校区选择列表数据请求
            state.navlist[0].SchoolList = ppayloada.result
                // console.log(state.navlist[0].SchoolList);
        },
        setSubjectList(state, ppayloada) { //校区选择列表数据请求
            state.navlist[1].SchoolList = ppayloada.result
                // console.log(state.navlist[1].SchoolList);
        },
    },
    actions: {
        async getSchoolList({ commit }) { //校区选择列表数据请求
            const result = await getSchoolList()
            commit('setSchoolList', result)
        },
        async getSubjectList({ commit }) { //下拉菜单学科列表数据请求
            const result = await getSubjectList()
            commit('setSubjectList', result)
        }
    }
}