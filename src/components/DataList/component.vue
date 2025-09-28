<template>
  <div>
    <v-empty-state
      v-if="isPending || error"
      headline="暂无内容"
      image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png"
      text="该筛选项没有任务"
      title="Data Not Found"
    />
    <div v-else>
      <water-fall
        v-if="appStore.layoutMode === 'water-fall'"
        :data="allItems"
      />
      <normal-list v-else :data="tasksData.data" />
      <v-btn v-if="hasNextPage" @click="fetchNextPage">加载更多</v-btn>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useInfiniteQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import _ from 'lodash'
  import { watchEffect } from 'vue'
  import { useAppStore } from '@/stores/app'
  import { NormalList, WaterFall } from './_components'

  const appStore = useAppStore()
  async function getTasksByPage ({ pageParam = 1 }) {
    const { data } = await axios.get('/api/tasks', {
      params: {
        page: pageParam,
      },
    })

    return data
  }
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    error,
  } = useInfiniteQuery({
    queryKey: ['tasks'],
    queryFn: getTasksByPage,
    getNextPageParam: lastPage => {
      const { hasNextPage, currentPage } = lastPage.data
      return hasNextPage ? currentPage + 1 : undefined
    },
    initialPageParam: 1,
  })
  // 正确的计算属性 - 使用 data 字段
  const allItems = computed(() => {
    const itemsList = data.value?.pages.flatMap(page => page.data) || []
    const list = _.flatMap(itemsList, item => item.data)
    return list
  })
  watchEffect(() => {
    console.log(hasNextPage.value)
    console.log(allItems.value)
  })
</script>
