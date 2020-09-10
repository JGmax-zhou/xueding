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


//获取手机验证码
export function getPhoneCode(params) {
    return http.post('/user/sendCode', params)
}
//注册
export function getRegister(params) {
    return http.post('/user/register', params)
}
//登录
export function getPasswordToIogin(params) {
    return http.post('/user/login', params)
}

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