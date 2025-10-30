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
        :active="item.value === appStore.filter"
        :append-icon="item.icon"
        color="primary"
        @click="handleFilter(item.value)"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import { getFilterItems } from '../constants'

  const appStore = useAppStore()
  const filterItems = getFilterItems(t)

  function handleFilter (value: string) {
    appStore.setFilter(value)
  }
</script>
<style scoped lang="scss">

</style>
