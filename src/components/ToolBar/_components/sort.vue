<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon="mdi-sort" v-bind="props" />
    </template>
    <v-list>
      <v-list-item
        v-for="item in sortItems"
        :key="item.value"
        :append-icon="item.icon"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
  import { sortItems } from '../constants'
</script>
