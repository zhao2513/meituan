<template>
  <div class="page">
    <div class="index-content">
      <div class="banner-content clearfix">
        <left-banner />
        <right-banner />
      </div>
      <min-su />
      <recommend />
    </div>
  </div>
</template>

<script>
import leftBanner from "./components/leftBanner";
import rightBanner from "./components/rightBanner";
import minSu from "./components/minsu";
// import recommend from "./components/recommend";
export default {
  components: {
    leftBanner,
    rightBanner,
    minSu,
    // recommend,
    recommend: resolve=>require(["./components/recommend"],resolve),
  },
};
</script>

<style lang="scss">
@import "@/assets/css/home/index.scss";
</style>