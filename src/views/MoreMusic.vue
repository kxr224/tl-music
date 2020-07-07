<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div v-for="item in list" :key="item.song_id">
                    <!--图片-->
                    <div>
                        <img :src="item.pic_big" alt="">
                    </div>
                    <!--名字-->
                    <p>{{item.title}}</p>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "MoreMusic",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                offset: 0
            }
        },
        created() {
        },
        methods: {
            // 触底加载更多的时候会执行
            onLoad() {
                // 在这里，我们可以加载更多的数据
                getBillList(this.$route.params.type, 10, this.offset).then(res => {
                    // 加载到数据之后，应该告诉这个组件，我们加载完了
                    this.list = this.list.concat(res.list);
                    this.loading = false;
                    this.refreshing = false;
                })
                this.offset += 10;
            },
            // 下拉刷新的时候会执行
            onRefresh() {
                this.list = [];
                this.offset = 0;
                this.onLoad();
            },
        },
    }
</script>

<style scoped>

</style>
