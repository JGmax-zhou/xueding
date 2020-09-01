import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: "/login",
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/home',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: '',
                redirect: '/index'
            },
            {
                path: '/index',
                component: () =>
                    import ('../views/Index.vue'),
            },
            {
                path: '/Classroom',
                component: () =>
                    import ('../views/Classroom.vue'),
            },
            {
                path: '/find',
                component: () =>
                    import ('../views/Find.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/mine',
                component: () =>
                    import ('../views/Mine.vue'),
            },
            {
                path: '/delail',
                component: () =>
                    import ('../views/Delail.vue'),
            },
            {
                path: '/car',
                component: () =>
                    import ('../views/Car.vue'),
            },
            {
                path: '/address',
                component: () =>
                    import ('../views/Address.vue'),
            },
            {
                path: '/addaddress',
                component: () =>
                    import ('../views/AddAddress.vue'),
            },
            {
                path: '/editaddress/:id',
                component: () =>
                    import ('../views/EditAddress.vue'),
            },
            {
                path: '/order',
                component: () =>
                    import ('../views/Order.vue'),
            },
            {
                path: '/ordersuccess',
                component: () =>
                    import ('../views/OrderSuccess.vue'),
            },
            {
                path: '/orderpay',
                component: () =>
                    import ('../views/OrderPay.vue'),
            }
        ]
    },
    {
        path: '*',
        component: () =>
            import ('../views/Nofound404.vue'),
    }
];

const router = new VueRouter({
    routes
});
export default router;