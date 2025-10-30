<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon="mdi-view-module" v-bind="props" />
    </template>
    <v-list>
      <v-list-item
        v-for="item in colItems"
        :key="item.value"
        :active="item.value === appStore.col"
        :append-icon="item.icon"
        color="primary"
        @click="handleCol(item.value)"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import { getColItems } from '../constants'

  const appStore = useAppStore()
  const colItems = getColItems(t)

  function handleCol (value: string) {
    appStore.setCol(value)
  }
</script>
