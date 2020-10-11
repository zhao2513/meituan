<template>
  <div class="page">
      <div class="list-content">
          <div class="list-header">
              <router-link to="/" class="list-header-a">
                  {{$store.state.localPosistion}}美团
              </router-link>
              <a href="#"><span class="list-sub-header">>广州{{$route.params.keyword}}</span></a>
          </div>
          <div class="list-content-main">
              <list-left/>
              <list-right/>
          </div>
      </div>
  </div>
</template>

<script>
import listLeft from './components/listLeft.vue'
import listRight from './components/listRight.vue'
export default {
    components:{
        listLeft,
        listRight
    }
}
</script>

<style lang="scss">
@import "@/assets/css/list/index.scss";
</style>