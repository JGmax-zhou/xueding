<template>
  <div id="paySuccess">
    <!-- 支付成功页面 -->
    <div class="pay">
      <div class="gou">√</div>支付成功
      <div class="back" @click="backIndex">返回首页</div>
    </div>
        <!-- 标题部分 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="推荐课程" />
    </van-sidebar>
    <Coursegoods />
  </div>
</template>

<script>
import Coursegoods from '../components/Coursegoods'
export default {
  data() {
    return {
      activeKey: 0,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    backIndex() {
      this.$router.push("/index");
    },
  },
  components:{
      Coursegoods
  },
  beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      if(localStorage.getItem('token')){
          next();
      }else{
          next('login');
      }        
  }
};
</script>
<style lang='scss' scoped>
#paySuccess {
  padding: 0px 10px;
  .pay {
    height: 200px;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-size: 20px;
    position: relative;
    .gou {
      width: 28px;
      height: 28px;
      border: 1px solid #333333;
      border-radius: 50%;
      line-height: 28px;
      text-align: center;
      margin-right: 16px;
    }
    .back {
      font-size: 14px;
      position: absolute;
      right: 10px;
      top: 30px;
      color: #666666;
    }
  }
  .van-sidebar {
    width: 100px;
    .van-sidebar-item {
      font-size: 18px;
      font-family: "苹方-简中黑体";
      font-weight: 600;
    }
    .van-sidebar-item--select::before {
      width: 10px;
      height: 20px;
      border-radius: 2px;
      background: #4966f5;
    }
  }
}
</style>
