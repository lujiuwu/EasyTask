<template>
  <v-container class="p-0!">
    <draggable v-model="content!" item-key="key" @end="updateContent">
      <template #item="{ element, index }">
        <v-expansion-panels v-if="props.status === 'detail'">
          <v-expansion-panel>
            <v-expansion-panel-title class="pt-0! pb-0!">
              <v-card class="p-0! outline-none! shadow-none! bg-transparent!" @click="console.log(element)">
                <v-card-text class="p-0! outline-none! bg-transparent!">
                  <span class="color-red mr-2">{{ index+1 }}.</span>
                  <span :style="{textDecoration:element.done?'line-through red':'none'}">{{ element.text }}</span>
                </v-card-text>
              </v-card>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pt-5px">
              <v-btn
                v-show="!element.done"
                class="mr-5px"
                color="blue"
                size="small"
                @click="handleCreate(TaskActionModalType.FINISH)"
              >
                完成
              </v-btn>
              <v-btn class="mr-5px" color="red" size="small" @click="handleCreate(TaskActionModalType.DELETE)">删除</v-btn>
              <v-btn v-show="!element.done" color="green" size="small" @click="handleCreate(TaskActionModalType.EDIT)">编辑</v-btn>
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
  import { ref } from 'vue'
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
</style>
