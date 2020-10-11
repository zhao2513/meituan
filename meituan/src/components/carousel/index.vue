<template>
  <Carousel
    v-model="value3"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :radius-dot="setting.radiusDot"
    :trigger="setting.trigger"
    :arrow="setting.arrow"
    
    class="car"
  >
    <CarouselItem v-for=" item in imgList" :key="item.url">
      <div class="demo-carousel"><img :src="item.img" alt="item.img"></div>
    </CarouselItem>
    
  </Carousel>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "hover",
        height:'240px'
      },
    };
  },
  props: {
    imgList: Array,
  },
  mounted(){
    axios.get('/static/mock/index.json?city=' + this.city)
			.then(res=>console.log(res))
  }
};
</script>

<style>
.car img{
    width: 100%;
    height: 100%;
}
.car .ivu-carousel-dots li button{
    color: #ddd;
}
.car .ivu-carousel-arrow:hover{
    background: #333;
    opacity: 0.8;
}
.car .demo-carousel{
    height: 240px;
}
</style>