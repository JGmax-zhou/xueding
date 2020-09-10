<template>
  <transition name="van-slide-up" style="background:red">
  <div id="car" @click="Entershopping">
      <img src="../assets/images/car.jpg" alt="">
  </div>
  </transition>
  <!-- <van-sticky :offset-top="200">
    <van-button type="info">吸顶距离</van-button>
  </van-sticky> -->
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    Entershopping() {
      this.$router.push("/car");
    },
  },
};
</script>
<style lang='scss' scoped>
#car {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  bottom: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
}
</style>
