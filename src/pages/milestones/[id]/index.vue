<template>
  <v-container>
    <div v-if="isPending">加载中</div>
    <v-card v-else>
      <v-card-title>
        {{ targetInfo?.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ targetInfo?.startAt }} - {{ targetInfo?.targetAt }}
      </v-card-subtitle>
      <v-card-subtitle>
        ID：{{ targetInfo?.id }}
      </v-card-subtitle>
      <v-card-subtitle>
        创建时间：{{ targetInfo?.createdAt }}
      </v-card-subtitle>
      <v-card-subtitle>
        描述：{{ targetInfo?.description }}
      </v-card-subtitle>
      <v-card-text>
        <div v-if="isTasksLoading" class="text-center py-4">
          子任务加载中...
        </div>
        <v-list
          v-else-if="tasksQueries && tasksQueries.length > 0"
          v-model:selected="selectedTasks"
          select-strategy="leaf"
        >
          <v-list-subheader class="pl-0!">
            子任务列表
          </v-list-subheader>
          <div class="flex justify-end mb-4 px-4">
            <v-btn color="primary" density="comfortable" variant="tonal" @click="batchAction = !batchAction">
              {{ batchAction ? '取消' : '批量操作' }}
            </v-btn>
            <v-btn
              v-show="batchAction&&selectedTasks.length>0"
              class="ml-2"
              color="error"
              density="comfortable"
              variant="tonal"
            >
              删除
            </v-btn>
          </div>
          <v-list-item
            v-for="(task, index) in tasksQueries"
            :key="index"
            class="border-b-sm"
            :value="task.data?.id"
          >
            <template #prepend="{ isSelected, select }">
              <v-list-item-action v-show="batchAction" start>
                <v-checkbox-btn :model-value="isSelected" @update:model-value="select" />
              </v-list-item-action>
            </template>
            <v-row>
              <v-col cols="6">
                <v-chip size="small">
                  {{ task.data?.id || '-' }}
                </v-chip>
              </v-col>
              <v-col cols="6">
                <router-link
                  v-if="task.data?.id"
                  class="text-decoration-none"
                  :to="`/tasks/${task.data.id}`"
                >
                  {{ task.data?.title || '-' }}
                </router-link>
                <span v-else>{{ task.data?.title || '-' }}</span>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
        <div v-else class="text-center py-4 text-grey">
          暂无子任务
        </div>
      </v-card-text>
    </v-card>
    <v-bottom-sheet v-model="showBottomSheet">
      <v-card>
        <v-card-title>
          开始与目标完成时间
        </v-card-title>
        <v-card-text class="h-400px">
          <VueDatePicker
            v-model="date"
            format="yyyy-MM-dd"
            :range="true"
            :time-picker="false"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="tonal" @click="showBottomSheet = false">
            确定
          </v-btn>
          <v-btn color="blue-grey" variant="tonal" @click="showBottomSheet = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  import type { MileStoneItem } from '@/types/MileStoneItem'
  import { useQueries, useQuery } from '@tanstack/vue-query'
  import dayjs from 'dayjs'
  import httpClient from '@/utils/http'
  const route = useRoute()
  const id = (route.params as { id: string }).id

  function getMilestoneById () {
    return httpClient.get(`/milestones/${id}`).then(res => res.data.data)
  }

  type MileStone = MileStoneItem & { tasksId: string[] }

  const { data: targetInfo, isPending } = useQuery<MileStone>({
    queryKey: ['milestone', id],
    queryFn: getMilestoneById,
  })
  const taskIds = computed(() => targetInfo.value?.tasksId ?? [])
  const date = ref<Date[]>([])

  onMounted(() => {
    if (targetInfo.value?.startAt && targetInfo.value?.targetAt) {
      const startDate = dayjs(targetInfo.value.startAt).toDate()
      const endDate = dayjs(targetInfo.value.targetAt).toDate()
      date.value = [startDate, endDate]
    }
  })
  const tasksQueries = useQueries({
    queries: computed(() =>
      taskIds.value.map((taskId: string) => ({
        queryKey: ['task', taskId],
        queryFn: () => httpClient.get(`/tasks/${taskId}`).then(res => res.data.data),
        enabled: !!taskId,
      })),
    ),
  })

  const isTasksLoading = computed(() => {
    return tasksQueries.value.some(query => query.isPending)
  })

  const selectedTasks = ref<string[]>([])
  const batchAction = ref<boolean>(false)
  const showBottomSheet = ref<boolean>(false)

  useHeader({
    title: () => targetInfo.value?.title ?? t('pages.milestones.placeholder'),
  })
</script>

<style scoped>
</style>
