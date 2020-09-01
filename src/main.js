import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { NavBar, Toast } from 'vant';

Vue.use(NavBar);
Vue.use(Toast);
import "amfe-flexible"
import './assets/style/reset.scss'
import './assets/style/var.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')