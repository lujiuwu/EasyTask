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
          chips
          :items="chipsOptions"
          label="任务标签"
          multiple
          placeholder="任务标签"
          v-bind="chipsProps"
        />
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
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
    '重要',
    '计划表',
    '养成习惯',
  ]

  const taskStatusOptions = [
    { title: t('tool-bar.filter.types.unfinished'), value: TaskStatus.UNFINISHED },
    { title: t('tool-bar.filter.types.finished'), value: TaskStatus.FINISHED },
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
