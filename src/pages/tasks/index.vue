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
    <SearchWithHL />
    <v-tabs
      v-model="tabIndex"
      center-active
      color="primary"
      height="35px"
      :items="tabs"
      @update:model-value="appStore.setTabIndex($event as string)"
    />
    <v-divider />
    <data-list class="bg-[#eee] h-[calc(100vh-100px)]" />
  </div>
</template>

<script lang="tsx" setup>
  import _ from 'lodash'
  import DataList from '@/components/DataList/component.vue'
  import { getIntroConfig } from '@/data/intro'
  import { TaskType } from '@/enum/task_type'
  import { ToolBarOptions } from '@/enum/toolBar_options'
  import { useAppStore } from '@/stores/app'
  import { startIntro } from '@/utils/intro'
  import SearchWithHL from './_components/SearchWithHL.vue'

  const { t } = useI18n()
  const show = ref(true)

  const introConfig = getIntroConfig(t as any)

  function handleStartIntro () {
    startIntro(introConfig.labels, introConfig.steps)
  }

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
