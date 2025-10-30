<template>
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
        :active="item.value === appStore.layoutMode"
        :append-icon="item.icon"
        color="primary"
        @click="changeLayout(item.value)"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import { getLayoutItems } from '../constants'

  const appStore = useAppStore()
  const layoutItems = getLayoutItems(t)

  function changeLayout (mode: string) {
    appStore.setLayoutMode(mode)
  }

</script>
