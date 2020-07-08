import Vue from 'vue'
import Vuex from 'vuex'
import {getBillList} from "../api/music-api";
import {SET_IS_LOGIN} from '../constants/mutation-type'
import user from './modules/user'

// 安装vuex，告诉vue我们要使用vuex了
Vue.use(Vuex);

// let a = 'lalla'

// 创建好了vuex的实例
// vuex里的值，一刷新就重新初始化了
export default new Vuex.Store({
    // state就是vuex的状态（数据）
    state: {
        // 用户信息
        userInfo: {
            name: "天亮教育"
        },
        // 登录状态
        isLogin: true,
        list: [9, 8, 264, 5, 5, 6, 7, 8, 6],
        // 榜单列表的数据。 每次都要调用接口才能初始化
        billList: [],
        // 播放进度
        currentTime: 0,
        // 要设置的时间
        process: null
    },
    // mutation， 修改vuex中的数据只能mutation去修改，
    // mutation是一个纯函数，里面不能有异步操作
    mutations: {
        // 在mutation中写的是函数
        // 参数
        //    1. state就是我们当前的state
        //    2. 调用这个mutation的时候穿过来的值
        // eslint-disable-next-line
        [SET_IS_LOGIN](state, {isLogin}) {
            // // eslint-disable-next-line
            // debugger
            // 在mutation内部就可以对state进行修改
            state.isLogin = isLogin;
            // state.userInfo = payload.userInfo;
        },
        setUserInfo(state, {userInfo}) {
            state.userInfo = userInfo
        },
        // 修改bill list的mutation
        setBillList(state, {billList}) {
            // const {billList} = payload;
            // const billList = payload.billList;
            state.billList = billList
        },
        setCurrentTime(state, payload) {
            state.currentTime = payload.currentTime;
        },
        setProcess(state,payload){
            state.process = payload.process;
        }

    },
    // 可以理解为vuex的计算属性，getters,可以对state进行一些派生
    getters: {
        // 定义成函数的形式，函数的参数是state，返回值就是这个getters的值
        zhengxu(state) {
            return state.list.sort((a, b) => {
                return a - b
            })
        },
        daoxu(state) {
            return state.list.sort((a, b) => {
                return b - a
            })
        }
    },
    // acitons中可以添加异步操作
    actions: {
        // 参数
        //   1. context : 上下文。 可以获取state，可以触发别的action，也可以提交mutation，也可以获取getters
        //   2. payload ：调用action的时候传递进来的参数
        // setBillList(context, payload) {
        //     console.log(context.state)
        //     // 请求了接口，获取到了数据
        //     getBillList(payload.type).then(res => {
        //         // 请求到了榜单列表的数据
        //         // 触发mutation修改数据
        //         context.commit("setBillList", {billList: res.list})
        //     })
        // },
        setBillList({commit}, {type}) {
            // console.log(state)
            // 请求了接口，获取到了数据
            return getBillList(type).then(res => {
                // 请求到了榜单列表的数据
                // 触发mutation修改数据
                commit("setBillList", {billList: res.list})
            })
        }
    },
    modules: {
        user
    }
})

// store;
