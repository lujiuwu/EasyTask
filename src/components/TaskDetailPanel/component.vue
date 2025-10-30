<template>
  <v-container class="p-0!">
    <draggable
      ghost-class="ghost-item"
      item-key="key"
      :list="content"
      @end="updateContent"
    >
      <template #item="{ element, index }">
        <v-expansion-panels v-if="props.status === 'detail'">
          <v-expansion-panel>
            <v-expansion-panel-title class="pt-0! pb-0! shadow-none!">
              <span class="color-red mr-2">{{ index+1 }}.</span>
              <span :style="{textDecoration:element.done?'line-through red':'none'}">{{ element.text }}</span>
              <template #actions="{ expanded }">
                <v-icon :icon="expanded ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'" />
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pt-5px">
              <v-btn
                v-show="!element.done"
                class="mr-5px"
                color="blue"
                size="small"
                variant="tonal"
                @click="handleCreate(TaskActionModalType.FINISH)"
              >
                {{ t('pages.tasks.item.actions.finish') }}
              </v-btn>
              <v-btn
                class="mr-5px"
                color="red"
                size="small"
                variant="tonal"
                @click="handleCreate(TaskActionModalType.DELETE)"
              >
                {{ t('pages.tasks.item.actions.delete') }}
              </v-btn>
              <v-btn
                v-show="!element.done"
                color="green"
                size="small"
                variant="tonal"
                @click="handleCreate(TaskActionModalType.EDIT)"
              >
                {{ t('pages.tasks.item.actions.edit') }}
              </v-btn>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card v-else class="bg-transparent! shadow-none! border-thin mb-2px">
          <v-card-text class="p-8px! outline-none! bg-transparent!">
            <FinishDialog :index="index" :item="element" />
          </v-card-text>
        </v-card>
      </template>
    </draggable>
    <TaskActionModal :open="show" :type="type" @update:open="updateShow" />
  </v-container>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useDebounceFn } from '@vueuse/core'
  import draggable from 'vuedraggable'
  import { FinishDialog } from '@/components/FinishDialog'
  import { TaskActionModalType } from './_modals/constants'
  import { TaskActionModal } from './_modals/TaskActionModal'

  const props = defineProps({
    data: {
      type: Object,
    },
    status: {
      type: String as PropType<'detail' | 'public'>,
      default: 'detail',
    },
  })
  const content = ref<TaskItem[]>(props.data!.content!)
  const emit = defineEmits<{
    'update:content': [value: TaskItem[]]
  }>()
  const type = ref<TaskActionModalType>(TaskActionModalType.FINISH)
  const show = ref(false)
  const updateContent = useDebounceFn(() => {
    emit('update:content', content.value)
  }, 1000)

  function handleCreate (actionType: TaskActionModalType) {
    show.value = true
    type.value = actionType
  }
  function updateShow (value: boolean) {
    show.value = value
  }
</script>
<style scoped lang="scss">
  :deep(.v-list-item) {
    padding-inline: 10px !important;
  }

  .ghost-item {
    opacity: 0.7;
    border:1px solid rgb(137, 187, 185);
  }
</style>
