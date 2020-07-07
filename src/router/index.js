import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: IndexLayout,
        children: [
            {
                path: "",
                component: Index,
                meta: {
                    title: "首页"
                }
            },
            {
                path: "bill",
                component: () => import('../views/Bill/Bill.vue'),
                meta: {
                    title: "榜单"
                }
            },
            {
                path: "singer",
                component: () => import('../views/Singer.vue'),
                meta: {
                    title: "歌手"
                }
            },
            {
                path: "search",
                component: () => import('../views/Search.vue'),
                meta: {
                    title: "搜索"
                }
            },
            {
                path: "my",
                component: () => import('../views/My.vue'),
                meta: {
                    title: "我的"
                }
            },
            {
                // this.$route.params.type
                path: "more/:type",
                name: "moreMusic",
                component: () => import('../views/MoreMusic.vue'),
                meta: {
                    title: "更多音乐"
                }
            },
        ]
    },
    {
        path: "/music-play/:songId",
        name: "musicPlay",
        component: () => import('../views/MusicPlay/MusicPlay.vue'),
        meta: {
            title: "歌曲播放"
        }
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // 懒加载的路由配置方式
    //     component: () => import('../views/About.vue')
    // }
]

const router = new VueRouter({
    // 配置路由的模式
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
