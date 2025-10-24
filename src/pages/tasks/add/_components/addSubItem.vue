<template>
  <div class="mb-30px">
    <v-bottom-sheet :model-value="open" @update:model-value="open = $event">
      <template #activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">新增子任务</v-btn>
      </template>
      <v-card>
        <v-card-title>新增子任务</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="value" label="子任务内容" />
            <v-btn @click="addSubItem">提交</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
    <v-card class="mt-5">
      <v-table
        density="compact"
        fixed-header
        height="400px"
        striped="even"
      >
        <thead>
          <tr>
            <th class="text-left">
              id
            </th>
            <th class="text-left">
              子任务内容
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in content"
            :key="item.key"
          >
            <td>{{ index+1 }}</td>
            <td>{{ item.text }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import { v4 as uuidv4 } from 'uuid'
  import { useForm } from 'vee-validate'
  import { TaskItemSchema } from '@/types/TaskItem'

  const { defineField, meta, errors } = useForm({
    validationSchema: toTypedSchema(TaskItemSchema),
    initialValues: {
      content: [],
    },
  })

  const value = ref('')
  const [content] = defineField('content')
  const open = ref(false)

  function addSubItem () {
    content.value?.push({
      text: value.value,
      key: uuidv4(),
      done: false,
      finishTime: '',
      remark: '',
    })
    value.value = '' // 清空输入框
    open.value = false // 关闭底部表单
  }

  defineExpose({
    isValid: computed(() => meta.value.valid),
    errors: errors,
    formData: computed(() => ({
      content: content.value,
    })),
  })
</script>
