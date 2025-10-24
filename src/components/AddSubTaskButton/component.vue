<template>
  <v-bottom-sheet :model-value="open" @update:model-value="open = $event">
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" class="mt-10px" color="primary" variant="flat">
        {{ t('pages.tasks.item.detail.add-sub-task') }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        {{ t('pages.tasks.item.detail.add-sub-task') }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="value" label="子任务内容" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="flat" @click="open = false">
          {{ t('pages.tasks.item.detail.add-sub-task') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<script lang="ts" setup>
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()
  const open = ref(false)
  const value = ref('')
</script>
