import http from './http';

// export function getIndexBanner(params) {
//   return http.get('/home/banner', params)
// }
export function getIndex(params) { //首页导航数据
    return http.post('/subject/select', params)
}
export function getFame(params) { //首页名师人气榜数据
    return http.post('/teacher/recommend', params)
}
export function getIndexList(params) { //首页暑期班与秋季班列表数据
    return http.post('/course/recommend', params)
}
export function getIndexNavList(params) { //首页导航栏列表数据
    return http.post('/course/select', params)
}
export function getSchoolList(params) { //下拉菜单校区列表
    return http.post('/school/select', params)
}
export function getSubjectList(params) { //下拉菜单学科列表
    return http.post('/subject/select', params)
}