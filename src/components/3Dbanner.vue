<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
          <img src="https://mybucket-lcx.oss-cn-hangzhou.aliyuncs.com/images/img_02.png" alt="">
      </swiper-slide>
      <swiper-slide>
          <img src="../assets/images/img_24.png" alt="">
      </swiper-slide>
      <swiper-slide>
          <img src="../assets/images/img_25.png" alt="">
      </swiper-slide>
      <swiper-slide>
          <img src="../assets/images/img_24.png" alt="">
      </swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example-3d {
    width: 100%;
    height: 200px;
    padding-top: 20px;
    padding-bottom: 30px;
background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599133173899&di=74cf528cf66ba2d7389fffdfa5e9661e&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F38%2F54%2F16pic_3854588_b.jpg');
  }

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 139px;
      text-align: center;
      font-weight: bold;
      font-size: 12px;
    //   background-color: #8c9197;
      background-position: center;
      background-size: cover;
      color: white;
    //   img{
    //       width: 300px;
    //       height: 300px;
    //   }
    }

    .swiper-pagination {
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
      }
    }
  }
</style>