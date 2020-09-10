import http from './http';

// export function getIndexBanner(params) {
//   return http.get('/home/banner', params)
// }
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