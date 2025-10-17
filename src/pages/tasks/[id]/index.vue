<template>
  <div class="p-10px">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="10">
            {{ data?.title }}
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-subtitle>{{ t('pages.tasks.item.detail.id') }}: {{ data?.id }}</v-card-subtitle>
      <v-card-subtitle>{{ t('pages.tasks.item.detail.create-time') }}: {{ data?.createTime }}</v-card-subtitle>
      <v-card-subtitle>{{ t('pages.tasks.item.detail.update-time') }}: {{ data?.updateTime }}</v-card-subtitle>
      <v-card-subtitle>
        <span>{{ t('pages.tasks.item.detail.status') }}: </span>
        <v-chip size="small">
          {{ data?.status }}
        </v-chip>
      </v-card-subtitle>
      <v-card-text>
        <v-skeleton v-if="isPending" type="text" />
        <TaskDetailPanel v-else-if="data" :data="data" @update:content="updateContent" />
        <div v-else>
          {{ t('pages.tasks.item.detail.not-found') }}
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="flex flex-col">
          <v-btn color="primary" variant="flat">{{ t('pages.tasks.item.detail.save-changes') }}</v-btn>
          <AddSubTaskButton />
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useQuery } from '@tanstack/vue-query'
  import axios from 'axios'
  import { AddSubTaskButton } from '@/components/AddSubTaskButton'
  import { TaskDetailPanel } from '@/components/TaskDetailPanel'
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()
  const route = useRoute()
  const id = (route.params as { id: string }).id
  const {
    data,
    isPending,
  } = useQuery({
    queryKey: ['task', id],
    queryFn: () => {
      return axios.get(`/api/tasks/${id}`).then(res => res.data.data)
    },
  })

  function updateContent (value: TaskItem[]) {
    console.log(value)
  }
</script>
