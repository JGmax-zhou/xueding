<template>
  <div>
    <router-view></router-view>

    <!-- 底部tab切换 -->
    <van-tabbar v-model="active" @change="changebutton">
      <van-tabbar-item
        :icon="item.icon"
        v-for="(item,index) in tabbarlist"
        :key="index"
        :to="item.to"
        active-color="#4966F5"
        placeholder
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
    <car />
  </div>
</template>
<script>
import car from '../components/car'
export default {
  data() {
    return {
      active: 0,
      index: "",
      tabbarlist: [
        {
          title: "首页",
          to: "/index/",
          icon: "home-o",
        },
        {
          title: "课堂",
          to: "/classroom/",
          icon: "bookmark-o",
        },
        {
          title: "发现",
          to: "/find/",
          icon: "underway-o",
        },
        {
          title: "我的",
          to: "/mine/",
          icon: "contact",
        },
      ],
    };
  },
  mounted() {
    //获取sessionstorage里面的值 如果存在让active=该索引
    if (sessionStorage.getItem("homeIndex")) {
      this.active = +sessionStorage.getItem("homeIndex");
    }
  },
  methods: {
    // 当按钮改变,将值存到sessionstorage
    changebutton() {
      sessionStorage.setItem("homeIndex", this.active);
    },
  },
  components:{
    car
  }
};
</script>

<style lang="scss">
</style>