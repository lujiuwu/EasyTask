<template>
  <div>
    <h3>里程碑</h3>
    <v-list>
      <MilestoneItem v-for="item in data" :key="item.id" :data="item" />
    </v-list>
  </div>
</template>

<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import { MilestoneItem } from './_components'

  definePage({
    meta: { key: 'mdi-flag-checkered', title: '里程碑' },
  })

  const {
    data,
  } = useQuery({
    queryKey: ['milestones'],
    queryFn: () => axios.get('/api/flags').then(res => res.data.data),
  })

  console.log(data)
</script>

<style scoped>
</style>
