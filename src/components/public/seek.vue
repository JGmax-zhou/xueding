<template>
  <div class="seekContent">
    <div class="seekWrap">
      <van-search class="seek" placeholder="请输入班号、课程或地点" />
      <span @click="goback">取消</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
      console.log(1);
    },
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
    .van-field__body > input {//搜索框背景色
      background: #eee;
      /* color: #000; */
    }

    .van-search__content {//搜索框背景色
      background: #eee;
      border-radius: 3px;
    }
  }
}
</style>