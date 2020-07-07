<template>
    <div class="music-play-header-container">
        <router-link to="/index">
            <van-icon name="wap-home-o" color="red" />
        </router-link>
        <div>
            {{title}}
        </div>
        <router-link to="/index/search">
            <van-icon name="search" />
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="less">
    .music-play-header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        i {
            font-size: 30px;
        }

        div {
            font-size: 18px;
        }
    }
</style>

