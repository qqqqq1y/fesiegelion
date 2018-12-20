<template>
  <div class="login-layout">
    <div class="login-container">
      <img class="login-logo" src="../../../static/logo-1.png" alt="">
      <p class="title">护理管理数据平台</p>
      <el-form :model="loginForm" ref="loginForm" class="login">
        <el-form-item
          class="input-simple"
          prop="username"
          :rules="[
            { required: true, message: '请输入账号'},
          ]">
          <el-input
            prefix-icon="el-icon-search"
            v-model="loginForm.username"
            placeholder="账号"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item
          class="input-simple"
          prop="password"
          :rules="[
            { required: true, message: '请输入密码'},
          ]">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="密码"
            type="password"
            @keyup.enter.native="login('loginForm')"
            v-model="loginForm.password"
            clearable>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button class="btn" type="primary" :loading="isLoading" @click="login('loginForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginService from '@/api/login';

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      isLoading: false
    };
  },
  methods: {
    login(formName) {
      this.isLoading = true;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = {
            ...this.loginForm
          };

          loginService.login(params).then((res) => {
            localStorage.setItem('hospitalId', res.data.hospital.id);
            localStorage.setItem('userId', res.data.id);

            this.$store.dispatch('hospitalId', res.data.hospital.id);
            this.$store.dispatch('userId', res.data.id);

            this.$router.push({name: 'importData'});
            this.isLoading = false;
          });
        } else {
          this.isLoading = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .login-layout {
    height: 100%;
    background: url('../../../static/login.png') no-repeat center;
    background-size:100% 100%;
  }
  .login-container {
    width: 530px;
    height: 580px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -265px;
    margin-top: -290px;
    border-radius: 20px;
    background: #fff;
    color: #F39C12;
    .title {
      line-height: 60px;
      text-align: center;
      font-size: 48px;
      color: #3F51B5;
    }
    .login-logo {
      width: 158px;
      height: 32px;
      margin: 32px 48px;
    }
    .login {
      padding: 0 80px;
    }
    .input-simple {
      margin-top: 36px;
    }
    .login-btn {
      margin-top: 50px;
      text-align: center;
      .btn {
        width: 196px;
        height: 68px;
        background: #F39C12;
        border-radius: 50px;
        border: none;
      }
    }
  }

</style>
