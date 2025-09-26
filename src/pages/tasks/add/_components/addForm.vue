<template>
  <div>
    <v-form>
      <v-container>
        <v-text-field
          v-model="title"
          label="任务名称"
          placeholder="任务名称不得少于三个字符"
          :rules="[(value: string) => {
            if (!value) {
              return '任务名称不能为空'
            }
            if (value.length < 3) {
              return '任务名称不得少于三个字符'
            }
            return true
          }]"
          v-bind="titleProps"
        />
        <v-select
          v-model="type"
          :items="taskTypeOptions"
          label="任务类型"
          placeholder="任务类型"
          v-bind="typeProps"
        >
          <template #append-item>
            <v-btn>新增任务类型</v-btn>
          </template>
        </v-select>
        <v-select
          v-model="status"
          :items="taskStatusOptions"
          label="任务状态"
          placeholder="任务状态"
          readonly
          v-bind="statusProps"
        />
        <v-select
          v-model="chips"
          chips
          :items="chipsOptions"
          label="任务标签"
          multiple
          placeholder="任务标签"
          v-bind="chipsProps"
        >
          <template #item="{ props }">
            <v-list-item class="h-50px lh-50px">
              <template #prepend>
                <v-checkbox v-bind="props" />
              </template>
              <template #default>
                <v-chip
                  :color="props.title.color"
                  :prepend-icon="props.title.icon"
                  v-bind="props"
                >
                  {{ props.title.label }}
                </v-chip>
              </template>
            </v-list-item>
          </template>
        </v-select>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { computed, watch } from 'vue'
  import { TaskStatus } from '@/enum/task_status'
  import { TaskType } from '@/enum/task_type'
  import { TaskItemSchema } from '@/types/TaskItem'

  const taskTypeOptions = [
    { title: '普通任务', value: TaskType.NORMAL },
    { title: '计划任务', value: TaskType.SCHEDULE },
    { title: '重要任务', value: TaskType.IMPORTANT },
    { title: '日常任务', value: TaskType.DAILY },
    { title: '工作任务', value: TaskType.WORK },
  ]

  const chipsOptions = [
    { label: '重要', color: 'red', icon: 'mdi-alert' },
    { label: '计划表', color: 'black' },
    { label: '养成习惯', color: 'pink', icon: 'mdi-home' },
  ]

  const taskStatusOptions = [
    { title: '未完成', value: TaskStatus.UNFINISHED },
    { title: '已完成', value: TaskStatus.FINISHED },
  ]

  const { defineField, errors, meta } = useForm({
    validationSchema: toTypedSchema(TaskItemSchema),
    initialValues: {
      title: '',
      type: TaskType.NORMAL,
      status: TaskStatus.UNFINISHED,
      chips: [],
    },
  })

  const [title, titleProps] = defineField('title')
  const [type, typeProps] = defineField('type')
  const [status, statusProps] = defineField('status')
  const [chips, chipsProps] = defineField('chips')

  watch(() => errors.value.title, isValid => {
    console.log('title error:', isValid)
  })

  // 暴露表单验证状态给父组件
  defineExpose({
    isValid: computed(() => meta.value.valid),
    errors: errors,
    formData: computed(() => ({
      title: title.value,
      type: type.value,
      status: status.value,
      chips: chips.value,
    })),
  })
</script>

<style lang="scss" scoped>
</style>
