const orderpay = {
    namespaced: true, //添加命名空间/
    state: () => ({
        total: localStorage.getItem('total') / 100,
        radio: ["0"],
    }),
    mutations: {
        orderpayOnClickLeft(state, $router) {
            $router.go(-1);
        },
        orderpayPay(state, $router) {
            $router.push('/OrderSuccess');
        }
    },
    actions: {},
    getters: {}
}

export default orderpay;