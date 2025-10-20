<template>
  <v-container>
    <div v-if="isPending">加载中</div>
    <v-card v-else>
      <v-card-title>
        {{ targetInfo?.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ targetInfo?.description }}
      </v-card-subtitle>
      <v-card-subtitle>
        {{ targetInfo?.createdAt }}
      </v-card-subtitle>
      <v-card-subtitle>
        {{ targetInfo?.targetAt }}
      </v-card-subtitle>
      <v-card-text>
        <v-table v-show="tasksQueries&&tasksQueries.length>0">
          <thead>
            <tr>
              <th class="text-left">
                子任务ID
              </th>
              <th class="text-left">
                子任务
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in tasksQueries" :key="index">
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
  import type { MileStoneItem } from '@/types/MileStoneItem'
  import { useQueries, useQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import { computed, watch } from 'vue'
  const route = useRoute()
  const id = (route.params as { id: string }).id

  function getMilestoneById () {
    return axios.get(`/api/milestones/${id}`).then(res => res.data.data)
  }

  type MileStone = MileStoneItem & { tasksId: string[] }

  const { data: targetInfo, isPending } = useQuery<MileStone>({
    queryKey: ['milestone', id],
    queryFn: getMilestoneById,
  })
  const taskIds = computed(() => targetInfo.value?.tasksId ?? [])
  watch(taskIds, newVal => {
    console.log('milestone', newVal)
  })
  const tasksQueries = useQueries({
    queries: computed(() =>
      taskIds.value.map((taskId: string) => ({
        queryKey: ['task', taskId],
        queryFn: () => axios.get(`/api/tasks/${taskId}`).then(res => res.data.data),
        enabled: !!taskId,
      })),
    ),
  })
  watch(tasksQueries, newVal => {
    console.log('tasksQueries', newVal)
  })
</script>

<style scoped>
</style>
