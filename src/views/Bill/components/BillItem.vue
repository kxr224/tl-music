<template>
    <div class="bill-item-container">
        <!--封面图-->
        <div class="cover">
            <img :src="billboard.pic_s192"
                 alt="">
        </div>
        <!--前三首歌曲-->
        <ul class="bill-list">
            <li v-for="(item,index) in list" :key="item.song_id"><span>{{index + 1}}</span>{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../../../api/music-api";

    export default {
        name: "BillItem",
        props: {
            type: {
                type: [String, Number]
            }
        },
        data() {
            return {
                list: [],
                billboard: {}
            }
        },
        created() {
            getBillList(this.type, 3).then(res => {
                this.list = res.list;
                this.billboard = res.billboard;
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-item-container {
        padding: 5px;
        display: flex;

        .cover {
            @img-height: 100px;
            flex-shrink: 0;
            width: @img-height;
            height: @img-height;

            img {
                height: 100%;
                width: 100%;
            }
        }

        // 榜单列表
        .bill-list {
            padding: 0px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            span {
                color: crimson;
            }
        }
    }
</style>
