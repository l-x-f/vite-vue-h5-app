<template>
  <div class="login">
    <div class="login-container">
      <h1 class="title">{{ title }}</h1>
      <van-form @submit="submitForm">
        <van-cell-group inset>
          <van-field
            v-model="loginForm.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="loginForm.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="submit-button-row">
          <van-button round block type="primary" native-type="submit" :loading="loading">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

/**
 * 登录界面类型
 */
interface ILoginState {
  loading: boolean
  loginForm: {
    username: string
    password: string
  }
}

const title = import.meta.env.VITE_APP_DEFAULT_TITLE

const router = useRouter()
const store = useUserStore()
const state = reactive<ILoginState>({
  loading: false,
  loginForm: {
    username: 'admin',
    password: '123456'
  }
})
// 登录
const submitForm = async () => {
  try {
    state.loading = true
    await store.login(state.loginForm)
    router.push('/home')
  } catch (error) {
    console.log(error, 'e')
  }
  state.loading = false
}

const { loading, loginForm } = toRefs(state)
</script>

<style scoped lang="less">
.login {
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  .title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .submit-button-row {
    margin-top: 16px;
  }

  :deep(.van-cell-group) {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
