<template>
    <div class="bill-list-container">
        <h3>{{title}} <span>更多</span></h3>
        <ul class="bill-list">
            <li v-for="item in songList" :key="item.song_id">
                <img :src="item.pic_big"
                     alt="">
                <div>{{item.title}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    // 数据
    //  标题： String 类型的标题
    //  列表： 请求接口获取到这个数据。 传进来的是type，我们在组件内部根据不同的type请求不同榜单的数据
    //  更多： 依赖于type
    //  个数： size， 数字类型的
    export default {
        name: "BillList",
        props: {
            title: {
                type: String,
                default: "榜单"
            },
            type: {
                type: String
            },
            size: {
                type: Number,
                default: 6
            }
        },
        data(){
          return {
              songList:[]
          }
        },
        created() {
            // 发起接口请求
            this.$http
                .get(`/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}&size=${this.size}&offset=0`).then(res=>{
                this.songList = res.data.song_list;
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-list-container {
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

        // 榜单列表样式
        .bill-list {
            display: flex;
            flex-wrap: wrap;

            li {
                width: calc(100% / 3);
                box-sizing: border-box;
                padding: 5px;

                img {
                    width: 100%;
                }
            }
        }
    }
</style>
