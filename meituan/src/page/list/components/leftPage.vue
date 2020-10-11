<template>
  <div class="list-page">
    <list-page  :num="num"/>
  </div>
</template>

<script>
import listPage from '@/components/page'
export default {
  props:{
    //默认为一页
      num:{
        type:Number,
        default:10
      }
    
  },
  components:{
    listPage
  }
}
</script>

<style>

</style>