import http from './http';

// export function getIndexBanner(params) {
//   return http.get('/home/banner', params)
// }
// export function getIndex(params) {
//     return http.get('/index', params)
// }

//免费直播课
export function getClassFreeData(params) {
    return http.post('/class/free', params)
}