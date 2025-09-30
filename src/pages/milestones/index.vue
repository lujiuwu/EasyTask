<template>
  <div>
    <v-container class="relative">
      <v-row>
        <v-col class="p-0!" cols="12">
          <v-text-field
            placeholder="搜索里程碑"
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
    queryFn: () => axios.get('/api/flags').then(res => res.data.data),
  })

</script>

<style scoped>
</style>
