<template>
  <div class="indexContainer">
    <!-- 广告图 -->
    <img class="banner" src="../assets/images/img_02.png" alt />
    <!-- 宫格、金刚区 -->
    <van-grid icon-size="50px" :border="false">
      <van-grid-item
        v-for="(value,index) in KongKimNav "
        :key="index"
        :icon="value.img"
        :text="value.tit"
        @click="SeleCourse(index)"
      />
    </van-grid>
    <!-- 名师人气榜 -->
    <h2>名师人气榜</h2>
    <van-grid class="popularity" :border="false" :column-num="3">
      <!-- 教师 -->
      <van-grid-item
        v-for="(value,index) in popularityTeacher"
        :key="index"
        @click="teacherPage(value.id)"
      >
        <van-image :src="value.images" />
        <p class="teacherName">{{value.name}}</p>
        <span class="educationBg">{{value.info}}</span>
      </van-grid-item>
    </van-grid>
    <!-- 数学人气名师带你拿高分 -->
    <indexMathHeacher />
    <!-- 视频推荐 -->
    <van-grid class="video" :border="false" :column-num="video.length">
      <van-grid-item class="videoItem" v-for="(value,index) in video" :key="index">
        <van-image class="videoImg" :src="value.img" />
        <h3 class="videoTit">{{value.tit}}</h3>
        <p class="videoIntroduce">{{value.introduce}}</p>
      </van-grid-item>
    </van-grid>
    <!-- 暑假班 -->
    <h2>暑假班</h2>
    <!-- 暑假班商品渲染 -->
    <commodityCard />
    <h2>秋季班</h2>
    <!-- 秋季班商品渲染 -->
    <commodityCard />
  </div>
</template>

<script>
import indexMathHeacher from "../components/index/index-MathHeacher"; //数学人气名师部分
import commodityCard from "../components/public/icommodityCard";
import "../assets/style/index.css"; //首页组件css修改文件
import icon09 from "../assets/icon/icon_09.png"; //导航金刚区图片
import icon10 from "../assets/icon/icon_10.png"; //导航金刚区图片
import icon11 from "../assets/icon/icon_11.png"; //导航金刚区图片
import icon12 from "../assets/icon/icon_12.png"; //导航金刚区图片
import icon13 from "../assets/icon/icon_13.png"; //名师榜
import icon14 from "../assets/icon/icon_14.png"; //名师榜
import icon15 from "../assets/icon/icon_15.png"; //名师榜
import img05 from "../assets/images/img_05.png"; //视频
import img04 from "../assets/images/img_04.png"; //视频

import { createNamespacedHelpers } from "vuex"; //引入vuex辅助函数
const { mapState, mapActions } = createNamespacedHelpers(
  "indexHome"
); //引入vuex辅助函数

export default {
  data() {
    return {
      KongKimNav: [
        {
          img: icon09,
          tit: "选课",
        },
        {
          img: icon10,
          tit: "在线课程",
        },
        {
          img: icon11,
          tit: "一对一",
        },
        {
          img: icon12,
          tit: "我的课程",
        },
      ],
      // popularityTeacher: [
      //   {
      //     img: icon13,
      //     name: "杨老师",
      //     eb: "浙江大学研究生",
      //   },
      //   {
      //     img: icon14,
      //     name: "杨老师",
      //     eb: "浙江大学研究生",
      //   },
      //   {
      //     img: icon15,
      //     name: "杨老师",
      //     eb: "浙江大学研究生",
      //   },
      // ],
      video: [
        {
          img: img05,
          tit: "【领跑高一】小飞老师啦啦啦啦啦啦啦",
          introduce: "教你高中物理怎么学",
        },
        {
          img: img04,
          tit: "【领跑高一】李老师啦啦啦啦啦啦啦",
          introduce: "教你高中物理怎么学",
        },
      ],
    };
  },

  components: {
    indexMathHeacher,
    commodityCard,
  },

  computed: {
    ...mapState(['popularityTeacher'])//首页名师人气榜数据请求
  },

   mounted() {
    this.getPopularityTeacher()
  },

  methods: {
    ...mapActions([
      'getPopularityTeacher',//首页名师人气榜数据请求
      ]),
    SeleCourse(id) {
      this.$router.push("/index-SeleCourse/" + id);
    },
    teacherPage(id) {
      //跳转教师详情页
      this.$router.push("/details-teacher/" + id);
    },
  },
};
</script>
<style lang="scss" scoped>
.indexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: red;
  margin-bottom: 50px;
  .banner {
    width: 355px;
    height: 139px;
    margin-top: 6px;
  }
  h2 {
    width: 100%;
    font-size: 17px;
    text-indent: 20px;
    margin-top: 10px;
  }
  .popularity {
    .teacherName {
      color: #666666;
      font-size: 14px;
      margin-top: 5px;
    }
    .educationBg {
      color: #999;
      font-size: 10px;
      margin-top: 5px;
    }
  }
  // 视频板块
  .video {
    padding: 0px 5px 0px 5px;
    display: flex;
    margin-top: 5px;
    // flex-direction: column;
    .videoItem {
      display: flex;
      flex-direction: column;
      .videoImg {
        width: 165px;
        height: 95px;
      }
      // 视频标题
      .videoTit {
        font-size: 15px;
        color: #333;
        font-family: "苹方-简 中黑体";
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
      // 视频介绍
      .videoIntroduce {
        font-size: 12px;
        font-family: "苹方-简 中黑体";
        color: #666666;
        width: 130px;
        margin-top: 5px;
      }
    }
  }
}
</style>


