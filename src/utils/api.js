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

//课堂免费直播课
export function getClassFreeData(params) {
    return http.post('/class/free', params)
}

//课堂即将开始
export function getClassBeginData(params) {
    return http.post('/class/begin', params)
}

//课堂精彩回放
export function getClassBackData(params) {
    return http.post('/class/back', params)
}


// 获取购物车列表
export function getCarList(params) {
    return http.post('/', params)
}

//详情页
export function getDelail(params) {
    return http.post('/course/recommend', params)
}



