<template>
  <div class="userinfo-form">
    <van-cell-group>
      <van-field class="list-field" readonly label="头像">
        <template #button>
          <van-image
            round
            width="2rem"
            height="2rem"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </template>
      </van-field>
      <van-field
        v-model="userInfo.nickName"
        readonly
        label="昵称"
        right-icon="arrow"
        input-align="right"
      />
      <van-field
        v-model="userInfo.sex"
        readonly
        label="性别"
        right-icon="arrow"
        input-align="right"
      />
      <van-field
        v-model="userInfo.phone"
        readonly
        label="手机号码"
        right-icon="arrow"
        input-align="right"
      />
      <van-field
        v-model="userInfo.mailbox"
        readonly
        label="邮箱"
        right-icon="arrow"
        input-align="right"
      />

      <van-field readonly label="修改密码" right-icon="arrow" input-align="right" />
    </van-cell-group>
    <div class="logout-cell" @click="logout">退出登录</div>
  </div>
  <Tabbar />
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Tabbar from '@/components/Tabbar'

const router = useRouter()

interface IState {
  userInfo: {
    nickName: string
    sex: string
    phone: string
    mailbox: string
  }
}

const state: IState = reactive({
  userInfo: {
    nickName: 'admin',
    sex: '男',
    phone: '1515454545',
    mailbox: '1515454545@gmail.com'
  }
})

const logout = () => {
  router.push('/login')
}

const { userInfo } = toRefs(state)
</script>

<style lang="less" scoped="scoped">
.userinfo-form {
  background: #f5f5f5;
  min-height: 100vh;
  :deep(.van-cell) {
    &::after {
      border-bottom: 1px solid #efefef;
    }
  }
  :deep(.van-cell__title) {
    font-size: 14px;
    color: #111;
  }
  :deep(.van-cell__value) {
    font-size: 14px;
    color: #111;
  }
  .logout-cell {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    color: #00a95d;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
  }
}
</style>
