<template>
<div class="grid">
    <div class="wrap-grid">
        <router-link v-for="(item,index) in boxName" :key="index" :to="item.hash" tag="div">

            <img :src="item.imgsrc" alt="">
        </router-link>
    </div>
</div>
</template>

<script>
import img1 from "@/assets/images/sc.png"
import img2 from "@/assets/images/kh.png"
import img3 from "@/assets/images/sz.png"
import img4 from "@/assets/images/hf.png"
import img5 from "@/assets/images/mineclass.png"
import img6 from "@/assets/images/message.png"
export default {
    data() {
        return {

            boxName: [{
                imgsrc: img1,
                hash: '/colect',
                optionName: '我的收藏'
            }, {
                imgsrc: img2,
                hash: '',
                optionName: '课后任务'
            }, {
                imgsrc: img3,
                hash: '/setup',
                optionName: '设置'
            }, {
                imgsrc: img4,
                hash: '/livelesson',
                optionName: '直播课回访'
            }, {
                imgsrc: img5,
                hash: '/myLesson',
                optionName: '我的课程'
            }, {
                imgsrc: img6,
                hash: '',
                optionName: '消息提醒'
            }],
        }
    }
}
</script>

<style lang="scss">
.wrap-grid {
    width: 335px;
    height: 215px;
    margin-top: 55px;
    margin-left: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    div {
        width: 100px;
        height: 100px;
        font-size: 14px;

        img {
            width: 100%;
            height: 100px;
        }
    }
}
</style>
