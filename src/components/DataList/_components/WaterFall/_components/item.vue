<template>
  <div style="border: 1px solid #eee;margin-bottom: 5px;padding: 2px;">
    <v-card :style="{ backgroundColor: taskTypeColor }">
      <v-overlay
        class="color-white align-center justify-center"
        contained
        :model-value="props.data.status === TaskStatus.FINISHED"
      >
        <v-card-title>已完成</v-card-title>
      </v-overlay>
      <v-card-title>{{ props.data.title }}</v-card-title>
      <v-card-subtitle class="mb-2 p-5px!">
        <span class="ml-2">共 {{ props.data.content.length }} 项</span>
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
          <v-col cols="1">
            <v-icon color="red" @click="handleStar">{{ icon }}</v-icon>
          </v-col>
          <v-col cols="1">
            <v-icon @click="handleDelete">mdi-trash-can-outline</v-icon>
          </v-col>
          <v-col cols="2" offset="4">
            <v-btn density="comfortable" variant="outlined" @click="$router.push(`/tasks/${props.data.id}`)">
              详情
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card>
    <Dialog
      :info="{ title: props.data.title, id: props.data.id }"
      :model-value="showDialog"
      @update:model-value="updateShowDialog"
    />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useTheme } from 'vuetify'
  import { PublicContent } from '@/components/DataList/_components/PublicContent'
  import { Dialog } from '@/components/Dialog'
  import { TaskStatus } from '@/enum/task_status'
  import { getTaskTypeColor } from '@/utils/theme'

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })

  const theme = useTheme()

  const icon = ref('mdi-heart-outline')

  const showDialog = ref(false)
  function updateShowDialog (value: boolean) {
    showDialog.value = value
  }

  // 计算任务类型颜色
  const taskTypeColor = computed(() => {
    return getTaskTypeColor(props.data.type, theme.global.current.value.dark)
  })

  function handleStar () {
    icon.value = icon.value === 'mdi-heart-outline' ? 'mdi-heart' : 'mdi-heart-outline'
  }

  function handleDelete () {
    console.log(props.data.id)
    showDialog.value = true
  }
</script>
