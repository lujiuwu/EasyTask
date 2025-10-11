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
  import axios from 'axios'
  import { useAppStore } from '@/stores/app'
  import { CardList, DoubleLineList, MileStoneList } from './_components'
  definePage({
    meta: { key: 'mdi-flag-checkered', title: '里程碑' },
  })
  const appStore = useAppStore()
  const {
    data,
  } = useQuery({
    queryKey: ['milestones'],
    queryFn: () => axios.get('/api/milestones').then(res => res.data.data),
    staleTime: 10 * 60 * 1000, // 10分钟内数据被认为是新鲜的
    refetchOnWindowFocus: false, // 禁用窗口焦点时自动刷新
    refetchOnReconnect: false, // 禁用重连时自动刷新
  })

</script>

<style scoped>
</style>
