import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const car = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

const order = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        car: car,
        order: order
    }
})