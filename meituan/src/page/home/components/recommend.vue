<template>
  <div class="recommend-wrapper wrapper">
      <div class="recommend-title wrapper-title">
          <dl class="minsu-title-dl">
              <dt>猜你喜欢</dt>
              <dd class="active">为你甄选最合适的</dd>
          </dl>
      </div>
      <div class="recommend-content wrapper-content">
          <ul>
              <li v-for="item in list" :key="item.itemId">
                  <router-link to="#">
                      <div class="recommend-content-car">
                          <div class="recommend-img">
                              <img :src="item.imgUrl" alt="item.title">
                          </div>
                          <div class="recommend-info">
                              <div class="title align">
                                  {{item.title}}
                              </div>
                              <div class="score-line align">
                                  <div class="score">
                                    <rate :valueCustomText="item.score" />
                                  </div>
                                  <div class="comment-num">
                                      {{item.commentNum}}评论
                                  </div>
                              </div>
                              <div class="dec-line">
                                  {{item.areaName}}
                              </div>
                              <div class="bottom-line">
                                  <span class="yuan">￥</span>
                                  <span class="price-num">{{item.lowPrice}}</span>
                                <span class="qi">起</span>
                              </div>
                          </div>
                    </div>
                  </router-link>
              </li>
            
          </ul>
      </div>
  </div>
</template>

<script>
import api from "@/api";
import rate from '@/components/rate'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        api.getRecommend().then(res=>{
            if(res.status != 200){
                alert('数据请求有误')
            }
            this.list = res.data;
        })
    },
    components:{
        rate,
    }
}
</script>

<style lang="scss">
@import '@/assets/css/home/recommend.scss'
</style>