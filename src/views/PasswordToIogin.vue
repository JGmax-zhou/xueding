<template>
  <div class="login">
    <div class="login-x">
      <img src="../assets/icon/icon_31.png" alt @click="onClickX" />
      <p @click="register">注册</p>
    </div>
    <h2>密码登录</h2>
    <section>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="phone" type="tel" placeholder="请输入手机号或账号" />
      <!-- 输入密码 -->
      <van-field v-model="password" placeholder="请输入密码" />
    </section>

    <div class="login-button">
      <p @click="login">登录</p>
    </div>
  </div>
</template>

<script>
import { getPasswordToIogin } from "../utils/api";
export default {
  data() {
    return {
      password: "",
      phone: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    login() {
      this.$router.push("/index");
    },
    register() {
      this.$router.push("/register");
    },
    onClickX() {
      this.$router.go(-1);
    },
    async login() {
      // const resul =  getPasswordToIogin({
      //   phone: this.phone,
      //   password: this.password,
      // });
      let resul = ''
      getPasswordToIogin({
        phone: this.phone,
        password: this.password,
      }).then((res) => {
        resul = res;
        console.log(111);
        localStorage.setItem("msg", resul.msg);
        this.$router.replace("/index");
      })
      
    },
  },
};
</script>
<style lang='scss' scoped>
.login {
  // background: red;
  .login-x {
    display: flex;
    justify-content: space-between;
    height: 50px;
    // background: pink;
    line-height: 50px;
    margin-left: 21px;
    margin-bottom: 39px;
    p {
      margin-right: 20px;
      color: #999999;
      font-size: 13px;
    }
    img {
      margin-top: 30px;
      height: 14px;
      width: 14px;
    }
  }
  h2 {
    font-size: 20px;
    color: #333333;
    margin-left: 20px;
    margin-bottom: 48px;
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
  .van-field__body > input {
    background: #f8f8f8;
  }
}
</style>
