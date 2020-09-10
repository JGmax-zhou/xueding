import {
    getTeacherDetails, //教师详情
} from '../utils/api'
export default {
    namespaced: true,
    state: () => ({
        XQXL: ['学前', '小学', '初中', '高中', '大学'], //教师详情页学历下拉
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
        xueduan: { //教师详情页已选择学段
            tit: '选择学段',
            sign: 0,
            tits: '选择年级', //选择年级
            switch: false, //确定开关是否显示
        },
        collectimgNO: '//cdn.xdf.cn/souke/h5-pages/pages/teacher-home-page/images/collect_default_icon.svg', //教师未收藏时
        collectimgOK: '', //教师收藏时
        collectnum: 0, //教师被收藏的总数
        jsxq: {}, //请求的教师详情
    }),
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

            // console.log(state.xueduan);
        },
        QXSY(state) { //教师详情页取消选择所有年级
            state.xueduan.sign = 0;
            state.xueduan.switch = false;
            state.XQXL = ['学前', '小学', '初中', '高中', '大学'];
            state.xueduan.tit = '选择学段';
            state.xueduan.tits = '选择年级';
        },
        setTeacherDetails(state, payload) {
            state.jsxq = payload;
            console.log(payload);
        }
    },
    actions: {
        async getTeacherDetails({ commit }, payload) { //教师详情数据请求
            const result = await getTeacherDetails(payload)
            commit('setTeacherDetails', result.result[0])
                // console.log(result);
        },
    }
}