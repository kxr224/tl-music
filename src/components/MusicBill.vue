<template>
    <div class="music-bill-container">
        <h3>音乐榜单 <span>更多</span></h3>
        <van-tabs v-model="active">
            <van-tab title="热歌榜">
                <MusicList class="music-list" />
            </van-tab>
            <van-tab title="新歌榜">
                <MusicList class="music-list" />
            </van-tab>
            <van-tab title="king 榜">
                <MusicList class="music-list" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import MusicList from "./MusicList";

    export default {
        name: "MusicBill",
        data() {
            return {
                active: 2,
            };
        },
        components: {
            MusicList
        }
    }
</script>

<style scoped lang="less">
    .music-bill-container {
        padding: 5px 15px;
        background-color: white;

        h3 {
            margin: 10px 0;

            span {
                float: right;
                font-size: 14px;
                color: #999999;
            }
        }
        .music-list{
            margin-top: 15px;
        }
    }
</style>
