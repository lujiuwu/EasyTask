<template>
  <div class="p-20px w-full h-100vh">
    <SkeletonTemplate />
  </div>
</template>

<script lang="ts" setup>
  import { SkeletonTemplate } from '../_components/SkeletonTemplate'

  useHeader({
    title: () => t('pages.setting.useful-functions.items.about-system'),
  })
</script>

<style scoped>
</style>
