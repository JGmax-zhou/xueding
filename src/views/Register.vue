<template>
  <div class="login">
    <van-nav-bar left-arrow fixed placeholder :z-index="10" @click-left="onClickLeft"/>
    <h2>注册</h2>

    <section>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" placeholder="请输入手机号或邮箱"/>
      <!-- 输入密码 -->
      <van-field v-model="password" placeholder="请输入您的密码" />
       <van-field v-model="password" placeholder="请再次输入密码" />
    </section>

    <div class="login-button">
      <p @click="login">注册</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      tel: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    login() {
      this.$router.push("/login");
    },
    onClickLeft(){
        this.$router.go(-1);
    }
  },
};
</script>
<style lang='scss'>
.login {
  .van-icon-arrow-left{
      color: #333333;
  }
  h2 {
    font-size: 20px;
    color: #333333;
    margin-left: 20px;
    margin-bottom: 48px;
    margin-top: 39px;

  }
  p {
    font-size: 15px;
    color: #666666;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 50.5px;
  }
  .van-cell {
    margin-bottom: 30px;
    margin-left: 25px;
    border-radius: 20.5px;
    width: 325px;
    height: 41px;
    color: 15px;
    background: #f8f8f8;
  }
  .login-button {
    width: 325px;
    height: 41px;
    background: #4966f5;
    border-radius: 20.5px;
    margin-top: 30px;
    margin-left: 25px;
    p {
      font-size: 15px;
      color: #ffffff;
      text-align: center;
      line-height: 41px;
    }
  }
}
</style>
