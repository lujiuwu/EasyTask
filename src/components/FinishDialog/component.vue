<template>
  <v-dialog
    fullscreen
    transition="dialog-bottom-transition"
  >
    <template #activator="{ props: activatorProps }">
      <span v-bind="activatorProps" class="color-red mr-2">{{ props.index+1 }}.</span>
      <span v-bind="activatorProps" :style="{textDecoration:props.item.done?'line-through red':'none'}">{{ props.item.text }}</span>
    </template>
    <template #default="{ isActive }">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">{{ item.done ? $t('tool-bar.filter.types.finished') + '任务子项' : '完成任务子项' }}</div>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="isActive.value = false"
          />
        </v-card-title>
        <v-card-subtitle>
          {{ props.item.text }}
        </v-card-subtitle>
        <v-card-text>
          <v-form :readonly="props.item.done">
            <v-text-field
              label="完成时间"
              suffix="UTC"
              type="time"
              :value="nowTime"
            />
            <v-textarea
              clearable
              label="备注"
              :model-value="props.item.remark||''"
              :rules="[(value: string) => {
                if(!value){
                  return '备注不能为空'
                }
                if (value.length > 100) {
                  return '备注不能超过100个字符'
                }
                return true
              }]"
            />
          </v-form>
          <v-row>
            <v-col cols="1" offset="6">
              <v-btn
                v-show="!props.item.done"
                variant="tonal"
                @click="isActive.value = false"
              >
                取消
              </v-btn>
            </v-col>
            <v-col cols="1" :offset="props.item.done ? 9 : 2">
              <v-btn variant="tonal" @click="handleFinish(isActive)">
                {{ props.item.done ? '关闭' : '完成' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
  import dayjs from 'dayjs'
  const props = defineProps<{
    index: number
    item: {
      text: string
      done: boolean
      remark?: string
    }
  }>()
  const nowTime = dayjs().format('HH:mm:ss')
  function handleFinish (isActive: any) {
    isActive.value = false
  }
</script>
