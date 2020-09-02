import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible"
import './assets/style/reset.scss'
import './assets/style/var.scss'
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
    Tabs,
    Field,
    Button,
    Toast,
    Search, //Search 搜索
    Grid, //宫格、金刚区
    GridItem, //宫格、金刚区
    Image, //图片
    // Card, //商品卡片
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
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Search);
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