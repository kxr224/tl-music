<template>
    <div>
        搜索{{a.name}}
        {{isLogin}}
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Search",
        created() {
            // 涉及到使用就涉及到变化，
            // 推荐我们使用计算属性来获取vuex中的值
            console.log(this.a.name);

        },
        computed: {
            // // vuex都要写在计算属性里面
            // userInfo() {
            //     return this.$store.state.userInfo;
            // },
            // isLogin(){
            //     return this.$store.state.isLogin
            // },
            ...mapState({a: "userInfo", isLogin: "isLogin"})
            // ...mapState(["userInfo","isLogin"])
        }
    }
</script>

<style scoped>

</style>
