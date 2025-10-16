<template>
  <v-list>
    <v-list-item v-for="item in props.data" :key="item.id" :data="item">
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ t('pages.milestones.item.table.id') }}：{{ item.id }}</v-list-item-subtitle>
      <v-card>
        <v-card-text>
          <v-table class="border-sm mb-10px" density="compact" striped="even">
            <tbody>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.create-time') }}</td>
                <td>{{ item.createdAt }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.target-at') }}</td>
                <td>{{ item.targetAt }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.mark') }}</td>
                <td>{{ item.mark }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.description') }}</td>
                <td>{{ item.description }}</td>
              </tr>
              <!-- <tr>
                <td class="border-e-sm">关联任务</td>
                <td>
                  <v-chip
                    v-for="taskId in item.tasksId"
                    :key="taskId"
                    class="mr-6px"
                    density="compact"
                    @click="$router.push(`/tasks/${taskId}`)"
                  >
                    {{ getTask(taskId) }}
                  </v-chip>
                </td>
              </tr> -->
            </tbody>
          </v-table>
          <v-row>
            <v-col cols="12" density="comfortable">
              <v-btn>
                {{ t('pages.milestones.item.detail') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" setup>
  import type { MileStoneItem } from '@/types/MileStoneItem'
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()
  // import type { TaskItem } from '@/types/TaskItem'
  // import { useQuery } from '@tanstack/vue-query'
  // import axios from 'axios'
  const props = defineProps({
    data: {
      type: Array as PropType<MileStoneItem[]>,
      default: () => [],
      required: false,
    },
  })
  // const tasks = ref<TaskItem[]>([])
  // function getTask (id: string) {
  //   const { data: task } = useQuery({
  //     queryKey: ['task', id],
  //     queryFn: () => {
  //       return axios.get(`/api/tasks/id/${id}`).then(res => res.data.data)
  //     },
  //   })
  //   return task.value?.title
  // }
</script>
