<template>
    <div class="action">
        <van-icon v-show="!isLike" name="like-o" @click="collect" />
        <van-icon v-show="isLike" name="like" color="red" @click="collect" />
        <a :href="fileLink" download="">
            <van-icon name="down" />
        </a>
    </div>
</template>

<script>
    import {Toast, Dialog} from "vant";

    export default {
        name: "MusicAction",
        data() {
            return {
                isLike: false
            }
        },
        props: {
            fileLink: String
        },
        methods: {
            collect() {
                // 如果已经收藏的话
                if (this.isLike) {
                    // 是否取消收藏
                    Dialog.confirm({
                        title: '是否取消收藏',
                        message: '您确定要取消收藏吗？',
                    })
                        .then(() => {
                            // 当用户点击确认之后，到这里
                            this.isLike = !this.isLike
                        }).catch(() => {
                    });
                } else {
                    // 收藏
                    this.isLike = !this.isLike
                    // 弹出，收藏成功
                    Toast.success('收藏成功');
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .action {
        display: flex;
        justify-content: space-between;
        margin: 20px;

        i {
            font-size: 25px;
        }
    }
</style>
