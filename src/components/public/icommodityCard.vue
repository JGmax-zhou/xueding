<template>
  <div class="card">
    <div class="cardWrap" v-for="(value,index) in courseList" :key="index">
      <div class="cardTitle">
        <img :src="value.patternImg" alt />
        <div class="title">{{value.tit}}</div>
        <span>{{value.introduce}}</span>
      </div>
      <div class="picture">
        <img v-for="(values,indexs) in value.lecturerImg" :key="indexs" :src="values" alt />
      </div>
      <div class="cardPrice">
        <p>限时购</p>
        <span>￥{{value.price}}</span>
        <i>起</i>
      </div>
    </div>
  </div>
</template>
<script>
import icon17 from "../../assets/icon/icon_17.png"; //一对一图片
import icon18 from "../../assets/icon/icon_18.png"; //线上图片
import icon19 from "../../assets/icon/icon_19.png"; //线下小班图片
import img09 from "../../assets/images/img_09.png"; //讲师头像
export default {
  data() {
    return {
      courseList: [
        {
          patternImg: icon17,
          tit: "初三升高一数学暑假培训班",
          introduce: "教材本地化，同步校内，备战高考",
          price: "99",
          lecturerImg: [img09, img09, img09],
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  .cardWrap {
      background: #fff;
    position: relative;
    box-shadow: 5px 5px 10px 1px #ddd;
    width: 355px;
    height: 130px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 7px;
    .cardTitle {
      img {
        position: absolute;
        left: 16px;
        top: 7px;
      }
      .title {
        font-size: 16px;
        color: #333;
        text-indent: 70px;
      }
      span {
        font-size: 12px;
        color: #666;
        margin-left: 16px;
      }
    }
    .picture{
        position: absolute;
        left: 30px;
        top: 70px;
        height: 33px;
        img{
            height: 43px;
            width: 43px;
            margin-right: 16px;
        }
    }
    .cardPrice{
        position: absolute;
        bottom: 19px;
        right: 15px;
        display: flex;
        align-items: flex-end;
        p{
            color: #FA6400;
            font-size: 12px;
        }
        span{
            color: #FA6400;
            font-size: 16px;
            font-weight: 600;
            margin: 0px 5px 0px 5px;
        }
        i{
            color: #ccc;
            font-size: 12px;
        }
    }
  }
}
</style>