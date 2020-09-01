<template>
  <div id="coursegoods">
          <!-- 推荐课程页面 -->
    <!-- 标题部分 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="推荐课程" />
    </van-sidebar>
    <!-- 课程内容 -->
    <ul class="courseList">
      <li class="courseItem">
        <div>
          <span class="icon">
            <img src="../assets/icon/icon_33.png" alt />
            &nbsp;
            <img src="../assets/icon/icon_34.png" alt />
          </span>
          <span class="title">高一数学秋季精品班(周日10：30）</span>
        </div>

        <div class="date">
          <span class="icon">
            <img src="../assets/icon/icon_04.png" alt />
          </span>
          <span>9月10日-1月10日 10:30-12:00</span>
        </div>

        <div class="address date">
          <span class="icon">
            <img src="../assets/icon/icon_35.png" alt />
          </span>
          <span>舟山市普陀区东海中路141号</span>
        </div>

        <div class="lecturer">
          <div class="information ">
            <img src="../assets/images/img_08.png" alt />
            <div class="info">
              <div class="name">孙老师</div>
              <div class="duty">主讲</div>
            </div>
          </div>
          <div class="information ">
            <img src="../assets/images/img_09.png" alt />
            <div class="info">
              <div class="name">王老师</div>
              <div class="duty">班主任</div>
            </div>
          </div>
        </div>

        <span class="originalPrice">￥1500</span>
        <span class="currPrice">￥1999</span>

        <div class="button">加入选课单</div class="button">
      </li>
    </ul>
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

  methods: {}
};
</script>
<style lang='scss' scoped>
#coursegoods{
    .courseList {
    .courseItem {
      width: 355px;
      height: 209px;
      border-radius: 2px;
      position: relative;
      background: lightgray;
      .icon {
        margin: 0px 32px 0px 6px;
      }
      .title {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
      }
      .date {
        font-size: 12px;
        color: #666666;
        margin: 10px 0px;
        .icon {
          margin: 0px 12px;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
      .lecturer{
          display: flex;
          border-bottom: 1px solid #E5E5E5;
          .information {
              margin-top: 20px;
              margin-left: 17px;
              margin-bottom: 15px;
              
              display: flex;
              align-items: center;
              font-size: 12px;
              color: #666666;
              img{
                  width: 30px;
                  height: 30px;
              }
              .info{
                  margin-left: 5px;
                  margin-right: 20px;
                  height: 30px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .duty{
                      font-size: 10px;
                      color: #999999;
                  }
              }
          }
      }
      .originalPrice{
          font-size: 10px;
          color: #999999;
          text-decoration: line-through;
      }
      .currPrice{
          font-size: 14px;
          color: #FA6400;
          margin-left: 5px;
      }
      .button{
          width: 90px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          border-radius: 14px;
          font-size: 12px;
          color: white;
          background: linear-gradient(#0798FF,#4966F5);
          position: absolute;
          right: 0;
          bottom: 16px;
      }
    }
}
}
</style>
