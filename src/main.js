import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/reset.scss'
import './assets/style/var.scss'


import {
    Search, //Search 搜索
    Tab, //Tab 标签页
    Tabs, //Tab 标签页
    Grid, //宫格、金刚区
    GridItem, //宫格、金刚区
    Image, //图片
    // Card, //商品卡片
} from 'vant';

Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
// Vue.use(Card);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')