<template>
    <div class="index-container">
        <BillList class="bill-list" title="今日榜单" type="2" />
        <BillList title="新歌速递" type="1" :size="3" />
        <Swiper />
        <MusicBill class="bill-list" />
        <BillList title="热门歌单" type="24" />
    </div>
</template>

<script>
    import BillList from "../components/BillList";
    import MusicBill from "../components/MusicBill";
    import Swiper from "../components/Swiper";

    export default {
        name: "Index",
        components: {
            BillList,
            MusicBill,
            Swiper
        }
    }
</script>

<style scoped lang="less">
    .index-container {
        background-color: #f5f5f5;
    }

    .bill-list {
        margin-bottom: 10px;
    }
</style>
