import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/reset.scss'
import './assets/style/var.scss'
import './assets/font/iconfont.css'

import { Rate } from 'vant';
Vue.use(Rate)

import { NavBar } from 'vant';
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')