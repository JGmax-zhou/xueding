<template>
  <div id="coursegoods">
          <!-- 推荐课程页面 -->
    <!-- 课程内容 -->
    <ul class="courseList">
      <li class="courseItem">
        <div>
          <span class="icon">
            <img src="../assets/icon/icon_33.png" alt />
            &nbsp;
            <img src="../assets/icon/icon_34.png" alt />
          </span>
          <span class="title">{{navListData.title}}</span>
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
          <span>{{navListData.address}}</span>
        </div>

        <div class="lecturer">
          <div class="information " v-for="(item,index) in navListData.teachers" :key="index">
            <img :src="item.images" alt />
            <div class="info">
              <div class="name">{{item.name}}</div>
              <div class="duty">{{item.position}}</div>
            </div>
          </div>
        </div>

        <span class="originalPrice">￥{{navListData.currentPrice}}</span>
        <span class="currPrice">￥{{navListData.originnalPrice}}</span>
        <div class="button" @click="addcar">加入选课单</div >
      </li>
    </ul>
  </div>
</template>

<script>
import {addCar} from '../utils/api.js'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
   
  },

  methods: {
   async addcar(){
     localStorage.setItem('msg','abcd')
      if(localStorage.getItem('msg')){
     const result = await addCar({
          token:localStorage.getItem('msg'),
          id:this.navListData.id
        })
        if(result.msg =='success'){
          Toast('已成功加入选课单');
        }else if(result.msg =='商品已在购物车内'){
          Toast('商品已在购物车，请勿重复提交');
        }
      }else{
        this.$router.push('/login')
      }
    }
  },
  props:[
    'navListData'
  ]
};
</script>
<style lang='scss' scoped>
#coursegoods{
  margin-bottom: 10px;
    .courseList {
    .courseItem {
      width: 355px;
      height: 209px;
      border-radius: 2px;
      position: relative;
       box-shadow: 2px 2px 10px 1px #ddd;
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
          margin-bottom: 15px;
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
          margin-left: 15px;
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
          right: 15px;
          bottom: 16px;
      }
    }
}
}
</style>
