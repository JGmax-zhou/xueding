<template>
  <div class="seekContent">
    <div class="seekWrap">
      <van-search class="seek" placeholder="请输入班号、课程或地点" />
      <span @click="goback">取消</span>
    </div>
    <h2>热门搜索</h2>
    <!-- 热门搜索内容列表 -->
    <ul>
      <li v-for="(value,index) in hotSeek" :key="index">{{value}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"; //引入vuex辅助函数
export default {
  methods: {
    goback() {
      this.$router.go(-1);
      console.log(1);
    },
  },
  computed: {
    ...mapState([
      'hotSeek', //首页导航栏动画效果控制
    ]),
  },
};
</script>
<style lang="scss" scoped>
.seekContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  .seekWrap {
    //搜索框外套
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 10px;
    margin-top: 10px;
    .seek {
      //搜索框
      width: 90%;
      //   height: ;
    }
    span {
      //取消按钮
      font-size: 14px;
      margin-right: 5px;
    }
    .van-field__body > input {
      //搜索框背景色
      background: #eee;
      /* color: #000; */
    }

    .van-search__content {
      //搜索框背景色
      background: #eee;
      border-radius: 3px;
    }
  }
  h2 {//热门搜索
    font-size: 15px;
    width: 100%;
    color: #333;
    margin-top: 10px;
    padding-left: 20px;
  }
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{//热门搜索列表内容样式
      height: 21px;
      border-radius: 11px;
      background: #e4e4e4;
      font-size: 11px;
      text-align: center;
      line-height: 21px;
      margin: 15px 0px 0px 15px;
      color: #666;
      padding: 0px 16px;
    }
  }
}
</style>