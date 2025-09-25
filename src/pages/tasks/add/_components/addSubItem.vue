<template>
  <div>
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
    <v-table
      class="mt-5"
      density="compact"
      fixed-header
      height="200px"
      striped="even"
      style="border: 1px solid #ccc;"
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
          v-for="(item, index) in props.items"
          :key="item.key"
        >
          <td>{{ index+1 }}</td>
          <td>{{ item.text }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { v4 as uuidv4 } from 'uuid'
  import { ref } from 'vue'

  const value = ref('')
  const open = ref(false)

  const props = defineProps<{
    items: TaskItem[]
  }>()

  const emit = defineEmits<{
    'add-sub-item': [item: TaskItem]
  }>()

  function addSubItem () {
    emit('add-sub-item', {
      text: value.value,
      key: uuidv4(),
      done: false,
      finishTime: '',
      remark: '',
    })
    value.value = '' // 清空输入框
    open.value = false // 关闭底部表单
  }
</script>
