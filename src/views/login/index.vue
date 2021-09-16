<template>
  <div class="login">
    <div class="login-container">
      <van-form @submit="submitForm">
        <van-cell-group inset>
          <van-field
            v-model="loginForm.userName"
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

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// import { useStore } from '/@/store'

/**
 * 登录界面类型
 */
interface ILoginState {
  loading: boolean
  loginForm: {
    userName: string
    password: string
  }
}

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    // const store = useStore()
    const state = reactive<ILoginState>({
      loading: false,
      loginForm: {
        userName: '',
        password: ''
      }
    })
    // 登录
    const submitForm = async () => {
      try {
        state.loading = true
        // await store.dispatch('user/login', state.loginForm)
        router.push('/home')
      } catch (error) {
        console.log(error, 'e')
      }
      state.loading = false
    }

    return {
      ...toRefs(state),
      submitForm
    }
  }
})
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  .submit-button-row {
    margin-top: 16px;
  }
}
</style>
