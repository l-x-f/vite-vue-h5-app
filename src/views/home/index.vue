<template>
  <div class="instance">home</div>
  <div class="userInfo">{{ userInfo }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useGetters } from '/@/store'
export default defineComponent({
  setup() {
    const state = reactive({})
    const { userInfo } = useGetters()
    return { ...toRefs(state), userInfo }
  }
})
</script>

<style lang="scss" scoped></style>
