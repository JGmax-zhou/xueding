<template>
  <div class="indexRegion">
    <!-- 校区、学科、上课形式 -->
    <ul class="indexRegionWrap">
      <li
        v-for="(value,index) in navlist"
        :key="index"
        @click="navlistdow(index)"
        :class="{liactive:navlistnum==index}"
      >{{value.tit}}</li>
    </ul>
    <!-- 课程列表 -->
    <Coursegoods v-for="(value,index) in 10" :key="index" />
    <!-- 遮罩层 -->
    <div class="shade" v-show="navlistnum!=-1" @click="shadedow"></div>
    <!-- 校区、学科下拉 -->
    <div
      class="XLcontent"
      v-for="(item,indexr) in navlist"
      :key="indexr + 1000"
      v-show="navlistnum==indexr && navlistnum!=2"
    >
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(value,index) in navlist[indexr].sidehead"
          :key="index"
          :title="value.title"
        />
      </van-sidebar>
      <!-- 详细地址 -->
      <ul>
        <li>惠兰雅路丁兰广场教学点</li>
        <li>惠兰雅路丁兰广场教学点</li>
        <li>惠兰雅路丁兰广场教学点</li>
      </ul>
      <!-- 重置、确定按钮 -->
      <div class="butCZ">重置</div>
      <div class="butOK">确定</div>
    </div>
    <!-- 上课形式下拉 -->
    <div class="form" v-show="navlistnum==2">
      <li v-for="(value,index) in navlist[2].sidehead" :key="index">{{value}}</li>
    </div>
  </div>
</template>
<script>
import Coursegoods from "../Coursegoods";
export default {
  data() {
    return {
      activeKey: 0,
      navlist: [
        {
          tit: "校区",
          sidehead: [
            {
              title: "杭州",
              content: ["惠兰雅路丁兰广场教学点", "惠兰雅路丁兰广场教学点2"],
            },
            {
              title: "宁波",
              content: ["惠兰雅路丁兰广场教学点3", "惠兰雅路丁兰广场教学点4"],
            },
            {
              title: "舟山",
              content: ["惠兰雅路丁兰广场教学点5", "惠兰雅路丁兰广场教学点6"],
            },
            {
              title: "嘉兴",
              content: ["惠兰雅路丁兰广场教学点7", "惠兰雅路丁兰广场教学点8"],
            },
            {
              title: "绍兴",
              content: ["惠兰雅路丁兰广场教学点9", "惠兰雅路丁兰广场教学点10"],
            },
          ],
        },
        {
          tit: "学科",
          sidehead: [
            {
              title: "中学辅导",
              content: ["物理", "数学", "化学", "语文", "英语"],
            },
            {
              title: "留学考试",
              content: ["雅思", "托福", "AP", "STA"],
            },
          ],
        },
        {
          tit: "上课形式",
          sidehead: ["全部", "走读", "在线"],
        },
      ],
      navlistnum: -1,
    };
  },
  components: {
    Coursegoods,
  },
  methods: {
    navlistdow(index) {
      this.navlistnum = index;
    },
    shadedow() {
      this.navlistnum = -1;
    },
  },
};
</script>
<style lang="scss" scoped>
.indexRegion {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .indexRegionWrap {
    position: sticky;
    top: 55px;
    padding: 0px 36px;
    // margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #333;
    width: 100%;
    margin-bottom: 10px;
    background: #fff;
    z-index: 10;
    height: 50px;
    li {
      padding-right: 15px;
      background: url(../../assets/icon/icon_20.png) no-repeat right;
    }
    .liactive {
    background: url(../../assets/icon/icon_41.png) no-repeat right;
    color:#0798ff ;
  }
  }
  
  .shade {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    // z-index: 0;
    top: 15%;
    bottom: 0;
    // display: none;//暂时隐藏 
  }
  .XLcontent {
    position: absolute;
    left: 0px;
    top: 40px;
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
    //   重置确定按钮
    .butCZ {
      width: 50%;
      height: 45px;
      background: #fff;
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: #000;
      z-index: 11;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
    }
    .butOK {
      width: 50%;
      height: 45px;
      background: linear-gradient(to left, #4966f5, #0798ff);
      position: absolute;
      bottom: 0px;
      right: 0px;
      color: #fff;
      z-index: 11;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
    }
  }
  .form {
    position: absolute;
    left: 0px;
    top: 40px;
    width: 100%;
    background: #fff;
    li {
      height: 50px;
      font-size: 15px;
      line-height: 50px;
      margin-left: 30px;
    }
  }
}
</style>