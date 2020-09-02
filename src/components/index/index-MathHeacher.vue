<template>
  <div class="indexMathHeacher">
    <h2>数学人气名师带你拿高分</h2>
    <main class="recommendWrap">
      <!-- 讲师介绍 -->
      <div class="recommendTeacher">
        <h3>李亚男</h3>
        <img class="goldMedal" src="../../assets/icon/icon_16.png" alt />
        <p>高中数学主讲老师</p>
        <span>浙江大学研究生毕业,曾带领学生参加过智慧竞赛</span>
        <img class="interactionBut" src="../../assets/icon/button_01.png" alt />
      </div>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.indexMathHeacher {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  h2 {
    width: 100%;
    font-size: 17px;
    text-indent: 20px;
  }
  .recommendTeacher {
    width: 100%;
    height: 181px;
    background: url(../../assets/images/img_03.png) no-repeat center;
    display: flex;
    flex-direction: column;
    position: relative;
    h3 {
      font-size: 14px;
      margin-top: 40px;
      margin-left: 40px;
    }
    .goldMedal {
      position: absolute;
      left: 100px;
      top: 40px;
    }
    p {
      margin-top: 5px;
      margin-left: 40px;
      color: #666666;
      font-size: 10px;
    }
    span {
      margin-top: 5px;
      margin-left: 40px;
      color: #999999;
      font-size: 10px;
      width: 150px;
    }
    .interactionBut {
      position: absolute;
      left: 40px;
      bottom: 35px;
    }
  }
  
}
</style>