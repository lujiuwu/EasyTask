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
  import { computed } from 'vue'
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()
  const navigationItems = [
    { label: computed(() => t('footer-nav.tasks')), value: 'task', icon: 'mdi-format-list-checks', to: '/tasks' },
    { label: computed(() => t('footer-nav.milestones')), value: 'milestone', icon: 'mdi-flag-checkered', to: '/milestones' },
    { label: computed(() => t('footer-nav.setting')), value: 'settings', icon: 'mdi-cogs', to: '/setting' },
  ]
</script>
