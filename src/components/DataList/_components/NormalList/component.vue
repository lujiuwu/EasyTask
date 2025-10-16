<template>
  <v-list>
    <v-list-item v-for="item in props.data" :key="item.title" class="mb-4">
      <v-expansion-panels variant="popout">
        <v-expansion-panel :eager="true">
          <v-expansion-panel-title style="font-weight: bold;">
            <template #default>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <h4>{{ item.title }}</h4>
                <div>
                  <v-chip
                    v-for="chip in item.chips"
                    :key="chip.label"
                    class="mr-1"
                    :color="chip.color"
                    :icon="chip.icon"
                    size="x-small"
                  >
                    {{ chip.label }}
                  </v-chip>
                </div>
              </div>
            </template>

            <template #actions>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text
            :style="{ backgroundColor: item.type }"
          >
            <TaskDetailPanel :data="item" :style="{ backgroundColor: item.type }" />
            <v-row>
              <v-col cols="1" offset="9">
                <v-btn variant="tonal" @click="handleDetail(item)">
                  详情
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useRouter } from 'vue-router'
  import { TaskDetailPanel } from '@/components/TaskDetailPanel'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  })
  const router = useRouter()

  function handleDetail (item: TaskItem) {
    router.push(`/tasks/${item.id}`)
  }
</script>
<style scoped lang="scss">
  .v-expansion-panel-text {
    border: 2px solid #eee;
    :deep(.v-expansion-panel-text__wrapper) {
      padding: 0 10px 10px !important;
    }
  }
</style>
