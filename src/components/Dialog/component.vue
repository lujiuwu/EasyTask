<template>
  <v-dialog :model-value="props.modelValue" @update:model-value="updateModelValue">
    <template #default>
      <v-card>
        <v-card-title>{{ $t('tasks.items.delete.title', { title: props.info.title }) }}</v-card-title>
        <v-card-text>
          {{ $t('tasks.items.delete.content') }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updateModelValue(false)">{{ $t('tasks.items.delete.cancel') }}</v-btn>
          <v-btn color="error" @click="handleConfirm">{{ $t('tasks.items.delete.delete') }}</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  const appStore = useAppStore()
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    info: {
      type: Object as () => {
        title: string
        id: string
      },
      required: true,
    },
  })

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
  }>()

  function updateModelValue (value: boolean) {
    emit('update:modelValue', value)
  }

  function handleConfirm () {
    appStore.deleteTask(props.info.id)
    updateModelValue(false) // 关闭对话框
  }
</script>
