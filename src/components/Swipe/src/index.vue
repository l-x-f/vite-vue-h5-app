<template>
  <div class="swipe-components">
    <van-swipe :autoplay="3000" indicator-color="#629362">
      <van-swipe-item v-for="(item, index) in list" :key="index" @click="onClick(item)">
        <img :src="item.url" class="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
import type { SwipeItem } from './type'

defineOptions({
  name: 'AppSwipe'
})

interface IProps {
  list: SwipeItem[]
}

withDefaults(defineProps<IProps>(), {
  list: () => []
})

const emit = defineEmits(['clickItem'])

const onClick = (item: SwipeItem) => {
  emit('clickItem', item)
}
</script>

<style lang="less" scoped>
.swipe-components {
  padding: 8px 15px 8px 16px;
  background-color: #fff;

  .van-swipe {
    width: 344px;
    height: 112px;
    border-radius: 2px;

    .van-swipe__indicator {
      width: 2vw;
      height: 2vw;
      background-color: #fff;
      border-radius: 50%;
      opacity: 1;
    }

    .image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .tip {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 32px;
    background: #000;
    opacity: 0.42;
  }
}
</style>
