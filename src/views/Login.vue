<template>
  <div class="login">
    <div class="login-x">
      <img src="../assets/icon/icon_31.png" alt @click="onClickX" />
    </div>
    <h2>验证码登录</h2>
    <p>新用户登录后将自动创建账号</p>

    <section>
      <van-cell-group>
        <van-field v-model="phone" center clearable label="+86" placeholder="请输入手机号">
          <template #button>
            <van-button size="small" type="primary" @click="getPhonCode">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
    </section>

    <section>
      <van-field v-model="code" label="短信验证码" placeholder="请输入短信验证码" />
    </section>
    <span @click="PasswordToIogin">密码登陆</span>

    <div class="login-button">
      <p @click="loginToIndex">登录</p>
    </div>
  </div>
</template>

<script>
import { getPhoneCode ,getYZMlogin } from "../utils/api";
export default {
  data() {
    return {
      phone: "",
      templateId: "",
      code: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    PasswordToIogin() {
      this.$router.push("/PasswordToIogin");
    },
    async loginToIndex(){
      // this.$router.push("/index");
         const result = await getYZMlogin({
          phone: this.phone,
          code:this.code
     })
     console.log(111);
     localStorage.setItem("msg",result.msg)
     this.$router.replace('/index')

    },
    onClickX() {
      this.$router.go(-1);
    },
    async getPhonCode() {
      const result = getPhoneCode({
        phone: this.phone,
        // templateId: "537707",
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.login {
  // background: red;
  .login-x {
    height: 50px;
    // background: pink;
    line-height: 50px;
    margin-left: 21px;
    margin-bottom: 39px;
    img {
      height: 14px;
      width: 14px;
    }
  }
  h2 {
    font-size: 20px;
    color: #333333;
    margin-left: 20px;
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
  .van-cell-group {
    background: none;
  }
  span {
    font-size: 12px;
    color: #333333;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
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
  .van-button__text {
    text-align: center;
    margin-right: 0;
  }
  .van-button {
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
  }
  .van-field__body > input {
    background: #f8f8f8;
  }
}
</style>
