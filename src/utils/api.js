import http from './http';

// export function getIndexBanner(params) {
//   return http.get('/home/banner', params)
// }
export function getIndex(params) {
    return http.get('/index', params)
}