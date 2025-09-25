<template>
  <div style="border: 1px solid #eee;margin-bottom: 5px;padding: 2px;">
    <v-card :style="{ backgroundColor: taskTypeColor }">
      <v-card-title>{{ props.data.title }}</v-card-title>
      <v-card-subtitle class="mb-2">
        <span class="mr-2">共 {{ props.data.content.length }} 项</span>
        <span>
          <v-chip
            v-for="chip in props.data.chips"
            :key="chip.label"
            :color="chip.color"
            :icon="chip.icon"
            size="x-small"
          >
            {{ chip.label }}
          </v-chip>
        </span>
      </v-card-subtitle>
      <v-divider />
      <v-card-text style="cursor: pointer;padding: 5px;">
        <PublicContent :data="props.data" />
      </v-card-text>
      <template #actions>
        <v-row>
          <v-col cols="1" offset="6">
            <v-btn density="comfortable" variant="outlined" @click="$router.push(`/tasks/${props.data.id}`)">
              详情
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useTheme } from 'vuetify'
  import { PublicContent } from '@/components/DataList/_components/PublicContent'
  import { getTaskTypeColor } from '@/utils/theme'

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })

  const theme = useTheme()

  // 计算任务类型颜色
  const taskTypeColor = computed(() => {
    return getTaskTypeColor(props.data.type, theme.global.current.value.dark)
  })
</script>
