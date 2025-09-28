<template>
  <div>
    <div v-if="listData.length > 0">
      <water-fall v-if="appStore.layoutMode === 'water-fall'" />
      <normal-list v-else-if="appStore.layoutMode === 'normal-list'" />
    </div>
    <v-empty-state
      v-else
      headline="暂无内容"
      image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png"
      text="该筛选项没有任务"
      title="Data Not Found"
    />
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
