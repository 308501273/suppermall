<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./chirldComps/HomeSwiper";
import {getHoemMultidata} from "network/home";
import RecommendView from "./chirldComps/RecommendView";

export default {
  name: "Home",
  components: {
    RecommendView,
    HomeSwiper,
    NavBar,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    // 1.请求多个数据
    getHoemMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
