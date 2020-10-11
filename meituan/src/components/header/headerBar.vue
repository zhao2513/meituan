<template>
<div class="header-bar  clearfix">
  <div class=" header-content clearfix" >
        <geo/>
        <my-nav/>
  </div>
</div>

</template>

<script>
// nav，header footer作为关键字 不能直接引入
import myNav from './nav.vue'
import geo from './geo.vue'
export default {
    components:{
        myNav,
        geo
    }
}
</script>

<style lange="scss">
.header-bar{
    background: #F8F8F8;
    width: 100%;
    font-size: 12px;
    color: #999;
    height: 40px;
    box-sizing: border-box;

}
</style>