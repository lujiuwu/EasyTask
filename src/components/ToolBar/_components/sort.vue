<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon="mdi-sort" v-bind="props" />
    </template>
    <v-list>
      <v-list-item
        v-for="item in sortItems"
        :key="item.value"
        color="primary"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
  import { getSortItems } from '../constants'

  const sortItems = getSortItems(t)
</script>
