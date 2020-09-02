import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/reset.scss'
import './assets/style/var.scss'

import { NavBar, Swipe, SwipeItem ,Field ,Button,cellGroup } from 'vant';

Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Field);
Vue.use(Button);
Vue.use(cellGroup);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')