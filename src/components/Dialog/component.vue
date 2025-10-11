<template>
  <v-dialog :model-value="props.modelValue" @update:model-value="updateModelValue">
    <template #default>
      <v-card>
        <v-card-title class="text-wrap">{{ $t('pages.tasks.item.delete.title', { title: props.info.title }) }}</v-card-title>
        <v-card-text>
          {{ $t('pages.tasks.item.delete.content') }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updateModelValue(false)">{{ $t('pages.tasks.item.delete.cancel') }}</v-btn>
          <v-btn color="error" @click="handleConfirm">{{ $t('pages.tasks.item.delete.delete') }}</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
  // import { useAppStore } from '@/stores/app'
  // const appStore = useAppStore()
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
    // TODO: 实现删除任务的逻辑
    console.log('删除任务:', props.info.id)
    updateModelValue(false) // 关闭对话框
  }
</script>

<style scoped>
.text-wrap {
  white-space: normal !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
  line-height: 1.4 !important;
}
</style>
