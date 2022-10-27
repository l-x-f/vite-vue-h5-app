<template>
  <!--  eslint-disable vue/no-deprecated-v-on-native-modifier  -->
  <div id="tab-bar">
    <van-tabbar
      v-model="state.active"
      fixed
      route
      safe-area-inset-bottom
      active-color="#00A95D"
      inactive-color="#9A9A9A"
      :z-index="99"
    >
      <van-tabbar-item
        v-for="(item, index) in state.tabList"
        :key="index"
        replace
        :to="item.to"
        :icon="item.icon"
        @click.native="handleClickItem({ ...item, index })"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ITabBarItem } from './type'

defineOptions({
  name: 'TabBar'
})

interface IState {
  tabList: ITabBarItem[]
  active: string
}

const emit = defineEmits(['handleClickItem'])

const state = reactive<IState>({
  tabList: [
    {
      to: '/home',
      name: '首页',
      icon: 'home-o'
    },

    {
      to: '/my',
      name: '我',
      icon: 'user-circle-o'
    }
  ],
  active: '/index'
})
const handleClickItem = (data: ITabBarItem) => {
  emit('handleClickItem', data)
}
</script>

<style lang="less">
#tab-bar {
  padding-bottom: 50px;
  .van-tabbar {
    height: 50px;
    background: #feffff;
    box-shadow: 0 0 4px 0 rgba(173, 173, 173, 0.5);
  }
  .van-tabbar-item__icon {
    margin-bottom: 4px;
  }
  .van-tabbar-item__text {
    font-size: 10px;
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}
</style>
