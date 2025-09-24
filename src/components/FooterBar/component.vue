<template>
  <v-bottom-navigation class="flex">
    <v-btn v-for="item in navigationItems" :key="item.value" class="flex-1" :value="item.value">
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ item.label }}</span>
    </v-btn>

  </v-bottom-navigation>
</template>

<script lang="ts" setup>
  const navigationItems = [
    { label: '首页', value: 'home', icon: 'mdi-home' },
    { label: '任务', value: 'task', icon: 'mdi-format-list-checks' },
    { label: '设置', value: 'settings', icon: 'mdi-cogs' },
  ]
</script>
