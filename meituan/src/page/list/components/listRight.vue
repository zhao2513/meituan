<template>
  <div class="list-right-content">
    <div class="recommend-box">
      <div class="recommend-box-title">猜你喜欢</div>
      <div class="recommend-box-content"  v-for="item in list.slice(0,3)" :key="item.itemId">
        <div class="recommend-box-img">
          <img
            :src="item.imgUrl"
          />
        </div>
        <div class="recommend-sub-title">
         {{item.title}}
        </div>
        <div class="rate">
          <div class="rate-stars"></div>
          <span>{{item.commentNum}}评价</span>
        </div>
        <div class="address">{{item.areaName}}</div>
        <div class="price">￥{{item.lowPrice}}<span>起</span></div>
      </div>
    
    </div>
  </div>
</template>

<script>
import api from "@/api"
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    api.getListRight().then((res) => {
      console.log(res);
      if (res.status != 200) {
        return;
      }
      this.list =res.data;
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/css/list/listRight.scss";
</style>