<template>
  <v-form>
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
      chips
      :items="chipsOptions"
      label="任务标签"
      multiple
      placeholder="任务标签"
      v-bind="chipsProps"
    />
  </v-form>
</template>
<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { TaskStatus, TaskType } from '@/enum/task'
  import { TaskItemSchema } from '@/types/TaskItem'
  import { chipsOptions, taskTypeOptions } from '../constants'

  const { resetForm: resetBaseInfoForm, defineField, errors, meta } = useForm({
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
    resetForm: resetBaseInfoForm,
  })
</script>
