import http from './http';

// export function getIndexBanner(params) {
//   return http.get('/home/banner', params)
// }
export function getIndex(params) { //首页导航数据
    return http.post('/subject/select', params)
}
export function getFame(params) { //首页名师人气榜数据
    return http.post('/teacher/recommend', params)
        // export function getIndex(params) {
        //     return http.get('/index', params)
        // }
}

//免费直播课
export function getClassFreeData(params) {
    return http.post('/class/free', params)
}