<template>
  <v-container class="flex flex-col gap-10px">
    <v-card class="h-70vh">
      <v-card-text>
        <BaseInfo v-show="step === 0" ref="baseInfoRef" />
        <SubTasksInfo v-show="step === 1" ref="subTasksInfoRef" />
      </v-card-text>
    </v-card>
    <div class="flex justify-end gap-10px">
      <v-btn v-show="step > 0" @click="step--">上一步</v-btn>
      <v-btn v-show="step < 1" :disabled="!baseInfoRef?.isValid" @click="step++">下一步</v-btn>
      <v-btn v-show="step === 1" @click="handleSubmit">提交</v-btn>
    </div>
  </v-container>
</template>
<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useMutation } from '@tanstack/vue-query'
  import { v4 as uuidv4 } from 'uuid'
  import { useToast } from 'vue-toastification'
  import httpClient from '@/utils/http'
  import BaseInfo from './_components/BaseInfo.vue'
  import SubTasksInfo from './_components/SubTasksInfo.vue'

  const toast = useToast()
  useHeader({
    title: () => '添加任务',
  })
  const step = ref(0)

  function addTask (newTask: TaskItem) {
    return httpClient.post('/tasks', newTask)
  }

  const { mutate: addTaskFn } = useMutation({
    mutationFn: addTask,
    onSuccess: _data => {
      toast.success('任务创建成功', { timeout: 1000 })
    },
    onError: _error => {
      toast.error('任务创建失败')
    },
    onSettled: () => {
      baseInfoRef.value?.resetForm()
      subTasksInfoRef.value?.resetForm()
    },
  })
  function handleSubmit () {
    const newTask = {
      ...baseInfoRef.value?.formData,
      ...subTasksInfoRef.value?.formData,
      id: uuidv4(),
    }

    addTaskFn(newTask as TaskItem)
  }

  const baseInfoRef = ref<InstanceType<typeof BaseInfo> | null>(null)
  const subTasksInfoRef = ref<InstanceType<typeof SubTasksInfo> | null>(null)
</script>
