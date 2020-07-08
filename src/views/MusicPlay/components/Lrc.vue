<template>
    <div class="lrc-container">
        <ul ref="list">
            <li v-for="(item,index) in lrcContent" @click="setProcess(item.time)" :key="index"
                :class="index==active?'active':''"
            >
                {{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
    // 对于歌词组件来说，需要一个参数的，这个参数就是歌词的地址
    import {getLrc} from "../../../api/music-api";
    import {mapState} from "vuex";

    export default {
        name: "Lrc",
        props: {
            lrcLink: String
        },
        data() {
            return {
                lrcContent: [],
                // 当前激活的歌词
                active: 0,
                noScroll: false,
                timeoutId: null
            }
        },
        computed: {
            ...mapState(["currentTime"])
        },
        created() {
            // this.lrcLink
            console.log(this.lrcLink)
            getLrc(this.lrcLink).then(res => {
                const lrcContent = res.content.replace(/\r/g, '').split("\n");

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
                            if (contentStr) {
                                this.lrcContent.push({
                                    time,
                                    content: contentStr
                                })
                            }
                        })
                    }
                })
            })
        },
        mounted() {
            this.$refs.list.addEventListener("touchstart", () => {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                }
                this.noScroll = true;
            });
            this.$refs.list.addEventListener("touchend", () => {
                this.timeoutId = setTimeout(() => {
                    this.noScroll = false
                }, 2000)
            });
        },
        watch: {
            // lrcLink(){
            //     if (this.lrcLink){
            //         console.log(this.lrcLink)
            //     }
            // }
            currentTime() {
                console.log(this.currentTime)
                // 根据这个时间判断激活的歌词是哪一个

                // 普通for循环
                for (let i = 0; i < this.lrcContent.length; i++) {
                    if (this.lrcContent[i].time > this.currentTime) {
                        if (i > 0) {
                            this.active = i - 1;
                        }
                        // // eslint-disable-next-line
                        // debugger
                        if (!this.noScroll) {
                            this.$refs.list.scrollTop = this.$refs.list.children[this.active].offsetTop - 50;
                        }
                        break;
                    }
                }
            }
        },
        methods: {
            setProcess(time) {
                this.$store.commit("setProcess", {process: time})
            }
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
            // 设置容器为relative这个时候我们这个容器内部子元素的offsetHeight才是该元素到这个容器顶部的距离
            position: relative;

            .active {
                font-size: 18px;
                color: lightcoral;
            }
        }
    }
</style>
