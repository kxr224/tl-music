<template>
    <div>
        {{userInfo.name}}
        <button @click="logout">退出登录</button>
        <button @click="changeUserInfo">修改个人信息</button>
        <ul>
            <li v-for="(item,i) in zhengxu" :key="i">{{item}}</li>
        </ul>
        <h3>榜单列表vuex中</h3>
        <ul>
            <li v-for="(item,i) in billList" :key="i">{{item.title}}</li>
        </ul>
        {{name}}
    </div>
</template>

<script>
    import {mapGetters, mapState, createNamespacedHelpers} from "vuex";
    import {SET_IS_LOGIN} from "../constants/mutation-type";
    //
    // const userModule = createNamespacedHelpers("user");
    const {mapState:mapUserState} = createNamespacedHelpers("user");
    // console.log(userModule)

    export default {
        name: "My",
        beforeRouteEnter(to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            console.log("组件内的啦啦啦")
            next();
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            console.log("组件内更新");
            next();
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log("组件内的leaves ")
            next()
        },
        created() {
            // 在任何地方都可以通过this.$store拿到vuex的store
            console.log(this.$store.state.userInfo.name);
            // 触发一下action 就可以了
            this.$store.dispatch("setBillList", {type: 2}).then(() => {
                // 这个时候代表这个异步操作完了
                console.log(this.$store.state.billList)
            })
            console.log(this.$store.state.billList)
        },
        computed: {
            ...mapState(["userInfo", "billList"]),
            // name() {
            //     return this.$store.state.user.name
            // },
            ...mapUserState(["name","age"]),
            // // 取getters的值
            // list12(){
            //   return this.$store.getters.zhengxu
            // },
            ...mapGetters(["zhengxu"])
        },
        methods: {
            logout() {
                // 触发mutation
                // 第一个参数是类型，就是我们具体要触发那个mutation
                // 第二个参数是payload，就是我们要给这个mutation传的值
                // commit 专门用来触发mutation的方法
                this.$store.commit(SET_IS_LOGIN, {isLogin: false})
                this.$store.commit("setUserInfo", {userInfo: {name: "尚云科技"}})
            },
            changeUserInfo() {
                // this.$store.commit("setUserInfo", {userInfo: {name: "尚云科技"}});
                this.$store.commit({
                    type: "setUserInfo",
                    userInfo: {name: "尚云科技"}
                });
                // 使用命名之后，我们调用这个模块的数据就要加上名字的前缀
                this.$store.commit("user/changeName", {name: "张无忌"});

            }
        }
    }
</script>

<style scoped>

</style>
