<template>
  <div>
    <v-alert
      v-model="show"
      closable
      icon="mdi-information-outline"
      style="padding: 5px!important;"
      type="info"
    >
      <span>{{ t('intro.alert.title') }}</span>
      <template #append>
        <v-btn class="mr-2px" density="compact" @click="handleStartIntro">{{ t('intro.alert.open') }}</v-btn>
        <v-btn density="compact" @click="show = false">{{ t('intro.alert.close') }}</v-btn>
      </template>
    </v-alert>
    <v-form>
      <v-container class="relative pb-0!">
        <v-row>
          <v-col class="p-0" cols="12">
            <v-text-field
              v-model="value"
              clearable
              :placeholder="t('pages.tasks.search.tasks')"
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
    <v-tabs
      v-model="tabIndex"
      center-active
      color="primary"
      height="35px"
      :items="tabs"
      @update:model-value="appStore.setTabIndex($event as string)"
    />
    <data-list />
    <public-add-button icon="mdi-plus" to="/tasks/add" />
    <public-add-button icon="mdi-star-box-multiple-outline" :initial-position="initialPosition" to="/tasks/star" />
  </div>
</template>

<script lang="tsx" setup>
  import { useDebounceFn } from '@vueuse/core'
  import _ from 'lodash'
  import DataList from '@/components/DataList/component.vue'
  import PublicAddButton from '@/components/PublicAddButton/component.vue'
  import { useTasksCache } from '@/composables/useTasksCache'
  import { getIntroConfig } from '@/data/intro'
  import { TaskType } from '@/enum/task_type'
  import { ToolBarOptions } from '@/enum/toolBar_options'
  import { useAppStore } from '@/stores/app'
  import { startIntro } from '@/utils/intro'

  const value = ref('')
  const showList = ref(false)
  const show = ref(true)
  const list = ref<{ title: string, to: string, supItem?: string }[]>([])

  const initialPosition = { x: window.innerWidth - 60, y: window.innerHeight - 200 }

  const { getCachedTasks } = useTasksCache()

  const introConfig = getIntroConfig(t as any)

  function handleStartIntro () {
    startIntro(introConfig.labels, introConfig.steps)
  }

  const handleSearch = useDebounceFn(() => {
    if (value.value === '') {
      list.value = []
      return
    }
    const cachedData = getCachedTasks() as any
    const currentTasks = _.flatMap((cachedData.pages as any[]), (page: any) => page.data)
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
  const tabs = ref([
    { text: t('pages.tasks.tabs.all'), value: TaskType.ALL },
    { text: t('pages.tasks.tabs.normal'), value: TaskType.NORMAL },
    { text: t('pages.tasks.tabs.schedule'), value: TaskType.SCHEDULE },
    { text: t('pages.tasks.tabs.important'), value: TaskType.IMPORTANT },
    { text: t('pages.tasks.tabs.daily'), value: TaskType.DAILY },
    { text: t('pages.tasks.tabs.work'), value: TaskType.WORK },
  ])
  const appStore = useAppStore()
  const tabIndex = computed(() => appStore.tabIndex)

  useHeader({
    title: () => t('pages.tasks.title'),
    options: [ToolBarOptions.FILTER, ToolBarOptions.LAYOUT, ToolBarOptions.SORT],
  })
</script>
<style lang="scss" scoped>
  .v-col {
    padding: 0 !important;
  }
</style>
