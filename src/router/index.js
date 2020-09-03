import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/viewpager'
            // redirect: '/home'
    },
    {
        path: '/viewpager',
        component: () =>
            import ('../views/Viewpager.vue')

    },
    {
        path: '/register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/PasswordToIogin',
        component: () =>
            import ('../views/PasswordToIogin.vue')
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
                children: [{
                        path: '',
                        redirect: 'index-choiceness/:'
                    },
                    {
                        path: 'index-choiceness/:id', //首页精选页面
                        component: () =>
                            import ("../views/index-choiceness.vue")
                    },
                    {
                        path: 'index-nav/:id', //首页导航栏除精选外的其他页面
                        component: () =>
                            import ("../views/index-nav.vue")
                    },
                ]
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
                meta: {
                    requiresAuth: true
                }
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
        path: '/index-SeleCourse/:id', //首页金刚导航区//选课
        component: () =>
            import ("../views/index-SeleCourse.vue")
    },
    {
        path: '/seek', //搜索页
        component: () =>
            import ("../components/public/seek.vue")
    },
    {
        path: '/Colect',
        component: () =>
            import ('../views/MineColect.vue'),
    },
    {
        path: '/setup',
        component: () =>
            import ('../views/MineSetup.vue'),
    },

    {
        path: '/modifieddata',
        component: () =>
            import ('../views/ModifiedData.vue'),
    },
    {
        path: '/personinformation',
        component: () =>
            import ('../views/PersonInformation.vue'),
    },
    {
        path: '/livelesson',
        component: () =>
            import ('../views/LiveLesson.vue'),
    },
    {
        path: '/myLesson',
        component: () =>
            import ('../views/MineLesson.vue'),
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