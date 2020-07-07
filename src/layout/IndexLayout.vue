<template>
    <div>
        <!--顶部导航栏-->
        <header>
            <ul class="nav-bar">
                <li>
                    <router-link to="/index"><img class="icon" src="../assets/logo-ea5.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/index/singer">歌手</router-link>
                </li>
                <li>
                    <router-link to="/index/bill">榜单</router-link>
                </li>
                <li>
                    <router-link to="/index/my">我的</router-link>
                </li>
                <li>
                    <router-link to="/index/search">搜索</router-link>
                </li>
            </ul>
        </header>
        <!--页面渲染的区域-->
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    // 项目首页布局
    export default {
        name: "Index"
    }
</script>

<style scoped lang="less">
    .nav-bar {
        display: flex;
        justify-content: space-around;
        height: 50px;
        font-size: 16px;
        background-color: #f9f9f9;
        color: #999;
        align-items: center;
        li{
            width: 20%;
            text-align: center;
        }
        // 图标样式
        .icon{
            height: 27px;

        }
        a{
            color: #999;
        }
        // 激活的路由的颜色
        .router-link-active{
            color: hotpink;
        }
    }

</style>
