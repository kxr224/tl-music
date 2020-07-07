<template>
    <div class="swiper-container">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <div class="swiper-img"><img src="../assets/img/b1.jpg" alt=""></div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiper-img">
                    <img src="../assets/img/b2.jpg" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiper-img">
                    <img src="../assets/img/b3.jpg" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper"
    }
</script>

<style scoped lang="less">
    .swiper-container{
        padding: 15px;
    }
    .swiper-img {
        img {
            width: 100%;
        }
    }
</style>
