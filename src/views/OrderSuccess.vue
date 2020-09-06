<template>
    <div class="success-container" >
        <!-- 标题 -->
        <van-nav-bar title="确认订单信息" fixed placeholder z-index="10" left-arrow @click-left="onClickLeft" />
        <!-- 内容 -->
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    }
};
</script>
<style lang='scss' scoped></style>
