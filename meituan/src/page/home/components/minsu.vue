<template>
  <div class="minsu-wrapper wrapper">
    <div class="minsu-title wrapper-title">
      <dl class="minsu-title-dl">
        <dt>推荐民宿</dt>
        <dd
          v-for="item in cityList"
          :class="[item.cityName == type ? 'active' : '']"
          :key="item.cityId"
          @mouseenter="enterList(item.cityName, item.cityId, $event)"
        >
          {{ item.cityName }}
        </dd>
      </dl>
    </div>
    <div class="minsu-content wrapper-content">
      <ul>
        <li v-for="item in cityDetailList" :key="item.poiId">
          <router-link to="#">
            <div class="minsu-content-car">
              <img
                class="product-img"
                :src="item.coverImage"
                alt="item.locationArea"
              />
              <img
                class="head-img"
                src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
                alt=""
              />
            </div>
            <div class="product-info">
              <p class="product-title">{{ item.title }}</p>
              <p class="sub-title">
                <span>整套{{ item.layoutRoom }}居室</span>
                <span>可住{{ item.maxGuestNumber }}</span>
                <span>{{ item.locationArea }}</span>
              </p>
              <p class="price">
                <span class="price-icon">￥</span>
                {{ item.price }}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      //城市列表
      cityList: [],
      //当前所展现的城市
      type: "",
      //城市所对应的民宿信息
      cityDetailList: [],
      //缓存数据
      cacheCity:{}
    };
  },
  mounted() {
    api.getMinSuCity().then((res) => {
      if (res.status != 200) {
        return;
      }

      let cityList = res.data.cityList;
      //默认加载第一个城市，即深圳
      let defaultCity = cityList[0].cityId;
      //城市列表
      this.cityList = cityList;

      this.type = cityList[0].cityName;
      api.getMinsuCityList(defaultCity).then((resCity) => {
        let data = resCity.data;
        if (data.message != "成功") {
          alert("数据请求失败");
          return;
        }
        this.cityDetailList = data.productList;
        this.cacheCity[defaultCity] = data.productList;
      });
    });
  },
  methods: {
    //当鼠标移入每一个城市时，触发请求
    enterList(cityName, cityId, e) {
      this.type = cityName;
      if(this.cacheCity[cityId]){
        this.cityDetailList = this.cacheCity[cityId];
        return;
      }
      api.getMinsuCityList(cityId).then((resCity) => {
        let data = resCity.data;
        if (data.message != "成功") {
          alert("数据请求失败");
          return;
        }
        this.cityDetailList = data.productList;
        this.cacheCity[cityId] = data.productList;
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/home/minsu.scss";
</style>