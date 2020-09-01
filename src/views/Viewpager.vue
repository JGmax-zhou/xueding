<template>
  <div class="viewpager">
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="#4966F5" :loop="false" :show-indicators="i === 0 || i === 1" @change="aa">
      <van-swipe-item v-for="(item,index) in imgArr" :key="index" >
        <img :src="item.img" alt />
         <p v-if="item.id ==3 ? true:false" @click="toIndex">直接进入</p>
        <span v-if="item.id==3 ? true:false" @click="toLogin">注册/登录</span>
      </van-swipe-item>
    </van-swipe>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        {
          img: "http://localhost:8080/img/img_32.0b272276.png",
          id: "1",
        },
        {
          img: "http://localhost:8080/img/img_33.888e0061.png",
          id: "2",
        },
        {
          img: "http://localhost:8080/img/img_34.03e5277d.png",
          id: "3",
        },
      ],
      i: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      aa(index) {
          this.i = index
      },
      toIndex(){
          this.$router.push('/index')
      },
       toLogin(){
          this.$router.push('/login')
      }
  }, 
};
</script>
<style lang='scss'>
.viewpager {
  height: 100%;
  // background: red;
  .my-swipe {
    .van-swipe-item {
      height: 100%;
      img {
        height: 663px;
      }
    }
  }
  .van-swipe__indicators {
    bottom: 80px;
  }
  .van-swipe__indicator {
    background-color: #d8d8d8;
  }
  p {
    position: absolute;
    top: 50px;
    right: 30px;
    font-size: 13px;
    color: #999999;
  }
  span {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    color: #333333;
    width: 92px;
    height: 32px;
    border-radius: 21px;
    border: 1px solid #333333;
    line-height: 32px;
    text-align: center;
  }
}
</style>
