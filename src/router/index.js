import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/viewpager'
    },
    {
        path: '/viewpager',
        component: () => import('../views/Viewpager.vue')

    },
    {
        path: '/register',
        component:() => import('../views/Register.vue')
    },
    {
        path: '/PasswordToIogin',
        component: () => import('../views/PasswordToIogin.vue')

    },
    {
        path: "/login",
        component: () =>
            import('../views/Login.vue')
    },
    {
        path: '/home',
        component: () =>
            import('../views/Home.vue'),
        children: [{
                path: '',
                redirect: '/index'
            },
            {
                path: '/index',
                component: () =>
                    import('../views/Index.vue'),
            },
            {
                path: '/Classroom',
                component: () =>
                    import('../views/Classroom.vue'),
            },
            {
                path: '/find',
                component: () =>
                    import('../views/Find.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/mine',
                component: () =>
                    import('../views/Mine.vue'),
            },
            {
                path: '/delail',
                component: () =>
                    import('../views/Delail.vue'),
            }
        ]
    },
    {
        path: '*',
        component: () =>
            import('../views/Nofound404.vue'),
    }
];

const router = new VueRouter({
    routes
});
export default router;