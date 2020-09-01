import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/reset.scss'
import './assets/style/var.scss'

// 依赖组件
import {
    Tabbar,
    TabbarItem,
    Icon,
    NavBar,
    Swipe,
    SwipeItem,
    Sidebar,
    SidebarItem,
    Tab,
    Tabs
} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')