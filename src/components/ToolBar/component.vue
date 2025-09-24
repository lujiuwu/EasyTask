<template>
  <v-toolbar :density="'comfortable'" :elevation="8">
    <v-btn :disabled="!canGoBack" icon="mdi-arrow-left" @click="router.back()" />
    <v-btn :disabled="!canGoForward" icon="mdi-arrow-right" @click="router.forward()" />
    <v-toolbar-title class="text-h6">
      {{ router.currentRoute.value.meta.title }}
    </v-toolbar-title>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
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
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import router from '@/router'
  import { useAppStore } from '@/stores/app'
  const appStore = useAppStore()

  const r = useRouter()
  const filterItems = [
    { label: '全部任务', value: 'all', icon: 'mdi-format-list-checks' },
    { label: '未完成', value: 'undone', icon: 'mdi-format-list-bulleted' },
    { label: '已完成', value: 'done', icon: 'mdi-check' },
  ]
  const layoutItems = [
    { label: '列表', value: 'normal-list', icon: 'mdi-view-list' },
    { label: '瀑布流', value: 'water-fall', icon: 'mdi-view-grid' },
  ]
  function changeLayout (mode: string) {
    appStore.setLayoutMode(mode)
  }
  const canGoBack = ref(false)
  const canGoForward = ref(false)

  function updateNavigationState () {
    canGoBack.value = window.history.length > 1
    canGoForward.value = window.history.length > 1
  }
  r.afterEach(() => {
    updateNavigationState()
  })
</script>
