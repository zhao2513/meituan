<template>
  <div class="register">
    <header class="reg-header">
      <div class="wrapper header-content">
        <router-link to="/" class="logo"> </router-link>
        <div class="right-login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }" class="login-btn btn">
            登录
          </router-link>
        </div>
      </div>
    </header>
    <section>
      <div class="reg-content">
        <form>
          <div class="reg-phone reg-item">
            <label for="phone">用户账号</label>
            <input
              type="text"
              class="phone-inp inp-item"
              @focus="userFocus"
              @blur="userBlur"
              v-model="userName"
            />
            <span class="inline-tip" v-show="userTipStatus">
              <i
                class="tip-status"
                :class="[errorUserMsg ? 'warm' : 'succuss']"
              ></i
              >{{ errorUserMsg }}
            </span>
          </div>
          <div class="reg-pass reg-item">
            <label for="phone">创建密码</label>
            <input
              type="password"
              class="phone-inp inp-item"
              v-model="password"
              @focus="passFocus"
              @blur="passBlur"
            />
            <span class="inline-tip" v-show="passTipStatus">
              <i
                class="tip-status succuss"
                :class="[errorPassMsg ? 'warm' : 'succuss']"
              ></i
              >{{ errorPassMsg }}
            </span>
            <div class="pw-str">
              <div class="pw-str-bg pw-str-bg-weak"></div>
              <div class="pw-str-bg-content">
                <span class="pw-str-bg-span">弱</span>
                <span class="pw-str-bg-span">中</span>
                <span class="pw-str-bg-span border-none">强</span>
              </div>
            </div>
          </div>
          <div class="reg-phone reg-item">
            <label for="phone">确认密码</label>
            <input
              type="password"
              class="phone-inp inp-item"
              v-model="rePassword"
              @focus="againFocus"
              @blur="againBlur"
            />
            <span class="inline-tip" v-show="againTipStatus">
              <i
                class="tip-status succuss"
                :class="[errorAgainMsg ? 'warm' : 'succuss']"
              ></i
              >{{ errorAgainMsg }}
            </span>
          </div>

          <div class="reg-item">
            <button class="reg-btn btn" @click.prevent="submitBtn">
              同意以下协议并注册
            </button>
          </div>
          <div class="reg-item-polic">
            <a href="#">《美团点评用户服务协议》 《美团点评隐私政策》</a>
          </div>
        </form>
      </div>
    </section>
    <footer>
      <p class="copyright">
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/"
          >京ICP证070791号</a
        >&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api"
export default {
  data() {
    return {
      userName: "",
      
      password: "",
      rePassword: "",
      errorUserMsg: "",
      errorPassMsg: "",
      errorAgainMsg: "",
      userTipStatus: false,
      againTipStatus: false,
      passTipStatus: false,
    };
  },
 
  
  methods: {
    //聚焦时用户状态，不显示icon
    userFocus() {
      this.userTipStatus = false;
    },
    passFocus() {
      this.passTipStatus = false;
    },
    againFocus() {
      this.againTipStatus = false;
    },
    //失焦时用户状态，显示icon
    //且要满足条件才能显示成功的 Icon
    userBlur() {
      if (this.userName.length < 4 || this.userName.length > 16) {
        this.errorUserMsg = "用户名必须为4-16位的字母数字下划线组成";
      } else {
        if (1) {
          this.errorUserMsg = "";
        }
      }
      this.userTipStatus = true;
    },
    passBlur() {
      if (this.password.length < 8) {
        this.errorPassMsg = "密码太短，至少8个字符";
      } else {
        this.errorPassMsg = "";
      }
      this.passTipStatus = true;
    },
    againBlur() {
      if (this.password != this.rePassword) {
        this.errorAgainMsg = "两次输入的密码不一致，请重新输入";
      } else {
        this.errorAgainMsg = "";
      }
      this.againTipStatus = true;
    },

    //提交
    submitBtn() {
      if (!this.errorUserMsg) {
        if (!this.errorPassMsg) {
          if (!this.errorAgainMsg) {
            api.getRegister({
              params:{
                appkey: "zhao2513_1581078586577",
              userName:this.userName,
              password:this.password,
              rePassword:this.rePassword,
              }
            }).then(res=>{
              console.log(res);
              if(res.data.status != "fail"){
                this.$router.push({name:'login'})
              }else{
                alert(res.data.msg)
              }
            });
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/reg/index.scss";
</style>