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
            <v-list class="max-h-[300px] overflow-y-auto border-b-md">
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
    <public-add-button to="/tasks/add" />
  </div>
</template>

<script lang="ts" setup>
  import { useDebounceFn } from '@vueuse/core'
  import _ from 'lodash'
  import { ref } from 'vue'
  import { DataList, PublicAddButton } from '@/components'
  import { useTasksCache } from '@/composables/useTasksCache'
  import { startIntro } from '@/utils/intro'

  definePage({
    meta: { key: 'mdi-format-list-checks', title: '任务' },
  })
  const value = ref('')
  const showList = ref(false)
  const list = ref<{ title: string, to: string, supItem?: string }[]>([])

  const { getCachedTasks } = useTasksCache()

  const handleSearch = useDebounceFn(() => {
    if (value.value === '') {
      list.value = []
      return
    }
    const currentTasks = _.flatMap(getCachedTasks().pages, page => page.data)
    // eslint-disable-next-line unicorn/no-array-for-each
    _.forEach(currentTasks, item => {
      if (item.title.includes(value.value)) {
        list.value.push({ title: item.title, to: `/tasks/${item.id}` })
      }
      if (item.content) {
        // eslint-disable-next-line unicorn/no-array-for-each
        _.forEach(item.content, subItem => {
          if (subItem.text.includes(value.value)) {
            list.value.push({ title: subItem.text, supItem: item.title, to: `/tasks/${subItem.id}` })
          }
        })
      }
    })
    showList.value = list.value.length > 0
  }, 300)
</script>
<style lang="scss" scoped>
  .v-col {
    padding: 0 !important;
  }
</style>
