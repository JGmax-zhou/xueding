<template>
  <div>
    <!-- 标题部分 -->
    <van-nav-bar title="课堂" fixed placeholder id="classroom" />
    <!-- 轮播图 -->
    <van-swipe :loop="false" :width="320">
      <van-swipe-item>
        <img src="../assets/images/img_24.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/img_25.png" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 直播课内容 -->
    <main>
      <article>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="免费直播课" />
          <div class="more">更多&nbsp;></div>
        </van-sidebar>
      </article>
      <ul class="info">
        <li>
          <img src="../assets/images/img_13.png" alt />
          <h4>语文-作文题目分析</h4>
          <p>10月12日 9:00-10:00</p>
        </li>
        <li>
          <img src="../assets/images/img_13.png" alt />
          <h4>语文-作文题目分析</h4>
          <p>10月12日 9:00-10:00</p>
        </li>
        <li>
          <img src="../assets/images/img_13.png" alt />
          <h4>语文-作文题目分析</h4>
          <p>10月12日 9:00-10:00</p>
        </li>
        <li>
          <img src="../assets/images/img_13.png" alt />
          <h4>语文-作文题目分析</h4>
          <p>10月12日 9:00-10:00</p>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>


<style lang="scss">
// 标题部分
#classroom {
  background: #f5f5f5;
  font-size: 17px;
  color: #333333;
  height: 46px;
}
.van-nav-bar--fixed {
  margin-bottom: 50px;
}

// 轮播图
.van-swipe__track {
  .van-swipe-item {
    width: 320px;
    height: 187px;
    img {
      width: 300px;
      height: 150px;
    }
  }
}

// 直播课内容
main {
  padding: 0px 13px;

  // 直播课内容(标题)
  .van-sidebar {
    width: 100%;
    position: relative;
    .van-sidebar-item {
      background: #f5f5f5;
      font-size: 17px;
      font-weight: bold;
      color: #333333;
    }
    .more {
      font-size: 10px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  // 直播课内容(信息)
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h4 {
      margin: 6px 0px;
      font-size: 15px;
    }
    p {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
}

.van-sidebar-item--select::before {
  width: 11px;
  height: 24px;
  background: #4966f5;
}
</style>