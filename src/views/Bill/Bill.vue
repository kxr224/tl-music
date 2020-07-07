<template>
    <div class="bill-container">
        <BillItem v-for="item in billTypeList" :type="item" :key="item" />
    </div>
</template>

<script>
    import BillItem from "./components/BillItem";

    export default {
        name: "Bill",
        components: {
            BillItem
        },
        data() {
            return {
                //1、新歌榜（新歌速递），2、热歌榜(今日榜单)，11、摇滚榜，12、爵士，16、流行，21、欧美金曲榜，22、经典老歌榜，23、情歌对唱榜，24、影视金曲榜（热门歌单），25、网络歌曲榜
                billTypeList: [1, 2, 11,  21, 22, 23, 24]
            }
        }
    }
</script>

<style scoped lang="less">
    .bill-container {
        padding: 10px;
    }
</style>
