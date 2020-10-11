<template>
  <div class="common-list">
    <div class="common-list-header">
      <ul>
        <li class="tag-active">智能排序</li>
        <li><span  class="tag-sort" @click="priceSort">价格排序</span></li>
        <li>人气最高</li>
        <li>评价最高</li>
      </ul>
    </div>
    <div class="common-list-main" v-for="item in list" :key="item.title">
      <div class="default-list">
        <div class="common-list-left">
          <img :src="item.image" alt="item.title" />
        </div>
        <div class="common-list-right">
          <div class="list-title item-top">
            {{ item.title }}
          </div>
          <div class="list-rate item-top">
            <span class="list-rate-item"
              ><rate :valueCustomText="item.score"
            /></span>
            <span v-if="item.score > 4.5">很好</span>
            <span v-else-if="item.score > 4 && item.score <= 4.5">好</span>
            <span v-else-if="item.score < 4">不错</span>
            <span>{{ item.score }}分</span>
            <span class="comment">6人评论</span>
          </div>
          <div class="sub-title item-top">
            <span>{{
              item.tab.length > 1
                ? `${item.tab[0]}|${item.tab[1]}`
                : item.tab[0]
            }}</span>
            <span
              class="sec-title"
              title="番禺区市桥街光明南路199号1号楼116单元"
              >{{ item.address }}</span
            >
            <span class="map"
              ><img
                class="list-map"
                src="https://s0.meituan.net/bs/fe-web-meituan/5058856/img/icons/16pt_16pt/location_colour.png"
                alt=""
              />
              查看地图</span
            >
          </div>
          <div class="item-top">人均￥{{ item.avgPrice }}</div>
          <div class="line"></div>
          <div class="deal">
            <div
              class="deal-main"
              v-for="(i, v) in item.dealItems.slice(0, 2)"
              :key="v + i.title"
            >
              <div class="deal-title">
                {{ i.title }}
              </div>
              <div class="deal-content">
                <span class="deal-price"> ￥{{ i.price }} </span>
                <span class="deal-val">门市价{{ i.counterPrice }}</span>
                <span class="deal-sales">已售{{ i.saleNum }}</span>
              </div>
            </div>
           
            <div class="showMore" v-show="showMore">
              <div
                class="deal-main"
                v-for="(i, v) in item.dealItems.slice(2)"
                :key="v + i.title"
              >
                <div class="deal-title">
                  {{ i.title }}
                </div>
                <div class="deal-content">
                  <span class="deal-price"> ￥{{ i.price }} </span>
                  <span class="deal-val">门市价{{ i.counterPrice }}</span>
                  <span class="deal-sales">已售{{ i.saleNum }}</span>
                </div>
              </div>
            </div>
            <p
              class="toggle"
              v-show="item.dealItems.length > 2"
              @click="toggle"
            >
              <span class="change-color">{{
                showMore ? "收起" : `更多${item.dealItems.length - 2}个优惠`
              }}</span
              ><i :class="[showMore ? 'arrow-totop' : 'arrow-todown']"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//五角星评分
import rate from "@/components/rate";
import api from "@/api";
export default {
  data() {
    return {
      //列表数据
      list: [],
      showMore: false,
      //order为排序，默认升序，false为降序
      order: true,
    };
  },
  components: {
    rate,
  },
  mounted() {
    //
    api.getCommonList().then((res) => {
      if (res.status != 200) {
        return;
      }
      this.list = res.data.data;
    });
  },
  methods: {
    //更多，收起
    toggle() {
      this.showMore = !this.showMore;
    },
    //价格高低排序：利用sort对单价进行比较
    priceSort() {
      if (this.order) {
        this.list.sort((a, b) => {
          console.log(a.avgPrice,b.avgPrice);
          return a.avgPrice - b.avgPrice;
        });
        this.order=false;
      }else{
         this.list.sort((a, b) => {
          return   b.avgPrice - a.avgPrice;
        });
        this.order= true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/list/commonList.scss";
</style>