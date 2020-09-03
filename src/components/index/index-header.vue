<template>
    <header class="headerWrap">
      <div class="grade">高一</div>
      <!-- 搜索框 -->
      <van-search  
        @click="seekDow"
        placeholder="搜索课程"
        />
        <!-- 菜单 -->
      <img v-if="menu" src="../../assets/icon/icon_21.png" alt="">

      <!-- 后退箭头 -->
      <div class="back" v-if="hasback" @click="indexback">&lt;</div> 
    </header>
</template>

<script>

export default {
  props:{hasback:Boolean,menu:Boolean},
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    
  },

  methods: {
   indexback(){//返回上一页
     this.$router.go(-1)
   },
   seekDow(){//搜索框路由搜索页
     this.$router.push("/seek")
     console.log(1);
   }
  }
};
</script>
<style lang="scss" scoped>
      .headerWrap{//头部搜索部分外框
      width: 100%;
        display: flex;
        padding-top: 15px;
        justify-content: space-around;
        background: #fff;
        .grade{//学历
          height: 40px;
          width: 50px;
          font-size: 15px;
          margin-left: 40px;
          line-height: 26px;
          padding-right: 20px;
          background: url(../../assets/icon/icon_20.png) no-repeat 35px 12px;
          // margin-top: 15px;
        }
        img{//搜索框右侧按钮
          width: 27px;
          height: 18px;
          display: block;
          margin-top: 5px;
          margin-right: 10px;
          // visibility: hidden;
        }
        .back{
          position: absolute;
          left: 10px;
          top: 12px;
          // display: none;
        }
      }
</style>

