<template>
  <div class="detailsTeacher">
    <!-- 后退按钮 -->
    <div class="detailsTeacherBack" v-show="!show" @click="Teacherback">&lt;</div>
    <!-- 头部 -->
    <header class="detailsTeacherHeader">
      <!-- 背景形状 -->
      <div class="BGform">
        <!-- 滤镜 -->
        <div class="BGfilter"></div>
        <!-- 背景图片 -->
        <img :src="jsxq.images" alt />
      </div>
      <div class="nameMessageWrap">
        <img :src="jsxq.images" alt />
        <!-- 姓名学校 -->
        <div class="nameMessage">
          <h3>{{jsxq.name}}</h3>
          <p>学鼎宁波学校</p>
          <!-- 咨询 -->
          <div class="consult">
            <span class="consultBG consultAX" @click="collectBut">
              <img :src="collectimgOK!=''?collectimgOK:collectimgNO" alt />
              <p>{{collectnum}}</p>
            </span>
            <span class="consultBG">
              <van-cell class="zixun" @click="showPopup">咨询</van-cell>
              <!-- 弹出层 -->
              <van-popup
                class="maa"
                v-model="show"
                round
                position="bottom"
                :style="{ height: '40%' }"
                @click-overlay="noseleGrades"
              >
                <div class="confirmAndCancel">
                  <div class="cancel">取消</div>
                  <div class="confirm">确定</div>
                </div>
                <h3 class="tit">预约咨询</h3>
                <div class="name wrap">
                  <input type="text" id="consultName" placeholder="请输入您的名字" value />
                </div>
                <div class="shouji wrap">
                  <input type="text" id="consultShouji" placeholder="请输入您的手机" value />
                </div>
                <div class="nianji wrap">
                  <input
                    type="text"
                    id="consultNianji"
                    ref="consultNianji"
                    placeholder="请选择年级"
                    value
                    @focus.stop="seleGrades"
                  />
                </div>
              </van-popup>
              <div class="seleGrade" v-show="seleGrade">
                <div class="seleGradeBack" @click="retreat">&le;</div>
                <div class="queding" v-show="xueduan.switch" @click="XZWC">确定</div>
                <!-- 年级选择 -->
                <div class="seleXdWrap">
                  <!-- 选择学段 -->
                  <div
                    class="seleXD"
                    :class="{pitchOn:xueduan.sign!=1}"
                    @click="QXSY"
                  >{{xueduan.tit}}</div>
                  <div
                    class="seleNJ"
                    v-show="xueduan.sign==1"
                    :class="{pitchOn:xueduan.sign==1}"
                  >{{xueduan.tits}}</div>
                </div>
                <!-- 被选择年级列表 -->
                <ul class="NjListWrap">
                  <li
                    v-for="(value,index) in XQXL"
                    :key="index"
                    @click="secondarys(index,value)"
                  >{{value}}</li>
                </ul>
              </div>
            </span>
            <span class="consultBG">电话</span>
          </div>
        </div>
      </div>
    </header>
    <!-- 基本信息 -->
    <main class="basicsMessage">
      <h2 class="jbxx">基本信息</h2>
      <h3 class="ejbt">教授课程</h3>
      <p class="neirong">听力，口语</p>
      <h3 class="ejbt">教师资质</h3>
      <p class="neirong">高级中学教师资格证</p>
      <h3 class="ejbt">上课校区</h3>
      <p class="neirong">{{jsxq.school}}</p>
      <img class="zhaop" :src="jsxq.images" alt />
    </main>
    <!-- 老师简介 -->
    <main class="basicsMessage">
      <h2 class="jbxx">老师简介</h2>
      <h3 class="ejbt">个人简介</h3>
      <p class="neirong">杨宁，浙江杭州人，杭州新东方八年中考教师。科班出生，自成教学体系，上课通俗易懂，幽默生动；对学生认真负责，亲和力强，亦师亦友；课程质量高，教学效果突出，深受学生和家长喜爱。</p>
      <h3 class="ejbt">授课风格</h3>
      <ul class="neirong">
        <li class="neirongLi" v-for="(value,index) in 3" :key="index+10000">{{jsxq.style}}</li>
      </ul>
    </main>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; //引入vuex辅助函数
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "detailsTeacher"
); //引入vuex辅助函数
export default {
  data() {
    return {
      show: false,
      seleGrade: false,
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.getTeacherDetails({ id: this.$route.params.id });
  },
  computed: {
    ...mapState([
      "collectimgNO", //教师未收藏时
      "collectimgOK", //收藏时
      "collectnum", //教师被收藏的总数
      "XQXL", //学历下拉
      "xueduan", //已选择学段
      "xueduan", //选择的年级数据
      "jsxq", //教师详情数据
    ]),
  },
  methods: {
    ...mapMutations(["collectBut", "secondary", "QXSY"]),
    ...mapActions([
      "getTeacherDetails", //教师详情数据请求
    ]),
    Teacherback() {
      //返回上一页
      this.$router.go(-1);
    },
    collectBut() {
      this.collectBut();
    },
    showPopup() {
      //咨询弹出层
      this.show = true;
    },
    seleGrades() {
      this.seleGrade = true;
    },
    noseleGrades() {
      this.seleGrade = false;
    },
    retreat() {
      //选择年级取消
      this.seleGrade = false;
    },
    secondarys(index, value) {
      //选择年级二级菜单
      // console.log(index, value);
      this.secondary({ id: index, tit: value });
    },
    QXSY() {
      this.QXSY();
    },
    XZWC() {
      //下拉选择完成确定
      this.$refs.consultNianji.value =
        this.xueduan.tit + " " + this.xueduan.tits;
      // console.log(this.xueduan);
      this.seleGrade = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.detailsTeacher {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .detailsTeacherBack {
    //返回上一页按钮
    position: absolute;
    top: 10px;
    left: 15px;
    z-index: 3;
    color: #fff;
    font-size: 24px;
  }
  .detailsTeacherHeader {
    //头部
    // background: #eee;
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
    .BGform {
      //背景形状
      position: absolute;
      width: 200%;
      left: -50%;
      height: 100%;
      border-radius: 0 0 60% 60%;
      overflow: hidden;
      //   background: gold;
      .BGfilter {
        //滤镜
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
      }
      img {
        //背景头像
        position: absolute;
        left: 30%;
        width: 35%;
        top: -10%;
        filter: blur(4px);
      }
    }
    .nameMessageWrap {
      //头部姓名小头像等信息栏
      // background: gold;
      position: absolute;
      width: 100%;
      top: 55px;
      // height: 30%;
      z-index: 2;
      display: flex;
      img {
        //小头像
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0px 20px;
      }
      .nameMessage {
        //头部右侧信息
        // background: green;
        flex: 1;
        display: flex;
        flex-direction: column;
        color: #fff;
        h3 {
          //姓名
          font-size: 18px;
          line-height: 18px;
        }
        p {
          //所属学校
          font-size: 12px;
          margin-top: 8px;
        }
        .consult {
          //咨询电话等
          display: flex;
          margin-top: 20px;
          height: 28px;
          // background: fuchsia;
          .consultBG {
            border: 1px solid #fff;
            height: 28px;
            padding: 0px 10px;
            border-radius: 15px;
            line-height: 28px;
            font-size: 12px;
            margin: 0px;
            margin-right: 10px;
            .zixun {
              //咨询按钮
              background: none;
              padding: 0px;
              .van-cell__value--alone {
                color: #fff;
                line-height: 28px;
              }
            }
            .maa {
              //弹出层外框样式
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0px 15px;
              .confirmAndCancel {
                //确定和取消按钮
                display: flex;
                height: 50px;
                // background: #eee;
                justify-content: space-between;
                width: 100%;
                // margin-top: 15px;
                .confirm {
                  //确定
                  font-size: 16px;
                  color: #1fb895;
                  line-height: 50px;
                }
                .cancel {
                  //取消
                  font-size: 16px;
                  line-height: 50px;
                  color: #000;
                }
              }
              .tit {
                font-size: 20px;
                color: #000;
                text-align: left;
                width: 100%;
                margin-bottom: 15px;
              }
              .wrap {
                width: 100%;
                border-bottom: 1px solid #e3e3e3;
                padding: 10px 0px;
                input {
                  // margin: 10px 0px;
                  height: 32px;
                  line-height: 32px;
                  font-size: 14px;
                  border: 0;
                }
              }
            }
            .seleGrade {
              //选择年级
              position: fixed;
              bottom: 0px;
              height: 420px;
              background: #fff;
              width: 100%;
              left: 0px;
              z-index: 9999;
              display: flex;
              flex-direction: column;
              padding-left: 15px;
              .seleGradeBack {
                //返回
                color: #ccc;
                font-size: 30px;
                margin-top: 15px;
              }
              .queding {
                //确定按钮
                color: #1fb895;
                position: absolute;
                right: 15px;
                margin-top: 15px;
                font-size: 16px;
              }
              .seleXdWrap {
                margin-top: 20px;
                color: #000;
                .seleXD {
                  display: inline-block;
                }
                .seleNJ {
                  display: inline-block;
                  margin-left: 10px;
                }
                .pitchOn {
                  //当前年级选择中时加的类名
                  font-size: 16px;
                  position: relative;
                  display: inline-block;
                  &::after {
                    content: "";
                    background: #1fb895;
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 3px;
                  }
                }
              }
              .NjListWrap {
                width: 100%;
                margin-top: 10px;
                li {
                  width: 100%;
                  height: 50px;
                  font-size: 14px;
                  border-bottom: 1px solid #e3e3e3;
                  color: #1e1e1e;
                  line-height: 50px;
                }
              }
            }
            // .van-popup--bottom {
            //   弹出层宽度
            //   width: 375px;
            // }
          }
          .consultAX {
            background: rgba(0, 0, 0, 0.3);
            border: none;
            display: flex;
            align-items: center;
            // height: 100%;
            img {
              width: 22px;
              height: 22px;
              margin: 0px;
            }
            p {
              line-height: 30px;
              font-size: 14px;
              height: 100%;
              margin: 0;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  .basicsMessage {
    //基本资料
    border-bottom: 9px #f3f3f3 solid;
    // margin-bottom: 50px;
    padding-bottom: 20px;
    .jbxx {
      //基本信息
      font-size: 20px;
      margin: 20px 0px 0px 15px;
    }
    .ejbt {
      //二级标题
      font-size: 16px;
      margin: 20px 0px 0px 15px;
    }
    .neirong {
      //内容
      font-size: 14px;
      margin: 15px 15px 0px 15px;
      color: #999;
    }
    ul{
       font-size: 14px;
      margin: 15px 15px 0px 15px;
      color: #999;
      display: flex;
      flex-wrap: wrap;
      .neirongLi{
        border: 1px solid #40d29d;
        width: 70px;
        height: 30px;
        border-radius: 3px;
        text-align: center;
        line-height: 30px;
        margin-right: 10px;
      }
    }
    .zhaop {
      //照片
      width: 96px;
      height: 96px;
      margin: 15px 0px 0px 15px;
    }
  }
}
</style>