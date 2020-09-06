import http from './http';

// export function getIndexBanner(params) {
//     return http.get('/home/banner', params)
// }

// 获取购物车列表
export function getCarList(params) {
    return http.post('/', params)
}