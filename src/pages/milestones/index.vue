<template>
  <div>
    <v-container class="relative">
      <v-row>
        <v-col class="p-0!" cols="12">
          <v-text-field
            :placeholder="$t('pages.milestones.search.milestones')"
            prepend-inner-icon="mdi-magnify"
          />
        </v-col>
      </v-row>
    </v-container>
    <MileStoneList v-if="appStore.col === '1'" :data="data" />
    <CardList v-if="appStore.col === '4'" :data="data" />
    <DoubleLineList v-if="appStore.col === '2'" :data="data" />
  </div>
</template>

<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { ToolBarOptions } from '@/enum/layout'
  import { useAppStore } from '@/stores/app'
  import httpClient from '@/utils/http'
  import { CardList, DoubleLineList, MileStoneList } from './_components'

  useHeader({
    title: () => t('pages.milestones.title'),
    options: [ToolBarOptions.COL],
  })
  const appStore = useAppStore()
  const {
    data,
  } = useQuery({
    queryKey: ['milestones'],
    queryFn: () => httpClient.get('/milestones').then(res => res.data.data),
    staleTime: 10 * 60 * 1000, // 10分钟内数据被认为是新鲜的
    refetchOnWindowFocus: false, // 禁用窗口焦点时自动刷新
    refetchOnReconnect: false, // 禁用重连时自动刷新
  })
  useHeader({
    title: () => t('pages.milestones.title'),
    options: [ToolBarOptions.COL],
  })
</script>

<style scoped>
</style>
