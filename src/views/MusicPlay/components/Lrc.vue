<template>
    <div class="lrc-container">
        <ul>
            <li v-for="(item,index) in lrcContent" :key="index">{{item.content}}</li>
        </ul>
    </div>
</template>

<script>
    // 对于歌词组件来说，需要一个参数的，这个参数就是歌词的地址
    import {getLrc} from "../../../api/music-api";

    export default {
        name: "Lrc",
        props: {
            lrcLink: String
        },
        data() {
            return {
                lrcContent: []
            }
        },
        created() {
            // this.lrcLink
            console.log(this.lrcLink)
            getLrc(this.lrcLink).then(res => {
                const lrcContent = res.content.split("\n");

                // 判断一下我们这个字符串有没有时间
                let reg = /\[\d*:\d*\.\d*\]/g;
                if (!res.content.match(reg)) {
                    // 如果没有匹配到时间的话会走这个判断
                    this.lrcContent = lrcContent.map(item => {
                        return {
                            time: -1,
                            content: item
                        }
                    })
                }

                // this.lrcContent = lrcContent;
                // {time:时间, content:"歌词内容"}
                lrcContent.forEach(item => {
                    let content = item.match(reg);
                    // match
                    if (content) {
                        // 匹配到了内容，在这个时候再做后续的处理
                        content.forEach(timeItem => {
                            console.log(item)
                            // [00:04.000]
                            // 这里的item就是我们时间的前缀
                            // 获取时间的分钟数
                            // [00
                            // 00
                            let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ""));
                            let sec = Number(timeItem.match(/:\d*/)[0].replace(":", ""));
                            // 最终的秒数
                            let time = min * 60 + sec;
                            let contentStr = item.replace(reg, "");
                            this.lrcContent.push({
                                time,
                                content: contentStr
                            })
                        })
                    }
                })
            })
        },
        watch: {
            // lrcLink(){
            //     if (this.lrcLink){
            //         console.log(this.lrcLink)
            //     }
            // }
        }
    }
</script>

<style scoped lang="less">
    .lrc-container {
        height: 150px;
        margin-bottom: 30px;

        ul {
            height: 100%;
            overflow: scroll;
            text-align: center;
        }
    }
</style>
