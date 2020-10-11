<template>
  <div class="right-banner">
    <div class="home-header-links clearfix">
      <ul>
        <li><a href="#">美团外卖</a></li>
        <li><a href="#">猫眼电影</a></li>
        <li><a href="#">美团酒店</a></li>
        <li><a href="#">民宿／公寓</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">美团公益</a></li>
      </ul>
    </div>
    <div class="banner-row clearfix">
      <div class="banner-carousel">
        <my-carousel :img-list="imgList" />
      </div>
      <div class="pic1"></div>
      <div class="item banner-login">
        <div class="login-content">
          <div class="default">
            <div class="head-img-row">
              <img
                src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                alt=""
              />
            </div>
            <p class="user-name">Hi！{{!$store.state.userName ? '你好' : $store.state.userName}}</p>
            <div v-show="!$store.state.userName">
              <router-link :to="{name:'register'}" class="btn-login">注册</router-link>
            <router-link :to="{name:'login'}" class="btn-login">立即登录</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-row clearfix">
      <div class="banner-row-bottom">
        <div class="pic2 item"></div>
        <div class="pic3 item"></div>
        <div class="pic4 item"></div>
        <div class="download item">
          <div class="qrcode">
            <img
              src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
              alt=""
            />
          </div>
          <p class="app-name">美团APP手机版</p>
          <p class="sl">
            <span class="red">1元起</span><span class="gary">吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myCarousel from "@/components/carousel";
export default {
  data() {
    return {
      imgList: [
        {
          url: "#xxx",
          img:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          url: "#ass",
          img:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url: "#vc",
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url: "#ds",
          img:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
      ],
    };
  },
  components: {
    myCarousel,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/home/rightbanner.scss";
</style>