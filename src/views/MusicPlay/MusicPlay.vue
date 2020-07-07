<template>
    <div class="music-play-container" :style="{minHeight:height}">
        <div style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"></div>
        <Header :title="songInfo.title"  />
        <div class="cover">
            <img :src="songInfo.pic_huge" alt="">
        </div>
        <Lrc v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink" />
        <MusicAction :file-link="bitrate.file_link" />
        <div style="display: flex;justify-content: center">
            <audio controls :src="bitrate.show_link"></audio>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Lrc from "./components/Lrc";
    import MusicAction from "./components/MusicAction";
    import {getSongInfo} from "../../api/music-api";

    export default {
        name: "MusicPlay",
        components: {
            Header,
            Lrc,
            MusicAction
        },
        data() {
            return {
                height: 0,
                // 歌曲详情
                songInfo: {},
                // 歌曲的媒体信息
                bitrate: {}
            }
        },
        created() {
            this.height = window.innerHeight + "px";
            getSongInfo(this.$route.params.songId).then(res => {
                this.songInfo = res.songinfo;
                this.bitrate = res.bitrate;
            })
        }
    }
</script>

<style scoped lang="less">
    .music-play-container {
        /*background-color: #f5f5f5;*/
    }

    .cover {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;

        img {
            border-radius: 10px;
            width: 55%;
        }
    }
</style>
