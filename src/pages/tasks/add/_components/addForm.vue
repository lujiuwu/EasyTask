<template>
  <div>
    <v-form>
      <v-container>
        <v-text-field
          v-model="title"
          label="任务名称"
          placeholder="任务名称不得少于三个字符"
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
        <AddSubItem :items="content" @add-sub-item="addSubItem" />
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { watch } from 'vue'
  import { TaskStatus } from '@/enum/task_status'
  import { TaskType } from '@/enum/task_type'
  import { TaskItemSchema } from '@/types/TaskItem'
  import AddSubItem from './addSubItem.vue'

  function addSubItem (item: TaskItem) {
    content.value.push(item)
  }

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

  const { defineField, errors, meta } = useForm({
    validationSchema: toTypedSchema(TaskItemSchema),
    initialValues: {
      title: '',
      type: TaskType.NORMAL,
      status: TaskStatus.UNFINISHED,
      content: [],
      chips: [],
    },
  })

  const [title, titleProps] = defineField('title')
  const [type, typeProps] = defineField('type')
  const [status, statusProps] = defineField('status')
  const [content] = defineField('content')

  // 监听字段变化和验证状态
  watch(title, newValue => {
    console.log('title changed:', newValue)
    console.log('title error:', titleProps.value.errorMessage)
    console.log('title valid:', !titleProps.value.errorMessage)
  })

  // 监听整个表单的验证状态
  watch(() => errors.value.title, isValid => {
    console.log('title error:', isValid)
  })
</script>

<style lang="scss" scoped>
</style>
