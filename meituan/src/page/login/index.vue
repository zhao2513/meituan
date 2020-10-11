<template>
  <div class="login">
    <header>
      <router-link to="/" class="site-login"></router-link>
    </header>
    <section>
      <div class="left-logo">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt=""
        />
      </div>
      <div class="right-form">
        <form>
          <div class="warm-info" v-show="errorMsg">
            <i></i>
            {{errorMsg}}
          </div>
          <div class="title">
            <div class="title-left">账号登录</div>
            <div class="title-right">普通方式登陆<i></i></div>
          </div>
          <div class="login-phone login-item">
            <span
              ><span class="plus">+</span>86 <i class="arrow-toright"></i>
            </span>
            <input type="text" v-model="userName" placeholder="账号" class="phone-inp item-inp" />
          </div>
          <div class="login-verify">
            <div class="login-item">
              <i class="lock"></i>
              <input type="password" @blur="userBlur" v-model="password" placeholder="密码" class="item-inp verify-inp" />
              <!-- <div class="get-btn"><button>获取手机动态码</button> </div> -->
            </div>
          </div>
          <p class="forget-pass">忘记密码？</p>
          <div class="login-btn" @click="subimtLogin">登录</div>
          <p class="login-policy">
            提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
            <router-link to="/"
              >《美团点评用户服务协议》《美团点评隐私政策》</router-link
            >
          </p>
          <div class="login-bottom">
            <div class="hezuo">
              <span>用合作网站账号登录</span>
            </div>
            <div class="other-logo">
              <span class="qq-logo"></span>
              <span class="weibo-logo"></span>
            </div>
          </div>
        </form>
      </div>
    </section>
    <footer>
        <div class="footer-site">
            <ul>
            <li class="first"><a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a></li>
            <li><a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a></li>
            <li><a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
            <li><a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a></li>
            <li class="last"><a href="http://meituan.com/mobile">美团手机版</a></li>
        </ul>
        </div>
        <div class="copyright">
        <p>
            ©<span>2020</span>
            <a href="https://www.meituan.com">美团网团购</a>
            meituan.com
            <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
            京公网安备11010502025545号
        </p>
    </div>
    </footer>
  </div>
</template>

<script>
import api from "@/api"
export default {
  data(){
    return {
      errorMsg:'',
      userName:'',
      password:'',
    }
  },
  methods:{
    userBlur(){
      if (this.userName.length < 4 || this.userName.length > 16) {
        this.errorMsg = "请输入正确的账号";
      } else{
        this.errorMsg = "";
      }
    },
    subimtLogin(){
       console.log(this.userName, this.password);
            if (!this.userName) {
                this.error = '请输入账号';
                return false;
            }
            if (!this.password) {
                this.error = '请输入密码';
                return false;
            }
            console.log(this.errorMsg);
      if(!this.errorMsg){
        console.log(this.errorMsg);
        api.getLogin( {
              params:{
                appkey: "zhao2513_1581078586577",
              userName:this.userName,
              password:this.password,
              }
            }).then(res=>{
              if(res.data.status == "success"){
                this.$router.push({name:'home'});
                this.$store.commit('changeUser',this.userName)
              }else{
                alert(res.data.msg)
              }
            })
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>