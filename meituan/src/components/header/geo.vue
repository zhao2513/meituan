<template>
  <div class="geo">
      <Icon type="ios-pin" />
      <span class="city">{{$store.state.localPosistion}}</span>
      <router-link class="changeCity"  to="/">
        切换城市
      </router-link>
      <div class="near-city">
        [
          <router-link class="city-guss" to="/">
            佛山
          </router-link>
           <router-link class="city-guss" to="/">
            顺德
          </router-link>
           <router-link class="city-guss" to="/">
            南沙
          </router-link>
        ]
      </div>
      <div class="user-enstry" v-show="!$store.state.userName">
        <router-link :to="{name:'login'}" class="user-login"><span>立即登录</span></router-link>
        <router-link :to="{name:'register'}" class="user-reg"><span>注册</span></router-link>
      </div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store.state.a);
  }
} 
</script>

<style lang="scss">
@import "@/assets/css/header/bar.scss";





</style>