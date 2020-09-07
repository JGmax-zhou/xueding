<template>
  <div class="delail_total">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="课程详情页">
      <!-- <template #right>
      </template>-->
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="delail_i">
      <img src="../assets/images/img_23.png" alt />
    </div>
    <!-- 线上内容 -->
    <div class="delail_ATL">
      <span class="delail_span1">线上</span>
      <b class="delail_span2">初三升高一秋季培训班 （小鼎君在线）</b>
      <p class="delail_p1">教材数学本地化,&nbsp;&nbsp; 同步较内, &nbsp;&nbsp;备战高考</p>
      <span class="delail_evaluate">难度</span>

      <van-rate v-model="value" />
      <!-- 线下内容里的小时钟 -->
      <div class="delail_time_one">
        <span class="iconfont icon-shijian00"></span>
        <span class="delail_time">9月4日-12月18日·周五晚上19:00-21:00 | 16次课</span>
      </div>

      <!-- 价格 -->
      <div class="delail_price">
        <span class="delail_price_one">￥1200</span>
        <span class="delail_price_tow">￥1900</span>
        <p class="delail_price_p">增开</p>
      </div>

      <!-- 限时购 -->
      <div class="delail_limit">
        <span class="delail_limit_span">限时购</span>
        <span class="delail_limit_span_one">新高一暑秋限时优惠</span>
      </div>

      <!--  服务 -->
      <div class="delail_serve">
        <b class="delail_serve_o">服务</b>
        <span class="delail_serve_t">自由转班·随时退费·家长旁听·教材教具·学校沟通</span>
      </div>
    </div>
    <!-- 授课老师 -->
    <div class="delail_give">
      <h6 class="delail_give_h6">授课老师</h6>
      <div class="delail_give_div">
        <img src="../assets/images/img_22.png" alt />
        <span>王老师</span>
      </div>
      <div class="delail_give_div">
        <img src="../assets/images/img_26.png" alt />
        <span>贾老师</span>
      </div>
    </div>

    <!-- 课程大纲 -->
    <div class="delail_outline">
      <h6 class="delail_outline_h6">课程大纲</h6>
      <span class="delail_outline_span">16讲</span>
      <!-- 适合对象，培养目标 -->
      <div class="delail_outline_matter">
        <div class="delail_outline_d1">
          <p class="delail_outline_s1">适合对象</p>
          <p class="delail_outline_s2">课内知识掌握不牢固, 期望巩固课内并提升的学员</p>
        </div>
        <div class="delail_outline_d2">
          <p class="delail_outline_s1">培养目标</p>
          <p class="delail_outline_s2">巩固基础, 扩展升级</p>
        </div>
        <hr />
        <!-- 第一讲  诗歌 -->
        <div class="delail_poetry_one">
          <span v-for="item  in  poetry" class="delail_poetry_one_s1">{{item.span}}</span>
          <b v-for="item in  poetry" class="delail_poetry_one_s2">{{item.title}}</b>
          <p v-for="item in  poetry" class="delail_poetry_one_p">{{item.p}}</p>
        </div>
        <div class="delail_poetry_one">
          <span class="delail_poetry_one_s1">第02讲</span>

          <b class="delail_poetry_one_s2">诗歌：鉴赏常考题材之咏物传志</b>
          <p class="delail_poetry_one_p">9月11日 周五19:00-21:00</p>
        </div>
        <div class="delail_poetry_one">
          <span class="delail_poetry_one_s1">第03讲</span>
          <b class="delail_poetry_one_s2">诗歌：常见意向梳理</b>
          <p class="delail_poetry_one_p">9月18日 周五19:00-21:00</p>
        </div>
      </div>
    </div>
    <img class="xqyuImg" src="../assets/images/xiangqingye.png.png" alt />

    <!-- 加入选课按钮 -->
    <div class="delail_button">
      <div class="delail_button_one">
        <span class="iconfont icon-qicheqianlian-"></span>
        <p class="delail_button_one_p">选课单</p>
      </div>
      <div class="delail_button_tow">加入选课</div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      value: 3,
      poetry: [
        {
          span: "第01讲",
          title: "诗歌：常见意向梳理",
          p: "9月4日 周五19:00-21:00",
        },
        // {
        //   span: "第02讲",
        //   title: "诗歌：鉴赏常考题材之咏物传志",
        //   p1: "9月11日 周五19:00-21:00",
        // },
        // {
        //   span: "第03讲",
        //   title: "诗歌：常见意向梳理",
        //   p: "9月18日 周五19:00-21:00",
        // },
      ],
    };
  },
};
</script>




<style lang="scss" scopde >
@import "../assets/style/reset.scss";

$width: 375px;
$color: #666666;
$b-color: #f8f8f8;

