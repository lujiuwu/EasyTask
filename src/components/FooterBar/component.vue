<template>
  <v-bottom-navigation class="flex" color="primary">
    <v-btn
      v-for="item in navigationItems"
      :key="item.value"
      class="flex-1"
      :to="item.to"
      :value="item.value"
    >
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ item.label }}</span>
    </v-btn>

  </v-bottom-navigation>
</template>

<script lang="ts" setup>
  const navigationItems = [
    { label: '任务', value: 'task', icon: 'mdi-format-list-checks', to: '/tasks' },
    { label: '设置', value: 'settings', icon: 'mdi-cogs', to: '/setting' },
  ]
</script>
