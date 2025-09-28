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
        <v-btn density="compact" @click="show = false">关闭</v-btn>
      </template>
    </v-alert>
    <v-form>
      <v-container class="relative">
        <v-row>
          <v-col class="p-0" cols="12">
            <v-text-field
              v-model="value"
              clearable
              placeholder="搜索任务"
              prepend-inner-icon="mdi-magnify"
              @update:model-value="handleSearch"
            />
          </v-col>
        </v-row>
        <v-row
          v-show="showList"
          class="absolute top-14 left-[-1] w-full z-10"
        >
          <v-col cols="12">
            <v-list>
              <v-list-item
                v-for="item in list"
                :key="item.title"
                :to="item.to"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="item.supItem">
                  {{ item.supItem }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <data-list />
    <add-task-button />
  </div>
</template>

<script lang="ts" setup>
  import { useDebounceFn } from '@vueuse/core'
  import introJs from 'intro.js'
  import { ref } from 'vue'
  import { AddTaskButton } from '@/components/AddTaskButton'
  import { DataList } from '@/components/DataList'
  import { useAppStore } from '@/stores/app'
  definePage({
    meta: { key: 'mdi-format-list-checks', title: '任务' },
  })
  const value = ref('')
  const show = ref(true)
  const showList = ref(false)
  const list = ref<{ title: string, to: string, supItem?: string }[]>([])
  const appStore = useAppStore()

  function startIntro () {
    // 等待 DOM 渲染完成
    nextTick(() => {
      setTimeout(() => {
        const steps = [
          {
            element: '#layout-check-btn',
            title: '第一步',
            intro: '点击这里可以切换任务列表布局',
            position: 'bottom' as const,
          },
        ]
        const intro = introJs()
        intro.setOptions({
          prevLabel: '上一步',
          nextLabel: '下一步',
          skipLabel: '跳过',
          doneLabel: '完成',
          steps,
        }).onbeforeexit((): boolean => {
          show.value = false
          return true
        }).start()
      }, 100) // 延迟100ms确保任务项已渲染
    })
  }
  // 原始搜索函数
  function performSearch () {
    list.value = appStore.filterItem(value.value)
    console.log(list.value)
    showList.value = list.value.length > 0
  }

  const handleSearch = useDebounceFn(performSearch, 300)
</script>
<style lang="scss" scoped>
  .v-col {
    padding: 0 !important;
  }
</style>
