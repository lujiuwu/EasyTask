<template>
  <v-toolbar
    class="fixed-toolbar"
    color="surface"
    :density="'comfortable'"
    :elevation="8"
  >
    <v-btn :disabled="!canGoBack" icon="mdi-arrow-left" @click="router.back()" />
    <v-toolbar-title class="text-h6">
      {{ router.currentRoute.value.meta.title }}
    </v-toolbar-title>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          id="layout-check-btn"
          icon="mdi-view-module"
          v-bind="props"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="item in layoutItems"
          :key="item.value"
          :append-icon="item.icon"
          @click="changeLayout(item.value)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          icon="mdi-filter"
          v-bind="props"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="item in filterItems"
          :key="item.value"
          :append-icon="item.icon"
          @click="handleFilter(item.value)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script lang="ts" setup>
  import _ from 'lodash'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { TaskStatus } from '@/enum/task_status'
  import router from '@/router'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
  const r = useRouter()

  const filterItems = [
    { label: '全部任务', value: TaskStatus.ALL, icon: 'mdi-format-list-checks' },
    { label: '未完成', value: TaskStatus.UNFINISHED, icon: 'mdi-format-list-bulleted' },
    { label: '已完成', value: TaskStatus.FINISHED, icon: 'mdi-check' },
  ]
  const layoutItems = [
    { label: '列表', value: 'normal-list', icon: 'mdi-view-list' },
    { label: '瀑布', value: 'water-fall', icon: 'mdi-view-grid' },
  ]
  function changeLayout (mode: string) {
    appStore.setLayoutMode(mode)
  }

  const canGoBack = ref(false)

  function updateNavigationState () {
    canGoBack.value = window.history.state?.back
  }

  function handleFilter (value: string) {
    appStore.setFilter(value)
  }

  r.afterEach(() => {
    updateNavigationState()
  })

</script>

<style scoped>
.fixed-toolbar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}
</style>
