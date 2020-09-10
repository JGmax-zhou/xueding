<template>
  <div class="indexContainer">
    <!-- 首页头部搜索栏 -->
    <indexHeader :hasback="false" :menu="true" />
    <!-- tab导航栏 -->
    <van-tabs v-model="active" color="#4966F5" @change="dowNav" swipeable :animated="animated">
      <van-tab v-for="(value,index) in indexTab" :key="index" :title="value.name">
        <router-view :navList="value.name"></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import indexHeader from "../components/index/index-header"; //首页头部组件
import "../assets/style/index.css"; //首页组件css修改文件
import { createNamespacedHelpers } from "vuex"; //引入vuex辅助函数
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "indexHome"
); //引入vuex辅助函数

// import { getIndex } from "../utils/api";

export default {
  data() {
    return {
      indexs: 0,
      // backtrack:false
    };
  },

  components: {
    indexHeader,
  },

  computed: {
    ...mapState([
      "animated",
      "indexTab", //首页导航栏动画效果控制
    ]),
    active: {
      get() {
        return this.$store.state.indexHome.navIndex;
      },
      set(val) {
        // this.$store.dispatch('changeit',val)
        this.changeit(val);
      },
    },
  },
  mounted() {
    this.active = sessionStorage.getItem("nav")
      ? +sessionStorage.getItem("nav")
      : 0; //导航栏样式控制
    this.getAnimated(); //首页导航栏动画效果控制
    this.getIndexNav();//首页数据请求
  },

  methods: {
    ...mapMutations(["getAnimated", "cancelAnimated"]),
    ...mapActions([
      "changeit",
      "getIndexNav", //首页数据请求
    ]),
    dowNav(title) {
      if (title == 0) {
        //路由首页精选页
        this.$router.push("/index/index-choiceness/" + title);
        window.sessionStorage.setItem("nav", title);
        this.index = title;
      } else {
        //路由首页"精选", "数学", "语文", "英语", "化学", "物理", "生物"页
        this.$router.push("/index/index-nav/" + title);
        window.sessionStorage.setItem("nav", title);
        this.index = title;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    //首页导航栏动画效果控制
    // this.$store.commit("indexHome/cancelAnimated");
    this.cancelAnimated();
    next();
  },
};
</script>
<style lang="scss" scoped>
.indexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: red;
}
</style>