.delail_total {
  width: 375px;
  // 轮播图
  .delail_i {
    width: $width;
    height: 165px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  //  线上内容
  .delail_ATL {
    width: $width;
    height: 310px;
    background: #ffff;
    padding: 15px 30px 14px 20px;
    // background: red;
    .delail_span1 {
      width: 24px;
      height: 16.5px;
      background: green;
      font-size: 12px;
      color: #ffffff;
      margin-right: 3px;
      // margin-top: 5px;
    }
    .delail_span2 {
      font-size: 17px;
      color: #333333;
    }
    .delail_p1 {
      font-size: 13px;
      color: $color;
      margin-top: 4px;
    }
    //难度ma
    .delail_evaluate {
      font-size: 13px;
      color: $color;
      margin-right: 4px;
    }
    .van-rate__icon {
      font-size: 0.3rem;
      color: #4966f5;
    }
    //  线下内容里的小时钟
    .delail_time_one {
      .icon-shijian00 {
        font-size: 16px;
        color: #979797;
      }
      .delail_time {
        font-size: 13px;
        color: $color;
        margin-left: 4px;
      }
    }

    // 价格
    .delail_price {
      margin-top: 20px;
      .delail_price_one {
        color: #fa6400;
        font-size: 17px;
      }
      .delail_price_tow {
        text-decoration: line-through;
        font-size: 13px;
        color: #888888;
        margin-left: 9px;
      }
      .delail_price_p {
        font-size: 11px;
        color: $color;
        margin-top: 5px;
      }
    }

    // 限时购
    .delail_limit {
      display: flex;
      margin-top: 30px;
      .delail_limit_span {
        width: 40.5px;
        height: 15.5px;
        display: block;
        font-size: 11px;
        color: #fa6400;
        border: 1px solid #fa6400;
        border-radius: 10px 0 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .delail_limit_span_one {
        font-size: 12px;
        color: $color;
        margin-left: 12px;
      }
    }

    // 服务
    .delail_serve {
      margin-top: 25px;
      .delail_serve_o {
        font-size: 12px;
        color: #333333;
      }
      .delail_serve_t {
        font-size: 12px;
        color: $color;
        margin-left: 14px;
        margin-top: 25px;
      }
    }
  }

  // 授课老师
  .delail_give {
    width: $width;
    height: 172px;
    margin-top: 10px;
    padding: 16px 0 16px 20px;
    background: #ffff;

    .delail_give_h6 {
      font-size: 17px;
      color: #333333;
    }
    .delail_give_div {
      width: 60px;
      height: 90px;
      float: left;
      margin: 30px 47px 9px 0;
      text-align: center;
      span {
        font-size: 14px;
        color: $color;
      }
    }
  }

  // 课程大纲
  .delail_outline {
    width: $width;
    height: 367.5px;
    margin-top: 10px;
    position: relative;
    background: #ffff;

    .delail_outline_h6 {
      font-size: 17px;
      color: #333333;
      display: inline;

      margin-left: 20px;
    }
    .delail_outline_span {
      font-size: 13px;
      color: $color;
      margin-left: 5px;
      position: absolute;
      top: -47px;
      margin-top: 68px;
      margin-left: 7px;
    }
    // 适合对象，培养目标
    .delail_outline_matter {
      .delail_outline_d1 {
        display: flex;
        justify-content: space-between;
        margin-top: 26px;
        margin-left: 18px;

        .delail_outline_s1 {
          width: 60px;
          font-size: 13px;
          margin-left: 18px;
        }
        .delail_outline_s2 {
          // width: 247px;
          font-size: 13px;
          margin-left: 13px;
          padding-right: 19px;
        }
      }
      .delail_outline_d2 {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
        margin-left: 18px;

        .delail_outline_s1 {
          width: 60px;
          font-size: 13px;
          margin-left: 18px;
        }
        .delail_outline_s2 {
          width: 290px;
          font-size: 13px;
          margin-left: 13px;
          padding-bottom: 24px;
        }
      }
    }
    //第一讲诗歌
    .delail_poetry_one {
      margin-top: 10px;
      margin-left: 39px;
      .delail_poetry_one_s1 {
        font-size: 13px;
        color: #666666;
      }
      .delail_poetry_one_s2 {
        font-size: 17px;
        color: #333333;
        margin-left: 18px;
      }
      .delail_poetry_one_p {
        font-size: 12px;
        color: $color;
        margin: 3px 0 0 58px;
      }
    }
    .delail_poetry_tow {
      margin-left: 39px;
      margin-top: 15px;
      .delail_poetry_one_s1 {
        font-size: 13px;
        color: #666666;
      }
      .delail_poetry_one_s2 {
        font-size: 17px;
        color: #333333;
        margin-left: 18px;
      }
      .delail_poetry_one_p {
        font-size: 12px;
        color: $color;
        margin: 3px 0 0 58px;
      }
    }
  }
  .xqyuImg {
    width: 375px;
    height: 100%;
  }

  // 加入选课按钮
  .delail_button {
    width: 375px;
    height: 41px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    .delail_button_one {
      width: 82px;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #ffffff;

      .iconfont {
        font-size: 20px;
        display: flex;
        // align-items: center;
      }

      .delail_button_one_p {
        font-size: 10px;
        color: $color;
      }
    }
    .delail_button_tow {
      width: 293.5px;
      height: 100%;
      background: #0798ff;
      font-size: 14px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>