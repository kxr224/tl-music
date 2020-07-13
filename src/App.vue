<template>
    <div id="app">
        <transition >
            <router-view />
        </transition>
    </div>
</template>

<script>
    export default {
        watch: {
            $route() {
                if (this.$route.meta.title) {
                    document.title = this.$route.meta.title;
                } else {
                    document.title = "天亮音乐"
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .v-enter {
        transform: translateX(50%);
    }
    .v-enter-active {
        transition: all 1s ease;
    }
</style>
