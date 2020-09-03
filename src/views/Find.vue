<template>
  <div class="find-hender">
    <!-- 头部 -->
    <van-nav-bar title="发现" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
          <img src="../assets/images/img_29.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/images/img_23.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="https://file.xdf.cn/new_www//20200813/op_5f3526ae7ed3b.jpeg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="https://file.xdf.cn/new_www//20190513/op_5cd9154aa349c.jpeg" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 头部下图片 -->
    <section class="find-main">
      <!-- <div class="main-img">
            <img src="../assets/images/img_29.png" alt="">
      </div>-->
      <!-- 新闻版块 -->
      <div class="find-news">
        <div class="find-news-title">
          <h2>新闻</h2>
        </div>
        <!-- 一 -->
        <div class="find-news-main">
          <div class="news-main-left">
            <h3>决定孩子一生的不是成绩,而是这些事!</h3>
            <div class="news-left-bottom">
              <span>10问题包</span>
              <span>已更新4期</span>
            </div>
          </div>
          <div class="news-main-right">
            <div class="main-right-img">
              <img src="../assets/images/img_27.png" alt />
            </div>
          </div>
        </div>
        <!-- 二 -->
        <div class="find-news-main">
          <div class="news-main-left">
            <h3>高中物理,想要提高成绩,这几种方法一定要试试。</h3>
            <div class="news-left-bottom">
              <span>10人际关系</span>
              <span>已更新4期</span>
            </div>
          </div>
          <div class="news-main-right">
            <div class="main-right-img">
              <img src="../assets/images/img_27.png" alt />
            </div>
          </div>
        </div>
        <!-- 三 -->
        <div class="find-news-main">
          <div class="news-main-left">
            <h3>父亲在家庭教育中的重要性。</h3>
            <div class="news-left-bottom">
              <span>10家庭关系</span>
              <span>已更新4期</span>
            </div>
          </div>
          <div class="news-main-right">
            <div class="main-right-img">
              <img src="../assets/images/img_27.png" alt />
            </div>
          </div>
        </div>
        <!-- 四 -->
        <div class="find-news-main">
          <div class="news-main-left">
            <h3>学霸和普通孩子的4个区别,你家孩子是那种？</h3>
            <div class="news-left-bottom">
              <span>10关系培养</span>
              <span>已更新4期</span>
            </div>
          </div>
          <div class="news-main-right">
            <div class="main-right-img">
              <img src="../assets/images/img_27.png" alt />
            </div>
          </div>
        </div>

        <!-- 视频模块 -->
        <div class="find-news-title">
          <h2>视频</h2>
        </div>

        <!-- 一 -->
        <div class="find-news-title-video">
          <img src="../assets/images/img_23.png" alt />
        </div>

        <div class="find-news-title-video-bottom">
          <div class="video-bottom-left">
            <span>数学教堂</span>
          </div>
          <div class="video-bottom-right">
            <div class="bottom-right">
              <img src="../assets/icon/icon_25.png" alt />
              <span>6</span>
            </div>
            <div class="bottom-right">
              <img src="../assets/icon/icon_26.png" alt />
              <span>7</span>
            </div>
          </div>
        </div>
        <!-- 二 -->
        <div class="find-news-title-video">
          <img src="../assets/images/img_23.png" alt />
        </div>

        <div class="find-news-title-video-bottom">
          <div class="video-bottom-left">
            <span>英语代词复习</span>
          </div>
          <div class="video-bottom-right">
            <div class="bottom-right">
              <img src="../assets/icon/icon_25.png" alt />
              <span>6</span>
            </div>
            <div class="bottom-right">
              <img src="../assets/icon/icon_26.png" alt />
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.find-main{
    margin-bottom: 50px;
}
.main-img {
  width: 100%;
  height: 175px;
}
.my-swipe .van-swipe-item {
    height: 175px;
//   color: #fff;
//   font-size: 20px;
//   line-height: 150px;
//   text-align: center;
//   background-color: #39a9ed;
}
.my-swipe img{
    height: 100%;
    width: 100%;
}
.find-news {
  .find-news-title {
    height: 60px;
    // background: red;
    h2 {
      font-size: 17px;
      line-height: 60px;
      margin-left: 20.5px;
    }
  }
  .find-news-main {
    height: 110px;
    width: 334px;
    border-bottom: 1px solid #e5e5e5;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .news-main-left {
      width: 210px;
      font-size: 15px;
      line-height: 21px;
      h3 {
        height: 35px;
      }
      .news-left-bottom {
        height: 25px;
        width: 150px;
        margin-top: 40px;
        // background: red;
        span {
          display: inline-block;
          font-size: 7px;
          color: #666666;
          width: 56px;
          height: 20px;
          background: #eeeeee;
          line-height: 20px;
          text-align: center;
          border-radius: 3px;
        }
        span:nth-child(2) {
          margin-left: 8px;
        }
      }
    }
    .news-main-right {
      width: 100px;
      height: 99.5px;
    }
  }
}
.find-news-title-video {
  height: 193px;
  img {
    height: 100%;
    width: 100%;
  }
}
.find-news-title-video-bottom {
  height: 50px;
  // background: red;
  display: flex;
  justify-content: space-between;

  .video-bottom-left {
    font-size: 12px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    margin-left: 20.5px;
  }
  .video-bottom-right {
    // height: 50px;
    width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .bottom-right {
      height: 50px;
      margin-left: 10px;
      span {
        font-size: 10px;
        color: #999999;
        line-height: 50px;
        margin-left: 10px;
      }
      img {
        margin-top: 10px;
      }
    }
  }
}
</style>
