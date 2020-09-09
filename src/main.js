import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/reset.scss'
import './assets/style/var.scss'

import { NavBar, Checkbox, CheckboxGroup, Cell, SubmitBar, AddressList, AddressEdit, CellGroup, Field, RadioGroup, Radio, Image as VanImage, Button, SwipeCell, Dialog } from "vant";

Vue.use(NavBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(SubmitBar);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(SwipeCell);
Vue.use(Dialog);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')