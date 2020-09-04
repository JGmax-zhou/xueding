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
          <span class="delail_poetry_one_s1">第01讲</span>
          <b class="delail_poetry_one_s2">诗歌：常见意向梳理</b>
          <p class="delail_poetry_one_p">9月4日 周五19:00-21:00</p>
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
      poetry: [],
    };
  },
};
</script>




<style lang="scss" >
@import "../assets/style/Delail.scss";
@import "../assets/style/reset.scss";
</style>