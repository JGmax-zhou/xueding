<template>
<div class="colect">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" :placeholder="placeholdervalue" />
</div>
</template>

<script>
export default {
    data() {
        return {
            placeholdervalue: true,
        }
    },
    methods: {
        onClickLeft() {
            window.history.back();
        },

    },
}
</script>

<style lang="scss">
.van-nav-bar {
    background: #F8F8F8;

    .van-icon::before {
        color: black;
    }
}
</style>
