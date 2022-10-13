<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon class="login-main" size="large">
      <div class="title">平台管理系统</div>
      <div class="form">
        <el-form-item prop="phone" :rules="[
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ]">
          <el-input v-model="ruleForm.phone" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="verifyCode" :rules="[
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]">
          <el-input v-model="ruleForm.verifyCode" placeholder="验证码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(ruleFormRef)" style="width: 100%">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
    <footer class="footer">
      ©2022 Created by lvfeifei, All Rights Reserved.
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { setStorage } from "js-common-library"
import Api from "./Api"

const ruleFormRef = ref()
const ruleForm = reactive({
  phone: '',
  verifyCode: ''
})
const login = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const { token } = Api.login(ruleForm)
      setStorage("token", token)
      const url = "/"
      window.location.href = url

    }
  })
}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  justify-content: center;
  height: 100vh;
  background: #000 url('https://static-venus.shandiantech.com/skio/20210806/1628237690633_login-bg.png');
  background-size: cover;
}

.login-main {
  width: 380px;
  margin-top: 200px;

  .title {
    font-size: 33px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }

  .form {
    margin-top: 32px;

    .code_but {
      display: block;
      width: 100%;
    }
  }
}

.footer {
  position: fixed;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  bottom: 30px;
}
</style>