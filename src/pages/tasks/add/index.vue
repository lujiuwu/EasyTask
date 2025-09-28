<template>
  <div class="p-10px">
    <v-card>
      <v-list-item>
        <template #title>
          <h2>添加任务</h2>
        </template>
      </v-list-item>
      <v-divider />
      <v-card-text>
        <AddForm v-show="currentStep === 0" ref="addFormRef" />
        <AddSubItem v-show="currentStep === 1" ref="addSubItemRef" />
        <v-row v-show="currentStep === 1">
          <v-col cols="2">
            <v-btn @click="currentStep--">
              上一步
            </v-btn>
          </v-col>
          <v-col cols="2" offset="7">
            <v-btn @click="handleSubmit">
              提交
            </v-btn>
          </v-col>
        </v-row>
        <v-btn
          v-show="currentStep === 0"
          :disabled="isNextStepDisabled"
          @click="currentStep++"
        >
          下一步
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/stores/app'
  import AddForm from './_components/addForm.vue'
  import AddSubItem from './_components/addSubItem.vue'

  const currentStep = ref(0)
  const addFormRef = ref<InstanceType<typeof AddForm> | null>(null)
  const addSubItemRef = ref<InstanceType<typeof AddSubItem> | null>(null)
  const router = useRouter()
  const appStore = useAppStore()

  function handleSubmit () {
    const newTask = {
      ...addFormRef.value?.formData,
      ...addSubItemRef.value?.formData,
    }
    appStore.addTask(newTask as TaskItem)
    router.push('/tasks')
  }

  // 计算下一步按钮是否可用
  const isNextStepDisabled = computed(() => {
    if (currentStep.value !== 0) return false
    return !addFormRef.value?.isValid
  })

</script>
