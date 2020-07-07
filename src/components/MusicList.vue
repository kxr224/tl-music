<template>
    <div>
        <ul class="music-list">
            <li v-for="i in 5" :key="i">
                <div class="cover">
                    <img src="http://qukufile2.qianqian.com/data2/pic/8b1aab6be81f10639c01c1401a20463c/675021896/675021896.jpg@s_2,w_150,h_150"
                         alt="">
                </div>
                <div class="intro">
                    <div class="title">标题</div>
                    <div class="desc">描述</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MusicList"
    }
</script>

<style scoped lang="less">
    .music-list {
        li {
            display: flex;
            // 封面图的样式
            .cover {
                width: 65px;
                // 设置它的收缩因子，不让它变形
                flex-shrink: 0;

                img {
                    width: 100%;
                }
            }

            // 介绍的样式
            .intro {
                // 设置扩张因子
                flex-grow: 1;
                padding: 3px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }
    }
</style>
