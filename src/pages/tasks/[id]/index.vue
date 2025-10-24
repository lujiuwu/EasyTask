<template>
  <div class="p-10px">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="10">
            {{ data?.title }}
          </v-col>
          <v-col cols="1">
            <v-icon @click="captureScreenshot">mdi-camera</v-icon>
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
          <v-btn color="primary" variant="tonal">{{ t('pages.tasks.item.detail.save-changes') }}</v-btn>
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
  import html2canvas from 'html2canvas'
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
  function captureScreenshot () {
    // 配置 html2canvas 选项
    const options = {
      allowTaint: true,
      useCORS: true,
      scale: 2, // 提高图片质量
      backgroundColor: '#ffffff',
      logging: false, // 关闭日志
    }

    html2canvas(document.body, options).then(canvas => {
      // 创建下载链接
      const link = document.createElement('a')
      link.download = `screenshot-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      document.body.append(link)
      link.click()
      link.remove()
    }).catch(error => {
      console.error('截图失败:', error)
    })
  }
</script>
