<template>
  <header class="headerWrap">
    <!-- 学历选择 -->
    <div class="grade" @click="gradeDow">{{DQgrade || "年级"}}</div>
    <!-- 遮罩 -->
    <div class="shade" @click="gradenone" v-if="grade"></div>
    <!-- 学历下拉 -->
    <div class="XLXLcontent" v-if="grade">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(value,index) in XLXL" :key="index" :title="value.tit" />
      </van-sidebar>
      <!-- 年级 -->
      <ul>
        <li v-for="(value,index) in XLXL[activeKey].grade" :key="index" @click="DQgradeXG(value)">{{value}}</li>
      </ul>
    </div>
    <!-- 搜索框 -->
    <van-search @click="seekDow" placeholder="搜索课程" />
    <!-- 菜单弹出层 -->
    <!-- <img v-if="menu" src="../../assets/icon/icon_21.png" alt=""> -->
    <van-cell class="menu" @click="showPopup">
      <img v-if="menu" src="../../assets/icon/icon_21.png" alt />
    </van-cell>
    <van-popup round class="popupMenu" v-model="show" position="bottom" :style="{ height: '60%' }">
      <h2 class="classAll">全部分类</h2>
      <span class="hint">点击下列分类进入</span>
      <ul class="classList">
        <li
          class="van-hairline--surround"
          v-for="(value,index) in indexTab"
          :key="index+10"
          @click="classDow(index)"
        >{{value}}</li>
      </ul>
    </van-popup>

    <!-- 后退箭头 -->
    <div class="back" v-if="hasback" @click="indexback">&lt;</div>
  </header>
</template>

<script>
// import { mapState } from "vuex"; //引入vuex辅助函数
import { createNamespacedHelpers } from 'vuex' //引入vuex辅助函数
const { mapState,mapMutations,mapActions } = createNamespacedHelpers('indexHome') //引入vuex辅助函数
export default {
  props: { hasback: Boolean, menu: Boolean },
  data() {
    return {
      show: false,
      activeKey: 0, //学历下拉索引
      grade: false, //学历下拉是否显示
      // DQgrade:''//当前显示年级
    };
  },

  components: {},

  computed: {
    ...mapState([
      "indexTab", //首页导航栏动画效果控制
      "XLXL", //学历下拉
      "DQgrade",//当前显示年级
    ]),
  },

  mounted() {
    // this.$emit('classPressed',1)
  },

  methods: {
     ...mapMutations([
       'DQgradeXGS'
     ]),
     ...mapActions([
       'changeit'
     ]),
    indexback() {
      //返回上一页
      this.$router.go(-1);
    },
    seekDow() {
      //搜索框路由搜索页
      this.$router.push("/seek");
      // console.log(1);
    },
    showPopup() {
      //菜单弹出层
      this.show = true;
    },
    classDow(title) {
      this.show = false;
      this.changeit(title);
      // console.log(1);
    },
    gradeDow() {
      //学历下拉
      this.grade = true;
    },
    gradenone(){//单击遮罩取消下拉框
      this.grade = false;
    },
    DQgradeXG(value){//修改vue显示当前年级
      this.DQgradeXGS(value);
      this.grade = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.headerWrap {
  //头部搜索部分外框
  width: 100%;
  display: flex;
  padding-top: 15px;
  justify-content: space-around;
  background: #fff;
  .grade {
    //学历
    height: 40px;
    width: 50px;
    font-size: 15px;
    margin-left: 40px;
    line-height: 26px;
    padding-right: 20px;
    background: url(../../assets/icon/icon_20.png) no-repeat 35px 12px;
   overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
  }
  // 学历下拉
  .XLXLcontent {
    z-index: 200;
    position: absolute;
    left: 0px;
    top: 50px;
    width: 100%;
    height: 500px;
    background: #eff1f2;
    display: flex;
    // display: none;//暂时隐藏
    .van-sidebar {
      height: 100%;
      background: #fff;
      .van-sidebar-item--select::before {
        background: linear-gradient(to left, #4966f5, #0798ff);
        height: 100%;
      }
      .van-sidebar-item {
        background: #fff;
      }
      .van-sidebar-item--select {
        color: #0798ff;
      }
    }

    //详细地址
    ul {
      // width:100% ;
      flex: 1;
      padding-left: 20px;
      // padding-top: 20px;
      li {
        font-size: 13px;
        // margin-bottom: 20px;
        height: 60px;
        line-height: 60px;
      }
    }
  }
  //遮罩
  .shade {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 199;
    top: 15%;
    bottom: 0;
    left: 0;
    right: 0;
    // display: none;//暂时隐藏
  }
  .menu {
    //搜索框右侧按钮
    width: 27px;
    height: 28px;
    margin-top: 5px;
    margin-right: 10px;
    padding: 0px;
    img {
      width: 27px;
      height: 18px;
    }
  }
  .popupMenu {
    //弹出层菜单
    display: flex;
    flex-direction: column;
    align-items: center;
    .classAll {
      //全部分类
      font-size: 17px;
      color: #333;
      margin-top: 22px;
    }
    .hint {
      //提示
      font-size: 12px;
      color: #666;
      margin-top: 10px;
    }
    .classList {
      //分类列表
      width: 100%;
      margin-top: 35px;
      display: flex;
      flex-wrap: wrap;
      li {
        //分类项
        height: 33px;
        width: 78px;
        font-size: 12px;
        line-height: 33px;
        text-align: center;
        color: #666;
        // border: #979797 1px solid;
        border-radius: 26px;
        margin-left: 30px;
        margin-bottom: 14px;
        &::after {
          border-radius: 26px;
          color: #979797;
        }
      }
    }
  }
  .back {
    position: absolute;
    left: 10px;
    top: 12px;
    // display: none;
  }
}
</style>

