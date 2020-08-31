<template>
  <div>
    <router-view></router-view>

    <!-- 底部tab切换 -->
    <van-tabbar v-model="active">
      <van-tabbar-item 
      :icon="item.icon"
      v-for="(item,index) in tabbarlist"
      :key="index"
      :to='item.to'
      active-color='#4966F5'
      placeholder 
      >
          {{item.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
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
};
</script>

<style lang="scss">
</style>