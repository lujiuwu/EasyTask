<template>
  <div>
    <water-fall v-if="appStore.layoutMode === 'water-fall'" />
    <normal-list v-else-if="appStore.layoutMode === 'normal-list'" />
  </div>
</template>
<script lang="ts" setup>
  import { computed, provide } from 'vue'
  import { useAppStore } from '@/stores/app'
  import { NormalList } from './_components/NormalList'
  import { WaterFall } from './_components/WaterFall'

  const appStore = useAppStore()
  const listData = computed(() => appStore.listData)

  provide('listData', listData)
</script>
