<template>
  <div class="loginOrR">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <h2 class="title">{{title}}</h2>
    <span class="welcomeMsg">
      <slot v-if="!isRegis">你好欢迎登入</slot>
    </span>
    <div class="logofrom">
      <div>
        <input type="text" placeholder="请输入用户名" />
        <i v-if="haveUser" id="haveUser">用户名已存在</i>
      </div>
      <div v-if="isRegis">
        <input type="email" placeholder="请输入邮箱" />
        <i v-if="verifyMail" id="verifyMail"></i>
      </div>
      <div>
        <input name="passworld" id="passworld" type="password" placeholder="请输入密码" />
        <i id="showPassworld"></i>
      </div>
    </div>
    <button class="loginRegistBtn">{{title}}</button>
  </div>
</template>
<script>
export default {
  name: "login-regis",
  data() {
    return { haveUser: true, verifyMail: true };
  },
  props: {
    isRegis: Boolean
  },
  computed: {
    title() {
      return this.isRegis ? "注册" : "登录";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/base.scss";

.loginOrR {
  padding: 30px;
  box-sizing: border-box;
  min-width: 320px;
  max-width: 440px;
  margin: 0 auto;

  .logo {
    height: 80px;
    width: 80px;
    margin: 30px auto;
  }
  .title {
    margin: 0 0 5px 0;
  }
  .welcomeMsg {
    color: $font-cloro2;
    font-size: 16px;
  }
}
input {
  border: none;
  padding: 0;
}
.logofrom {
  & input {
    outline: none;
    height: 48px;
    width: 100%;
    margin-top: 10px;
    //margin: 15px 0;
    font-size: 16px;
    border-bottom: 1px solid gray;
  }
  & > div {
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  & > div i {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}

.loginRegistBtn {
  display: block;
  height: 48px;
  width: 260px;
  background-color: $base-active-color2;
  box-shadow: 0px 25px 16px -18px rgba(255, 228, 49, 0.4);
  border-radius: 24px;
  font-size: $base-font-size3;
  color: $font-cloro1;
  font-weight: 700;
  margin: 40px auto 0;
}
button {
  border: none;
  background: none;
  margin: 0 auto;
}
#showPassworld {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-image: url(../../assets/img/look.png);
  background-repeat: no-repeat;
}
#verifyMail {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-image: url(../../assets/img/verifymail.png);
  background-repeat: no-repeat;
}
#haveUser {
  font-style: normal;
  font-size: 12px;
  color: red;
  margin-top: 2px;
}
</style>