<template>
  <div class="p-20px">
    <v-card>
      <v-card-title>{{ data?.title }}</v-card-title>
      <v-card-subtitle>任务ID: {{ data?.id }}</v-card-subtitle>
      <v-card-text>
        <v-skeleton v-if="isPending" type="text" />
        <PublicContent v-else-if="data" :data="data" />
        <div v-else>
          任务未找到
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import _ from 'lodash'
  import { PublicContent } from '@/components/DataList/_components/PublicContent'

  const route = useRoute()
  const id = _.toNumber((route.params as { id: string }).id)
  const {
    data,
    isPending,
  } = useQuery({
    queryKey: ['task', id],
    queryFn: () => {
      return axios.get(`/api/tasks/${id}`).then(res => res.data.data)
    },
  })
</script>
