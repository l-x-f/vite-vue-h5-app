<template>
  <div class="home">
    <van-notice-bar left-icon="volume-o" :text="userInfo.username + '登录成功'" />

    <view class="swiper-wrapper">
      <AppSwiper :list="bannerList" />
    </view>

    <van-pull-refresh v-model="pullRefreshLoading" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        :finished-text="finishedText"
        @load="onLoad"
      >
        <van-card
          v-for="item in list"
          :key="item.id"
          :num="item.importance"
          :price="item.money"
          :desc="item.content"
          :title="item.title"
          :thumb="item.image"
        />
      </van-list>
    </van-pull-refresh>

    <Tabbar />
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import type { SwipeItem } from '@/components/Swipe'
import Tabbar from '@/components/Tabbar'
import AppSwiper from '@/components/Swipe'
import HomeServe from '@/api/list'

const DefaultPageInfo = {
  page: 1,
  pageSize: 10
}

interface Item {
  id: number
  importance: string
  money: string
  content: string
  title: string
  image: string
}

interface IState {
  list: Item[]
  pullRefreshLoading: boolean
  loading: boolean
  finishedText: string
  finished: boolean
  params: typeof DefaultPageInfo
}

const state: IState = reactive({
  list: [],
  // 下拉刷新
  pullRefreshLoading: false,
  // 上滑加载
  loading: false,
  finishedText: '加载中...',
  finished: false,
  params: { ...DefaultPageInfo }
})

const data = [
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
]

const bannerList: SwipeItem[] = data.map(item => ({ url: item }))

const store = useUserStore()

const { userInfo } = storeToRefs(store)

// 获取列表
const getList = async () => {
  try {
    if (state.pullRefreshLoading) {
      state.list = []
      state.pullRefreshLoading = false
    }
    const { data } = await HomeServe.getList(state.params)
    const list: Item[] = data.result || []
    state.list = [...state.list, ...list]
    if (state.params.page * state.params.pageSize >= data.total || !list.length) {
      state.finished = true
      state.finishedText = '没有更多了'
    } else {
      state.params.page += 1
    }
    state.loading = false
  } catch (error) {
    state.finished = true
    state.finishedText = '没有更多了'
  }
}
// 上滑加载
const onLoad = () => {
  state.finishedText = '加载中...'
  state.loading = true
  getList()
}
// 下拉刷新
const onRefresh = () => {
  state.finishedText = '加载中...'
  state.loading = true
  state.finished = false
  state.params.page = 1
  getList()
}

const { list, pullRefreshLoading, loading, finishedText, finished } = toRefs(state)
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
  overflow: auto;
}
</style>
