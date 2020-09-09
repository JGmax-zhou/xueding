import http from './http';

// export function getIndexBanner(params) {
//     return http.get('/home/banner', params)
// }

export function getCarList(params) {
    return http.post('/cart/get', params)
}

export function deleteCarList(params) {
    return http.post('/cart/del', params)
}

export function getAddressList(params) {
    return http.post('/address/get', params)
}

export function addAddressList(params) {
    return http.post('/address/add', params)
}

export function editAddressList(params) {
    return http.post('/address/update', params)
}

export function deleteAddressList(params) {
    return http.post('/address/delete', params)
}

// const api = {
//     install(vue) {
//         // 获取购物车列表
//         vue.prototype.$getCarList = function(params) {
//             console.log(111);
//             return http.post('/cart/get', params)
//         }
//     }
// }
// export default api