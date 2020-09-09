<template>
  <div id="classroom">
    <!-- 标题部分 -->
    <van-nav-bar title="课堂" fixed placeholder class="classroomTitle" />
    <!-- 轮播图 -->
    <banner />
    <!-- 直播课内容 -->
    <main>
      <!-- 免费直播课 -->
      <div class="Livefree">
        <article>
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="免费直播课" />
            <div class="more" @click="moreclick">更多&nbsp;></div>
          </van-sidebar>
        </article>
        <ul class="info">
          <li v-for="(item,index) in classFreeList" :key="index" v-show="moreshow ||index<2">
            <img :src="item.src" alt />
            <h4>{{item.title}}</h4>
            <p>{{item.date}}</p>
          </li>
        </ul>
      </div>

      <!-- 即将开始 -->
      <div class="Livefree">
        <article>
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="即将开始" />
            <div class="more" @click="moreclick1">更多&nbsp;></div>
          </van-sidebar>
        </article>
        <van-tabs v-model="active" @change="changeBegin">
          <van-tab title="学科"></van-tab>
          <van-tab title="年级"></van-tab>
          <van-tab title="上课形式"></van-tab>
        </van-tabs>
        <ul class="info">
          <li v-for="(item,index) in ClassBeginList" :key="index" v-show="moreshow1 ||index<6">
            <img :src="item.src" alt />
            <h4>{{item.title}}</h4>
            <p>{{item.date}}</p>
          </li>
        </ul>
      </div>
      <!-- 精彩回放-->
      <div class="Livefree">
        <article>
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="精彩回放" />
            <div class="more" @click="moreclick2">更多&nbsp;></div>
          </van-sidebar>
        </article>
        <van-tabs v-model="active1" @change="changeBack">
          <van-tab title="学科"></van-tab>
          <van-tab title="年级"></van-tab>
          <van-tab title="上课形式"></van-tab>
        </van-tabs>
        <ul class="info">
          <li v-for="(item,index) in ClassBackList" :key="index" v-show="moreshow2 ||index<6">
            <img :src="item.src" alt />
            <h4>{{item.title}}</h4>
            <p>{{item.date}}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
import banner from "../components/3Dbanner";
export default {
  data() {
    return {
      activeKey: 0,
      active: 0,
      active1: 0,
      moreshow: false,
      moreshow1: false,
      moreshow2: false,
      classFreeList: {},
      ClassBeginList: {},
      ClassBackList: {},
      ClassBeginArr: [
        {
          grade: "高一",
        },
        {
          subject: "数学",
        },
        {
          form: "线上",
        },
      ],
    };
  },
  components: {
    banner,
  },

  methods: {
    // 获取免费直播数据
    async ClassFreeData() {
      await this.$store.dispatch("getClassFreeData");
      this.classFreeList = this.$store.state.classroom.classFreeData;
    },

    // 获取即将开始数据
    async ClassBeginData(params) {
      await this.$store.dispatch("getClassBeginData", params);
      this.ClassBeginList = this.$store.state.classroom.classBeginData;
    },

    // 获取精彩回放数据
    async ClassBackData(params) {
      await this.$store.dispatch("getClassBackData", params);
      this.ClassBackList = this.$store.state.classroom.classBackData;
    },

    // 即将开始切换的时候请求数据
    changeBegin() {
      this.ClassBeginData(this.ClassBeginArr[this.active]);
      sessionStorage.setItem("classroombegin", this.active);
    },

    // 精彩回放切换的时候请求数据
    changeBack() {
      this.ClassBackData(this.ClassBeginArr[this.active1]);
      sessionStorage.setItem("classroomback", this.active1);
    },

    moreclick() {
      this.moreshow = true;
    },
    moreclick1() {
      this.moreshow1 = true;
    },
    moreclick2() {
      this.moreshow2 = true;
    },
  },

  mounted() {
    //激活异步方法
    this.ClassFreeData();
    this.ClassBeginData(this.ClassBeginArr[this.active]);
    this.ClassBackData(this.ClassBeginArr[this.active1]);

    //进行存储是否有该数据，有就赋值给active,并请求数据
    if (sessionStorage.getItem("classroombegin")) {
      this.active = +sessionStorage.getItem("classroombegin");
      this.ClassBeginData(this.ClassBeginArr[this.active]);
    }

    if (sessionStorage.getItem("classroomback")) {
      this.active1 = +sessionStorage.getItem("classroomback");
      this.ClassBeginData(this.ClassBeginArr[this.active1]);
    }
  },

  computed: {
    //实时监听免费直播课数据
    getClassFreeData() {
      return this.$store.state.classroom.getClassFreeData;
    },

    //实时监听即将开始数据
    getClassBeginData() {
      return this.$store.state.classroom.getClassBeginData;
    },

    //实时监听精彩回放数据
    getClassBackData() {
      return this.$store.state.classroom.getClassBackData;
    },
  },
};
</script>


<style lang="scss">
#classroom {
  // 标题样式
  .classroomTitle {
    background: #fff;
    font-size: 17px;
    color: #333333;
    height: 46px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
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
    margin-bottom: 50px;

    // 直播课内容(标题)
    .van-sidebar {
      width: 100%;
      position: relative;
      .van-sidebar-item {
        background: #fff;
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

    // tab切换
    .van-tabs__wrap {
      margin-top: -20px;
      margin-bottom: 10px;
    }
    .van-tabs__nav {
      background: transparent;
    }
    .van-tabs__line {
      background: #4966f5;
    }
  }

  .van-sidebar-item--select::before {
    width: 11px;
    height: 24px;
    background: #4966f5;
  }

  //切换按钮的样式
  .van-tab--active {
    font-weight: 800;
    font-size: 16px;
  }
}
</style>