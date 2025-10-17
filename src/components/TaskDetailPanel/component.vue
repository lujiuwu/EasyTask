<template>
  <v-container class="p-0!">
    <draggable v-model="content!" @end="updateContent">
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
              <v-btn v-show="!element.done" class="mr-5px" color="blue" size="small">完成</v-btn>
              <v-btn class="mr-5px" color="red" size="small">删除</v-btn>
              <v-btn v-show="!element.done" color="green" size="small">编辑</v-btn>
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
  </v-container>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useDebounceFn } from '@vueuse/core'
  import draggable from 'vuedraggable'
  import { FinishDialog } from '@/components/FinishDialog'
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

  const updateContent = useDebounceFn(() => {
    emit('update:content', content.value)
  }, 1000)
</script>
<style scoped lang="scss">
  :deep(.v-list-item) {
    padding-inline: 10px !important;
  }
</style>
