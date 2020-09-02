<template>
  <div class="indexContainer">
    <!-- 首页头部搜索栏 -->
    <indexHeader />
    <!-- tab导航栏 -->
    <van-tabs v-model="active" color="#4966F5" @click="dowNav">
      <van-tab v-for="(value,index) in tab" :key="index" :title="value" ></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import indexHeader from "../components/index/index-header"; //首页头部组件
import "../assets/style/index.css"; //首页组件css修改文件
import { getIndex } from "../utils/api";

export default {
  data() {
    return {
      active:0,
      tab: ["精选", "数学", "语文", "英语", "化学", "物理", "生物"],
      indexs:0
    };
  },

  components: {
    indexHeader,
  },

  computed: {
   
  },
   mounted() {
    // const a = await getIndex();
    // console.log(a);
    this.active=sessionStorage.getItem("nav")? +sessionStorage.getItem("nav"):0
  },

  methods: {
    dowNav(title) {
      if (title == 0) {
        this.$router.push("/index/index-choiceness/" + title);
        window.sessionStorage.setItem("nav", title); 
        this.index=title
      }else{
         this.$router.push("/index/index-nav/" + title)
         window.sessionStorage.setItem("nav", title); 
         this.index=title
      }
      
      // if(this.$route.params.id==0 && title!=0){
      //   this.$router.push("/index/index-nav/" + title);
      // }
      // this.$route.params.id=title
      // console.log(this.$route.params.id)
    },
    
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


