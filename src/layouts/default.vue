<template>
  <ToolBar />
  <v-main class="main-with-toolbar">
    <router-view />
  </v-main>
  <FooterBar />
</template>

<script lang="ts" setup>
  import { FooterBar, ToolBar } from '@/components'
</script>

<style scoped>
.main-with-toolbar {
  padding-top: 64px !important; /* 工具栏高度 */
}
</style>
