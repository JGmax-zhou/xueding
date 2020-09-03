<template>
  <div class="seleCourse">
    <!-- 首页头部搜索栏 -->
    <indexHeader class="headerSeek" :hasback="true" :menu="false"/>
    <!-- 校区、学科、上课形式 -->
    <indexRegion />
  </div>
</template>
<script>
import indexHeader from "../components/index/index-header"; //首页头部组件
import indexRegion from "../components/index/index-region"; //地区、学科、上课形式下拉
import "../assets/style/index.css"; //首页组件css修改文件
export default {
  data() {
    return {
      show: false,
      arr: ["校区", "学科", "上课形式"],
    };
  },
  components: {
    indexHeader,
    indexRegion,
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  mounted() {
    // console.log(1)
    console.log(this.$route)
  },
};
</script>
<style lang="scss" scoped>
.seleCourse {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .headerSeek{
    position: sticky;
    top: 0px;
    background: #fff;
    z-index: 9999;
  }
}
</style>