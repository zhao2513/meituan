<template>
  <div class="my-search header-content clearfix">
    <div class="header-logo">
      <a>
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </a>
    </div>
    <div class="header-search-module">
      <div class="header-search-block">
        <!-- @input="inputKeyword" -->
        <input
          class="search-input"
          v-model="searchVal"
          @focus="focusMet"
          @blur="blurMet"
          placeholder="搜索商家或地点"
        />
        <Button
          type="primary"
          icon="md-search"
          @click="btnToList"
          class="search-btn"
        ></Button>
      </div>
      <div class="header-search-suggest" v-show="focusVal">
        <div
          class="header-search-nolist"
          @focus="focusSearchMet"
          @blur="blurSearchMet"
          v-show="noList"
        >
          <div class="search-history">
            <div class="histoy-title">历史记录</div>
            <div class="history-delete" @click="deleteHistory">删除记录</div>
          </div>
          <ul>
            <li v-for="(i, v) in historyList" :key="v" @click="toList(i)">
              {{ i }}
            </li>
          </ul>
        </div>
        <div
          class="header-search-list"
          v-show="doList"
          @focus="focusSearchMet"
          @blur="blurSearchMet"
        >
          <ul>
            <li
              v-for="item in searchList"
              :key="item.query"
              @click="toList(item.query)"
            >
              {{ item.query }}
            </li>
          </ul>
        </div>
      </div>

      <div class="header-search-hotward"></div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      focusVal: false,
      searchVal: "",
      //搜索列表数据
      searchList: [],
      timer: null,
      historyList: [],
    };
  },
  mounted() {
    this.historyList = JSON.parse(this.$store.state.historyKeyword);
  },
  computed: {
    //计算列表是否显示
    noList() {
      return this.focusVal && !this.searchVal;
    },
    doList() {
      return this.focusVal && this.searchVal;
    },
    //计算列表数据
  },

  methods: {
    //聚焦
    focusMet() {
      this.focusVal = true;
    },
    //延迟失焦
    blurMet() {
      setTimeout((e) => {
        this.focusVal = false;
      }, 200);
    },
    focusSearchMet() {
      this.focusVal = true;
    },
    blurSearchMet() {
      this.focusVal = false;
    },

    //跳转list页面
    toList(keyword) {
      this.$router.push({ name: "list", params: { keyword } });
      this.searchVal = keyword;
      this.$store.commit("changeHistory", this.searchVal);
    },
    btnToList() {
      this.$router.push({ name: "list", params: { keyword: this.searchVal } });
      this.$store.commit("changeHistory", this.searchVal);
    },
    //删除记录
    deleteHistory(){
      this.$store.commit("changeHistory", '');
      this.historyList =[];
    }
  },
  watch: {
    //动态修改
    searchVal() {
      //添加防抖功能
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        api.getSearchList(this.searchVal).then((res) => {
          if (res.status != 200) {
            return;
          }
          let data = res.data.data;
          console.log(data);
          this.searchList = data.suggestItems;
        });
      }, 300);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/header/search.scss";
</style>