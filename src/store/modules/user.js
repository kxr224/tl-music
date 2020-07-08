// 这个导出的对象就是我们这个vuex的模块
export default {
    // 增加了命名空间的概念
    namespaced: true,
    state: {
        name: "张三丰",
        age: 18
    },
    mutations: {
        changeName(state, payload) {
            state.name = payload.name
        }
    },
    actions: {},
    getters: {}
};
