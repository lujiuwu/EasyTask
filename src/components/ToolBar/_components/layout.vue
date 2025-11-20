<template>
  <v-btn
    id="layout-check-btn"
    :icon="appStore.layoutMode === 'water-fall' ? 'mdi-view-grid' : 'mdi-view-list'"
    @click="changeLayout()"
  />
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()

  function changeLayout () {
    appStore.setLayoutMode(appStore.layoutMode === 'water-fall' ? 'normal-list' : 'water-fall')
  }

</script>
