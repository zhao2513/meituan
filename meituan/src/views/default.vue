<template>
  <div>
    <header>
      <my-header />
    </header>
    <section>
      <router-view />
    </section>
    <footer>
      <my-footer />
    </footer>
  </div>

</template>

<script>
import myFooter from "@/components/footer/index";
import myHeader from "@/components/header/index";
// import myMain from '@//'
// import headeheaderPagerNav from '@/compoents/header/index.vue'
export default {
  components: {
    myFooter,
    myHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>