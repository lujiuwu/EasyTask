<template>
  <v-btn
    v-show="y > 10"
    class="back-to-top-btn"
    color="primary"
    icon="mdi-arrow-up"
    @click="handleBackToTop"
  />
</template>
<script lang="ts" setup>
  import { useWindowScroll } from '@vueuse/core'
  const { y } = useWindowScroll()
  function handleBackToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<style scoped>
.back-to-top-btn {
  position: fixed !important;
  right: 20px;
  bottom: 80px;
  z-index: 1000;
}
</style>
