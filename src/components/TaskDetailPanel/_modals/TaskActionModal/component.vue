<template>
  <v-dialog :model-value="props.open" @update:model-value="updateOpen">
    <v-card>
      <v-card-title>
        {{ t(`pages.tasks.item.actions.${props.type}`) }}
      </v-card-title>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
  import type { TaskActionModalType } from '../constants'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<TaskActionModalType>,
      required: true,
    },
  })
  const emit = defineEmits(['update:open'])
  function updateOpen (value: boolean) {
    emit('update:open', value)
  }
</script>
