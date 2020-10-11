<template>
  <div class="left-banner">
    <div class="category">
      <div class="left-banner-title"><span>全部分类</span></div>
      <div class="left-banner-content">
        <ul @mouseleave="leaveList">
          <li
            v-for="item in iconList"
            :key="item.iCont"
            @mouseenter="entenList(item.children)"
          >
            <i :class="item.iCont"></i>
            <span
              ><router-link to="/" class="nav-text">{{
                item.title
              }}</router-link>
            </span>
            <i class="arrow"></i>
          </li>
        </ul>
      </div>
      <div
        class="category-detail-nav"
        v-show="showLists"
        @mouseenter="navEnterList"
        @mouseleave="navLeaveList"
      >
        <template v-for="(item,val)  in contentList">
          <div class="category-detail" :key="item.titles.title.item+val">
            <div class="detail-title">
              <h2 class="detail-title-l">
                <router-link :to="item.titles.title.href">{{item.titles.title.item}}</router-link>
              </h2>
              <div class="detail-title-r">{{item.titles.more.item}}</div>
            </div>
            <ul>
              <li v-for="(i , v) in item.content" :key="i.item+v">
                <router-link :to="i.href">{{i.item}}</router-link> 
                </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      iconList: [],
      showList: false,
      contentList: [],
      timer:null
    };
  },
  mounted() {
    api.getIcon().then((res) => {
      this.iconList = res.data;
    });
  },
  computed:{
    showLists(){
      return this.showList;
    }
  },
  methods: {
    entenList(data, e) {
      clearInterval(this.timer)
      this.contentList = data;
      this.showList = true;
    },
    leaveList() {
      this.timer = setTimeout(() => {
        this.showList = false;
      }, 200);
    },
    navEnterList(){
      clearInterval(this.timer)
      this.showList = true;
      
    },
    navLeaveList(){
      this.timer = setTimeout(() => {
        this.showList = false;
      }, 200);
      
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/home/leftbanner.scss";
</style>