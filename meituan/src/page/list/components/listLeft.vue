<template>
  <div class="list-left-content">
    <leftHeader />
    <common-list />
    <left-page :num="num"/>
  </div>
</template>

<script>
import leftHeader from "./leftHeader";
import commonList from "./commonList";
import leftPage from "./leftPage";
export default {
  components: {
    leftHeader,
    commonList,
    leftPage
  },
  data(){
    return {
      num:10
    }
  },
};
</script>

<style>
</style>