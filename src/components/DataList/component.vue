<template>
  <div>
    <empty-state
      v-if="customIsPending || error"
      :headline="'暂无内容'"
      :image="'https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png'"
      :text="'该筛选项没有任务'"
      :title="'Data Not Found'"
    />
    <div v-else>
      <water-fall
        v-if="appStore.layoutMode === 'water-fall'"
        :data="allItems"
      />
      <normal-list v-else :data="allItems" />

      <!-- 加载状态指示器 -->
      <div v-if="customIsFetchingNextPage" class="text-center pa-4">
        <v-progress-circular color="primary" indeterminate />
        <span class="ml-2">加载中...</span>
      </div>

      <!-- 没有更多数据时的提示 -->
      <div v-else-if="!hasNextPage && allItems.length > 0" class="text-center pa-4 text-grey">
        没有更多数据了
      </div>

      <!-- 无限滚动哨兵元素 -->
      <div v-if="hasNextPage" class="infinite-scroll-sentinel" style="height: 1px; width: 100%;" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useInfiniteQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import _ from 'lodash'
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import { EmptyState } from '@/components/EmptyState'
  import { TaskStatus } from '@/enum/task_status'
  import { useAppStore } from '@/stores/app'

  import { NormalList, WaterFall } from './_components'

  const appStore = useAppStore()

  // 自定义加载状态管理
  const customIsPending = ref(false)
  const customIsFetchingNextPage = ref(false)

  async function getTasksByPage ({ pageParam = 1 }) {
    const res = await axios.get('/api/tasks/' + pageParam)

    return res.data.data
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['tasks'],
    queryFn: getTasksByPage,
    getNextPageParam: lastPage => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined
    },
    initialPageParam: 1,
  })

  // 延迟
  watch(isPending, newValue => {
    if (newValue) {
      customIsPending.value = true
    } else {
      // 当原始加载完成时，再保持3秒
      setTimeout(() => {
        customIsPending.value = false
      }, 2000)
    }
  })

  watch(isFetchingNextPage, newValue => {
    if (newValue) {
      customIsFetchingNextPage.value = true
    } else {
      // 当原始加载完成时，再保持3秒
      setTimeout(() => {
        customIsFetchingNextPage.value = false
      }, 2000)
    }
  })

  const allItems = computed(() => {
    const filter = appStore.filter
    console.log(filter)
    if (filter === TaskStatus.UNFINISHED) {
      return _.flatMap(data.value?.pages, page => page.data.filter((page: TaskItem) => page.status === TaskStatus.UNFINISHED)) || []
    } else if (filter === TaskStatus.FINISHED) {
      return _.flatMap(data.value?.pages, page => page.data.filter((page: TaskItem) => page.status === TaskStatus.FINISHED)) || []
    }
    return _.flatMap(data.value?.pages, page => page.data) || []
  })

  function handleScroll () {
    if (customIsFetchingNextPage.value || !hasNextPage.value) {
      return
    }

    const sentinel = document.querySelector('.infinite-scroll-sentinel')
    if (sentinel) {
      const rect = sentinel.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight + 100

      if (isVisible) {
        fetchNextPage()
      }
    }
  }

  // 组件挂载时添加滚动监听
  onMounted(() => {
    // 监听 window 滚动
    window.addEventListener('scroll', handleScroll, { passive: true })

    // 也监听 document 滚动（某些情况下可能需要）
    document.addEventListener('scroll', handleScroll, { passive: true })
  })

  // 组件卸载时移除滚动监听
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('scroll', handleScroll)
  })
</script>
