<template>
  <div class="my-header" >    
    <header-bar/>
    <search/>
  </div>
</template>

<script>
import headerBar from './headerBar.vue'
import search from "./search";
export default {
    name:'myHeader',
    components:{
        headerBar,
        search
    }
}
</script>

<style lang="scss">
@import '@/assets/css/header/index.scss'


</style>