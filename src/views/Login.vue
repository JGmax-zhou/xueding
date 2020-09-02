<template>
  <div class="login">
    <div class="login-x">
      <img src="../assets/icon/icon_31.png" alt  @click="onClickX"/>
    </div>
    <h2>验证码登录</h2>
    <p>新用户登录后将自动创建账号</p>

    <section>
      <van-cell-group>
         <van-field v-model="value" label="+86" placeholder="请输入手机号" />
      </van-cell-group>
    </section>

    <section>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </section>
    <span @click="PasswordToIogin">密码登陆</span>

    <div class="login-button">
      <p @click="login">登录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      sms: "",
     
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
       PasswordToIogin(){
          this.$router.push('/PasswordToIogin')
      },
      login(){
          this.$router.push('/index')
      },
      onClickX(){
          this.$router.go(-1);
      }
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
  .van-cell-group{
    background: none;
  }
  span {
    font-size: 12px;
    color: #333333;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
  }
  .login-button{
    width: 325px;
    height: 41px;
    background: #4966F5;
    border-radius: 20.5px;
    margin-top: 30px;
    margin-left: 25px;
    p{
        font-size: 15px;
        color: #ffffff;
        text-align: center;
        line-height: 41px;
    }
  }
}
</style>
