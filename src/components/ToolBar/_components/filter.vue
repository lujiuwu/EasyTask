<template>
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
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import { useI18n } from '@/composables/useI18n'
  import { getFilterItems } from '../constants'

  const appStore = useAppStore()
  const { t } = useI18n()
  const filterItems = getFilterItems(t)

  function handleFilter (value: string) {
    appStore.setFilter(value)
  }
</script>
