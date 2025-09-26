<template>
  <div>
    <v-alert
      v-model="show"
      closable
      icon="mdi-information-outline"
      style="padding: 5px!important;"
      type="info"
    >
      <span>是否开启新手指引？</span>
      <template #append>
        <v-btn class="mr-2px" density="compact" @click="startIntro">开启</v-btn>
        <v-btn density="compact">关闭</v-btn>
      </template>
    </v-alert>
    <v-form>
      <v-container>
        <v-row>
          <v-col class="p-0" cols="12">
            <v-text-field
              v-model="value"
              clearable
              placeholder="搜索任务"
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <data-list />
    <add-task-button />
  </div>
</template>

<script lang="ts" setup>
  import introJs from 'intro.js'
  import { ref } from 'vue'
  import { AddTaskButton } from '@/components/AddTaskButton'
  import { DataList } from '@/components/DataList'
  definePage({
    meta: { key: 'mdi-format-list-checks', title: '任务' },
  })
  const value = ref('')
  const show = ref(true)

  function startIntro () {
    // 等待 DOM 渲染完成
    nextTick(() => {
      setTimeout(() => {
        const steps = [
          {
            element: '#layout-check-btn',
            title: '第一步',
            intro: '点击这里可以切换任务列表布局',
            position: 'bottom',
          },
        ]
        const intro = introJs()
        intro.setOptions({
          prevLabel: '上一步',
          nextLabel: '下一步',
          skipLabel: '跳过',
          doneLabel: '完成',
          steps,
        }).onbeforeexit(() => {
          show.value = false
        }).start()
      }, 100) // 延迟100ms确保任务项已渲染
    })
  }
</script>
<style lang="scss" scoped>
  .v-col {
    padding: 0 !important;
  }
</style>
