<template>
  <div class="delail_total">
    <van-nav-bar left-arrow>
      <!-- <template #right>
      </template>-->
    </van-nav-bar>
    <div class="delail_i">
      <img src="../assets/images/img_23.png" alt />
    </div>
    <div class="delail_ATL">
      <span class="delail_span1">线上</span>
      <span class="delail_span2">初三升高一秋季培训班 （小鼎君在线）</span>
      <p class="delail_p1">教材数学本地化, 同步较内, 备战高考</p>
      <span class="delail_evaluate">难度</span>

      <van-rate v-model="value" size:0.323434rem />
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
</script>




<style lang="scss" >
@import "../assets/style/Delail.scss";
</style>